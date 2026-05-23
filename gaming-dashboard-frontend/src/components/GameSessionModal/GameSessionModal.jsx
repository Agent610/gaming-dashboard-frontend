import { useState } from "react";

function GameSession({ onClose }) {
  const [sessionForm, setSessionForm] = useState({
    game: "",
    console: "",
    duration: "",
    notes: "",
  });

  const handleChange = (e) => {
    setSessionForm({
      ...sessionForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(sessionForm);

    alert("Session added!");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Start Game Session 🎮</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="game"
            placeholder="Game Name"
            value={sessionForm.game}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="console"
            placeholder="Console / Platform"
            value={sessionForm.console}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Session Length"
            value={sessionForm.duration}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Notes..."
            value={sessionForm.notes}
            onChange={handleChange}
          />

          <div className="modal-buttons">
            <button type="submit">Submit Session</button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GameSessionModal;
