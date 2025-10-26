"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.4 },
    },
  };

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* LEFT: large typographic label */}
          <motion.div
            className="flex flex-col items-start justify-center md:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={headerVariants}
          >
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  OUR
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl  font-medium tracking-tight mt-1">
                  STORY
                </span>
              </h1>

              <motion.div
                className="h-px w-48 bg-gray-200 mt-8 origin-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={dividerVariants}
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={imageVariants}
            >
              <Image
                src="/our-story-image.jpg"
                alt=""
                width={200}
                height={200}
                className="mt-8 rounded-md shadow-md object-cover mx-auto lg:mx-0"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: story content */}
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={contentVariants}
          >
            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                Unstitched Women’s Tapestry (UWT) began as an online platform,
                created to give women a safe space to share their stories. I
                realized early on that such spaces were rare, and many important
                conversations—like sexual consent, boundaries, and safety—were
                not happening, even in my own life. This inspired me to start
                sharing information and creating infographics to raise
                awareness. Soon, friends joined in, contributing writing and
                ideas, and together we began posting content that could educate,
                inform, and inspire.
              </p>
              <br />
              <p>
                By 2021, UWT had grown into a fully operational non-profit
                organization, expanding our work beyond online platforms to
                workshops, awareness sessions, mental health support, and
                community programs. Through these initiatives, we have not only
                reached students, young adults, and marginalized communities,
                but also learned deeply from them. Listening to survivors,
                supporting them, and engaging with communities has shaped the
                way we approach our work.
              </p>
              <br />
              <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-700">
                This journey has been transformative personally as well. Running
                UWT has taught me patience, resilience, and the value of helping
                others. It has made me more aware of systemic challenges and
                motivated me to continue learning, unlearning, and growing.
              </blockquote>
              <br />
              <p>
                UWT’s story is still unfolding. Each project, workshop, and
                collaboration is part of a larger vision: to create communities
                that are safer, more informed, and empowered. While the work is
                ongoing, every conversation, every connection, and every shared
                story reminds us why this mission matters and how much more
                there is to do.
              </p>

              {/* CTA */}
              <div className="mt-6">
                <motion.a
                  href="#get-involved"
                  className="inline-block bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get involved
                </motion.a>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
