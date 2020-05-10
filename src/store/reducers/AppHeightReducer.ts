import { APP_HEIGHT_LANDING, APP_HEIGHT_LOGIN, AppHeight, LogUserActions, ILogState} from '../types';

export const appHeightReducer   = (state :ILogState  = {height:AppHeight.LANDING,isLogin:false}, action : LogUserActions) =>{
    switch (action.type) {
        case APP_HEIGHT_LOGIN:
            state = {
                ...state,
                height : AppHeight.DASHBOARD,
                isLogin:true
            };
            break;
        case APP_HEIGHT_LANDING :
            state= {
                ...state,
                height : AppHeight.LANDING
            }
            break;
    }
    return state;
}