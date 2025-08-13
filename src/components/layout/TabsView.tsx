"use client";

import { useState } from "react";
import { StickyTabs } from "@/components/layout/StickyTabs";
import { Sections } from "@/components/sections/ContentSections";
import { SECTIONS } from "@/lib/constants";

export function TabsView() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  // Do not auto-scroll on mount; only scroll on explicit user interactions via StickyTabs

  return (
    <div>
      <StickyTabs activeId={activeId} onChange={setActiveId} />
      <Sections activeId={activeId} />
    </div>
  );
}


