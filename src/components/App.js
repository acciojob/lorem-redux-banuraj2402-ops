import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './store/actions.js';
import './../styles/App.css';

function App() {
const App = () => {
  const dispatch = useDispatch();
  const { loading, error, title, body } = useSelector((state) => state.lorem);

  }, [dispatch]);

  return (
    <main className="app-shell">
      <section className="content-panel" aria-labelledby="page-title">
        <h1 id="page-title">Lorem Redux Output</h1>
    <div>
      {/* Do not remove the main div */}
      <main className="app-shell">
        <section className="content-panel" aria-labelledby="page-title">
          <h1 id="page-title">Lorem Redux Output</h1>

        {loading && <p className="status">Loading...</p>}
        {error && !loading && <p className="status error">{error}</p>}
        {!loading && !error && (
          <p className="lorem-content">
            <strong>{title}</strong>
            <span>{body}</span>
          </p>
        )}
      </section>
    </main>
          {loading && <p className="status">Loading...</p>}
          {error && !loading && <p className="status error">{error}</p>}
          {!loading && !error && (
            <p className="lorem-content">
              <strong>{title}</strong>
              <span>{body}</span>
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
};

export default App;
