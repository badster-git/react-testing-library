import { useEffect, useState } from "react";

interface useFetchProps {
  url: string;
}

interface IFetchData {
  data: string | null;
  loading: boolean;
}

export const useFetch = ({ url }: useFetchProps) => {
  const [state, setState] = useState<IFetchData>({
    data: null,
    loading: true,
  });

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => setState({ data: y, loading: false }))
      .catch((err: Error) => console.log(err));
  }, [url]);

  return state;
};
