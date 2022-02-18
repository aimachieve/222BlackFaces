// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
// import { useState, useEffect } from "react";
// import {connectWallet } from "../../src/utils/interact"
import {
  LandingHero,
  LandingNFT
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: "#221f20"
}));

// ----------------------------------------------------------------------

export default function NFTsPage() {
  return (
    <RootStyle title="Black Faces" id="move_top">
      <LandingHero />
      <ContentStyle>
        {/* Title */}
        <LandingNFT />
      </ContentStyle>
    </RootStyle>
  );
}
