import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Awesome Button',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export const Default = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Button @click.native="clicked" v-bind="$props">{{text}}</Button>',
  methods: {
    clicked() {
      action('button-clicked')()
    },
  },
})
