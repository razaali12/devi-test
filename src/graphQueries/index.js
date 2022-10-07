import { gql } from "@apollo/client";

export const GET_ALL_TAKS = gql`
  query getTasks {
    tasks {
      task
      id
      created
      completed
      cancelled
      userid
      user {
        email
        login
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($task: String!, $userId: BigInt!) {
    create_tasks(input: { task: $task, userid: $userId }) {
      task
      id
      created
      completed
      cancelled
      userid
      user {
        email
        login
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask(
    $updateTasksId: ID!
    $task: String!
    $completed: DateTime
    $cancelled: DateTime
    $userId: BigInt!
  ) {
    update_tasks(
      id: $updateTasksId
      input: {
        task: $task
        completed: $completed
        cancelled: $cancelled
        userid: $userId
      }
    ) {
      task
      id
      created
      completed
      cancelled
      userid
      user {
        email
        login
      }
    }
  }
`;
