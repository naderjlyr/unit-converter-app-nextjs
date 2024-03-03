"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Label, TextInput, Spinner } from "flowbite-react";
import useConverterStore from "@/store/useConverterStore";
import useDebounce from "@/hooks/useDebounce";

const ConverterForm = () => {
  const {
    currentConverter,
    setInputValue,
    isLoading,
    convert,
    outputValue,
    resetText,
  } = useConverterStore();

  const [inputValue, setInput] = useState("");
  const debouncedInput = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedInput !== "") {
      setInputValue(debouncedInput);
      convert();
    }
  }, [debouncedInput, setInputValue, convert]);

  useEffect(() => {
    resetText();
    setInput("");
  }, [currentConverter, resetText]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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
          value={inputValue}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </div>
      {isLoading ? (
        <Spinner size="md" className="self-center" />
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
    </div>
  );
};

export default ConverterForm;
