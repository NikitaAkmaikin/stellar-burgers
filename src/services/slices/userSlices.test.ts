import { expect, test, describe } from '@jest/globals';
import {
  initialState,
  userReducer,
  register,
  login,
  logout,
  updateUser,
  getApiUser
} from './userSlices';

describe('тесты экшенов редьюсера userSlice', () => {
  // ========================= store =========================
  const mockUser = {
    user: {
      email: 'nikita@mail.ru',
      name: 'nikita'
    }
  };

  const storeError = {
    message: 'error'
  };

  const getNewState = (action: { type: string; payload?: {} }) =>
    userReducer(initialState, action);

  // ========================= register =========================
  describe('тесты extraReducers register', () => {
    test('тест экшена начала запроса "pending"', () => {
      const pending = {
        ...initialState,
        error: null
      };

      const action = {
        type: register.pending.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(pending);
    });

    test('тест экшена начала запроса "rejected"', () => {
      const rejected = {
        ...initialState,
        error: 'error'
      };

      const action = {
        type: register.rejected.type,
        error: storeError
      };

      expect(getNewState(action)).toStrictEqual(rejected);
    });

    test('тест экшена начала запроса "fulfilled"', () => {
      const fulfilled = {
        ...initialState,
        isAuthChecked: true,
        error: null,
        user: {
          email: 'nikita@mail.ru',
          name: 'nikita'
        }
      };

      const action = {
        type: register.fulfilled.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(fulfilled);
    });
  });

  // ========================= User =========================

  describe('тесты экшенов редьюсера getApiUser', () => {
    test('тест экшена "rejected"', () => {
      const rejected = {
        ...initialState,
        isAuthChecked: false,
        error: 'error'
      };

      const action = {
        type: getApiUser.rejected.type,
        error: storeError
      };

      expect(getNewState(action)).toStrictEqual(rejected);
    });

    test('тест экшена "fulfilled"', () => {
      const fulfilled = {
        ...initialState,
        isAuthChecked: true,
        error: null,
        user: {
          email: 'nikita@mail.ru',
          name: 'nikita'
        }
      };

      const action = {
        type: getApiUser.fulfilled.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(fulfilled);
    });
  });

  // ========================= login =========================
  describe('тесты extraReducers register', () => {
    test('тест экшена начала запроса "pending"', () => {
      const pending = {
        ...initialState,
        error: null
      };

      const action = {
        type: login.pending.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(pending);
    });

    test('тест экшена начала запроса "rejected"', () => {
      const rejected = {
        ...initialState,
        error: 'error'
      };

      const action = {
        type: login.rejected.type,
        error: storeError
      };

      expect(getNewState(action)).toStrictEqual(rejected);
    });

    test('тест экшена начала запроса "fulfilled"', () => {
      const fulfilled = {
        ...initialState,
        isAuthChecked: true,
        error: null,
        user: {
          email: 'nikita@mail.ru',
          name: 'nikita'
        }
      };

      const action = {
        type: login.fulfilled.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(fulfilled);
    });
  });

  // ========================= register =========================
  describe('тесты extraReducers logout', () => {
    test('тест экшена начала запроса "fulfilled"', () => {
      const action = {
        type: logout.fulfilled.type,
        payload: undefined
      };

      expect(getNewState(action)).toStrictEqual(initialState);
    });
  });

  // ========================= updateUser =========================
  describe('тесты extraReducers updateUser', () => {
    test('тест экшена начала запроса "pending"', () => {
      const pending = {
        ...initialState,
        error: null
      };

      const action = {
        type: updateUser.pending.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(pending);
    });

    test('тест экшена начала запроса "rejected"', () => {
      const rejected = {
        ...initialState,
        error: 'error'
      };

      const action = {
        type: updateUser.rejected.type,
        error: storeError
      };

      expect(getNewState(action)).toStrictEqual(rejected);
    });

    test('тест экшена начала запроса "fulfilled"', () => {
      const fulfilled = {
        ...initialState,
        isAuthChecked: true,
        error: null,
        user: {
          email: 'nikita@mail.ru',
          name: 'nikita'
        }
      };

      const action = {
        type: updateUser.fulfilled.type,
        payload: mockUser
      };

      expect(getNewState(action)).toStrictEqual(fulfilled);
    });
  });
});
