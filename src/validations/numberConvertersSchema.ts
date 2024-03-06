import { z } from "zod";

export const decimalToRomanSchema = z.object({
  inputValue: z
    .string()
    .regex(
      /^\d+$/,
      "Input must be a positive number or zero, no other characters are accepted"
    ),
});

export const binaryToRomanSchema = z.object({
  inputValue: z.string().regex(/^[01]+$/, "Input must be a binary number"),
});
