import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>

      <p>Loading Projects...</p>
    </div>
  );
}

export default LoadingSpinner;