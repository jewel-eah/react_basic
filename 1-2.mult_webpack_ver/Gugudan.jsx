const React = require('react');
const { useState, useRef } = React;
// ㄴ 구조분해 문법 사용해서 React. 반복되는 것들 지우기 
//    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
// >  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));


const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    // useRef 를 통해서 DOM 에 접근 > inputRef.current.focus();
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value)
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답: ' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        }
        else {
            setResult('땡 !');
            setValue('');
            input.current.focus();
        }
    };

    return (
        <>
            <div>{first} x {second} = ?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

// 다른 곳에서도 이 파일을 쓸 수 있게 
module.exports = GuGuDan;
