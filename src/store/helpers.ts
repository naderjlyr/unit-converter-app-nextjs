import { ConverterCategory } from "@/types";
import { converterCategories } from "@/config";

export const findCategoryByName = (
  categoryName: string
): ConverterCategory | undefined =>
  converterCategories.find((c) => c.name === categoryName);

export const findSubCategoryByName = (
  categoryName: string,
  subCategoryName: string
) =>
  findCategoryByName(categoryName)?.subCategories.find(
    (sub) => sub.name === subCategoryName
  );
