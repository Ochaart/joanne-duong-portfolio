import Image from 'next/image';

const ProblemAndSolution = ({ isWebb, imageMargins = "", featureTitle, userProblem, problemDescription, solution, before = 'Before', after = 'After', beforePhoto, afterPhoto, alt, beforeHeight, afterHeight, beforeWidth = "w-[300px]", afterWidth="w-[300px]" }) => (
  <section className={`px-8 mx-auto max-w-[760px] pt-36`}>
    <div className="flex flex-col gap-y-5">
      <div>
        <h3>{featureTitle}</h3>
        <h2 className="text-3xl sm:text-4xl mt-1">{userProblem}</h2>
      </div>
      <div>
        <h3>PROBLEM:</h3>
        <p className="mt-1">{problemDescription}</p>
      </div>
      <div>
        <h3>SOLUTION:</h3>
        <p className="mt-1">{solution}</p>
      </div>
      <div className={`relative ${imageMargins} flex flex-col md:grid gap-y-10 ${isWebb ? "lg:grid-cols-problemAndSolution-lg" : "md:grid-cols-2"} py-10`}>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl pb-4">{before}</h2>
          <div className={`relative ${beforeHeight} ${beforeWidth}`}>
            <Image
              src={beforePhoto}
              layout="fill"
              alt={`${before} ${alt}`}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl pb-4">{after}</h2>
          <div className={`relative ${afterHeight} ${afterWidth}`}>
            <Image
              src={afterPhoto}
              layout="fill"
              alt={`${after} ${alt}`}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section >
)

export default ProblemAndSolution;