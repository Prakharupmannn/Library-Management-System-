import { execSync } from 'child_process';
import fs from 'fs';

try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('Build succeeded');
} catch (e) {
  const output = (e.stdout ? e.stdout.toString() : '') + '\n' + (e.stderr ? e.stderr.toString() : '');
  fs.writeFileSync('build-error.txt', output, 'utf8');
  console.log('Build failed, wrote to build-error.txt');
}
