import React from "react";
import heroImg from "../../images/image-hero-desktop.png";
import sponsorOne from "../../images/client-audiophile.svg";
import sponsorTwo from "../../images/client-databiz.svg";
import sponsorThree from "../../images/client-maker.svg";
import sponsorFour from "../../images/client-meet.svg";
const Hero = () => {
  const style = {
    section: "absolute top-20 w-full -z-10 overflow-hidden",
    heroContainer:
      "justify-between my-7 md:my-16 items-center w-full mx-auto max-w-[1024px] h-full flex-col-reverse md:flex-row flex ",
    heroInfoContainer:
      "flex-1 w-full md:w-32 my-16 lg:my-0 mx-5 lg:mx-0 text-center md:text-start px-3",
    heroInfo: "pt-0 md:pt-32 lg:pt-36 mb-0  space-y-6 md:space-y-16",
    heroSponsors: "pt-3 justify-between flex flex-wrap items-center",
  };
  return (
    <section className={style.section}>
      <div className={style.heroContainer}>
        <div className={style.heroInfoContainer}>
          <div className={style.heroInfo}>
            <h3 className=" text-4xl md:text-6xl lg:text-6xl font-bold lg:w-[90%]">
              Make <br />
              remote work
            </h3>

            <div className="">
              <p className="my-6 md:my-8 text-sm md:text-base lg:w-[75%] leading-relaxed">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>

              <button
                type="button"
                className=" py-3 px-6 capitalize rounded-xl bg-black text-white font-bold text-base"
              >
                learn More
              </button>
            </div>

            <div className={style.heroSponsors}>
              <img src={sponsorOne} alt="audiophile" />
              <img src={sponsorTwo} alt="databiz" className="mr-2" />
              <img src={sponsorThree} alt="maker" />
              <img src={sponsorFour} alt="meet" />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full lg:pt-12 lg:w-64 mx-5">
          <img
            src={heroImg}
            alt="Hero"
            className="px-4 md:px-0 object-cover ml-0 md:ml-6 align-baseline"
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
