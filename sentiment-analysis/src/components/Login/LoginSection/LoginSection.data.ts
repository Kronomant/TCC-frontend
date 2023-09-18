import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  email: yup.string().min(1, 'Campo Obrigatório').typeError('Campo Obrigatório').ensure(),
  password: yup.string().min(1, 'Campo Obrigatório').typeError('Campo Obrigatório').ensure(),
})