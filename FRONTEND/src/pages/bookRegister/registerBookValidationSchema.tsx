import { object,  string } from 'yup';

export const registerBookValidationSchema = object({
  title: string().required('Necessário informar um titulo'),
  author: string().required('Necessário informar um autor'),
  description: string().optional().max(200, 'A descrição pode conter no máximo 200 caracteres'),
});

