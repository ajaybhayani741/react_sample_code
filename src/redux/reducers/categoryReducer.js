import {
    CATEGORY_LIST_ERROR,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_BEGIN,
    CATEGORY_LIST_UPDATE,
} from "../constants";

const initialState = {
    selectedList: {},
}

export default function (state = initialState, action) {
    switch (action.type) {

        case CATEGORY_LIST_BEGIN:
            return {
                ...state,
            };
        case CATEGORY_LIST_SUCCESS:
            const { data, title, link, locationUrl } = action.payload;
            let clonedSelectedList = { ...state.selectedList }
            if (clonedSelectedList[locationUrl]) {
                clonedSelectedList = {
                    ...clonedSelectedList,
                    [locationUrl]: [...clonedSelectedList[locationUrl], { title, data, link }]
                }
            }
            else {
                clonedSelectedList = { ...clonedSelectedList, [locationUrl]: [{ title, data, link }] }
            }
            return {
                ...state,
                selectedList: clonedSelectedList,

            };
        case CATEGORY_LIST_ERROR:
            return {
                ...state,
            };
        case CATEGORY_LIST_UPDATE:
            const updateSelectedList = { ...state.selectedList }
            const { title: t1, url } = action.payload
            const index = updateSelectedList[url].findIndex(data => data.title === t1)
            if (~index) {
                updateSelectedList[url].splice(index, 1)
            }
            return {
                ...state,
                selectedList: updateSelectedList
            };
        default:
            return state;
    }
}