"use client";
import { Card, Label, TextInput, Spinner, Alert, Button } from "flowbite-react";
import useConverterForm from "@/hooks/useConverterForm";
import { motion } from "framer-motion";
import { alertVariants, formAnimations } from "@/config/animations";
import { HiInformationCircle } from "react-icons/hi";

const ConverterForm = () => {
  const {
    register,
    errors,
    isLoading,
    outputValue,
    onSubmit,
    currentConverterName,
  } = useConverterForm();
  return (
    <motion.div initial="hidden" animate="visible" variants={formAnimations}>
      <div className="p-4">
        <form
          onSubmit={onSubmit}
          className="p-4 flex flex-col gap-4 md:flex-row md:gap-6 text-black"
        >
          <div className="flex-1">
            <Label htmlFor="formValue">Enter Value to Convert</Label>
            <TextInput
              {...register("formValue", { required: true })}
              cy-test-id="test-input-value"
              id="formValue"
              type="text"
              placeholder="Enter Your value"
              disabled={isLoading}
              color={errors.formValue?.message ? "failure" : "gray"}
              aria-label="Input value"
            />
          </div>
          <div className="flex items-end pb-4 md:pb-0">
            <Button type="submit" disabled={isLoading}>
              Convert
            </Button>
          </div>
          <div className="flex-1 relative">
            <Label htmlFor="outputValue">Converted Value</Label>
            <TextInput
              id="outputValue"
              type="text"
              value={outputValue || ""}
              readOnly={true}
              disabled={isLoading}
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
        {errors.formValue && (
          <motion.div
            variants={alertVariants}
            initial="hidden"
            animate="visible"
          >
            <Alert color="failure" className="mt-4" icon={HiInformationCircle}>
              {errors.formValue.message}
            </Alert>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ConverterForm;
