import validators from 'utils/Validation/validators'
import * as yup from 'yup'

const validatorSchema = yup.object({
  cpf: validators.loginCpf,
  password: validators.password
})

export default validatorSchema
