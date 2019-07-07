import {SampleState, SampleActionTypes, SAMPLE_ACTION} from './types';

const initialState: SampleState = {
  loggedIn: false,
  session: '',
  userName: '',
};

export function stateReducer(state = initialState, action: SampleActionTypes): SampleState {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
