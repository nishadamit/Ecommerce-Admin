import styled from "styled-components";

export const H1 = styled.h1`
      font-size: 26px;
      color: ${props =>(props.theme[props.color] || '#000000')};
      font-weight: 700;
`

export const H2 = styled.h2`
      font-size: 22px;
      color: ${props =>(props.theme[props.color] || '#000000')};
      font-weight: 600;
`

export const H5 = styled.h5`
      font-size: 16px;
      color: ${props =>(props.theme[props.color] || '#000000')};
      font-weight: 400;
`