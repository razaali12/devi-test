import React, { useState } from "react";
import "../styles.scss";
import { Form, Input, Button } from "antd";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Images } from "../../../themes";
import { ButtonComponent } from "../../../components";
import {
  DASHBOARD_ROUTE,
  FORGETPASS_ROUTE,
  USERS_ROUTE,
  WEB_STRINGS,
} from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../../redux/slicers/user";
const SignIn = () => {
  const { SIGNIN } = WEB_STRINGS;
  const { EMAIL, PASSWORD, TENANT } = SIGNIN.FIELDS;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFormFinish = () => {
    setLoading(true);
    const credentials = form.getFieldsValue();
    console.log({ credentials });
    dispatch(
      loginRequest({
        credentials,
        responseCallback: (status, err) => {
          console.log("message", err);
          setLoading(false);
          if (status) {
            setError("");
          } else {
            setError(err);
          }
        },
      })
    );
    // navigate(USERS_ROUTE.GET);
  };

  return (
    <section className="signin-wrapper">
      <div className="logo-wrapper">
        <img src={Images.Logo} alt="" />
      </div>
      <div className="form-wrapper">
        <h3 className="title">{SIGNIN.TITLE}</h3>
        <Form form={form} className="form" onFinish={handleFormFinish}>
          <Form.Item
            name={EMAIL.NAME}
            rules={[
              {
                required: true,
                message: EMAIL.ERRORMESSAGE.REQUIRED,
              },
            ]}
          >
            <Input name={EMAIL.NAME} placeholder={EMAIL.PLACEHOLDER} />
          </Form.Item>
          <Form.Item
            name={PASSWORD.NAME}
            rules={[
              {
                required: true,
                message: PASSWORD.ERRORMESSAGE.REQUIRED,
              },
            ]}
          >
            <Input.Password
              // className="pass"
              name={PASSWORD.NAME}
              placeholder={PASSWORD.PLACEHOLDER}
            />
          </Form.Item>
          <Form.Item
            name={TENANT.NAME}
            rules={[
              {
                required: true,
                message: TENANT.ERRORMESSAGE.REQUIRED,
              },
            ]}
          >
            <Input name={TENANT.NAME} placeholder={TENANT.PLACEHOLDER} />
          </Form.Item>
          <Form.Item>
            <ButtonComponent isLoading={isLoading} text={SIGNIN.BTN} />
          </Form.Item>
          {error && <div className="formError">{error}</div>}
          {/* <div className="forgot-pass">
            <Link to={FORGETPASS_ROUTE}>{SIGNIN.FORGETPASS}</Link>
          </div> */}
        </Form>
      </div>
    </section>
  );
};

export default SignIn;
