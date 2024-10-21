import { useState } from 'react';

type Options = {
  minLengthValue?: number,
  maxLengthValue?: number,
};

export const useInput = (initialValue: string, options?: Options) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const clear = () => setValue('');

  const onBlurValidation = () => {
    const minLengthValue = options?.minLengthValue || 0;
    const maxLengthValue = options?.maxLengthValue || 0;

    if (!value) {
      setError('The field should not be empty');
    } else if (minLengthValue && value.length < minLengthValue) {
      setError(`The field must contain at least ${minLengthValue} characters`);
    } else if (maxLengthValue && value.length > maxLengthValue) {
      setError(`The field must contain no more than ${maxLengthValue} characters`);
    } else {
      setError('');
    }
  };

  return {
    value,
    onChange,
    clear,
    onBlurValidation,
    error,
  };
};
