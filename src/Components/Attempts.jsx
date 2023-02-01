export default function Attempts({ state, setState }) {
  const failedItems = state.failedAttepts.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="attempts">
      {state.remainingAttempts > 0 ? (
        <p>Remaining Attempts: {state.remainingAttempts}</p>
      ) : (
        <p className="attempts_end">All Attempts over!</p>
      )}
      <div className="failed_attempts">
        {state.failedAttepts.length > 0 && <h3>Failed Attempts:</h3>}
        <ul className="failed_attempts_list">{failedItems}</ul>
      </div>
    </div>
  );
}
