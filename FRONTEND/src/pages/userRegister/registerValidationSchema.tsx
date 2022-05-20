import { object, ref, string } from 'yup';

export const registerValidationSchema = object({
  name: string().required('Necessário informar um nome e sobrenome').matches(/^([^0-9]*)$/, 'Informe um nome e sobrenome válidos').matches(/^[a-z]{2,} [a-z]{2,}/gi, 'Informe o nome completo'),
  email: string().email('Necessário informar um email valido').required('Informe um e-mail'),
  password: string().required('Informar uma senha'),
  confirmPassword: string().required('Confirme sua senha').oneOf([ref('password'), null], 'As senhas precisam ser iguais'),
});