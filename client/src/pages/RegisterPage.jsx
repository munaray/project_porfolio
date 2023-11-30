import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="mt-4 flex grow items-center justify-around">
      <figure className="mb-8">
        <h1 className="mb-4 text-center text-4xl">Register</h1>
        <form
          className="mx-auto max-w-md bg-slate-50 p-8" /* onSubmit={registerUser} */
        >
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary my-2">Register</button>
          <p className="py-5 text-center text-gray-500">
            Already a member?{"  "}
            <Link className="text-black underline" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </figure>
    </section>
  );
};

export default RegisterPage;
