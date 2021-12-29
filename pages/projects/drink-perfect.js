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

const DrinkPerfect = () => {
  const [showcaseHeight, setShowcaseHeight] = useState('80vh')
  const [showcaseThumbHeight, setShowcaseThumbHeight] = useState('14vh')
  const [showcaseWidth, setShowcaseWidth] = useState('auto')
  const showcaseImageHeight = 'min-h-[495px]'
  const showcaseImageWidth = 'min-w-[278.52px]'
  const showcaseThumbWidth = 'min-w-[75px]'

  const { module: refValidationTest, controls: validationControls } = useModuleInView();
  const { module: refUserFlow, controls: userFlowControls } = useModuleInView();
  const { module: refUsabilityTest, controls: usabilityTestControls } = useModuleInView();
  const { module: refSignup, controls: signupControls } = useModuleInView();
  const { module: refSignupShocase, controls: signupShowcaseControls } = useModuleInView();
  const { module: refRedemption, controls: redemptionControls } = useModuleInView();
  const { module: refRedemptionShowcase, controls: redemptionShowcaseControls } = useModuleInView();
  const { module: refPremium, controls: premiumControls } = useModuleInView();
  const { module: refPremiumShowcase, controls: premiumShowcaseControls } = useModuleInView();
  const { module: refVideo, controls: videoControls } = useModuleInView();


  const updateHeights = () => {
    setShowcaseHeight((window.innerHeight * .8) + 'px')
    setShowcaseThumbHeight((window.innerHeight * .14) + 'px')
    setShowcaseWidth((window.innerHeight * .8 / 1.996) + 'px')
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
        alt="Drink Perfect mobile app"
        src="/drink_perfect_hero2.jpg"
      />
      <Overview
        details="Drink Perfect offered exclusive discounts at local bars and restaurants through their mobile app, but struggled to convert users. Several rounds of user testing were conducted and many iterations were designed to understand what kept users from completing sign-up. The design changes made a significant increase in user conversion."
        timeline="6 x 2-Week Sprints"
        skillsRows="skills:grid-rows-4"
        skills={["User Research", "User Testing", "Competitive Research", "Hand Sketches", "Wireframes", "Interactive Prototypes", "Illustrations & Icons", "Style Guide"]}
      />
      <motion.div
        ref={refValidationTest}
        initial="initial"
        animate={validationControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="FINAL VALIDATION TESTING"
          result="Users appreciated more context and information"
          userStory="Final validation testing was conducted with 6 new participants, either in person or remotely via video chat. There were 3 main areas of focus to improve the redesign: sign up, premium info, and discount redemption."
          asset="/drink_perfect_before_after.png"
          assetHeight="h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]"
          assetWidth="w-[350px] sm:w-[500px] md:w-[700px] lg:w-[900px]"
          assetAlt="table"
          withBorder
        />
      </motion.div>
      <motion.div
        ref={refUserFlow}
        initial="initial"
        animate={userFlowControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="USER FLOW"
          result="Diagrammed user path"
          userStory="After discussing the important parts of the app and business needs, an outline of the user flow was created to understand the path and identify any points of friction."
          asset="/drink_perfect_onboarding_flow_original.png"
          assetHeight="h-[304px] md:h-[454px] lg:h-[654px]"
          assetWidth="w-[375px] sm:w-[100%]"
        />
      </motion.div>
      <motion.div
        ref={refUsabilityTest}
        initial="initial"
        animate={usabilityTestControls}
        variants={moduleVariants}
      >
        <FinalResult
          title="INITIAL USABILITY TESTING"
          result="Users were frustrated with the UX, not just the UI of the original app"
          userStory="User testing was conducted on the original design with 6 users to understand their needs and pain points. Based on the test results, 3 main problems guided the redesign: sign up, premium info, and discount redemption."
          assetOne="/user_testing_1.png"
          assetAltOne="user testing"
          assetTwo="/user_testing_2.png"
          assetAltTwo="user testing"
          assetPair
          assetHeight="h-[300px] sm:h-[200px] md:h-[300px]"
          assetWidth="w-[300px] sm:w-[200px] md:w-[300px]"
        />
      </motion.div>
      <motion.div
        ref={refSignup}
        initial="initial"
        animate={signupControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="SIGN UP"
          userProblem="Users signed up on the wrong screen"
          problemDescription="Users struggled with creating an account. Every user mistakenly tried to create an account at the “Sign-In” screen, rather than the “Sign-Up” screen."
          solution='New users were now introduced to the "Sign Up" screen, the UI was redesigned to be open and inviting, and the copy was written more concisely.'
          beforePhoto="/sign_up_1_original.png"
          afterPhoto="/sign_up_5.png"
          alt="User sign up page"
          beforeHeight="h-[533px]"
          afterHeight="h-[533px]"
        />
      </motion.div>
      <motion.div
        ref={refSignupShocase}
        initial="initial"
        animate={signupShowcaseControls}
        variants={moduleVariants}
      >
        <Showcase
          containerHeight="h-[495px]"
          id="signup"
          images={[
            {
              src: "/sign_up_1.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/sign_up_2.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/sign_up_3.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/sign_up_4.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/sign_up_5.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={refRedemption}
        initial="initial"
        animate={redemptionControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="DISCOUNT REDEMPTION"
          userProblem="Users gave up when they failed to redeem a discount"
          problemDescription="Users who tried to claim a discount could not because they didn’t have a premium account, but it was not explained. As a result, users repeatedly tried to redeem a discount, got frustrated, and gave up."
          solution='I helped users achieve the “aha moment” by providing more context on the discount redemption.'
          beforePhoto="/discount_redemption_1.png"
          afterPhoto="/discount_redemption_5.png"
          alt="Discount redemption"
          beforeHeight="h-[533px]"
          afterHeight="h-[662px]"
          afterWidth="w-[373px]"
        />
      </motion.div>
      <motion.div
        ref={refRedemptionShowcase}
        initial="initial"
        animate={redemptionShowcaseControls}
        variants={moduleVariants}
      >
        <Showcase
          containerHeight="h-[495px]"
          id="redemption"
          images={[
            {
              src: "/discount_redemption_1.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/discount_redemption_2.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/discount_redemption_3.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/discount_redemption_4.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
            {
              src: "/discount_redemption_5.png",
              height: showcaseImageHeight,
              width: showcaseImageWidth,
              thumbHeight: showcaseThumbHeight,
              thumbWidth: showcaseThumbWidth,
              showcaseHeight: showcaseHeight,
              showcaseWidth: showcaseWidth,
            },
          ]}
        />
      </motion.div>
      <motion.div
        ref={refPremium}
        initial="initial"
        animate={premiumControls}
        variants={moduleVariants}
      >
        <ProblemAndSolution
          featureTitle="PREMIUM INFO"
          userProblem="Users did not understand the value of premium"
          problemDescription="Users were forced to subscribe to the premium account and enter their credit card information, without enough time to explore the app. Users felt blindsided and distrusted Drink Perfect."
          solution='I increased the number of premium subscriptions by clarifying premium benefits and highlighting the free trial.'
          beforePhoto="/premium_info_1.png"
          afterPhoto="/premium_info_5.png"
          alt="Premium info"
          beforeHeight="h-[533px]"
          afterHeight="h-[844px]"
          afterWidth="w-[375px]"
        />
      </motion.div>
      <motion.div
        ref={refPremiumShowcase}
        initial="initial"
        animate={premiumShowcaseControls}
        variants={moduleVariants}
      >
      <Showcase
        containerHeight="h-[495px]"
        id="premium"
        images={[
          {
            src: "/premium_info_1.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/premium_info_2.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/premium_info_3.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/premium_info_4.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/premium_info_5.png",
            height: "h-[600px]",
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
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
        result="I made onboarding easy so new users were happy to join"
        userStory="I conducted final validation testing with 6 new participants, either in person or remotely via video chat. My changes made a significant increase in user conversion."
        video={(<iframe src="https://player.vimeo.com/video/379932891?h=99abf67073" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>)}
      />
      <ProjectNavigation project="drinkPerfect" />
      </motion.div>
    </AnimateOpacity >
  )
}

export default DrinkPerfect;