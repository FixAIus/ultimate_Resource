"use client";

import { useState, useEffect } from "react";
import { StickyTabs } from "@/components/layout/StickyTabs";
import { Sections } from "@/components/sections/ContentSections";
import { SECTIONS } from "@/lib/constants";

export function TabsView() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  // If user clicked a #tabs link, ensure we scroll into view once mounted
  useEffect(() => {
    const el = document.getElementById("tabs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div>
      <StickyTabs activeId={activeId} onChange={setActiveId} />
      <Sections activeId={activeId} />
    </div>
  );
}


