import styled from 'styled-components';
import HeartRedIcon from "../../assets/icon/heartRed.svg";

type imageSrc = {
  src: string;
}
export const Livros = styled.div`
display: grid; 
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 30px;
`;

export const Container = styled.div`
min-height: 100vh;
background-color: #fff ; 
padding: 30px;
border-radius: 20px;
`;

export const Livro = styled.div`
background-color: #F2F8F7;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
transition: transform 100ms ease-in-out; 
border-radius: 20px;
:hover{
  transform: scale(1.05);
}
cursor: pointer;
overflow: hidden;
`;

export const Content = styled.div`
padding: 16px 16px;
height: 50px;
`;

export const BookImage = styled.img.attrs({ alt: 'imagem livro'})<imageSrc>`
width: 100%;
height: 100%;
object-fit:contain;
`;

export const HeartIconRed = styled.img.attrs({src: HeartRedIcon})`
height: 24px;
width: 24px;
margin-right: 8px;
align-self: center; 
`;