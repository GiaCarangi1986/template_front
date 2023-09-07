import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTE_INFO } from './const';
import Main from './pages/Main';

const AppWithRouter = () => {
  const PAGE = {
    [ROUTE_INFO.main.pageName]: Main,
  };

  return (
    <Routes>
      {Object.keys(ROUTE_INFO).map((key) => {
        const elem = ROUTE_INFO[key as keyof typeof ROUTE_INFO];
        const PageComponent = PAGE[elem.pageName as keyof typeof PAGE];

        return (
          <Route
            key={elem.pageName}
            path={elem.path}
            element={<PageComponent />}
          />
        );
      })}
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

export default App;
