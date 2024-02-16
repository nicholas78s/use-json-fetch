import useJsonFetch from '../hooks/useJsonFetch';

export const JsonFetch = ({path}: {path: string}) => {
  const [{data, isLoading, error}] = useJsonFetch(import.meta.env.VITE_API_URL + path, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && 
        <div>
          Status: {(data && data.status) ? data.status : null}
        </div>
      }
    </>
  )
}
