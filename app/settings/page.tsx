"use client"

import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = []

export interface Setttings {
  category: string;
  value: string | number | boolean;
};
 
export const columns: ColumnDef<Setttings>[] = [
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