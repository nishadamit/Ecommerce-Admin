import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { H1, H5 } from '../Text/Text';

const { Header, Footer, Sider, Content } = Layout;


const Header1 = (props) =>{
      return(
         <StyledHeader>
               <H1 color="white">Admin</H1>
                <List>
                       <Link to="/login"> <li>SignIn</li></Link>
                       <Link to="/signup"><li>SignUp</li></Link>
                </List>
         </StyledHeader>
      )
}

const StyledHeader = styled(Header)`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
`

const List = styled.ul`
       display: flex;
       color: #ffffff;
       list-style: none;
       >a{
           color: #ffffff !important;
           margin-right: 10px;
       }
`

export default Header1