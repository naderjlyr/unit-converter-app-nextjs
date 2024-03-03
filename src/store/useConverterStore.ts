import { create } from "zustand";
import { converterCategories } from "@/config/convertersConfig";
import { ConverterType } from "@/types";

type ConverterStore = {
  currentCategoryName: string;
  currentConverter: ConverterType;
  inputValue: string;
  outputValue: string;
  isLoading: boolean;

  setCurrentCategoryByName: (categoryName: string) => void;
  setCurrentConverter: (converter: ConverterType) => void;
  setInputValue: (value: string) => void;
  resetText: () => void;
  convert: () => void;
};

const useConverterStore = create<ConverterStore>((set) => ({
  currentCategoryName: converterCategories[0].name,
  currentConverter: converterCategories[0].subCategories[0]
    .name as ConverterType,
  inputValue: "",
  outputValue: "",
  setCurrentCategoryByName: (categoryName) => {
    const category = converterCategories.find((c) => c.name === categoryName);
    if (!category || category.subCategories.length === 0) {
      console.error(
        "Category not found or has no subCategories:",
        categoryName
      );
      return;
    }
    const firstSubCategoryConverter = category.subCategories[0]
      .name as ConverterType;
    set({
      currentCategoryName: categoryName,
      currentConverter: firstSubCategoryConverter,
    });
  },
  setCurrentConverter: (converter) => set({ currentConverter: converter }),
  setInputValue: (value) => set({ inputValue: value }),
  isLoading: false,
  errorMessage: null,
  successMessage: null,
  resetText: () =>
    set({
      inputValue: "",
      outputValue: "",
    }),
  convert: async () => {
    set({ isLoading: true, errorMessage: null, successMessage: null });
    const { currentConverter, inputValue } = useConverterStore.getState();
    const category = converterCategories.find(
      (c) => c.name === useConverterStore.getState().currentCategoryName
    );
    const converter = category?.subCategories.find(
      (sub) => sub.name === currentConverter
    )?.converterFunction;

    try {
      if (converter) {
        const result = await converter(inputValue);
        set({
          outputValue: result,
          isLoading: false,
          successMessage: "Conversion successful!",
        });
      } else {
        set({ isLoading: false, errorMessage: "Converter not found" });
      }
    } catch (error) {
      console.error(error);
      set({ isLoading: false, errorMessage: "Error: Invalid input" });
    }
  },
}));

export default useConverterStore;
