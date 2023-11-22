import * as yup from "yup"

export const KeySchema = yup.object().shape({
  consumer_key: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
  consumer_secret: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
  access_token: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
  access_token_secret: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
})
