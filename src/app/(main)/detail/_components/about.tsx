import React from 'react';

const About = ({ content }: any) => {
  return (
    <section>
      <h2 className="text-[26px] text-primary font-light mb-5">
        About this listing
      </h2>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  );
};

export default About;
