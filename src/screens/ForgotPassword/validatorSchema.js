import validators from 'utils/Validation/validators'
import * as yup from 'yup'

const validatorSchema = yup.object({
  cpf: validators.recoveryCpf
})

export default validatorSchema
