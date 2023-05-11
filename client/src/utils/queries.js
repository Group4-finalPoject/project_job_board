import { gql } from "@apollo/client";

export const JOB_LIST = gql`query getJobs {
    jobs {
      name
      salary
      id
      description
      company
    }
  }
  `;