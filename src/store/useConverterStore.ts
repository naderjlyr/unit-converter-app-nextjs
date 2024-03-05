import { create } from "zustand";
import { findSubCategoryByEndpoint } from "./helpers";
import { ConverterEndpoint } from "@/types/api";
import { converterCategories } from "@/config";

type ConverterStore = {
  currentConverterEndpoint: ConverterEndpoint | null;
  currentConverterName: string | null;
  setCurrentConverter: (endpoint: ConverterEndpoint) => void;
  resetOutputValue: () => void;
};

const useConverterStore = create<ConverterStore>((set) => ({
  currentConverterEndpoint: null,
  currentConverterName: null,

  setCurrentConverter: (endpoint: ConverterEndpoint) => {
    const result = findSubCategoryByEndpoint(endpoint);
    if (result) {
      const converterName = converterCategories
        .flatMap((category) => category.subCategories)
        .find((subCategory) => subCategory.endpoint === endpoint)?.name;

      set({
        currentConverterEndpoint: endpoint,
        currentConverterName: converterName || null,
      });
    } else {
      console.error("Subcategory not found for endpoint:", endpoint);
    }
  },

  resetOutputValue: () => {},
}));

export default useConverterStore;
