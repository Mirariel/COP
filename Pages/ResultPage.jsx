import Button from '../components/ui/Button';

export default function ResultPage({ onRestart, score }) {
    return (
        <div className="page-container result-page">
            <h2>Гру завершено!</h2>
            <p>Твій результат: <strong>{score}</strong> балів</p>

            <Button onClick={onRestart} variant="primary">
                Грати знову
            </Button>
        </div>
    );
}