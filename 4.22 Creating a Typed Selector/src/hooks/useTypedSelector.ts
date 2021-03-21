import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// 4.22 Creating a Typed Selector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
