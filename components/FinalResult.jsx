import Image from 'next/image'

const FinalResult = ({ assetPair, assetPairClassName = "sm:grid-cols-2 gap-x-10", assetOne, assetTwo, withBorder, title, result, userStory, video, asset, assetWidth = "w-full", assetHeight, assetAlt, assetAltOne, assetAltTwo, assetMargins = "" }) => (
  <section className="mx-auto px-8 pt-28">
    <div className="flex flex-col items-center">
      <div className="max-w-[696px]">
        <h3>{title}</h3>
        <h2 className="text-3xl sm:text-4xl my-1">{result}</h2>
        <p>{userStory}</p>
      </div>
      {video && (
        <div className="self-center pt-10">
          <div className="h-[226px] w-[340px] sm:h-[326px] sm:w-[440px] md:h-[526px] md:w-[640px]">
            {video}
          </div>
        </div>
      )}
      {asset && (
        <div className={`relative self-center mt-8 ${assetWidth} ${assetHeight} ${assetMargins} ${withBorder ? "border border-solid border-gray-300" : ""}`}>
          <Image
            src={asset}
            layout="fill"
            alt={assetAlt}
            priority
          />
        </div>
      )}
      {assetPair && (
        <div className={`grid grid-cols-1 ${assetPairClassName}`}>
          <div className={`relative self-center mt-8 ${assetWidth} ${assetHeight} ${assetMargins} ${withBorder ? "border border-solid border-gray-300" : ""}`}>
            <Image
              src={assetOne}
              layout="fill"
              alt={assetAltOne}
              priority
            />
          </div>
          <div className={`relative self-center mt-8 ${assetWidth} ${assetHeight} ${assetMargins} ${withBorder ? "border border-solid border-gray-300" : ""}`}>
            <Image
              src={assetTwo}
              layout="fill"
              alt={assetAltTwo}
              priority
            />
          </div>
        </div>
      )}
    </div>
  </section>
)

export default FinalResult;