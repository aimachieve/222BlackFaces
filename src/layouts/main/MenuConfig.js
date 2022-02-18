import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'NFTs',
    path: '/nfts/all',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'GIVEAWAYS',
    path: '/#giveaways',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'UTILITY',
    path: '/#utility',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'ABOUT UZOMA',
    path: '/#about',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'FAQ',
    path: '/#faq',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  }
  // { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
