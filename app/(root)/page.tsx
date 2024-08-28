import Filter from "@/components/filter";
import Navbar from "@/components/navbar";
import { ProductList } from "@/components/product-list";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Filter />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList />
      </div>
    </div>
  );
}
