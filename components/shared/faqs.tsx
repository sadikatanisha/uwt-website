"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      id: "values",
      q: "What are UWT’s values and mission?",
      a: (
        <div className="space-y-3">
          <p>
            UWT is guided by three core pillars: <strong>Educate</strong>,{" "}
            <strong>Eradicate</strong>, and <strong>Empower</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Educate:</strong> We spread awareness and knowledge on
              gender equity, sexual and reproductive health and rights (SRHR),
              and mental health.
            </li>
            <li>
              <strong>Eradicate:</strong> We work to dismantle gender-based
              violence (GBV), rape culture, and the harmful stigmas that hold
              communities back.
            </li>
            <li>
              <strong>Empower:</strong> We aim to provide safe spaces, uplift
              marginalized voices, and support survivors and minority
              communities.
            </li>
          </ul>
        </div>
      ),
      search:
        "what are uwt’s values and mission educate eradicate empower spread awareness knowledge gender equity sexual and reproductive health rights srhr mental health dismantle gender-based violence rape culture stigmas safe spaces uplift marginalized voices support survivors",
    },
    {
      id: "who",
      q: "Is UWT only for women?",
      a: (
        <p>
          No. We welcome all members who are passionate about our mission and
          values irrespective of their gender and sex.
        </p>
      ),
      search:
        "is uwt only for women no welcome all members irrespective of gender sex",
    },
    {
      id: "join",
      q: "How can I become a member of UWT?",
      a: (
        <div className="space-y-2">
          <p>
            UWT recruits members in two cohorts every year. When recruitment is
            launched, you’ll need to:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Fill out the online application form.</li>
            <li>Attend an interview if your application is shortlisted.</li>
            <li>Join the team if you’re selected after the interview.</li>
          </ol>
          <p className="text-sm text-muted-foreground">
            For detailed updates on recruitment cycles, forms, and deadlines,
            please keep an eye on our official social media channels.
          </p>
        </div>
      ),
      search:
        "how can i become a member of uwt recruits two cohorts fill out online application attend interview join team updates social media",
    },
    {
      id: "departments",
      q: "What are the different departments within UWT?",
      a: (
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
            <li> Graphics and Illustration</li>
            <li> Human Resources</li>
            <li> Logistics</li>
            <li> Research and Content Writing</li>
            <li> Social Media Management</li>
            <li> Strategy and Event Planning</li>
          </ul>
        </div>
      ),
      search:
        "graphics illustration human resources logistics research content writing social media management strategy event planning",
    },
    {
      id: "projects",
      q: "What are some of the main projects by UWT that I can volunteer in?",
      a: (
        <div className="space-y-3">
          <p>
            Here are some recurring projects and initiatives you can join or
            volunteer with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>UWT PEP (Personal Enhancement Program):</strong>{" "}
              Educational workshops in collaboration with schools and
              organisations. So far, workshops have reached schools in
              Bangladesh, New York, and London.
            </li>
            <li>
              <strong>UWT Mental Health:</strong> Various initiatives to promote
              mental health and well-being.
            </li>
            <li>
              <strong>UWT GBV (Gender-Based Violence):</strong> Awareness
              programs, fundraising campaigns, and field work aimed at
              dismantling gender-based violence in Bangladesh.
            </li>
          </ul>
        </div>
      ),
      search:
        "uwt pep personal enhancement program educational workshops bangladesh new york london mental health initiatives gbv awareness fundraising field work",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="space-y-4">
        <h2 className="leading-none">
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
            FREQUENTLY ASKED
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tight mt-1">
            QUESTIONS
          </span>
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
