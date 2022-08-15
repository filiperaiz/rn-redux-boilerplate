import { add, isAfter, isValid, isBefore } from 'date-fns'
import * as Yup from 'yup'

import { validatorsTests } from './validatorsTests'

const validators = {
  name: Yup.string()
    .required('Precisamos do seu nome para continuar com a contratação.')
    .test('testFirstName', 'Digite apenas letras!', validatorsTests.onlyText)
    .test(
      'testNoSpaceFirst',
      'Não pode iniciar com valor em branco!',
      validatorsTests.notSpaceFirst
    ),
  password: Yup.string()
    .required('Campo obrigatório!')
    .min(6, 'Mínimo de 6 caracteres'),
  newPassword: Yup.string()
    .required('Precisamos que você crie uma senha.')
    .min(8, 'Sua senha deve conter no mínimo 8 caracteres.'),
  passwordMatch: Yup.string()
    .required('Para sua segurança, precisamos que você confirme sua senha.')
    .oneOf([Yup.ref('password'), null], 'Suas senhas precisam ser idênticas.'),
  cpf: Yup.string()
    .required('Precisamos do seu CPF para continuar com a contratação.')
    .test('testCpf', 'CPF Inválido', validatorsTests.isValidCpf),
  loginCpf: Yup.string()
    .required('Precisamos do seu CPF para continuar com a contratação.')
    .test('testCpf', 'CPF Inválido', validatorsTests.isValidCpf),
  recoveryCpf: Yup.string()
    .required('Precisamos do seu CPF para te enviar o e-mail.')
    .test('testCpf', 'Seu CPF precisa ser válido.', validatorsTests.isValidCpf),
  emittingDate: Yup.mixed()
    .required('Essa data não é compatível.')
    .test('validDate', 'Essa data não é compatível.', (value) => {
      if (value) {
        const formatDataValue = value.split('/').reverse().join('/')
        return (
          isValid(new Date(formatDataValue)) &&
          isBefore(new Date(formatDataValue), add(new Date(), { days: 0 })) &&
          isAfter(new Date(formatDataValue), new Date('1900/01/01'))
        )
      }
      return true
    })
    .test('match', 'Emissão menor que o nascimento!', function () {
      const { birth_date, emittingDate } = this.parent
      const formatBirthDate = birth_date?.split('/').reverse().join('/')
      const formatEmitDate = emittingDate?.split('/').reverse().join('/')
      if (
        isValid(new Date(formatBirthDate)) &&
        isValid(new Date(formatEmitDate))
      ) {
        const emi = formatEmitDate
        const bir = formatBirthDate
        return isAfter(add(new Date(emi), { minutes: 5 }), new Date(bir))
      }
      return true
    }),
  email: Yup.string()
    .required('Precisamos do seu e-mail para continuar com a contratação.')
    .test('email', 'E-mail inválido', (value) =>
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    )
    .max(120, 'Deve conter no máximo 120 caracteres'),
  mobile_number: Yup.string()
    .required(
      'Precisamos do número do seu celular para continuar com a contratação.'
    )
    .test({
      name: 'Mobile Number',
      message: 'Seu número de celular precisa ser válido.',
      test: (value) =>
        value &&
        Number.isInteger(Math.abs(value.replace(/[^0-9]/g, ''))) &&
        value.replace(/[^0-9]/g, '').length === 11
    }),
  postalCode: Yup.string()
    .required('Precisamos do seu CEP.')
    .max(9, 'Deve conter no máximo 8 caracteres')
    .test('validCep', 'Cep inválido!', (value) => {
      if (value) {
        const cepNoMask = value.replace('-', '')
        return cepNoMask.length === 8
      }
      return false
    }),
  required: (type = 'string', msg = 'Campo obrigatório') =>
    Yup[type]().required(msg),
  requiredWithParam: (param, maxLength = 100) =>
    Yup.string()
      .required(`Precisamos que informe ${param}`)
      .max(maxLength, `Campo ultrapassou ${maxLength} caracteres.`),
  requiredNullable: (type = 'string', msg = 'Campo obrigatório') =>
    Yup[type]().nullable().required(msg),
  requiredBool: Yup.bool()
    .required('Campo obrigatório')
    .test('requiredBool', 'Campo obrigatório', validatorsTests.isChecked),
  onlyText: Yup.string()
    .required('Campo obrigatório')
    .test(
      'only-text',
      'Campo não pode conter números',
      validatorsTests.onlyText
    ),
  onlyNumber: Yup.string()
    .required('Campo obrigatório')
    .test(
      'only-number',
      'Campo só pode conter números',
      validatorsTests.onlyNumber
    ),
  maxLength: (maxLength = 100) =>
    Yup.string().max(maxLength, `Campo ultrapassou ${maxLength} caracteres.`),
  fullName: Yup.string()
    .trim()
    .required('Precisamos do seu nome para continuar com a contratação.')
    .test('only-text', 'Não pode conter número', validatorsTests.onlyText)
    .test(
      'first-name',
      'Nome deve conter no mínimo 2 caracteres',
      validatorsTests.firstName
    )
    .test(
      'last-name',
      'Sobrenome deve conter no mínimo 2 caracteres',
      validatorsTests.lastName
    )
    .max(100, 'Nome deve conter no máximo 100 caracteres'),
  product: Yup.string().ensure().required('Produto é obrigatório!'),
  medium: Yup.string().ensure().required('Canal de Pagamento é obrigatório!'),
  birth_date: Yup.string()
    .required(
      'Precisamos da sua data de nascimento para validar a sua documentação.'
    )
    .test('test-date', 'Data inválida', validatorsTests.isValidDate)
    .test('test-age', 'Deve ser maior que 18 anos', validatorsTests.isValidAge),
  addressNumber: Yup.string()
    .required('Precisamos que informe o número da sua residência.')
    .max(5, 'Número deve conter no máximo 5 caracteres')
    .test(
      'special-chars',
      'Campo não pode conter caracteres especiais',
      (value) => {
        return !/[^A-Za-z0-9]/.test(value)
      }
    )
    .test('some-number', 'Campo precisa conter ao menos um número', (value) =>
      /\d/.test(value)
    )
    .test(
      'no-letters-middle',
      'Não pode conter letras no meio do número',
      (value) => {
        return (
          value &&
          (value.length < 2 ||
            validatorsTests.onlyNumber(value.substring(0, value.length - 1)))
        )
      }
    ),
  cpf_or_email: Yup.lazy((value) => {
    if (value === undefined) {
      return validators.required()
    }

    const field = value.replace(/[.-]/g, '')
    const isCpf = validatorsTests.onlyNumber(field)
    const isEmail = field.includes('@')

    if (isCpf) {
      return validators.cpf
    }

    if (isEmail) {
      return validators.email
    }

    return Yup.string().test('default', 'Campo inválido', () => false)
  })
}

export default validators
