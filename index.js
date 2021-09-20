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
<h2>Hi, I'm Jim Gao 👋👨‍💻</h2>

Annual balance   ${progressBarOfThisYear}  ${(progressOfThisYear * 100).toFixed(2)} %

- ⚡ HTML, CSS, JavaScript.
- 🔑 GPG key hosted here at [GitHub](https://github.com/tianheg.gpg).
- 💰 Support my work on [Patreon](https://www.patreon.com/tianheg) or [Afdian](https://afdian.net/@tianheg)!

---start---

## 最近更新文章(更新时间:2021-01-26 15:18:07 | 通过Github Actions自动更新)

[2021 年第 4 周问题汇总](https://blog.yidajiabei.xyz/posts/question-2021-4/)

[Hugo 语法高亮](https://blog.yidajiabei.xyz/posts/hugo-syntax-highlighting/)

[2021 年第 3 周问题汇总](https://blog.yidajiabei.xyz/posts/question-2021-3/)

---end---

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

---

⏰ Updated on ${new Date().toUTCString()}

[How this works](https://github.com/tianheg/tianheg/issues/1)

![GitHub Stats Card](https://tianheg-readme-stats.vercel.app/api?username=tianheg&show_icons=true)

![Wakatime Card](https://tianheg-readme-stats.vercel.app/api/wakatime?username=tianheg&layout=compact)

<img src="https://visitor-badge.glitch.me/badge?page_id=tianheg" alt="vistors" />`;
console.log(readme)