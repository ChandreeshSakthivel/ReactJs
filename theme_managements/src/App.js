import React, { Suspense, useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import './styles.css';

const lazyWithDelay = (importFunction, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunction()), delay);
  });
};

const About = React.lazy(() => lazyWithDelay(() => import("./About"), 2000));
const Contact = React.lazy(() => lazyWithDelay(() => import("./Contact"), 2000));

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [loadAbout, setLoadAbout] = useState(false);
  const [loadContact, setLoadContact] = useState(false);

  return (
    <div>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div>
        <button onClick={() => setLoadAbout(true)}>Load About Section</button>
        <button onClick={() => setLoadContact(true)}>Load Contact Section</button>
      </div>

      {loadAbout && (
        <Suspense fallback={<div>Loading About Section...</div>}>
          <About />
        </Suspense>
      )}

      {loadContact && (
        <Suspense fallback={<div>Loading Contact Section...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default App;
