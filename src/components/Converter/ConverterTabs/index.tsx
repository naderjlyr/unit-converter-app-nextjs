"use client";
import { useState } from "react";
import { Tabs } from "flowbite-react";
import { converterCategories } from "@/config/convertersCategoriesConfig";
import ConverterForm from "@/components/Converter/ConverterForm";
import useConverterStore from "@/store/useConverterStore";
import { ConverterType } from "@/utils/numberConverters";

const ConverterTabs = () => {
  const { setCurrentConverter, currentConverter } = useConverterStore();
  const [activeSubCategory, setActiveSubCategory] = useState(
    converterCategories[0].subCategories[0].name
  );

  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Converter tabs" style="underline">
        {converterCategories.map((category) => (
          <Tabs.Item
            key={category.name}
            title={category.name}
            icon={category.icon}
            active={currentConverter === activeSubCategory}
          >
            <div className="flex flex-wrap gap-2 p-2">
              {category.subCategories.map((subCategory) => (
                <button
                  key={subCategory.name}
                  className={`transition-all ease-in-out duration-300 text-sm font-semibold py-2 px-4 leading-none border rounded-full shadow-sm ${activeSubCategory === subCategory.name ? "bg-indigo-500 text-white border-indigo-500" : "text-indigo-700 bg-white border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500"}`}
                  onClick={() => {
                    setCurrentConverter(subCategory.name as ConverterType);
                    setActiveSubCategory(subCategory.name);
                  }}
                >
                  {subCategory.name}
                </button>
              ))}
            </div>
            {currentConverter === activeSubCategory && <ConverterForm />}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
};

export default ConverterTabs;
