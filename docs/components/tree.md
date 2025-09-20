# Tree 树形展示

## 基本使用<Badge>beta</Badge>

<ik-tree :data="[
    {
      label: '浙江省',
      id: 1,
      children: [
        {
          label: '杭州市',
          id: 11,
          children: [
            {
              label: '余杭区',
              id: 111,
            },
            {
              label: '西湖区',
              id: 112,
            },
          ],
        },
        {
          label: '宁波市',
          id: 12,
          children: [
            {
              label: '江北区',
              id: 121,
            },
          ],
        },
      ],
    },
  ]" />
