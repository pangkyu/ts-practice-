import { Row, Col, Input, Button } from "antd";
import styles from "./Signin.module.css";

export default function Signin() {
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
                className={styles.input}
                placeholder="Email"
                autoComplete="email"
                name="email"
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
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
