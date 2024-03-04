"use client";
import { useState, useEffect } from "react";
import { Button, Card, Tabs } from "flowbite-react";
import { converterCategories } from "@/config";
import ConverterForm from "@/components/Converter/ConverterForm";
import useConverterStore from "@/store/useConverterStore";
import { ConverterType } from "@/types";
import { motion } from "framer-motion";
import { tabItemVariants } from "@/config/animations";

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
  const getButtonProps = (subCategoryName: string) => {
    const isActive = currentConverter === subCategoryName;
    return {
      gradientDuoTone: "purpleToPink",
      outline: isActive ? false : true,
    };
  };
  return (
    <Card className="w-full py-2 px-2">
      <h2 className="text-lg font-semibold mb-4 text-black">cFlox Converter</h2>
      <Tabs aria-label="Converter tabs" style="default">
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
                <motion.div
                  key={subCategory.name}
                  variants={tabItemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Button
                    {...getButtonProps(subCategory.name)}
                    onClick={() => handleSubCategoryChange(subCategory.name)}
                  >
                    <subCategory.icon className="inline-block mr-2 text-2xl" />
                    {subCategory.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Tabs.Item>
        ))}
      </Tabs>
      {currentConverter && <ConverterForm />}
    </Card>
  );
};
export default ConverterTabs;
