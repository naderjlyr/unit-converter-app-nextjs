import { Card } from "flowbite-react";
import {
  FaBalanceScale,
  FaCode,
  FaRulerCombined,
  FaSortNumericDown,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaCode className="mr-2" /> About cFlox Converter
          </h1>
          <p className="text-gray-700 mb-6">
            The cFlox Converter is a versatile and flexible application designed
            to make conversions between different units and systems seamless and
            intuitive. From transforming numerical values between decimal and
            Roman numeral systems, to converting measurements like kilograms to
            pounds and centimeters to inches, cFlox Converter handles it all
            with ease.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Current Features
          </h2>
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            <li className="flex items-center mb-2">
              <FaSortNumericDown className="mr-2 text-green-500" /> Decimal to
              Roman Numerals
            </li>
            <li className="flex items-center mb-2">
              <FaSortNumericDown className="mr-2 text-green-500" /> Binary to
              Roman Numerals
            </li>
            <li className="flex items-center mb-2">
              <FaBalanceScale className="mr-2 text-green-500" /> Kilogram to
              Pound
            </li>
            <li className="flex items-center">
              <FaRulerCombined className="mr-2 text-green-500" /> Centimeter to
              Inch
            </li>
          </ul>

          <p className="text-gray-700">
            Built with flexibility in mind, the cFlox Converter architecture
            allows for easy addition of new converters, ensuring the app remains
            a valuable tool for a wide range of conversion needs. Stay tuned for
            more updates and new features!
          </p>
        </Card>
      </div>
    </div>
  );
}
