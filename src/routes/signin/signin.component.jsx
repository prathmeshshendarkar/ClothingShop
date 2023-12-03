import { SignInWithGoogleAuth , createUserDocument } from "../../utils/firebase.utils";

const SignIn = () => {
    const logUser = async () => {
        const res = await SignInWithGoogleAuth();
        console.log(res);
        const userDocRefOb = await createUserDocument(res.user);
        console.log(userDocRefOb);
    }

    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={logUser}>Google</button>
      </div>
    );
  };
  
  export default SignIn;
  