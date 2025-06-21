import Image from "next/image";
import foto from "../../../../public/assets/alexandrino.jpeg";

export default function Apresentation() {
  return (
    <div>
      <h1>Alexandrino Alves Neto</h1>

      <div className="flex items-center justify-center flex-col">
        <Image alt="Foto do Alexandrino Alves Neto" src={foto} width={250} height={250} />
        <figcaption>Gerente de Projetos</figcaption>
      </div>

      <p>Planejar com visão, liderar com precisão, entregar com excelência.</p>
    </div>
  );
}
