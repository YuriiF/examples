import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { unit } from '../../themes/GlobalStyles/Global';
import { css } from '@emotion/core';

export const cardClassName = css({
  padding: `${unit * 2}px ${unit * 3}px`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRight: 'none',
  borderLeft: 'none',
  borderBottom: 'none',
  borderTop: '3px solid #666666',
});

const padding = unit * 2;

const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  minHeight: 120,
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding,
  },
});

export interface LaunchTileProps {}

export const LaunchTile = ({ launch }: any) => {
  const { id, mission, rocket } = launch;
  return (
    <StyledLink to={`/launch/${id}`}>
      <h3>{mission.name}</h3>
      <h5>{rocket.name}</h5>
    </StyledLink>
  );
};

export default LaunchTile;
