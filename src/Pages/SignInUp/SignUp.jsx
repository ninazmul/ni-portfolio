import { Link } from "react-router-dom";


const SignUp = () => {
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
              and explore a collection of previous works. Join now to dive into
              a showcase of creativity!
            </p>
          </div>
          <div className="card w-4/5 md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-fuchsia-500 card_glow text-white">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="">Your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Your PhotoUrl</span>
                </label>
                <input
                  type="photoUrl"
                  placeholder="Your PhotoUrl"
                  name="photoUrl"
                  className="input input-bordered glass border-fuchsia-800 border-2 input_glow"
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
              </div>
              <div className="form-control mt-6">
                <input
                  className="neno-button font-bold shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-500 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                  type="submit"
                  value="SignUp"
                />
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