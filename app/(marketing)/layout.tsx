import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <Navbar />
      <div className="h-full pt-40">{children}</div>
    </div>
  );
};

export default MarketingLayout;
