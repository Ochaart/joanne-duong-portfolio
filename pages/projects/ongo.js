import Hero from '../../components/Hero'
import Overview from '../../components/Overview'
import ProblemAndSolution from '../../components/ProblemAndSolution'
import FinalResult from '../../components/FinalResult'

const Ongo = () => (
  <>
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
    <ProblemAndSolution
      featureTitle="ABOVE THE FOLD"
      userProblem="Users wanted to quickly learn about Ongo and download the app but couldn't"
      problemDescription="Users had short attention spans and quickly scanned the site to learn about the product, but there was not enough information."
      solution='I made the Ongo product obvious to new users with an image of the app and wrote succinct headlines. I also included several calls-to-action to nudge the user to convert.'
      beforePhoto="/ongo_original.jpg"
      afterPhoto="/ongo_above_the_fold_after.jpg"
      alt="Above the fold"
      isWebb
      imageMargins="-mx-8 lg:mx-[-20%]"
      beforeWidth="w-full lg:w-[340px] xl:w-[440px] 2xl:w-[540px]"
      afterWidth="w-full lg:w-[520px] xl:w-[620px] 2xl:w-[720px]"
      beforeHeight="h-[260px] sm:h-[324px] xl:h-[280px] 2xl:h-[340px]"
      afterHeight="h-[280px] sm:h-[364px] xl:h-[424px] 2xl:h-[524px]"
    />
    <ProblemAndSolution
      featureTitle="HOW IT WORKED"
      userProblem="Users wanted to learn how to use the app"
      problemDescription="Users wanted a quick overview of how the app functioned to see if it was easy to use."
      solution="I designed a concise, scannable section to explain the app's process."
      beforePhoto="/ongo_original.jpg"
      afterPhoto="/ongo_how_it_works_after.jpg"
      alt="How it worked"
      isWebb
      imageMargins="-mx-8 lg:mx-[-20%]"
      beforeWidth="w-full lg:w-[340px] xl:w-[440px] 2xl:w-[540px]"
      afterWidth="w-full lg:w-[520px] xl:w-[620px] 2xl:w-[720px]"
      beforeHeight="h-[260px] sm:h-[324px] xl:h-[280px] 2xl:h-[340px]"
      afterHeight="h-[240px] sm:h-[420px] xl:h-[350px] 2xl:h-[450px]"
    />
    <ProblemAndSolution
      featureTitle="EXPERTS"
      userProblem="Users wanted to know what made Ongo unique and why they should trust it"
      problemDescription="Users already used many different health and fitness apps, so they mainly looked for motivation and credibility."
      solution="I designed a section to explain the credentials, specialties, and levels of the fitness experts. "
      beforePhoto="/ongo_original.jpg"
      afterPhoto="/ongo_experts_after.jpg"
      alt="Experts"
      isWebb
      imageMargins="-mx-8 lg:mx-[-20%]"
      beforeWidth="w-full lg:w-[340px] xl:w-[440px] 2xl:w-[540px]"
      afterWidth="w-full lg:w-[520px] xl:w-[620px] 2xl:w-[720px]"
      beforeHeight="h-[260px] sm:h-[324px] xl:h-[280px] 2xl:h-[340px]"
      afterHeight="h-[440px] sm:h-[540px] xl:h-[540px] 2xl:h-[640px]"
    />
    <FinalResult
      result="I made an easy-to-use web portal so referred users were happy to shop and earn with Catch"
      userStory="Referred users wanted to understand what Catch was, freely browse and explore, then choose to link their bank account and shop later. I focused on ease of navigation and context to help users stay engaged and take action."
      asset="/ongo_landing_page_after.jpg"
      assetHeight="h-[617px] sm:h-[865px] md:h-[1211px] lg:h-[1696px] 1xl:h-[2120px]"
      assetWidth="w-[370px] sm:w-[518px] md:w-[726px] lg:w-[1017px] 1xl:w-[1220px]"
      assetAlt="Landing page asset"
    />
  </>
)

export default Ongo;