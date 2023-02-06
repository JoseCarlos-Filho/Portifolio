import { Octokit } from "@octokit/rest";

const apiGit = new Octokit({
  auth: "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",
});

export default apiGit;
