import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/externalcontexts";
import { signOutUser } from "../../utils/firebase.utils";
import './navigation-component.scss'

const Navigation = () => {
  const {userStorage} = useContext(UserContext);
  // console.log(userStorage);
  // const onClickHandler = async () => {
  //   await signOutUser();
  //   setuserStorage(null);
  // }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {
            // console.log("I am nav");
            // console.log("I am nav");
            userStorage ? (
              <span className="nav-link" onClick={signOutUser}>{' '}
              Sign Out{' '}</span>
            ) : (
              
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
