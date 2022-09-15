import React from "react";
import styles from "./sidebar.module.css";
import {
  PhTwitterLogoDuotone,
  PhGithubLogoDuotone,
} from "assets";

import { NavLink } from "react-router-dom";
import { sideNavLinks } from "data";

export function Sidebar() {
  
  return (
    <aside className={styles.sidebar}>
      <ol className='list-unstyled pd-vt-2'>
        {sideNavLinks.map(({ _id, linkTo, linkName, Icon }) => {
          return (
            <li key={_id} className={styles.sidebarMenu}>
              <NavLink
                to={linkTo}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.isNavLinkActive} ${styles.sidebarMenuNavLink}`
                    : `${styles.isNavLinkInactive} ${styles.sidebarMenuNavLink}`
                }
              >
                <span className={styles.sidebarIcon}>{Icon}</span>
                {linkName}
              </NavLink>
            </li>
          );
        })}
      </ol>

      <ol>
        <h3 className='text-center'>Contribute</h3>
        <section className={`list-unstyled ${styles.socialsMenu}`}>
          
          <li className={styles.socialNavLinks}>
            <a
              href='https://github.com/yashraj2312'
              target='_blank'
              rel='noreferrer'
            >
              <PhGithubLogoDuotone />
            </a>
          </li>
          <li className={styles.socialNavLinks}>
            <a
              href='https://twitter.com/mister_bourbon'
              target='_blank'
              rel='noreferrer'
            >
              <PhTwitterLogoDuotone />
            </a>
          </li>
        </section>
      </ol>
    </aside>
  );
}
