import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
  const logGoogleUser = () => {
    signInWithGooglePopup().subscribe((response) => {
      console.log(response);
      const { user } = response;
      createUserDocumentFromAuth(user);
    });
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  );
};

export default SignIn;
