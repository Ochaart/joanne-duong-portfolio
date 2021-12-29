import Image from 'next/image';

const ProblemAndSolution = ({ isWebb, goalOrSolution = "SOLUTION", userProblemDescription, withAsset = true, imageMargins = "", featureTitle, userProblem, problemDescription, solution, before = 'Before', after = 'After', beforePhoto, afterPhoto, alt, beforeHeight, afterHeight, beforeWidth = "w-[300px]", afterWidth = "w-[300px]" }) => (
  <section className={`px-8 mx-auto max-w-[760px] pt-28`}>
    <div className="flex flex-col gap-y-5 items-start">
      <div>
        <h3>{featureTitle}</h3>
        <h2 className="text-3xl sm:text-4xl mt-2">{userProblem}</h2>
        {userProblemDescription && (<p className="mt-3">{userProblemDescription}</p>)}
      </div>
      <div>
        <h3>PROBLEM:</h3>
        <p className="mt-1">{problemDescription}</p>
      </div>
      <div>
        <h3>{goalOrSolution}:</h3>
        <p className="mt-1">{solution}</p>
      </div>
      {withAsset && (<div className={`relative self-center ${imageMargins} gap-x-5 flex flex-col gap-y-10 ${isWebb ? "md:grid lg:grid-cols-problemAndSolution-lg" : "md:flex-row"} py-10`}>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl pb-4">{before}</h2>
          <div className={`relative ${beforeHeight} ${beforeWidth} border border-solid border-gray-300`}>
            <Image
              src={beforePhoto}
              layout="fill"
              alt={`${before} ${alt}`}
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl pb-4">{after}</h2>
          <div className={`relative ${afterHeight} ${afterWidth} border border-solid border-gray-300`}>
            <Image
              src={afterPhoto}
              layout="fill"
              alt={`${after} ${alt}`}
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>)}
    </div>
  </section >
)

export default ProblemAndSolution;