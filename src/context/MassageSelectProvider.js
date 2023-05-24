import React, { createContext, useState } from "react";

// Contexte pour la sélection du massage
const MassageSelectContext = createContext();

// Composant MassageSelectProvider pour fournir le contexte de sélection
function MassageSelectProvider({ children }) {
  const [massageId, setMassageId] = useState(0);
  return (
    <MassageSelectContext.Provider value={{ massageId, setMassageId }}>
      {children}
    </MassageSelectContext.Provider>
  );
}

export { MassageSelectContext, MassageSelectProvider };
