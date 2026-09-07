const GITHUB_WEB_URL = 'https://github.com/';

export const getGitHubUrl = (value) => {
  if (!value) return '';

  const githubPath = value
    .trim()
    .replace(/^https?:\/\/(?:www\.)?github\.com\//i, '')
    .replace(/^github\.com\//i, '')
    .replace(/^\/+/, '');

  return new URL(githubPath, GITHUB_WEB_URL).href;
};
