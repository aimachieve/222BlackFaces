// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Stack, Container, Typography, Button, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import VideoLooper from 'react-video-looper'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(14, 0, 14, 0),
  // background: 'url(/images/about-bg.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right'
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <RootStyle>
      <img src="/assets/separator1.png" alt="separator1" />
      <img src="/assets/222BF_banner.jpg" alt="separator1" style={{width: '100%'}} />
      <Container maxWidth="lg">
        <Stack alignItems="center" justifyContent={'center'} mt={5} spacing={5}>
          <MotionInView variants={varFadeInUp}>
            <img src="/assets/title1.png" alt="title1" style={{ width: '800px' }} />
          </MotionInView>

          <VideoLooper
            source="/assets/bg.mp4"
            autoplay={true}
            loop
            start={1}
            width={isDesktop ? '900px' : '100%'}
            height={isDesktop ? "500px" : '200px'}
            style={{
              backgroundColor: '#221f20'
            }}
          />

          <Typography sx={{
            fontFamily: 'Arvo',
            color: 'white'
          }}>
            <b> <i>222 Black Faces </i> </b> is a digital art collection of black faces made from March 2019 to December 2021 by Uzoma Dunkwu. They were shared on his social media through his journey of growth as a self-taught artist in the animation industry from Nigeria. All artworks in this collection took 500+ hours to create and have a combined reach of over 7 million on Instagram, LinkedIn and Twitter. Also, each NFT in this collection grants access to special giveaway contents after purchase.
          </Typography>

          <Button id="mint" href="https://opensea.io/collection/222blackfaces/" target="_blank" sx={{
            backgroundColor: '#dc3d30',
            color: 'white',
            fontFamily: 'Arvo',
            width: '200px',
            height: '60px',
            borderRadius: '10px',
          }}>
            BUY NOW
          </Button>
        </Stack>
      </Container>
    </RootStyle>
  );
}
