import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import { Checkbox } from 'components/CheckBox'
import { FormBox } from 'components/FormBox'
import { LinkInternal } from 'components/LinkInternal'
import { TextInput } from 'components/TextInput'
import { Typography } from 'components/Typography'
import { ViewBase } from 'components/ViewBase'
import { Modal } from 'native-base'

import { PrivacyPolicy } from './PrivacyPolicy'
import * as S from './styles'
import { TermsOfUse } from './TermsOfUse'
import validatorSchema from './validatorSchema'

export function SignUp() {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validatorSchema)
  })

  function handleSubmitForm(data) {
    Alert.alert('Cadastro', JSON.stringify(data, null, 2))
  }

  function handleOpenModal(type) {
    setShowModal(true)
    setModalType(type)
  }

  return (
    <>
      <ViewBase>
        <S.Container>
          <FormBox>
            <Typography tag="h1" spacing="large">
              Precisamos saber um pouco mais sobre você
            </Typography>

            <TextInput
              label="Nome completo"
              name="fullName"
              control={control}
              placeholder="Informe o seu seu nome completo"
              error={errors.fullName}
            />

            <TextInput
              label="CPF"
              name="cpf"
              control={control}
              placeholder="Informe o seu seu cpf"
              error={errors.cpf}
              keyboardType="numeric"
              mask="cpf"
            />

            <TextInput
              label="Email"
              name="email"
              control={control}
              placeholder="Informe seu email"
              error={errors.email}
              keyboardType="email-address"
            />

            <TextInput
              label="Celular"
              name="cellPhone"
              control={control}
              placeholder="Informe seu celular"
              error={errors.cellPhone}
              keyboardType="numeric"
              mask="phone"
            />

            <TextInput
              label="Senha"
              name="password"
              control={control}
              placeholder="Informe a senha"
              error={errors.password}
              secureTextEntry
            />

            <TextInput
              label="Confirmação de senha"
              name="passwordConfirmation"
              control={control}
              placeholder="Confirme sua senha"
              error={errors.passwordConfirmation}
              secureTextEntry
            />

            <Checkbox
              label="acceptCommunication"
              name="acceptCommunication"
              control={control}
              error={errors.acceptCommunication}
            >
              Aceito receber mensagens e condições especiais.
            </Checkbox>

            <Checkbox
              label="acceptTerms"
              name="acceptTerms"
              control={control}
              error={errors.acceptTerms}
            >
              Li e aceito os
              <LinkInternal
                title="Termo de uso"
                onPress={() => handleOpenModal('termsOfUse')}
                size="large"
              />
              e a
              <LinkInternal
                title="Política de Privacidade."
                onPress={() => handleOpenModal('policy')}
                size="large"
              />
            </Checkbox>

            <Button
              title="Cadastrar meus dados"
              onPress={handleSubmit(handleSubmitForm)}
            />
          </FormBox>
        </S.Container>
      </ViewBase>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
        {modalType === 'termsOfUse' ? <TermsOfUse /> : <PrivacyPolicy />}
      </Modal>
    </>
  )
}
