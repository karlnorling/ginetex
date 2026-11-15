import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSymbols, getSymbolsByCategory } from '@ginetex/core';

const InlineSprite = () => {
  const [spriteHtml, setSpriteHtml] = React.useState<string>('');

  React.useEffect(() => {
    fetch('/assets/sprites/sprite.svg')
      .then((r) => r.text())
      .then(setSpriteHtml)
      .catch(() => {});
  }, []);

  if (!spriteHtml) return null;
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: spriteHtml }}
    />
  );
};

interface SpriteIconProps {
  id: string;
  label: string;
  size?: number;
}

const SpriteIcon = ({ id, label, size = 96 }: SpriteIconProps) => (
  <svg width={size} height={size} role="img" aria-label={label} style={{ display: 'block' }}>
    <title>{label}</title>
    <use href={`#${id}`} />
  </svg>
);

interface GridProps {
  size?: number;
  category?: string;
}

const SpriteGrid = ({ size = 96, category }: GridProps) => {
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
      <InlineSprite />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {symbols.map((symbol) => (
          <div
            key={symbol.id}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
          >
            <SpriteIcon id={symbol.code.toLowerCase()} label={symbol.name} size={size} />
            <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
              {symbol.code}
            </span>
            <span style={{ fontSize: '0.65rem', textAlign: 'center', color: '#888' }}>
              {symbol.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const SingleSpriteIcon = ({ id, label, size }: SpriteIconProps) => (
  <>
    <InlineSprite />
    <SpriteIcon id={id} label={label} size={size} />
  </>
);

const meta: Meta<GridProps> = {
  title: 'Care Symbols/SVG Sprite',
  component: SpriteGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
  },
};

export default meta;

export const Washing: StoryObj<GridProps> = {
  name: 'Washing (wash tub)',
  render: ({ size }) => <SpriteGrid size={size} category="washing" />,
  args: { size: 96 },
};

export const Bleaching: StoryObj<GridProps> = {
  name: 'Bleaching (triangle)',
  render: ({ size }) => <SpriteGrid size={size} category="bleaching" />,
  args: { size: 96 },
};

export const Drying: StoryObj<GridProps> = {
  name: 'Drying (square)',
  render: ({ size }) => <SpriteGrid size={size} category="drying" />,
  args: { size: 96 },
};

export const Ironing: StoryObj<GridProps> = {
  name: 'Ironing (iron)',
  render: ({ size }) => <SpriteGrid size={size} category="ironing" />,
  args: { size: 96 },
};

export const ProfessionalCare: StoryObj<GridProps> = {
  name: 'Professional care (circle)',
  render: ({ size }) => <SpriteGrid size={size} category="professional-care" />,
  args: { size: 96 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size }) => <SpriteGrid size={size} />,
  args: { size: 96 },
};

export const SingleIcon: StoryObj<SpriteIconProps> = {
  parameters: { layout: 'centered' },
  render: (args) => <SingleSpriteIcon {...args} />,
  args: {
    id: 'wash-30',
    label: 'Wash at or below 30 °C',
    size: 200,
  },
  argTypes: {
    id: { control: 'text', description: 'Symbol code in lowercase, e.g. wash-30, iron-low, do-not-bleach' },
    label: { control: 'text', description: 'Accessible label' },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
