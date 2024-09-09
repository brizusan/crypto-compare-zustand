import { PropsWithChildren } from "react";

export const Alerta = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-red-200 text-red-600 text-center p-1 uppercase font-bold rounded">
      {children}
    </div>
  );
};
