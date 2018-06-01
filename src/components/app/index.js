import React from 'react';
import { Route, Link } from 'react-router-dom';
import RecipeGenerator from '../recipeGenerator';

const App = () => (
  <div>
    <header>
      <h1>What's for dinner?</h1>
    </header>

    <main>
      <Route exact path="/" component={RecipeGenerator} />
    </main>
  </div>
);

export default App;
