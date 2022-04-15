import { Chart, Container } from 'components';

import { manufacturerDataMock } from 'components/Chart/pieChartData';

import * as s from './styles';

export default function Home() {
  return (
    <s.Wrapper>
      <Container>
        <Chart.Pie data={manufacturerDataMock} />
      </Container>
    </s.Wrapper>
  );
}
