import React from "react";
import { Button, Card, Layout, theme } from "antd";
import Navbar from "../components/navbar";
import { pdf, Document, Page, Text, View } from "@react-pdf/renderer";
import DashboardUpperCards from "../components/cards/DashboardUpperCards";
import DashboardLowerCards from "../components/cards/DashboardLowerCards";
import { useDashboardQuery } from "../redux/api";

const { Content } = Layout;

const Dashboard = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const { data, isSuccess, error, isLoading } = useDashboardQuery();

  const generatePDFReport = () => {
    const doc = (
      <Document>
        <Page>
          <PredictionsPDF data={data?.predictedSales} />
        </Page>
      </Document>
    );

    pdf(doc).toBlob().then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "NextMonthSalesPrediction.pdf";
      link.click();
    });
  };

  return (
    <Content style={{ padding: "22px", height: "88vh" }}>
      <div
        style={{
          padding: 24,
          minHeight: "82vh",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          display: "flex",
          gap: 20,
          flexDirection: "column",
        }}
      >
        <DashboardUpperCards data={data} />
        <DashboardLowerCards data={data} />
        <Card type="inner" title="Download next month Estimate sales report generated by AI & ML." extra={<Button type="text" onClick={generatePDFReport}>Download</Button>}>
          This generated file includes your store's report and analysis data.
        </Card>
      </div>
    </Content>
  );
};

const PredictionsPDF = ({ data }) => {
  const currentDate = new Date();
  const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  const nextMonthName = nextMonth.toLocaleString('default', { month: 'long' });
  const nextMonthYear = nextMonth.getFullYear();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>{`Sales Prediction for ${nextMonthName} ${nextMonthYear}`}</Text>
      {data?.map((prediction, index) => (
        <Text key={index}>
          {index + 1}. Product: {prediction.name}, Predicted Sales: {prediction.prediction}
        </Text>
      ))}
    </View>
  );
};

export default Dashboard;