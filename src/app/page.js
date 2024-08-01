"use client"
import { useState } from "react";

import SubtleCheckbox from "@/components/Checkbox/Subtle/SubtleCheckbox";
import ToggleSubtle from "@/components/Toggle/Subtle/toggle";

export default function Home() {
  const [subtleToggle, setSubtleToggle] = useState(false);
  const [subtleCheckbox, setSubtleCheckbox] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

      <ToggleSubtle
        size="46px"
        value={subtleToggle}
        onChange={setSubtleToggle}
      />

      <SubtleCheckbox
        size='1em'
        strokeColor='black'
        strokeWidth={6}

        value={subtleCheckbox}
        onChange={setSubtleCheckbox}
      />
    </div>
  )
}
