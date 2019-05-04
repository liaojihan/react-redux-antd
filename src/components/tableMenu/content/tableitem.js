import React, { Component } from 'react'
import { Table, Divider, Popconfirm, Icon, Button } from 'antd';
import CollectionCreateForm from '../../fromItem'
import { connect } from 'react-redux'
import { userInfoList, userInfoDelete, userInfoAdd } from '../../../actions/userAction'

const { Column } = Table;

class TableItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            formItem: [],
            isDisabled: false,
            modalTitle: ''
        }
    }

    componentDidMount() {
        this.props.userInfoList()
    }

    showDetails = (record) => {
        this.setState({
            visible: true,
            formItem: record,
            isDisabled: true,
            modalTitle: '用户详情'
        });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            form.resetFields();
            this.props.userInfoAdd(values, this.props.infoList);
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    deleteUser = index => {
        this.props.userInfoDelete(index, this.props.infoList)
    }

    add = () => {
        this.setState({
            visible: true,
            isDisabled: false,
            formItem: [],
            modalTitle: '新增用户'
        })
    }

    render() {
        return (
            <div style={{ padding: 12, background: '#fff', minHeight: 360 }}>
                <div style={{ marginBottom: 12}}>
                    <Button type="danger" onClick={this.add}>add</Button>
                </div>
                <Table dataSource={this.props.infoList ? this.props.infoList : []} >
                    <Column
                        title="名字"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="地址"
                        dataIndex="address"
                        key="address"
                    />
                    {/* <Column
                        title="标签"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <span>
                                {tags.map(tag => <Tag color="blue" key={tag} title={tag}>{tag}</Tag>)}
                            </span>
                        )}
                    /> */}
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record, index) => (
                            <span>
                                <a href="javascript:;" onClick={(e) => this.showDetails(record, e)}>详情</a>
                                <Divider type="vertical" />
                                <Popconfirm title="确定要删除吗？" icon={<Icon type="question-circle-o" 
                                style={{ color: 'red' }} />} onConfirm={(e) => this.deleteUser(index, e)}>
                                    <a href="javascript:;">Delete</a>
                                </Popconfirm>
                            </span>
                        )}
                    />
                </Table>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    record={this.state.formItem}
                    modalTitle={this.state.modalTitle}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isDisabled={this.state.isDisabled}
                />
            </div>
        )
    }
}

const mapPropsToState = state => ({
    infoList: state.user.infoList
})

export default connect(
    mapPropsToState, 
    { 
        userInfoList, 
        userInfoDelete,
        userInfoAdd
    }
)(TableItem)
