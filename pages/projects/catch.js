import Hero from '../../components/Hero'
import Overview from '../../components/Overview'
import ProblemAndSolution from '../../components/ProblemAndSolution'
import FinalResult from '../../components/FinalResult'
import Showcase from '../../components/Showcase'

const Catch = () => {
  const showcaseImageHeight = 'min-h-[174.16px]'
  const showcaseImageWidth = 'min-w-[278.65px]'
  const showcaseThumbHeight = 'min-h-[96px]'
  const showcaseThumbWidth = 'min-w-[154.80px]'
  const showcaseHeight = 'h-auto'
  const showcaseWidth = 'w-[100vw] sm:w-[72vw]'

  return (
    <>
      <Hero
        alt="Catch web app"
        src="/catch_hero.jpg"
        title="I converted referred users with an actionable web portal"
      />
      <Overview
        details="Catch offered store credit at online retailers through their integrated-checkout payment. Before my design, new users were referred by existing users via gifted credits, but did not convert on the web portal. I conducted user research and designed many iterations to understand what kept referred users from completing account set up. My designs made a significant increase in user conversion."
        timeline="2 Months"
        skillsRows="skills:grid-rows-3"
        skills={["User Research", "User Testing", "Competitive Research", "Hand Sketches", "Wireframes", "Interactive Prototypes"]}
      />
      <Showcase
        comparitiveResearch
        containerHeight="h-[174.16px]"
        research="Reviewed payment and rewards apps"
        description="To understand current solutions for users, comparable payment and rewards apps were researched such as Gyft, Klarna, Paypal, Starbucks, and Venmo."
        id="catchResearch"
        images={[
          {
            src: "/comp_research_gyft.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/comp_research_klarna.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/comp_research_paypal.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/comp_research_starbucks.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
          {
            src: "/comp_research_venmo.png",
            height: showcaseImageHeight,
            width: showcaseImageWidth,
            thumbHeight: showcaseThumbHeight,
            thumbWidth: showcaseThumbWidth,
            showcaseHeight: showcaseHeight,
            showcaseWidth: showcaseWidth,
          },
        ]}
      />
      <ProblemAndSolution
        featureTitle="USER LOG IN"
        userProblem="Users did not understand how Catch worked"
        problemDescription="Referred users were gifted store credits from existing users. However they did not understand how Catch worked and hesitated to create an account in order to redeem their gifted store credits."
        solution='I designed an easy and clear web portal login screen with a “how it works” overview.'
        before="Wireframe"
        after="Final"
        beforePhoto="/user_login_wireframe.jpg"
        afterPhoto="/user_login_final.jpg"
        alt="User login page"
        isWebb
        imageMargins="-mx-8 lg:mx-[-20%]"
        beforeWidth="w-full lg:w-[340px] xl:w-[440px] 2xl:w-[540px]"
        afterWidth="w-full lg:w-[520px] xl:w-[620px] 2xl:w-[720px]"
        beforeHeight="h-[260px] sm:h-[324px] xl:h-[280px] 2xl:h-[340px]"
        afterHeight="h-[280px] sm:h-[364px] xl:h-[424px] 2xl:h-[524px]"
      />
      <ProblemAndSolution
        featureTitle="CONNECT BANK ACCOUNT"
        userProblem="Users did not want to link their bank account"
        problemDescription="Users were asked to connect their bank account immediately after creating their account, without enough time to explore the web portal. Instead, users gave up and did not complete account set up."
        solution='I removed the "connect bank account" originally introduced in the flow, designed a natural flow for users to explore first, showed where and why it was important, and gave many opportunities for users to connect their bank account later. An example of this is on the home screen of the web portal.'
        before="Wireframe"
        after="Final"
        beforePhoto="/connect_bank_wireframe.jpg"
        afterPhoto="/connect_bank_final.jpg"
        alt="Connect bank account page"
        isWebb
        imageMargins="-mx-8 lg:mx-[-20%]"
        beforeWidth="w-full lg:w-[340px] xl:w-[440px] 2xl:w-[540px]"
        afterWidth="w-full lg:w-[520px] xl:w-[620px] 2xl:w-[720px]"
        beforeHeight="h-[260px] sm:h-[324px] xl:h-[280px] 2xl:h-[340px]"
        afterHeight="h-[280px] sm:h-[364px] xl:h-[390px] 2xl:h-[450px]"
      />
      <ProblemAndSolution
        featureTitle="SHOP STORES"
        userProblem="Users did not know where else to shop and earn store credit"
        problemDescription="Referred users who were gifted credit only saw store credit from one particular store so they did not know where else to shop and earn with Catch."
        solution='I designed a “Shop Stores” page to show online retail partners where users could earn store credit when paid with Catch. With a limited number of partners, I also designed the grid in a more visually appealing mixed-collage format.'
        before="Wireframe"
        after="Final"
        beforePhoto="/shop_stores_wireframe.jpg"
        afterPhoto="/shop_stores_final.jpg"
        alt="Shop stores page"
        isWebb
        imageMargins="-mx-8 lg:mx-[-20%]"
        beforeWidth="w-full lg:w-[340px] xl:w-[440px] 2xl:w-[540px]"
        afterWidth="w-full lg:w-[520px] xl:w-[620px] 2xl:w-[720px]"
        beforeHeight="h-[260px] sm:h-[324px] xl:h-[280px] 2xl:h-[340px]"
        afterHeight="h-[280px] sm:h-[390px] xl:h-[460px] 2xl:h-[520px]"
      />
      <FinalResult
        result="I made an easy-to-use web portal so referred users were happy to shop and earn with Catch"
        userStory="Referred users wanted to understand what Catch was, freely browse and explore, then choose to link their bank account and shop later. I focused on ease of navigation and context to help users stay engaged and take action."
        video={(<iframe src="https://player.vimeo.com/video/590394185?h=c86669499a" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>)}
      />
    </>
  )
}

export default Catch;