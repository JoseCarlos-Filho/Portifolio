import { Octokit } from "octokit";

class ApiGit {
  octokit: Octokit;
  static octokit: any;

  constructor() {
    this.octokit = new Octokit({
      auth: "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",
    });
  }

  // async getRepo() {
  //   const { data } = await this.octokit.request(
  //     "GET /repos/josecarlos-filho/Barbearia-Alura",
  //     {
  //       owner: "josecarlos-filho",
  //       repo: "Barbearia-Alura",
  //     }
  //   );
  //   console.log(data);
  //   return data;
  // }
}

export default ApiGit;
