import ConverterTabs from "@/components/Converter/ConverterTabs";
import Glossary from "@/components/Converter/Glossary";

export default function ConverterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl px-4 py-8 flex flex-col gap-8">
        <ConverterTabs />
        <Glossary />
      </div>
    </div>
  );
}
