import z from "zod";

export const SearchSchema = z.object({
  cripto: z.string().min(1, { message: "El campo cripto es requerido" }),
  moneda: z.string().min(1, { message: "El campo moneda es requerido" }),
});

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CriptoSchema = z.object({
  CoinInfo: z.object({
    Name: z.string(),
    FullName: z.string(),
  }),
});

export const CriptoInfoSchema = z.object({
  CHANGE24HOUR: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  IMAGEURL: z.string(),
  LASTUPDATE: z.string(),
});


export const CriptosResponseSchema = z.array(CriptoSchema);
export type Currency = z.infer<typeof CurrencySchema>;
export type Cripto = z.infer<typeof CriptoSchema>;
export type Search = z.infer<typeof SearchSchema>;
export type CriptoInfo = z.infer<typeof CriptoInfoSchema>;
