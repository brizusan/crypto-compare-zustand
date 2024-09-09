import { useState } from "react";
import { currencies } from "../../data";
import { useCryptoStore } from "../../store";
import { Search } from "../../types";
import { Alerta } from "../Alerta";

export const CriptoForm = () => {
  const criptos = useCryptoStore((state) => state.criptos);
  const getCriptoResponse = useCryptoStore((state) => state.getCriptoResponse);
  const [search, setSearch] = useState<Search>({
    moneda: "",
    cripto: "",
  });

  const [alerta, setAlerta] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validar que ambos campos esten completos
    if (Object.values(search).includes("")) {
      setAlerta("Complete todos los campos");
      setTimeout(() => {
        setAlerta("");
      }, 1500);
      return
    }

    getCriptoResponse(search.cripto, search.moneda);

    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <legend className="text-center text-lg font-bold">
        Ingrese su Seleccion
      </legend>
      {alerta && <Alerta>{alerta}</Alerta>}
      <div className="flex flex-col gap-1">
        <label htmlFor="moneda" className="font-semibold ">
          Moneda
        </label>
        <select
          name="moneda"
          id="moneda"
          className="text-center font-semibold border border-gray-200 rounded py-1"
          onChange={handleChange}
        >
          <option value=""> --- Seleccione --- </option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cripto" className="font-semibold ">
          Cripto
        </label>
        <select
          name="cripto"
          id="cripto"
          className="text-center font-semibold border border-gray-200 rounded py-1"
          onChange={handleChange}
        >
          <option value=""> --- Seleccione --- </option>
          {criptos.map((cripto) => (
            <option key={cripto.CoinInfo.Name} value={cripto.CoinInfo.Name}>
              {cripto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input
        className="text-center w-full mt-4 bg-cyan-500 hover:bg-cyan-600 cursor-pointer transition-colors text-white uppercase font-semibold border border-gray-200 rounded py-1"
        type="submit"
        value="Buscar"
      />
    </form>
  );
};
