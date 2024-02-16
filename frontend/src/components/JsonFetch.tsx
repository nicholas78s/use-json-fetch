import useJsonFetch from '../hooks/useJsonFetch';

export const JsonFetch = ({path}: {path: string}) => {
  const [{data, isLoading, error}] = useJsonFetch(import.meta.env.VITE_API_URL + path, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {/* loading: {isLoading}
      error: {error} */}
      {!isLoading && 
        <div>
          {/* {data.map(obj => <li key={obj.id}></li>)} */}
          {/* {JSON.stringify(data)} */}
          Status: {(data && data.status) ? data.status : ''}
        </div>
      }
    </>
  )
}
