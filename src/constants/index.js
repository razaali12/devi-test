import {
  faSignOutAlt,
  faCog,
  faTag,
  faUsers,
  faProjectDiagram,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { SignIn, Tasks, TasksForm } from "../modules";
export const ALERT_TIMEOUT = 3000;
export const DEV_ENV = "dev";
export const PROD_ENV = "prod";
export const API_LOG = process.env.REACT_APP_ENV === DEV_ENV;
export const API_TIMEOUT = 30000;

// DATE FORMATS
export const DATE_FORMAT1 = "DD MMM, YYYY";
export const DATE_FORMAT2 = "DD, MMM YY";
export const DATE_FORMAT3 = "YYYY-MM-DD";
export const DATE_FORMAT4 = "DD-MM-YYYY";
export const TIME_FORMAT1 = "hh:mm a";
export const TIME_FORMAT2 = "hh:mm";
export const TIME_FORMAT3 = "hh";
export const DATE_TIME = "DD-MM-YYYY hh:mm a";

// SUCCESS ALERTS
export const SUCCESS_ALERTS = {
  // SUBSCRIPTION
  CREATE_SUBSCRIPTION: "Subscription Created Successfully",
  DELETE_SUBSCRIPTION: "Subscription Deleted Successfully",
  UPDATE_SUBSCRIPTION: "Subscription Updated Successfully",
};

// SUBSCRIPTION DURATION TYPES
export const SUBSCRIPTION_DURATION_TYPES = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];
// DASHOBOARD PAGES CONFIG
export const ACCESS_TYPES = {
  PRIVATE: "private",
  AUTH: "auth",
};
// DASHOBOARD ROLES CONFIG
export const ROLES_ACCESS_TYPES = {
  ADMIN: "admin",
  PROJECT_MANAGER: "project_manager",
};
// ALERT CONFIG
export const ALERT_POSITIONS = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  TOP_CENTER: "top-center",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
};
export const ALERT_THEMES = {
  DARK: "dark",
  COLORED: "colored",
  LIGHT: "light",
};
export const ALERT_TYPES = {
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  DEFAULT: "default",
};

// AUTH ROUTE
export const LOGIN_ROUTE = "/";
export const FORGETPASS_ROUTE = "/forget-password";
export const RESETPASS_ROUTE = "/reset-password/:token";
// DASHBOARD ROUTE
export const DASHBOARD_ROUTE = "/dashboard";
// USERS ROUTES
export const TASKS_ROUTE = {
  GET: "/tasks",
  CREATE: "/create-task",
  UPDATE: "/update-task/:id",
  DETAIL: "/task-detail/:dataid",
};
// SUBSCRIPTION ROUTES
export const SUBSCRIPTION_ROUTE = {
  GET: "/subscriptions",
  CREATE: "/create-subscription",
  UPDATE: "/update-subscription/:id",
  DETAIL: "/subscription-detail/:dataid",
};

export const PAGE_ROUTES = [
  // AUTH ROUTE
  {
    title: "Login",
    route: LOGIN_ROUTE,
    access: ACCESS_TYPES.AUTH,
    component: <SignIn />,
  },
  // TASKS ROUTE
  {
    title: "Task Management",
    route: TASKS_ROUTE.GET,
    access: ACCESS_TYPES.PRIVATE,
    component: <Tasks />,
  },
  {
    title: "Create Task",
    route: TASKS_ROUTE.CREATE,
    access: ACCESS_TYPES.PRIVATE,
    component: <TasksForm />,
  },
  {
    title: "Update Task",
    route: TASKS_ROUTE.UPDATE,
    access: ACCESS_TYPES.PRIVATE,
    component: <TasksForm />,
  },
  {
    title: "Task Detail",
    route: TASKS_ROUTE.DETAIL,
    access: ACCESS_TYPES.PRIVATE,
    component: <TasksForm />,
  },
];

export const SIDEBAR_LINKS = [
  {
    title: "Tasks",
    icon: faUsers,
    route: TASKS_ROUTE.GET,
  },
];

export const DASHBOARD_ANALYTICS = [
  {
    id: "1",
    title: "Users",
    icon: faUsers,
  },
  {
    id: "2",
    title: "Subscriptions",
    icon: faTag,
  },
  {
    id: "3",
    title: "Projects",
    icon: faProjectDiagram,
  },
  {
    id: "4",
    title: "Total Income",
    icon: faDollarSign,
  },
];

export const API_DATA_RES = {
  meta: {
    total: 4,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
  },
  // data: [
  //   {
  //     id: 1,
  //     name: "Admin",
  //     is_default: true,
  //     created_at: "2022-06-02T19:52:42.660+00:00",
  //     updated_at: "2022-06-02T19:52:42.662+00:00",
  //   },
  //   {
  //     id: 2,
  //     name: "Client",
  //     is_default: true,
  //     created_at: "2022-06-02T19:52:42.958+00:00",
  //     updated_at: "2022-06-02T19:52:42.959+00:00",
  //   },
  //   {
  //     id: 3,
  //     name: "Crew",
  //     is_default: true,
  //     created_at: "2022-06-02T19:52:43.256+00:00",
  //     updated_at: "2022-06-02T19:52:43.257+00:00",
  //   },
  // ],
};

export const WEB_STRINGS = {
  HEADER: {
    MESSAGE: "Hello! Welcome Back",
    TITLE: "Dashboard",
    USERMENU: {
      USERNAME: "username",
      ACCOUNT: "Account",
      LOGOUT: "Logout",
      ACCICON: faCog,
      LOGOUTICON: faSignOutAlt,
    },
    NOTI: {
      TITLE: "Notifications",
      NOTI1: "Notification 1",
      NOTI2: "Notification 2",
      NOTI3: "Notification 3",
    },
  },
  ERRORPAGE: {
    TITLE: "404",
    SUBTITLE: "Oops! Page not found",
    DESCRIPTION:
      "The page you are looking was doesn't exsist. You may have mistyped the address or the page may have been moved",
    BUTTON: "Back to Home",
  },
  CONFIRMATION_MODAL: {
    CLOSE: "Close",
    CONFIRM: "Yes, confirm",
  },
  SIGNIN: {
    TITLE: "Login",
    FORGETPASS: "Forgot Password?",
    FIELDS: {
      EMAIL: {
        NAME: "login",
        PLACEHOLDER: "Name",
        ERRORMESSAGE: {
          REQUIRED: "Name is required",
          TYPE: "Invalid Email Address",
        },
      },
      PASSWORD: {
        NAME: "password",
        PLACEHOLDER: "Password",
        ERRORMESSAGE: {
          REQUIRED: "Password is required",
        },
      },
      TENANT: {
        NAME: "tenantid",
        PLACEHOLDER: "Tenant Id",
        ERRORMESSAGE: {
          REQUIRED: "Tenant Id is required",
        },
      },
    },
    BTN: "Login",
  },
  FORGOTPASS: {
    TITLE: "Forget Password",
    BTN: "Send Email",
    FIELDS: {
      EMAIL: {
        NAME: "email",
        PLACEHOLDER: "Email Address",
        ERRORMESSAGE: {
          REQUIRED: "Email Address is required",
          TYPE: "Invalid Email Address",
        },
      },
    },
    EMAILSEND:
      "Please check your inbox, a reset password link has been sent to your email Address",
  },
  RESETPASS: {
    TITLE: "Reset Password",
    BTN: "Reset Password",
    FIELDS: {
      PASSWORD: {
        NAME: "password",
        PLACEHOLDER: "New Password",
        MINLENGTH: 8,
        ERRORMESSAGE: {
          REQUIRED: "Password is required",
          MIN: "Minimum 8 characters",
        },
      },
      CONFIRMPASSWORD: {
        NAME: "confirmpassword",
        PLACEHOLDER: "Confirm New Password",
        minLength: 8,
        ERRORMESSAGE: {
          REQUIRED: "Confirm Password is required",
          MIN: "Minimum 8 characters",
          MATCH: "Password doesn't match",
        },
      },
    },
  },
  USERS: {
    FILTER: {
      TITLE: "Filter",
      FIELDS: {
        NAME: {
          NAME: "name",
          LABEL: "Name:",
          PLACEHOLDER: "Filter by user name",
        },
      },
      BTN: "Apply Filters",
    },
    TABLE: {
      TITLE: "Tasks",
      BTN: "Create Task",
      COLUMN: {
        NO: "Id",
        NAME: "Task",
        CREATED: "Created At",
        CANCELLED: "Cancelled At",
        COMPLETED: "Completed At",
        ACTION: "Action",
      },
      TOOLTIP: {
        EDIT: "Edit Task",
        DETAIL: "Task Detail",
        DELETE: "Delete Task",
        COMPLETED: "Complete Task",
        CANCELLED: "Cancel Task",
      },
    },
    CONFIRMATION_MODAL: {
      TITLE: "Delete User?",
      DESCRIPTION: "Are you sure you want to delete this task?",
    },
  },
  USERS_FORM: {
    EDIT_BTN: "Edit Task",
    CREATE_BTN: "Create",
    UPDATE_BTN: "Update",
    FIELDS: {
      NAME: {
        PLACEHOLDER: "Name",
        MAX_LENGTH: 80,
        TITLE: "task",
        LABEL: "Task:",
        TYPE: "text",
        ERROR_MESSAGES: {
          REQUIRED: "Task is required",
          MAX: "Task should be less than 80 characters",
          WHITESPACE: "Task should not contain only whitespaces",
        },
      },
    },
  },
  SUBSCRIPTIONS: {
    FILTER: {
      TITLE: "Filter",
      FIELDS: {
        NAME: {
          NAME: "title",
          LABEL: "Title:",
          PLACEHOLDER: "Filter by subscription title",
        },
      },
      BTN: "Apply Filters",
    },
    TABLE: {
      TITLE: "Subscriptions",
      BTN: "Create Subscription",
      COLUMN: {
        NO: { TITLE: "No", INDEX: "" },
        NAME: { TITLE: "Name", INDEX: "sub_name" },
        PRICE: { TITLE: "Price", INDEX: "sub_price" },
        DURATION: { TITLE: "Duration", INDEX: "sub_duration" },
        CREATED: { TITLE: "Created At", INDEX: "createdAt" },
        UPDATED: { TITLE: "Updated At", INDEX: "updatedAt" },
        ACTION: { TITLE: "Action", INDEX: "" },
      },
      TOOLTIP: {
        EDIT: "Edit Subscription",
        DETAIL: "Subscription Detail",
        DELETE: "Delete Subscription",
      },
    },
    CONFIRMATION_MODAL: {
      TITLE: "Delete Subscription?",
      DESCRIPTION: "Are you sure you want to delete this subscription?",
    },
  },
  SUBSCRIPTION_FORM: {
    EDIT_BTN: "Edit Subscription",
    CREATE_BTN: "Create",
    UPDATE_BTN: "Update",
    FEATURE_TOOLTIP: "Add another feature",
    ADDON_TOOLTIP: "Add another addon",
    FIELDS: {
      NAME: {
        PLACEHOLDER: "Enter Name",
        MAX_LENGTH: 80,
        TITLE: "sub_name",
        LABEL: "Name:",
        TYPE: "text",
        ERROR_MESSAGES: {
          REQUIRED: "Name is required",
          MAX: "Name should be less than 80 characters",
          WHITESPACE: "Name should not contain only whitespaces",
        },
      },
      PRICE: {
        PLACEHOLDER: "Enter Price",
        MAX_LENGTH: 10,
        TITLE: "sub_price",
        LABEL: "Price:",
        TYPE: "number",
        ERROR_MESSAGES: {
          REQUIRED: "Price is required",
          MAX: "Price should be less than 10 characters",
          WHITESPACE: "Price should not contain only whitespaces",
        },
      },
      DURATION: {
        PLACEHOLDER: "Select Duration",
        TITLE: "sub_duration",
        LABEL: "Duration:",
        ERROR_MESSAGES: {
          REQUIRED: "Duration is required",
        },
      },
      FEATURES: {
        PLACEHOLDER: "Enter Feature",
        MAX_LENGTH: 80,
        TITLE: "subs_features",
        TITLE_ID: "sub_feature_id",
        TITLE_VALUE: "sub_feature_title",
        LABEL: "Features",
        TYPE: "text",
        ERROR_MESSAGES: {
          REQUIRED: "Feature is required",
          MAX: "Feature should be less than 80 characters",
          WHITESPACE: "Feature should not contain only whitespaces",
        },
      },
      ADDON_TITLE: {
        PLACEHOLDER: "Enter Title",
        MAX_LENGTH: 80,
        TITLE: "sub_addons_title",
        PARENT: "subs_addons",
        PARENT_TITLE: "Addon's",
        PARENT_ID: "sub_addons_id",
        LABEL: "Title",
        TYPE: "text",
        ERROR_MESSAGES: {
          REQUIRED: "Title is required",
          MAX: "Title should be less than 80 characters",
          WHITESPACE: "Title should not contain only whitespaces",
        },
      },
      ADDON_PRICE: {
        PLACEHOLDER: "Enter Price",
        MAX_LENGTH: 10,
        TITLE: "sub_addons_price",
        PARENT: "subs_addons",
        PARENT_ID: "sub_addons_id",
        PARENT_TITLE: "Addon's",
        LABEL: "Amount",
        TYPE: "number",
        ERROR_MESSAGES: {
          REQUIRED: "Price is required",
          MAX: "Price should be less than 10 characters",
          WHITESPACE: "Price should not contain only whitespaces",
        },
      },
    },
  },
};
