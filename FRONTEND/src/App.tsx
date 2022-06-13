import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./hooks/auth";
import { customIntercept } from "./services/api";
import { ToastProvider } from "./hooks/toast";
import SearchProvider from "./hooks/search";

function AxiosNavigateSetup() {
  const navigate = useNavigate();
  customIntercept(navigate);
  return <></>;
}
function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AxiosNavigateSetup />
      </ToastProvider>
      <AuthProvider>
        <ToastProvider>
          <SearchProvider>
            <AppRoutes />
          </SearchProvider>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
