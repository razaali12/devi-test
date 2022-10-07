import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AnalayticsCard({ title, thumb, total }) {
  const { Title } = Typography;
  return (
    <Card bordered={false}>
      <div className="number">
        <Row align="middle">
          <Col xs={18}>
            <span>{title}</span>
            <Title level={3}>{total || 0}</Title>
          </Col>
          <Col xs={6}>
            <div className="icon-box">
              <FontAwesomeIcon icon={thumb} />
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default AnalayticsCard;
