const GITHUB_USERNAME = 'JonathanB0291';

export async function getGitHubRepos() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  const repos = await res.json();
  return repos;
}
