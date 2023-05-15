// 액션 함수와 리듀서 함수를 작성하는 공간


/** 리덕스 미들웨어인 Thunk 사용 방법 확인
 * 1. 액션함수를 사용해서 1씩 증가하는 방법
 * 2. Thunk를 사용하여 1씩 증가하는 방법
 * state : num, thunkNum
 * action : "ADD_NUM", thunk 사용하여 작성
 */


// 초기 state 값 작성
const initialState = {
  num: 0,
  thunkNum: 0
};


// 액션 생성 함수 >> return 값 : 액션 객체
export const addNum = () => ({ type: "ADD_NUM" });


// Thunk 미들웨어를 사용한 액션 함수 >> return 값 : 함수
// * dispatch를 이용해서 액션 값을 리듀서에 전달할 때 액션 객체가 아닌 함수일 경우 실행된다
// return 값에 들어가는 함수의 매개변수로 next/dispatch로 사용
export const addNumThunk = () => (next) => {
  //Thunk 를 사용하면 원하는 액션 객체를 전달하여 순서에 맞춰 실행할 수 있다
  next({type:"ADD_THUNKNUM"});
  console.log("Thunk를 이용하여 실행");
  next({type:"ADD_NUM"})
};


// Thunk를 이용한 액션 함수 작성
// next()를 이용하여 ADD_NUM 두 번 실행하기
export const doubleNum = () => (next) => {
  next({type:"ADD_NUM"});
  next({type:"ADD_NUM"});
};


// 리듀서
function counterThunk( state = initialState, action ) {
  switch(action.type) {
    case "ADD_NUM":
      return {
        ...state,
        num: state.num + 1
      };

    case "ADD_THUNKNUM":
      return {
        ...state,
        thunkNum: state.thunkNum + 1
      };

    default: 
    return state;
  }
}


export default counterThunk;