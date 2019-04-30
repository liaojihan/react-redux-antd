import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import { getMenuState } from './actions/menuAction'
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
 
const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends Component {
  state = {
    collapsed: false,
    key: '0'
  };

  componentDidMount() {
    this.props.getMenuState(1);
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible 
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[this.state.key]} mode="inline">
            <Menu.Item key="0">
              <Icon type="area-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="shrink" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="pie-chart" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="loading" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(null, { getMenuState })(App)