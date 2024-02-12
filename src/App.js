import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageEtaples from './PageEtaples';
import PageWimereux from './PageWimereux';
import './App.css'; // Importez votre fichier CSS pour les styles personnalisés

function App() {
    // Définition des gestionnaires d'événements pour les boutons
    const handleEtaplesClick = () => {
        alert('bienvenue dans audit Etaples');
    };

    const handleWimereuxClick = () => {
        alert('Bienvenue dans audit Wimereux');
    };

    return (
        <Router>
            <div className="app-container">
                <h1 className="app-title">Application d'Audit</h1>
                <div className="container">
                    <div className="choice-box">
                        <h2>Choisissez votre destination :</h2>
                        <div className="options">
                            <button onClick={handleEtaplesClick}>Étaples</button>
                            <button onClick={handleWimereuxClick}>Wimereux</button>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/etaples" element={<PageEtaples />} />
                    <Route path="/wimereux" element={<PageWimereux />} />
                </Routes>
            </div>
        </Router>
    );
}

export  {App};


