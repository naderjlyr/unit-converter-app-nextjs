import { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useDebounce from "@/hooks/useDebounce";
import useConverterStore from "@/store/useConverterStore";
import { z } from "zod";
import fetchConversion from "@/utils/apiCall";
import { converterCategories } from "@/config";
import { ApiRequest, ConverterEndpoint } from "@/types/api";

export type FormDataType = {
  formValue: string;
};

const useConverterForm = () => {
  const [outputValue, setOutputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { currentConverterEndpoint, currentConverterName } = useConverterStore(
    (state) => ({
      currentConverterEndpoint: state.currentConverterEndpoint,
      currentConverterName: state.currentConverterName,
    })
  );

  const getSchema = (currentConverterEndpoint: ConverterEndpoint | null) => {
    if (!currentConverterEndpoint) return z.object({});
    const category = converterCategories.find((c) =>
      c.subCategories.some((sub) => sub.endpoint === currentConverterEndpoint)
    );
    return (
      category?.subCategories.find(
        (sub) => sub.endpoint === currentConverterEndpoint
      )?.validationSchema || z.object({})
    );
  };

  const formMethods = useForm<FormDataType>({
    defaultValues: { formValue: "" },
    resolver: zodResolver(getSchema(currentConverterEndpoint)),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;

  useEffect(() => {
    reset({ formValue: "" });
    setOutputValue("");
  }, [currentConverterEndpoint, reset]);

  const inputValue = watch("formValue");
  const debouncedInputValue = useDebounce(inputValue, 500);

  const onSubmit = useCallback(async () => {
    if (!currentConverterEndpoint || isLoading || !debouncedInputValue) return;
    setIsLoading(true);
    try {
      const result = await fetchConversion(
        currentConverterEndpoint,
        debouncedInputValue
      );
      setOutputValue(result);
    } catch (error) {
      console.error("Error during conversion:", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentConverterEndpoint, isLoading, debouncedInputValue]);

  return {
    register,
    errors,
    isLoading,
    currentConverterName,
    outputValue,
    setIsLoading,
    setOutputValue,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default useConverterForm;
