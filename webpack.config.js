const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) =>  {
  let usePath = path.resolve(__dirname,'dist');
    let optimize= {
      minimize: false
  };
  if (env.p === 'y') {
      optimize = { 
              minimize: true,
              minimizer: [new TerserPlugin()]
      }
  };
  let plugins = [];
  if (env.p === 'a') {
    plugins.push(new BundleAnalyzerPlugin());
  }
  let config = {
    entry: './index.js',
    mode: (env.p === 'y') ? "production" : "development",
    plugins: plugins, 
    optimization: optimize,
    output: {
      path: usePath,
      filename: (env.p === 'y') ? 'smart-controls-chakra.js' : 'smart-controls-chakra.dev.js',
      libraryTarget: 'umd',
      library: "smartControls", 
      umdNamedDefine: true,
      globalObject: 'this'
    },
    module: {
      rules: [
        {
          test: /\.txt$/i,
          type: "asset/source",
        },
        {
          test: /\.html$/i,
          type: "asset/source",
        },
        {
          test: /\.svg$/i,
          type: "asset/inline",
        },
        {
          test: /\.png$/i,
          type: "asset/inline",
        },
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
      ],
    },
    
    externals: {
      react: 'React',
     'react-dom': 'ReactDOM'
     }
    

  };
  console.log(config);
return config;
}
