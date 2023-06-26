import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useAsync(func, dependancies = []) {
    const { executable, ...state } = useAsyncInternal(func, dependancies, true)
    
    useEffect(() => {
        executable()
    }, [executable])
    
    return state
}

export function useAsyncFn(func, dependancies = []) {
    return useAsyncInternal(func, dependancies, false)
}

export function useAsyncInternal(
  func,
  dependancies,
  initialLoading = false
) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(undefined);
  const [value, setValue] = useState(null);

  const executable = useCallback((...params) => {
    setLoading(true);
    return func(...params)
      .then((data) => {
        setValue(data);
        setError(undefined);
        return data;
      })
      .catch((err) => {
        setValue(undefined);
        setError(err);
        return Promise.reject(err);
      })
      .finally(() => setLoading(false));
  }, dependancies);
    
    return {loading, value, error, executable}
}
