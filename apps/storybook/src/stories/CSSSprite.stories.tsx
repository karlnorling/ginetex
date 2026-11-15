import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSymbols, getSymbolsByCategory } from '@ginetex/core';
import { getCssClassName } from '@ginetex/css';

interface GridProps {
  size?: number;
  category?: string;
}

const StyleInjector = ({ size }: { size: number }) => {
  const symbols = getAllSymbols();
  const rules = symbols
    .map((symbol) => {
      const cls = getCssClassName(symbol.id);
      if (!cls) return '';
      return `.${cls} { background-image: url('/assets/${symbol.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`;
    })
    .filter(Boolean)
    .join('\n');

  const sizeRule = `.ginetex-icon { display: inline-block; width: ${size}px; height: ${size}px; }`;
  return <style>{`${rules}\n${sizeRule}`}</style>;
};

const CSSGrid = ({ size = 96, category }: GridProps) => {
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
    <>
      <StyleInjector size={size} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {symbols.map((symbol) => {
          const cls = getCssClassName(symbol.id) ?? '';
          return (
            <div
              key={symbol.id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
            >
              <span
                className={`ginetex-icon ${cls}`}
                role="img"
                aria-label={symbol.name}
                title={symbol.name}
              />
              <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
                {symbol.code}
              </span>
              <span style={{ fontSize: '0.65rem', textAlign: 'center', color: '#888' }}>
                {symbol.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const meta: Meta<GridProps> = {
  title: 'Care Symbols/CSS Sprite',
  component: CSSGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
  },
};

export default meta;

export const Washing: StoryObj<GridProps> = {
  name: 'Washing (wash tub)',
  render: ({ size }) => <CSSGrid size={size} category="washing" />,
  args: { size: 96 },
};

export const Bleaching: StoryObj<GridProps> = {
  name: 'Bleaching (triangle)',
  render: ({ size }) => <CSSGrid size={size} category="bleaching" />,
  args: { size: 96 },
};

export const Drying: StoryObj<GridProps> = {
  name: 'Drying (square)',
  render: ({ size }) => <CSSGrid size={size} category="drying" />,
  args: { size: 96 },
};

export const Ironing: StoryObj<GridProps> = {
  name: 'Ironing (iron)',
  render: ({ size }) => <CSSGrid size={size} category="ironing" />,
  args: { size: 96 },
};

export const ProfessionalCare: StoryObj<GridProps> = {
  name: 'Professional care (circle)',
  render: ({ size }) => <CSSGrid size={size} category="professional-care" />,
  args: { size: 96 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size }) => <CSSGrid size={size} />,
  args: { size: 96 },
};
