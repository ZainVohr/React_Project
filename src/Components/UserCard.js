import React from "react";
import { Card, Typography, Space, Image, Row, Col } from "antd";
import { faker } from "@faker-js/faker";
import { usefakerHook } from "../customHooks/fakerHook";
const { Text } = Typography;

const UserCard = ({ user }) => {
  const { fakerCommerce, fakePhoneData } = usefakerHook();
  console.log(
    fakerCommerce.fakePprice,
    fakerCommerce.fakerIsbn,
    fakerCommerce.fakerProduct
  );

  return (
    <Row justify="center">
      <Col>
        <Card
          hoverable
          style={{ width: 300, margin: "10px" }}
          cover={<Image alt={`Avatar of ${user.firstName}`} src={user.image} />}
        >
          <Card.Meta
            title={`${user.firstName} ${user.lastName}`}
            description={
              <Space direction="vertical">
                <Text>
                  Address: {user.address.address}, {user.address.city},
                  {user.address.state}
                </Text>
                <Text>IMEI: {fakePhoneData.imei}</Text>
                <Text>Phone Number: {fakePhoneData.phoneNumber}</Text>
              </Space>
            }
          />
        </Card>
      </Col>
    </Row>
  );
};

export default UserCard;
