import ReactGA from 'react-ga';

ReactGA.initialize('G-3FEPC8F302');

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category, action) => {
  ReactGA.event({
    category,
    action,
  });
};
