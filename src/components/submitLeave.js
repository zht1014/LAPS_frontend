import { useState } from 'react';
import axios from "axios";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    TreeSelect,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;


const SubmitLeave = () => {
    const [form] = Form.useForm();
    const [list, setList] = useState({});

    const initialValues = {
        LeaveType: 'type1', // 设置 LeaveType 的初始值
      };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setList(values);
        creatApplication();
    };

    function creatApplication(){
        const data = {
            employee: 'employee1',
            fromDate: list.FromDate,
            dayOff: list.Dates,
            employeeLeaveType: list.LeaveType,
        }
        axios.post("http://localhost:8080/api/application/list",data)
             .then(response => {
                console.log(response.data)
             })
             .catch(e => {
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
                        initialValues="type1"
                        style={{ width: 120 }}
                        options={[
                            { value: 'type1', label: 'type1' },
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