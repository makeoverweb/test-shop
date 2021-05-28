import "./styles.css";

const Error: any = () => {
  const errorHandler = () => {
    window.location.reload();
    window.location.href = "/";
  };
  return (
    <div className="error">
      <p>Нужен новый костыль!</p>
      <button onClick={errorHandler}>Назад</button>
    </div>
  );
};

export { Error };
