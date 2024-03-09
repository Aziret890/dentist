import { useAuth } from "../../entity/auth/store";
import styles from "./index.module.scss";
import SignInForm from "../../entity/auth/ui/SignInForm";
import SignUpForm from "../../entity/auth/ui/SignUpForm";
import clsx from "clsx";
import { useKeyDown } from "../../entity/hooks/useKeyDown";
import { useCurrentUser } from "../../entity/user/store";
import { useQuery } from "@tanstack/react-query";
import { IoMdClose } from "react-icons/io";

export default function AuthModal() {
  const { isAuth, setIsAuth } = useAuth();
  const { getCurrentUser } = useCurrentUser();

  useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: 10000,
    refetchInterval: 10000,
  });

  useKeyDown("Escape", () => setIsAuth(null));
  return (
    <section
      className={clsx(styles["auth"], {
        [styles.active]: isAuth !== null,
      })}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.parent_form}>
          <button
            onClick={() => setIsAuth(null)}
            className={styles.close_auth_modal}
          >
            <IoMdClose />
          </button>
          <h1>{isAuth === "up" ? "Регистрация" : "Авторизация"}</h1>
          <div>
            {isAuth === "up" ? (
              <SignUpForm styles={styles} />
            ) : (
              <SignInForm styles={styles} />
            )}
          </div>
          <center>
            {isAuth === "in" ? (
              <>
                Нету аккаунта?{" "}
                <button
                  onClick={() => setIsAuth("up")}
                  className={styles.set_sign}
                >
                  Создать
                </button>
              </>
            ) : (
              <>
                У вас уже есть аккаунт?{" "}
                <button
                  onClick={() => setIsAuth("in")}
                  className={styles.set_sign}
                >
                  Войти
                </button>
              </>
            )}
          </center>
        </div>
      </div>
    </section>
  );
}
