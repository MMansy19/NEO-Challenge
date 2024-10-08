import React from "react";
import { MainView } from "./views/MainView";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <ErrorBoundary>
        <MainView />
      </ErrorBoundary>
    </div>
  );
};

export default App;
