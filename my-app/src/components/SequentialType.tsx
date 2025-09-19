'use client';

import { useEffect, useState } from 'react';

interface SequentialTypeProps {
  className?: string;
}

const SequentialType = ({ className = "" }: SequentialTypeProps) => {
  const [step, setStep] = useState(0); // 0: typing name, 1: pause, 2: typing title
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [nameComplete, setNameComplete] = useState(false);
  const [titleComplete, setTitleComplete] = useState(false);

  // Step 1: Type "Hi, I'm Nicolas"
  useEffect(() => {
    if (step !== 0) return;

    const fullName = "Hi, I'm Nicolas";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setNameText(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setNameComplete(true);
        // Wait 800ms then start title
        setTimeout(() => {
          setStep(2);
        }, 800);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [step]);

  // Step 2: Type "Full Stack Developer & Software Engineer"
  useEffect(() => {
    if (step !== 2) return;

    const fullTitle = "Full Stack Developer & Software Engineer";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTitleComplete(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [step]);

  // Render name with color highlighting when complete
  const renderName = () => {
    if (nameComplete && nameText === "Hi, I'm Nicolas") {
      return (
        <>
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nicolas</span>
        </>
      );
    }
    return nameText;
  };

  // Render title with color highlighting when complete
  const renderTitle = () => {
    if (titleComplete && titleText === "Full Stack Developer & Software Engineer") {
      return (
        <>
          <span className="text-blue-600 dark:text-blue-400">Full Stack Developer</span>
          {" & "}
          <span className="text-purple-600 dark:text-purple-400">Software Engineer</span>
        </>
      );
    }
    return titleText;
  };

  return (
    <div className={className}>
      {/* Name Section */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
        <span>
          {renderName()}
          {step === 0 && (
            <span className="text-blue-600 dark:text-blue-400 ml-1 cursor-blink">|</span>
          )}
        </span>
      </h1>

      {/* Title Section */}
      <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8">
        <span>
          {renderTitle()}
          {step === 2 && !titleComplete && (
            <span className="text-blue-600 dark:text-blue-400 ml-1 cursor-blink">|</span>
          )}
          {titleComplete && (
            <span className="text-blue-600 dark:text-blue-400 ml-1 cursor-blink">|</span>
          )}
        </span>
      </p>
    </div>
  );
};

export default SequentialType;