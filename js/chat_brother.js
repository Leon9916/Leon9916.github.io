// 获取所有tab和iframe
let tabsDom = document.getElementById('tabs');

const iframe = document.querySelector('#iframe');

const chatList = [
    {url: 'https://tpgtahc.letsearches.com/'},
    {url: 'https://chat.wuguokai.cn/s/chatgpt'},
    {url: 'https://chat.aidutu.cn/'},
    {url: 'https://chat.kunshanyuxin.com/'},
    {url: 'https://wet2.xeasy.me'},
    {url: 'https://chat.binjie.site:7777/'},
    {url: 'https://chat.extkj.cn/'}
]

function getSiteName(url) {
    //获取url中的主机名，包括子域名
    var hostName = new URL(url).hostname;
    //去掉主机名中的顶级域名
    var domainArray = hostName.split(".");
    domainArray.pop();
    //截取子域名和一级域名
    var siteName = domainArray.join(".");
    return siteName;
}


let appendHtml = ''
chatList.forEach((item, index) => {
    appendHtml += `
        <div class="tab ${index === 0 ? 'active' : ''}" data-src="${item.url}">${getSiteName(item.url)}</div>
    `
})
tabsDom.innerHTML = appendHtml
const tabs = document.querySelectorAll('.tab');
// 给tab绑定点击事件
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
        // 切换选中的Tab
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
        }
        this.classList.add('active');

        // 根据选中的Tab切换iframe的src
        const src = this.getAttribute('data-src');
        iframe.src = src;
    });
}


// 放大和缩小
const bigOrLittle = document.getElementById('bigOrLittle')
const chat_content = document.getElementById('chat_content')
const iframe_box = document.getElementsByClassName('iframe-box')[0]
bigOrLittle.addEventListener('click', function () {
    // 判断是否包含某个class
    if (chat_content.classList.contains('isAllWindow')) {
        // 包含class
        chat_content.classList.remove('isAllWindow');
        iframe_box.style.removeProperty("height");
    } else {
        // 不包含class
        chat_content.classList.add('isAllWindow');
        iframe_box.style.height = "calc(100% - 3rem)";
    }
});
