import { createContext } from "react";

export type ContextProductCountType = {
  contextProductCount: number;
  setContextProductCount: (contextProductCount: number) => any;
};

export const ContextProductCount = createContext<ContextProductCountType>({
  contextProductCount: 0,
  setContextProductCount: () => {
    ("");
  },
});
