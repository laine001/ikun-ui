import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import IkTree from '../tree'

describe('IkTree', () => {
  const treeData = [
    {
      id: '1',
      label: 'a',
      children: [
        {
          id: '11',
          label: 'b',
          children: [{ id: '111', label: 'c' }],
        },
      ],
    },
    {
      id: '2',
      label: '222222',
      children: [
        { id: '21', label: 'd' },
        { id: '22', label: 'e' },
      ],
    },
  ]

  test('loading', () => {
    const wrapper = mount(IkTree, {
      props: {
        data: treeData,
      },
    })
    expect(wrapper.classes()).toContain('ik-tree')
    expect(wrapper.findAll('.ik-tree-node')).toHaveLength(2)
  })
})
