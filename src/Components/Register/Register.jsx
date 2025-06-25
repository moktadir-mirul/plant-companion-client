import React, { useContext, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { animate, inView } from "motion";

const Register = () => {
  const [showPassword, setShowPassword] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const regRef = useRef();
  const { emailSignUp, updateUserInfo, userInfo } =
    useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    inView(regRef.current, () => {
      animate(
        regRef.current,
        { y: [300, 0], opacity: [0, 1] },
        { duration: 0.7, easing: "ease-out" }
      );
    });
    document.title = "Register | Plant Companion"
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setPassErrorMessage("");
    const form = e.target;
    const formData = new FormData(form);
    const userRegData = Object.fromEntries(formData.entries());
    const { name, photoUrl, email, password } = userRegData;
    const passReg = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passReg.test(password)) {
      setPassErrorMessage(
        "Password must contain one uppercase letter, one lower case letter and needs to be minimum six character long."
      );
      return;
    }
    emailSignUp(email, password)
      .then(() => {
        toast.success("New user registration successful");
        updateUserInfo(name, photoUrl)
          .then(() => {
            navigate("/");
          })
          .catch(() => toast.error("Registration failed"));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="bg-[url(./assets/log-img.jpeg)] p-10 log-in bg-no-repeat bg-cover w-full mx-auto">
        <div className="flex justify-center py-5">
          <div
            ref={regRef}
            className="card form-bg w-full max-w-sm shrink-0 shadow-xl"
          >
            <div className="card-body">
              <h1 className="play pb-2 arap text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-lime-600">
                Register yourself!
              </h1>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label text-lg text-green-900">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input text-green-900 text-lg"
                  placeholder="Name"
                  required
                />
                <label className="label text-lg text-green-900">
                  Photo URL
                </label>
                <input
                  name="photoUrl"
                  type="text"
                  className="input text-green-900 text-lg"
                  placeholder="Photo URL"
                  required
                />
                <label className="label text-lg text-green-900">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input text-green-900 text-lg"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <label className="label text-lg text-green-900">
                    Password
                  </label>
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
                {userInfo ? (
                  <p className="btn bg-gradient-to-r from-green-900 to-green-600 border border-green-800 hover:bg-gradient-to-l hover:from-green-800 hover:to-green-600 text-white mt-4 text-lg cursor-not-allowed">
                    Already Logged In
                  </p>
                ) : (
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-green-900 to-green-600 border border-green-800 hover:bg-gradient-to-l hover:from-green-800 hover:to-green-600 text-white mt-4 text-lg"
                  >
                    Register
                  </button>
                )}
              </form>
              <div>
                <Link
                  className="link link-hover text-lg text-green-800"
                  to={"/login"}
                >
                  Already Have an Account?{" "}
                  <span className="text-green-500">Log In!</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
