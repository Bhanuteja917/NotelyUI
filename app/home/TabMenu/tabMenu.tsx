import React from "react";
import "./tabMenu.css";

export default function TabMenu() {
  return (
    <>
      <ul className="tab-list">
        <div className="group tab-trigger-wrapper">
          <li className="tab-trigger">
            <p>ALL</p>
          </li>
          <hr className="tab-trigger-line" />
        </div>
        <div>
          <div className="group tab-trigger-wrapper">
            <li className="tab-trigger">
              <p>PERSONAL</p>
            </li>
            <hr className="tab-trigger-line" />
          </div>
        </div>
        <div>
          <div className="group tab-trigger-wrapper">
            <li className="tab-trigger">
              <p>HOME</p>
            </li>
            <hr className="tab-trigger-line" />
          </div>
        </div>
        <div>
          <div className="group tab-trigger-wrapper">
            <li className="tab-trigger">
              <p>BUSINESS</p>
            </li>
            <hr className="tab-trigger-line" />
          </div>
        </div>
      </ul>
    </>
  );
}
