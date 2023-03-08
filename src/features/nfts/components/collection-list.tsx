import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useRouter } from 'next/router';

import { useCollections } from '@/features/nfts/hooks/useCollections';

import { NFTCollection } from '../api/getAll';
const columnHelper = createColumnHelper<NFTCollection>();
const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: 'Name',
  }),
  columnHelper.accessor('token_address', {
    cell: (info) => info.getValue(),
    header: 'Token Address',
  }),
  columnHelper.accessor('symbol', {
    cell: (info) => info.getValue(),
    header: 'Symbol',
  }),
  columnHelper.accessor('contract_type', {
    cell: (info) => info.getValue(),
    header: 'Contract type',
  }),
];
export function CollectionList() {
  const router = useRouter();
  const { isLoading, nfts } = useCollections();
  const table = useReactTable({
    data: nfts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const goTo = (token_address: NFTCollection['token_address']) => {
    router.push(`/collection/${token_address}`);
  };

  if (isLoading) return null;

  return (
    <table className='bg-primary-500 border-collapse border-spacing-7 '>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} onClick={() => goTo(row.original.token_address)}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
