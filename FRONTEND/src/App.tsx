import './App.css';
import { BrowserRouter, useNavigate,  } from "react-router-dom";
import AppRoutes from './routes'
import { AuthProvider } from './hooks/auth';
import { customIntercept } from './services/api';

function AxiosNavigateSetup() {
  const navigate = useNavigate();
  customIntercept(navigate)
  return <></>
  
}
function App() {
  return (

        <BrowserRouter>
        <AxiosNavigateSetup/>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
  );
}

export default App;
