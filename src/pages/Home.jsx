// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"


// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"


function Home() {
  return (
    <div className="bg-richblue-900">
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Admin Portal</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
        This heading emphasizes trust and reliability
          <HighlightText text={"Your Health, Our Priority"} />
        </div>

       

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
           More Info
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Lets Login 
          </CTAButton>
        </div>

       
        <ExploreMore />
      </div>

      Section 2
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  SignUp now
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/contact"}>
                Contact US
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
         
        </div>
      </div>
    
      <Footer />
    </div>
  )
}

export default Home
