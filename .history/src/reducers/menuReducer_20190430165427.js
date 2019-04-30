

import * as type from "../actions/type/menuType"

const initialState = {// 菜单组件状态
     key: 0
}

export default function (state = initialState, action) {
     switch (action.type) {
          case type.GET_MENU_STATE:
               console.log(213);
               return {
                    ...state
               }
          default:
               return state
     }
}