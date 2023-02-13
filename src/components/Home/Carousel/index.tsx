import { FunctionComponent, useEffect, useState, useRef } from "react";
import "./carousel.scss";
import { СarouselType } from "../../../types/home";
import { nightTheme } from "../../../data/constants";

const Сarousel: FunctionComponent<СarouselType> = ({
  accentColor,
  isNavbarNightMode,
}: СarouselType) => {
  const testimonial = ["1", "2", "3"];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const backgroundColor = nightTheme.background.element;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    /* eslint-enable */
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="section-testimonial">
      <div className="container">
        <div className="section-testimonial-title">
          <span className="title-design">TESTIMONIALS</span>
          <h2 className="testimonial-title">
            +100500 Companies and People who have used TieConfigurator
          </h2>
        </div>
        <div className="carousel">
          <div className="slideshow">
            <div className="carousel-wrapper">
              <div
                className=" slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                <div className="slide testimonial-item">
                  <div className="testimonial-item__wrapper">
                    <div className="user-wrapper">
                      <div className="icon-one"></div>
                      <div className="user-info">
                        <p className="name-user">John Malcovich</p>
                        <p className="name-user-job">Chimney Sweep On Call</p>
                      </div>
                    </div>
                    <p className="testimonial-text">
                      Hi--The tie I just purchased is for a young friend's
                      January birthday. The black tie I bought him last year
                      with the musical notes was a first-rate home run, so I
                      have every expectation that this year's blue tie with the
                      la crosse pattern will be another smashing success!
                    </p>
                  </div>
                </div>
                <div className="slide testimonial-item">
                  <div className="testimonial-item__wrapper">
                    <div className="user-wrapper">
                      <div className="icon-two"></div>
                      <div className="user-info">
                        <p className="name-user">Lisa Jeffrey</p>
                        <p className="name-user-job">Manager</p>
                      </div>
                    </div>
                    <p className="testimonial-text">
                      Thank you,TiesCreator.com,for being amazing!I placed my
                      second order with this website for a tie for my BF to
                      match my dress, and both have matched perfectly! This
                      website has the best, most affordable, most diverse
                      selection of ties with excellent customer service.
                    </p>
                  </div>
                </div>
                <div className="slide testimonial-item">
                  <div className="testimonial-item__wrapper">
                    <div className="user-wrapper">
                      <div className="icon-tree"></div>
                      <div className="user-info">
                        <p className="name-user">Billy Bones</p>
                        <p className="name-user-job">Donut Baker</p>
                      </div>
                    </div>
                    <p className="testimonial-text">
                      I love your company and love your great ties. The person
                      on the phone was so helpful and courteous. The tie arrived
                      so quickly and was wonderful. In this day and age, it's so
                      nice to see such dedication and hard work to create and
                      sustain a great company. Thanks!
                    </p>
                  </div>
                </div>
              </div>

              <div className="slideshowDots">
                {testimonial.map((_, idx) => (
                  <div
                    key={idx}
                    className="slideshowDot"
                    style={{
                      backgroundColor: isNavbarNightMode
                        ? backgroundColor
                        : index === idx
                        ? accentColor.static
                        : "#959393",
                    }}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Сarousel;
