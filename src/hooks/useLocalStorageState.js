import { useState, useEffect } from 'react';

//custom Hook
export const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = useState(() => {
    //lazy initialName
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
