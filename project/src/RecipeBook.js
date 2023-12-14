import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe, removeRecipe } from './actions';

const RecipeBook = () => {
  const recipes = useSelector(state => state.recipes);
  const dispatch = useDispatch();
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeDescription, setNewRecipeDescription] = useState('');

  const handleAddRecipe = () => {
    if (newRecipeName.trim() === '' || newRecipeDescription.trim() === '') return; // Перевірка на пусті поля

    const recipe = {
      name: newRecipeName,
      description: newRecipeDescription.replace(/\n/g, '<br>') // Заміна символів нового рядка на <br>, щоб рецепти були читабельні
    };
    const updatedRecipes = [...recipes, recipe];

    dispatch({ type: 'SET_RECIPES', payload: updatedRecipes });

    localStorage.setItem('selectedRecipes', JSON.stringify(updatedRecipes));
    setNewRecipeName('');
    setNewRecipeDescription('');
  };

  const handleRemoveRecipe = (recipeIndex) => {
    const updatedRecipes = recipes.filter((recipe, index) => index !== recipeIndex);
    dispatch({ type: 'SET_RECIPES', payload: updatedRecipes });

    localStorage.setItem('selectedRecipes', JSON.stringify(updatedRecipes));
  };

  useEffect(() => {
    const selectedRecipes = localStorage.getItem('selectedRecipes');
    if (selectedRecipes) {
      const parsedRecipes = JSON.parse(selectedRecipes);
      dispatch({ type: 'SET_RECIPES', payload: parsedRecipes });
    }
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleAddRecipe();
      }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Назва страви"
            value={newRecipeName}
            onChange={(e) => setNewRecipeName(e.target.value)}
            style={{ width: '300px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            placeholder="Рецепт"
            value={newRecipeDescription}
            onChange={(e) => setNewRecipeDescription(e.target.value)}
            rows="4"
            cols="50"
            style={{ width: '600px', height:'350px' }}
          ></textarea>
        </div>
        <button type="submit">Додати</button>
      </form>

      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: recipe.description }}></p>
            <button onClick={() => handleRemoveRecipe(index)}>Видалити рецепт</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeBook;
