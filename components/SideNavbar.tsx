"use client"

import React from 'react'

import {
    LayoutDashboard,
    Settings,
    ShoppingCart,
    UsersRound,
  } from "lucide-react"
import { Nav } from './ui/nav'

type Props = {}

export default function SideNavbar({}: Props) {
  return (
    <div>
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Dashboard",
                href:"/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Users",
                href:"/users",
                icon: UsersRound,
                variant: "ghost",
              },
              {
                title: "Orders",
                href:"/orders",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Settings",
                href:"/settings",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}