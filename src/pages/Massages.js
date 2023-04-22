import React from 'react';
import Bandeau from '../components/Bandeau';

const Massages = () => {
    return (
        <div>
            <Bandeau title="LES MASSAGES" accroche="Apaisez les tensions pour libérer votre esprit" />
            <div className='remarques'>Les séances de massages commencent toutes par un échange de quelques minutes sur vos attentes ainsi que vos éventuelles sensibilités (ex: cervicales sensibles, peau réactive, etc).Je vous conseille de prévoir 15 minutes supplémentaires pour revenir en douceur de cet instant bien-être.Une infusion vous est proposée à la fin de la séance et si vous le souhaitez, quelques conseils naturo personnalisés peuvent vous être suggérés.</div>
        </div>
    );
};

export default Massages;