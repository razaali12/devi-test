// import { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DASHBOARD_ROUTE, SIDEBAR_LINKS } from "../../constants";
import { Images } from "../../themes";

function Sidenav({ page }) {
  return (
    <>
      <div className="brand">
        <NavLink to={DASHBOARD_ROUTE}>
          <img className="logo-box" src={Images.Logo} alt="" />
        </NavLink>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {SIDEBAR_LINKS.map((item, index) => (
          <Menu.Item key={index}>
            <NavLink to={item.route}>
              <span
                className="icon"
                style={{
                  background:
                    page === item.title ||
                    page.includes(item.title.toLowerCase().slice(0, -1))
                      ? "#2e3192"
                      : "",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    color:
                      page === item.title ||
                      page.includes(item.title.toLowerCase().slice(0, -1))
                        ? "#fff"
                        : "#bfbfbf",
                  }}
                  icon={item.icon}
                />
              </span>
              <span className="label">{item.title}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
}

export default Sidenav;
