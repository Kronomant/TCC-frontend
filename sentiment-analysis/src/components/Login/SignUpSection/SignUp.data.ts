import * as yup from 'yup'

export const SignSchema = yup.object().shape({
  firstName: yup.string().min(1, 'Campo Obrigatório').typeError('Campo Obrigatório').ensure(),
  lastName: yup.string().min(1, 'Campo Obrigatório').typeError('Campo Obrigatório').ensure(),
  email: yup.string().min(1, 'Campo Obrigatório').typeError('Campo Obrigatório').ensure(),
  password: yup.string().min(1, 'Campo Obrigatório').typeError('Campo Obrigatório').ensure(),
})