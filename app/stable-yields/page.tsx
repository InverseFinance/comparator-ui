import { AppNav } from "@/components/app-nav";
import styles from "./page.module.css";
import { YieldTable } from "@/components/yield-table";
import FuturisticTable from "@/components/ui/futuristic-table";
export default async function YieldsPage() {
  const data = await fetch(`https://inverse.finance/api/dola/sdola-comparator`);
  const json = await data.json();
  return (
    <>
      <header className="fixed top-10 flex-wrap items-center justify-center">
        <AppNav activeItem="/stable-yields" />
      </header>
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <YieldTable data={json.rates} />
        {/* <FuturisticTable /> */}
      </div>
    </>
  );
}
