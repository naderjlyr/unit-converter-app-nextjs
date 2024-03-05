import { converterCategories } from "@/config";

export const findCategoryByName = (categoryName: string) => {
  return converterCategories.find((category) => category.name === categoryName);
};

export const findSubCategoryByEndpoint = (endpoint: string) => {
  for (const category of converterCategories) {
    const subCategory = category.subCategories.find(
      (sub) => sub.endpoint === endpoint
    );
    if (subCategory) {
      return { category, subCategory };
    }
  }
  return null;
};
