import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Overview from '../../components/Overview'
import ProblemAndSolution from '../../components/ProblemAndSolution'
import FinalResult from '../../components/FinalResult'
import Showcase from '../../components/Showcase'
import ProjectNavigation from '../../components/ProjectNavigation'
import AnimateOpacity from '../../components/AnimateOpacity'
import useModuleInView from '../../hooks/useModuleInView'
import { motion } from 'framer-motion'
import { moduleVariants } from '../../variants/variants'

const HappyQuest = () => {
  const [showcaseHeight, setShowcaseHeight] = useState('80vh')
  const [showcaseThumbHeight, setShowcaseThumbHeight] = useState('12vh')
  const [showcaseWidth, setShowcaseWidth] = useState('auto')
  const showcaseImageHeight = 'min-h-[572.74px]'
  const showcaseImageWidth = 'min-w-[278.63px]'
  const showcaseThumbWidth = 'min-w-[75px]'

  const { module: refComparitive, controls: comparitiveControls } = useModuleInView();
  const { module: refProblemGoal, controls: problemGoalControls } = useModuleInView();
  const { module: refWireframes, controls: wireframesControls } = useModuleInView();
  const { module: refMood, controls: moodControls } = useModuleInView();
  const { module: refIcons, controls: iconsControls } = useModuleInView();
  const { module: refFidelity, controls: fidelityControls } = useModuleInView();
  const { module: refJourney, controls: journeyControls } = useModuleInView();
  const { module: refJourneyShowcase, controls: journeyShowcaseControls } = useModuleInView();
  const { module: refDestination, controls: destinationControls } = useModuleInView();
  const { module: refDestinationShowcase, controls: destinationShowcaseControls } = useModuleInView();
  const { module: refDigest, controls: digestControls } = useModuleInView();
  const { module: refDigestShowcase, controls: digestShowcaseControls } = useModuleInView();
  const { module: refVideo, controls: videoControls } = useModuleInView();

  const updateHeights = () => {
    setShowcaseHeight((window.innerHeight * .8) + 'px')
    setShowcaseThumbHeight((window.innerHeight * .12) + 'px')
    setShowcaseWidth((window.innerHeight * .8 / 2.4) + 'px')
  }

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        window.addEventListener('resize', updateHeights);
      }
    }, 50);
    return () => {
      unmounted = true;
      window.removeEventListener('resize', updateHeights);
    };
  }, []);

  return (
    <AnimateOpacity>
      <Hero
        alt="Happy Quest web app"
        src="/happy_quest_hero.jpg"
        title="I improved user engagement with a new positivity app"
      />
      <Overview
        details="There are many mental-wellness apps on the market, but I wanted to understand what really hooked users. It was a humbling experience to design an MVP for a positivity app from zero. While most existing apps looked and functioned the same, my insights from competitive research and user testing revealed that unique visuals and digestible content resulted in a more engaging experience."
        timeline="6 x 2-Week Sprints"
        skillsRows="skills:grid-rows-4"
        skills={["User Research", "User Testing", "Competitive Research", "Hand Sketches", "Wireframes", "Interactive Prototypes", "Illustrations & Icons", "Design System"]}
      />
      <motion.div
        ref={refComparitive}
        initial="initial"
        animate={comparitiveControls}
        variants={moduleVariants}
      >
        <Showcase
          task="COMPARITIVE RESEARCH"
          containerHeight="h-[572.74px]"
          research="Reviewed positivity apps"
          description="A total of 5 positivity apps (365 Gratitude, Happify, Youper, Replika and Delightful) were researched to understand current solutions for users. To guide the design direction, pros and cons were documented as well as the general feeling left by the apps: boredom, frustration, and unaccomplishment."
          id="psotivity_apps"
          images={[
            {
              src: "/gratitude.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/happify.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/youper.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/replika.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/delightful.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={refProblemGoal}
        initial="initial"
        animate={problemGoalControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="PROBLEM & GOAL"
          userProblem="Identified a problem & set a goal to guide the design of the app"
          userProblemDescription="After competitive research was done, a problem was identified and a goal was set as a guide which helped focus the design."
          problemDescription="Existing positivity apps do not help break negative thoughts, but instead act as a temporary bandage."
          solution='Help users feel amused, engaged, and accomplished with a new positivity app.'
          withAsset={false}
          goalOrSolution="GOAL"
        />
      </motion.div>
      <motion.div
        ref={refWireframes}
        initial="initial"
        animate={wireframesControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="WIREFRAMES"
          result="Mocked up initial designs"
          userStory="Ideas were initially brainstormed with hand sketches, then made into wireframes and an interactive prototype. More time was then allocated to the visual design."
          asset="/happy_quest_wireframes.png"
          assetHeight="h-[120vw] md:h-[849.26px]"
          assetWidth="w-[100vw] md:w-[695px]"
          assetAlt="Wireframes"
        />
      </motion.div>
      <motion.div
        ref={refMood}
        initial="initial"
        animate={moodControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="MOOD BOARD"
          result="Explored visual inspiration"
          userStory="Once the wireframes were mocked up, ideas for the visuals were brainstormed. With the problem and goal still in mind, colorful, fun visuals were collected for inspiration."
          asset="/happy_quest_mood_board.png"
          assetHeight="h-[100vw] md:h-[716px]"
          assetWidth="w-[100vw] md:w-[716px]"
          assetAlt="Mood board"
        />
      </motion.div>
      <motion.div
        ref={refIcons}
        initial="initial"
        animate={iconsControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="ILLUSTRATIONS & ICONS"
          result="Designed the map and destination icons"
          userStory="With an interactive journey as the theme, the map, the largest visual, was made. Initially, pre-made icons were to be used but they didn't fit the desired look and feel, so new icons were made from zero."
          asset="/happy_quest_visual_design_progression.png"
          assetHeight="h-[120vw] md:h-[849.26px]"
          assetWidth="w-[100vw] md:w-[716px]"
          assetAlt="Illustrations and icons"
        />
      </motion.div>
      <motion.div
        ref={refFidelity}
        initial="initial"
        animate={fidelityControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="HIGH FIDELITY"
          result="Iterated & tested high-fidelity designs"
          userStory="With the visuals for the map and icons designed, the high-fidelity app screens were created next. Iterations were made based on feedback from user testing, with three main areas of focus: the interactive journey, the destination points, and the digestible exercises."
          assetOne="/happy_quest_user_testing_1.png"
          assetAltOne="user testing"
          assetTwo="/happy_quest_user_testing_2.png"
          assetAltTwo="user testing"
          assetPair
          assetHeight="h-[183.9px] md:h-[220.68px]"
          assetWidth="w-[294.24px] md:w-[353.09px]"
          assetPairClassName="md:grid-cols-2 gap-x-2"
        />
      </motion.div>
      <motion.div
        ref={refJourney}
        initial="initial"
        animate={journeyControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="INTERACTIVE JOURNEY"
          userProblem="Users tried to click every icon and graphic"
          problemDescription="The map was initially filled with colorful destination icons and decor trees. However, users were frustrated clicking on these non-clickable destination icons and trees."
          solution='To help users flow through the best experience, the decor trees were removed, the first destination icon was made the focus, with a peek of the remaining destinations.'
          beforePhoto="/interactive_journey_1.png"
          afterPhoto="/interactive_journey_5.png"
          alt="Interactive Journey map"
          beforeHeight="h-[648px]"
          afterHeight="h-[712.56px]"
          afterWidth="w-[330px]"
        />
      </motion.div>
      <motion.div
        ref={refJourneyShowcase}
        initial="initial"
        animate={journeyShowcaseControls}
        variants={moduleVariants}
      >
        <Showcase
          containerHeight="h-[602.59px]"
          id="interactive_journey"
          images={[
            {
              src: "/interactive_journey_1.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/interactive_journey_2.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/interactive_journey_3.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/interactive_journey_4.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/interactive_journey_5.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={refDestination}
        initial="initial"
        animate={destinationControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="DESTINATION POINTS"
          userProblem="Users did not understand the destination points"
          problemDescription="Users did not understand the destination points such as the Golden Gate Bridge as scene setters for the prompts-to-come. They questioned if this was an app in which they had to physically go to the locations in person."
          solution='The copy was made concise and each destination was now tied to a form of positive psychology. This helped connect the destination to the prompt-to-come, as well as form trust.'
          beforePhoto="/destination_points_1.png"
          afterPhoto="/destination_points_5.png"
          alt="Destination points"
          beforeHeight="h-[550px]"
          afterHeight="h-[714.56px]"
          afterWidth="w-[330px]"
        />
      </motion.div>
      <motion.div
        ref={refDestinationShowcase}
        initial="initial"
        animate={destinationShowcaseControls}
        variants={moduleVariants}
      >
        <Showcase
          containerHeight="h-[602.59px]"
          id="destination_points"
          images={[
            {
              src: "/destination_points_1.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/destination_points_2.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/destination_points_3.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/destination_points_4.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/destination_points_5.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={refDigest}
        initial="initial"
        animate={digestControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="DIGESTIBLE EXERCISES"
          userProblem="Users are overwhelmed by mentally-demanding prompts"
          problemDescription="Users were frustrated and did not want to answer the prompts because they said it required too much deep thinking."
          solution='Easy-to-do exercises were created, each unlocking a new destination after completion. A variety of prompts were made such as, "Say hello to a stranger" or "Take a picture of a scene that brings you awe."'
          beforePhoto="/digestible_exercises_1.png"
          afterPhoto="/digestible_exercises_5.png"
          alt="Digestible Exercises prompt"
          beforeHeight="h-[649px]"
          afterHeight="h-[714px]"
          afterWidth="w-[330px]"
        />
      </motion.div>
      <motion.div
        ref={refDigestShowcase}
        initial="initial"
        animate={digestShowcaseControls}
        variants={moduleVariants}
      >
        <Showcase
          containerHeight="h-[602.59px]"
          id="destination_points"
          images={[
            {
              src: "/digestible_exercises_1.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/digestible_exercises_2.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/digestible_exercises_3.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/digestible_exercises_4.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
            {
              src: "/digestible_exercises_5.png",
              height: "min-h-[602px]",
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight,
              showcaseWidth,
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={refVideo}
        initial="initial"
        animate={videoControls}
        variants={moduleVariants}
      >
        <FinalResult
          result="I created an interactive positivity app that users were happy to use again and again"
          userStory="New users wanted to browse and explore the new app, often clicking through different sections. I focused on ease of navigation and context to help users flow through the app."
          video={(<iframe src="https://player.vimeo.com/video/449097289?h=9a58f66313" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>)}
        />
      </motion.div>
      <ProjectNavigation project="happyQuest" />
    </AnimateOpacity>
  )
}

export default HappyQuest;