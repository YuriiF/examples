// @ts-nocheck
import React from 'react';
import { Global, css } from '@emotion/core';

const unit = 8;
const colors = {
  primary: '#220a82',
  secondary: '#14cbc4',
  accent: '#e535ab',
  background: '#f7f8fa',
  grey: '#d8d9e0',
  text: '#343c5a',
  textSecondary: '#747790',
};

const GlobalStyles = () => {
  return (
    <Global
      styles={css({
        [['html', 'body']]: {
          height: '100%',
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "'Source Sans Pro', sans-serif",
          backgroundColor: colors.background,
          color: colors.text,
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
        },
        '*': {
          boxSizing: 'border-box',
        },
        [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
          margin: 0,
          fontWeight: 600,
        },
        h1: {
          fontSize: 48,
          lineHeight: 1,
        },
        h2: {
          fontSize: 40,
        },
        h3: {
          fontSize: 24,
          fontFamily: 'serif',
          color: 'green',
        },
        h5: {
          fontSize: 16,
          textTransform: 'uppercase',
        },
      })}
    />
  );
};

export { GlobalStyles, unit, colors };
