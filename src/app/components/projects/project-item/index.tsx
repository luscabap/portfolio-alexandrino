import Image from "next/image";

export type TProjectItem = {
  src: string;
  description: string;
  infoTech: string[];
  title: string;
  id: string;
};

export default function ProjectItem({ data }: { data: TProjectItem }) {
  return (
    <div className="p-8">
      <Image src={data.src} alt={data.title} width={500} height={500} className="rounded-xl"/>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <ul className="list-disc">
        {data.infoTech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
