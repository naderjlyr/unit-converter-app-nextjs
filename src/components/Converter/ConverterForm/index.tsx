"use client";
import { Card, Label, TextInput, Spinner, Alert } from "flowbite-react";
import useConverterForm from "@/hooks/useConverterForm";
import { motion } from "framer-motion";
import { alertVariants, formAnimations } from "@/config/animations";
import { HiInformationCircle } from "react-icons/hi";

const ConverterForm = () => {
  const { register, errors, isLoading, outputValue, currentConverter } =
    useConverterForm();
  console.log("clicked rendered");
  return (
    <motion.div initial="hidden" animate="visible" variants={formAnimations}>
      <div className="p-4">
        <form className="converter-form flex flex-col gap-4 md:flex-row md:gap-6 text-black">
          <div className="flex-1">
            <Label htmlFor="inputValue">Enter Value to Convert</Label>
            <TextInput
              {...register("inputValue")}
              cy-test-id="test-input-value"
              id="inputValue"
              data-cy="test-input-value"
              type="text"
              placeholder={` ${currentConverter.split(" to ")[0]} value`}
              disabled={isLoading}
              color={errors.inputValue?.message ? "failure" : "gray"}
              aria-label="Input value"
            />
          </div>
          <div className="flex-1 relative">
            <Label htmlFor="outputValue">Converted Value</Label>
            <TextInput
              id="outputValue"
              type="text"
              data-cy="test-output-value"
              value={outputValue}
              readOnly
              aria-label="Output value"
              className={`bg-gray-100 ${isLoading ? "opacity-50" : "opacity-100"}`}
            />
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50">
                <Spinner
                  className="form-spinner"
                  size="md"
                  aria-label="Loading"
                />
              </div>
            )}
          </div>
        </form>
        {errors.inputValue && (
          <motion.div
            variants={alertVariants}
            initial="hidden"
            animate="visible"
          >
            <Alert color="failure" className="mt-4" icon={HiInformationCircle}>
              {errors.inputValue.message}
            </Alert>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ConverterForm;
