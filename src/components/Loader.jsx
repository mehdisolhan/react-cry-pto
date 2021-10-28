import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const Loader = () => (
  <div className="loader">
    <Spin indicator={antIcon} />
  </div>
);

export default Loader;
