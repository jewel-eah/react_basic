const path = require('path');
// 경로 조작 node 에서 줌 
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //                         실서비스(개발시): production
    devtool: 'eval',     // eval : 빠르게 한다는 의미 시             : hidden-source-map
    resolve: {
      extensions: ['.js' , '.jsx']  
    },

    // 나눠진 jsx 파일을 하나로 만들어서 app.js 가 되어야함 
    // webpack 설정에서 가장 중요한 부분 
    entry: {
        // app: ['./client.jsx' , './WordRelay.jsx'],
        // ㄴ client.jsx 에서 이미 WordRealy.jsx 를 불러오고 있기 때문에 clinet.jsx만 불러와주면됨 
        // ㄴ 확장자도 다 다른데 어떡하지 > resolve extentions 설정해주면 알아서 다 찾아줌 
        app: ['./client'],
    }, // 입력

    // entry 파일 읽고 > modules 적용 > output 으로 뺀다 
    module: {
        rules: [{
            // test: 규칙을 적용할 파일들 
            // ㄴ /\.jsx?/ : (정규식 표현) js , jsx 파일에 이 룰을 적용하겠다는 의미 
            // ㄴ 어떤 룰 ? loader: 'babel-loader' > 최신문법을 옛날문법에도 호한되게 
            test: /\.jsx?/,
            loader: 'babel-loader',
            // babel 의 옵션들 ㄱ
            options: {
                // plugin 들의 모임이 preset
                presets: [
                    // env: 호환에 대한 설정을 따로 해주고 싶을 때
                    //      옛날버전까지 다 바꾸려면 babel 이 일을 계속해야함 > 일이 느려짐 
                    ['@babel/preset-env' , {
                        targets: {
                            // 이전 2 ver 까지만 호환되게 (ex. chrome 최신이 70이라면 69,70만 호환되게)
                            // exploer 에서도 돌아가게 하려면 > 1% in KR : 참고사이트_browerslist
                            browsers:['> 1% in KR'],
                            // browsers:['> 5% in KR','last 2 chrome versions'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'],
                    plugins: [],
                // plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    // 확장 프로그램
    plugins: [
        // module: { reules: } >> 이게 loader 인데 loader options 전체에 debug: true 를 넣어주는것 
        new webpack.LoaderOptionsPlugin({ debug: true}),
    ],

    output: {
        // ㄱ 패스를 자동으로 연결 (__dirname: 현재폴더 안에 'dist)
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력

    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },

};