import tourInit from "../../state/tour"
import tourType from "../../actionType/tour"
export default function (state= tourInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === tourType.CHANGE_TOURLIST){
        state.tourList = payload.tourList;
        state.tourHeard = payload.tourHeard;
    }
    return state;
}