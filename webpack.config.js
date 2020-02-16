var path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./client/src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)/,
            include: [
            path.resolve(__dirname, 'client')
            ],
            exclude: [
            path.resolve(__dirname, 'node_modules')
            ],
            loader: 'babel-loader',
            options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}