import React from "react";
import SinginContainer from "../containers/SigninContainers";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import { Redirect } from "react-router-dom";

export default function Signin() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SinginContainer />;
}
