/* <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<!--<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>-->
<!--<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>--> */
// ㄴ 이렇게 스크립트로 불러왔던 것들을 node의 모듈시스템에서 불러올 수가 있음 

const React = require('react');
const ReactDom = require('react-dom');

// 이렇게 컴포넌트를 클래스로 만들어 줄 수 있지만 이게 많아지면 감당이 안됨
// ㄴ 그래서 다른 파일로 쪼개줄거임 
// class WordRelay extends React.Component {
//     state = {

//     };

//     render() {
//     }
// }    
const WordRelay = require('./WordRelay');
// ㄴ 쪼갠 파일을 불러올 수 있음 ㄴ 경로 / 같은 폴더니 ./
// ㄴ 이런 식으로 필요한 것들만 불러올 수 있음 (모듈시스템)
// but, client.jsx 와 WordRelay.jsx 로 분리된 파일을 하나로 합쳐져야 html 에서 인식이 됨 
// > 이런 파일을 하나로 합쳐주는게 webpack > webpack.config.js 로 돌아감 

ReactDom.render(<WordRelay />, document.querySelector('#root'));
