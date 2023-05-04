const readme = `<h2>Hi, I'm tianheg 👋👨‍💻</h2>

- 📧 Welcome to email me (<code>me@tianhegao.com</code>).
- 📖 I enjoy [READing](https://tianheg.xyz/tags/reading/).
- 📝 I record [notes, blog](https://tianheg.xyz), Chinese mostly.
- 💰 [Support my work](https://github.com/tianheg/sponsor).

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

---

![GitHub Stats Card](https://readme-stats.tianheg.org/api?username=tianheg&show_icons=true)

## Projects I am working on:

`;

const getRecentUpdatedRepos = async () => {
  const res = await fetch(
    "https://api.github.com/users/tianheg/repos?sort=updated&per_page=10"
  );
  const data = await res.json();
  return data;
};

getRecentUpdatedRepos().then((data) => {
  const repos = data
    .map(
      (repo) => `- [${repo.name}](${repo.html_url}) - ${repo.description || ""}`
    )
    .join("\n");
  const readmeContent = readme + repos;
  console.log(readmeContent);
});
