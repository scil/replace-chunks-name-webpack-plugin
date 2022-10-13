import {OptionsProps, replaceProps, enableProps} from '../types';

class WebpackReplaceChunksNamePlugin {
    private replaceChunks: replaceProps[] = [];
    private enable: enableProps = true;

    constructor(options: OptionsProps) {
        if (options.replaces && !Array.isArray(options.replaces)) {
            throw new Error('options.replaces must be an array');
        }
        if (
            options.replaces.every((item) => {
                item.target = item.target || 'id'
               return item.pattern && item.replacement
            })
        ) {
            throw new Error('members must contain {pattern: string, replacement: string}');
        }
        this.replaceChunks = options.replaces;
        this.enable = options.enable;
    }


    apply(compiler) {
        compiler.hooks.compilation.tap('replaceChunksName', (compilation) => {
            compilation.hooks.afterHash.tap(
                'replaceChunksName',
                () => {
                    if (this.enable) {
                        // console.log('try to replace chunk file name');
                        compilation.chunks.forEach((item) => {
                            // console.log(item.id,item.name);
                            this.replaceChunks.forEach(({target,pattern,replacement} )=> {
                                item[target] = item[target].replace(pattern,replacement)
                            })
                        });
                    }
                },
            );
        });
    }
}

export default WebpackReplaceChunksNamePlugin;
