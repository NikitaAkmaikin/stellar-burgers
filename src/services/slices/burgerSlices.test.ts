import { expect, test, describe } from '@jest/globals';
import {
  initialState,
  burgerReducer,
  addBurger,
  removeBurger,
  handleBurgerPosition
} from './burgerSlices';

const initialIngredients = [
  {
    calories: 2674,
    carbohydrates: 300,
    fat: 800,
    id: 'testID_1',
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    name: 'Говяжий метеорит (отбивная)',
    price: 3000,
    proteins: 800,
    type: 'main',
    __v: 0,
    _id: '643d69a5c3f7b9001cfa0940'
  },
  {
    calories: 100,
    carbohydrates: 100,
    fat: 99,
    id: 'testID_2',
    image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
    name: 'Соус с шипами Антарианского плоскоходца',
    price: 88,
    proteins: 101,
    type: 'sauce',
    __v: 0,
    _id: '643d69a5c3f7b9001cfa0945'
  }
];

const newIngredient = {
  calories: 4242,
  carbohydrates: 242,
  fat: 142,
  id: 'testID_3',
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  name: 'Биокотлета из марсианской Магнолии',
  price: 424,
  proteins: 420,
  type: 'main',
  __v: 0,
  _id: '643d69a5c3f7b9001cfa0941'
};

describe('Проверяют редьюсер слайса burgerSlices', () => {

  const mockConstructorState = {
    ...initialState,
    ingredients: initialIngredients
  };

  test('обработка экшена добавления ингредиента', () => {
    const newState = burgerReducer(
      mockConstructorState,
      addBurger(newIngredient)
    );

    const { ingredients } = newState;

    expect(ingredients).toEqual([...initialIngredients, newIngredient]);
  });

  test('обработка экшена удаления ингредиента', () => {
    const newState = burgerReducer(
      mockConstructorState,
      removeBurger({index: 1})
    );

    const { ingredients } = newState;

    expect(ingredients).toEqual([initialIngredients[0]]);
  });

  test('обработка экшена изменения порядка ингредиентов в начинке', () => {
    let newState = burgerReducer(
      mockConstructorState,
      handleBurgerPosition({ index: 1, step: -1 })
    );
    const { ingredients } = newState;

    expect(ingredients).toEqual([initialIngredients[1], initialIngredients[0]]);
  });
});
