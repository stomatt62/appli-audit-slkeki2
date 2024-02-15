import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageEtaples from './PageEtaples';
import PageWimereux from './PageWimereux';
import './App.css'; // Importez votre fichier CSS pour les styles personnalisés
//import logoSophie from './src/sophie-lebreuilly-logo.jpg'; // Importez votre image

function App() {
    return (
        <Router>
            <div className="rectangle-container">
                <h1 className="app-title">Application d'Audit</h1>
                <div className="app-container">
                    <div className="choice-box">
                        <h2>Choisissez votre destination :</h2>
                        <div className="options">
                            {/* Utilisation des composants Link pour rediriger vers les pages */}
                            <Link to="/etaples">
                                <button className="custom-button">Étaples</button>
                            </Link>
                            <Link to="/wimereux">
                                <button className="custom-button">Wimereux</button>
                            </Link>
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

export default App;



