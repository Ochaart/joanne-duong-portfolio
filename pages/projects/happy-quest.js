import Hero from '../../components/Hero'
import Overview from '../../components/Overview'
import ProblemAndSolution from '../../components/ProblemAndSolution'
import FinalResult from '../../components/FinalResult'

const HappyQuest = () => (
  <>
    <Hero
      alt="Happy Quest web app"
      src="/happy_quest_hero.jpg"
      title="I improved user engagement with a new positivity app"
    />
    <Overview
      details="There are many mental-wellness apps on the market, but I wanted to understand what really hooked users. It was a humbling experience to design an MVP for a positivity app from zero. While most existing apps looked and functioned the same, my insights from competitive research and user testing revealed that unique visuals and digestible content resulted in a more engaging experience."
      timeline="3 Months"
      skillsRows="skills:grid-rows-4"
      skills={["User Research", "User Testing", "Competitive Research", "Hand Sketches", "Wireframes", "Interactive Prototypes", "Illustrations & Icons", "Design System"]}
    />
    <ProblemAndSolution
      featureTitle="INTERACTIVE JOURNEY"
      userProblem="Users are unamused by prompt-and-answer apps"
      problemDescription="In my first iteration, I designed and tested the common positivity app pattern with a prompt and an input field. Users did not want to complete the prompt because they had seen the format before and felt uninspired."
      solution='I created an engaging, interactive map which takes users on a digital journey through San Francisco to five iconic destinations, each introducing a corresponding prompt based on positive psychology.'
      beforePhoto="/happy_quest_map_wireframe.jpg"
      afterPhoto="/happy_quest_map_final.jpg"
      alt="Interactive Journey map"
      beforeHeight="h-[550px]"
      afterHeight="h-[649px]"
    />
    <ProblemAndSolution
      featureTitle="DIGESTIBLE EXERCISES"
      userProblem="Users are overwhelmed by mentally-demanding prompts"
      problemDescription="Users had short attention spans and did not want to answer deep-thinking questions. As a result, users felt unaccomplished and their negative thoughts increased."
      solution='I created easy-to-do exercises, each unlocking a new destination after completion. I also designed a variety of prompts such as, “Take a picture of a scene that brings you awe” or “Say hello to a stranger."'
      beforePhoto="/happy_quest_prompt_wireframe.jpg"
      afterPhoto="/happy_quest_prompt_final.jpg"
      alt="Digestible Exercises prompt"
      beforeHeight="h-[550px]"
      afterHeight="h-[649px]"
    />
    <ProblemAndSolution
      featureTitle="CONGRATULATIONS & REMINDERS"
      userProblem="Users forgot to practice positive thinking"
      problemDescription="In user research, users revealed that they failed to consistently use their mental-wellness apps and reverted back to negative thinking."
      solution='Practice makes perfect. After a user completed an exercise, I congratulated them with a days-in-a-row achieved and nudged them to set a reminder notification.'
      beforePhoto="/happy_quest_reminder_wireframe.jpg"
      afterPhoto="/happy_quest_reminder_final.jpg"
      alt="Congratulations & Reminders"
      beforeHeight="h-[550px]"
      afterHeight="h-[649px]"
    />
    <FinalResult
      result="I created an interactive positivity app that users were happy to use again and again"
      userStory="New users wanted to browse and explore the new app, often clicking through different sections. I focused on ease of navigation and context to help users flow through the app."
      video={(<iframe src="https://player.vimeo.com/video/449097289?h=9a58f66313" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>)}
    />
  </>
)

export default HappyQuest;