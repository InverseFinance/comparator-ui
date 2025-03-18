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
        label: '60d Avg.',
    },
    {
        key: 'avg90',
        label: '90d Avg.',
    },
]

export const YieldTable = ({
    data,
    timestamp,
}: {
    data: {
        symbol: string;
        image: string;
        apy: number;
        avg30d: number;
        avg60d: number;
        avg90d: number;
    }[];
    timestamp: number;
}) => {
    return <FuturisticTable data={data} columns={COLUMNS} timestamp={timestamp} />
}
