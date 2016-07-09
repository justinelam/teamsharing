module.exports = {
    entry: './src/components/App.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx$/, exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: { presets: ['es2015', 'react'] }
            }
        ]
    }
};
