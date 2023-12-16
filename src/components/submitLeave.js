import React, { useState } from 'react';
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

    const initialValues = {
        LeaveType: 'lucy', // 设置 LeaveType 的初始值
      };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
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
                <Form.Item label="LeavePeriod" name="LeavePeriod">
                    <RangePicker />
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