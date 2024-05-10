import Community from '@/components/organisms/Community';
import Exclusives from '@/components/organisms/Exclusives';
import Extracts from '@/components/organisms/Extracts';
import GiftBox from '@/components/organisms/GiftBox';
import HallMarks from '@/components/organisms/HallMarks';
import KeyHighlights from '@/components/organisms/KeyHighlights';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <KeyHighlights />
      <HallMarks />
      <Extracts />
      <GiftBox />
      <Community />
      <Exclusives />
    </>
  );
};

export default HomePage;
