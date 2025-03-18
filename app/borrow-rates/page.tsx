import { AppNav } from "@/components/app-nav";
import { BorrowRatesTable } from "@/components/borrows-rates-table";

export default async function BorrowRatesPage() {
  const data = await fetch(`https://inverse.finance/api/dola/rate-comparator`);
  const json = await data.json();
  return (
    <>
      <header className="fixed top-0 flex-wrap items-center justify-center">
        <AppNav activeItem="/borrow-rates" />
      </header>
      <div className="flex mt-20 flex-col gap-4 w-full items-center justify-center">
        <BorrowRatesTable data={json.rates} />
      </div>
    </>
  );
}
