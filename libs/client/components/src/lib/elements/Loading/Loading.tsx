import styled from '@emotion/styled';
import { Spinner } from 'evergreen-ui';
import { colors } from '../../themes/GlobalStyles/Global';
import { size } from 'polished';

export const Loading = styled(Spinner)(size(48), {
  display: 'block',
  margin: 'auto',
  fill: colors.grey,
});

export default Loading;
