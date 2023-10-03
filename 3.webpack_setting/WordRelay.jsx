// clinet.jsx 에서 쪼갠 파일이 필요로 하는 패키지나 라이브러리를 불러오는 작업
const React = require('react');
// ㄴ npm에서 react 를 불러와줘야함
const { Component } = React;
 

// 쪼갠 컴포넌트
class WordRelay extends React.Component {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}

// 쪼갠 파일에서 쓰는 컴포넌트를 바깥에서도 쓸 수 있게 해주는 것 
module.exports = WordRelay;
