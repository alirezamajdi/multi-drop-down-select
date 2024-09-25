import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../components/UI/tabel/Table";
import { Link as ChakraLink } from "@chakra-ui/react";
import Button from "../../../components/UI/button/Button";
import Cover from "../../../components/cover/Cover";
import Input from "../../../components/UI/formTags/input/Input";
import { FC } from "react";

type UnitConversion = {
  date: string;
  code: string;
  fullName: string;
  patient: string;
  mobile: string;
  leaveـdate: string;
};

interface Props {
  data: UnitConversion[];
}

const columnHelper = createColumnHelper<UnitConversion>();

const Index: FC<Props> = ({ data }) => {
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
        <div className=" gap-1 justify-start">
          {/* <ChakraLink href={"tel:" + info.getValue()}>
            <Button>تماس</Button>
          </ChakraLink> */}
          <ChakraLink href={"/add-assessment1?id=" + info.getValue()}>
            <Button variant="outline">ادامه پیوست ۱</Button>
          </ChakraLink>
          {/* <ChakraLink href={"/add-assessment2?id=" + info.getValue()}>
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
          </ChakraLink> */}
        </div>
      ),
      header: "عملیات",
    }),
    columnHelper.accessor("code", {
      cell: (info) => (
        <ChakraLink href={"/patient-files/1" + info.getValue()}>
          <Button variant="outline">پرونده های قبلی</Button>
        </ChakraLink>
      ),
      header: "پرونده ها",
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

export default Index;
