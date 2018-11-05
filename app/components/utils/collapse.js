import { withStateHandlers } from 'recompose';

export default withStateHandlers(
  ({ initialCollapse = false }) => ({
    isCollapse: initialCollapse,
  }),
  {
    toggleCollapse: ({ isCollapse }) => () => ({
      isCollapse: !isCollapse,
    }),
  }
);
