import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser  from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
//import strip from '@rollup/plugin-strip';

export default [
  {
    input: './index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'smartControls',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    external: ['react', 'react-dom'/*,'react/jsx-runtime', '@mui/material', '@mui/joy'*/],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'), // Replaces with "production"
        preventAssignment: true, // Required to avoid warnings in recent Rollup versions
      }),
      
      peerDepsExternal(),
      resolve({
        // Only include necessary modules
        moduleDirectories: ['node_modules']
      }),
      commonjs({
        // Ignore "use client" warnings specifically for MUI
        ignoreGlobal: true,
        include: /node_modules/,
        exclude: [/*/node_modules\/@mui\/material/, /node_modules\/@mui\/joy/*/]
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
     
      /*terser()*/
       // Minifies the UMD build
    ]
  },
  {
    input: './index.js',
    output: [
      { file: 'dist/index.cjs.js', format: 'cjs' },
      { file: 'dist/index.esm.js', format: 'esm' }
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime' /*, '@mui/material', '@mui/joy'*/],
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
      babel({
        babelHelpers: 'bundled',
        presets: [
          ['@babel/preset-env', { modules: false }],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**'
      })
    ]
  }
];
