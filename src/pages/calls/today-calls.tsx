import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../components/UI/tabel/Table";
import { Link as ChakraLink } from "@chakra-ui/react";
import Button from "../../components/UI/button/Button";
import Cover from "../../components/cover/Cover";
import Input from "../../components/UI/formTags/input/Input";

type UnitConversion = {
  date: string;
  code: string;
  fullName: string;
  patient: string;
  mobile: string;
  leaveـdate: string;
};

const data: UnitConversion[] = [
  {
    date: "1403/2/33",
    code: "1710327288",
    fullName: "علی محمدی",
    patient: "مشکل ریه",
    mobile: "09148602259",
    leaveـdate: "علی کرمی",
  },
  {
    date: "1403/2/33",
    code: "1710327288",
    fullName: "علی محمدی",
    patient: "مشکل ریه",
    mobile: "09148602259",
    leaveـdate: "علی کرمی",
  },
  {
    date: "1403/2/33",
    code: "1710327288",
    fullName: "علی محمدی",
    patient: "مشکل ریه",
    mobile: "09148602259",
    leaveـdate: "علی کرمی",
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

const CallManagment = () => {
  const columns = [
    columnHelper.accessor("date", {
      cell: (info) => info.getValue(),
      header: "تاریخ تماس",
    }),
    columnHelper.accessor("code", {
      cell: (info) => info.getValue(),
      header: "کدملی",
    }),

    columnHelper.accessor("fullName", {
      cell: (info) => info.getValue(),
      header: "کد ملی",
    }),
    columnHelper.accessor("patient", {
      cell: (info) => info.getValue(),
      header: "نوع بیماری",
    }),
    columnHelper.accessor("mobile", {
      cell: (info) => info.getValue(),
      header: "موبایل",
    }),
    columnHelper.accessor("leaveـdate", {
      cell: (info) => info.getValue(),
      header: "تاریخ مرخصی",
    }),
    columnHelper.accessor("code", {
      cell: (info) => (
        <div className="flex gap-1 justify-end">
          {/* <ChakraLink href={"tel:" + info.getValue()}>
            <Button>تماس</Button>
          </ChakraLink> */}
          <ChakraLink href={"/add-assessment1?id=" + info.getValue()}>
            <Button variant="outline">پیوست ۱</Button>
          </ChakraLink>
          <ChakraLink href={"/add-assessment2?id=" + info.getValue()}>
            <Button variant="outline">پیوست ۲</Button>
          </ChakraLink>
          <ChakraLink href={"/add-assessment3?id=" + info.getValue()}>
            <Button variant="outline">پیوست ۳</Button>
          </ChakraLink>
          <ChakraLink href={"/add-assessment4?id=" + info.getValue()}>
            <Button variant="outline">پیوست ۴</Button>
          </ChakraLink>
          <ChakraLink href={"/add-assessment5?id=" + info.getValue()}>
            <Button variant="outline">پیوست ۵</Button>
          </ChakraLink>
          <ChakraLink href={"/add-assessment6?id=" + info.getValue()}>
            <Button variant="outline">پیوست ۶</Button>
          </ChakraLink>
        </div>
      ),
      header: "اکشن",
    }),
  ];
  return (
    <div>
      <Cover className="my-5 p-5 flex items-end gap-3">
        <Input label="کد ملی" dir="ltr" type="number" />
        <Button>جستجو</Button>
      </Cover>
      <DataTable columns={columns} data={data} TdClassName="h-[70px]" />
    </div>
  );
};

export default CallManagment;
