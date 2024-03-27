import {useAppSelector} from '@/hooks/store/store';
import {usersSelectors} from '@/store/slices/users';
import {AuthStatus} from '@/utils/const';

export function useAuth(): boolean {
  const authStatus = useAppSelector(usersSelectors.authorizationStatus);

  return authStatus === AuthStatus.Auth;
}
