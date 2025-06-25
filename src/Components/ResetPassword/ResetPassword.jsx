import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { animate, inView } from "motion";

const ResetPassword = () => {
    const {passReset} = useContext(AuthContext);
    const resetRef = useRef();
      useEffect(() => {
        inView(resetRef.current, () => {
          animate(
            resetRef.current,
            { y: [300, 0], opacity: [0, 1] },
            { duration: 0.7, easing: "ease-out" }
          );
        });
        document.title = "Reset | Plant Companion"
      }, []);
    const handleResetPass = e => {
        e.preventDefault();
        const email = e.target.email.value;
        passReset(email)
        .then(() => {
            toast("Password reset email has sent successfully!")
        })
        .catch(err => {
            toast.error(err.message);
        })
    }
  return (
    <div className="bg-[url(./assets/log-img.jpeg)] p-10 log-in bg-no-repeat bg-cover w-full mx-auto">
      <div className="flex justify-center py-5">
        <div ref={resetRef} className="card form-bg w-full max-w-sm shrink-0 shadow-xl">
          <div className="card-body">
            <h1 className="play pb-2 arap text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 to-lime-600">
              Log In!
            </h1>
            <form onSubmit={handleResetPass} className="fieldset">
              <label className="label text-lg text-green-900">Email</label>
              <input
                name="email"
                type="email"
                className="input text-green-900 text-lg"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="btn bg-gradient-to-r from-green-900 to-green-600 border border-green-800 hover:bg-gradient-to-l hover:from-green-800 hover:to-green-600 text-white mt-4 text-lg"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
