import React from 'react'
import { Controller } from 'react-hook-form'
import { Masks, useMaskedInputProps } from 'react-native-mask-input'

import { Input } from 'native-base'

import * as S from './styles'

const maskTypes = {
  carPlate: Masks.BRL_CAR_PLATE,
  cnpj: Masks.BRL_CNPJ,
  cpf: Masks.BRL_CPF,
  currency: Masks.BRL_CURRENCY,
  phone: Masks.BRL_PHONE,
  creditCard: Masks.CREDIT_CARD,
  date: Masks.DATE_DDMMYYYY,
  cep: Masks.ZIP_CODE
}

export function TextInput({
  control,
  name,
  label,
  mask,
  error,
  disabled,
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        const maskedInputProps = useMaskedInputProps({
          value: value,
          onChangeText: onChange,
          mask: maskTypes[mask]
        })

        return (
          <S.Container>
            <S.Label disabled={disabled} error={!!error?.message}>
              {label}
            </S.Label>

            <Input
              variant="ds"
              size="xl"
              isDisabled={disabled}
              isInvalid={!!error?.message}
              onChangeText={onChange}
              value={value}
              {...props}
              {...maskedInputProps}
            />

            {error && <S.Error>{error?.message}</S.Error>}
          </S.Container>
        )
      }}
    />
  )
}
