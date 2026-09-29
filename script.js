// ===== 简历数据 =====
const SKILLS = [
    'Flutter', 'Android', 'Dart', 'Kotlin', 'Java', 'Getx', 'Dio', 'AutoRoute',
    'MVP', 'MVC', '组件化', 'okhttp', 'Realm', '热修复', '数据加密', 'AES',
    'Base64', 'web3j', '直播SDK', 'IM SDK', '声网', '环信', '谷歌内购',
    '谷歌上架', 'Cocos2dx', 'MediaPlayer', 'Service', '百度地图', 'Bugly'
];

// SVG 图标库
const ICONS = {
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="11" r="1" fill="white"/><circle cx="13" cy="11" r="1" fill="white"/><circle cx="17" cy="11" r="1" fill="white"/></svg>',
    paw: '<svg viewBox="0 0 24 24" fill="white" stroke="none"><circle cx="6" cy="10" r="2"/><circle cx="10" cy="7" r="2"/><circle cx="14" cy="7" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-5 2-5 4s2 3 5 3 5-1 5-3-2-4-5-4z"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    hexagon: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7z"/><path d="M12 8v8M8.5 10v4M15.5 10v4" stroke-width="1"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="white" stroke="none"><circle cx="12" cy="12" r="11" fill="none" stroke="white" stroke-width="1.5"/><polygon points="10 8 16 12 10 16"/></svg>',
    broadcast: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><circle cx="12" cy="12" r="2"/><path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10"/><path d="M4.5 4.5a11 11 0 0 0 0 15M19.5 4.5a11 11 0 0 1 0 15"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    signal: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M2 20h2v-4H2zM7 20h2v-8H7zM12 20h2V8h-2zM17 20h2V4h-2z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>'
};

// 项目渐变色配置
const GRADIENTS = {
    g1: 'linear-gradient(135deg, #1e3a5f, #4a04d3)',
    g2: 'linear-gradient(135deg, #f97316, #ec4899)',
    g3: 'linear-gradient(135deg, #ea580c, #dc2626)',
    g4: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    g5: 'linear-gradient(135deg, #0f172a, #06b6d4)',
    g6: 'linear-gradient(135deg, #059669, #3b82f6)',
    g7: 'linear-gradient(135deg, #dc2626, #f97316)',
    g8: 'linear-gradient(135deg, #1e40af, #06b6d4)',
    g9: 'linear-gradient(135deg, #0d9488, #10b981)',
    g10: 'linear-gradient(135deg, #1e3a8a, #6366f1)'
};

const COMPANIES = [
    {
        name: '成都启密科技有限公司',
        shortName: '启密科技',
        period: '2024.09 - 2026.09',
        position: 'Flutter工程师（居家办公）',
        scale: '32~15人 · Flutter开发1人（后期2人）',
        gradient: GRADIENTS.g1,
        icon: ICONS.chat,
        tech: ['Flutter', 'Android', 'iOS'],
        desc: '独立完成公司 Flutter 主项目 Truthx 及马甲项目 Polywin 的开发和上架。负责全栈 Flutter 开发，包括功能开发、上架发布、版本迭代。',
        reason: '公司因项目盈利不及预期，大幅裁员，合同到期不再续签。',
        projects: [
            {
                name: 'Truthx / Polywin',
                period: '2024.09 - 2026.09',
                desc: '公司 Flutter 主项目，独立完成全流程开发与上架。涵盖社交咨询功能，多端（Flutter / Android / iOS）适配。同时负责马甲项目 Polywin 的开发与上架。',
                tech: ['Flutter', 'Android', 'iOS', 'Dart'],
                icon: ICONS.chat,
                img: 'images/truthx.png',
                link: 'https://www.truthx.com',
                // gradient: GRADIENTS.g1
            }
        ]
    },
    {
        name: '成都一聪科技有限公司',
        shortName: '一聪科技',
        period: '2024.02 - 2024.09',
        position: 'Flutter / Android工程师',
        scale: '宠物赛道创业公司 · Flutter 2人',
        gradient: GRADIENTS.g2,
        icon: ICONS.paw,
        tech: ['Flutter', 'Getx', 'Android'],
        desc: '参与公司 Flutter 程序开发，独立完成两款宠物类 APP 从 0 到 1 的开发。',
        reason: '公司经营不善，裁员。',
        projects: [
            {
                name: '猫语翻译空间',
                period: '2024.08 - 2024.09',
                desc: '独立完成第一个版本开发，已上线国内各个渠道。宠物翻译类 APP，基于 Flutter + Getx 架构。',
                tech: ['Flutter', 'Getx', 'Android'],
                icon: ICONS.paw,
                img: 'images/project_cat.png',
                // gradient: GRADIENTS.g2
            },
            {
                name: '宠物小伙伴',
                period: '2024.05 - 2024.09',
                desc: '纯 Flutter 项目，独立完成第一个版本开发（已完成开发，待上线）。宠物社交与工具类 APP。',
                tech: ['Flutter', 'Getx'],
                icon: ICONS.paw,
                img: 'images/project_pet_friend.png',
                // gradient: GRADIENTS.g2
            }
        ]
    },
    {
        name: '成都拨云问月科技有限公司',
        shortName: '拨云问月',
        period: '2023.05 - 2023.12',
        position: 'Flutter工程师',
        scale: '30人左右 · Flutter研发4人',
        gradient: GRADIENTS.g3,
        icon: ICONS.truck,
        tech: ['Flutter', 'Getx', 'Dio', 'AutoRoute'],
        desc: '参与完成公司短视频、长视频 Flutter 项目研发。独立完成外卖骑手端 Flutter 项目开发。参与 Flutter 项目的 bug 修改及优化维护。',
        reason: '项目运营失败，公司经营状况遇到问题。',
        projects: [
            {
                name: '外卖骑手端项目',
                period: '2023.05 - 2023.12',
                desc: '独立完成外卖骑手端 Flutter 项目全流程开发。包含接单、导航、订单管理、状态上报等核心功能，基于 Getx + Dio + AutoRoute 技术栈。',
                tech: ['Flutter', 'Getx', 'Dio', 'AutoRoute'],
                icon: ICONS.truck,
                gradient: GRADIENTS.g3
            },
            {
                name: '短视频 / 长视频项目',
                period: '2023.05 - 2023.12',
                desc: '参与公司短视频、长视频 Flutter 项目研发，负责功能模块开发与 bug 修复优化。',
                tech: ['Flutter', 'Getx', 'Dio'],
                icon: ICONS.video,
                gradient: GRADIENTS.g3
            }
        ]
    },
    {
        name: '成都铭日芷星科技有限公司',
        shortName: '铭日芷星',
        period: '2022.05 - 2023.02',
        position: 'Android & Flutter工程师',
        scale: '30人左右',
        gradient: GRADIENTS.g4,
        icon: ICONS.mic,
        tech: ['组件化', 'MVP', '直播SDK', 'IM SDK'],
        desc: '参与公司语音直播产品"声优圈"的研发与 bug 修复。负责公司 Flutter 版本音频直播产品海外版"LuLu"的研发，完成首个版本研发并提交 Google Play 上线。',
        reason: '公司倒闭',
        projects: [
            {
                name: 'LuLu（声优圈国际版 Flutter）',
                period: '2022.05 - 2023.02',
                desc: '声网项目，与另一位同事从头开发，纯 Flutter 项目。上线迭代了 4 个主要版本。对接声网、环信 IM、以及谷歌内购，完成首个版本研发并提交 Google Play 上线。',
                tech: ['Flutter', '声网', '环信', '谷歌内购'],
                icon: ICONS.mic,
                gradient: GRADIENTS.g4
            },
            {
                name: '声优圈',
                period: '2022.05 - 2022.11',
                desc: '声网项目，Android 原生开发。语音聊天交友、大神陪练、组队开黑类语音直播社交产品。',
                tech: ['Android', '组件化', 'MVP', '直播SDK', 'IM SDK'],
                icon: ICONS.mic,
                gradient: GRADIENTS.g4
            }
        ]
    },
    {
        name: '四川创凌联动科技有限公司',
        shortName: '创凌联动',
        period: '2021.09 - 2022.05',
        position: 'Android工程师',
        scale: '项目组主导开发',
        gradient: GRADIENTS.g5,
        icon: ICONS.video,
        tech: ['MVP', 'okhttp', 'Kotlin', '互动直播SDK二开', '谷歌上架'],
        desc: '主导项目组短视频直播软件 JoJo 安卓端开发。独立完成 1.0~1.2 版本，包含短视频、直播、音视频通话等功能开发及上线。负责移动项目需求沟通、技术选型、框架搭建、版本管理、任务分配。',
        reason: '',
        projects: [
            {
                name: 'JoJo',
                period: '2021.09 - 2022.05',
                desc: '主要包含短视频、直播、IM、以及音视频通话等功能的社交软件。主导安卓端开发，独立完成 1.0~1.2 版本包含短视频、直播、以及音视频通话等功能的开发及上线。已上架 Google Play。',
                tech: ['MVP', 'okhttp', 'Kotlin', '互动直播SDK', '谷歌上架'],
                icon: ICONS.video,
                link: 'https://play.google.com/store/apps/details?id=com.jojo',
                gradient: GRADIENTS.g5
            }
        ]
    },
    {
        name: '成都链智慧信息科技有限公司',
        shortName: '链智慧',
        period: '2019.10 - 2021.09',
        position: '安卓组长',
        scale: '30人左右（后改名"成都吉米加科技有限公司"）',
        gradient: GRADIENTS.g6,
        icon: ICONS.hexagon,
        tech: ['MVP', 'okhttp', 'Kotlin', 'Realm', '数据加密', '热修复'],
        desc: '负责移动项目需求沟通理解、技术选型、框架搭建、版本管理、任务分配、紧急问题修复。2 年间带领 Android 团队负责完成了 3 款产品多个版本的研发迭代。',
        reason: '',
        achievement: '2年间带领Android团队负责完成了3款产品多个版本的研发迭代。',
        projects: [
            {
                name: 'OcToken',
                period: '2020.01 - 2021.05',
                desc: '区块链钱包项目，冷钱包，本地化逻辑较多。涉及 20+ 张数据库表，涵盖 AES、Base64、Sing、web3j 加密。数据库升级、热补丁更新、Bugly 覆盖更新、事件埋点统计等全链路工作。',
                tech: ['Kotlin', 'Realm', 'AES', 'web3j', '热修复', 'Bugly'],
                icon: ICONS.hexagon,
                gradient: GRADIENTS.g6
            },
            {
                name: '奇瑞沙特社区项目',
                period: '2019.10 - 2021.09',
                desc: '奇瑞车主软件，包含社区、资讯、车机管理控制。Flutter 接入华为原生车机 SDK，实现对汽车空调、通风、座椅、远程、灯光、喇叭等 20+ 原生接口的数据对接及调试。',
                tech: ['Flutter', '华为车机SDK', 'Android'],
                icon: ICONS.signal,
                gradient: GRADIENTS.g6
            }
        ]
    },
    {
        name: '成都亿安永道科技有限公司',
        shortName: '亿安永道',
        period: '2018.10 - 2019.10',
        position: 'Android工程师',
        scale: '海外产品研发',
        gradient: GRADIENTS.g7,
        icon: ICONS.play,
        tech: ['MVP', 'okhttp', 'Java', '直播', 'IM', '谷歌广告', '谷歌上架'],
        desc: '负责主导或参与项目组 Android 产品研发。主要负责 YoGoVideo 2.0（海外）安卓版研发，独立负责 YDNews 1.0（海外）安卓版研发，维护 YoGoVideo 1.0+ 海外版。',
        reason: '',
        projects: [
            {
                name: 'YoGoVideo 2.0~2.2',
                period: '2018.10 - 2019.04',
                desc: '海外视频产品，类抖音，看视频得金币盈利模式。集成 Google、Facebook、Twitter、雅虎、汇量、友盟等广告 SDK。累积安装 90 万+，后因 Google 政策原因下架。负责主要研发工作。',
                tech: ['MVP', 'okhttp', 'Java', '谷歌广告', '谷歌上架'],
                icon: ICONS.play,
                gradient: GRADIENTS.g7
            },
            {
                name: '小友',
                period: '2019.05 - 2019.08',
                desc: '实名制社交软件，集成 IM、活体认证、微信授权支付分享、支付宝支付、语音聊天室、地图等功能。',
                tech: ['Java', 'IM SDK', '微信支付', '支付宝', '百度地图'],
                icon: ICONS.chat,
                gradient: GRADIENTS.g7
            },
            {
                name: 'YDNews 1.0',
                period: '2018.10 - 2019.10',
                desc: '海外版"趣头条"资讯产品。独立负责安卓版研发，后因亏损下架。',
                tech: ['MVP', 'okhttp', 'Java'],
                icon: ICONS.broadcast,
                gradient: GRADIENTS.g7
            }
        ]
    },
    {
        name: '成都索克尔软件有限公司',
        shortName: '索克尔',
        period: '2015.11 - 2018.08',
        position: '技术合伙人',
        scale: '20人左右 · 以外包为主',
        gradient: GRADIENTS.g8,
        icon: ICONS.broadcast,
        tech: ['腾讯互动直播SDK', 'Face++', '百度地图', 'Cocos2dx'],
        desc: '任技术合伙人，负责主要编码工作。公司业务以外包为主，期间有 O2O 商城、社交、音乐、互动直播 APP、国家电网配套软件、天使轮团队 APP、社区应用等众多类型应用研发及管理经验。',
        reason: '',
        projects: [
            {
                name: 'V时光 / JMTime',
                period: '2016.10 - 2017.07',
                desc: '互动直播类 APP，支持互动直播基本功能及多人连麦、点歌、打赏、评论、礼物动效等。使用腾讯云服务器及腾讯互动直播 SDK。后更名为 JMTime（积木时光机）。担任技术总监、安卓主程。',
                tech: ['腾讯互动直播SDK', '直播', 'Android'],
                icon: ICONS.broadcast,
                gradient: GRADIENTS.g8
            },
            {
                name: '宜安客',
                period: '2017.03 - 2017.10',
                desc: '为暖通公司研发的门户 APP，包含商品、服务、下单、预约服务。多达 8 种角色类型的工单处理流程，合同生成、签字、资金账务管理、人脸识别验证等。安卓主程，把控项目进度，协调商务及前后端。',
                tech: ['Face++', 'B2C', '百度地图', 'Android'],
                icon: ICONS.broadcast,
                gradient: GRADIENTS.g8
            },
            {
                name: '言几又',
                period: '2015.08 - 2016.02',
                desc: '四川言几又文化有限公司门户产品 APP（收购今日阅读）。担任安卓主程，把控项目进度，协调商务、前后端研发、设计及客户。',
                tech: ['Android', 'MVC'],
                icon: ICONS.chat,
                gradient: GRADIENTS.g8
            },
            {
                name: '王的崛起',
                period: '2018.03 - 2018.08',
                desc: '使用 CocosCreator + cocos2dx 完成开发的游戏，分为安卓、苹果、小程序、H5 版本。担任 H5 项目负责人、游戏前端。',
                tech: ['CocosCreator', 'cocos2dx', 'H5'],
                icon: ICONS.play,
                gradient: GRADIENTS.g8
            }
        ]
    },
    {
        name: '动鱼数码',
        shortName: '动鱼数码',
        period: '2014.09 - 2015.10',
        position: '安卓组长',
        scale: '独立游戏研发',
        gradient: GRADIENTS.g9,
        icon: ICONS.music,
        tech: ['MVC', '数据库', 'MediaPlayer', 'Service', '百度地图'],
        desc: '公司主要业务为独立游戏研发。与咪咕音乐合作组建音乐社交 APP"听说"研发团队。在职主要负责安卓项目研发，编写开发文档，进度把控。担任 Android 项目主程。',
        reason: '',
        projects: [
            {
                name: '听说 APP',
                period: '2014.09 - 2015.10',
                desc: '动鱼数码与咪咕音乐合作研发的音乐社交类 APP，包括播放相关功能、歌单、歌词、演唱会、地图周边用户、周边歌单、即时聊天等。迭代到 2.0 版本，历史注册用户约 30 万。担任前端项目负责人、安卓主程。',
                tech: ['MVC', '数据库', 'MediaPlayer', 'Service', '百度地图'],
                icon: ICONS.music,
                gradient: GRADIENTS.g9
            }
        ]
    },
    {
        name: '深圳天源迪科信息技术股份有限公司',
        shortName: '天源迪科',
        period: '2014.03 - 2014.08',
        position: 'Android工程师',
        scale: '2000人左右 · 深交所上市公司',
        gradient: GRADIENTS.g10,
        icon: ICONS.signal,
        tech: ['Android', 'MVC'],
        desc: '深交所上市公司，中国电信运营商长期合作伙伴。在职主要负责完成 Android 端分配的任务，主要参与四川电信"宽宽通"项目研发。',
        reason: '',
        projects: [
            {
                name: '宽宽通',
                period: '2014.03 - 2014.08',
                desc: '公司电信事业部为四川电信开发的个人宽带业务管理平台软件，包含宽带报修、测速、视频点播、管理等周边功能。担任天源迪科电信事业部 Android 程序。',
                tech: ['Android', 'MVC'],
                icon: ICONS.signal,
                gradient: GRADIENTS.g10
            }
        ]
    }
];

// ===== 渲染技能云 =====
function renderSkills() {
    const cloud = document.getElementById('skillCloud');
    cloud.innerHTML = SKILLS.map((s, i) =>
        `<span class="skill-chip" style="animation-delay: ${i * 0.03}s">${s}</span>`
    ).join('');
}

// ===== 渲染公司列表 =====
function renderCompanyList() {
    const list = document.getElementById('companyList');
    list.innerHTML = COMPANIES.map((c, i) => `
        <button class="company-btn ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="selectCompany(${i})">
            <div class="company-name">${c.shortName}</div>
            <div class="company-meta">
                <span class="company-period">${c.period}</span>
            </div>
            <span class="company-arrow">→</span>
        </button>
    `).join('');
}

// ===== 渲染项目面板 =====
function renderProjectPanel(index) {
    const company = COMPANIES[index];
    const panel = document.getElementById('projectPanel');

    const projectsHtml = company.projects.map(p => `
        <div class="project-card">
            <div class="project-visual${p.img ? ' project-visual-img' : ''}" style="${p.img ? '' : `background: ${p.gradient}`}">
                ${p.img ? `<img src="${p.img}" alt="${p.name}" class="project-img">` : `<div class="project-icon">${p.icon}</div>`}
                <span class="project-period-badge">${p.period}</span>
                <span class="project-name-badge">${p.name}</span>
            </div>
            <div class="project-body">
                <h4>${p.name}</h4>
                <p>${p.desc}</p>
                <div class="project-tech">
                    ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    访问项目
                </a>` : ''}
            </div>
        </div>
    `).join('');

    panel.innerHTML = `
        <div class="company-header">
            <h3>
                ${company.name}
                <span class="ch-position">${company.position}</span>
            </h3>
            <div class="ch-period">⏱ ${company.period}</div>
            <p class="ch-desc">${company.desc}</p>
            <div class="ch-info-row">
                <span class="ch-info-item">
                    <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    ${company.scale}
                </span>
            </div>
            <div class="ch-tech-row">
                ${company.tech.map(t => `<span class="ch-tech">${t}</span>`).join('')}
            </div>
            ${company.reason ? `<div class="ch-reason"><strong>离职原因：</strong>${company.reason}</div>` : ''}
            ${company.achievement ? `<div class="ch-reason"><strong>业绩：</strong>${company.achievement}</div>` : ''}
        </div>
        <div class="projects-grid">
            ${projectsHtml}
        </div>
    `;
}

// ===== 切换公司 =====
function selectCompany(index) {
    document.querySelectorAll('.company-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    renderProjectPanel(index);
}

// ===== 背景粒子 =====
function createParticles() {
    const container = document.getElementById('particles');
    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = Math.random() * 10 + 's';
        const colors = ['#0891b2', '#7c3aed', '#2563eb', '#db2777'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderSkills();
    renderCompanyList();
    renderProjectPanel(0);
});
