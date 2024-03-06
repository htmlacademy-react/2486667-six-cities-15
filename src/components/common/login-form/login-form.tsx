import {ReactEventHandler, useState} from 'react';

type TDataForm = {
  email: string;
  password: string;
}

type TFieldChangeHandler = ReactEventHandler<HTMLInputElement>;

export default function LoginForm() {
  const [dataForm, setDataForm] = useState<TDataForm>({
    email: '',
    password: '',
  });

  const fieldChangeHandler: TFieldChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    setDataForm({...dataForm, [name]: value});
  };

  return (
    <form className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={dataForm.email}
          onChange={fieldChangeHandler}
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
          value={dataForm.password}
          onChange={fieldChangeHandler}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}
