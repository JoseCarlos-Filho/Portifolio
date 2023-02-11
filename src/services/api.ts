import { Octokit } from "octokit";

class ApiGit {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: "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",
    });
  }

  async getRepositorio(owner: string, repo: string) {
    const { data } = await this.octokit.request("Get /repos/${owner}/${repo}", {
      owner: owner,
      repo: repo,
    });
    console.log(data);
    return data;
  }
}

export default ApiGit;
