import { useCallback } from "react";
import Signin from "../components/Signin";
import { useDispatch } from "react-redux";
import { login as loginSagaStart } from "../redux/modules/auth";

export default function SinginContainer() {
  const dispatch = useDispatch();
  const login = useCallback(
    (reqData: any) => {
      dispatch(loginSagaStart(reqData));
    },
    [dispatch]
  );
  return <Signin login={login} />;
}
