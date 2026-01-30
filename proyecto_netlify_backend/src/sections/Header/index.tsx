import { HeaderContent } from "@/sections/Header/components/HeaderContent";
import { Divider } from "@/components/Divider";

export const Header = () => {
  return (
    <header className="text-white box-border caret-transparent border-yellow-400 border-b">
      <HeaderContent />
      <Divider />
    </header>
  );
};
