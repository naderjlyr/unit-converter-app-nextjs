import { ConverterEndpoint } from "@/types";
import { create } from "zustand";
import { findSubCategoryByEndpoint } from "./helpers";

type ConverterStore = {
  currentConverterEndpoint: ConverterEndpoint | null;
  setCurrentConverter: (endpoint: ConverterEndpoint) => void;
  resetOutputValue: () => void;
};

const useConverterStore = create<ConverterStore>((set) => ({
  currentConverterEndpoint: null,

  setCurrentConverter: (endpoint: ConverterEndpoint) => {
    const result = findSubCategoryByEndpoint(endpoint);
    if (result) {
      set({
        currentConverterEndpoint: endpoint,
      });
    } else {
      console.error("Subcategory not found for endpoint:", endpoint);
    }
  },

  resetOutputValue: () => {},
}));

export default useConverterStore;
