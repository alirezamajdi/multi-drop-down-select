import CallTable from "../../components/pages/calls/index";

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

const MissedCalls = () => {
  return <CallTable data={data} />;
};

export default MissedCalls;
