import React from "react";
import { faker } from "@faker-js/faker";
export const usefakerHook = () => {
  const fakerCommerce = {
    fakerIsbn: faker.commerce.isbn(),
    fakePprice: faker.commerce.price(),
    fakerProduct: faker.commerce.product(),
    fakerProductDescription: faker.commerce.productDescription(),
    fakerProductName: faker.commerce.productName(),
  };
  const fakePhoneData = {
    imei: faker.phone.imei(),
    phoneNumber: faker.phone.number(),
  };
  return {
    fakerCommerce,
    fakePhoneData,
  };
};
