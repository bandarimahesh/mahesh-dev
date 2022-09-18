import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
const data = [
  {
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus adipisci officia, unde voluptatem doloremque autem repudiandae eum totam doloribus? Praesentium amet deleniti at expedita eos tempora nemo nulla illum numquam officia minus asperiores quaerat fugit voluptate est, odit ducimus consequatur ex facere dolorum libero, fuga ipsam! Possimus, totam odit!",
  },
  {
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus adipisci officia, unde voluptatem doloremque autem repudiandae eum totam doloribus? Praesentium amet deleniti at expedita eos tempora nemo nulla illum numquam officia minus asperiores quaerat fugit voluptate est, odit ducimus consequatur ex facere dolorum libero, fuga ipsam! Possimus, totam odit!",
  },
  {
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus adipisci officia, unde voluptatem doloremque autem repudiandae eum totam doloribus? Praesentium amet deleniti at expedita eos tempora nemo nulla illum numquam officia minus asperiores quaerat fugit voluptate est, odit ducimus consequatur ex facere dolorum libero, fuga ipsam! Possimus, totam odit!",
  },
  {
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus adipisci officia, unde voluptatem doloremque autem repudiandae eum totam doloribus? Praesentium amet deleniti at expedita eos tempora nemo nulla illum numquam officia minus asperiores quaerat fugit voluptate est, odit ducimus consequatur ex facere dolorum libero, fuga ipsam! Possimus, totam odit!",
  },
];
const About = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div>
      {/* <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        {data.map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid gray",
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              {_.data}
            </div>
          </Step>
        ))}
      </Scrollama> */}
    </div>
  );
};

export default About;
