import { Logo } from "@/components/Logo";

export const HeaderContent = () => {
  return (
    <div className="items-center bg-red-900 box-border caret-transparent flex justify-between w-full mx-auto px-3 sm:px-4 md:px-6 py-1 sm:py-2">
      <Logo />
    </div>
  );
};
