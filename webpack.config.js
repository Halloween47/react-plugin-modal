const path = require('path');

module.exports = {
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
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], 
    },
};
