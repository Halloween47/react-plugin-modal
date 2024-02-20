const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'wealth-health-modal.js', 
        libraryTarget: 'umd', 
        library: 'WealthHealthModal', 
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-react'], 
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], 
    },
};
