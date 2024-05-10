import { useDispatch, useSelector, useStore } from 'react-redux';
import { ReduxStore, ReduxDispatch, ReduxState } from '../store';

// File export customs redux hook derived from original Redux hook (given by react-redux) for strong type checking and better auto completion.
export const useAppDispatch = useDispatch.withTypes<ReduxDispatch>();
export const useAppSelector = useSelector.withTypes<ReduxState>();
export const useAppStore = useStore.withTypes<ReduxStore>();
