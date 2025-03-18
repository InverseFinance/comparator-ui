import { AppNav } from "@/components/app-nav";
import { YieldTable } from "@/components/yield-table";

export default async function YieldsPage() {
  const data = await fetch(`https://inverse.finance/api/dola/sdola-comparator`);
  const json = await data.json();
  return (
    <>
      <header className="flex-wrap items-center justify-center">
        <AppNav activeItem="/stable-yields" />
      </header>
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <YieldTable data={json.rates} timestamp={json.timestamp} />
      </div>
    </>
  );
}
