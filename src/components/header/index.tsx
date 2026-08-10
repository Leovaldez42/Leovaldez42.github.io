import React, { ChangeEventHandler } from 'react'

import ThemeSwitch from '../theme-switch'
import Diamond from '../diamond'
import { SHORT_NAME } from '../../consts'

import container from '../../styles/container.module.sass'
import styles from './index.module.sass'

interface Props {
  checked: boolean
  themeChange: ChangeEventHandler<HTMLInputElement>
}

class Header extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <div className={styles.headerContainer}>
        <div className={container.container}>
          <div className={styles.headerTitle}>
            <div className={styles.shortName}>{SHORT_NAME}</div>
            <Diamond styleName={styles.headerDiamond} />
            <ThemeSwitch
              themeChange={this.props.themeChange}
              checked={this.props.checked}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
