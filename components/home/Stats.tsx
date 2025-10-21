"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaHandsHelping,
  FaGlobeAmericas,
} from "react-icons/fa";

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: "workshops",
    icon: <FaGraduationCap className="w-10 h-10" />,
    value: "7+",
    label: "Workshops Conducted",
    description: "Across Bangladesh, UK, and USA",
  },
  {
    id: "reach",
    icon: <FaUsers className="w-10 h-10" />,
    value: "1000+",
    label: "Students Reached",
    description: "Through awareness programs",
  },
  {
    id: "kits",
    icon: <FaHandsHelping className="w-10 h-10" />,
    value: "50+",
    label: "Hygiene Kits Distributed",
    description: "Supporting marginalized communities",
  },
  {
    id: "countries",
    icon: <FaGlobeAmericas className="w-10 h-10" />,
    value: "5",
    label: "Countries",
    description: "Global team presence",
  },
];

// simple easing function (easeOutCubic)
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function formatNumber(n: number) {
  return new Intl.NumberFormat().format(Math.round(n));
}

function useCountUp(target: number, startWhen: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;
    let start: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      setValue(target * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, startWhen, duration]);

  return value;
}

function CountUp({
  valueStr,
  inView,
  duration = 1400,
}: {
  valueStr: string;
  inView: boolean;
  duration?: number;
}) {
  // parse numeric part and suffix
  const num = parseInt(valueStr.replace(/[^0-9]/g, "")) || 0;
  const suffix = /\+$/.test(valueStr) ? "+" : "";

  const current = useCountUp(num, inView, duration);

  return (
    <div aria-live="polite" aria-atomic="true">
      <span className="text-5xl font-bold mb-2">
        {formatNumber(current)}
        {suffix}
      </span>
    </div>
  );
}

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as any;

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
    },
  } as any;

  return (
    <section className="w-full py-16  bg-white mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4"
          >
            Our Impact in <br /> Numbers
          </motion.h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              className="h-px w-68 bg-gray-200 origin-center"
              style={{ transformOrigin: "center" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={dividerVariants}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto"
          >
            Every number represents real change, real conversations, and real
            lives impacted through education and community support.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} variants={itemVariants} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm italic">
            *Impact data as of 2024. Our work continues to grow with each
            program and partnership.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, variants }: { stat: Stat; variants: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        className="bg-gradient-to-br from-[#BC4749] to-[#8B3538] rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col items-center text-center text-white">
          <motion.div
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            aria-hidden
          >
            {stat.icon}
          </motion.div>

          {/* Animated number */}
          <div className="mb-2">
            <CountUp valueStr={stat.value} inView={inView} />
          </div>

          <p className="text-lg font-semibold mb-2 text-white">{stat.label}</p>
          <p className="text-sm text-white/80">{stat.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
