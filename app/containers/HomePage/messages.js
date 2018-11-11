/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'ndash.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'CICD Workflow Status',
  },
  searchLabel: {
    id: `${scope}.search.label`,
    defaultMessage: 'Search for Subsystem',
  },
  emptyMessage: {
    id: `${scope}.empty.message`,
    defaultMessage: 'No more options',
  },
  metrics: {
    id: `${scope}.metrics`,
    defaultMessage: 'Metrics',
  },
  buildTitle: {
    id: `${scope}.build.title`,
    defaultMessage: 'Build Details',
  },
  buildSubheader: {
    id: `${scope}.build.subheader`,
    defaultMessage: `{environment} v{version}`,
  },
  prespace: {
    id: `${scope}.prespace`,
    defaultMessage: 'Pre-Space',
  },
  postspace: {
    id: `${scope}.postspace`,
    defaultMessage: 'Post-Space',
  },
  component: {
    id: `${scope}.component`,
    defaultMessage: 'Component',
  },
  relatedLinks: {
    id: `${scope}.relatedLinks`,
    defaultMessage: 'Related Links',
  },
  chipFailure: {
    id: `${scope}.chip.failure`,
    defaultMessage: 'Failure',
  },
  chipSuccessful: {
    id: `${scope}.chip.success`,
    defaultMessage: 'Successful',
  },
  chipPending: {
    id: `${scope}.chip.pending`,
    defaultMessage: 'Pending',
  },
  jiraLink: {
    id: `${scope}.jira.link`,
    defaultMessage: 'Jira Ticket Link',
  },
  jenkinsLink: {
    id: `${scope}.jenkins.link`,
    defaultMessage: 'Jenkins Build Link',
  },
  githubLink: {
    id: `${scope}.github.link`,
    defaultMessage: 'Github Pull Request',
  },
  successCard: {
    id: `${scope}.success.card`,
    defaultMessage: 'Passed',
  },
  failCard: {
    id: `${scope}.fail.card`,
    defaultMessage: 'Failed',
  },
  totalCard: {
    id: `${scope}.total.card`,
    defaultMessage: 'Total',
  },
});
