import { Input } from "../../components/input/styles";
import styled from 'styled-components';
import CustomButton from "../../components/button";
import FakeImg from "../../assets/image/fakeImg.png";

export const Livros = styled.div`
display: grid; 
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 30px;
`;

export const Container = styled.div`
min-height: 100vh;
background-color: #eee ; //trocar
padding: 30px;
`;

export const Livro = styled.div`
/* align-items: center;
justify-content: center;
display: flex;
text-align: center; */
background-color: #fff;
/* flex-direction: column; */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
transition: transform 100ms ease-in-out; 
:hover{
  transform: scale(1.05);
}
cursor: pointer;
`;


export const Content = styled.div`
padding: 30px;
/* display: flex;
text-align: center;
flex-direction: column; */
`;
export const BookImage = styled.img.attrs({src: FakeImg, alt: 'imagem livro'})`
max-width: 100%;

`;