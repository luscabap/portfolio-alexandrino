import Image from "next/image";
import foto from "../../../../public/assets/chacal.png"
export default function Apresentation(){
  return (
    <div>
      <h1>Alexandrino Neto Alves</h1>
      <h2>Gerente de Projetos</h2>
      <p>Descrição breve do chacal</p>
      <span>Foto chacal</span>
      <div className="flex items-center justify-center">
        <Image alt="Foto do Alexandrino Neto Alves" src={foto} width={100} height={100} />
      </div>
    </div>
  )
}
