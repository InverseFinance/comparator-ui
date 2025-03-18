import Image from "next/image";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FuturisticTable from "./ui/futuristic-table";

const COLUMNS = [
    {
        key: 'symbol',
        label: 'Stablecoin',
    },
    {
        key: 'apy',
        label: 'APY',
    },
    {
        key: 'avg30',
        label: '30d Avg.',
    },
    {
        key: 'avg60',
        label: '30d Avg.',
    },
    {
        key: 'avg90',
        label: '30d Avg.',
    },
]

export const YieldTable = ({
    data,
}: {
    data: {
        symbol: string;
        image: string;
        apy: number;
        avg30d: number;
        avg60d: number;
        avg90d: number;
    }[];
}) => {
    return <FuturisticTable data={data} columns={COLUMNS} />
}
