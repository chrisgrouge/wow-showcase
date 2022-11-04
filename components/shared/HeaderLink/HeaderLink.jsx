import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const HeaderLinkPropTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

function HeaderLink({ children, href }) {
  const router = useRouter();
  const isSelected = router.pathname === href ? 'selected' : '';


  const handleClick = (e) => {
    e.preventDefault();
    // ! I don't want to navigate to a new page when I click an option in the navigation, I only want to filter the list. But I don't know how yet so I'm going to keep this functionality.
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={isSelected}
    >
      {children}
    </a>
  );
}

HeaderLink.propTypes = HeaderLinkPropTypes;

export default HeaderLink;
