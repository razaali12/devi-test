import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./config";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: 55,
      user: "Users",
    },
    {
      Title: 12,
      user: "Clinics",
    },
    {
      Title: "$772",
      user: "Profit",
    },
    {
      Title: 44,
      user: "Projects",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Active Users</Title>
        {/* <Paragraph className="lastweek"> */}
          {/* than last week <span className="bnb2">+30%</span> */}
        {/* </Paragraph> */}
        {/* <Paragraph className="lastweek">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </Paragraph> */}
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
