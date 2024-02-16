import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url: string, initialData: any) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  //const timestampRef = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch((err) => { 
        let msg = 'Unknown error';
        if (err instanceof Error) msg = err.message;
        setError(msg);
      })
      .finally(() => {
        setLoading(false);
      }); 

      //return () => void; clear function
  }, []); // нет deps: [], значит не будет перезапускаться
  return [{data, isLoading, error}];
}