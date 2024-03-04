"use client";
import { useState, useEffect } from "react";
import { Tabs } from "flowbite-react";
import { converterCategories } from "@/config";
import ConverterForm from "@/components/Converter/ConverterForm";
import useConverterStore from "@/store/useConverterStore";
import { ConverterType } from "@/types";

const ConverterTabs = () => {
  const setActiveSubCategory = useConverterStore(
    (state) => state.setActiveSubCategory
  );
  const setCurrentCategory = useConverterStore(
    (state) => state.setCurrentCategory
  );
  const currentConverter = useConverterStore((state) => state.currentConverter);

  const handleSubCategoryChange = (subCategoryName: string) => {
    setActiveSubCategory(subCategoryName);
  };

  const handleCategoryChange = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  return (
    <div className="w-full py-2 px-2">
      <Tabs aria-label="Converter tabs" style="underline">
        {converterCategories.map((category) => (
          <Tabs.Item
            key={category.name}
            title={category.name}
            icon={category.icon}
            active={category.subCategories.some(
              (sub) => sub.name === currentConverter
            )}
            onClick={() => handleCategoryChange(category.name)}
          >
            <div className="flex flex-wrap gap-2 p-2">
              {category.subCategories.map((subCategory) => (
                <button
                  key={subCategory.name}
                  onClick={() => handleSubCategoryChange(subCategory.name)}
                  className={`transition-all ease-in-out duration-300 text-sm font-semibold py-2 px-4 leading-none border rounded-full shadow-sm ${currentConverter === subCategory.name ? "bg-indigo-500 text-white border-indigo-500" : "text-indigo-700 bg-white border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500"}`}
                >
                  {subCategory.name}
                </button>
              ))}
            </div>
          </Tabs.Item>
        ))}
      </Tabs>
      {currentConverter && <ConverterForm />}
    </div>
  );
};
export default ConverterTabs;
