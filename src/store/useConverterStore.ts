import { create } from "zustand";
import { converterCategories } from "@/config";
import { ConverterType } from "@/types";
import { findCategoryByName, findSubCategoryByName } from "./helpers";

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
  resetOutputValue: () => void;
};

const useConverterStore = create<ConverterStore>((set, get) => ({
  currentCategoryName: converterCategories[0]?.name,
  currentConverter: converterCategories[0]?.subCategories[0]
    ?.name as ConverterType,
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
      get().resetOutputValue();
    }
  },

  setCurrentCategory: (categoryName: string) => {
    const category = findCategoryByName(categoryName);
    if (category && category.subCategories.length > 0) {
      set({
        currentCategoryName: categoryName,
        currentConverter: category.subCategories[0].name as ConverterType,
      });
      get().resetOutputValue();
    }
  },

  convert: (inputValue) => {
    set({ isLoading: true, errorMessage: null, successMessage: null });
    const { currentConverter, currentCategoryName } = get();
    const converterFunction = findSubCategoryByName(
      currentCategoryName,
      currentConverter
    )?.converterFunction;

    try {
      if (converterFunction) {
        const result = converterFunction(inputValue);
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
  resetOutputValue: () => {
    set({ outputValue: "" });
  },
}));

export default useConverterStore;
