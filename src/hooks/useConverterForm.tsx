import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useConverterStore from "@/store/useConverterStore";
import { converterCategories } from "@/config";
import useDebounce from "./useDebounce";
import { ConverterType } from "@/types";
import { z } from "zod";

const useConverterForm = () => {
  const { currentConverter, convert, outputValue } = useConverterStore();
  const [localLoading, setLocalLoading] = useState(false);

  const getSchema = (currentConverter: ConverterType) => {
    const category = converterCategories.find((c) =>
      c.subCategories.some((s) => s.name === currentConverter)
    );
    return (
      category?.subCategories.find((sub) => sub.name === currentConverter)
        ?.validationSchema || z.object({})
    );
  };

  const formMethods = useForm({
    resolver: zodResolver(getSchema(currentConverter)),
    mode: "onChange",
    defaultValues: {
      inputValue: "",
    },
  });

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = formMethods;

  const inputValue = watch("inputValue");
  const debouncedInputValue = useDebounce(inputValue, 600);

  useEffect(() => {
    if (debouncedInputValue && isValid) {
      setLocalLoading(true);
      const timer = setTimeout(() => {
        convert(debouncedInputValue);
        setLocalLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [debouncedInputValue, convert, isValid]);

  useEffect(() => {
    reset({ inputValue: "" });
  }, [currentConverter, reset]);

  return {
    register,
    handleSubmit,
    errors,
    isLoading: localLoading,
    outputValue,
    setValue,
    currentConverter,
    formMethods,
  };
};

export default useConverterForm;
