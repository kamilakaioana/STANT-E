import { Button } from "../../components/button/styles";
import { useAuth } from "../../hooks/auth";

function Home() {
  const { signOut} = useAuth();

  return (
    <div >
       <Button onClick={() => signOut()}>DESLOGAR</Button>
    </div>


  )
}

export default Home;

