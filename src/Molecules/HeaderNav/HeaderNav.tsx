import React, { ReactElement, useState, ReactNode } from 'react';
import { Button, Drawer } from '@material-ui/core';
import './HeaderNav.scss';
import { useHistory } from 'react-router-dom';


const HeaderNav = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const navigate = (page: string): vo => {
    toggleDrawer(false);
    history.push(`/#/${page}`);
  };

  const list = (): ReactNode => (
    <>
      <Button className="nav-button" color="primary" onClick={(): void => navigate('killer')}>Killer</Button>
      <Button className="nav-button" color="primary" onClick={(): void => navigate('survivor')}>Survivor</Button>
      <Button className="nav-button" color="primary" onClick={(): void => navigate('data')}>Data</Button>
    </>
  );

  return (
    <div className="header-nav">
      <div className="desktop">
        {list()}
      </div>
      <div className="mobile">
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button color="secondary" onClick={toggleDrawer(true)}>{anchor}</Button>
            <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeaderNav;
