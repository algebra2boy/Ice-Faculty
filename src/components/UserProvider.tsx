import { useState, createContext, ReactNode } from "react";

// Define the type for the context value
type UserContextType = {
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({ userEmail: "", setUserEmail: () => {} });

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userEmail, setUserEmail] = useState("");
  
  const contextValue: UserContextType = {
    userEmail,
    setUserEmail,
  };
  
  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
