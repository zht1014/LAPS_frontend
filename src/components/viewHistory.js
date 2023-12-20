import { useState } from 'react';
import axios from "axios";
import React from 'react';
import { Card } from 'antd';


const ViewHistory = () => {
    const list = [
        {
            fromDate: 2023 - 11 - 7,
            leaveType: 'ANNUAL LEAVE'
        },
        {
            fromDate: 2023 - 11 - 7,
            leaveType: 'ANNUAL LEAVE'
        }
    ]

    return (<Card title="Apllication History">
        {
            list.map((item) => {
                return (<Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title={item.fromDate}
                    extra={<a href="#">More</a>}
                >
                    {item.leaveType}
                </Card>)
            })
        }

    </Card>)
};
export default ViewHistory