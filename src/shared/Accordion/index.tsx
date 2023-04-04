import { useState } from 'react';

import styles from './Accordion.module.scss';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={() => setCollapse(!collapse)}>
        {title}
      </div>
      {!collapse && <div>{children}</div>}
    </div>
  );
};
