import * as yup from "yup"

export const TagSchema = yup.object().shape({
  term: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
  location: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
  frequency: yup
    .number()
    .positive("Deve ser um número positivo")
    .typeError("Campo Obrigatório"),
})
