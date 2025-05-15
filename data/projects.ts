import { v4 as uuidv4 } from "uuid";

import { TProjectItem } from "@/app/components/projects/project-item";

export const projectsData: TProjectItem[] = [
  {
    description: "Descrição",
    infoTech: ["Info técnica utilizada 1", "Info técnica utilizada 2", "Info técnica utilizada 3"],
    src: "/assets/logistica.png",
    title: "Processos de logística",
    id: uuidv4(),
  },
  {
    description: "Descrição",
    infoTech: ["Info técnica utilizada 1", "Info técnica utilizada 2", "Info técnica utilizada 3"],
    src: "/assets/cobrancas.png",
    title: "Processos de cobrança",
    id: uuidv4(),
  },
  {
    description: "Descrição",
    infoTech: ["Info técnica utilizada 1", "Info técnica utilizada 2", "Info técnica utilizada 3"],
    src: "/assets/vnadvocacia.png",
    title: "VN Advocacia",
    id: uuidv4(),
  },
  {
    description: "Descrição",
    infoTech: ["Info técnica utilizada 1", "Info técnica utilizada 2", "Info técnica utilizada 3"],
    src: "/assets/vngeral.png",
    title: "VN Advocacia Geral",
    id: uuidv4(),
  },
  {
    description: "Descrição",
    infoTech: ["Info técnica utilizada 1", "Info técnica utilizada 2", "Info técnica utilizada 3"],
    src: "/assets/normativa.png",
    title: "Normativa",
    id: uuidv4(),
  },
];
