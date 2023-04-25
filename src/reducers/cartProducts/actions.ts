export enum ActionTypes {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export interface CartAction {
  type: ActionTypes;
  payload?: any;
}
