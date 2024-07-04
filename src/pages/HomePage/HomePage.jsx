import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={css.wrapper}>
      <h1>Welcome to PhoneBook!</h1>
      <h3>
        Here you can easily create a new user account and organizing your
        contacts.
      </h3>
      {!isLoggedIn && (
        <>
          <p className={css.text}>
            Have an account?
            <span className={css.pre_text}>
              <Link to="/login" className={css.link}>
                Log In
              </Link>
            </span>
          </p>
          <p className={css.text}>
            No account?
            <span className={css.pre_text}>
              <Link to="/register" className={css.link}>
                Sign In!
              </Link>
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default HomePage;
