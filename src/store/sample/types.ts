export interface SampleState {
  loggedIn: boolean;
  session: string;
  userName: string;
}

export const SAMPLE_ACTION = 'SAMPLE_ACTION';

interface SampleAction {
  type: typeof SAMPLE_ACTION;
  payload: SampleState;
}

export type SampleActionTypes = SampleAction;
