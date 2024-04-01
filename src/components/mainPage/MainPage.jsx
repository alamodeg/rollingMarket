import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';


//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    product: 'Leche Nido',
    description: 'Leche descremada larga vida La Serenísima cero lactosa 1L adicionada con oligofructosa e insulina. Libre de gluten. sin TAC',
    stock: 2,
    modifiedDate: '15-03-2004',
  },
  {
    product: ' Gaseosa Coca Cola',
    description: 'Coca-cola Zero 2,25 Lt',
    stock: 15,
    modifiedDate: '15-03-2005',
  },
  {
    product: 'Martillo Galponero',
    description: 'Martillo Galponero "Mc Carthy"',
    stock: 37,
    modifiedDate: '01-01-2001',
  },
  {
    product: 'Silla de Oficina',
    description: 'Silla De Oficina "Turin" 50x52x97 cm',
    stock: 18,
    modifiedDate: '05-07-2015',
  },
  {
    product: 'Libro "La Saga De Los Confines"',
    description: 'Editorial PHL, en español con 480 hojas a color',
    stock: 17,
    modifiedDate: '20-08-2008',
  },
  {
    product: 'Alimento para perros "Pedigree"',
    description: 'Pedigree 15 kg para adultos carne, pollo y cereales',
    stock: 0,
    modifiedDate: '14-03-2024',
  },
];

const MainPage = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'product', //normal accessorKey
        header: 'Productos',
        size: 150,
      },
      {
        accessorKey: 'description',
        header: 'Descripcion',
        size: 150,
      },
      {
        accessorKey: 'stock',
        header: 'Stock',
        size: 50,
        enableColumnFilter: false,
        muiTableHeadCellProps: {
            align: 'center',
          },
          muiTableBodyCellProps: {
            align: 'center',
          },
      },
      {
        accessorKey: 'categoria',
        header: 'Categoria',
        size: 150,
        filterSelectOptions: ['Bebidas', 'Limpieza', 'Herramientras & Hogar', 'Mascotas','Muebles','Entretenimiento'],
        filterVariant: 'multi-select'

        
      },
      {
        accessorKey: 'modifiedDate',
        header: 'Fecha Modificacion:',
        size: 150,

      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnOrdering : true,
    enableRowSelection: true,
    initialState: { showColumnFilters: false },

    muiFilterTextFieldProps: {

      sx: { m: '0.5rem 0', width: '100%' },

      variant: 'outlined',

    },

    //align header & cells
    muiTableHeadCellProps: {align: 'center', },
    muiTableBodyCellProps: {align: 'center', },

    enableColumnActions: false,
    
  });

  return <MaterialReactTable table={table} />;
};

export default MainPage;