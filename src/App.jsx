import { Outlet } from "react-router-dom";
import { Navbar } from "./components/layout";

const App = () => {
  /* Write conditional logic for not rendering navbar on login and signin */
  /* Possibly write two versions of app render so the layout is not messed up */
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
