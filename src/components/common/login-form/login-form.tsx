import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '@/hooks/store/store';
import {loginAction} from '@/store/api-actions';
import {AuthData} from '@/types/user';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const login = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const formSubmitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login.current !== null && password.current !== null) {
      const authData: AuthData = {
        login: login.current?.value || '',
        password: password.current?.value || '',
      };
      dispatch(loginAction(authData));
    }
  };

  return (
    <form className="login__form form"
      action=""
      method="post"
      onSubmit={formSubmitHandle}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="login"
          placeholder="Email"
          required
          //value="Oliver.conner@gmail.com"
          ref={login}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          autoComplete="on"
          //value="password1"
          ref={password}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}
