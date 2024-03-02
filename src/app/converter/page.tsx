import ConverterForm from "@/components/ConverterForm";

export default function ConverterPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <ConverterForm />
      </div>
    </div>
  );
}
