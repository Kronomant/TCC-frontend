import * as yup from 'yup'

export const validateSchema = async (
  schema: yup.AnyObjectSchema | yup.AnySchema,
  obj: unknown,
  setErrors: (e: { [key: string]: string }) => void,
  callback?: () => void | Promise<void>,
): Promise<boolean> => {
  let status = false
  await schema
    ?.validate(obj, { abortEarly: false })
    ?.then(() => {
      setErrors({})
      callback?.()
      status = true
    })
    ?.catch((err: yup.ValidationError) => {
      const validationErrors = {}
      err?.inner?.forEach((error) => {
        const key = error?.path?.split('.')[0]
        if (key) Object.assign(validationErrors, { [key]: error?.message })
      })
      setErrors(validationErrors)
      status = false
    })

  return status
}
