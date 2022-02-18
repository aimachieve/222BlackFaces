// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
// import { useState, useEffect } from "react";
// import {connectWallet } from "../../src/utils/interact"
import {
  LandingHero,
  LandingMintNFT,
  LandingRoadmap,
  LandingEquipment,
  LandingAbout,
  LandingTeam,
  LandingGiveaways,
  LandingDamage
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

export default function LandingPage() {
  // const [walletAddress, setWalletAddress] = useState("");
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {
  //   const result = await connectWallet();
  //   setWalletAddress(result.address);
  //   console.log("landingpage->useEffect",result.address);
  //  }, []);

  return (
    <RootStyle title="222BlackFaces" id="move_top">
      <LandingHero />
      <ContentStyle>
        {/* Title */}
        <LandingAbout />
        {/* Mint NFT section */}
        <LandingMintNFT />
        {/* Giveaways */}
        <LandingGiveaways />
        {/* Utility */}
        <LandingRoadmap />
        {/* Uzoma Dunkwu */}
        <LandingTeam />
        {/* Chief Square /> */}
        <LandingEquipment />
        {/* FAQ */}
        <LandingDamage />
      </ContentStyle>
    </RootStyle>
  );
}
