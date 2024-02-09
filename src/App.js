import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageEtaples from './PageEtaples';
import PageWimereux from './PageWimereux';

function MyButton() {
    return (
        <div>
            {/* Utilisez le composant Link pour rediriger vers la page correspondante */}
            <Link to="/etaples">
                <button>Page Etaples</button>
            </Link>
            <Link to="/wimereux">
                <button>Page Wimereux</button>
            </Link>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <h1>Application d'Audit</h1>
                <MyButton />
                <Routes>
                    <Route path="/etaples" element={<PageEtaples />} />
                    <Route path="/wimereux" element={<PageWimereux />} />
                </Routes>
            </div>
        </Router>
    );
}

export { App, MyButton };


