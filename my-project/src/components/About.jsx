import aboutImg from "../assets/about.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lp:p-8">
          <div className="flex flex-center justify-center">
            <img src={aboutImg} alt="" />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
