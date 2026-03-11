import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import GameBoard from '../components/game/GameBoard';

export default function GamePage({ onFinish, score }) {
    return (
        <div className="page-container game-page">
            <Header score={score} />

            {/* Плейсхолдер ігрового поля */}
            <GameBoard />

            <div className="game-controls">
                <Button onClick={onFinish} variant="secondary">
                    Завершити гру
                </Button>
            </div>
        </div>
    );
}