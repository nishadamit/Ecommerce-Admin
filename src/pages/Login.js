import React from 'react';
import { Form, Input, Button, Checkbox,Row,Col } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { H1 } from '../components/Text/Text';
import styled from 'styled-components';

const onFinish = () =>{

}

const Login = ()=>{
      return(
        <StyledRow>
           <Col md={{span:8,offset:8}} sm={{span:18,offset:3}} xs={{span:18,offset:3}}>
                <H1>Login</H1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                >
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
                            Log in
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

export default Login