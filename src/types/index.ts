import { FC, SVGProps } from "react";
import { z } from "zod";
import { converterFunctions } from "@/utils";

export type ConverterFunction = (input: string) => string;

export type ConverterType = keyof typeof converterFunctions;

export type ConverterSubCategory = {
  name: string;
  converterFunction: ConverterFunction;
  validationSchema: z.ZodSchema<any>;
};

export type ConverterCategory = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  subCategories: ConverterSubCategory[];
};
