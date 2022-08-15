import React from 'react'
import { Controller } from 'react-hook-form'

import { Checkbox as CheckboxNB } from 'native-base'

import * as S from './styles'

export function Checkbox({
  children,
  control,
  name,
  label,
  error,
  disabled,
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <S.Container>
          <CheckboxNB
            variant="ds"
            value={value}
            size="md"
            onChange={onChange}
            isDisabled={disabled}
            isInvalid={!!error?.message}
            accessibilityLabel={label}
            {...props}
          >
            <S.Text>{children}</S.Text>
          </CheckboxNB>

          {error && <S.Error>{error?.message}</S.Error>}
        </S.Container>
      )}
    />
  )
}
