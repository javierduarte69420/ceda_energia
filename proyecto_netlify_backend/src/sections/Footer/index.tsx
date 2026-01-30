import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="text-white bg-[#691b32] box-border caret-transparent break-words mt-auto">
      <FooterContent />
      <div 
        className="h-12 w-full" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='100' viewBox='0 0 200 100'%3E%3Cdefs%3E%3Cpattern id='swirl' x='0' y='0' width='200' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20,50 Q30,30 40,50 T60,50 Q70,70 80,50 T100,50' fill='none' stroke='%23a8234a' stroke-width='3' opacity='0.6'/%3E%3Cpath d='M20,60 Q35,40 50,60 T80,60 Q95,80 110,60' fill='none' stroke='%23a8234a' stroke-width='2.5' opacity='0.5'/%3E%3Cpath d='M0,40 Q15,20 30,40 T60,40 Q75,60 90,40 T120,40' fill='none' stroke='%23a8234a' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M40,30 Q50,15 60,30 T80,30 Q90,45 100,30 T120,30' fill='none' stroke='%23a8234a' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M10,70 Q25,55 40,70 T70,70 Q85,85 100,70 T130,70' fill='none' stroke='%23a8234a' stroke-width='2.5' opacity='0.4'/%3E%3Cpath d='M30,20 Q40,10 50,20 T70,20 Q80,30 90,20 T110,20' fill='none' stroke='%23a8234a' stroke-width='1.5' opacity='0.3'/%3E%3Cpath d='M5,80 Q20,65 35,80 T65,80 Q80,95 95,80 T125,80' fill='none' stroke='%23a8234a' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M50,10 Q60,0 70,10 T90,10 Q100,20 110,10 T130,10' fill='none' stroke='%23a8234a' stroke-width='1.5' opacity='0.3'/%3E%3Cpath d='M100,50 Q110,30 120,50 T140,50 Q150,70 160,50 T180,50' fill='none' stroke='%23a8234a' stroke-width='3' opacity='0.6'/%3E%3Cpath d='M100,60 Q115,40 130,60 T160,60 Q175,80 190,60' fill='none' stroke='%23a8234a' stroke-width='2.5' opacity='0.5'/%3E%3Cpath d='M80,40 Q95,20 110,40 T140,40 Q155,60 170,40 T200,40' fill='none' stroke='%23a8234a' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M120,30 Q130,15 140,30 T160,30 Q170,45 180,30 T200,30' fill='none' stroke='%23a8234a' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M90,70 Q105,55 120,70 T150,70 Q165,85 180,70' fill='none' stroke='%23a8234a' stroke-width='2.5' opacity='0.4'/%3E%3Cpath d='M110,20 Q120,10 130,20 T150,20 Q160,30 170,20 T190,20' fill='none' stroke='%23a8234a' stroke-width='1.5' opacity='0.3'/%3E%3Cpath d='M85,80 Q100,65 115,80 T145,80 Q160,95 175,80' fill='none' stroke='%23a8234a' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M130,10 Q140,0 150,10 T170,10 Q180,20 190,10' fill='none' stroke='%23a8234a' stroke-width='1.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='200' height='100' fill='url(%23swirl)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 100px',
          backgroundRepeat: 'repeat-x',
          backgroundColor: '#8b1538'
        }}
      ></div>
    </footer>
  );
};
