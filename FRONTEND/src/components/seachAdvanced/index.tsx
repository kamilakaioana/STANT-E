import React, { useState } from "react";
import Reading from "../../assets/image/reading.svg";
import { SearchInputAuthor, SearchInputTitle } from "./styles";


const SearchAdvanced: React.FC = ({}) => {
  const [teste, setTeste] = useState<string>("");
  return (
    <div
      style={{
        marginTop: 24,
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <div style={{ width: "50%" }}>
        <SearchInputTitle
          value={teste}
          onChange={(e) => setTeste(e.target.value)}
        />
        <SearchInputAuthor
          value={teste}
          onChange={(e) => setTeste(e.target.value)}
        />
      </div>

      <img src={Reading} alt="reading" height={183} width={294} />
    </div>
  );
};

export default SearchAdvanced;
