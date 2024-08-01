import SubtleCheckbox from "@/components/Checkbox/Subtle/SubtleCheckbox";
import ToggleSubtle from "@/components/Toggle/Subtle/toggle";

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <ToggleSubtle
        size="46px"
      />
      <SubtleCheckbox
        size='1em'
        strokeColor='black'
        strokeWidth={6}
      />
    </div>
  )
}
