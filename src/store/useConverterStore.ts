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
  setCurrentConverter: (converter: ConverterType) => void;
  convert: (inputValue: string) => void;
};

const useConverterStore = create<ConverterStore>((set) => ({
  currentCategoryName: converterCategories[0].name,
  currentConverter: converterCategories[0].subCategories[0]
    .name as ConverterType,
  outputValue: "",
  isLoading: false,
  errorMessage: null,
  successMessage: null,

  setCurrentConverter: (converter) => set({ currentConverter: converter }),
  convert: async (inputValue) => {
    set({ isLoading: true, errorMessage: null, successMessage: null });
    const { currentConverter } = useConverterStore.getState();
    const category = converterCategories.find(
      (c) => c.name === useConverterStore.getState().currentCategoryName
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
      console.error(error);
      set({ isLoading: false, errorMessage: "Error: Invalid input" });
    }
  },
}));

export default useConverterStore;
