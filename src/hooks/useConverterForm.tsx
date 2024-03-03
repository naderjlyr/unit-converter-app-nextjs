import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useConverterStore from "@/store/useConverterStore";
import { converterCategories } from "@/config/convertersConfig";
import { z } from "zod";
import useDebounce from "./useDebounce";
import { ConverterType } from "@/types";

const useConverterForm = () => {
  const { currentConverter, convert, isLoading, outputValue } =
    useConverterStore();

  const getSchema = (currentConverter: ConverterType) => {
    const category = converterCategories.find((c) =>
      c.subCategories.some((s) => s.name === currentConverter)
    );
    return (
      category?.subCategories.find((sub) => sub.name === currentConverter)
        ?.validationSchema || z.object({})
    );
  };
  useEffect(() => {
    const schema = getSchema(currentConverter);
  }, [currentConverter]);
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(getSchema(currentConverter)),
    mode: "onChange",
    defaultValues: {
      inputValue: "",
    },
  });

  const inputValue = watch("inputValue");
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedInputValue) {
      convert(debouncedInputValue);
    }
  }, [debouncedInputValue, convert]);

  return {
    register,
    errors,
    isLoading,
    outputValue,
    setValue,
    currentConverter,
  };
};

export default useConverterForm;
