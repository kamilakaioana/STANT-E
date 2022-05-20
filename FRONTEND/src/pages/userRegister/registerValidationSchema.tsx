import { object, string } from 'yup';

export const registerValidationSchema = object({
  name: string().required('Informe o nome completo'),
  email: string().email('Deve informar um email valido').required('Informe um e-mail'),
  password: string().required('Informe uma senha'),
  confirmPassword: string().required('Confirme sua senha'),
});