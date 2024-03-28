import { FC } from 'react';
import { useSelector } from '../../services/store';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { getIngredients } from '../../services/slices/ingredientsSlices';

export const IngredientDetails: FC = () => {
  const params = useParams();
  const ingredients = useSelector(getIngredients);
  const ingredientData = ingredients.find((ing) => ing._id === params.id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
