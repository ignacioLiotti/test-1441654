import  { useState, useEffect } from "react";

export const useSessionStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const value = window.sessionStorage.getItem(keyName);
  
        if (value) {
          return JSON.parse(value);
        } else {
          window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
          return  ;
        }
      } catch (err) {
        return defaultValue;
      }
    });
  
    const setValue = newValue => {
      try {
        window.sessionStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {}
      setStoredValue(newValue);
    };
  
    return [storedValue, setValue];
  };