import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  const content = useRoutes(routes);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <SideBar />
      {content}
    </div>
  );
};

export default App;
