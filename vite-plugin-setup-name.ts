import MagicString from 'magic-string'
import { parse, compileScript } from '@vue/compiler-sfc'
// import { basename } from 'path'
import type { Plugin } from 'vite'

export default (): Plugin => {
  return {
    name: 'vite:my-plugin',
    enforce: 'pre',
    transform(source, id) {
      if (/.vue$/.test(id) || /.vue\?.&type=script.*/.test(id)) {
        let s: MagicString | undefined
        const str = () => s || (s = new MagicString(source))
        const { descriptor } = parse(source)

        if (!descriptor.script && descriptor.scriptSetup && !descriptor.scriptSetup.attrs?.extendIgnore) {
          const result = compileScript(descriptor, { id })
          const { name = '', lang, inheritAttrs } = result.attrs
          if (name || inheritAttrs) {
            str().appendLeft(
              0,
              `<script ${lang ? `lang="${lang}"` : ''}>
              import { defineComponent } from 'vue'
              export default defineComponent({
                ${name ? `name: "${name}",` : ''}
                ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== 'false'},` : ''}
              })
              </script>\n`
            )
          }

          const map = str().generateMap({ hires: true })
          // const filename = basename(id)
          return {
            map,
            code: str().toString(),
          }
        }
      } else {
        return null
      }
    },
  }
}
