declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IkButton: typeof import('ikuiv')['IkButton']
    IkIcon: typeof import('ikuiv')['IkIcon']
    IkInput: typeof import('ikuiv')['IkInput']
    IkCheckbox: typeof import('ikuiv')['IkCheckbox']
  }
}

export {}
