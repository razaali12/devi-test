import React from "react";
import { Row, Col, Breadcrumb, Button, Badge, Dropdown, Menu } from "antd";
import {
  faBell,
  faCog,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { DASHBOARD_ROUTE, WEB_STRINGS } from "../../constants";
import { useDispatch } from "react-redux";
import { userSignOutSuccess } from "../../redux/slicers/user";

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

const { HEADER } = WEB_STRINGS;
const { USERMENU, NOTI } = HEADER;

const menu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      {
        label: NOTI.TITLE,
        className: "title",
        key: "1",
      },
      {
        label: NOTI.NOTI1,
        key: "2",
      },
      {
        label: NOTI.NOTI2,
        key: "3",
      },
      {
        label: NOTI.NOTI3,
        key: "4",
      },
    ]}
  />
);

function Header({ onPress, page, logout }) {
  const pageName = page.includes("/") ? page.split("/") : page;
  const title = page.includes("/") ? pageName[0] : page;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userSignOutSuccess());
  };

  const profile = (
    <Menu
      onClick={() => {
        console.log("ssss");
      }}
      items={[
        // {
        //   label: USERMENU.USERNAME,
        //   key: "1",
        // },
        // {
        //   label: USERMENU.ACCOUNT,
        //   key: "2",
        //   icon: <FontAwesomeIcon icon={USERMENU.accIcon} />,
        // },
        {
          label: USERMENU.LOGOUT,
          key: "3",
          onClick: () => {
            console.log("hello world")
            handleLogout();
          },
          icon: <FontAwesomeIcon icon={USERMENU.logoutIcon} />,
        },
      ]}
    />
  );

  return (
    <>
      <Row>
        <Col span={16} md={12}>
          {title === "dashboard" ? (
            <Breadcrumb>
              <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
                {HEADER.MESSAGE}
              </Breadcrumb.Item>
            </Breadcrumb>
          ) : (
            <Breadcrumb>
              <Breadcrumb.Item>
                <NavLink to={DASHBOARD_ROUTE}>{HEADER.TITLE}</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
                {title}
              </Breadcrumb.Item>
            </Breadcrumb>
          )}
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {title}
            </span>
          </div>
        </Col>
        <Col span={8} md={12} className="header-control header-nav">
          {/* <Dropdown trigger={["click"]} overlay={menu}>
            <Badge size="small" count={4}>
              <span className="ant-dropdown-link">
                <FontAwesomeIcon icon={faBell} />
              </span>
            </Badge>
          </Dropdown> */}
          <Dropdown trigger={["click"]} overlay={profile}>
            <span className="ant-dropdown-link">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </Dropdown>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Header;
