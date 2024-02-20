import { resolve as _resolve } from 'path';

export const mode = 'production';
export const entry = './src/index.js';
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'my-modal-wh.js',
    libraryTarget: 'umd',
    library: 'my-modal-wh',
    umdNamedDefine: true,
};
export const module = {
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
};
export const resolve = {
    extensions: ['.js', '.jsx'],
};
