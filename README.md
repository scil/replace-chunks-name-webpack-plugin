perform replacing on webpack chunks filenames, useful to shorten filename when dev.

origin: [webpack-replace-chunks-name-plugin](https://www.npmjs.com/package/webpack-replace-chunks-name-plugin) which only replace the whole filename, not part. And it use api `compilation.hooks.shouldGenerateChunkAssets`. 

# 安装
````
pnpm add @scil/replace-chunks-name-webpack-plugin -D
yarn add @scil/replace-chunks-name-webpack-plugin -D
npm install @scil/replace-chunks-name-webpack-plugin -D
````

# options
````

      new ReplaceChunksNamePlugin({
          enable: !isProdMode,
          replaces: [
            {
              pattern: 'vendors-node_modules',
              replacement: '[m',
            },
            {
              pattern: /node_modules([-_])/g,
              replacement: '[m-$1',
            },
          ]
        }
````

input:
`chunk-vendors-node_modules_tinymce_tinymce-vue_lib_es2015_main_ts_index_js-node_modules_tinymce_ico-0fac6b.js`

output  
`chunk-[m_tinymce_tinymce-vue_lib_es2015_main_ts_index_js-[m-_tinymce_ico-0fac6b.js`

# credit 
- [html-replace-webpack-plugin](https://github.com/iminif/html-replace-webpack-plugin/blob/master/index.js)
[chunk-name-shortener/lib/WebpackPluginChunkNameShortener.js](https://github.com/gourmetjs/gourmet-ssr/blob/master/builder/chunk-name-shortener/lib/WebpackPluginChunkNameShortener.js) use api `compilation.hooks.afterHash`  which is used by this plugin.
