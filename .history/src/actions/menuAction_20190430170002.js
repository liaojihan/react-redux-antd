import * as type from './type/menuType'
// 菜单组件action
export function getMenuState(index) {
    
    return function (dispatch) {
        dispatch({
            type: type.GET_MENU_STATE
        })
    }  
}