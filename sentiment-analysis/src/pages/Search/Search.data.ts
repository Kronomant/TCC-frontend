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

export const CompareTermsSchema = yup.object().shape({
  terms: yup
    .array()
    .of(yup.string().required("Campo Obrigatório"))
    .min(2, "Deve conter no mínimo 2 termos")
    .required("Campo Obrigatório"),
  location: yup
    .string()
    .min(1, "Campo Obrigatório")
    .typeError("Campo Obrigatório")
    .ensure(),
})
