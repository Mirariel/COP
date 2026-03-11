export default function Header({ score }) {
    return (
        <header className="game-header flex justify-between p-4 border-b">
            <div>Поточний статус гри</div>
            <div>Рахунок: {score}</div>
        </header>
    );
}