import { FC, SVGProps } from "react";
import { z } from "zod";
import { ConverterEndpoint } from "./api";

export type ConverterFunction = (input: string) => Promise<string>;

export type ConverterSubCategory = {
  name: string;
  validationSchema: z.ZodSchema<any>;
  icon: FC<SVGProps<SVGSVGElement>>;
  endpoint: ConverterEndpoint;
};

export type ConverterCategory = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subCategories: ConverterSubCategory[];
};
