import type { PickierOptions } from 'pickier'

const config: PickierOptions = {
  pluginRules: {
    'regexp/no-unused-capturing-group': 'off',
    'regexp/no-super-linear-backtracking': 'off',
    'ts/no-top-level-await': 'off',
    'markdown/no-inline-html': 'off', // VitePress uses Vue components and HTML in markdown
    'markdown/link-image-style': 'off', // Mixed reference/inline link styles is intentional
    'markdown/no-emphasis-as-heading': 'off', // Sponsors page uses emphasis formatting
  },
}

export default config
