import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomerSuccess,
  updateCustomerSuccess,
} from "../../../redux/slicers/tasks";
import { Card, Typography, Col, Row, Tooltip, Form, Input } from "antd";
import {
  EditOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { DataTable, FilterDrawer, ButtonComponent } from "../../../components";
import { Link } from "react-router-dom";
import { ALERT_TYPES, TASKS_ROUTE, WEB_STRINGS } from "../../../constants";
import { getFormattedDateTime, toastAlert } from "../../../services/utils";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_ALL_TAKS, UPDATE_TASK } from "../../../graphQueries";
import moment from "moment/moment";
import _ from "lodash";
const { Title } = Typography;

function Users() {
  // WEBSTRING
  const { FILTER, TABLE } = WEB_STRINGS.USERS;
  const { NAME } = FILTER.FIELDS;
  const { COLUMN, TOOLTIP } = TABLE;
  // STATES
  const [isLoading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const tasksFromStore = useSelector((state) => state.tasks.data);
  const [page, setPage] = useState(1);
  // REDUX DATA
  const dispatch = useDispatch();
  const users = useSelector((state) => state.tasks.data);
  const user = useSelector((state) => state.user);
  const [form] = Form.useForm();
  // DATA DESTRUCTURE
  const { meta, data } = users;
  const paginationConfig = {
    pageSize: meta?.per_page,
    total: meta?.total,
  };

  const [getAllTasks] = useLazyQuery(GET_ALL_TAKS, {
    onCompleted(data) {
      dispatch(getCustomerSuccess(data.tasks));
    },
    onError(err) {
      console.log({ err });
    },
  });

  const [updateTask] = useMutation(UPDATE_TASK, {
    onCompleted(data) {
      setLoading(false);
      dispatch(updateCustomerSuccess(data.update_tasks));
      toastAlert("Task updated successfully", ALERT_TYPES.SUCCESS);
    },
    onError(err) {
      console.log(err);
      toastAlert("Something went wrong.", ALERT_TYPES.ERROR);
    },
  });

  useEffect(() => {
    let filterQuery = "";
    if (filteredData) {
      Object.keys(filteredData).forEach(function (key) {
        if (filteredData[key]) {
          filterQuery += `&${key}=${filteredData[key]}`;
        }
      });
    }
  }, [page, filteredData]);

  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {
    setTasks(tasksFromStore);
  }, [tasksFromStore]);

  const handleFormSubmit = () => {
    const credentials = form.getFieldsValue();
    setFilteredData(credentials);
    setLoading(true);
  };

  const drawerSec = () => (
    <Form
      form={form}
      className="form"
      initialValues={filteredData}
      onFinish={handleFormSubmit}
    >
      <label className="form-lbl">{NAME.LABEL}</label>
      <Form.Item name={NAME.NAME}>
        <Input
          name={NAME.NAME}
          placeholder={NAME.PLACEHOLDER}
          className="form-input"
        />
      </Form.Item>
      <Form.Item style={{ marginTop: 15 }}>
        <ButtonComponent
          text={FILTER.BTN}
          isLoading={isLoading}
          className="w-100"
        />
      </Form.Item>
    </Form>
  );

  const handleUpdateTask = (task, status) => {
    if (!_.isEmpty(task.completed) && !_.isNil(task.completed)) {
      return;
    }

    if (!_.isEmpty(task.cancelled) && !_.isNil(task.cancelled)) {
      return;
    }
    if (status === "complete") {
      updateTask({
        variables: {
          userId: user.data.roleid,
          task: task.task,
          completed: moment().format("YYYY-MM-DDTHH:mm:ss.sss"),
          updateTasksId: task.id,
        },
      });
    }

    if (status === "cancel") {
      updateTask({
        variables: {
          userId: user.data.roleid,
          task: task.task,
          cancelled: moment().format("YYYY-MM-DDTHH:mm:ss.sss"),
          updateTasksId: task.id,
        },
      });
    }
  };

  const columns = [
    {
      title: COLUMN.NO,
      dataIndex: "No",
      key: "1",
      render: (data, value) => <b>{value.id}</b>,
    },
    {
      title: COLUMN.NAME,
      dataIndex: "",
      key: "2",
      render: (data, value) => {
        return <span>{value.task}</span>;
      },
    },
    {
      title: COLUMN.CREATED,
      dataIndex: "created_at",
      key: "3",
      render: (data, value) => {
        return <span>{getFormattedDateTime(value.created)}</span>;
      },
    },
    {
      title: COLUMN.COMPLETED,
      dataIndex: "updated_at",
      key: "4",
      render: (data, value) => {
        return <span>{getFormattedDateTime(value.completed)}</span>;
      },
    },
    {
      title: COLUMN.CANCELLED,
      dataIndex: "updated_at",
      key: "4",
      render: (data, value) => {
        return <span>{getFormattedDateTime(value.cancelled)}</span>;
      },
    },
    {
      title: COLUMN.ACTION,
      key: "3",
      render: (data, record) => {
        const isCancelledOrCompleted =
          !_.isEmpty(record?.completed) || !_.isEmpty(record?.cancelled)
            ? true
            : false;
        return (
          <div className="actions">
            <Link
              to={TASKS_ROUTE.DETAIL.replace(":dataid", data.id)}
              className="update"
            >
              <Tooltip title={TOOLTIP.DETAIL}>
                <EyeOutlined />
              </Tooltip>
            </Link>
            <Link
              to={TASKS_ROUTE.UPDATE.replace(":id", data.id)}
              className="update"
            >
              <Tooltip title={TOOLTIP.EDIT}>
                <EditOutlined />
              </Tooltip>
            </Link>

            <span
              className={`completed ${isCancelledOrCompleted && "taskDone"}`}
              onClick={() => handleUpdateTask(record, "complete")}
            >
              <Tooltip title={TOOLTIP.COMPLETED}>
                <CheckOutlined />
              </Tooltip>
            </span>

            <span
              className={`completed ${isCancelledOrCompleted && "taskDone"}`}
              onClick={() => handleUpdateTask(record, "cancel")}
            >
              <Tooltip title={TOOLTIP.CANCELLED}>
                <CloseOutlined />
              </Tooltip>
            </span>
            {/* <span style={{ opacity: data.is_default ? 0.3 : 1 }}>
              {data.is_default ? (
                <DeleteOutlined style={{ cursor: "auto" }} />
              ) : (
                <Tooltip title={TOOLTIP.DELETE}>
                  <DeleteOutlined onClick={() => handleConfirmModal(record)} />
                </Tooltip>
              )}
            </span> */}
          </div>
        );
      },
    },
  ];

  //HANDLERS

  const handlePageChange = (page, pageSize) => {
    setPage(page);
  };

  const filterHandler = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className="layout-content">
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
            <div className="add-btn">
              <ButtonComponent
                isLink
                link={TASKS_ROUTE.CREATE}
                text={TABLE.BTN}
              />
            </div>
            <Card
              bordered={false}
              className="criclebox cardbody "
              style={{ minHeight: 360 }}
            >
              <div className="project-ant">
                <div>
                  <Title level={5}>{TABLE.TITLE}</Title>
                </div>
              </div>
              <DataTable
                data={tasks}
                columns={columns}
                pagination={{ ...paginationConfig, onChange: handlePageChange }}
              />
            </Card>
          </Col>
        </Row>
      </div>

      <FilterDrawer
        visible={isFilterOpen}
        toggle={filterHandler}
        content={drawerSec()}
      />
    </>
  );
}

export default Users;
