import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageEtaples from './PageEtaples';
import PageWimereux from './PageWimereux';
import './App.css'; // Importez votre fichier CSS pour les styles personnalisés
import Auditencours_et from "./Auditencours_et";
import Nouvelaudit_et from "./Nouvelaudit_et";
import Auditarchives_et from "./Auditarchives_et";
import Auditencours_wm from "./Auditencours_wm";
import Nouvelaudit_wm from "./Nouvelaudit_wm";
import Auditarchives_wm from "./Auditarchives_wm";
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
                    <Route path="/auditencours_et" element={<Auditencours_et />} />
                    <Route path="/auditarchives_et" element={<Auditarchives_et />} />
                    <Route path="/nouvelaudit_et" element={<Nouvelaudit_et />} />
                    <Route path="/auditencours_wm" element={<Auditencours_wm />} />
                    <Route path="/auditarchives_wm" element={<Auditarchives_wm />} />
                    <Route path="/nouvelaudit_wm" element={<Nouvelaudit_wm />} />
                    <Route path="/app" element={<App />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;




