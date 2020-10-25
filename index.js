const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return ` ${progressBar} `
}

const readme = `
<h2>Hi, I'm Jimgao 👋👨‍💻</h2>

---

Annual balance   ${progressBarOfThisYear}  ${(progressOfThisYear * 100).toFixed(2)} %

---

![GitHub visiters](https://komarev.com/ghpvc/?username=tianheg) &nbsp;&nbsp; ![GitHub followers](https://img.shields.io/github/followers/tianheg?label=Follow&style=social)

---

### A little more about me...

    const Jimgao = {
        pronouns: "Jimgao" | "he",
        code: [Python, Javascript, HTML, CSS]
    }


![Jimgao's github stats](https://github-readme-stats-yidajiabei.vercel.app/api?username=tianheg&show_icons=true)

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

Below repos are often used, be free 🤪

- [Changelog](https://github.com/tianheg/Changelog)
- [self-watching](https://github.com/tianheg/self-watching)
- [wiki-docs](https://github.com/tianheg/wiki-docs)
- [Coding](https://github.com/tianheg/coding)
- [yidajiabei.xyz](https://github.com/tianheg/yidajiabei.xyz)
- [English](https://github.com/tianheg/English)
- [site](https://github.com/tianheg/site)
- [dotfiles](https://github.com/tianheg/dotfiles)
- [knowledgebase](https://github.com/tianheg/knowledgebase)
- [docker-docs](https://github.com/tianheg/docker-docs)

Below sites are often used, be free 🤪

- [Blog](https://www.yidajiabei.xyz)
- [Changelog](https://tianheg.github.io/Changelog)
- [Coding](https://tianheg.github.io/coding)
- [English words](https://tianheg.github.io/English)
- [Knowledgebase](https://gaotianhe.github.io/knowledgebase)
- [Sites](https://tianheg.github.io/site)
- [Gitmemory](https://www.gitmemory.com/tianheg)
- [Travis CI](https://travis-ci.com/dashboard)
- [Wakatime](https://wakatime.com/dashboard)
- [Cheatsheets](https://tianheg.github.io/cheatsheets)
- [Linux Command](https://tianheg.github.io/linux-command)
- [Docker Docs](https://tianheg.github.io/docker-docs)

---

⏰ Updated on ${new Date().toUTCString()}`
console.log(readme)
