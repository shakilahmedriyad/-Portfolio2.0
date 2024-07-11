"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type ActiveContextProviderType = {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

export const ActiveContextProvider =
  createContext<ActiveContextProviderType | null>(null);

export default function ActiveStatusContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActive, setActive] = useState("Home");
  return (
    <ActiveContextProvider.Provider
      value={{
        active: isActive,
        setActive: setActive,
      }}
    >
      {children}
    </ActiveContextProvider.Provider>
  );
}
