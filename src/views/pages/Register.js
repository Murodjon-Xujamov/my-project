import React, { useEffect, useState } from "react";
import "../../assets/scss/_register.scss";
import { MButton, MInput } from "../element/Container";
import { authLogin } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token !== null) {
      history.push("/admin");
    }
  }, [token]);

  return (
    <>
      <div className="register_content">
        <h3>Register</h3>
        <MInput
          type="text"
          className="register_input"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <MInput
          type="text"
          className="register_input"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <MButton
          className="register_input"
          marginTop={50}
          onClick={() => {
            dispatch(authLogin({ username, password }));
          }}
        >
          Yuborish
        </MButton>
      </div>
    </>
  );
};

export default Register;
