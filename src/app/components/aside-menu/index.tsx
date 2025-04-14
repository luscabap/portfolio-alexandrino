import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function AsideMenu() {
  return (
    <aside className="absolute right-0 top-19.5 bg-zinc-700 p-4 flex flex-col justify-center items-center gap-6 rounded-bl-2xl">
      <ThemeToggle />
      <nav>
      <ul className="flex flex-col gap-4">
        <li><Link href="">Opção 1</Link></li>
        <li><Link href="">Opção 12</Link></li>
        <li><Link href="">Opção 13</Link></li>
        <li><Link href="">Opção 14</Link></li>
        <li><Link href="">Opção 15</Link></li>
      </ul>
      </nav>
    </aside>
  );
}
