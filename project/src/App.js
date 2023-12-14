import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import recipeBookReducer from './reducers';
import RecipeBook from './RecipeBook';

const store = createStore(recipeBookReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Рецепти :)</h1>
        <RecipeBook />
      </div>
    </Provider>
  );
};

export default App;
