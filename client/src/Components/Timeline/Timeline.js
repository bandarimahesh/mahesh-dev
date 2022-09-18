import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";
const TimelineSection = styled.section`
  width: 100%;
  height: auto;
`;
const TimelineDiv = styled.div`
  padding: 60px 40px;
  width: 75%;
  height: auto;
  margin: 0 auto;
`;
const items = [
  {
    title: "October 2021",
    cardTitle: "Full Stack Web developer",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi magni dicta vero qui deleniti? Dignissimos magni repudiandae blanditiis natus,possimus dolorum numquam illo se eveniet minima autem dolore,necessitatibus, maxime vero obcaecati aspernatur voluptatum ipsum? Eos ut reprehenderit molestiae dicta!",
  },
  {
    title: "May 2019",
    cardTitle: "Graduation",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi magni dicta vero qui deleniti? Dignissimos magni repudiandae blanditiis natus,possimus dolorum numquam illo se eveniet minima autem dolore,necessitatibus, maxime vero obcaecati aspernatur voluptatum ipsum? Eos ut reprehenderit molestiae dicta!",
  },
  {
    title: "May 2016",
    cardTitle: "Diploma",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi magni dicta vero qui deleniti? Dignissimos magni repudiandae blanditiis natus,possimus dolorum numquam illo se eveniet minima autem dolore,necessitatibus, maxime vero obcaecati aspernatur voluptatum ipsum? Eos ut reprehenderit molestiae dicta!",
  },
  {
    title: "May 2013",
    cardTitle: "High School",
    cardDetailedText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi magni dicta vero qui deleniti? Dignissimos magni repudiandae blanditiis natus,possimus dolorum numquam illo se eveniet minima autem dolore,necessitatibus, maxime vero obcaecati aspernatur voluptatum ipsum? Eos ut reprehenderit molestiae dicta!",
  },
];
const Timeline = () => {
  return (
    <TimelineSection>
      <TimelineDiv>
        <Chrono hideControls={true} items={items} mode="VERTICAL_ALTERNATING" />
      </TimelineDiv>
    </TimelineSection>
  );
};

export default Timeline;
