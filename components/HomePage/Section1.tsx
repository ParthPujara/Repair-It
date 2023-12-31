import { TypeAnimation } from "react-type-animation";
import CashOnDelivery from "../../public/Home Animations/CashOnDelivery.mp4";
import OnPointDelivery from "../../public/Home Animations/OnPointDelivery.mp4";
import D2DDelivery from "../../public/Home Animations/D2DDelivery.mp4";
import CountUp from "react-countup";

const Section1 = () => {
    return (
    <div>
      <div className="home_section1">
        <video
          src={D2DDelivery}
          autoPlay
          loop
          muted
          playsInline
          className="home_section1_top_video"
        />
        <div className="home_section1_left flex justify-center items-center flex-col text-center">
          We repair
          <TypeAnimation
            sequence={["Mobile...", 1000, "Laptop...", 1000]}
            wrapper="span"
            speed={20}
            deletionSpeed={10}
            style={{ color: "#ff4d72" }}
            repeat={Infinity}
            className=""
          />
        </div>
        <div className="home_section1_right">
          {/* <video
          src={gif}
          autoPlay
          loop
          muted
          playsInline
          className="home_section1_right_video"
        /> */}
        </div>
      </div>

      <div className="home_section2">
        <div className="home_heading">Our Services</div>
        <div className="home_section2_cashOnDelivery flex justify-around items-center">
          <div className="home_section2_cashOnDelivery_content flex flex-col">
            <div className="home_section2_cashOnDelivery_heading">
              Cash On Delivery
            </div>
            <div className="home_section2_cashOnDelivery_description">
              We deliver the products at your door step.
            </div>
          </div>
          <div className="home_section2_cashOnDelivery_gif">
            <video
              src={CashOnDelivery}
              autoPlay
              loop
              muted
              playsInline
              className="home_section1_right_video"
            />
          </div>
        </div>
        <div className="home_section2_onPointDelievery flex items-center justify-between">
          <div className="home_section2_onPointDelievery_gif">
            <video
              src={OnPointDelivery}
              autoPlay
              loop
              muted
              playsInline
              className="home_section1_right_video"
            />
          </div>
          <div className="home_section2_onPointDelievery_content flex flex-col">
            <div className="home_section2_onPointDelievery_heading">
              On Point Delivery
            </div>
            <div className="home_section2_onPointDelievery_description">
              We deliver the products at your door step.
            </div>
          </div>
        </div>
        {/* <div className="home_section2_services_cards">
          <div className="card">
          <Card className="mt-6 w-96">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-black"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <Typography variant="h5" color="black" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography color="black">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
          </div>
        </div> */}
      </div>

      <div className="home_section3">
        <div className="home_heading">Our Users</div>
        <div className="home_section3_counters flex justify-center gap-[50px] flex-wrap">
          <div className="mobile_counter">
            <div className="logo flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="mobile_svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <CountUp
              start={0}
              end={1000}
              className="counter"
              delay={1}
              duration={5}
              separator=","
              useEasing={true}
              enableScrollSpy={true}
            />
            <span className="counter">+</span>
          </div>
          <div className="mobile_counter">
            <div className="logo flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="mobile_svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <CountUp
              start={0}
              end={1000}
              className="counter"
              delay={1}
              duration={5}
              separator=","
              useEasing={true}
              enableScrollSpy={true}
            />
            <span className="counter">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
