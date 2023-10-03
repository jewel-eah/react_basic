import React, { Component } from ('react');
// const { Component } = React;

function getNumbers() { // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball {
    state = {
        result: '',
        value: '',
        // 미리 뽑아둔 수 
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {
    
    };

    onChangeInput = () => {

    };

    render() {
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    {/* value={this.state.value} onChange={this.onChange} 이렇게 무조건 세트 
                      or  defaultValue={this.state.value}
                    */}
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}  />
                </form>
                <div>시도: {this.state.tries.length}</div>
                {/* react 에서 반복문을 사용할때 map */}
                <ul>
                    {['like', 'like', 'like', 'like', 'like'].map( () => {
                        return (
                            <li>like</li>
                        );
                    })}
                    <li />
                </ul>
            </>
        );
    }
}

// module.exports = NumberBaseball; 
export default NumberBaseball;   // Es2015 모듈 문법 > import NumberBaseball
// export default NumberBaseball != module.exports    > 같진 않지만 호환된다로 알아두면 됨 