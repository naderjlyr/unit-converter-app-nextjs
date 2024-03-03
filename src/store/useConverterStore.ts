import { create } from "zustand";
import { converterCategories } from "@/config/convertersConfig";
import { ConverterType } from "@/types";

type ConverterStore = {
  currentCategoryName: string;
  currentConverter: ConverterType;
  outputValue: string;
  isLoading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  setActiveSubCategory: (subCategoryName: string) => void;
  setCurrentCategory: (categoryName: string) => void;
  convert: (inputValue: string) => void;
};

const useConverterStore = create<ConverterStore>((set, get) => ({
  currentCategoryName: converterCategories[0].name,
  currentConverter: converterCategories[0].subCategories[0]
    .name as ConverterType,
  outputValue: "",
  isLoading: false,
  errorMessage: null,
  successMessage: null,

  setActiveSubCategory: (subCategoryName: string) => {
    const currentCategory = converterCategories.find((category) =>
      category.subCategories.some((sub) => sub.name === subCategoryName)
    );
    if (currentCategory) {
      set({
        currentConverter: subCategoryName as ConverterType,
        currentCategoryName: currentCategory.name,
      });
    }
  },

  setCurrentCategory: (categoryName: string) => {
    const category = converterCategories.find((c) => c.name === categoryName);
    if (category && category.subCategories.length > 0) {
      set({
        currentCategoryName: categoryName,
        currentConverter: category.subCategories[0].name as ConverterType,
      });
    }
  },

  convert: async (inputValue) => {
    set({ isLoading: true, errorMessage: null, successMessage: null });
    const { currentConverter, currentCategoryName } = get();
    const category = converterCategories.find(
      (c) => c.name === currentCategoryName
    );
    const converterFunction = category?.subCategories.find(
      (sub) => sub.name === currentConverter
    )?.converterFunction;

    try {
      if (converterFunction) {
        const result = await converterFunction(inputValue);
        set({
          outputValue: result,
          isLoading: false,
          successMessage: "Conversion successful!",
        });
      } else {
        set({ isLoading: false, errorMessage: "Converter not found" });
      }
    } catch (error) {
      console.error("Conversion error:", error);
      set({ isLoading: false, errorMessage: "Error during conversion" });
    }
  },
}));

export default useConverterStore;
