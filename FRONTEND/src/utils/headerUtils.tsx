import { StringsResources } from "./stringsResources";

const { CADASTRAR, FAVORITOS, LIDOS, HOME, SAIR } = StringsResources.HEADER;

export const pages = [
  {
    id: "1",
    name: HOME,
    path: "/",
  },
  {
    id: "2",
    name: FAVORITOS,
    path: "/favoritos",
  },
  {
    id: "3",
    name: LIDOS,
    path: "/lidos",
  },
  {
    id: "4",
    name: CADASTRAR,
    path: "/livro",
  },
  {
    id: "5",
    name: SAIR,
    path: "",
  },
];
