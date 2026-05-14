import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-php', () => {
  it('registers .php extension', () => {
    expect(plugin.extensions).toContain('.php');
  });

  it('is ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(true);
  });

  it('formats a PHP file: $end=null; after <?php, $end as end statement', () => {
    const input = '<?php\nfunction f() {\n  return 1;\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.php',
      plugin,
    );

    expect(out).toContain('$end=null;');
    // Declaration must come after <?php
    const lines = out.split('\n');
    expect(lines[0]!.trim()).toBe('<?php');
    // End statements use $end
    expect(lines.some((l) => l.trim() === '$end')).toBe(true);
    expect(lines.some((l) => l.trim() === 'end')).toBe(false);
  });

  it('getEndStatement adds $ prefix when missing', () => {
    expect(plugin.getEndStatement!('end')).toBe('$end');
    expect(plugin.getEndStatement!('$end')).toBe('$end');
    expect(plugin.getEndStatement!('fin')).toBe('$fin');
  });

  it('respects custom variableName', () => {
    const input = '<?php\nfunction f() {\n  return 1;\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', ruby: { variableName: 'fin' }, minColumn: 60, offset: 4 }),
      '.php',
      plugin,
    );
    expect(out).toContain('$fin=null;');
    expect(out.split('\n').some((l) => l.trim() === '$fin')).toBe(true);
  });

  it('idempotent: formatting twice gives the same result', () => {
    const input = '<?php\nfunction f() {\n  return 1;\n}\n';
    const opts = resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 });
    const first = format(input, opts, '.php', plugin);
    const second = format(first, opts, '.php', plugin);
    expect(second).toBe(first);
  });
});
