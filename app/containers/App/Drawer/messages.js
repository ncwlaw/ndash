/*
 * App Drawer Messages
 *
 * This contains all the text for the App Drawer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'ndash.containers.App.Drawer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'NVDash',
  },
  version: {
    id: `${scope}.version`,
    defaultMessage: 'v0.1.0',
  },
  pipelines: {
    id: `${scope}.pipelines`,
    defaultMessage: 'Pipelines',
  },
  monitoring: {
    id: `${scope}.monitoring`,
    defaultMessage: 'Monitoring',
  },
  deliveryMetrics: {
    id: `${scope}.delivery.metrics`,
    defaultMessage: 'Delivery Metrics',
  },
  configureProject: {
    id: `${scope}.configure.project`,
    defaultMessage: 'Configure Project',
  },
  navigation: {
    id: `${scope}.navigation`,
    defaultMessage: 'Navigation',
  },
});
