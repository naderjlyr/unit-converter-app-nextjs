"use client";
import { ChangeEvent, useState, useEffect } from "react";
import { Label, TextInput, Spinner, Alert } from "flowbite-react";
import useConverterStore from "@/store/useConverterStore";
import useDebounce from "@/hooks/useDebounce";

const ConverterForm = () => {
  const {
    currentConverter,
    inputValue,
    outputValue,
    setInputValue,
    isLoading,
    errorMessage,
    successMessage,
    convert,
  } = useConverterStore();
  const [tempInput, setTempInput] = useState(inputValue);
  const debouncedInput = useDebounce(tempInput, 500);

  useEffect(() => {
    if (debouncedInput !== inputValue) {
      setInputValue(debouncedInput);
      convert();
    }
  }, [debouncedInput, setInputValue, convert]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempInput(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label
          htmlFor="inputValue"
          value={`Enter ${currentConverter.split(" to ")[0]}`}
        />
        <TextInput
          id="inputValue"
          type="text"
          placeholder={`Enter ${currentConverter.split(" to ")[0]}`}
          value={tempInput}
          onChange={handleInputChange}
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner size="md" />
        </div>
      ) : (
        <div>
          <Label
            htmlFor="outputValue"
            value={`${currentConverter.split(" to ")[1]} Result`}
          />
          <TextInput
            id="outputValue"
            type="text"
            placeholder={`${currentConverter.split(" to ")[1]} Result`}
            value={outputValue}
            readOnly
          />
        </div>
      )}
      {errorMessage && <Alert color="failure">{errorMessage}</Alert>}
      {successMessage && <Alert color="success">{successMessage}</Alert>}
    </div>
  );
};

export default ConverterForm;
