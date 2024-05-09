describe('проверяем функциональность приложения', () => {
  it('сервис должен быть доступен по адресу localhost:4000', function () {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.viewport(1440, 1000);
    cy.visit('/');
  });

  describe('Тестирование работы модальных окон', () => {
    beforeEach(() => {
      const ingredient = cy.contains('Биокотлета из марсианской Магнолии');
      ingredient.click();
    });

    it('модальное окно ингредиента открывается', () => {
      cy.contains('Детали ингридиента').should('exist');

      cy.get('li').children('p').contains('Калории, ккал').next('p').contains('4242');
      cy.get('li').children('p').contains('Белки, г').next('p').contains('420');
      cy.get('li').children('p').contains('Жиры, г').next('p').contains('142');
      cy.get('li').children('p').contains('Углеводы, г').next('p').contains('242');
    });

    it('модальное окно ингредиента закрывается по клику на крестик', () => {
      const closeButton = cy.get(`[data-cy="Детали ингридиента"]`);
      closeButton.click();

      cy.contains('Детали ингридиента').should('not.exist');
    });

    it('модальное окно ингредиента закрывается по клику на оверлей', () => {
      cy.contains('Детали ингридиента').should('exist');

      cy.get('body').type('{esc}');

      cy.contains('Детали ингридиента').should('not.exist');
      
    });
  });








});
