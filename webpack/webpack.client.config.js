module.exports = {
    entry: './source/client.js',
    output: {
        filename: 'app.js',
        path: './built/static',
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',
            }, {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_module)/,
                query: {
                    presets: [
                        'es2016', 'es2017', 'react'
                    ],
                    plugins: ['transform-es2015-modules-commonjs'],
                }
            }
        ]
    },
    target: 'web',
};