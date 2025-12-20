import{_ as h}from"./ValaxyMain.DnhV9GCH.js";import{_ as f}from"./ValaxyMermaid.vue_vue_type_script_setup_true_lang.BZRvbsNc.js";import"./chunks/nprogress.CGNDSYHj.js";import{d as j,u as k,a as v}from"./chunks/vue-router.CSwrnkqy.js";import{a0 as C,a2 as a,W as y,$ as L,a1 as I,a3 as p,a5 as n,U as u,a6 as l,a7 as T,Y}from"./framework.B04uNzRU.js";import"./app.Db_EB_NT.js";import"./chunks/dayjs.BmWuu2Zz.js";import"./chunks/vue-i18n.B2TwrUrm.js";import"./chunks/pinia.ckmEy70Y.js";/* empty css                    */const A={class:"tip custom-block"},N={class:"custom-block-title custom-block-title-default"},R=j("/guide/drivers/url_tree",async e=>JSON.parse('{"title":{"en":"UrlTree","zh-CN":"地址树"},"description":"","frontmatter":{"title":{"en":"UrlTree","zh-CN":"地址树"},"icon":"iconfont icon-state","top":998,"categories":["guide","drivers"],"tag":["Storage","Guide","302"],"sticky":true,"star":true},"headers":[],"relativePath":"pages/guide/drivers/url_tree.md","lastUpdated":1765612534000}'),{lazy:(e,i)=>e.name===i.name}),W={__name:"url_tree",setup(e,{expose:i}){const{data:c}=R(),d=v(),r=k(),o=Object.assign(r.meta.frontmatter||{},c.value?.frontmatter||{});return d.currentRoute.value.data=c.value,Y("valaxy:frontmatter",o),globalThis.$frontmatter=o,i({frontmatter:{title:{en:"UrlTree","zh-CN":"地址树"},icon:"iconfont icon-state",top:998,categories:["guide","drivers"],tag:["Storage","Guide","302"],sticky:!0,star:!0}}),(t,s)=>{const b=L("VT"),m=f,g=h;return I(),C(g,{frontmatter:y(o)},{"main-content-md":a(()=>[n("div",A,[n("p",N,[s[0]||(s[0]=n("i",{class:"icon i-carbon-thumbs-up"},null,-1)),u(b,{content:"blocks.tip"})]),s[1]||(s[1]=n("p",null,[n("strong",null,[n("code",null,"地址树-UrlTree")]),l(" 是什么? 是用来挂载单个文件链接的，详情可以查看 "),n("strong",null,[l("→→→"),n("a",{href:"https://github.com/alist-org/alist/issues/3268",target:"_blank",rel:"noreferrer"},"原需求说明"),l("←←←")])],-1))]),s[2]||(s[2]=n("h2",{id:"可写",tabindex:"-1"},[l("可写 "),n("a",{class:"header-anchor",href:"#可写","aria-label":'Permalink to "可写"'},"​")],-1)),s[3]||(s[3]=n("p",null,[l("打开后可以对此驱动进行"),n("code",null,"新建文件夹"),l("、"),n("code",null,"移动"),l("、"),n("code",null,"重命名"),l("、"),n("code",null,"复制"),l("、"),n("code",null,"删除"),l("、"),n("code",null,"PutURL")],-1)),s[4]||(s[4]=n("ul",null,[n("li",null,[l("当用户在实现该接口的驱动中尝试使用SimpleHttp进行离线下载时，将不会调用离线下载工具。 相反，将调用驱动程序的 "),n("code",null,"PutURL"),l(" 方法。")]),n("li",null,[n("strong",null,[n("a",{href:"https://github.com/AlistGo/alist/pull/7779",target:"_blank",rel:"noreferrer"},"https://github.com/AlistGo/alist/pull/7779")])])],-1)),s[5]||(s[5]=n("br",null,null,-1)),s[6]||(s[6]=n("h2",{id:"用法",tabindex:"-1"},[l("用法 "),n("a",{class:"header-anchor",href:"#用法","aria-label":'Permalink to "用法"'},"​")],-1)),s[7]||(s[7]=n("p",null,"具体的用法大概讲解一下，建议将下面不同用法都看看越往后越进阶玩法",-1)),s[8]||(s[8]=n("p",null,"别看写的看起来很难很啰嗦实际上自己操作一下秒懂。",-1)),s[9]||(s[9]=n("ol",null,[n("li",null,"最简单的用法，直接写链接即可")],-1)),s[10]||(s[10]=n("p",null,[n("strong",null,"输入")],-1)),s[11]||(s[11]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[12]||(s[12]=n("p",null,[n("strong",null,"输出")],-1)),s[13]||(s[13]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"│ aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"│ README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[14]||(s[14]=n("ol",{start:"2"},[n("li",null,[l("有文件的同时，也可以创建文件夹"),n("sup",null,"第一个代码示例"),l("，也可以创建多个文件夹"),n("sup",null,"第二个代码示例")])],-1)),s[15]||(s[15]=n("p",null,[n("strong",null,"输入")],-1)),s[16]||(s[16]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"folder:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[17]||(s[17]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"folder:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")]),l(`
`),n("span",{class:"line"},[n("span",null,"http://pic.rmb.bdstatic.com/bjh/a66923e9bfefd03c2998ee998d3b55e7.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"folder2:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/e919290bf3b8396817d369cedf33b8cd.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/CONTRIBUTING.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[18]||(s[18]=n("p",null,[n("strong",null,"输出")],-1)),s[19]||(s[19]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"│  aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"└─folder")]),l(`
`),n("span",{class:"line"},[n("span",null,"        aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"        README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[20]||(s[20]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"│  	aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"├─folder")]),l(`
`),n("span",{class:"line"},[n("span",null,"│      aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"│      README_cn.md")]),l(`
`),n("span",{class:"line"},[n("span",null,"│")]),l(`
`),n("span",{class:"line"},[n("span",null,"├─	a66923e9bfefd03c2998ee998d3b55e7.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"│")]),l(`
`),n("span",{class:"line"},[n("span",null,"└─folder2")]),l(`
`),n("span",{class:"line"},[n("span",null,"        CONTRIBUTING.md")]),l(`
`),n("span",{class:"line"},[n("span",null,"        e919290bf3b8396817d369cedf33b8cd.jpeg")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[21]||(s[21]=n("p",null,"开头要空两个空格~",-1)),s[22]||(s[22]=n("ol",{start:"3"},[n("li",null,"可以将文件资源二次命名，实际上下载的还是原来的，并且可以填写文件大小")],-1)),s[23]||(s[23]=n("p",null,[l("格式："),n("code",null,"新命名的名字.后缀:文件大小:链接.后缀")],-1)),s[24]||(s[24]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"新名称2.md:2048:https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[25]||(s[25]=n("p",null,"文件大小不用写也是可以重新命名的",-1)),s[26]||(s[26]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"新名称.jpeg:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"新名称2.md:https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[27]||(s[27]=n("p",null,"@tab 4",-1)),s[28]||(s[28]=n("ol",{start:"4"},[n("li",null,"多个层级目录套娃玩法")],-1)),s[29]||(s[29]=n("ul",null,[n("li",null,"第一层目录文件夹不需要空格，但是第一层目录里面的文件需要空两个空格")],-1)),s[30]||(s[30]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"folder:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://raw.githubusercontent.com/OpenListTeam/OpenList/main/README_cn.md")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[31]||(s[31]=n("ul",null,[n("li",null,[l("如果你写好第一层了还想在第一个文件夹里面再套一个那就在这个文件夹下面套一层，写法如下，很简单 "),n("ul",null,[n("li",null,"目录进行空两格，文件加两个空格就是四个，如果继续想往下套一层继续加2个空格即可")])])],-1)),s[32]||(s[32]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"folder11:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/111.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  folder111:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/111.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    folder1111:")]),l(`
`),n("span",{class:"line"},[n("span",null,"      http://pic.rmb.bdstatic.com/bjh/111.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  folder222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    folder2222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"      http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"folder22:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  folder222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    folder2222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"      http://pic.rmb.bdstatic.com/bjh/2223.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"folder33:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/333.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  folder333:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/333.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    folder3333:")]),l(`
`),n("span",{class:"line"},[n("span",null,"      http://pic.rmb.bdstatic.com/bjh/333.jpeg")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[33]||(s[33]=n("ul",null,[n("li",null,[l("不建议的写法，像 "),n("strong",null,[n("code",null,"2.jpeg，5.jpeg")]),l(" 这样写法，建议想往哪一层文件夹就去哪一层文件夹按照格式增加链接，不要像下面这样写")])],-1)),s[34]||(s[34]=n("p",null,[n("strong",null,"错误写法")],-1)),s[35]||(s[35]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"folder22:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  folder222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    folder2222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"      http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"      folder22222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"        folder222222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"          http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/2.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"        http://pic.rmb.bdstatic.com/bjh/5.jpeg")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[36]||(s[36]=n("p",null,[n("strong",null,"正确写法")],-1)),s[37]||(s[37]=n("p",null,[l("像 "),n("strong",null,[n("code",null,"2.jpeg，5.jpeg")]),l(" 这样文件添加时候，添加到对应的目录里面去，分别对应的是 "),n("code",null,"folder222 和 folder22222"),l(" 两个文件夹")],-1)),s[38]||(s[38]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"folder22:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  folder222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    http://pic.rmb.bdstatic.com/bjh/2.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"    folder2222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"      http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"      folder22222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"        http://pic.rmb.bdstatic.com/bjh/2222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"        http://pic.rmb.bdstatic.com/bjh/5.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"        folder222222:")]),l(`
`),n("span",{class:"line"},[n("span",null,"          http://pic.rmb.bdstatic.com/bjh/2222.jpeg")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[39]||(s[39]=n("ol",{start:"5"},[n("li",null,"全部整合起来的举例用法，有常规的，有分类，有重命名，有标注文件大小")],-1)),s[40]||(s[40]=n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"https://jsd.example.com/gh/OpenListTeam/OpenList/README.md")]),l(`
`),n("span",{class:"line"},[n("span",null,"文档:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Readme.md:https://pic.rmb.bdstatic.com/bjh/说明.md")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Doc:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    文档.doc:https://pic.rmb.bdstatic.com/bjh/测试文档.doc")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pdf:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    pdf2.pdf:https://pic.rmb.bdstatic.com/bjh/测试.pdf")]),l(`
`),n("span",{class:"line"},[n("span",null,"  Excel:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    表格3.xlsx:https://pic.rmb.bdstatic.com/bjh/测试表格.xlsx")]),l(`
`),n("span",{class:"line"},[n("span",null,"视频:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  电视剧:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.pm4")]),l(`
`),n("span",{class:"line"},[n("span",null,"  电影:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.flv")]),l(`
`),n("span",{class:"line"},[n("span",null,"音乐:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  古典:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.mp3")]),l(`
`),n("span",{class:"line"},[n("span",null,"  轻音乐:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.flac")]),l(`
`),n("span",{class:"line"},[n("span",null,"    https://pic.rmb.bdstatic.com/bjh/222.wav")]),l(`
`),n("span",{class:"line"},[n("span",null,"软件:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  https://pic.rmb.bdstatic.com/bjh/222.jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"  PJ:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    xx软件.exe:252525:https://pic.rmb.bdstatic.com/bjh/222.exe")]),l(`
`),n("span",{class:"line"},[n("span",null,"    xx安装包.zip:259555:https://pic.rmb.bdstatic.com/bjh/222.zip")]),l(`
`),n("span",{class:"line"},[n("span",null,"  IPA:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    GPT.ipa:https://pic.rmb.bdstatic.com/bjh/222.ipa")]),l(`
`),n("span",{class:"line"},[n("span",null,"  APK:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    P图.apk:https://pic.rmb.bdstatic.com/bjh/222.apk")])])]),n("button",{class:"code-block-unfold-btn"})],-1)),s[41]||(s[41]=n("h2",{id:"提示",tabindex:"-1"},[l("提示 "),n("a",{class:"header-anchor",href:"#提示","aria-label":'Permalink to "提示"'},"​")],-1)),s[42]||(s[42]=n("ol",null,[n("li",null,"如果你点击下载发现没有跳转到下载而是预览，这是因为是根据你原本链接来决定的,例如你原本的链接就是下载他就会跳转到下载"),n("li",null,[l("如果你一个文件夹内有相同的文件，会合并只显示一个，默认使用预览查看下载的是你靠上(前)也就是顶部的文件 "),n("ul",null,[n("li",null,"Tips:请勿同时在一个目录内新建两个同名的文件/夹哦~就像你在资源管理器新建两个一样的文件/夹 都会提醒你不能重复")])]),n("li",null,"如果你在添加时在同级目录下写了两个相同的文件夹名字，会合并成一个文件夹但是合并后靠后(下)的文件夹的文件不会显示，但是可以通过浏览器地址栏访问（参考上一条的提示）"),n("li",null,[l("排序默认是按照你填写从上到下依次排序的和 "),n("code",null,"OpenList-别名"),l("的一样")])],-1)),s[43]||(s[43]=n("h3",{id:"默认使用的下载方式",tabindex:"-1"},[l("默认使用的下载方式 "),n("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-label":'Permalink to "默认使用的下载方式"'},"​")],-1)),u(m,T({code:"LS0tCnRpdGxlOiDpu5jorqTkvb_nlKjnmoTlk6rnp43kuIvovb3mlrnlvI_vvJ8KLS0tCmZsb3djaGFydCBUQgogICAgc3R5bGUgYTEgZmlsbDojYmJmLHN0cm9rZTojZjY2LHN0cm9rZS13aWR0aDoycHgsY29sb3I6I2ZmZgogICAgc3R5bGUgYTIgZmlsbDojZmY3NTc1LHN0cm9rZTojMzMzLHN0cm9rZS13aWR0aDo0cHgKICAgIHN1YmdyYXBoIGlkZTEgWyBdCiAgICBhMQogICAgZW5kCiAgICBhMVszMDJdOjo6c29tZWNsYXNzPT09PXzpu5jorqR8YTJb55So5oi36K6-5aSHXQogICAgY2xhc3NEZWYgc29tZWNsYXNzIGZpbGw6I2Y5NgogICAgYzFb5pys5py65Luj55CGXS0u5aSH6YCJLi0-YTJb55So5oi36K6-5aSHXQogICAgYjFb5Luj55CGVVJMXS0u5aSH6YCJLi0-YTJb55So5oi36K6-5aSHXQogICAgY2xpY2sgYTEgIi4uL2RyaXZlcnMvY29tbW9uLmh0bWwjd2ViZGF2LeetlueVpSIKICAgIGNsaWNrIGIxICIuLi9kcml2ZXJzL2NvbW1vbi5odG1sI3dlYmRhdi3nrZbnlaUiCiAgICBjbGljayBjMSAiLi4vZHJpdmVycy9jb21tb24uaHRtbCN3ZWJkYXYt562W55WlIg"},{}),null,16)]),"main-header":a(()=>[p(t.$slots,"main-header")]),"main-header-after":a(()=>[p(t.$slots,"main-header-after")]),"main-nav":a(()=>[p(t.$slots,"main-nav")]),"main-content-before":a(()=>[p(t.$slots,"main-content-before")]),"main-content":a(()=>[p(t.$slots,"main-content")]),"main-content-after":a(()=>[p(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[p(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[p(t.$slots,"main-nav-after")]),comment:a(()=>[p(t.$slots,"comment")]),footer:a(()=>[p(t.$slots,"footer")]),aside:a(()=>[p(t.$slots,"aside")]),"aside-custom":a(()=>[p(t.$slots,"aside-custom")]),default:a(()=>[p(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{W as default,R as usePageData};
