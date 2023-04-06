import React, { useContext } from "react";
import { SidebarNavs } from "../utils";
import { MoonIcon, SunIcon } from "../assets/icons";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <aside>
      <section>
        {SidebarNavs.map((item) => {
          const { id, icon: Icon, title } = item;
          return (
            <nav key={id} className={id === "team-member" ? "active" : ""}>
              <Icon />
              <p className="sub-title">{title}</p>
            </nav>
          );
        })}
      </section>
      <nav
        onClick={handleThemeChange}
        className={theme === "dark" ? "active" : ""}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        <p className="sub-title">
          {theme === "dark" ? "Dark Mode" : "Light Mode"}{" "}
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;
