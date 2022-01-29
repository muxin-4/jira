import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  // Object.assign({}, object)
  console.log("aaa1", object);
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });

  console.log("aaa2", result);
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const debounce = (func: () => void, delay: number) => {
  console.log("debounce1");
  let timeout: ReturnType<typeof setTimeout>;

  return () => {
    console.log("debounce2");
    if (timeout) {
      console.log("debounce3");
      clearTimeout(timeout);
    }
    console.log("debounce4");
    timeout = setTimeout(function () {
      console.log("debounce5");
      func();
    }, delay);
  };
};

export const useDebounce = (value: unknown, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在value变化后，设置一个定时器
    const timeout = setTimeout(() => {
      return setDebouncedValue(value);
    }, delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
