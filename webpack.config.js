const path = require('path');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

const isProdMode = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: 'source-map',
    mode: isProdMode ? 'production' : 'development',
    entry: path.resolve('src/replace-chunks-name-webpack-plugin.ts'),
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
    },
    optimization: {
      minimize: isProdMode,
    },
    module: {
        rules: [
            {
                test:/\.(ts)$/,
                exclude:[/node_modules/],
                use:{
                    loader:'ts-loader',
                }
            }
        ]
    },
    plugins: [
        new TypescriptDeclarationPlugin({
        })
    ]
}