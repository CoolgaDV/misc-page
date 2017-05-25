import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
    entry: 'build/aot/js/src/ts/main-aot.js',
    dest: 'build/aot/js/application.js',
    sourceMap: false,
    format: 'iife',
    onwarn: function(warning) {
        if ( warning.code === 'THIS_IS_UNDEFINED' ) {
            return;
        }
        console.warn( warning.message );
    },
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
        uglify()
    ]
}