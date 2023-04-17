import IkButton from '../button'
import IkIcon from '../icon'
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

describe('IkButton', () => {
  test('class', () => {
    const wrapper = mount(IkButton)
    expect(wrapper.classes()).toContain('ik-button')
  })
  test('class', () => {
    const wrapper = mount(IkButton, {
      props: {
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('ik-button-primary')
  })
  test('loading', () => {
    const wrapper = mount(IkButton, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.classes()).toContain('ik-button')
  })
})
