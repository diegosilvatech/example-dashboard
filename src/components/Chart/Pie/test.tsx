import { screen } from '@testing-library/react';
import { renderWithTheme } from 'helpers/tests/renderWithTheme';

import Pie from '.';

describe('<Pie />', () => {
  it('should render the Pie component', () => {
    renderWithTheme(<Pie />);

    expect(screen.getByLabelText('Pie component')).toBeInTheDocument();
  });
});
