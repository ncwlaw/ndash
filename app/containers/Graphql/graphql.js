import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_BUILDS = gql`
    query GetBuilds {
        builds {
            id
            system
            subsystem
            component
        }
    }
`;

const Dogs = () => (
    <Query query={GET_BUILDS}>
        {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
                <div>
                    {data.builds.map(build => (
                        <React.Fragment>
                            <div>{build.system}</div>
                            <div>{build.subsystem}</div>
                            <div>{build.component}</div>
                        </React.Fragment>
                    ))}
                </div>
            );
        }}
    </Query>
);

export default Dogs;
