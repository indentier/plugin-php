import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for PHP (.php)
 *
 * - Declaration: `$end=null;`  (PHP variables must be `$`-prefixed)
 * - End statement: `$end`  (the `$` prefix is added automatically)
 * - Insertion index: the line immediately after the `<?php` opening tag
 */
const plugin: IndentierPlugin = {
  extensions: ['.php'],
  rubyCompatible: true,
  declarationTemplate: '$end=null;',
  getEndStatement: (variableName) =>
    variableName.startsWith('$') ? variableName : `$${variableName}`,
  declarationInsertIndex: (lines) => {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i]!.body.trimStart().startsWith('<?')) return i + 1;
    }
    return 0;
  },
};

export default plugin;
