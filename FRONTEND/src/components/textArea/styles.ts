import styled from "styled-components";
import { ITextAreaProps } from ".";
import { colors } from "../../styles/colors";

export const TextArea = styled.textarea<ITextAreaProps>`
  font-size: 24px;
  border-radius: 20px;
  background-color: #${({ disabled }) => (disabled ? "C4C4C466" : "f5f2f2")};
  color: ${colors.fonts.light};
  padding: 12px 24px;
  font-family: Arial, Helvetica, sans-serif;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: ${({ error }) => (error ? "2px solid" : "none")};
  border-color: ${({ error }) => (error ? "red" : "#000")};
  &::placeholder {
    color: #cccccc;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorContainer = styled.div`
  height: 30px;
`;

export const Error = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 4px;
  text-align: left;
  margin-left: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
