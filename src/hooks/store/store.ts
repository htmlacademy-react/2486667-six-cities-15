import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, State} from '@/types/state';

// Чтобы каждый раз не типизировать запросы к стору,
// создадим типизированные версии хуков.
// Будем использовать их для работы со стором.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
