import React, { createContext, useState } from "react";

// Contexte pour la sélection de la consultation
const ConsultationSelectContext = createContext();

// Composant ConsultationSelectProvider pour fournir le contexte de sélection
function ConsultationSelectProvider({ children }) {
  const [consultationId, setConsultationId] = useState("0");
  return (
    <ConsultationSelectContext.Provider value={{ consultationId, setConsultationId }}>
      {children}
    </ConsultationSelectContext.Provider>
  );
}

export { ConsultationSelectContext, ConsultationSelectProvider };
