import { graphql } from "@octokit/graphql";

// env
import dotenv from "dotenv";
dotenv.config();

// common
const readme = `<h2>Hi, I'm tianheg 👋👨‍💻</h2>

- 📖 I enjoy [READing](https://tianheg.co/tags/reading/).
- 📝 I record [notes, blog](https://tianheg.co), Chinese mostly.
- 💰 [Support my work](https://github.com/tianheg/sponsor).

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

---

![GitHub Stats Card](https://readme-stats.tianheg.org/api?username=tianheg&show_icons=true)

## Projects I am working on:

`;

// getContributedRepos
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.ACCESS_TOKEN}`,
  },
});

const query = `{
  viewer {
    repositoriesContributedTo(
      first: 100
      contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]
    ) {
      totalCount
      nodes {
        nameWithOwner
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`;

const { viewer } = await graphqlWithAuth(query);

// getRecentUpdatedRepos
const getRecentUpdatedRepos = async () => {
  const res = await fetch(
    "https://api.github.com/users/tianheg/repos?sort=updated&per_page=10"
  );
  const data = await res.json();
  return data;
};

getRecentUpdatedRepos().then((data) => {
  const recentUpdatedRepos = data
    .map(
      (repo) => `- [${repo.name}](${repo.html_url}) - ${repo.description || ""}`
    )
    .join("\n");
  const contributedRepos = viewer.repositoriesContributedTo.nodes
    .map(
      (repo) =>
        `- [${repo.nameWithOwner}](https://github.com/${repo.nameWithOwner})`
    )
    .join("\n");

  const readmeContent =
    readme +
    recentUpdatedRepos +
    `

## Projects I contributed:

` +
    contributedRepos;
  console.log(readmeContent);
});
