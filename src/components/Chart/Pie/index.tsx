import { useState, useEffect } from 'react';
import lodash from 'lodash';
import { Chart } from 'react-google-charts';

import { ManufacturerDataProps } from '../pieChartData';

import * as s from './styles';

export type PieProps = {
  data: ManufacturerDataProps[];
};

type PieChartDataType = (string | number)[][];

const Pie = ({ data }: PieProps) => {
  const [pieChartData, setPieChartData] = useState<PieChartDataType>([]);

  const getFormattedData = (data: ManufacturerDataProps[]) => {
    const groupedValues = lodash.groupBy(data, (value) => value.manufacturer);
    const formattedValues = lodash.map(groupedValues, (value, key) => {
      return [
        key,
        lodash.sumBy(groupedValues[key], (summedItem) => summedItem.sales)
      ];
    });

    return [['Manufacturer', 'Sales'], ...formattedValues];
  };

  useEffect(() => {
    setPieChartData(getFormattedData(data));
  }, [data]);
  return (
    <s.Wrapper aria-label="Pie component">
      <Chart
        chartType="PieChart"
        data={pieChartData}
        width={'100%'}
        height={'400px'}
      />
    </s.Wrapper>
  );
};

export default Pie;
