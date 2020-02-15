import React from 'react';
import styled from '@emotion/styled';
import { size } from 'polished';

/** Custom imports */
import { unit, colors } from '../../themes/GlobalStyles/Global';
import dog1 from '../../assets/images/dog-1.png';
import dog2 from '../../assets/images/dog-2.png';
import dog3 from '../../assets/images/dog-3.png';

/** Styled components with emotion */
const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: unit * 4.5,
});

const Image = styled('img')(size(134), (props: { round: boolean }) => ({
  marginRight: unit * 2.5,
  borderRadius: props.round ? '50%' : '0%',
}));

const Subheading = styled('h5')({
  marginTop: unit / 2,
  color: colors.textSecondary,
});

/** 25 letters in the alphabet */
const max = 25;
/** Letter A's charcode is 97 */
const offset = 97;
const avatars = [dog1, dog2, dog3];
const maxIndex = avatars.length - 1;

const pickAvatarByEmail = (email: string) => {
  const charCode = email.toLowerCase().charCodeAt(0) - offset;
  const percentile = Math.max(0, Math.min(max, charCode)) / max;
  return avatars[Math.round(maxIndex * percentile)];
};

export interface HeaderProps {
  children?: any;
  image?: string | any;
}

export const Header = ({ image, children = 'Space Explorer' }: HeaderProps) => {
  const email = atob(localStorage.getItem('token') as string);
  const avatar = image || pickAvatarByEmail(email);

  return (
    <Container>
      <Image round={!image} src={avatar} alt="Space dog" />
      <div>
        <h2>{children}</h2>
        <Subheading>{email}em</Subheading>
      </div>
    </Container>
  );
};

export default Header;
