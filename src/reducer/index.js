//IMPORT ACTION TYPES
import { ADD_FEATURE } from '../actions';
import { REMOVE_FEATURE } from '../actions';


// ✔️ Set up "empty" reducer and initial state

const initialState ={
        additionalPrice: 0,
        car: {
          price: 0,
          name: '2019 Ford Mustang',
          image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: [{ id: 1, name: 'V-6 engine', price: 1500 }]
        },

        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]

}

//export reducer

//add action types to the features array
// spread state, add feature to "features:" array
//spread previous state, 
//use payload ID to find which feature your gonna add
//map new feature into the features array
//rinse and repeat

    const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_FEATURE:
            return {
                ...state,
                car: [
                    ...state.car.features.id, action.payload
                ]
            }
        case REMOVE_FEATURE:
            return {
                // remove features added to the features array
                ...state,
                car: [...state.car.features, ]
            }
        default:
            return state;
    }
}

export default reducer;