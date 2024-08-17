import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../components/UI/tabel/Table";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Cover from "../../components/cover/Cover";
import Input from "../../components/UI/formTags/input/Input";
import Button from "../../components/UI/button/Button";

type UnitConversion = {
  fullName: string;
  code: string;
  age: number;
  id: number;
};

const data: UnitConversion[] = [
  {
    id: 1,
    fullName: "علی",
    code: "۳۲۱",
    age: 25.4,
  },
  {
    id: 2,
    fullName: "اکبر",
    code: "۳۲۲۲۱",
    age: 25.4,
  },
  {
    id: 3,
    fullName: "سارا",
    code: "۳۲۲",
    age: 25.4,
  },
  {
    id: 1,
    fullName: "علی",
    code: "۳۲۱",
    age: 25.4,
  },
  {
    id: 2,
    fullName: "اکبر",
    code: "۳۲۲۲۱",
    age: 25.4,
  },
  {
    id: 3,
    fullName: "سارا",
    code: "۳۲۲",
    age: 25.4,
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

export default function App() {
  const navigate = useNavigate();
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
    columnHelper.accessor("id", {
      cell: (info) => (
        <Button onClick={() => navigate("/patient-calls/" + info.getValue())}>
          وضعیت تماس ها
        </Button>
      ),
      header: "اکشن",
      meta: {
        isNumeric: true,
      },
    }),
  ];

  return (
    <ChakraProvider>
      <Button onClick={() => navigate("/patients/new")}>
        افزودن بیمار <GoPlus size={25} />
      </Button>
      <Cover className="my-5 p-5 flex items-end gap-3">
        <Input label="کد ملی" dir="ltr" type="number" />
        <Button>جستجو</Button>
      </Cover>
      <DataTable columns={columns} data={data} />
    </ChakraProvider>
  );
}
