"use client";

import React from "react";
import {
  FaBullhorn,
  FaHeartbeat,
  FaSchool,
  FaGlobeAmericas,
  FaHandsHelping,
} from "react-icons/fa";

export default function OurWork() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            OUR WORK
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gray-200" />
            <div
              className="h-1 w-6 rounded-full"
              style={{ backgroundColor: "#BC4749" }}
            />
          </div>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            At Unstitched Women’s Tapestry (UWT), we are committed to creating
            safer, more equitable communities by challenging gender-based
            violence, dismantling rape culture, promoting mental health
            awareness, advancing sexual and reproductive health rights (SRHR),
            and supporting underprivileged communities. Our initiatives are
            grounded in education, advocacy, and community collaboration —
            ensuring that every project we lead sparks both awareness and
            action.
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Awareness & Advocacy */}
          <article className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#BC4749" }}
              >
                <FaBullhorn className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">
                Awareness &amp; Advocacy
              </h3>
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                We believe that awareness is the first step toward change. UWT
                has hosted numerous online and offline awareness sessions
                tackling issues that range from common practices of rape
                culture, gender-based violence, ways of identifying and tackling
                harmful situations to mental health awareness and education —
                including topics such as consent, boundaries, cyber safety,
                self-acceptance, self-love, and breaking harmful generational
                cycles. These sessions have reached students, young adults, and
                teenagers across Bangladesh and beyond, encouraging them to
                reflect, unlearn harmful practices, and foster safer
                environments.
              </p>

              <p className="mt-3">
                We also collaborate with like-minded organizations to amplify
                our impact. With Project Unity, we joined the Orange the World
                campaign, where experts highlighted pressing issues including
                women’s rights and transgender rights. Most recently, we hosted{" "}
                <em>Dialogue: Dissecting Rape Culture</em>, a discussion that
                created space for critical conversations and solutions with
                experts.
              </p>
            </div>
          </article>

          {/* Mental Health & Survivor Support */}
          <article className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#BC4749" }}
              >
                <FaHeartbeat className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">
                Mental Health &amp; Survivor Support
              </h3>
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                Mental health remains heavily stigmatized in Bangladesh, yet it
                is inseparable from the fight against gender-based violence. At
                UWT, we provide survivors and young people with safe spaces to
                heal, share, and connect. Through expert-led online therapy
                sessions, we have addressed topics such as stress management,
                trauma recovery, anxiety, and depression.
              </p>

              <p className="mt-3">
                In addition, our digital platforms regularly feature mental
                health awareness content, encouraging open conversations in a
                society where silence is often the norm. Survivors have used our
                storytelling platforms to share their journeys, and feedback
                from participants shows that these safe spaces have been
                profoundly meaningful in their healing processes.
              </p>
            </div>
          </article>

          {/* School & Youth Programs */}
          <article className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#BC4749" }}
              >
                <FaSchool className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">
                School &amp; Youth Programs: Personal Enhancement Program (PEP)
              </h3>
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                We see schools and youth communities as critical spaces for
                prevention and empowerment. To date, UWT has conducted 7
                workshops across Bangladesh, the UK, and the USA, engaging
                students on topics such as self-respect, boundaries, cyber
                safety, good touch/bad touch, puberty, and building healthy
                friendships.
              </p>

              <p className="mt-3">
                Highlights include a roundtable at Vassar College (USA) on
                surviving sexual assault, trauma healing, and
                solidarity-building, as well as workshops at Bangladeshi schools
                where students opened up about their own experiences of
                survival. These sessions not only encouraged survivors to break
                their silence but also pushed institutions to rethink their
                support systems for survivors.
              </p>
            </div>
          </article>

          {/* Community Development & Care */}
          <article className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border"
                style={{ borderColor: "#E9E9E9" }}
              >
                <FaHandsHelping className="w-4 h-4 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold">
                Community Development &amp; Care
              </h3>
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                Our community-based projects address the intersections of gender
                inequality, stigma, and health. With BODOL, we launched প্রজেক্ট
                প্রত্যাশা, supporting sex workers and their children by
                providing toys, winter clothes, and essential care. In another
                collaboration, Project ঐক্য চক্র, we distributed over 50
                menstrual hygiene kits, containing reusable pads, medicines, and
                hot water bags — to underprivileged menstruators, alongside a
                workshop to destigmatize menstruation and teach hygiene
                management.
              </p>

              <p className="mt-3">
                These projects reflect our commitment to uplifting marginalized
                communities, ensuring their voices and needs are recognized in
                broader conversations about equality and justice.
              </p>
            </div>
          </article>

          {/* Global Engagement */}
          <article className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#BC4749" }}
              >
                <FaGlobeAmericas className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Global Engagement</h3>
            </div>

            <div className="text-gray-700 text-sm leading-relaxed">
              <p>
                While rooted in Bangladesh, UWT’s reach is international. We
                have conducted workshops in both the UK and the USA, extending
                our advocacy to new audiences. Through our digital presence,
                survivors from countries such as Germany and the UK have shared
                feedback, engaged with our content, and even contributed
                creative works, such as survivor-led films.
              </p>

              <p className="mt-3">
                We remain open to international collaborations, partnerships,
                and speaking opportunities, believing that global solidarity is
                essential in the fight against gender-based violence and for
                mental health and SRHR rights.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="h-px w-24 bg-gray-200" />
          <div
            className="h-1 w-8 rounded-full ml-3"
            style={{ backgroundColor: "#BC4749" }}
          />
        </div>
      </div>
    </section>
  );
}
