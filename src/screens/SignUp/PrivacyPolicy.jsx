import React from 'react'
import { Text } from 'react-native'

import { Modal } from 'native-base'

export function PrivacyPolicy() {
  return (
    <Modal.Content>
      <Modal.CloseButton />
      <Modal.Header>Politica de privacidade</Modal.Header>

      <Modal.Body>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolores
          illo, repellat, corrupti delectus quo voluptatem vero, quidem
          exercitationem obcaecati consequatur. Non aliquam dolore sunt velit
          hic suscipit accusamus numquam.
        </Text>
      </Modal.Body>
    </Modal.Content>
  )
}
