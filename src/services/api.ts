import { Octokit } from "octokit";

class ApiGit {
  octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: "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",
      // baseUrl: "https://api.github.com/",
    });
  }

  async getRepo(owner: string, repo: string) {
    const { data } = await this.octokit.request("GET /repos/${owner}/${repo}", {
      owner: owner,
      repo: repo,
    });
    console.log(data);
    return data;
  }
}

export default ApiGit;
