import React from 'react';
import Markdown from 'react-markdown';

const About = ({ content }: any) => {
  return (
    <section>
      <h2 className="text-[26px] text-primary font-light mb-5">
        About this listing
      </h2>
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    </section>
  );
};

export default About;
