"use client"

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {};

interface Setttings {
  category: string;
  value: string | number | boolean;
};


const data: Setttings[] = [
  {
    category: "Account",
    value: true
  },
  {
    category: "Notifications",
    value: false
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  },
  {
    category: "Payment Options",
    value: true
  }
];
 
const columns: ColumnDef<Setttings>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  },
]

export default function SettingsPage({}: Props) {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Settings'/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
