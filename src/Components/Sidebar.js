import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '/home/zain/React/task/src/Sidebar.css'
import useCategoryApi from '../api/useCategoryApi'
import { Search } from './Search'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Spin } from 'antd';
export const Sidebar = () => {
    const { CategoryData: Data, loading, error } = useCategoryApi("https://dummyjson.com/products/categories")
    if (loading) return <Spin size="large" />
    if (error) return (
        <>
            <h3>Error Occured </h3>
            <ExclamationCircleFilled style={{ color: 'red', fontSize: '50px' }} />
        </>
    )
    return (
        <div className="Sidebar">
            {/* {error !== "" && <h2>{error}</h2>} */}
            <div className="content">
                <div className="sidebarr">
                    <input type="text" placeholder='Search...' className='searchSidebar' />
                    {/* <Search /> */}
                    <ul className='list'>
                        {Data?.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}
