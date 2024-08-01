"use client"
import { useState } from "react";

import SubtleCheckbox from "@/components/Checkbox/Subtle/SubtleCheckbox";
import ToggleSubtle from "@/components/Toggle/Subtle/toggle";
import FancyToggle from "@/components/Toggle/Fancy/Fancy";
import Hamburger from "@/components/hamburger/hamburger";


export default function Home() {
  const [subtleToggle, setSubtleToggle] = useState(false);
  const [subtleCheckbox, setSubtleCheckbox] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hum, setHum] = useState(false);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

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

      <FancyToggle
        checked={isDarkMode}
        onChange={setIsDarkMode}
      />

      <Hamburger
        color="black"
        value={hum}
        onChange={setHum}
      />

    </div>
  )
}
