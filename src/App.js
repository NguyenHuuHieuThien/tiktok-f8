import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import HomePage from './Page/Home';
import FollowingPage from './Page/Following';
import DefaultLayout from './Component/Layout/DefaultLayout';
import { HeaderOnly } from './Component/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            let Component = item.component;

            let Layout = DefaultLayout;
            if (item.layout) {
              Layout = item.layout;
            } else if (Route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
