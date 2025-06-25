import React, { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { animate, inView } from "motion";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState();
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const { googleSignIn, emailLogIn, userInfo } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const logRef = useRef();

  useEffect(() => {
    inView(logRef.current, () => {
      animate(
        logRef.current,
        { y: [300, 0], opacity: [0, 1] },
        { duration: 0.7, easing: "ease-out" }
      );
    });
    document.title = "Log In | Plant Companion"
  }, []);

  const handleEmailLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passReg = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passReg.test(password)) {
      return setPassErrorMessage(
        "Password must contain one uppercase letter, one lower case letter and needs to be minimum six character long."
      );
    }

    emailLogIn(email, password)
      .then(() => {
        toast.success("User Log In Successful!");
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Incorrect email or password! Please Try Again.");
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state || "/");
        toast.success(`Log in with google successful!`);
      })
      .catch((err) => {
        toast.error(`${err.message}`);
      });
  };
  return (
    <div className="bg-[url(./assets/log-img.jpeg)] p-10 log-in bg-no-repeat bg-cover w-full mx-auto">
      <div className="flex justify-center py-5">
        <div ref={logRef} className="card form-bg w-full max-w-sm shrink-0 shadow-xl">
          <div className="card-body">
            <h1 className="play pb-2 arap text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-lime-600">
              Log In!
            </h1>
            <form onSubmit={handleEmailLogIn} className="fieldset">
              <label className="label text-lg text-green-900">Email</label>
              <input
                name="email"
                type="email"
                className="input text-green-900 text-lg"
                placeholder="Email"
                required
              />
              <div className="relative">
                <label className="label text-lg text-green-900">Password</label>
                <input
                  onClick={() => setPassErrorMessage("")}
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  className="input text-green-900 text-lg z-10"
                  placeholder="Password"
                  required
                />
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-sm absolute right-6 bottom-1 z-20"
                >
                  {showPassword ? (
                    <FaEye size={25} color="darkgreen" />
                  ) : (
                    <FaEyeSlash size={25} color="darkgreen" />
                  )}
                </p>
              </div>
              <p className="text-red-700">{passErrorMessage}</p>
              <div>
                <Link
                  to={"/resetpassword"}
                  className="link link-hover text-lg text-green-900 hover:text-red-700 duration-200"
                >
                  Forgot password?
                </Link>
              </div>

              {userInfo ? (
                <p className="btn bg-gradient-to-r from-green-900 to-green-600 border border-green-800 hover:bg-gradient-to-l hover:from-green-800 hover:to-green-600 text-white mt-4 text-lg hover:cursor-not-allowed">
                  Already Logged In
                </p>
              ) : (
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-green-900 to-green-600 border border-green-800 hover:bg-gradient-to-l hover:from-green-800 hover:to-green-600 text-white mt-4 text-lg"
                >
                  Login
                </button>
              )}
            </form>
            <div>
              <Link
                className="link link-hover text-lg text-green-800"
                to={"/register"}
              >
                Don't Have an Account?{" "}
                <span className="text-green-500">Register!</span>
              </Link>
            </div>
            <div>
              {!userInfo && (
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full btn bg-white text-green-800 py-6 border-[#e5e5e5] text-base hover:bg-green-800 hover:text-white duration-200"
                >
                  <svg
                    aria-label="Google logo"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
