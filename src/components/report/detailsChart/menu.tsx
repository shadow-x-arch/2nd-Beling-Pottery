"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = boolean;

export function ForceOpenDropdown() {
  const [enableNotifications, setEnableNotifications] = React.useState<Checked>(true);
  const [darkMode, setDarkMode] = React.useState<Checked>(false);
  const [compactView, setCompactView] = React.useState<Checked>(false);

  return (
    <div className="relative">
      {/* Overlay div to force dropdown visibility */}
      <div className="fixed pointer-events-none"></div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
    </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 border bg-white shadow-lg rounded-md">
          <DropdownMenuLabel>Preferences</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={enableNotifications}
            onCheckedChange={setEnableNotifications}
          >
            Enable Notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={darkMode}
            onCheckedChange={setDarkMode}
          >
            Dark Mode
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={compactView}
            onCheckedChange={setCompactView}
          >
            Compact View
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
