import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../components/UI/tabel/Table";

type UnitConversion = {
  date: string;
  result: string;
  reason: string;
  start_time: string;
  end_time: string;
  nurse: string;
};

const data: UnitConversion[] = [
  {
    date: "1403/2/33",
    result: "موفق",
    reason: "",
    start_time: "20:00",
    end_time: "21:00",
    nurse: "علی کرمی",
  },
  {
    date: "1403/2/33",
    result: "موفق",
    reason: "ساعت شروع مکالمهساعت شروع مکالمهساعت شروع مکالمه",
    start_time: "20:00",
    end_time: "21:00",
    nurse: "علی کرمی",
  },
  {
    date: "1403/2/33",
    result: "موفق",
    reason: "",
    start_time: "20:00",
    end_time: "21:00",
    nurse: "علی کرمی",
  },
  {
    date: "1403/2/33",
    result: "موفق",
    reason: "",
    start_time: "20:00",
    end_time: "21:00",
    nurse: "علی کرمی",
  },
  {
    date: "1403/2/33",
    result: "موفق",
    reason: "",
    start_time: "20:00",
    end_time: "21:00",
    nurse: "علی کرمی",
  },
  {
    date: "1403/2/33",
    result: "موفق",
    reason: "",
    start_time: "20:00",
    end_time: "21:00",
    nurse: "علی کرمی",
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

const CallManagement = () => {
  const columns = [
    columnHelper.accessor("date", {
      cell: (info) => info.getValue(),
      header: "تاریخ تماس",
    }),
    columnHelper.accessor("result", {
      cell: (info) => info.getValue(),
      header: "نتیجه تماس",
    }),

    columnHelper.accessor("start_time", {
      cell: (info) => info.getValue(),
      header: "ساعت شروع مکالمه",
    }),
    columnHelper.accessor("end_time", {
      cell: (info) => info.getValue(),
      header: "ساعت پایان مکالمه",
    }),
    columnHelper.accessor("nurse", {
      cell: (info) => info.getValue(),
      header: "نام پرستار پیگیری",
    }),
    columnHelper.accessor("reason", {
      cell: (info) => info.getValue(),
      header: "علت عدم پاسخ",
    }),
  ];
  return (
    <div>
      <DataTable columns={columns} data={data} TdClassName="h-[70px]" />
    </div>
  );
};

export default CallManagement;
