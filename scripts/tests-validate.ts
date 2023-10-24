import { readFile } from 'fs';
import { globSync } from 'glob';

(function main() {
  const files = globSync('**/*.test.ts');
  files.forEach((file) => {
    readFile(file, (err, data) => {
      if (err) throw err;
      const contents = data.toString();
      const hasBrowserGroup = contents.indexOf('@group browser') !== -1;
      const hasNodeGroup = contents.indexOf('@group node') !== -1;

      if (!hasBrowserGroup && !hasNodeGroup) {
        throw new Error(`Test file does not contain a test environment configuration: ${file}`);
      }
    });
  });
})();