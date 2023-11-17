import { Notify } from "notiflix";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { login, registerUser } from "../../helpers/mutationFuncs";

import { changeToken } from "../../redux/Games/GamesSlice";
import { Loader } from "../Loader/Loader";

import css from "./LoginAndRegistration.module.css";

export const LoginAndRegistration = () => {
  const [toRegister, setToRegister] = useState(true);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onSubmit" });

  const mutation = useMutation(registerUser, {
    onError: (error) => {
      Notify.failure(error.response.data.message);
    },
    onSuccess: () => {
      Notify.success("Акаунт успішно зареєстрований");
      reset();
    },
  });

  const loginMutation = useMutation(login, {
    onError: (error) => {
      Notify.failure(error.response.data.message);
    },
    onSuccess: (data) => {
      dispatch(changeToken(data.data.token));
    },
  });

  const handleButtonChange = (e) => {
    if (e.target.id === "login") {
      setToRegister(false);
    } else {
      setToRegister(true);
    }
  };

  const onSubmit = (data) => {
    if (toRegister) {
      mutation.mutate(data);
    } else {
      loginMutation.mutate(data);
    }
  };

  return (
    <div className={css.content}>
      {mutation.isLoading && <Loader />}
      {loginMutation.isLoading && <Loader />}
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
          <p className={css.labelName}> Введіть ваш email</p>

          <input
            name="email"
            id="email"
            type="text"
            className={
              errors.email ? `${css.input} ${css.inputError}` : css.input
            }
            placeholder="Ваш email"
            {...register("email", {
              required: true,
              pattern: /^(?!-)[A-Za-z0-9._-]+@[-A-Za-z0-9]+(\.[A-Za-z]{2,})+$/,
            })}
          />
          {errors.email && (
            <p className={css.validationError}>Неправильна email адреса</p>
          )}
        </label>
        <label htmlFor="password" className={css.label}>
          <p className={css.labelName}> Введіть ваш пароль</p>

          <input
            name="password"
            id="password"
            type="password"
            placeholder="Ваш пароль"
            className={
              errors.password ? `${css.input} ${css.inputError}` : css.input
            }
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <p className={css.validationError}>Неправильний пароль</p>
          )}
        </label>
        <button type="submit" className={css.submitBtn}>
          {toRegister ? "Реєстрація" : "Вхід"}
        </button>
      </form>
    </div>
  );
};
