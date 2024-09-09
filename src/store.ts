import { create } from "zustand";
import type { Search, Cripto, CriptoInfo } from "./types";
import { getCryptoCurrencies, getCryptoInfo } from "./services";

type CriptoCompareState = {
  criptos: Cripto[];
  getCriptos: () => Promise<void>;
  getCriptoResponse: (
    cripto: Search["cripto"],
    moneda: Search["moneda"]
  ) => void;
  criptoInfo: CriptoInfo;
  loading: boolean;
};

const initialState = {
  CHANGE24HOUR: "",
  PRICE: "",
  HIGHDAY: "",
  LOWDAY: "",
  IMAGEURL: "",
  LASTUPDATE: "",
};

export const useCryptoStore = create<CriptoCompareState>((set) => ({
  criptos: [],
  criptoInfo: initialState,
  loading: false,

  getCriptos: async () => {
    const criptos = await getCryptoCurrencies();
    set({ criptos });
  },
  getCriptoResponse: async (cripto, moneda) => {
    try {
      set({ loading: true });
      set({ criptoInfo: initialState });
      const data = await getCryptoInfo(cripto, moneda);
      set({ criptoInfo: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
