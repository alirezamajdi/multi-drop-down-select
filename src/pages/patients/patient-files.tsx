import Cover from "../../components/cover/Cover";
import { Button } from "@chakra-ui/react";

const FileManagement = () => {
  return (
    <Cover className="p-6">
      <div className="text-center pb-6">
        <h1 className="text-[22px] font-medium">لیست پرونده ها</h1>
      </div>
      <div className=" grid grid-cols-12 gap-5">
        <File />
        <File />
        <File />
        <File />
        <File />
      </div>
    </Cover>
  );
};

export default FileManagement;

const File = () => {
  return (
    <div className="border rounded-md border-gray-200 col-span-3 2xl:col-span-2  !p-0">
      <img
        src="/images/file.png"
        alt="file"
        className="rounded-md blur-[1px] h-[150px]"
      />
      <div className="p-2">
        <p className="py-3">پیوست شماره ۱</p>
        <div className="flex justify-end">
          <Button colorScheme="blue" size="md">
            بازدید
          </Button>
        </div>
      </div>
    </div>
  );
};
