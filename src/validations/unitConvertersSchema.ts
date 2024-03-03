import { z } from "zod";

export const kilogramToPoundSchema = z.object({
  inputValue: z
    .string()
    .regex(/^[0-9]*(\.[0-9]+)?$/, "Input must be a non-negative number"),
});

export const centimeterToInchSchema = z.object({
  inputValue: z
    .string()
    .regex(/^[0-9]*(\.[0-9]+)?$/, "Input must be a non-negative number"),
});
