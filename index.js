import { graphql } from "@octokit/graphql";
import Parser from 'rss-parser';

// env
import dotenv from "dotenv";
dotenv.config();


const intro = `<h2>Hi, I'm tianheg 👋👨‍💻</h2>

- 📖 I enjoy [READing](https://read.tianheg.org/).
- 📝 I record [notes, blog](https://tianheg.co).
- 💰 [Support my work](https://tianheg.co/support).

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>
`;

// rss
const parser = new Parser();
const feed = await parser.parseURL('https://tianheg.co/index.xml');

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
      contributionTypes: [COMMIT]
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
const contributedRepos = viewer.repositoriesContributedTo.nodes
  .map(
    (repo) =>
      `- [${repo.nameWithOwner}](https://github.com/${repo.nameWithOwner})`
  )
  .join("\n");


const readmeContent =
  `${intro}
---

![GitHub Stats Card](https://github-readme-stats.tianheg.org/api?username=tianheg&show_icons=true)

<table><tr><td valign="top" width="55%">

### On my blog
${feed.items.map((item) => `- [${item.title}](${item.link})`).join("\n")}

</td><td valign="top" width="55%">

### Recent contributions

${contributedRepos}
</td></tr></table>

[![Update profile](https://github.com/tianheg/tianheg/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/tianheg/tianheg/actions/workflows/main.yml)`;

console.log(readmeContent);
