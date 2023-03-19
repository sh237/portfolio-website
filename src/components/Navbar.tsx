import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='fixed'
        style={{ alignItems: 'center', backgroundColor: '#D6D6D6'}}
      >
        <Toolbar>
          <AnchorLink href='#about' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button>
              ABOUT
            </Button>
          </AnchorLink>
          <AnchorLink href='#career' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
            Career
            </Button>
          </AnchorLink>
          <AnchorLink href='#skills' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              SKILLS
            </Button>
          </AnchorLink>
          <AnchorLink href='#works' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              Works
            </Button>
          </AnchorLink>
          <AnchorLink href='#contact' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
            CONTACT
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;