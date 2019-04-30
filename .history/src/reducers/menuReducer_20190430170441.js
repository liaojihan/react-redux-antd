
import * as type from "../actions/type/menuType"

const initialState = {// 菜单组件初始化状态
     key: 0
}

//reducer返回新的状态
export default function (state = initialState, action) {
     switch (action.type) {
          case type.GET_MENU_STATE:
               console.log(213);
               return {
                    ...state,
                    key: action.payloa
               }
          default:
               return state
     }
}