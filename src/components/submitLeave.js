import { useState } from 'react';
import axios from "axios";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';

const { TextArea } = Input;


const SubmitLeave = () => {
    const [form] = Form.useForm();
    const [list, setList] = useState({});

    const initialValues = {
        LeaveType: 'Annual Leave',
    };

    const onFinish = (values) => {    
        setList(values);
        creatApplication();
    };

    function creatApplication() {
        const selectedDate = list.FromDate.toDate();
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const hours = String(selectedDate.getHours()).padStart(2, '0');
        const minutes = String(selectedDate.getMinutes()).padStart(2, '0');
        const seconds = String(selectedDate.getSeconds()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        console.log(formattedDate);
        const data = {
            employee: 'employee1',
            fromDate: formattedDate,
            dayOff: list.Dates,
            employeeLeaveType: list.LeaveType,
        }
        console.log('Received values of form: ', data);
        axios.post('http://localhost:8080/api/application/create', data)
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log('fail')
                console.log(e)
            })
    }
    return (
        <>
            <Form
                form={form}
                name="submit"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                initialValues={initialValues}
            >

                <Form.Item label="LeaveType" name="LeaveType">
                    <Select
                        initialValues="Annual Leave"
                        style={{ width: 120 }}
                        options={[
                            { value: 'Annual Leave', label: 'Annual Leave1' },
                            { value: 'type2', label: 'type2' },
                            { value: 'type3', label: 'type3' },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="FromDate" name="FromDate">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Dates" name="Dates">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Reasons" name="Reasons">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="ContactDetails" name="ContactDetails">
                    <Input />
                </Form.Item>
                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SubmitLeave;