import React from 'react';
import { Form, Input, Button, Checkbox,Row,Col } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { H1 } from '../components/Text/Text';
import styled from 'styled-components';

const onFinish = () =>{

}

const SignUp = ()=>{
      return(
        <StyledRow>
           <Col md={{span:8,offset:8}} sm={{span:18,offset:3}} xs={{span:18,offset:3}}>
                <H1>Sign Up</H1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="firstname"
                        rules={[{ 
                            required: true, 
                            message: 'Please input your first name!',
                        }]}
                    >
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="First Name" 
                        />
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        rules={[{
                            required: true, 
                            message: 'Please input your last name!'
                        }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Last Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ 
                            required: true, 
                            message: 'Please input your email!',
                        }]}
                    >
                        <Input 
                            prefix={<FontAwesomeIcon icon={faEnvelope} />} 
                            placeholder="Email" 
                            type="email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true, 
                            message: 'Please input your Password!'
                        }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign Up
                        </Button>
                    </Form.Item>
               </Form>
           </Col>
        </StyledRow>
      )
}

const StyledRow = styled(Row)`
       margin-top: 100px;
`

export default SignUp