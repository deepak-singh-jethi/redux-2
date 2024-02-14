import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    if (
      email.trim() == "" ||
      password.trim() == "" ||
      !email.includes("@") ||
      password.length < 7
    ) {
      console.log("chutiya");
      return;
    }

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
