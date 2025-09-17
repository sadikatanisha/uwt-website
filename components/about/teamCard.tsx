"use client";
import Image from "next/image";
import React from "react";

import { BsLinkedin } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // adjust import path to your project (shadcn)

/* -------- Types -------- */
export type Social =
  | {
      linkedin?: string;
      [key: string]: any;
    }
  | string
  | null;

export type TeamMember = {
  id?: string;
  name: string;
  role: string;
  education?: string;
  location?: string;
  shortBio?: string;
  background?: string;
  motivation?: string;
  achievements?: string;
  personal?: string;
  social?: Social;
  image?: { src?: string; alt?: string };
};

/* -------- TeamCard (uses shadcn Accordion for sections) -------- */
interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const id =
    member.id ?? member.name.split(" ").filter(Boolean).join("-").toLowerCase();

  return (
    <article className="py-6 md:py-8">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        {/* Image */}
        <div className="shrink-0 w-full md:w-36 lg:w-40">
          {member.image?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <Image
              src={member.image.src}
              alt={member.image?.alt ?? `Photo of ${member.name}`}
              className="w-full h-auto object-cover rounded-lg shadow-sm"
              width={450}
              height={700}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-36 md:h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
              <span className="text-sm">No image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              {member.education && (
                <p className="text-sm text-gray-500 mt-1">{member.education}</p>
              )}
              {member.location && (
                <p className="text-sm text-gray-500 mt-1">{member.location}</p>
              )}
            </div>

            <div className="ml-4">
              {member.social &&
              typeof member.social !== "string" &&
              member.social.linkedin ? (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                >
                  <BsLinkedin className="w-4 h-4" />
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
              ) : typeof member.social === "string" ? (
                <p className="text-sm text-gray-600">{member.social}</p>
              ) : null}
            </div>
          </div>

          {/* Short teaser */}
          {member.shortBio && (
            <p className="text-gray-700 mt-4">{member.shortBio}</p>
          )}

          {/* Accordion sections using shadcn */}
          <div className="mt-4">
            <Accordion type="multiple" defaultValue={[]}>
              {member.background && (
                <AccordionItem value={`${id}-background`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full flex justify-between items-center no-underline">
                    <span className="font-semibold text-gray-800 ">
                      Background & experience
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {member.background}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {member.motivation && (
                <AccordionItem value={`${id}-motivation`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      Why they joined
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {member.motivation}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {member.achievements && (
                <AccordionItem value={`${id}-achievements`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      Key contributions
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {member.achievements}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {member.personal && (
                <AccordionItem value={`${id}-personal`}>
                  <AccordionTrigger className="py-2 px-0 text-left w-full flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      Personal
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {member.personal}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </article>
  );
};
