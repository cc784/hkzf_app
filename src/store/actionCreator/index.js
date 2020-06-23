// 引入baidu地图代码
import  {getLocalCity}  from '../../utils/bdMapHelper'
// 异步获取当前城市信息
export const getLocalCityAction =() =>{
    return async (dispatch) =>{
        const res = await getLocalCity();
        dispatch({
            type:"initCity",
            value:res
        })
    }
}

