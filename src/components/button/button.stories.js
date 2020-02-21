import React from 'react'

import Button from './button'

export default {
  title: 'Buttons',
  component: Button
}

export const ButtonSimple = () => <Button label={'Salut'} />
export const ButtonCuicui = () => <Button label={'Salut'} />

ButtonSimple.story = {
  name: 'Button simple'
}

ButtonSimple.story = {
  name: 'Button cuicui'
}
