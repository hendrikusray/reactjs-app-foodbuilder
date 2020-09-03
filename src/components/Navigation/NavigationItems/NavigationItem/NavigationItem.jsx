import React from 'react';
import clasess from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={clasess.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? clasess.active : null}
    >
      {props.children}

    </a>
  </li>
);

export default navigationItem;
