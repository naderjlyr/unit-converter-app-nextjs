import { numberConverters } from "@/utils";
import { FC, SVGProps } from "react";
import { z } from "zod";

export type ConverterFunction = (input: string) => string;

export type ConverterType = keyof typeof numberConverters;

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
