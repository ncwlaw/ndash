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
});
