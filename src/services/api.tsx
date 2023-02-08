import { Octokit } from "@octokit/rest";

const apiGit = new Octokit({
  auth: "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",
});

export default apiGit;
