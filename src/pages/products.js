import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  useAddProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../redux/api";
import dummyProduct from "../assets/dummy-product.png";
import { toast } from "react-toastify";
const { Meta } = Card;

const Products = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [purchasedProduct] = useUpdateProductMutation();
  const isMobile = window.innerWidth < 767;
  const handleAddProduct = async () => {
    try {
      await addProduct(newProduct).unwrap();
      setModal2Open(false);
      setNewProduct({ image: "", name: "", price: "" });
      // handle success, e.g., show a notification
    } catch (err) {
      // handle error, e.g., show an error message
    }
  };

  const purchaseProduct = (productId) => {
    purchasedProduct({productId: productId});
    toast.success("Product purchased...but stripe Integration is pending!!!");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div style={{ padding: "20px", display: isMobile && 'flex',flexDirection: isMobile && 'column'  }}>
      <Button
        type="dashed"
        style={{
          backgroundColor: "#8251FE",
          color: "white",
          float: !isMobile && "right",
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
              style={{ width: !isMobile && 200 }}
              cover={
                <img alt={product.name} src={product?.image || dummyProduct} />
              }
            >
              <Card.Meta
                style={{ margin: 0, marginTop: 10 }}
                title={product.name}
                description={`Price: ${product.price}`}
              />
              <Button
                type="primary"
                style={{ backgroundColor: "#8251FE", marginTop: "10px" }}
                onClick={() => purchaseProduct(product._id)} // Update the onClick handler
              >
                Buy now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
