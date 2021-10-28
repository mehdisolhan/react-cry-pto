import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Button } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News, Loader } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Global Kripto Para İstatistikleri
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Toplam Kripto Paralar" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Toplam Market Hacmi:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="24 saatlik Hacim"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Toplam Marketler"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Kripto Para
        </Title>
        <Title level={3} className="show-more">
          <Button shape="round">
            <Link to="/cryptocurrencies">Daha Fazla</Link>
          </Button>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          En son haberler
        </Title>
        <Title level={3} className="show-more">
          <Button shape="round">
            <Link to="/news">Daha Fazla</Link>
          </Button>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
