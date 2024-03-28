import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageEtaples from './PageEtaples';
import PageWimereux from './PageWimereux';
import './App.css'; // Importez votre fichier CSS pour les styles personnalisés
import Auditencours from "./Auditencours";
import Nouvelaudit from "./Nouvelaudit";
import Auditarchives from "./Auditarchives";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <div className="rectangle-container">
                <h1 className="app-title">Application d'Audit</h1>
                <div className="app-container">
                    <div className="choice-box">
                        <h2>Choisissez votre destination :</h2>
                        <div className="button-container">
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
                    <Route path="/auditencours" element={<Auditencours />} />
                    <Route path="/auditarchives" element={<Auditarchives />} />
                    <Route path="/nouvelaudit" element={<Nouvelaudit />} />
                    <Route path="/app" element={<App />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;




