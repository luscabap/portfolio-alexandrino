import ThemeToggle from "../theme-toggle";
import { Button } from "@/components/ui/button";

export default function Apresentation(){
  return (
    <div>
      <h1>Alexandrino Neto Alves</h1>
      <Button>Trocar</Button>
      <Button variant="destructive">Trocar 2</Button>
      <ThemeToggle />
    </div>
  )
}
