import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="www.youdao.com"> link button </Button>
  </>
)
storiesOf('Button Component', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: `
        this is a nice component
        ## 这是标题
        ~~~js
        const word = 'hello'
        ~~~
      `,
      inline: true,
    }
  })
  .add('默认 Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize, { info: { inline: false } }) // 单独配置
  .add('不同类型的 Button', buttonWithType)
