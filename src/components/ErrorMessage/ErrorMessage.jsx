import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <h2>Oops!</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;