import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SymbolById } from '@ginetex/react';
import { getAllSymbols, getSymbolsByCategory } from '@ginetex/core';

interface GridProps {
  size?: number;
  category?: string;
}

const SymbolGrid = ({ size = 96, category }: GridProps) => {
  const symbols = category
    ? getSymbolsByCategory(category as Parameters<typeof getSymbolsByCategory>[0])
    : getAllSymbols();

  if (symbols.length === 0) {
    return (
      <p style={{ color: '#888', fontFamily: 'sans-serif' }}>
        No symbols loaded. Run <code>yarn update</code> to populate symbol data.
      </p>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding: '1rem',
        alignItems: 'flex-start',
      }}
    >
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          title={`${symbol.code} — ${symbol.name}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            width: size + 16,
          }}
        >
          <SymbolById id={symbol.id} width={size} height={size} />
          <span style={{ fontSize: '0.6rem', textAlign: 'center', color: '#555', lineHeight: 1.2 }}>
            {symbol.code}
          </span>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof SymbolById> = {
  title: 'Care Symbols/React Components',
  component: SymbolById,
  parameters: { layout: 'centered' },
  argTypes: {
    id: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SymbolById>;

export const Wash30: Story = {
  args: { id: 'wash-30', width: 128 },
};

export const DoNotTumbleDry: Story = {
  args: { id: 'do-not-tumble-dry', width: 128 },
};

export const UnknownId: Story = {
  args: { id: 'not-a-real-symbol', width: 128 },
};

export const Washing: StoryObj<GridProps> = {
  name: 'Washing (wash tub)',
  render: ({ size }) => <SymbolGrid size={size} category="washing" />,
  args: { size: 96 },
};

export const Bleaching: StoryObj<GridProps> = {
  name: 'Bleaching (triangle)',
  render: ({ size }) => <SymbolGrid size={size} category="bleaching" />,
  args: { size: 96 },
};

export const Drying: StoryObj<GridProps> = {
  name: 'Drying (square)',
  render: ({ size }) => <SymbolGrid size={size} category="drying" />,
  args: { size: 96 },
};

export const Ironing: StoryObj<GridProps> = {
  name: 'Ironing (iron)',
  render: ({ size }) => <SymbolGrid size={size} category="ironing" />,
  args: { size: 96 },
};

export const ProfessionalCare: StoryObj<GridProps> = {
  name: 'Professional care (circle)',
  render: ({ size }) => <SymbolGrid size={size} category="professional-care" />,
  args: { size: 96 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size }) => <SymbolGrid size={size} />,
  args: { size: 96 },
};
