import { JSX } from "react";
import { data } from "./data";

type TItem = {
  id: string;
  url: string;
  icon: JSX.Element;
};

type TProps = {
  data: TItem;
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <span className="mb-4">Contato</span>
      <div className="flex items-center justify-center gap-8">
        {data?.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

function Item({ data }: TProps) {
  return (
    <a href={data.url} target="_blank">
      {data.icon}
    </a>
  );
}
