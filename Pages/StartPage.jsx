import Button from '../components/ui/Button';

export default function StartPage({ onStart }) {
    return (
        <div className="page-container start-page">
            <h1>Назва супер гри</h1>
            <p>Правила гри: збери якомога більше балів...</p>

            {/* Використовуємо наш універсальний компонент */}
            <Button onClick={onStart} variant="primary">
                Почати гру
            </Button>
        </div>
    );
}