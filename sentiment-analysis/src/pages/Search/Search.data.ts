import * as yup from "yup"

export const RealTimeSchema = yup.object().shape({
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
})
