import QuestCard from "../components/QuestCard";
import { useState, useEffect } from "react";
import XPBar from "../components/XpBar";

const quests = [
  { id: 1, title: "Read 10 pages", xp: 20 },
  { id: 2, title: "Practice piano for 15 minutes", xp: 30 },
  { id: 3, title: "Complete 1 React tutorial", xp: 50 },
  { id: 4, title: "Workout for 20 minutes", xp: 40 },
  { id: 5, title: "Write 200 words in journal", xp: 25 },
  { id: 6, title: "Solve 2 DSA problems", xp: 60 },
  { id: 7, title: "Meditate for 10 minutes", xp: 15 },
  { id: 8, title: "Watch 1 psychology lecture", xp: 35 },
  { id: 9, title: "Build a small React component", xp: 70 },
  { id: 10, title: "No Reels/Shorts for today", xp: 45 },
];

function Dashboard() {
  const [xp, setXp] = useState(() => {
    const savedXp = localStorage.getItem("xp");
    return savedXp ? Number(savedXp) : 0;
  });
  
  const [completedQuests, setCompletedQuests] = useState(() => {
    const saved = localStorage.getItem("completedQuests");
    return saved ? JSON.parse(saved) : [];
  });

  const [streak, setStreak] = useState(() => {
  const saved = localStorage.getItem("streak")
  return saved ? Number(saved) : 0
})

  const level = Math.floor(xp / 100);
  useEffect(() => {
    localStorage.setItem("xp", xp);
    localStorage.setItem("completedQuests", JSON.stringify(completedQuests));
  }, [xp, completedQuests]);
  const completeQuest = (id, questXp) => {
    if (completedQuests.includes(id)) return;

    setXp((prevXp) => prevXp + questXp);
    setCompletedQuests((prev) => [...prev, id]);
  };

  return (
    <>
      <XPBar xp={xp} level={level} />
      <button
        onClick={() => {
          setXp(0);
          setCompletedQuests([]);
          localStorage.clear();
        }}
      >
        Reset Progress
      </button>

      <h2>Your Quests</h2>

      {quests.map((q) => (
        <QuestCard
          key={q.id}
          id={q.id}
          title={q.title}
          xp={q.xp}
          onComplete={completeQuest}
          completed={completedQuests.includes(q.id)}
        />
      ))}
    </>
  );
}

export default Dashboard;
