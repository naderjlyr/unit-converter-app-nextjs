"use client";
import { Card, Table } from "flowbite-react";
import { FaSortNumericDown, FaSortNumericUp } from "react-icons/fa";
import { MdOutlineHistoryEdu } from "react-icons/md";

const Glossary = () => {
  return (
    <Card>
      <div className="flex items-center mb-4">
        <MdOutlineHistoryEdu className="text-2xl text-slate-700 mr-2" />
        <h2 className="text-xl font-semibold text-slate-700">
          Roman Numerals Glossary
        </h2>
      </div>
      <p className="mb-4 text-slate-700 flex items-center">
        <FaSortNumericDown className="mr-2 text-2xl" />
        Roman numerals use different symbols for each power of ten and there is
        no zero symbol, in contrast with the place value notation of Arabic
        numerals. This allows some flexibility in notation.
      </p>
      <Table>
        <Table.Head>
          <Table.HeadCell>Thousands</Table.HeadCell>
          <Table.HeadCell>Hundreds</Table.HeadCell>
          <Table.HeadCell>Tens</Table.HeadCell>
          <Table.HeadCell>Units</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>M</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>X</Table.Cell>
            <Table.Cell>I</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>MM</Table.Cell>
            <Table.Cell>CC</Table.Cell>
            <Table.Cell>XX</Table.Cell>
            <Table.Cell>II</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  );
};

export default Glossary;
