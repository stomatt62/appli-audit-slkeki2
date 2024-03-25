import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './App'
function PageEtaples() {
    return (
        <div className="rectangle-container">
        <div>
            <h2>Bienvenue à Etaples</h2>
            <p>Etaples est une charmante ville côtière située dans le nord</p>
            <p>dégustez des fruits de mer frais dans ses restaurants, ou profitez tout simplement du magnifique paysage
                côtier.</p>
            <div className="audit-options">
                {/* Utilisation des composants Link pour rediriger vers les pages */}
                <Link to="/Auditencours">
                    <button className="custom-button">Audit en cours</button>
                </Link>
                <Link to="/Auditarchives">
                    <button className="custom-button">Audit archivés</button>
                </Link>
                <Link to="/Nouvelaudit">
                    <button className="custom-button">Nouvel audit</button>
                </Link>
                <Link to="/index">
                    <button className="custom-button">Accueil</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

// Export de la fonction composant PageEtaples
export default PageEtaples;
