import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/types/store';
import {ActionCreatorsMapObject, AsyncThunk, bindActionCreators, createAsyncThunk} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {AxiosInstance} from 'axios';

// Чтобы каждый раз не типизировать запросы к стору
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
};
type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
}>();

export {useAppDispatch, useAppSelector, useActionCreators, createAppAsyncThunk};
