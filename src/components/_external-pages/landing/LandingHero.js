import { motion } from 'framer-motion';
import Header from '../../../layouts/main/MainNavbar'
// material
import { styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
// routes
//
import { varWrapEnter } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    display: 'flex',
    // position: 'fixed',
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <Header />

        </Container>
      </RootStyle>
    </>
  );
}
