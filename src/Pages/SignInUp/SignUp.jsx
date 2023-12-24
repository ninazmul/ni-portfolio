import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData.email, formData.password);
      updateUserProfile(formData.photoUrl, formData.name);
      console.log("User created successfully!")
        .then(() => {
          console.log('user profile info updated!');
          showSuccessAlert();
          navigate(from, { replace: true });
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError(error.message);
      showErrorAlert("Error", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      // You can do additional tasks after successful Google sign-in if needed
      console.log("User signed in with Google successfully!");
      showSuccessAlert();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
      setError(error.message);
      showErrorAlert("Error", error.message);
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "User signed up successfully!",
    });
  };

  const showErrorAlert = (title, text) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: text,
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl font-bold">
            Stay Connected with{" "}
            <span className="text-fuchsia-500">N.I. Nazmul</span>'s Portfolio!
          </h1>
          <p className="py-6">
            Sign up to gain full access to{" "}
            <span className="text-fuchsia-500">N.I. Nazmul</span>'s portfolio
            and explore a collection of previous works. Join now to dive into a
            showcase of creativity!
          </p>
        </div>
        <div className="card w-4/5 md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Your PhotoUrl</span>
              </label>
              <input
                type="text"
                placeholder="Your PhotoUrl"
                name="photoUrl"
                className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <div className="text-red-500 mt-2">
                <p>{error}</p>
              </div>
            )}
            <div className="form-control mt-6">
              <input
                className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
                value="SignUp"
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
              Already a Subscriber?{" "}
              <Link to="/signIn" className="underline text-fuchsia-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
