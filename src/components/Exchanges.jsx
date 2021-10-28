import React from "react";
import millify from "millify";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import { Loader } from "../components";
import { Row, Col, Typography, Avatar } from "antd";

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row key={"header"} className="exchange-row-header">
        <Col span={6}>Değiş Tokuşlar</Col>
        <Col span={6}>24s Alım Satım Hacmi</Col>
        <Col span={6}>Marketler</Col>
        <Col span={6}>Değişim</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Row key={exchange.id} className="exchange-row">
              <Col span={6}>
                <Typography.Text>
                  <strong>{exchange.rank}.</strong>
                </Typography.Text>
                <Avatar className="exchange-image" src={exchange.iconUrl} />
                <Typography.Text>
                  <strong>{exchange.name}</strong>
                </Typography.Text>
              </Col>
              <Col span={6}>${millify(exchange.volume)}</Col>
              <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
              <Col span={6}>{millify(exchange.marketShare)}%</Col>
            </Row>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
