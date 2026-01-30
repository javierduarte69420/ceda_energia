import { PermitHeader } from "@/sections/MainContent/components/PermitHeader";
import { PermitDetails } from "@/sections/MainContent/components/PermitDetails";

type MainContentProps = {
  onAdminAccess: (password: string) => boolean;
};

export const MainContent = ({ onAdminAccess }: MainContentProps) => {
  return (
    <main className="relative bg-white shadow-[rgba(0,0,0,0.075)_0px_2px_4px_0px] box-border caret-transparent flex flex-col max-w-[1140px] break-words w-full mx-2 sm:mx-4 md:mx-auto my-3 sm:my-4 md:my-6 rounded-md">
      <PermitHeader />
      <PermitDetails onAdminAccess={onAdminAccess} />
    </main>
  );
};
