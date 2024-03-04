"use client";
import { Card, Label, TextInput, Spinner, Alert } from "flowbite-react";
import useConverterForm from "@/hooks/useConverterForm";
import { motion } from "framer-motion";
import { alertVariants, formAnimations } from "@/config/animations";
import { HiInformationCircle } from "react-icons/hi";

const ConverterForm = () => {
  const { register, errors, isLoading, outputValue, currentConverter } =
    useConverterForm();

  return (
    <motion.div initial="hidden" animate="visible" variants={formAnimations}>
      <Card>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-black">
            cFlox Converter
          </h2>
          <form className="flex flex-col gap-4 md:flex-row md:gap-6 text-black">
            <div className="flex-1">
              <Label htmlFor="inputValue">Enter Value to Convert</Label>
              <TextInput
                {...register("inputValue")}
                cy-test-id="test-input-value"
                id="inputValue"
                type="text"
                placeholder={`Type here to convert from ${currentConverter.split(" to ")[0]}`}
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
                value={outputValue}
                readOnly
                aria-label="Output value"
                className={`bg-gray-100 ${isLoading ? "opacity-50" : "opacity-100"}`}
              />
              {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50">
                  <Spinner size="md" aria-label="Loading" />
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
              <Alert
                color="failure"
                className="mt-4"
                icon={HiInformationCircle}
              >
                {errors.inputValue.message}
              </Alert>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default ConverterForm;
