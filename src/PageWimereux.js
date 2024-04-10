import React from 'react';
import {Link} from "react-router-dom";
import './App.css';
import './App'

// Définition de la fonction composant PageEtaples
function PageWimereux() {
    return (
        <div>
            <h2>Bienvenue à Wimereux</h2>
            <p>wimereux est une charmante ville côtière située dans le nord de la France.</p>
            <p>Explorez ses rues historiques, dégustez des fruits de mer</p>
            <div className="audit-options">
                {/* Utilisation des composants Link pour rediriger vers les pages */}
                <Link to="/Auditencours_wm">
                    <button className="custom-button">Audit en cours</button>
                </Link>
                <Link to="/Auditarchives_wm">
                    <button className="custom-button">Audit archivés</button>
                </Link>
                <Link to="/Nouvelaudit_wm">
                    <button className="custom-button">Nouvel audit</button>
                </Link>
                <Link to="/index">
                    <button className="custom-button">Accueil</button>
                </Link>
            </div>
        </div>
    );
}

// Export de la fonction composant PageWimereux
export default PageWimereux;
