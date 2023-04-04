import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [collapse, setCollapse] = React.useState(true);

  return (
    <div>
      <div onClick={() => setCollapse(!collapse)}>{title}</div>
      {!collapse && <div>{children}</div>}
    </div>
  );
};
