import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Developer from './screen/Developer';
import Editor from './screen/Editor';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Developer /></Layout>} />
                <Route path="/editor" element={<Layout><Editor /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;