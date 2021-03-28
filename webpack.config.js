const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: __dirname + '/src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
             }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + "/dist/index.html",
        })
    ]
}
