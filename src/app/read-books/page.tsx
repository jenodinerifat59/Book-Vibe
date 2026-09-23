'use client';

import { useContext } from 'react';
import type { BookType } from '@/app/type/BookType';
import { BookContext } from '@/context/BookContex';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  type BarShapeProps,
  LabelList,
  Label,
  type LabelProps,
  Tooltip,
} from 'recharts';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  'red',
  'pink',
  'black',
];

// Data type
type ChartData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
  C${x + width / 3},${y + height}
  ${x + width / 2},${y + height / 3}
  ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3}
  ${x + (2 * width) / 3},${y + height}
  ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const {
    x,
    y,
    width,
    height,
    index = 0,
  } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const Page = () => {
  const { readBook } = useContext(BookContext) as {
    readBook: BookType[];
  };

  const data: ChartData[] = readBook.map(
    (book: BookType, ind: number): ChartData => {
      return {
        name: book.bookName,
        uv: book.totalPages,
        pv: ind + 1,
        amt: ind + 1,
      };
    }
  );

  return (
    <div className="container mx-auto text-center py-5">
      <BarChart
        style={{
          width: '100%',
          maxWidth: '700px',
          maxHeight: '70vh',
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid />

        <Tooltip cursor={{ fillOpacity: 0.5 }} />

        <XAxis dataKey="name" />

        <YAxis width="auto" />

        <Bar
          dataKey="uv"
          shape={TriangleBar}
          activeBar
        >
          <LabelList
            content={CustomColorLabel}
            position="top"
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default Page;