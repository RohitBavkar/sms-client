import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left Part */}
      <div className="w-[15%] md:w-[10%] lg:w-[15%] xl:w-[15%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block">Student Management System</span>
        </Link>
        <Menu />
      </div>

      {/* Right Part */}
      <div className="w-[85%] md:w-[90%] lg:w-[85%] xl:w-[85%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
