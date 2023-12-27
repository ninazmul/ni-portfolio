import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/firebase.config";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const auth = getAuth(app); 

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      showSuccessAlert("Success!", "Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
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

  return (
    <div className="password-reset-container">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-5xl font-bold">
              Password <span className="text-fuchsia-500">Reset</span>!
            </h1>
            <p className="py-6">
              Enter your email to receive a password reset link.
            </p>
          </div>
          <div className="card w-4/5 md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white">
            <form className="card-body">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg py-2 bg-white px-8 flex-shrink-0 shadow-2xl border-2 border-fuchsia-500 card_glow text-fuchsia-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <input
                  onClick={handlePasswordReset}
                  className="btn btn-outline neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                  type="submit"
                  value="Send Reset Email"
                />
              </div>

              <p className="text-center">
                Remember your password?{" "}
                <Link to="/signIn" className="underline text-fuchsia-500">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
