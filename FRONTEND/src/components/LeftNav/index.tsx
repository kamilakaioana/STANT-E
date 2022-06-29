import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { pages } from "../../utils/headerUtils";

import { Button, Li, Ul, CheckedIcon } from "./styles";

export interface ILeftNavBar {
  open: boolean;
}

const LeftNav: React.FC<ILeftNavBar> = ({ open }) => {
  const { clearSearchData } = useSearch();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handlePress = (rota: string, id: string) => {
    const sairRoute = pages[4].id;
    if (id === sairRoute) {
      signOut();
      return;
    }
    clearSearchData();
    navigate(rota);
  };

  const location = useLocation();
  const [selected, setSelected] = useState<string>("/");

  useEffect(() => {
    const rotaSelecionada = `/${location.pathname.split("/")?.[1]}`;
    setSelected(rotaSelecionada);
  }, [location.pathname]);

  return (
    <Ul open={open}>
      {pages.map(({ id, name, path }) => (
        <Li
          key={id}
          selected={path === selected}
          onClick={() => handlePress(path, id)}
        >
          {path === selected ? <CheckedIcon /> : null}
          <Button key={id}>{name}</Button>
        </Li>
      ))}
    </Ul>
  );
};

export default LeftNav;
