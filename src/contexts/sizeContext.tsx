import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface SizeContextProps {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

const SizeContext = createContext<SizeContextProps | undefined>(undefined);

interface SizeProviderProps {
  children: ReactNode;
}

export const SizeProvider: FunctionComponent<SizeProviderProps> = ({
  children,
}) => {
  const [size, setSize] = useState<number>(40);

  return (
    <SizeContext.Provider value={{ size, setSize }}>
      {children}
    </SizeContext.Provider>
  );
};

export function useSize(): SizeContextProps {
  const context = useContext(SizeContext);
  if (!context) {
    throw new Error("useSize must be used within a SizeProvider");
  }
  return context;
}
