import { Row, Col, Input, Button } from "antd";
import styles from "./Signin.module.css";
import { useRef } from "react";

interface SigninProps {}

const Signin: React.FC<SigninProps> = () => {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img
              src="/bg_signin.jpg"
              className={styles.signin_bg}
              alt="signin"
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>my books</div>
            <div className={styles.signin_subtitle}>plz note your opinion</div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
                ref={emailRef}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                type="password"
                autoComplete="current-password"
                className={styles.input}
                ref={passwordRef}
              />
            </div>
            <div className={styles.button_area}>
              <Button
                size="large"
                className={styles.button}
                onClick={handleClick}
              >
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  function handleClick() {
    const email = emailRef.current!.state.value;
    const password = passwordRef.current!.state.value;
  }
};

export default Signin;
