import country from './country_zh'

import advantageImg1 from '../common/images/resource/advantage-1.png'
import advantageImg2 from '../common/images/resource/advantage-2.png'
import advantageImg3 from '../common/images/resource/advantage-3.png'
import advantageImg4 from '../common/images/resource/advantage-4.png'

import coverageImg1 from '../common/images/resource/pic_chinadaily.jpg'
import coverageImg2 from '../common/images/resource/pic_xinjingbao.jpg'
import coverageImg3 from '../common/images/resource/pic_jingjiguanchabao.jpg'
import coverageImg4 from '../common/images/resource/pic_zhongxinwang.jpg'
import coverageImg5 from '../common/images/resource/pic_zhongguoqiyejia.jpg'
import coverageImg6 from '../common/images/resource/pic_xiaofanzhuo.jpg'

export default {
    global: {
        country,
        locCode: [
            {code: 'zh_CN', name: '简体中文'},
            {code: 'zh_TW', name: '繁体中文'}
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
        title: 'Yee|A Decentralised Ecosystem for IM ',
        desc1: 'Yee - 基於區塊鏈的雲端通訊網路<br>及去中心化的社交生態系統',
        desc2: 'Yee 打造無國界通訊體系!',
        total: 'Amount raised so far: $',
        buy: 'Buy your tokens now',
        project: '白皮書',
        technical: 'Technical White Paper',
        sectionTitle1: 'YEE FOUND ON THESE EXCHANGES',
        sectionTitle2: 'TV COVERAGE',
        sectionTitle3: '新聞報導',
        sectionTitle4: 'YEE 緣起',
        sectionTitle5: '我們的優勢',
        sectionTitle6: '里程碑',
        sectionTitle7: '與我們聯繫',
        sectionTitle8: 'YEE 核心團隊',
        sectionTitle9: 'YEE 諮詢顧問',
        sectionTitle10: 'YEE partners & collaborators',
        sectionTitle11: 'YEE partners & collaborators',
        whatIsYee: `基於長達 10 年的通訊技術實踐、過去三年對 YeeCall 研發和營運的理解，以及區塊鏈技術對現有行動網路技術和產品形態將產生革命性創新的洞見。
我們力圖搭建一套基於以太坊的高效、可靠的支持點對點、群組、直播、 IOT 的分佈式云通訊網絡 YeeNet，並在此基礎上：
開發一個支持點對點及群組的即時通訊App-YeeCall；搭建一套無摩擦的、支持智能合約的支付設施YeeWallet；支援網頁開發套件，便於開發者架接YeeNet、YeeCall 和YeeWallet，建立豐富的DApp Store - YeeStore；
我們將 YeeNet、YeeCall、YeeWallet、YeeStore 這一套完整的框架定義為 Yee。
Yee 將是一個基於區塊鏈的通訊基礎設施及去中心化的社交生態系統。`,
        advantages: [
            {
                title: '通訊網路覆蓋全球',
                img: advantageImg1,
                desc: 'YeeCall 已經建立了一張覆蓋全球227 個國家、1000 多家營運商的通訊網路，擁有5 個數據中心、400 多個中繼節點，70% 的流量都通過P2P 模式高效傳輸，目前這張網路已經向IoT 兼容網路演進；'
            },
            {
                title: '全球3000萬用户',
                img: advantageImg2,
                desc: 'YeeCall 擁有超過 3000 萬的註冊用戶，這些用戶分佈在東南亞、歐美、印度和中東地區，已經形成了一個熟人關係鏈為主的社交網路；'
            },
            {
                title: '團隊經驗、技術實力堅強',
                img: advantageImg3,
                desc: '團隊在通訊領域有 10 年以上技術沈澱，在人工智慧、區塊鏈也有 3 年以上的技術實力；打造過 3 個全球超過億級用戶量的產品；'
            },
            {
                title: '開源的合作生態圈',
                img: advantageImg4,
                desc: '擁有超過10家全球用戶數過1億的合作夥伴。'
            }
        ],
        coverages: [
            {
                title: '超越微信, 打造頂級海外通訊App—YeeCall',
                img: coverageImg1,
                link: 'http://www.chinadaily.com.cn/newsrepublic/2016-10/20/content_27124893.htm'
            },
            {
                title: 'YeeCall：路痴老婆引發的創業之路',
                img: coverageImg2,
                link: 'http://epaper.bjnews.com.cn/html/2015-05/28/content_579189.htm?div=-1'
            },
            {
                title: 'YeeCall CEO張磊：三次創業 三種風景',
                img: coverageImg3,
                link: 'http://www.eeo.com.cn/2016/0415/284968.shtml'
            },
            {
                title: '創業者首部紀錄片首映 李開復：創業者是最偉大的人',
                img: coverageImg4,
                link: 'https://www.xcnnews.com/kj/1424496.html'
            },
            {
                title: '從中國複製到全世界，創業者們的全球征戰之路',
                img: coverageImg5,
                link: 'http://tech.sina.com.cn/it/2017-03-28/doc-ifycstww1556802.shtml'
            },
            {
                title: 'YeeCall創始人張磊：海外創業不要說的天花亂墜，搭建模式閉環最重要',
                img: coverageImg6,
                link: 'http://www.xfz.cn/post/1918.html'
            }
        ],
        whitePaper: 'https://ysubcdn.gl.yeecall.com/yee/white-paper/Yee%E2%80%94%E2%80%94%E5%9F%BA%E6%96%BC%E5%8D%80%E5%A1%8A%E9%8F%88%E7%9A%84%E9%9B%B2%E7%AB%AF%E9%80%9A%E8%A8%8A%E7%B6%B2%E8%B7%AF%E5%8F%8A%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E7%9A%84%E7%A4%BE%E4%BA%A4%E7%94%9F%E6%85%8B%E7%B3%BB%E7%B5%B1V1.11%E7%B9%81%E9%AB%94.pdf',
        whitePaperName: 'Yee——基於區塊鏈的雲端通訊網路及去中心化的社交生態系統.pdf'
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
        language: '繁體中文',
        nav: [
            {
                path: 'home#index',
                name: '首頁'
            },
            {
                path: 'home#yee',
                name: '緣起'
            },
            {
                path: 'home#advantages',
                name: '優勢'
            },
            {
                path: 'home#coverage',
                name: '報導'
            }
        ]
    },
    footer: {
        copyright: 'Copyright © 2017 Yee Foundation Ltd. All rights reserved.',
        terms: 'Privacy & Terms'
    }
}