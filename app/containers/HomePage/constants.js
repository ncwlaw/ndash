import gql from 'graphql-tag';

const GET_BUILDS = gql`
    query getBuilds($projectName: String!) {
        builds(project: $projectName) {
            id
            project
            subsystem
            component
            environment
            action
            status
            buildStatus
            buildUrl
            buildVersion
            gitRemote
            tickets
            commits {
                id
                author
                message
                timestamp
            }
        }
    }
`;

const GET_SUBSYSTEMS = gql`
    query getSubsystems {
        subsystems {
            project
            subsystem
        }
    }
`;

const GET_PROJECTS = gql`
    query getProjects {
        projects {
            project
        }
    }
`;

const GET_PROJECT_WEEKLY_REPORTS = gql`
    query getProjectWeeklyReports($projectName: String!, $actionName: String!) {
        weeklyProjectReport(project: $projectName, action: $actionName) {
            total_pass
            total_fail
            total_pass_and_fail
            reports {
                environment
                pass {
                    id
                    count
                }
                fail {
                    id
                    count
                }
                total {
                    id
                    count
                }
            }
        }
    }
`;

const GET_SUBSYSTEM_WEEKLY_REPORTS = gql`
    query getSubsystemWeeklyReports(
        $projectName: String!
        $subsystemName: String!
        $acitonName: String!
    ) {
        weeklySubsystemReport(
            project: $projectName
            subsystem: $subsystemName
            action: $actionName
        ) {
            total_pass
            total_fail
            total_pass_and_fail
            reports {
                environment
                pass {
                    id
                    count
                }
                fail {
                    id
                    count
                }
                total {
                    id
                    count
                }
            }
        }
    }
`;

const GET_COMPONENT_WEEKLY_REPORTS = gql`
    query getComponentWeeklyReports(
        $projectName: String!
        $subsystemName: String!
        $componentName: String!
        $acitonName: String!
    ) {
        weeklyComponentReport(
            project: $projectName
            subsystem: $subsystemName
            component: $componentName
            action: $actionName
        ) {
            total_pass
            total_fail
            total_pass_and_fail
            reports {
                environment
                pass {
                    id
                    count
                }
                fail {
                    id
                    count
                }
                total {
                    id
                    count
                }
            }
        }
    }
`;

const GET_SUBSYSTEM_REPORTS = gql`
    query getSubsystemReports(
        $projectName: String!
        $subsystemName: String!
        $actionName: String!
    ) {
        subsystemReport(
            project: $projectName
            subsystem: $subsystemName
            action: $actionName
        ) {
            total_pass
            total_fail
            total_pass_and_fail
            reports {
                environment
                pass {
                    id
                    count
                }
                fail {
                    id
                    count
                }
                total {
                    id
                    count
                }
            }
        }
    }
`;

const BUILD_ACTIONS = Object.freeze({
    DEPLOY: 'deploy',
    BUILD: 'build',
    CERTIFY: 'certify',
});

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
    BUILD_ACTIONS,
    COLUMN_HEADER_ORDER,
    CONTENT,
    GET_BUILDS,
    GET_SUBSYSTEMS,
    GET_PROJECTS,
    GET_PROJECT_WEEKLY_REPORTS,
    GET_SUBSYSTEM_WEEKLY_REPORTS,
    GET_COMPONENT_WEEKLY_REPORTS,
    GET_SUBSYSTEM_REPORTS,
};
