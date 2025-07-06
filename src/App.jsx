import { useEffect, useState } from "react";

import "./App.css";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";

function App() {
  const [veri, setVeri] = useState(() => {
    const saved = window.localStorage.getItem("feedback-veri");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateGood = () => {
    setVeri((prev) => ({
      ...prev,
      good: prev.good + 1,
    }));
  };

  const updateNeutral = () => {
    setVeri((prev) => ({
      ...prev,
      neutral: prev.neutral + 1,
    }));
  };

  const updateBad = () => {
    setVeri((prev) => ({
      ...prev,
      bad: prev.bad + 1,
    }));
  };

  const reset = () => {
    setVeri({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = veri.good + veri.neutral + veri.bad;

  const possitive =
    totalFeedback > 0 ? Math.round((veri.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    window.localStorage.setItem("feedback-veri", JSON.stringify(veri));
  }, [veri]);

  return (
    <>
      <Description />
      <Options
        good={updateGood}
        neutral={updateNeutral}
        bad={updateBad}
        reset={reset}
        total={totalFeedback}
      />
      <Feedback 
        good={veri.good}
        neutral={veri.neutral}
        bad={veri.bad}
        total={totalFeedback}
        possitive={possitive}/>
    </>
  );
}

export default App;
