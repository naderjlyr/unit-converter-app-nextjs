"use client";
import { Label, TextInput, Spinner } from "flowbite-react";
import useConverterForm from "@/hooks/useConverterForm";

const ConverterForm = () => {
  const { register, errors, isLoading, outputValue, currentConverter } =
    useConverterForm();

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="inputValue" />
        <TextInput
          {...register("inputValue")}
          id="inputValue"
          type="text"
          placeholder={`Enter ${currentConverter.split(" to ")[0]}`}
          disabled={isLoading}
          className={errors.inputValue && "border-red-500"}
          helperText={
            errors.inputValue ? errors.inputValue.message : "Enter your "
          }
        />
      </div>
      {isLoading ? (
        <Spinner size="md" className="self-center" />
      ) : (
        <div>
          <Label htmlFor="outputValue" />
          <TextInput
            id="outputValue"
            type="text"
            value={outputValue}
            readOnly
          />
        </div>
      )}
    </form>
  );
};

export default ConverterForm;
