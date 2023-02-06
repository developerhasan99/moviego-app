export default function Attempts({ remainingAttempts, failedAttepts }) {
  const failedItems = failedAttepts.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="attempts">
      {remainingAttempts > 0 ? (
        <p>Remaining Attempts: {remainingAttempts}</p>
      ) : (
        <p className="attempts_end">Your attempts is over!</p>
      )}
      <div className="failed_attempts">
        {failedAttepts.length > 0 && <h3>Failed Attempts:</h3>}
        <ul className="failed_attempts_list">{failedItems}</ul>
      </div>
    </div>
  );
}
