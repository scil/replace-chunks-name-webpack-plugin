perform replacing on webpack chunks filenames, useful to shorten filename when dev.



# 安装
````
yarn add replace-chunks-name-webpack-plugin -D
npm install replace-chunks-name-webpack-plugin -D
````

# options
````

      new ReplaceChunksNamePlugin({
          enable: !isProdMode,
          replaces: [
            {
              pattern: 'vendors-node_modules',
              replacement: '[m',
              target: 'id',
            },
            {
              pattern: /node_modules([-_])/g,
              replacement: '[m-$1',
              target: 'id',
            },
          ]
        }
````

input:
`chunk-vendors-node_modules_tinymce_tinymce-vue_lib_es2015_main_ts_index_js-node_modules_tinymce_ico-0fac6b.js`

output  
`chunk-[m_tinymce_tinymce-vue_lib_es2015_main_ts_index_js-[m-_tinymce_ico-0fac6b.js`

# credit 
-  [chunk-name-shortener/lib/WebpackPluginChunkNameShortener.js](https://github.com/gourmetjs/gourmet-ssr/blob/master/builder/chunk-name-shortener/lib/WebpackPluginChunkNameShortener.js)
-  [html-replace-webpack-plugin](https://github.com/iminif/html-replace-webpack-plugin/blob/master/index.js)
