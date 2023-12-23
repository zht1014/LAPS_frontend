
import axios from "axios";
import { Card, Button, message, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';

const Manage = () => {
    const [historyList, setHistoryList] = useState([]);
    const user_id = 1;
    const list = [
        {
            application_id: 1,
            fromDate: '2023 - 11 - 7',
            leaveType: 'ANNUAL LEAVE'
        },
        {
            application_id: 2,
            fromDate: '2023 - 11 - 7',
            leaveType: 'ANNUAL LEAVE'
        }
    ] //测试时list也注释掉


    useEffect(() => {
        setHistoryList(list) //也注释掉
        axios.get(`http://localhost:8080/api/application/get-application-by-employee-id/${user_id}`)
            .then(response => {
                const filteredData = response.data.map(item => ({
                    application_id: item.application_id,
                    fromDate: item.fromDate,
                    leaveType: item.employeeLeaveType,
                    dayOff: item.dayOff,
                    applicationStatus: item.applicationStatus,
                    compensationStart: item.compensationStart
                }));
                setHistoryList(filteredData);
                console.log(filteredData)
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const confirm = (index) => {
        const selected = historyList[index]
        const application_id = selected.application_id
        axios.delete(`localhost:8080/api/application/delete/${application_id}`)
            .then(response => {
                console.log('deleted!')
                const updatedList = [...historyList];
                updatedList.splice(index, 1);
                setHistoryList(updatedList);
                message.success('deleted!');
            })
            .catch(error => {
                console.error("Error deleting data: ", error);
                message.error("failed")

            })

    };

    const cancel = (e) => {
        console.log(e);
        message.error('cancelled');
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