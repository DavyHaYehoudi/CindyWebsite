import React, { createContext, useState } from "react";

// Contexte pour le statut d'authentification
const AuthAdminContext = createContext();

// Composant AuthProvider pour fournir le contexte d'authentification
function AuthAdminProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <AuthAdminContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthAdminContext.Provider>
  );
}

export { AuthAdminContext, AuthAdminProvider };
