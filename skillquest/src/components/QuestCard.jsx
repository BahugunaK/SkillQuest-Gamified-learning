// function QuestCard({ id, title, xp, onComplete, completed }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{xp} XP</p>

//       <button
//         onClick={() => onComplete(id, xp)}
//         disabled={completed}
//       >
//         {completed ? "Completed ✅" : "Complete"}
//       </button>
//     </div>
//   )
// }

// export default QuestCard

function QuestCard({ id, title, xp, onComplete, completed }) {
  return (
    <div
      style={{
        opacity: completed ? 0.8 : 1,
        background: completed ? "#f5f5f5" : "#fff",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{xp} XP</p>

      <button
        onClick={() => onComplete(id, xp)}
        disabled={completed}
        style={{
          cursor: completed ? "not-allowed" : "pointer",
        }}
      >
        {completed ? "Completed ✅" : "Complete"}
      </button>
    </div>
  )
}

export default QuestCard

