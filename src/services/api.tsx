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
    return data;
  }
}

export default ApiGit;
