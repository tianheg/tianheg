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

- ⚡ HTML5, CSS3, JavaScript(ES6).
- 🔑 GPG key hosted here at [GitHub](https://github.com/tianheg.gpg).
- :email: [me@yidajiabei.xyz](mailto:me@yidajiabei.xyz).
- 💰 Support my work on [Patreon](https://www.patreon.com/tianheg) or [Afdian](https://afdian.net/@tianheg)!

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

---

⏰ Updated on ${new Date().toString()}`;
console.log(readme)
