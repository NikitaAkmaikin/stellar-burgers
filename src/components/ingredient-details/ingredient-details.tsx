import { FC } from 'react';
import { useSelector } from '../../services/store';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useLocation } from 'react-router-dom';
import { Preloader } from '../ui/preloader';

export const IngredientDetails: FC = () => {
  const location = useLocation();
  const id = location.pathname.replace('/ingredients/', '');
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredientData = ingredients.find((ing) => ing._id === id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
