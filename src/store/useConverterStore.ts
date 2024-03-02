import create from "zustand";
import { converterCategories } from "@/config/convertersCategoriesConfig";
import { ConverterFunction, ConverterType } from "@/utils/numberConverters";

type ConverterStore = {
  currentCategoryName: string;
  currentConverter: ConverterType;
  inputValue: string;
  outputValue: string;
  setCurrentCategoryByName: (categoryName: string) => void;
  setCurrentConverter: (converter: ConverterType) => void;
  setInputValue: (value: string) => void;
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
  convert: () => {
    const { currentConverter, inputValue } = useConverterStore.getState();
    const category = converterCategories.find(
      (category) =>
        category.name === useConverterStore.getState().currentCategoryName
    );
    const converter: ConverterFunction | undefined =
      category?.subCategories.find(
        (sub) => sub.name === currentConverter
      )?.converterFunction;

    if (converter) {
      try {
        const result = converter(inputValue);
        set({ outputValue: result });
      } catch (error) {
        console.error(error);
        set({ outputValue: "Error: Invalid input" });
      }
    } else {
      console.error("Converter function not found:", currentConverter);
      set({ outputValue: "Error: Converter not found" });
    }
  },
}));

export default useConverterStore;
