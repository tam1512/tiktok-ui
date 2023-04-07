import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRotes } from './routes';
import { DefaultLayout } from './components/Layout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRotes.map((route, index) => {
            // Không truyền layout thì sẽ mặc định là DefaultLayout
            // Truyền layout không đúng sẽ là Fragment
            // Truyền layout khác thì theo layout đó
            let Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
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
