import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Products = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  }); // State to store the details of the new product

  const handleAddProduct = () => {
    // Logic to add the new product to the products array
    // You can also perform validation before adding the product
    // For example: Check if all fields are filled before adding the product
    // Once the product is added, you can close the modal
    setModal2Open(false);
  };
  const products = [
    {
      name: "Product 1",
      price: "$10",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 2",
      price: "$20",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 3",
      price: "$30",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 4",
      price: "$40",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 5",
      price: "$50",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 5",
      price: "$50",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 5",
      price: "$50",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 5",
      price: "$50",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      name: "Product 5",
      price: "$50",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Button
        type="dashed"
        style={{
          backgroundColor: "#8251FE",
          color: "white",
          float: "right",
          marginBottom: "20px",
        }}
        onClick={() => setModal2Open(true)}
      >
        Add Product
      </Button>
      <Modal
        title="Add New Product"
        okText="Save"
        centered
        visible={modal2Open}
        onOk={handleAddProduct}
        onCancel={() => setModal2Open(false)}
      >
        <Input
          style={{ margin: "10px 0" }}
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <Input
          placeholder="Price"
          value={newProduct.price}
          style={{ margin: "10px 0" }}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <Upload
          beforeUpload={(file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              setNewProduct({ ...newProduct, image: reader.result });
            };
            return false;
          }}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
        {newProduct.image && (
          <img
            src={newProduct.image}
            alt="Preview"
            style={{ marginTop: 10, maxWidth: 200 }}
          />
        )}
      </Modal>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<img alt={product.name} src={product.image} />}
            >
              <Card.Meta
                style={{ margin: 0, marginTop: 10 }}
                title={product.name}
                description={`Price: ${product.price}`}
              />
              <Button
                type="primary"
                style={{ backgroundColor: "#8251FE", marginTop: "10px" }}
              >
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
