import country from './country_zh'
import userImageImg from '../common/images/resource/user-image.png'

export default {
    global: {
        country,
        locCode: [
            {code: 'en_US', name: '英语'},
            {code: 'zh_CN', name: '简体中文'}
        ]
    },
    auth: {
        title: '用户验证',
        next: '下一步',
        statement: 'By clicking ‘get started’, you agree to YeeCall’s',
        terms: 'Term of Use and Privacy Policy.',
        verifyNumber: 'Verify number',
        verifyTip: 'Verification code sent to',
        verifyBtn: 'VERIFY',
        resend: 'RESEND VERIFICATION CODE',
        enterPassword: 'Enter Password',
        forget: 'FORGET PASSWORD',
        start: 'GET STARTED'
    },
    authRegister: {
        title: 'Register',
        welcome: 'Welcome',
        refresh: 'No clear',
        verify: 'Verify',
        email: 'Email',
        verifyCode: 'Image verification',
        emailCode: 'Email Code',
        password: 'Enter password (6-16 numbers and characters)',
        rePassword: 'Confirm password',
        submit: 'Sign Up',
        dialogTitle: 'Get YEE Token',
        dialogDesc: 'Please read the YEE White Paper and be aware of the Pre-Sale details, confirm the conditions below to proceed the subscription.',
        dialogOption: [
            {
                key: 0,
                value: 'I HAVE read, understood and agreed the terms of Pre-Sale, been aware of the risk of the investment, and agreed the Exceptions Clause.'
            },
            {
                key: 1,
                value: 'I am NOT a U.S. citizen, nor resident, nor entity, nor on behalf of a U.S. citizen.'
            },
            {
                key: 2,
                value: 'I am NOT a South Korean citizen, nor resident, nor entity, nor citizen of Mainland China, nor on behalf of a citizen of South Korea or Mainland China.'
            }
        ],
        button: 'Continue',
        invalid: {
            emial: 'Invalid email address',
            verify: 'Invalid verify code'
        }
    },
    home: {
        title: '首页',
        desc1: 'Yee - A Decentralised Ecosystem for Immigrants',
        desc2: 'This is where we brag about something amazing about us.',
        total: 'Amount raised so far: $',
        buy: 'Buy your tokens now',
        project: 'Project White Paper',
        technical: 'Technical White Paper',
        sectionTitle1: 'YEE FOUND ON THESE EXCHANGES',
        sectionTitle2: 'TV COVERAGE',
        sectionTitle3: 'NEWS COVERAGE',
        sectionTitle4: 'WHAT IS YEE',
        sectionTitle5: 'OUR ADVANTAGES',
        sectionTitle6: 'MILESTONES',
        sectionTitle7: 'FREQUENTLY ASKED QUESTIONS',
        sectionTitle8: 'YEE TEAM',
        sectionTitle9: 'YEE ADVISORS',
        sectionTitle10: 'YEE partners & collaborators',
        sectionTitle11: 'YEE partners & collaborators',
        whatIsYee: `基于长达 10 年的通讯技术实践、过去三年对 YeeCall 开发和运营的理解，以及区块链技术对现有移动互联网技术和产品形态可能产生革命性创新的洞见。
我们力图搭建一套基于以太坊的高效、可靠的支持点对点、群组、直播、 IOT 的分布式云通讯网络 YeeNet，并在此基础上：
<ul><li class="small">开发一个支持点对点及群组的即时通讯应用 YeeCall；</li><li class="small">搭建一套无摩擦的、支持智能合约的支付设施 YeeWallet；</li><li class="small">支持网页开发套件，便于开发者接入 YeeNet、YeeCall 和 YeeWallet，建立丰富的 DApp Store - YeeStore；</li></ul>
我们将 YeeNet、YeeCall、YeeWallet、YeeStore 这一套完整的框架定义为 Yee。
Yee 将是一个基于区块链的通讯基础设施及去中心化的社交生态系统。`,
        advantages: [
            {
                title: '通讯网络覆盖全球',
                img: userImageImg,
                desc: 'YeeCall 已经建立了一张覆盖全球 227 个国家、1000 多家运营商的通讯网络，拥有 5 个数据中心、400 多个中继节点，70% 的流量都通过 P2P 模式高效传输，目前这张网络已经向 IOT 兼容网络演进；'
            },
            {
                title: '全球3000万用户',
                img: userImageImg,
                desc: 'YeeCall 拥有超过 3000 万的注册用户，这些用户分布在东南亚、欧美、印度和中东地区，已经形成了一个熟人为主的社交网络；'
            },
            {
                title: '团队经验、技术储备丰富',
                img: userImageImg,
                desc: '团队在通讯领域有 10 年以上技术积累，在人工智能、区块链等领域也有 3 年以上的技术储备；在全球运营过 3 个超过亿级用户量的产品；'
            },
            {
                title: '开放的合作生态圈',
                img: userImageImg,
                desc: '全球用户数超过1亿的合作伙伴超过10家'
            }
        ]
    },
    faq: {
        title: 'FAQ',
        questions: [
            {
                title: 'What will I need to do to participate in the CyberMiles Token Sale?',
                answer: '5miles comprises of team members with extensive experience from leading internet companies, e-commerce platforms, and financial services companies from 5 different countries. For the past three years, the team has applied their expertise to build a successful marketplace, which has become one of the leading shopping apps in the US, generating over USD 3 billion of annual transaction value.'
            },
            {
                title: 'How are the key dates related to the CyberMiles Token Sale?',
                answer: '5miles comprises of team members with extensive experience from leading internet companies, e-commerce platforms, and financial services companies from 5 different countries. For the past three years, the team has applied their expertise to build a successful marketplace, which has become one of the leading shopping apps in the US, generating over USD 3 billion of annual transaction value.'
            },
            {
                title: 'Can I use an ETH address different with registration to join CyberMiles Token Sale?',
                answer: '5miles comprises of team members with extensive experience from leading internet companies, e-commerce platforms, and financial services companies from 5 different countries. For the past three years, the team has applied their expertise to build a successful marketplace, which has become one of the leading shopping apps in the US, generating over USD 3 billion of annual transaction value.'
            }
        ]
    },
    // 组件
    header: {
        title: 'YEE',
        login: '登录',
        language: '语言',
        nav: [
            {
                path: 'home',
                name: '首页'
            },
            {
                path: 'faq',
                name: '帮助中心'
            }
        ]
    },
    footer: {
        copyright: 'Copyright © 2017 CyberMiles Foundation Ltd. All rights reserved.',
        terms: 'Privacy & Terms'
    }
}