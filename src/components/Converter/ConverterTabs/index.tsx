"use client";
import { Button, Card, Tabs } from "flowbite-react";
import { converterCategories } from "@/config";
import ConverterForm from "@/components/Converter/ConverterForm";
import useConverterStore from "@/store/useConverterStore";
import { motion } from "framer-motion";
import { tabItemVariants } from "@/config/animations";

const ConverterTabs = () => {
  const {
    setCurrentConverter,
    currentConverterEndpoint,
    currentConverterName,
  } = useConverterStore();

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
              (sub) => sub.endpoint === currentConverterEndpoint
            )}
          >
            <div className="flex flex-wrap gap-2 p-2">
              {category.subCategories.map((subCategory) => (
                <motion.div
                  key={subCategory.endpoint}
                  variants={tabItemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  <Button
                    gradientDuoTone="purpleToPink"
                    outline={currentConverterEndpoint !== subCategory.endpoint}
                    onClick={() => setCurrentConverter(subCategory.endpoint)}
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
      {<ConverterForm />}
    </Card>
  );
};

export default ConverterTabs;
