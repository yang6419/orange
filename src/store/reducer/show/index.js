import showInit from "../../state/show";
import showType from "../../actionType/show";
export default function(state=showInit,{type,payload}) {
        state = JSON.parse(JSON.stringify(state));
        if(type === showType.CHANGE_SHOWlIST){
            state.showList = payload;
        }
        return state;
}