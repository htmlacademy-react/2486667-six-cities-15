import {FormEvent, useRef} from 'react';
import {useActionCreators} from '@/hooks/store/store';
import {AuthData} from '@/types/user';
import {usersActions} from '@/store/slices/users';

export default function LoginForm() {
  const { loginUser } = useActionCreators(usersActions);
  const login = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const formSubmitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login.current !== null && password.current !== null) {
      const authData: AuthData = {
        login: login.current?.value || '',
        password: password.current?.value || '',
      };
      loginUser(authData);
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
