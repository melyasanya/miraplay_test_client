import { useState } from "react";
import { useForm } from "react-hook-form";
import css from "./LoginAndRegistration.module.css";

export const LoginAndRegistration = () => {
  const [toRegister, setToRegister] = useState(true);

  const { register, handleSubmit } = useForm();

  const handleButtonChange = (e) => {
    if (e.target.id === "login") {
      setToRegister(false);
    } else {
      setToRegister(true);
    }
  };

  const onSubmit = () => {};

  return (
    <div className={css.content}>
      <div className={css.btnPanel}>
        <button
          className={!toRegister ? `${css.btn} ${css.btnActive}` : css.btn}
          id="login"
          onClick={handleButtonChange}
        >
          Вхід
        </button>
        <button
          className={toRegister ? `${css.btn} ${css.btnActive}` : css.btn}
          id="registration"
          onClick={handleButtonChange}
        >
          Реєстрація
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label htmlFor="email" className={css.label}>
          Введіть ваш email
        </label>
        <input
          name="email"
          id="email"
          type="text"
          className={css.input}
          placeholder="Ваш email"
          {...register("email", { required: true })}
        />
        <label htmlFor="password" className={css.label}>
          Введіть ваш пароль
        </label>
        <input
          name="password"
          id="password"
          type="text"
          placeholder="Ваш пароль"
          className={css.input}
          {...register("password", { required: true })}
        />
        <button type="submit" className={css.submitBtn}>
          {toRegister ? "Реєстрація" : "Вхід"}
        </button>
      </form>
    </div>
  );
};
