module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'babel-plugin-styled-components',
        {
          ssr: false,
          displayName: true
        }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
          alias: {
            assets: './src/assets',
            components: './src/components',
            hooks: './src/hooks',
            routes: './src/routes',
            screens: './src/screens',
            theme: './src/theme',
            types: './src/types',
            utils: './src/utils'
          }
        }
      ]
    ]
  }
}
