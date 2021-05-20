import * as plantActions from "./plant.actions";

export interface State {
    hashes: string[];
    entities: any;
}

export const initialState: State = {
    hashes: [],
    entities: {},
}

export function plantReducer(state = initialState, action: any) {
    switch (action.type) {
        case plantActions.ADD_PLANT: {
            if(state.hashes.indexOf(action.payload.id) > -1) {
              return state;
            }

            return {
                ...state,
                hashes: [...state.hashes, action.payload.id],
                entities: { ...state.entities, [action.payload.id]: action.payload },
            }
        }
        default:
            return state;
    }
};