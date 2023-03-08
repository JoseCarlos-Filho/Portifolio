import { Octokit } from "octokit";

class ApiGit {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.APIGITHUB,
    });
  }

  async getRepositorio(owner: string, repo: string) {
    const { data } = await this.octokit.request(`Get /repos/${owner}/${repo}`, {
      owner: owner,
      repo: repo,
    });
    // console.log(data);
    return data;
  }

  async listRepos(username: string) {
    const { data } = await this.octokit.request(
      `GET /users/${username}/repos`,
      {
        username: username,
        per_page: 6,
      }
    );
    // console.log(data);
    return data;
  }
}

export default ApiGit;
