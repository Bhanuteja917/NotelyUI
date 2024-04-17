import React, { FC } from "react";
import "./tabMenu.css";

interface TabMenuProps {
  tabs: string[];
}

const TabMenu: FC<TabMenuProps> = ({ tabs }) => {
  return (
    <>
      <ul className="tab-list">
        {tabs.map((tab, index) => {
          return (
            <div className="group tab-trigger-wrapper" key={index}>
              <li className="tab-trigger">
                <p>{tab}</p>
              </li>
              <hr className="tab-trigger-line" />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default TabMenu;
