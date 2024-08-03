import ReactGA from 'react-ga';

// Remplacez 'UA-XXXXXXXXX-X' par votre ID de suivi
ReactGA.initialize('UA-XXXXXXXXX-X');

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
