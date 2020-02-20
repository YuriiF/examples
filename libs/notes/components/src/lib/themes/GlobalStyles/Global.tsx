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
        [`[role=dialog]`]: {
          borderRadius: '0 !important',
          minWidth: '120px',
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
      })}
    />
  );
};

export { GlobalStyles, unit, colors };
