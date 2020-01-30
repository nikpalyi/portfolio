import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Nikolett, based in Dublin. I'm a junior fronted
          developer with experience in React, CSS, HTML, SQL.
        </p>

        <p>
          My dream is to continut my journey on web development and become an
          expert to help on StackOverFlow people struggling on coding.
        </p>

        <p>
          I'm constantly learning new things. currently those things include
          gaining more experience with Java, Spring, Angular and more React.
        </p>

        <p>
          After shifting my career from IT support to web development, proving
          great adaptability, versatility and ability to acquire new technical
          skills, my goal is to help my team to get the best out of them,
          inspiring and able to turn ideas into reality. I believe in
          collaboration and sharing.
        </p>

        <p>
          I have a Master Degree from University of Fine Arts and a Higher
          Diploma from National College. Last year I worked with with a super
          collaborative and creative team at Wipro Digital with UX designers,
          project managers, and back-end engineers to implement versatile
          front-end solutions to web development issues in Scrum.
        </p>
        <p>
          In my spare time I go out in the nature, mostly in the Wicklow
          mountains and I cycle everyday.{' '}
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
