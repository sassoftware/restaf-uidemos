// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// import pkg from './package.json';
const path = require('path');

const pkg = require('./package.json');
module.exports = {
    entry: path.join(__dirname, "./lib/index.js"),
    mode: "development",
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'viyaedit.js',
        library: 'viyaedit',
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },

    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    },
    module: {
        rules : [
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options:{
                        fallback: "file-loader",
                        name: "[name][md5:hash].[ext]",
                        outputPath: 'assets/',
                        publicPath: '/assets/'
                    }
                }    
            ]
        },
        {
            test: /\.(js|jsx)$/,
           
            include: path.resolve(__dirname, "lib"),
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
            
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: ["file-loader"],
        },
        {
            test: /\.(pdf|doc|zip)$/,
            use: ["file-loader"],
        }]
    },
    resolve: { 
        alias: { 
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
            /*
            'restaf': path.resolve(__dirname, './node_modules/restaf'),
            'restaflib': path.resolve(__dirname, './node_modules/restaflib'),
            'assets': path.resolve(__dirname, 'assets')
            */
        } 
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "restaf": {
            commonjs: "restaf",
            commonjs2: "restaf",
            amd: "restaf",
            root: "restaf"
        },
        "restaflib": {
            commonjs: "restaflib",
            commonjs2: "restaflib",
            amd: "restablib",
            root: "restaflib"
        }
    }
};
