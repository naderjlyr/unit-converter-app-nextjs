"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import useConverterStore from "@/store/useConverterStore";
import useDebounce from "@/hooks/useDebounce";

function ConverterForm() {
  const { inputValue, outputValue, setInputValue, convert } =
    useConverterStore();
  const [tempInput, setTempInput] = useState("");
  const debouncedInput = useDebounce(tempInput, 500);

  useEffect(() => {
    if (debouncedInput) {
      setInputValue(debouncedInput);
      convert();
    } else {
      setInputValue("");
      convert();
    }
  }, [debouncedInput, setInputValue, convert]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempInput(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor="inputValue" value="Input Value" />
        <TextInput
          id="inputValue"
          type="text"
          placeholder="Enter value to convert"
          value={tempInput}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="outputValue" value="Output Value" />
        <TextInput
          id="outputValue"
          type="text"
          placeholder="Conversion result"
          value={outputValue}
          readOnly
        />
      </div>
    </div>
  );
}

export default ConverterForm;
