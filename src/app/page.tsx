import Apresentation from "./components/apresentation";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Apresentation />
    </div>
  );
}
