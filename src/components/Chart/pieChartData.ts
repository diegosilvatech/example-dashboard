export type ManufacturerDataProps = {
  manufacturer: string;
  model: string;
  sales: number;
};

export const manufacturerDataMock: ManufacturerDataProps[] = [
  {
    manufacturer: 'Ford',
    model: 'Ka',
    sales: 3
  },
  {
    manufacturer: 'Ford',
    model: 'Fiesta',
    sales: 10
  },
  {
    manufacturer: 'Ford',
    model: 'Focus',
    sales: 5
  },
  {
    manufacturer: 'Ford',
    model: 'Mustang',
    sales: 1
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    sales: 10
  },
  {
    manufacturer: 'Honda',
    model: 'Fit',
    sales: 50
  },
  {
    manufacturer: 'Toyota',
    model: 'Corola',
    sales: 70
  },
  {
    manufacturer: 'Toyota',
    model: 'Etios',
    sales: 20
  },
  {
    manufacturer: 'Volks',
    model: 'Gol',
    sales: 100
  }
];
