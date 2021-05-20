import { Action } from "@ngrx/store";

export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';

export class AddPlantAction implements Action {
    readonly type = ADD_PLANT;
    constructor(public payload: any) { }
}

export class RemovePlantAction implements Action {
    readonly type = REMOVE_PLANT;
    constructor(public payload: any) { }
}

export type Actions
    = AddPlantAction
    | RemovePlantAction;
