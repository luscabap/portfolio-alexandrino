import Image from "next/image";
import foto from "../../../../public/assets/alexandrino.jpeg";

export default function Apresentation() {
  return (
    <div>
      <h1>Alexandrino Neto Alves</h1>

      <div className="flex items-center justify-center flex-col">
        <Image alt="Foto do Alexandrino Neto Alves" src={foto} width={250} height={250} />
        <figcaption>Gerente de Projetos</figcaption>
      </div>

      <p>Descrição breve do chacal</p>
    </div>
  );
}
