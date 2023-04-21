import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    //clearup function
    return () => clearTimeout(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}

export default useDebounce;

/*
   Mỗi khi value trong deps thay đổi thì clearup function được gọi, nên sẽ clear Timeout trước đó đi (hủy những lần trước đi)
   Vì vậy cho tới khi người dùng ngừng gõ 500ms API mới được gọi
*/
