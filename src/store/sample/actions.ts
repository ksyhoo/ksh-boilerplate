import {SAMPLE_ACTION, SampleState} from './types';

export function sampleAction(newAction: SampleState) {
  return {
    type: SAMPLE_ACTION,
    payload: newAction,
  };
}
