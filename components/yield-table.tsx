import Image from "next/image";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FuturisticTable from "./ui/futuristic-table";

const COLUMNS = [
    {
        key: 'symbol',
        label: 'Stablecoin',
    },
    {
        key: 'project',
        label: 'Project',
    },
    {
        key: 'apy',
        label: 'APY',
    },
    {
        key: 'avg30',
        label: '30d Avg.',
    },
    // {
    //     key: 'avg60',
    //     label: '60d Avg.',
    // },
    {
        key: 'avg90',
        label: '90d Avg.',
    },
    {
        key: 'type',
        label: 'Type',
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
        isVault: boolean;
    }[];
    timestamp: number;
}) => {
    return <FuturisticTable data={data?.map(d => ({...d, type: d.isVault ? 'Vault' : 'Lending'}))} columns={COLUMNS} timestamp={timestamp} />
}
