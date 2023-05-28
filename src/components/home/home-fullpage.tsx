import ReactFullpage from "@fullpage/react-fullpage";
import Banner from "../banner/banner";
import AboutMe from "../about-me/about-me";
import Portfolio from "../portfolio/portfolio";
import Experience from "../experience/experience";

const HomeFullpage = () => (
  <>
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      credits={{ enabled: false }}
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section bg-[url('/src/images/bg/galaxy_banner.png')] bg-cover bg-bottom text-light ">
              <Banner />
            </div>
            <div className="section bg-gradient-to-b	from-bgDark to-purple">
              <AboutMe />
            </div>
            <div className="section bg-gradient-to-t	from-bgDark to-purple">
              <Portfolio />
            </div>
            <div className="section bg-gradient-to-b	from-bgDark to-purple">
              <Experience />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
    <style>
      {`
      
        #fp-nav ul li a span {
          background: #F9A28F;!important
        }
        a[href="https://alvarotrigo.com/fullPage/"] {
          display: none;
        }
      `}
    </style>
  </>
);

export default HomeFullpage;
