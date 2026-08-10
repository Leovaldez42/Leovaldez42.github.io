import React from 'react'

import styles from './index.module.sass'
import reactIcon from '../../assets/icons/react.svg?raw'
import reduxIcon from '../../assets/icons/redux.svg?raw'
import djangoIcon from '../../assets/icons/django.svg?raw'
import sassIcon from '../../assets/icons/sass.svg?raw'

const LOGOS = [
  { label: 'React', svg: reactIcon },
  { label: 'Redux', svg: reduxIcon },
  { label: 'Django', svg: djangoIcon },
  { label: 'Sass', svg: sassIcon },
]

class Skills extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className={styles.logoContainer}>
        {LOGOS.map((tech) => (
          <span
            key={tech.label}
            className={styles.icon}
            role="img"
            aria-label={tech.label}
            dangerouslySetInnerHTML={{ __html: tech.svg }}
          />
        ))}
      </div>
    )
  }
}

export default Skills
