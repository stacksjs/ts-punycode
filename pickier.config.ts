import type { PickierConfig } from 'pickier'

const config: PickierConfig = {
  pluginRules: {
    'regexp/no-unused-capturing-group': 'off',
    'regexp/no-super-linear-backtracking': 'off',
    'ts/no-top-level-await': 'off',
  },
}

export default config
