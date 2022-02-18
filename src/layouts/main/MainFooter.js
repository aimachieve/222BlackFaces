// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@material-ui/core';
//
// import SvgIconStyle from 'components/SvgIconStyle';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  // background: 'url(/images/footer-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid container item xs={12} md={10}>
            <Grid item xs={12} sx={{display: "flex"}}>
              {/* <img src="/images/hero/logo.svg" alt="logo" style={{width:50, height:70}}/> */}
              <Typography variant="h3" sx={{mt: 1.5, ml: 2, color: 'white'}}>Mekaverse</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{color: 'white'}}>8,888 unique mekas who need drivers.</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack direction="column" justiycontent="center" spacing={2} sx={{mb: 5}} className="footer_link">
              <Link to="/" sx={{color: "white"}}>Home</Link>
              <Link to="#">Terms & Condition</Link>
              <Link to="#">Smart Contract</Link>
            </Stack>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              {/* <Button variant="contained"><SvgIconStyle src="/images/hero/twitter.svg" color="paper" sx={{ width: 30, height: 30 }} /></Button>
              <Button variant="contained"><SvgIconStyle src="/images/hero/opensea.svg" color="paper" sx={{ width: 30, height: 30 }} /></Button>
              <Button variant="contained"><SvgIconStyle src="/images/hero/discord.svg" color="paper" sx={{ width: 30, height: 30 }} /></Button> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ border: '2px solid #ffffff' }} />

      <Typography
        color="white"
        sx={{
          py: 4,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '24px',
          textAlign: 'center',
          fontFamily: 'Poppins'
        }}
      >
        Copyright ©2021 MekaVerse. All Right reserved
      </Typography>
    </RootStyle>
  );
}
