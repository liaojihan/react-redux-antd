import React from 'react'
import {
    Modal, Form, Input
} from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, 
                form, record, isDisabled, modalTitle
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title={modalTitle}
                    okText="确认"
                    onCancel={onCancel}
                    cancelText="取消"
                    onOk={onCreate}
                    maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
                >
                    <Form layout="vertical">
                        <Form.Item label="名字">
                            {
                                getFieldDecorator(
                                    'name', {
                                        initialValue: record.name
                                    }
                                )(
                                    <Input disabled={isDisabled}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="年龄">
                            {
                                getFieldDecorator(
                                    'age', {
                                        initialValue: record.age
                                    }
                                )(
                                    <Input disabled={isDisabled}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="地址">
                            {
                                getFieldDecorator(
                                    'address', {
                                        initialValue: record.address
                                    }
                                )(
                                    <Input disabled={isDisabled}/>
                                )
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    }
);


export default CollectionCreateForm
