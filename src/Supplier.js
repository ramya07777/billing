import React, { useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michaeljohnson@example.com",
    phone: "555-123-4567",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emilywilson@example.com",
    phone: "999-888-7777",
  },
  {
    id: 5,
    name: "Daniel Lee",
    email: "daniellee@example.com",
    phone: "444-555-6666",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    email: "oliviamartinez@example.com",
    phone: "777-999-1111",
  },
  {
    id: 7,
    name: "William Thompson",
    email: "williamthompson@example.com",
    phone: "222-333-4444",
  },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "phone",
    header: "phone",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

export default function Supplier() {
  const [item, setItem] = useState(data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <div>
      <div w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            key={headerGroup.id}
            className="flex justify-evenly items-center"
          >
            {headerGroup.headers.map((header) => (
              <div key={header.id}>{header.column.columnDef.header}</div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {table.getRowModel().rows.map((row) => (
          <div key={row.id} className="flex justify-evenly items-center">
            {row.getVisibleCells().map((cell) => (
              <div key={cell.id} w={cell.column.getSize()}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

