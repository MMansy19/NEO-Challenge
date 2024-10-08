import React from "react";
import { MainView } from "./views/MainView";
import "./index.css"; // Import Tailwind CSS styles

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <MainView />
    </div>
  );
};

export default App;
