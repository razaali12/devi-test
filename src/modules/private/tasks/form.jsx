import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomerSuccess,
  updateCustomerSuccess,
} from "../../../redux/slicers/tasks";
import { Row, Col, Card, Form, Input, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonComponent } from "../../../components";
import { Link } from "react-router-dom";
import { TASKS_ROUTE, WEB_STRINGS } from "../../../constants";
import _ from "lodash";
import { useMutation } from "@apollo/client";
import { CREATE_TASK, UPDATE_TASK } from "../../../graphQueries";

const UsersForm = () => {
  const { CREATE_BTN, EDIT_BTN, FIELDS, UPDATE_BTN } = WEB_STRINGS.USERS_FORM;
  const { NAME } = FIELDS;
  const { id, dataid } = useParams();
  const paramid = id || dataid;

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [isLoading, setLoading] = useState(false);

  const { data: allTasks } = useSelector((state) => state.tasks);
  const task = allTasks.find((t) => t.id === paramid);

  const [createTask] = useMutation(CREATE_TASK, {
    onCompleted(data) {
      setLoading(false);
      dispatch(createCustomerSuccess(data.create_tasks));
      navigate(TASKS_ROUTE.GET);
    },
    onError(err) {
      console.log(err);
    },
  });

  const [updateTask] = useMutation(UPDATE_TASK, {
    onCompleted(data) {
      setLoading(false);
      dispatch(updateCustomerSuccess(data.update_tasks));
      navigate(TASKS_ROUTE.GET);
    },
    onError(err) {
      console.log(err);
    },
  });

  useEffect(() => {
    if (task) {
      form.setFieldsValue({
        task: task.task,
      });
    }

    if (paramid && (_.isEmpty(task) || _.isNil(task))) {
      navigate("/");
    }
  }, [task, paramid]);

  const handleFormFinish = () => {
    const credentials = form.getFieldsValue();

    setLoading(true);

    if (id) {
      updateTask({
        variables: {
          task: credentials.task,
          updateTasksId: paramid,
          userId: user.data.roleid,
        },
      });
    } else {
      createTask({
        variables: {
          userId: user.data.roleid,
          task: credentials.task,
        },
      });
    }
  };

  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {dataid && (
            <div style={{ textAlign: "right" }}>
              <Link to={TASKS_ROUTE.UPDATE.replace(":id", paramid)}>
                <Button className="filter-btn">{EDIT_BTN}</Button>
              </Link>
            </div>
          )}
          <Card
            bordered={false}
            className="criclebox cardbody "
            style={{ padding: "20px 25px" }}
          >
            <Form form={form} className="form" onFinish={handleFormFinish}>
              <Row gutter={[24, 0]}>
                <Col xs={24} md={12} lg={8}>
                  <label className="form-lbl">{NAME.LABEL}</label>
                  <Form.Item
                    name={NAME.TITLE}
                    rules={[
                      {
                        required: true,
                        message: NAME.ERROR_MESSAGES.REQUIRED,
                      },
                      {
                        whitespace: true,
                        message: NAME.ERROR_MESSAGES.REQUIRED,
                      },
                      {
                        max: NAME.maxLength,
                        message: NAME.ERROR_MESSAGES.MAX,
                      },
                    ]}
                  >
                    <Input
                      placeholder={NAME.PLACEHOLDER}
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                {!dataid && (
                  <Col xs={24} md={24} lg={24}>
                    <Form.Item>
                      <ButtonComponent
                        isLoading={isLoading}
                        text={id ? UPDATE_BTN : CREATE_BTN}
                        style={{ width: 220, marginTop: 10, padding: 10 }}
                      />
                    </Form.Item>
                  </Col>
                )}
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UsersForm;
