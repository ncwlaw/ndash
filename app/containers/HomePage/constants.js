import gql from "graphql-tag";

const GET_BUILDS = gql`
  query getBuilds {
    builds {
      id
      system
      subsystem
      component
      env
      event
      status
      version
      buildUrl
      tickets
      commits {
        author
        message
      }
    }
  }
`;

const GET_SUBSYSTEMS = gql`
  query getSubsystems {
    subsystems {
      system
      subsystem
    }
  }
`;

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      system
    }
  }
`;

const CONTENT = Object.freeze({
  METRICS: "METRICS",
  BUILD: "BUILD",
  TABLE: "TABLE",
});

export {
  GET_BUILDS,
  GET_SUBSYSTEMS,
  GET_PROJECTS,
  CONTENT,
};
