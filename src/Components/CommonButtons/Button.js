// Button.js
import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom"
const CustomButton = ({ text, type, to }) => (
    <Link to={to}>
        <Button type={type} >
            {text}
        </Button>
    </Link>
);

export default CustomButton;
