import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, pathname]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={50} className="logo-avatar" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cry-pto</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" selectedKeys={[pathname]}>
          <Menu.Item key={"/"} icon={<HomeOutlined />}>
            <Link to="/">Ana Sayfa</Link>
          </Menu.Item>
          <Menu.Item key={"/cryptocurrencies"} icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Kripto Paralar</Link>
          </Menu.Item>
          <Menu.Item key={"/exchanges"} icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Değiş Tokuş</Link>
          </Menu.Item>
          <Menu.Item key={"/news"} icon={<BulbOutlined />}>
            <Link to="/news">Haberler</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
