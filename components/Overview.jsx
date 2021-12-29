const Overview = ({ details, timeline, skills = [], skillsRows }) => (
  <section className="mx-auto px-8 max-w-[760px] lg:mt-16">
    <div className="flex flex-col gap-y-2 pt-4">
      <h3>OVERVIEW</h3>
      <p className="text-lg">{details}</p>
    </div>
    <div className="grid grid-cols-2 skills:grid-cols-overview-lg 1xl:grid-cols-overview mt-10">
      <div className="flex flex-col gap-y-5">
        <div>
          <h3>ROLE</h3>
          <p>Product Designer</p>
        </div>
        <div>
          <h3>TIMELINE</h3>
          <p>{timeline}</p>
        </div>
      </div>
      <div className="1xl:col-start-3">
        <h3>SKILLS</h3>
        <div className={`grid grid-cols-1 skills:grid-flow-col content-center skills:grid-cols-2 gap-x-2 ${skillsRows}`}>
          {skills.map((skill, i) => <p key={i}>{skill}</p>)}
        </div>
      </div>
    </div>
  </section>
)

export default Overview;