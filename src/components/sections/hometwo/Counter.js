import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterblock = [
  { icon: "flaticon-graphic", count: "100", title: "Project Completed" },
  { icon: "flaticon-plan", count: "500", title: "Satisfied Clients" },
  { icon: "flaticon-target-1", count: "5", title: "International Awards" },
  { icon: "flaticon-teamwork", count: "10", title: "Expert Team Members" },
];
export default function Counter() {
  const [focus, setFocus] = React.useState(false);
  return (
    <section className="fact-section-two">
      <div className="container">
        <div className="fact-two-inner">
          <div className="fact-boxes row justify-content-between align-items-center">
            {counterblock.map((item, i) => (
              <div key={i} className="col-lg-3 col-6">
                <div className="fact-box fact-box-two text-center mb-40">
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <CountUp
                    start={focus ? 0 : null}
                    end={parseInt(item.count)}
                    duration={5}
                    redraw={true}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span className="counter" ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setFocus(true);
                            }
                          }}
                        >
                          <span className="plus-icon">+</span>
                        </VisibilitySensor>
                      </div>
                    )}
                  </CountUp>
                  <p className="title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
