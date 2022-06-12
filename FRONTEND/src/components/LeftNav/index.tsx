import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { pages } from "../../utils/headerUtils";
import { Button, Li, Ul } from "./styles";

export interface ILeftNavBar {
  open: boolean;
}
// const Ul = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-flow: row nowrap;
//   li {
//     padding: 18px 10px;
//   }
//   @media (max-width: 768px) {
//     flex-flow: column nowrap;
//     background-color: #0d2538;
//     position: fixed;
//     transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
//     top: 0;
//     right: 0;
//     height: 100vh;
//     width: 300px;
//     padding-top: 3.5rem;
//     transition: transform 0.3s ease-in-out;
//     li {
//       color: #fff;
//     }
//   }
// `;

const LeftNav: React.FC<ILeftNavBar> = ({ open }) => {
  const { clearSearchData } = useSearch();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handlePress = (rota: string, id: string) => {
    const sairRoute = pages[4].id;
    if (id === sairRoute) {
      // logoutLink();
      signOut();
      return;
    }
    clearSearchData();
    navigate(rota);
  };
  return (
    <Ul open={open}>
      {pages.map(({ id, name, path }) => (
        <Li>
          <Button key={id} onClick={() => handlePress(path, id)}>
            {name}
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default LeftNav;
