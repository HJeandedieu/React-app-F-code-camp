import { useState } from "react";

export default function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [preferences, setPreferences] = useState("");
  const [guests, setGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="formContainer">
        <h1>Event Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label>Number of Attendees:</label>
        <br />
        <input
          type="number"
          min="1"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          required
        />
        <br />

        <label>Dietary Preference:</label>
        <br />
        <input
          type="text"
          placeholder="Dietary Preference (Optional)"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
        <br />

        <label>Bringing additional guests?</label>
        <input
          type="checkbox"
          checked={guests}
          onChange={(e) => setGuests(e.target.checked)}
        />
        <br />

        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div>
          <p>RSVP Submitted!</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>Dietary preferences: {preferences || "None"}</p>
          <p>Bringing additional guests: {guests ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
