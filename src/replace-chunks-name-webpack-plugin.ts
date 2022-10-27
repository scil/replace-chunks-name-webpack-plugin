import {OptionsProps, replaceProps, enableProps} from '../types';

class WebpackReplaceChunksNamePlugin {
    private replaceConfig: replaceProps[] = [];
    private enable: enableProps = true;

    constructor(options: OptionsProps) {
        if ( !Array.isArray(options.replaces)) {
            throw new Error('options.replaces must be an array');
        }
        if (
            ! options.replaces.every((item) => {
               return item.pattern && item.replacement
            })
        ) {
            throw new Error('members must contain {pattern: string, replacement: string}');
        }
        this.replaceConfig = options.replaces;
        this.enable = options.enable;
    }


    apply(compiler) {
        compiler.hooks.compilation.tap('replaceChunksName', (compilation) => {
            compilation.hooks.afterOptimizeChunks.tap(
                'replaceChunksName',
                () => {
                    if (this.enable) {
                        // console.log('try to replace chunk file name');
                        compilation.chunks.forEach((item) => {
                            // console.log(item.id,item.name);

if(item.name || item.id)
                            this.replaceConfig.forEach(({pattern,replacement} )=> {
                                item.name = (item.name || item.id ).replace(pattern,replacement)
                            })
                        });
                    }
                },
            );
        });
    }
}

export default WebpackReplaceChunksNamePlugin;
