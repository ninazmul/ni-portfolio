import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { getAuth } from "firebase/auth";

const SignIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const auth = getAuth();

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      const currentUser = auth.currentUser;

      if (currentUser) {
        console.log("Sign-in successful:", currentUser);
        showSuccessAlert("Success!", "Sign In successfully!");
        navigate(from, { replace: true });
      } else {
        console.error("Error signing in: User not found");
        showErrorAlert("Error", "User not found");
      }
    } catch (error) {
      console.error("Sign-in error:", error.code, error.message);
      showErrorAlert("Error", "Sign In failed!");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result?.user;

      if (user) {
        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            showSuccessAlert("Success!", "User signed in successfully!");
          }
        });

        Swal.fire({
          icon: "success",
          title: "Successful!",
          text: "Sign In successfully!",
        });
        navigate(from, { replace: true });
      } else {
        console.error("Error signing in with Google: User not found");
        showErrorAlert("Error", "User not found");
      }
    } catch (error) {
      console.error("Google Sign-In Error", error);
      showErrorAlert("Error", error.message);
    }
  };

  const showSuccessAlert = (title, text) => {
    Swal.fire({
      icon: "success",
      title: title,
      text: text,
    });
  };

  const showErrorAlert = (title, text) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: text,
    });
  };

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    setDisabled(!validateCaptcha(userCaptchaValue));
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl font-bold">
            Welcome to{" "}
            <Link to="/" className="text-orange-500">
              N.I. Nazmul
            </Link>
            's Portfolio!
          </h1>
          <p className="py-6">
            Explore and enjoy{" "}
            <Link to="/" className="text-orange-500">
              N.I. Nazmul
            </Link>
            's creative projects. Sign in to access the full portfolio
            experience.
          </p>
        </div>
        <div className="card md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-orange-500 card_glow text-orange-200">
          <form onSubmit={handleSignIn} className="card-body">
            {["email", "password"].map((field) => (
              <div key={field} className="form-control">
                <label className="label">
                  <span className="">{`Your ${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }`}</span>
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  placeholder={`Your ${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  }`}
                  name={field}
                  className="input input-bordered glass border-orange-700 border-2 input_glow"
                  required
                />
              </div>
            ))}
            <div className="form-control">
              <label className="label">
                <Link
                  to="/passwordReset"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <div className="pb-2">
                <LoadCanvasTemplate />
              </div>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                placeholder="Type Captcha"
                name="captcha"
                className="input input-bordered glass border-orange-700 border-2 input_glow"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-outline neno-button font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
                value="SignIn"
              />
            </div>
            <p className="text-center">Or</p>
            <div className="form-control">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="neno-button-google font-bold shadow-xl hover:shadow-orange-800/50 border-2 hover:bg-orange-500 border-orange-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center flex items-center justify-center gap-1 text-bold"
              >
                <FcGoogle />
                Google
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/signUp" className="underline text-orange-500">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
