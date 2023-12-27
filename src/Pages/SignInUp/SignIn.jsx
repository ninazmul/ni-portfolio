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

const SignIn = () => {
  const [disabled, setDisabled] = useState(true);
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

const handleSignIn = async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    const result = await signIn(email, password);
    // Ensure that the 'user' property is available in the result object
    const user = result?.user;

    if (user) {
      console.log("User signed in successfully:", user);
      showSuccessAlert("Success!", "User signed in successfully!");
      navigate(from, { replace: true });
    } else {
      // Handle the case where the 'user' property is not available
      console.error("Error signing in: User not found");
      showErrorAlert("Error", "User not found");
    }
  } catch (error) {
    console.error("Error signing in:", error);

    // Check the error code for a specific case
    if (error.code === "auth/user-not-found") {
      console.error("User not found. Please check your credentials.");
      showErrorAlert("Error", "User not found. Please check your credentials.");
    } else {
      showErrorAlert("Error", error.message);
    }
  }
};


  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("User signed in with Google successfully!");
      showSuccessAlert("Success!", "User signed in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
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
            Welcome to <span className="text-fuchsia-500">N.I. Nazmul</span>'s
            Portfolio!
          </h1>
          <p className="py-6">
            Explore and enjoy{" "}
            <span className="text-fuchsia-500">N.I. Nazmul</span>'s creative
            projects. Sign in to access the full portfolio experience.
          </p>
        </div>
        <div className="card w-4/5 md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white">
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
                  className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
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
                className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-outline neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
                value="SignIn"
              />
            </div>
            <p className="text-center">Or</p>
            <div className="form-control">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="neno-button-google font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center flex items-center justify-center gap-1 text-bold"
              >
                <FcGoogle />
                Google
              </button>
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/signUp" className="underline text-fuchsia-500">
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
