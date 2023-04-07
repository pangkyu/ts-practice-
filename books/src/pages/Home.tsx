import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../types";
import { logout } from "../redux/modules/auth";

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>홈</h1>
      <button onClick={click}>logout</button>
    </div>
  );

  function click() {
    dispatch(logout());
  }
}
