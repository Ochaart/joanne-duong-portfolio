import Hero from '../../components/Hero'
import Overview from '../../components/Overview'
import ProblemAndSolution from '../../components/ProblemAndSolution'
import FinalResult from '../../components/FinalResult'
import Showcase from '../../components/Showcase'
import ProjectNavigation from '../../components/ProjectNavigation'
import AnimateOpacity from '../../components/AnimateOpacity'

const Ongo = () => {
  const showcaseImageHeight = 'min-h-[206.92px]'
  const showcaseImageWidth = 'min-w-[278.65px]'
  const showcaseThumbHeight = '96px'
  const showcaseThumbWidth = 'min-w-[154.80px]'
  const showcaseHeight = 'auto'
  const showcaseWidth = ''
  const showcaseWidthTailwind = "w-[100vw] sm:w-[76vw]"

  const sketchImageHeight = 'min-h-[451.67px]'
  const sketchImageWidth = 'min-w-[351.03px]'
  const sketchThumbHeight = '12vh'
  const sketchThumbWidth = 'min-w-[75px]'
  const sketchHeight = 'auto'
  const sketchWidthTailwind = "w-[80vw] lg:w-[60vw]"

  return (
    <AnimateOpacity>
      <Hero
        alt="Ongo web app"
        src="/ongo_hero.jpg"
        title="I increased app downloads for a health and fitness app"
      />
      <Overview
        details="Ongo was a health and fitness app in beta, but planned to launch their product and needed a new landing page. I conducted several rounds of user testing and designed many iterations to understand what users looked for in order to download an app. Scanability, calls to action, and trust, were invaluable to designing a landing page in which users converted."
        timeline="4 x 2-Week Sprints"
        skillsRows="skills:grid-rows-3"
        skills={["User Research", "User Testing", "Competitive Research", "Hand Sketches", "Wireframes", "High-Fidellity Mockups"]}
      />
      <FinalResult
        title="USER EMPATHY"
        result="Prioritized user and business needs and painpoints"
        userStory="An online survey was conducted to understand user needs and pain points of health and fitness apps. Then each unique point was noted on a sticky note and organized on a chart to prioritize what was most important to both the user and the business."
        asset="/brainstorming.png"
        assetHeight="h-[90vw] md:h-[556.27px]"
        assetWidth="w-[100vw] md:w-[716px]"
        assetAlt="Joanne and teammate working on ideas on a whiteboard"
      />
      <Showcase
        task="HAND SKETCHES"
        layout="sketches"
        containerHeight="h-[451.67px]"
        research="Used a common landing page pattern"
        description="Initial designs of the landing page were hand sketched and mocked up. A common landing page pattern was used to reduce user cognitive load. Based on results of the “5 second test,” many iterations were made with the focus on three main areas: above the fold, how it works, and experts."
        id="hand_sketches"
        images={[
          {
            src: "/ongo_hand_sketch_1.png",
            height: sketchImageHeight,
            width: sketchImageWidth,
            thumbHeight: sketchThumbHeight,
            thumbWidth: sketchThumbWidth,
            showcaseHeight: sketchHeight,
            sketchWidthTailwind,
          },
          {
            src: "/ongo_hand_sketch_2.png",
            height: sketchImageHeight,
            width: sketchImageWidth,
            thumbHeight: sketchThumbHeight,
            thumbWidth: sketchThumbWidth,
            showcaseHeight: sketchHeight,
            sketchWidthTailwind,
          },
          {
            src: "/ongo_hand_sketch_3.png",
            height: sketchImageHeight,
            width: sketchImageWidth,
            thumbHeight: sketchThumbHeight,
            thumbWidth: sketchThumbWidth,
            showcaseHeight: sketchHeight,
            sketchWidthTailwind,
          },
          {
            src: "/ongo_hand_sketch_4.png",
            height: sketchImageHeight,
            width: sketchImageWidth,
            thumbHeight: sketchThumbHeight,
            thumbWidth: sketchThumbWidth,
            showcaseHeight: sketchHeight,
            sketchWidthTailwind,
          },
        ]}
      />
      <ProblemAndSolution
        featureTitle="ABOVE THE FOLD"
        userProblem="Users wanted to quickly learn about Ongo and download the app but couldn't"
        problemDescription="Users had short attention spans and quickly scanned the site to learn about the product, but there was not enough information."
        solution='The Ongo product was made obvious to new users with an image of the app and succinct headlines. Also several calls-to-action were included to nudge the user to convert.'
        beforePhoto="/ongo_before.png"
        afterPhoto="/above_the_fold_4.png"
        alt="Above the fold"
        isWebb
        imageMargins="-mx-8 lg:mx-[-20%]"
        beforeWidth="w-[80vw] lg:w-[375px] xl:w-[450px] 2xl:w-[540px]"
        afterWidth="w-[80vw] lg:w-[500px] xl:w-[600px] 2xl:w-[720px]"
        beforeHeight="h-[59.5vw] lg:h-[278.5px] xl:h-[334.2px] 2xl:h-[401.04px]"
        afterHeight="h-[59.5vw] lg:h-[371.09px] xl:h-[445.31px] 2xl:h-[534.38px]"
      />
      <Showcase
        containerHeight="h-[206.92px]"
        id="above_the_fold"
        layout="web"
        images={[
          {
            src: "/ongo_before.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/above_the_fold_1.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/above_the_fold_2.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/above_the_fold_3.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/above_the_fold_4.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
        ]}
      />
      <ProblemAndSolution
        featureTitle="HOW IT WORKED"
        userProblem="Users wanted to learn how to use the app"
        problemDescription="Users wanted a quick overview of how the app functioned to see if it was easy to use."
        solution="A concise, scannable section was designed to explain how the app works."
        beforePhoto="/ongo_before.png"
        afterPhoto="/how_it_works_4.png"
        alt="How it worked"
        isWebb
        imageMargins="-mx-8 lg:mx-[-20%]"
        beforeWidth="w-[80vw] lg:w-[375px] xl:w-[450px] 2xl:w-[540px]"
        afterWidth="w-[80vw] lg:w-[500px] xl:w-[600px] 2xl:w-[720px]"
        beforeHeight="h-[59.5vw] lg:h-[278.5px] xl:h-[334.2px] 2xl:h-[401.04px]"
        afterHeight="h-[59.5vw] lg:h-[371.09px] xl:h-[445.31px] 2xl:h-[534.38px]"
      />
      <Showcase
        containerHeight="h-[206.92px]"
        id="how_it_works"
        layout="web"
        images={[
          {
            src: "/ongo_before.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/how_it_works_1.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/how_it_works_2.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/how_it_works_3.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/how_it_works_4.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
        ]}
      />
      <ProblemAndSolution
        featureTitle="EXPERTS"
        userProblem="Users wanted to know what made Ongo unique and why they should trust it"
        problemDescription="Users already used many different health and fitness apps, so they mainly looked for motivation and credibility."
        solution="A section to explain the credentials, specialties, and levels of the fitness experts was designed."
        beforePhoto="/ongo_before.png"
        afterPhoto="/experts_4.png"
        alt="Experts"
        isWebb
        imageMargins="-mx-8 lg:mx-[-20%]"
        beforeWidth="w-[80vw] lg:w-[375px] xl:w-[450px] 2xl:w-[540px]"
        afterWidth="w-[80vw] lg:w-[500px] xl:w-[600px] 2xl:w-[720px]"
        beforeHeight="h-[59.5vw] lg:h-[278.5px] xl:h-[334.2px] 2xl:h-[401.04px]"
        afterHeight="h-[59.5vw] lg:h-[371.09px] xl:h-[445.31px] 2xl:h-[534.38px]"
      />
      <Showcase
        containerHeight="h-[206.92px]"
        id="how_it_works"
        layout="web"
        images={[
          {
            src: "/ongo_before.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/experts_1.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/experts_2.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/experts_3.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
          {
            src: "/experts_4.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidthTailwind,
          },
        ]}
      />
      <FinalResult
        result="An informative and actionable landing page with new users in mind"
        userStory="Users had many health and fitness app options, so they looked for quick overviews and credibility. Scanability, calls to action, and trust were focused on so users would convert."
        asset="/ongo_landing_page_after.jpg"
        assetHeight="h-[617px] sm:h-[865px] md:h-[1211px] lg:h-[1696px] 1xl:h-[2120px]"
        assetWidth="w-[370px] sm:w-[518px] md:w-[726px] lg:w-[1017px] 1xl:w-[1220px]"
        assetAlt="Landing page asset"
      />
      <ProjectNavigation project="ongo" />
    </AnimateOpacity>
  )
}

export default Ongo;