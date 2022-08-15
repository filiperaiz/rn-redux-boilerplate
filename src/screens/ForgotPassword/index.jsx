import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import { FormBox } from 'components/FormBox'
import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { ViewBase } from 'components/ViewBase'

import * as S from './styles'
import validatorSchema from './validatorSchema'

export function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })

  function handleSubmitForm(data) {
    console.log(data)
  }

  return (
    <ViewBase>
      <S.Container>
        <FormBox>
          <Typography tag="h1" spacing="medium">
            Esqueceu sua senha?
          </Typography>

          <Typography tag="h4" spacing="large">
            Informe seu CPF, em seguida, te enviaremos um e-mail com o passo a
            passo para criar uma nova senha.
          </Typography>

          <TextInput
            label="CPF"
            name="cpf"
            control={control}
            placeholder="Informe o seu CPF"
            error={errors.cpf}
            keyboardType="numeric"
            mask="cpf"
          />

          <Button
            title="Enviar email"
            onPress={handleSubmit(handleSubmitForm)}
          />
        </FormBox>
      </S.Container>
    </ViewBase>
  )
}
