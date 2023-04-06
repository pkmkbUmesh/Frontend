import { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TeamMembers from "./pages/TeamMembers";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <Sidebar />
      <main>
        <Header />
        <TeamMembers />
      </main>
    </div>
  );
};

export default App;
