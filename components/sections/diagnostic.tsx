"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { LeadForm } from "@/components/sections/lead-form";
import { DIAGNOSTIC_QUESTIONS, calculateDiagnosticProjection } from "@/lib/constants/diagnostic";

const MAX_SCORE = DIAGNOSTIC_QUESTIONS.length * 4;

export function Diagnostic() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showForm, setShowForm] = useState(false);

  const isComplete = stepIndex >= DIAGNOSTIC_QUESTIONS.length;
  const currentQuestion = DIAGNOSTIC_QUESTIONS[stepIndex];

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + value, 0),
    [answers],
  );

  const projection = useMemo(
    () => (isComplete ? calculateDiagnosticProjection(totalScore, MAX_SCORE) : 0),
    [isComplete, totalScore],
  );

  function handleAnswer(questionId: string, score: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setStepIndex((prev) => prev + 1);
  }

  function handleRestart() {
    setStepIndex(0);
    setAnswers({});
    setShowForm(false);
  }

  return (
    <section id="diagnostico" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Diagnostico interativo
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-neutral-050 sm:text-4xl">
          Descubra o potencial de crescimento da sua clinica
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-400">
          Responda 3 perguntas rapidas e veja uma projecao do seu potencial de crescimento em
          agendamentos.
        </p>
      </Reveal>

      <div className="mt-10">
        <AnimatePresence mode="wait">
          {!isComplete && currentQuestion ? (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <p
                  aria-live="polite"
                  className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-400"
                >
                  Pergunta {stepIndex + 1} de {DIAGNOSTIC_QUESTIONS.length}
                </p>
                <h3 className="text-xl font-bold text-neutral-050">
                  {currentQuestion.question}
                </h3>
                <div className="mt-6 grid gap-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleAnswer(currentQuestion.id, option.score)}
                      className="min-h-12 rounded-xl border border-white/10 bg-obsidian-800/60 px-4 py-3 text-left text-neutral-200 transition-colors hover:border-indigo-400/60 hover:text-neutral-050"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {!showForm ? (
                <Card className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                    Seu resultado
                  </p>
                  <p className="mt-4 text-5xl font-bold text-gradient">
                    {projection.toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 2,
                    })}
                    x
                  </p>
                  <p className="mt-3 text-neutral-400">
                    Potencial estimado de crescimento em agendamentos com a metodologia VYRO.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button onClick={() => setShowForm(true)}>Quero atingir esse resultado</Button>
                    <Button variant="ghost" onClick={handleRestart}>
                      Refazer diagnostico
                    </Button>
                  </div>
                </Card>
              ) : (
                <LeadForm diagnosticProjection={projection} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!isComplete ? (
          <div
            role="progressbar"
            aria-valuenow={stepIndex}
            aria-valuemin={0}
            aria-valuemax={DIAGNOSTIC_QUESTIONS.length}
            aria-label="Progresso do diagnostico"
            className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-obsidian-700"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-magenta-500 to-indigo-500 transition-[width] duration-300"
              style={{ width: `${(stepIndex / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
