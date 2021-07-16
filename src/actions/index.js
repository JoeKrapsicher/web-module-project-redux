//Action Types
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE"


//Action Creators

export const addFeature = (feature) => {
    console.log(feature)
    //Actions
    return{
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = (feature) => {
    console.log("removing feature action")
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}


