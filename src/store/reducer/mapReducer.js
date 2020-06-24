// 小管理员
const defaultState ={
    // 城市信息
    city:{
        cityName :"上海"
    }
}

export default (state = defaultState,action)=>{
    // console.log(action)
    // 深拷贝
    let newState =JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "initCity":
            newState.city=action.value;
            return newState;
            break;
            
        default:
            break;    
    }
    return state
}