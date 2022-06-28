import React from "react";

export const useGetSessionStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = React.useState(() => {
      
    });
  
    return [storedValue, setStoredValue];
  };