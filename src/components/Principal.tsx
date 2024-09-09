import { useMemo } from "react";
import { useCryptoStore } from "../store";
import { CriptoForm } from "./cripto/CriptoForm";
import { CriptoResponse } from "./cripto/CriptoResponse";
import { Spinner } from "./Spinner";

export const Principal = () => {

  const criptoInfo = useCryptoStore((state) => state.criptoInfo);
  const loading = useCryptoStore((state) => state.loading);
  const isEmpty = useMemo(() =>Object.values(criptoInfo).every((value) => value === "") ,[criptoInfo]) ;

  return (
    <main className="max-w-lg mx-auto bg-white p-10 rounded-md shadow w-11/12 md:w-full">
      <CriptoForm />
      {
        loading && <Spinner />
      }
      {
        !isEmpty && (
          <CriptoResponse />
        )
      }
    </main>
  );
};
