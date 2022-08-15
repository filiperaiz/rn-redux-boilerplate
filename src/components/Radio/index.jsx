import React from 'react'
import { Controller } from 'react-hook-form'

import { Radio as RadioNB } from 'native-base'

import * as S from './styles'

export function Radio({
  control,
  name,
  label,
  error,
  disabled,
  options,
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <S.Container>
          <S.Label disabled={disabled} error={!!error?.message}>
            {label}
          </S.Label>

          <RadioNB.Group
            name={name}
            value={value}
            onChange={onChange}
            isInvalid={!!error}
            {...props}
          >
            {options.map((radio, i) => (
              <RadioNB
                key={`${radio.value}_${i}`}
                value={radio.value}
                my={2}
                size="lg"
                variant="ds"
                isDisabled={disabled || radio.disabled}
                isInvalid={!!error?.message}
              >
                {radio.label}
              </RadioNB>
            ))}
          </RadioNB.Group>

          {error && <S.Error>{error?.message}</S.Error>}
        </S.Container>
      )}
    />
  )
}
