import { object, string } from 'yup';

export const loginValidationSchema = object({
  email: string().email('Deve informar um email valido').required('O campo e-mail é obrigatório'),
  password: string().required('O campo senha é obrigatório'),
});