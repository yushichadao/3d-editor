const { spawn } = require('child_process');
const token = process.env.GITEE_TOKEN || '6472887393f6cacd9be2e1140726b298';
const user = process.env.GITEE_USER || 'yushichadao';
const repo = process.env.GITEE_REPO || '3d-editor';
const remoteUrl = `https://${user}:${token}@gitee.com/${user}/${repo}.git`;

console.log('Remote:', remoteUrl.replace(/:.*@/, ':***@'));

const proc = spawn('git', ['remote', 'add', 'gitee', remoteUrl], {
  cwd: __dirname, stdio: 'inherit'
});
proc.on('close', () => {
  const push = spawn('git', ['push', '-u', 'gitee', 'main'], {
    cwd: __dirname, stdio: 'inherit'
  });
  push.on('close', code => process.exit(code));
});
