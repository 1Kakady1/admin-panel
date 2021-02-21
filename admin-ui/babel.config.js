module.exports = {
    // presets: [
    //   ['@babel/preset-env', {targets: {node: 'current'}}],
    //   '@babel/preset-typescript',
    // ],
    env: {
        test: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {node: 'current'},
                modules: "commonjs",
                debug: false,
              },
            ],
            "@babel/preset-flow",
            "@babel/preset-react",
            '@babel/preset-typescript',
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
  };