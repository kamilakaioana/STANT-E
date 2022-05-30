import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./hooks/auth";
import { customIntercept } from "./services/api";
import { ToastProvider } from "./hooks/toast";

function AxiosNavigateSetup() {
  const navigate = useNavigate();
  customIntercept(navigate);
  return <></>;
}
function App() {
  return (
    <BrowserRouter>
      <AxiosNavigateSetup />
      <AuthProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
