import gql from 'graphql-tag';

const GET_BUILDS = gql`
    query getBuilds($projectName: String!) {
        builds(project: $projectName, status: "release") {
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
        certified: builds(project: $projectName, status: "certified") {
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
    METRICS: 'METRICS',
    BUILD: 'BUILD',
    TABLE: 'TABLE',
});

const COLUMN_HEADER_ORDER = Object.freeze({
    prespace: 1,
    postspace: 2,
});

export {
    COLUMN_HEADER_ORDER,
    CONTENT,
    GET_BUILDS,
    GET_SUBSYSTEMS,
    GET_PROJECTS,
};
