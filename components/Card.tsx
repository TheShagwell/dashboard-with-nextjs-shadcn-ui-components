import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    description: string;
}

export default function Card(props: CardProps) {
  return (
    <div>Card</div>
  )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    // In other words i ca decide to use a <p> tag inside this <div/>
    return (
        <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow")}/>
    )
}