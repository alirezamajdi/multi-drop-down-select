import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../components/UI/tabel/Table";

type UnitConversion = {
  fullName: string;
  code: string;
  age: number;
};

const data: UnitConversion[] = [
  {
    fullName: "علی",
    code: "۳۲۱",
    age: 25.4,
  },
  {
    fullName: "اکبر",
    code: "۳۲۲۲۱",
    age: 25.4,
  },
  {
    fullName: "سارا",
    code: "۳۲۲",
    age: 25.4,
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor("fullName", {
    cell: (info) => info.getValue(),
    header: "نام و نام خانوادگی",
  }),
  columnHelper.accessor("code", {
    cell: (info) => info.getValue(),
    header: "کد ملی",
  }),
  columnHelper.accessor("age", {
    cell: (info) => info.getValue(),
    header: "سن",
    meta: {
      isNumeric: true,
    },
  }),
];

export default function App() {
  return (
    <ChakraProvider>
      <DataTable columns={columns} data={data} />
    </ChakraProvider>
  );
}
