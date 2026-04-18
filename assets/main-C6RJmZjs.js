import{d as o,y as _,r as P,u as e,S as z,g as M,R as j}from"./styles-DN2QTlVQ.js";const B={active:"活跃",dormant:"休眠",rebuilding:"重建中",dissolved:"已解散"},I=12;function N({clubId:k}){const[p,$]=o(""),[g,u]=o("all"),[L,w]=o([]),[D,f]=o(!0),[l,t]=o(0),[s,d]=o(1),[r,x]=o(null);_(()=>{async function n(){if(!k){x(null);return}const h=await P(`dynamics/${k}/dynamics.json`);h.success&&h.data&&x(h.data)}n()},[k]),_(()=>{async function n(){var h;f(!0);try{const c=await P("clubs/list.json");console.log("ClubsPage listResult:",c);const C=c.success&&Array.isArray((h=c.data)==null?void 0:h.clubs)?c.data.clubs:[];console.log("ClubsPage clubIds:",C);const m=[];for(const T of C){const S=await P(`clubs/${T}/info.json`);S.success&&S.data&&m.push(S.data)}console.log("ClubsPage loadedClubs:",m),w(m)}catch(c){console.error("加载社团数据失败:",c),w([])}f(!1)}n()},[l]);const i=k&&L.find(n=>n.id===k)||null,y=L.filter(n=>{const h=p===""||n.school.includes(p)||n.name.includes(p),c=g==="all"||n.status===g;return h&&c}),b=Math.ceil(y.length/I),a=y.slice((s-1)*I,s*I),v=n=>n?n.split(`
`).map((h,c)=>{const C=/<img\s+src=["']([^"']+)["'][^>]*>/gi,m=[];let T=0,S,G=0;for(;(S=C.exec(h))!==null;){S.index>T&&m.push(e("span",{children:h.substring(T,S.index)},`${c}-${G++}`));const W=S[1];m.push(e("img",{src:W,alt:"",style:{maxWidth:"100%",maxHeight:"300px",borderRadius:"8px",marginTop:"0.5rem"}},`${c}-${G++}`)),T=S.index+S[0].length}return T<h.length&&m.push(e("span",{children:h.substring(T)},`${c}-${G++}`)),m.length===0&&m.push(e("span",{children:" "},`${c}-empty`)),c<n.split(`
`).length-1&&m.push(e("br",{},`${c}-br`)),e("span",{children:m},c)}):null;return i?e("div",{class:"club-detail",children:[e("a",{href:"#clubs",class:"btn",children:"← 返回列表"}),e("div",{class:"card",style:{marginTop:"1rem"},children:[e("h2",{class:"card-title",children:[i.school," - ",i.name]}),e("div",{style:{marginTop:"0.5rem"},children:[e("span",{class:`tag status-${i.status}`,children:B[i.status]}),i.tags.map(n=>e("span",{class:"tag",children:n},n))]}),e("p",{style:{marginTop:"1rem"},children:[e("strong",{children:"创立时间:"})," ",i.founded]}),i.description&&e(z,{children:[e("p",{style:{marginTop:"1rem"},children:e("strong",{children:"社团简介:"})}),e("p",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:v(i.description)})]}),i.culture&&e(z,{children:[e("p",{style:{marginTop:"1rem"},children:e("strong",{children:"社团文化:"})}),e("p",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:v(i.culture)})]}),i.history&&e(z,{children:[e("p",{style:{marginTop:"1rem"},children:e("strong",{children:"历史沿革:"})}),e("p",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:v(i.history)})]}),i.images&&i.images.length>0&&e("div",{style:{marginTop:"1rem"},children:[e("strong",{children:"图片:"}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:i.images.map((n,h)=>e("img",{src:n,alt:"",style:{maxWidth:"200px",borderRadius:"8px"}},h))})]}),i.contact.wechatGroup&&e("p",{style:{marginTop:"1rem"},children:[e("strong",{children:"微信群:"})," ",i.contact.wechatGroup]}),i.contact.qqGroup&&e("p",{style:{marginTop:"0.5rem"},children:[e("strong",{children:"QQ群:"})," ",i.contact.qqGroup]}),i.contact.email&&e("p",{style:{marginTop:"0.5rem"},children:[e("strong",{children:"邮箱:"})," ",i.contact.email]}),i.socialLinks&&e("div",{style:{marginTop:"1rem"},children:[e("strong",{children:"自媒体平台:"}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:[i.socialLinks.bilibili&&e("a",{href:i.socialLinks.bilibili,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"B站"}),i.socialLinks.wechatPublic&&e("span",{class:"tag social-tag",children:["微信公众号: ",i.socialLinks.wechatPublic]}),i.socialLinks.weibo&&e("a",{href:i.socialLinks.weibo,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"微博"}),i.socialLinks.douyin&&e("a",{href:i.socialLinks.douyin,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"抖音"}),i.socialLinks.xiaohongshu&&e("span",{class:"tag social-tag",children:["小红书: ",i.socialLinks.xiaohongshu]}),i.socialLinks.website&&e("a",{href:i.socialLinks.website,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"官网"})]})]}),r&&r.dynamics&&r.dynamics.length>0&&e("div",{style:{marginTop:"1rem"},children:[e("strong",{children:["B站动态 (",r.count||r.dynamics.length,"):"]}),e("div",{style:{marginTop:"0.5rem"},children:r.dynamics.slice(0,5).map(n=>e("div",{style:{marginBottom:"0.75rem",padding:"0.5rem",background:"var(--bg)",borderRadius:"8px"},children:[e("div",{style:{fontSize:"0.85rem",color:"var(--text-light)"},children:new Date(n.date).toLocaleDateString("zh-CN")}),e("div",{style:{marginTop:"0.25rem"},children:n.content}),n.images&&n.images.length>0&&e("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem",marginTop:"0.5rem"},children:n.images.slice(0,3).map((h,c)=>e("img",{src:h,alt:"",style:{width:"60px",height:"60px",objectFit:"cover",borderRadius:"4px"}},c))})]},n.id))})]}),e("p",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666"},children:["最后更新: ",new Date(i.updatedAt).toLocaleDateString("zh-CN")]})]})]}):e("div",{class:"clubs-page",children:[e("h1",{class:"page-title",children:"高校口琴专区"}),e("div",{class:"filter-section",children:[e("input",{type:"text",placeholder:"搜索学校或社团名称...",value:p,onInput:n=>{$(n.target.value),d(1)}}),e("select",{value:g,onChange:n=>{u(n.target.value),d(1)},children:[e("option",{value:"all",children:"全部状态"}),e("option",{value:"active",children:"活跃"}),e("option",{value:"dormant",children:"休眠"}),e("option",{value:"rebuilding",children:"重建中"}),e("option",{value:"dissolved",children:"已解散"})]})]}),D?e("div",{class:"empty-state",children:e("p",{children:"加载中..."})}):a.length===0?e("div",{class:"empty-state",children:e("p",{children:"暂无社团数据"})}):e(z,{children:[e("div",{class:"club-list",children:a.map(n=>{var h,c,C,m,T,S;return e("a",{href:`#clubs/${n.id}`,class:"card",style:{cursor:"pointer",display:"block",textDecoration:"none",color:"inherit"},children:[e("h3",{class:"card-title",children:[n.school," - ",n.name]}),e("div",{style:{marginTop:"0.5rem"},children:[e("span",{class:`tag status-${n.status}`,children:B[n.status]}),n.tags.slice(0,2).map(G=>e("span",{class:"tag",children:G},G))]}),e("p",{style:{marginTop:"0.5rem",color:"#666",fontSize:"0.9rem"},children:[n.description.slice(0,100),n.description.length>100?"...":""]}),e("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem",flexWrap:"wrap"},children:[((h=n.socialLinks)==null?void 0:h.bilibili)&&e("a",{href:n.socialLinks.bilibili,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"B站"}),((c=n.socialLinks)==null?void 0:c.wechatPublic)&&e("span",{class:"tag social-tag",style:{background:"#07C160"},children:"公众号"}),((C=n.socialLinks)==null?void 0:C.weibo)&&e("a",{href:n.socialLinks.weibo,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"微博"}),((m=n.socialLinks)==null?void 0:m.douyin)&&e("a",{href:n.socialLinks.douyin,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"抖音"}),((T=n.socialLinks)==null?void 0:T.xiaohongshu)&&e("span",{class:"tag social-tag",style:{background:"#FF2442"},children:"小红书"}),((S=n.socialLinks)==null?void 0:S.website)&&e("a",{href:n.socialLinks.website,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"官网"})]}),e("p",{class:"card-meta",style:{marginTop:"0.5rem"},children:["最近更新: ",new Date(n.updatedAt).toLocaleDateString("zh-CN")]})]},n.id)})}),b>1&&e("div",{class:"pagination",children:[e("button",{class:"btn",onClick:()=>d(n=>Math.max(1,n-1)),disabled:s===1,children:"上一页"}),e("span",{style:{padding:"0.5rem 1rem"},children:["第 ",s," / ",b," 页"]}),e("button",{class:"btn",onClick:()=>d(n=>Math.min(b,n+1)),disabled:s===b,children:"下一页"})]})]})]})}const E={active:"活跃",dormant:"休眠",rebuilding:"重建中",dissolved:"已解散"},R=12;function F({groupId:k}){const[p,$]=o(""),[g,u]=o("all"),[L,w]=o([]),[D,f]=o(!0),[l,t]=o(0),[s,d]=o(1);_(()=>{async function a(){var v;f(!0);try{const n=await P("city-groups/list.json"),h=n.success&&Array.isArray((v=n.data)==null?void 0:v.groups)?n.data.groups:[],c=[];for(const C of h){const m=await P(`city-groups/${C}/info.json`);m.success&&m.data&&c.push(m.data)}w(c)}catch(n){console.error("加载数据失败:",n),w([])}f(!1)}a()},[l]);const r=k&&L.find(a=>a.id===k)||null,x=L.filter(a=>{const v=p===""||a.city.includes(p)||a.name.includes(p),n=g==="all"||a.status===g;return v&&n}),i=Math.ceil(x.length/R),y=x.slice((s-1)*R,s*R),b=a=>a?a.split(`
`).map((v,n)=>e("span",{children:[v,n<a.split(`
`).length-1&&e("br",{})]},n)):null;return r?e("div",{class:"club-detail",children:[e("a",{href:"#city-groups",class:"btn",children:"← 返回列表"}),e("div",{class:"card",style:{marginTop:"1rem"},children:[e("h2",{class:"card-title",children:[r.city," - ",r.name]}),e("div",{style:{marginTop:"0.5rem"},children:[e("span",{class:`tag status-${r.status}`,children:E[r.status]}),r.tags.map(a=>e("span",{class:"tag",children:a},a))]}),e("p",{style:{marginTop:"1rem"},children:[e("strong",{children:"创立时间:"})," ",r.founded]}),r.description&&e(z,{children:[e("p",{style:{marginTop:"1rem"},children:e("strong",{children:"简介:"})}),e("p",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:b(r.description)})]}),r.culture&&e(z,{children:[e("p",{style:{marginTop:"1rem"},children:e("strong",{children:"团体文化:"})}),e("p",{style:{marginTop:"0.5rem",whiteSpace:"pre-wrap"},children:b(r.culture)})]}),r.images&&r.images.length>0&&e("div",{style:{marginTop:"1rem"},children:[e("strong",{children:"图片:"}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:r.images.map((a,v)=>e("img",{src:a,alt:"",style:{maxWidth:"200px",borderRadius:"8px"}},v))})]}),r.contact.wechatGroup&&e("p",{style:{marginTop:"1rem"},children:[e("strong",{children:"微信群:"})," ",r.contact.wechatGroup]}),r.contact.qqGroup&&e("p",{style:{marginTop:"0.5rem"},children:[e("strong",{children:"QQ群:"})," ",r.contact.qqGroup]}),r.contact.email&&e("p",{style:{marginTop:"0.5rem"},children:[e("strong",{children:"邮箱:"})," ",r.contact.email]}),r.socialLinks&&e("div",{style:{marginTop:"1rem"},children:[e("strong",{children:"自媒体平台:"}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:[r.socialLinks.bilibili&&e("a",{href:r.socialLinks.bilibili,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"B站"}),r.socialLinks.wechatPublic&&e("span",{class:"tag social-tag",children:["微信公众号: ",r.socialLinks.wechatPublic]}),r.socialLinks.weibo&&e("a",{href:r.socialLinks.weibo,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"微博"}),r.socialLinks.douyin&&e("a",{href:r.socialLinks.douyin,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"抖音"}),r.socialLinks.xiaohongshu&&e("span",{class:"tag social-tag",children:["小红书: ",r.socialLinks.xiaohongshu]}),r.socialLinks.website&&e("a",{href:r.socialLinks.website,target:"_blank",rel:"noopener noreferrer",class:"btn",children:"官网"})]})]}),e("p",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666"},children:["最后更新: ",new Date(r.updatedAt).toLocaleDateString("zh-CN")]})]})]}):e("div",{class:"clubs-page",children:[e("h1",{class:"page-title",children:"城市口琴专区"}),e("p",{style:{color:"#666",marginBottom:"1rem"},children:"非官方地区口琴团体信息"}),e("div",{class:"filter-section",children:[e("input",{type:"text",placeholder:"搜索城市或团体名称...",value:p,onInput:a=>{$(a.target.value),d(1)}}),e("select",{value:g,onChange:a=>{u(a.target.value),d(1)},children:[e("option",{value:"all",children:"全部状态"}),e("option",{value:"active",children:"活跃"}),e("option",{value:"dormant",children:"休眠"}),e("option",{value:"rebuilding",children:"重建中"}),e("option",{value:"dissolved",children:"已解散"})]})]}),D?e("div",{class:"empty-state",children:e("p",{children:"加载中..."})}):y.length===0?e("div",{class:"empty-state",children:e("p",{children:"暂无团体数据"})}):e(z,{children:[e("div",{class:"club-list",children:y.map(a=>{var v,n,h,c,C,m;return e("a",{href:`#city-groups/${a.id}`,class:"card",style:{cursor:"pointer",display:"block",textDecoration:"none",color:"inherit"},children:[e("h3",{class:"card-title",children:[a.city," - ",a.name]}),e("div",{style:{marginTop:"0.5rem"},children:[e("span",{class:`tag status-${a.status}`,children:E[a.status]}),a.tags.slice(0,2).map(T=>e("span",{class:"tag",children:T},T))]}),e("p",{style:{marginTop:"0.5rem",color:"#666",fontSize:"0.9rem"},children:[a.description.slice(0,100),a.description.length>100?"...":""]}),e("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem",flexWrap:"wrap"},children:[((v=a.socialLinks)==null?void 0:v.bilibili)&&e("a",{href:a.socialLinks.bilibili,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"B站"}),((n=a.socialLinks)==null?void 0:n.wechatPublic)&&e("span",{class:"tag social-tag",style:{background:"#07C160"},children:"公众号"}),((h=a.socialLinks)==null?void 0:h.weibo)&&e("a",{href:a.socialLinks.weibo,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"微博"}),((c=a.socialLinks)==null?void 0:c.douyin)&&e("a",{href:a.socialLinks.douyin,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"抖音"}),((C=a.socialLinks)==null?void 0:C.xiaohongshu)&&e("span",{class:"tag social-tag",style:{background:"#FF2442"},children:"小红书"}),((m=a.socialLinks)==null?void 0:m.website)&&e("a",{href:a.socialLinks.website,target:"_blank",rel:"noopener noreferrer",class:"btn",style:{padding:"0.2rem 0.5rem",fontSize:"0.8rem"},children:"官网"})]}),e("p",{class:"card-meta",style:{marginTop:"0.5rem"},children:["最近更新: ",new Date(a.updatedAt).toLocaleDateString("zh-CN")]})]},a.id)})}),i>1&&e("div",{class:"pagination",children:[e("button",{class:"btn",onClick:()=>d(a=>Math.max(1,a-1)),disabled:s===1,children:"上一页"}),e("span",{style:{padding:"0.5rem 1rem"},children:["第 ",s," / ",i," 页"]}),e("button",{class:"btn",onClick:()=>d(a=>Math.min(i,a+1)),disabled:s===i,children:"下一页"})]})]})]})}const A=12;function q(){const[k,p]=o([]),[$,g]=o(!0),[u,L]=o(""),[w,D]=o("all"),[f,l]=o(1);_(()=>{async function i(){var y;g(!0);try{const b=await P("external-links/list.json");b.success&&((y=b.data)!=null&&y.links)&&p(b.data.links)}catch(b){console.error("加载数据失败:",b)}g(!1)}i()},[]);const t=[...new Set(k.flatMap(i=>i.tags))].sort(),s=k.filter(i=>{const y=u===""||i.title.includes(u)||i.subtitle.includes(u)||i.description.includes(u),b=w==="all"||i.tags.includes(w);return y&&b}),d=Math.ceil(s.length/A),r=s.slice((f-1)*A,f*A),x=(i,y)=>{window.confirm(`即将访问：${y}
网址：${i}

是否继续？`)&&window.open(i,"_blank","noopener,noreferrer")};return $?e("div",{class:"clubs-page",children:[e("h1",{class:"page-title",children:"外部导航"}),e("div",{class:"empty-state",children:e("p",{children:"加载中..."})})]}):e("div",{class:"clubs-page",children:[e("h1",{class:"page-title",children:"外部导航"}),e("p",{style:{color:"#666",marginBottom:"1rem"},children:"口琴相关的优质资源网站与媒体平台"}),e("div",{class:"filter-section",children:e("input",{type:"text",placeholder:"搜索关键词...",value:u,onInput:i=>{L(i.target.value),l(1)}})}),t.length>0&&e("div",{class:"tag-filter",style:{marginBottom:"1rem",display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[e("button",{class:`btn ${w==="all"?"":"outline"}`,onClick:()=>{D("all"),l(1)},children:"全部"}),t.map(i=>e("button",{class:`btn ${w===i?"":"outline"}`,onClick:()=>{D(i),l(1)},children:i},i))]}),r.length===0?e("div",{class:"empty-state",children:e("p",{children:"暂无导航数据"})}):e(z,{children:[e("div",{class:"external-links-grid",children:r.map(i=>e("div",{class:"card external-link-card",children:[e("h3",{class:"card-title",children:i.title}),i.subtitle&&e("p",{style:{color:"#666",fontSize:"0.9rem",marginBottom:"0.5rem"},children:i.subtitle}),e("p",{style:{fontSize:"0.9rem",marginBottom:"0.5rem"},children:i.description}),e("div",{style:{marginBottom:"0.5rem"},children:i.tags.map(y=>e("span",{class:"tag",style:{background:"var(--secondary)"},children:y},y))}),e("button",{class:"btn",onClick:()=>x(i.url,i.title),style:{marginTop:"0.5rem"},children:"访问 →"})]},i.id))}),d>1&&e("div",{class:"pagination",children:[e("button",{class:"btn",onClick:()=>l(i=>Math.max(1,i-1)),disabled:f===1,children:"上一页"}),e("span",{style:{padding:"0.5rem 1rem"},children:["第 ",f," / ",d," 页"]}),e("button",{class:"btn",onClick:()=>l(i=>Math.min(d,i+1)),disabled:f===d,children:"下一页"})]})]})]})}function K(){const[k,p]=o([]),[$,g]=o(!0),[u,L]=o(""),[w,D]=o(0);_(()=>{async function t(){var s;g(!0);try{const d=await P("dynamics/all.json");d.success&&((s=d.data)!=null&&s.dynamics)&&p(d.data.dynamics)}catch(d){console.error("加载动态数据失败:",d)}g(!1)}t()},[w]);const f=k.filter(t=>!u||t.clubName.includes(u)||t.school.includes(u)||t.content.includes(u)),l=t=>{const s=new Date(t),r=new Date().getTime()-s.getTime(),x=Math.floor(r/(1e3*60*60*24));return x===0?"今天":x===1?"昨天":x<7?`${x}天前`:x<30?`${Math.floor(x/7)}周前`:s.toLocaleDateString("zh-CN")};return e("div",{class:"dynamics-page",children:[e("h1",{class:"page-title",children:"动态广场"}),e("div",{class:"filter-section",children:[e("input",{type:"text",placeholder:"搜索动态内容或社团名称...",value:u,onInput:t=>L(t.target.value)}),e("button",{class:"btn",onClick:()=>D(t=>t+1),children:"刷新"})]}),$?e("div",{class:"empty-state",children:e("p",{children:"加载中..."})}):f.length===0?e("div",{class:"empty-state",children:e("p",{children:"暂无动态数据"})}):e("div",{class:"dynamics-list",children:f.map(t=>e("div",{class:"card dynamic-card",children:[e("div",{class:"dynamic-header",children:[t.platform&&e("span",{class:"platform-tag",children:t.platform}),e("a",{href:`#clubs/${t.clubId}`,class:"dynamic-club",children:[t.school," - ",t.clubName]}),e("span",{class:"dynamic-date",children:l(t.date)})]}),e("div",{class:"dynamic-content",children:t.content}),t.images&&t.images.length>0&&e("div",{class:"dynamic-images",children:[t.images.slice(0,4).map((s,d)=>e("img",{src:s,alt:""},d)),t.images.length>4&&e("div",{class:"more-images",children:["+",t.images.length-4]})]}),t.videoInfo&&e("div",{class:"dynamic-video",children:[e("span",{class:"video-badge",children:"视频"}),t.videoLink?e("a",{class:"video-title",href:t.videoLink,target:"_blank",rel:"noopener noreferrer",children:t.videoInfo.title}):e("span",{class:"video-title",children:t.videoInfo.title})]}),e("div",{class:"dynamic-stats",children:[e("span",{children:["👍 ",t.like||0]}),e("span",{children:["💬 ",t.comment||0]}),e("span",{children:["🔄 ",t.repost||0]})]}),e("div",{class:"dynamic-links",children:[(t.link||t.uid)&&e("a",{href:t.link||`https://space.bilibili.com/${t.uid}/dynamic`,class:"link-btn original-link-btn",target:"_blank",rel:"noopener noreferrer",children:"原文链接"}),t.videoLink&&e("a",{href:t.videoLink,class:"link-btn video-link-btn",target:"_blank",rel:"noopener noreferrer",children:"视频链接"})]})]},t.id))}),e("style",{children:`
        .dynamics-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .dynamic-card {
          padding: 1rem;
        }
        .dynamic-header {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .platform-tag {
          background: var(--primary);
          color: white;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 500;
        }
        .dynamic-club {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }
        .dynamic-club:hover {
          text-decoration: underline;
        }
        .dynamic-date {
          color: var(--text-light);
          font-size: 0.85rem;
          margin-left: auto;
        }
        .dynamic-content {
          color: var(--text);
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .dynamic-images {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .dynamic-images img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
        }
        .more-images {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          color: white;
          border-radius: 8px;
          font-weight: 500;
        }
        .dynamic-video {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding: 0.5rem;
          background: var(--bg);
          border-radius: 8px;
        }
        .video-badge {
          background: var(--primary);
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
        }
        .video-title {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .video-title a {
          color: var(--primary);
          text-decoration: none;
        }
        .video-title a:hover {
          text-decoration: underline;
        }
        .dynamic-stats {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          color: var(--text-light);
          font-size: 0.85rem;
        }
        .dynamic-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }
        .link-btn {
          color: var(--primary);
          text-decoration: none;
          font-size: 0.85rem;
        }
        .link-btn:hover {
          text-decoration: underline;
        }
        .video-link-btn {
          font-weight: 500;
        }
      `})]})}function Q({showAdminLink:k=!1}){const[p,$]=o(()=>{const l=decodeURIComponent(window.location.hash.replace("#",""));return l==="city-groups"?"city-groups":l==="external-links"?"external-links":l==="clubs"?"clubs":"dynamics"}),[g,u]=o(()=>decodeURIComponent(window.location.hash.replace("#","")).split("/")[1]||null),[L,w]=o("口琴综合交流平台"),[D,f]=o("");return _(()=>{async function l(){var t;try{const s=await M();s.siteTitle&&(w(s.siteTitle),document.title=s.siteTitle),(t=s.contact)!=null&&t.email&&f(s.contact.email)}catch(s){console.error("加载配置失败:",s)}}l()},[]),_(()=>{const l=()=>{const s=decodeURIComponent(window.location.hash.replace("#","")).split("/"),d=s[0]||"clubs",r=s[1]||null;$(d),u(r)};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),e("div",{class:"app",children:[e("header",{children:e("h1",{children:L})}),e("nav",{children:[e("a",{href:"#dynamics",class:p==="dynamics"?"active":"",onClick:l=>{l.preventDefault(),window.location.hash="dynamics"},children:"动态广场"}),e("a",{href:"#clubs",class:p==="clubs"&&!g?"active":"",onClick:l=>{l.preventDefault(),window.location.hash="clubs"},children:"高校专区"}),e("a",{href:"#city-groups",class:p==="city-groups"&&!g?"active":"",onClick:l=>{l.preventDefault(),window.location.hash="city-groups"},children:"城市专区"}),e("a",{href:"#external-links",class:p==="external-links"?"active":"",onClick:l=>{l.preventDefault(),window.location.hash="external-links"},children:"外部导航"})]}),e("main",{children:[p==="clubs"&&e(N,{clubId:g}),p==="city-groups"&&e(F,{groupId:g}),p==="external-links"&&e(q,{}),p==="dynamics"&&e(K,{})]}),e("footer",{children:[e("p",{children:[L," - 帮助高校口琴爱好者寻找同好"]}),D&&e("p",{children:["© 2024 ",L," | 问题反馈请联系：",D]})]})]})}j(e(Q,{}),document.getElementById("app"));
