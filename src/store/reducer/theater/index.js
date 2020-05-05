import theaterInit from "../../state/theater"
import theaterType from "../../actionType/theater"
export default function (state= theaterInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === theaterType.CHANGE_CATEGORY){
        state.theaterList = payload;
    }
    if(type=== theaterType.CHANGE_DETAIL){
        state.detailList= payload;
    }
    if(type=== theaterType.CHANGE_THEATRE_IDL){
        state.theatre= payload.theatre;
        state.venue=payload.venue
    }
    return state;
}