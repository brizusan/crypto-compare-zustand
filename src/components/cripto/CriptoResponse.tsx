import { useCryptoStore } from "../../store";

export const CriptoResponse = () => {
  const criptoInfo = useCryptoStore((state) => state.criptoInfo);
  const image = `https://www.cryptocompare.com${criptoInfo.IMAGEURL}`;

  return (
    <section className="mt-10">
      <h2 className="text-2xl text-center font-bold text-slate-700">
        Cotizacion
      </h2>
      <div className="flex items-center gap-8 mt-4">
       <img src={image} alt="imagen de cripto" className="w-36 h-36" />
        <div className="flex-1 space-y-1">
          <p className="font-semibold text-slate-700">
            El precio es de :{" "}<span className="font-bold">{criptoInfo.PRICE}</span>
          </p>
          <p className="font-semibold text-slate-700">
            Precio alto del dia : <span className="font-bold">{criptoInfo.HIGHDAY}</span>
          </p>
          <p className="font-semibold text-slate-700">
            Precio bajo del dia : <span className="font-bold">{criptoInfo.LOWDAY}</span>
          </p>
          <p className="font-semibold text-slate-700">
            Cambios 24H : <span className="font-bold">{criptoInfo.CHANGE24HOUR}</span>
          </p>
    
          <p className="font-semibold text-slate-700">
            Ultima actualizacion : <span className="font-bold">{criptoInfo.LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
