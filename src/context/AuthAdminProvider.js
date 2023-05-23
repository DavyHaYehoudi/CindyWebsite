import React, { createContext, useState } from "react";

// Créez un contexte pour le statut d'authentification
const AuthAdminContext = createContext();

// Créez le composant AuthProvider pour fournir le contexte d'authentification
function AuthAdminProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <AuthAdminContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthAdminContext.Provider>
  );
}

export { AuthAdminContext, AuthAdminProvider };
