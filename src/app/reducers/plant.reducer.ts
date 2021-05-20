import { AppState } from '../app.state';
import * as plantActions from "./plant.actions";

export interface State {
    hashes: string[];
    entities: { [hash: string]: any };
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
        case plantActions.REMOVE_PLANT: {
            const newOnes: { [id: string]: any[] } = Object.keys(state.entities)
            .filter(key => key !== action.payload.id)
            .reduce((result: { [hash: string]: any }, current) => {
                result[current] = state.entities[current];
                return result;
            }, {});

            return {
                ...state,
                hashes: state.hashes.filter(id => id !== action.payload.id),
                entities: Object.assign({}, newOnes),
            }
        }
        default:
            return state;
    }
};

export const selectAllPlants = (state: AppState) => {
    return state.plants;
};
