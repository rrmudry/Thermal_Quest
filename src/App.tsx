/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Wind, 
  Sun, 
  Trophy, 
  Timer, 
  Zap, 
  RotateCcw, 
  Play, 
  CheckCircle2, 
  XCircle,
  ChevronRight,
  Info
} from 'lucide-react';
import { SCENARIOS, HeatTransferType, Scenario } from './constants';

const BASE_POINTS = 100;
const TIME_LIMIT = 10; // seconds per question

export default function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string; bonus?: number } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('thermal-quest-highscore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const currentScenario = SCENARIOS[currentScenarioIndex];

  const startGame = () => {
    setGameState('playing');
    setCurrentScenarioIndex(0);
    setScore(0);
    setTimeLeft(TIME_LIMIT);
    setFeedback(null);
    setShowExplanation(false);
  };

  const handleAnswer = (selectedType: HeatTransferType) => {
    if (feedback) return;

    const isCorrect = selectedType === currentScenario.type;
    let bonus = 0;

    if (isCorrect) {
      bonus = Math.round((timeLeft / TIME_LIMIT) * 50);
      const totalPoints = BASE_POINTS + bonus;
      setScore(prev => prev + totalPoints);
      setFeedback({
        isCorrect: true,
        message: 'Brilliant!',
        bonus
      });
    } else {
      setFeedback({
        isCorrect: false,
        message: 'Not quite...'
      });
    }
    setShowExplanation(true);
  };

  const nextQuestion = useCallback(() => {
    if (currentScenarioIndex < SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setTimeLeft(TIME_LIMIT);
      setFeedback(null);
      setShowExplanation(false);
    } else {
      setGameState('end');
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('thermal-quest-highscore', score.toString());
      }
    }
  }, [currentScenarioIndex, score, highScore]);

  useEffect(() => {
    let timer: number;
    if (gameState === 'playing' && !feedback && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !feedback) {
      setFeedback({
        isCorrect: false,
        message: "Time's up!"
      });
      setShowExplanation(true);
    }

    return () => clearInterval(timer);
  }, [gameState, feedback, timeLeft]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500 rounded-lg shadow-lg shadow-orange-500/20">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase italic">Thermal Quest</h1>
          </div>
          
          {gameState === 'playing' && (
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Score</span>
                <span className="text-2xl font-mono font-bold text-emerald-400">{score.toLocaleString()}</span>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Progress</span>
                <span className="text-xl font-mono font-bold">{currentScenarioIndex + 1}/{SCENARIOS.length}</span>
              </div>
            </div>
          )}
        </header>

        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-8 relative"
              >
                <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />
                <Flame className="w-32 h-32 text-orange-500 relative z-10" />
              </motion.div>
              <h2 className="text-6xl font-black mb-4 tracking-tighter uppercase leading-none">
                Master the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-emerald-400">Heat Transfer</span>
              </h2>
              <p className="text-zinc-400 max-w-md mb-12 text-lg">
                Identify conduction, convection, and radiation in real-world scenarios. 
                Be fast, be accurate, and claim your high score.
              </p>
              <button 
                onClick={startGame}
                className="group relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all duration-300 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  Start Quest <Play className="w-5 h-5 fill-current" />
                </span>
              </button>
              {highScore > 0 && (
                <div className="mt-8 flex items-center gap-2 text-zinc-500">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase tracking-widest">High Score: {highScore.toLocaleString()}</span>
                </div>
              )}
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              {/* Timer Bar */}
              <div className="w-full h-1 bg-zinc-800 rounded-full mb-12 overflow-hidden">
                <motion.div 
                  className={`h-full ${timeLeft < 3 ? 'bg-red-500' : 'bg-emerald-500'}`}
                  initial={{ width: '100%' }}
                  animate={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
                  transition={{ duration: 1, ease: "linear" }}
                />
              </div>

              {/* Scenario Card */}
              <div className="relative mb-12">
                <motion.div
                  key={currentScenarioIndex}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-3xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
                  <span className="text-zinc-500 font-mono text-sm mb-4 block uppercase tracking-widest">Scenario #{currentScenario.id}</span>
                  <h3 className="text-3xl font-medium leading-tight">
                    "{currentScenario.text}"
                  </h3>
                </motion.div>

                {/* Feedback Overlay */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                    >
                      <div className={`px-8 py-4 rounded-2xl shadow-2xl flex flex-col items-center gap-2 ${
                        feedback.isCorrect ? 'bg-emerald-500 text-black' : 'bg-red-500 text-white'
                      }`}>
                        <div className="flex items-center gap-3">
                          {feedback.isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                          <span className="text-3xl font-black uppercase italic">{feedback.message}</span>
                        </div>
                        {feedback.bonus ? (
                          <motion.span 
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-sm font-bold uppercase tracking-widest flex items-center gap-1"
                          >
                            <Zap className="w-3 h-3 fill-current" /> Speed Bonus: +{feedback.bonus}
                          </motion.span>
                        ) : null}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { type: HeatTransferType.CONDUCTION, icon: Zap, color: 'hover:border-orange-500 hover:bg-orange-500/10', active: 'border-orange-500 bg-orange-500/10' },
                  { type: HeatTransferType.CONVECTION, icon: Wind, color: 'hover:border-blue-500 hover:bg-blue-500/10', active: 'border-blue-500 bg-blue-500/10' },
                  { type: HeatTransferType.RADIATION, icon: Sun, color: 'hover:border-yellow-500 hover:bg-yellow-500/10', active: 'border-yellow-500 bg-yellow-500/10' },
                ].map((opt) => (
                  <button
                    key={opt.type}
                    disabled={!!feedback}
                    onClick={() => handleAnswer(opt.type)}
                    className={`group p-6 border-2 rounded-2xl transition-all duration-300 flex flex-col items-center gap-4 ${
                      feedback 
                        ? opt.type === currentScenario.type 
                          ? 'border-emerald-500 bg-emerald-500/10' 
                          : 'border-zinc-800 opacity-50'
                        : `border-zinc-800 ${opt.color}`
                    }`}
                  >
                    <opt.icon className={`w-8 h-8 transition-transform duration-300 group-hover:scale-110 ${
                      feedback && opt.type === currentScenario.type ? 'text-emerald-400' : 'text-zinc-400 group-hover:text-white'
                    }`} />
                    <span className="font-bold uppercase tracking-widest text-sm">{opt.type}</span>
                  </button>
                ))}
              </div>

              {/* Explanation & Next */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-auto"
                  >
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-start gap-4 mb-6">
                      <div className="p-2 bg-zinc-800 rounded-lg shrink-0">
                        <Info className="w-5 h-5 text-zinc-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">Why?</h4>
                        <p className="text-zinc-300 leading-relaxed">{currentScenario.explanation}</p>
                      </div>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                    >
                      {currentScenarioIndex === SCENARIOS.length - 1 ? 'Finish Quest' : 'Next Scenario'}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {gameState === 'end' && (
            <motion.div 
              key="end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="mb-8 p-6 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Trophy className="w-24 h-24 text-emerald-400" />
              </div>
              <h2 className="text-5xl font-black mb-2 tracking-tighter uppercase">Quest Complete!</h2>
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-12">Final Score</p>
              
              <div className="text-8xl font-mono font-black text-white mb-12 tabular-nums">
                {score.toLocaleString()}
              </div>

              <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-12">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-1">Accuracy</span>
                  <span className="text-2xl font-mono font-bold">100%</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-1">High Score</span>
                  <span className="text-2xl font-mono font-bold">{highScore.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button 
                  onClick={startGame}
                  className="flex-1 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3"
                >
                  Play Again <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-6 left-0 w-full px-6 flex justify-between items-center pointer-events-none opacity-30">
        <div className="text-[10px] font-mono uppercase tracking-[0.5em]">Thermal Quest v1.0</div>
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full" />
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        </div>
      </footer>
    </div>
  );
}
