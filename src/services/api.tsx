import { Octokit } from "octokit";

class ApiGit {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: "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",
    });
  }

  async getRepositorio(owner: string, repo: string) {
    const { data } = await this.octokit.request(`Get /repos/${owner}/${repo}`, {
      owner: owner,
      repo: repo,
    });
    console.log(data);
    // return data;
  }

  async listRepos(username: string) {
    const { data } = await this.octokit.request(
      `GET /users/${username}/repos`,
      {
        username: username,
      }
    );
    console.log(data);
    // return data;
  }
}

export default ApiGit;
