import React from 'react';
import styled from '@emotion/styled';
import { cardClassName } from '../LaunchTile/LaunchTile';
import path from 'ramda/src/path';

/** Custom imports */
import { unit } from '../../themes/GlobalStyles/Global';

const Card = styled('div')(cardClassName, {
  height: 365,
  marginBottom: unit * 4,
});

export const LaunchDetail = ({ site, rocket }: any) => {
  return (
    <Card>
      <h3>
        {path(['name'], rocket)} ({path(['type'], rocket)})
      </h3>
      <h5>{site}</h5>
    </Card>
  );
};

export default LaunchDetail;
