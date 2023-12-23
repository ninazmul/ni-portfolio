import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const SignIn = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])
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
              <div className="form-control">
                <label className="label">
                  <span className="">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <div className="pb-2">
                  <LoadCanvasTemplate />
                </div>
                            <input
                                onBlur={handleValidateCaptcha}
                                ref={captchaRef}
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