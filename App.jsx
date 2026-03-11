import { useState } from 'react';
import StartPage from './Pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import './styles/global.css';

function App() {
    // Базовий стан-плейсхолдер для перемикання сторінок
    // Можливі значення: 'start', 'game', 'result'
    const [currentPage, setCurrentPage] = useState('start');

    // Плейсхолдер для рахунку гри
    const [score, setScore] = useState(0);

    //логіка навігації
    const renderPage = () => {
        switch (currentPage) {
            case 'start':
                return <StartPage onStart={() => setCurrentPage('game')} />;
            case 'game':
                return <GamePage
                    onFinish={() => setCurrentPage('result')}
                    score={score}
                />;
            case 'result':
                return <ResultPage
                    onRestart={() => setCurrentPage('start')}
                    score={score}
                />;
            default:
                return <StartPage onStart={() => setCurrentPage('game')} />;
        }
    };

    return (
        <div className="app-container">
            {renderPage()}
        </div>
    );
}

export default App;