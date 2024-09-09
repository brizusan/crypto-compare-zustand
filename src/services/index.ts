import {  CriptoInfoSchema, CriptosResponseSchema, type Search } from "../types";

export const getCryptoCurrencies = async () => {
  try {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
    const res = await fetch(url);
    if (!res.ok) throw "Error en la peticion";
    const data = await res.json();
    const respuesta = CriptosResponseSchema.safeParse(data.Data);
    if (respuesta.success) {
      return respuesta.data;
    }
  } catch (error) {
    console.log(error);
  }
};


export const getCryptoInfo = async (cripto: Search["cripto"] , moneda : Search["moneda"])  =>{
  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    const res = await fetch(url);
    if(!res.ok) throw "Error en la peticion";
    const data = await res.json();
    const respuesta = CriptoInfoSchema.safeParse(data.DISPLAY[cripto][moneda]);

    if(respuesta.success){
      return respuesta.data
    }

  } catch (error) {
    console.log(error)
  }

}
