import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function AsideMenu() {
  return (
    <aside className="absolute right-0 top-19.5 bg-zinc-700 p-4 flex flex-col justify-center items-center gap-6 rounded-bl-2xl">
      <ThemeToggle />
      <nav>
      <ul className="flex flex-col gap-4">
        <li><Link href="">Home</Link></li>
        <li><Link href="">Sobre</Link></li>
        <li><Link href="">Projetos</Link></li>
        <li><Link href="">Skills</Link></li>
        <li><Link href="">Contato</Link></li>
      </ul>
      </nav>
    </aside>
  );
}
