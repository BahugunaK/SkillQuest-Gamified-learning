function XPBar({ xp, level }) {
  const currentXp = xp % 100
  const progress = (currentXp / 100) * 100

  return (
    <div style={{ marginBottom: "20px" }}>
      <p>Level {level}</p>
      <p>Total xp:{xp}</p>

      <div
        style={{
          width: "100%",
          height: "14px",
          background: "#ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#4caf50",
            transition: "width 0.4s ease",
          }}
        />
      </div>

      <p>{currentXp} / 100 XP</p>
    </div>
  )
}

export default XPBar

