import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'

import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { BoxTitle } from 'components/BoxTitle'
import { Button } from 'components/Button'
import { FormBox } from 'components/FormBox'
import { Logo } from 'components/Logo'
import { TextInput } from 'components/TextInput'
import { ViewBase } from 'components/ViewBase'
import { Link } from 'native-base'
import theme from 'theme'

import * as S from './styles'
import validatorSchema from './validatorSchema'

export function SignIn() {
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })

  function handleSubmitForm(data) {
    Alert.alert('Login', JSON.stringify(data, null, 2))
  }

  return (
    <ViewBase>
      <S.Container>
        <FormBox>
          <BoxTitle title="App native">
            <Logo />
          </BoxTitle>

          <TextInput
            label="CPF"
            name="cpf"
            control={control}
            placeholder="Informe o seu CPF"
            error={errors.cpf}
            keyboardType="numeric"
            mask="cpf"
          />

          <TextInput
            label="Senha"
            name="password"
            control={control}
            placeholder="Informe a senha"
            error={errors.password}
            secureTextEntry
          />

          <Link
            _text={{
              fontSize: 'md',
              fontWeight: '500',
              color: theme.colors.primary
            }}
            alignSelf="flex-start"
            mb={8}
            onPress={() => navigation.navigate('forgotPassword')}
          >
            Esqueceu sua senha?
          </Link>

          <Button
            title="Acessar minha conta"
            onPress={handleSubmit(handleSubmitForm)}
          />
        </FormBox>
      </S.Container>
    </ViewBase>
  )
}
