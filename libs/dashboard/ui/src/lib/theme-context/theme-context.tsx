import { ReactNode, createContext } from 'react';
import { defaultTheme } from '../themes/default';

type Mode = string | null;


interface Theme {
  [key: string]:Theme | string;
}

interface ThemeContextInterface {
  theme: Theme;
  mode?: Mode;
  toggleMode?: boolean;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
});

interface ThemeProviderProps {
  children: ReactNode;
  value: ThemeContextInterface;
}

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
