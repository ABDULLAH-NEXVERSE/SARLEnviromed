/**
 * Generates an SVG path for an industrial spur cog gear
 */
export function getGearPath(
  cx: number,
  cy: number,
  ro: number,
  rb: number,
  hole: number,
  n: number
): string {
  const P = (r: number, a: number) => [
    (cx + r * Math.cos(a)).toFixed(2),
    (cy + r * Math.sin(a)).toFixed(2)
  ];
  const step = (2 * Math.PI) / n;
  const base = step * 0.36;
  const tip = step * 0.22;
  let d = '';

  for (let i = 0; i < n; i++) {
    const a = i * step - Math.PI / 2;
    const pts = [
      P(rb, a - base),
      P(ro, a - tip),
      P(ro, a + tip),
      P(rb, a + base)
    ];
    d += (i ? 'L' : 'M') + pts.map(p => p.join(' ')).join('L');
  }
  d += 'Z';
  d += `M${cx + hole} ${cy}A${hole} ${hole} 0 1 0 ${cx - hole} ${cy}A${hole} ${hole} 0 1 0 ${cx + hole} ${cy}Z`;
  return d;
}

/**
 * Generates a smooth sine wave path connecting step nodes
 */
export function getTimelineWavePath(width = 1200, height = 112, amplitude = 26, offsetY = 56): string {
  const pts: string[] = [];
  const segments = 120;
  for (let i = 0; i <= segments; i++) {
    const x = i / segments;
    const px = (x * width).toFixed(1);
    const py = (offsetY + amplitude * Math.cos(2 * Math.PI * 1.5 * x)).toFixed(1);
    pts.push(`${px} ${py}`);
  }
  return 'M' + pts.join('L');
}
