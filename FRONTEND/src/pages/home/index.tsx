import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/styles";
import { useAuth } from "../../hooks/auth";

function Home() {
  const { signOut} = useAuth();
  const navigate = useNavigate();
  
  const handleLogOut = async () => {
   await signOut();
   navigate("/login"); // check again
  }

  return (
    <div >
       <Button onClick={() => handleLogOut()}>DESLOGAR</Button>
       <Button onClick={() => navigate("/bookRegister")}>REGISTRAR LIVRO</Button>
    </div>


  )
}

export default Home;

