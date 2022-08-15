import validators from 'utils/Validation/validators'
import * as yup from 'yup'

const validatorSchema = yup.object({
  cellPhone_flag: yup.boolean(),
  cellPhone: yup.string().when('cellPhone_flag', {
    is: false,
    then: validators.mobile_number
  }),
  password: validators.newPassword,
  passwordConfirmation: validators.passwordMatch,
  acceptTerms: validators.requiredBool
})

export default validatorSchema
