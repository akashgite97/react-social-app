import * as React from "react";

import "./sideBarMenu.scss";

export default function SideBarMenu({ Icon, title }) {
  return (
    <div className="sidebarMenu">
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}
