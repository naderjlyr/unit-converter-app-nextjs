import { z } from "zod";

export const decimalToRomanSchema = z.object({
  inputValue: z.string().regex(/^\d+$/, "Input must be a non-negative integer"),
});

export const binaryToRomanSchema = z.object({
  inputValue: z.string().regex(/^[01]+$/, "Input must be a binary number"),
});