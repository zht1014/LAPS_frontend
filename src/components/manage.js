
import axios from "axios";
import { Card, Button, message, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';

const Manage = () => {
    const [historyList, setHistoryList] = useState([]);
    const list = [
        {
            fromDate: '2023 - 11 - 7',
            leaveType: 'ANNUAL LEAVE'
        },
        {
            fromDate: '2023 - 11 - 7',
            leaveType: 'ANNUAL LEAVE'
        }
    ]
    useEffect(() => {
        setHistoryList(list)
    }, [])

    const confirm = (index) => {
        const updatedList = [...historyList];
        updatedList.splice(index, 1);
        setHistoryList(updatedList);
        message.success('Click on Yes');
    };

    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    return (
        <Card title="Application History">
            {historyList.map((item, index) => (
                <Card
                    key={index}
                    style={{ marginTop: 16 }}
                    type="inner"
                    title={item.fromDate}
                    extra={<Popconfirm
                        key={index}
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(index)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>}
                >
                    <p>Leave Type: {item.leaveType}</p>
                    <p>From Date: {item.fromDate}</p>

                </Card>
            ))}
        </Card>
    )
}
export default Manage