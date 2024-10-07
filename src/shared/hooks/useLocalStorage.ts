import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
  const storedValue = localStorage.getItem(key);

  initialValue = storedValue ? storedValue : initialValue;

  const [value, setValue] = useState<string>(initialValue);

  const updateValue = (value: string) => {
    setValue(value);
    localStorage.setItem(key, value);
  };

  const removeValue = () => {
    setValue('');
    localStorage.removeItem(key);
  };

  return {
    value,
    updateValue,
    removeValue,
  };
};
