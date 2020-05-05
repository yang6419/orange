import showType from "../../actionType/show";
export function changeShowList(payload){
    return{
        type:showType.CHANGE_SHOWlIST,
        payload
    }
}