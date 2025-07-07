import "./App.css";
import { useState } from "react";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

function App() {
  const [veri, setVeri] = useState(() => {
    const saved = localStorage.getItem("feedback-data");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setVeri((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setVeri({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = veri.good + veri.neutral + veri.bad;

  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((veri.good / totalFeedback) * 100)
      : 0;

  // localStorage güncellemesi
  localStorage.setItem("feedback-data", JSON.stringify(veri));

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={veri.good}
          neutral={veri.neutral}
          bad={veri.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </>
  );
}

export default App;
