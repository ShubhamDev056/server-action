"use client";
import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import { login } from "../lib/action";

const initialState = {
  message: null,
};

const Form = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction}>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="pwd"
        />
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-default"
        area-disable={pending ? pending : null}
      >
        {pending ? "loading..." : "Submit"}
      </button>

      {state?.message ? <p aria-live="polite">{state?.message}</p> : null}
    </form>
  );
};

export default Form;
