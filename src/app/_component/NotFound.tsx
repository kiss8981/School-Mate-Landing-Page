import { Metadata } from "next";

export const metadata: Metadata = {
  title: "찾을 수 없는 페이지",
};

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col h-[88vh] items-center justify-center">
        <span className="text-2xl font-bold">찾을 수 없는 페이지</span>
      </div>
    </>
  );
};

export default NotFound;
