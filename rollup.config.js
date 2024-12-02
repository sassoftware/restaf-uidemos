import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser  from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
//import strip from '@rollup/plugin-strip';

export default [
  {
    input: './index.js',
    output: [
      { file: 'esm/index.js', format: 'esm' }
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'), // Replaces with "production"
        preventAssignment: true, // Required to avoid warnings in recent Rollup versions
      }),
      peerDepsExternal(),
      resolve({
        moduleDirectories: ['node_modules']
      }),
      commonjs({
        ignoreGlobal: true,
        include: /node_modules/,
        exclude: [/*/node_modules\/@mui\/material/, /node_modules\/@mui\/joy/*/]
      }),
      postcss({
        inject: true
      }),
      babel({
        babelHelpers: 'bundled',
        presets: [
          ['@babel/preset-env', { modules: false }],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
];
