import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, unit } from '../../themes/GlobalStyles/Global';
import { Link } from 'react-router-dom';

export interface MenuItemProps {}

export const menuItemClassName = css({
  flexGrow: 1,
  width: 0,
  fontFamily: 'inherit',
  fontSize: 20,
  color: 'inherit',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  textAlign: 'center',
  svg: {
    display: 'block',
    width: 60,
    margin: `0 auto ${unit}px`,
    fill: colors.secondary,
  },
});

export const MenuItem = styled(Link)(menuItemClassName, {
  textDecoration: 'none',
});

export default MenuItem;
