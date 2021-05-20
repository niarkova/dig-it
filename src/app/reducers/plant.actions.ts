import { Action } from "@ngrx/store";

export const SELECT = 'SELECT';
export const UNSELECT = 'UNSELECT';
export const ADD_PLANT = 'ADD_PLANT';

export class SelectAction implements Action {
    readonly type = SELECT;
    constructor(public payload: any) { }
}

export class UnselectAction implements Action {
    readonly type = UNSELECT;
}

export class AddPlantAction implements Action {
    readonly type = ADD_PLANT;
    constructor(public payload: any) { }
}

export type Actions
    = SelectAction
    | AddPlantAction
    | UnselectAction;