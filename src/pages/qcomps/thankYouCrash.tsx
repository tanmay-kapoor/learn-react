import { useState } from "react";

export default function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <>
      <h1>{isSent && "Thank you!"}</h1>
      {!isSent && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
          }}
        >
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
}
