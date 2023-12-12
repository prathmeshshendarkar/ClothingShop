import { SignInWithGoogleAuth , createUserDocument } from "../../utils/firebase.utils";
import SignUpForm from "../../components/signup-form/signup.component";

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

        <SignUpForm />
      </div>
    );
  };
  
  export default SignIn;
  