import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from '../../assets/image/brand.svg'

export const Container = styled.div`
height: 80px;
background-color: #338499;
width: 100%;
display: flex;
flex-direction: row;
`;

export const LogoContainer = styled.div`
height: 80px;
display: flex;
/* background-color: #fff; */
flex-direction: row;
justify-content: center;
align-items: center;
width: 250px;
margin-right: 80px;
`;

export const MenuContainer = styled.div`
height: 80px;
display: flex;
flex: 1;
background-color: #338499;
width: 100%;
flex-direction: row;
justify-content: space-around;
`;

// export const Item = styled.text`
// font-size: 20px;
// background-color: #fff;
// font-weight: bolder;
// `;
export const Item = styled(Link)`
display: flex;
font-size: 20px;
color: #fff;
font-weight: bolder;
justify-content: center;
align-items: center;
margin: 8px;
text-decoration: none;
`;

export const Logo = styled.img.attrs({src: brand})`
 width: 188px;
 height: 50px;
`;

