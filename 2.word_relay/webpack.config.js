const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //                         실서비스(개발시): production
    devtool: 'eval',     // eval : 빠르게 한다는 의미 시             : hidden-source-map
    resolve: {
      extensions: ['.js' , '.jsx']  
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            // babel 의 옵션들 ㄱ
            options: {
                // plugin 들의 모임이 preset
                presets: [
                    ['@babel/preset-env' , {
                        targets: {
                            browsers:['> 1% in KR'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-refresh/babel'
                    ],
            },
        }],
    },

    // 확장 프로그램
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true}),
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
    
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        // index.html 실제 정적파일의 경로 > static 
        // ㄴ 현재폴더 : __dirname
        // ㄴ src폴더에 있을 경우 : __dirname , 'src'  
        static: { directory: path.resolve(__dirname) } , 
        hot: true,
    },
};