import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="mt-4 flex grow items-center justify-around">
      <figure className="mb-8">
        <h1 className="mb-4 text-center text-4xl">Login</h1>
        <form
          className="mx-auto max-w-md  bg-slate-50 p-8" /* onSubmit={handleLoginSubmit} */
        >
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary my-2">Login</button>
          <p className="py-5 text-center text-gray-500">
            Don't have an account yet?{"  "}
            <Link className="text-black underline" to={"/register"}>
              Register now
            </Link>
          </p>
        </form>
      </figure>
    </section>
  );
};

export default LoginPage;
