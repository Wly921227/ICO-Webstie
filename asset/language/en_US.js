import country from './country_en'

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
            {code: 'en_US', name: 'English'},
            {code: 'zh_CN', name: '简体中文'},
            {code: 'zh_TW', name: '繁体中文'}
        ]
    },
    auth: {
        title: 'Verify',
        next: 'Next',
        statement: 'By choosing ‘get started’, you agree to YeeCall’s',
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
        title: 'Sign Up',
        welcome: 'Welcome',
        refresh: 'Not clear',
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
    locCode: [
        {code: 'zh_CN', name: '简体中文'},
        {code: 'zh_TW', name: '繁体中文'}
    ],
    home: {
        title: 'Yee|A Decentralized Ecosystem for IM ',
        desc1: 'Yee - A blockchian-based cloud communication network<br>and decentralized social ecosystem',
        desc2: 'Yee builds communication system beyond borders',
        total: 'Amount raised so far: $',
        buy: 'Buy your tokens now',
        project: 'White Paper',
        technical: 'Technical White Paper',
        sectionTitle1: 'YEE FOUND ON THESE EXCHANGES',
        sectionTitle2: 'TV COVERAGE',
        sectionTitle3: 'News Report',
        sectionTitle4: 'YEE Background',
        sectionTitle5: 'Our Strength',
        sectionTitle6: 'Milestone',
        sectionTitle7: 'Contact Us',
        sectionTitle8: 'YEE Core Team',
        sectionTitle9: 'YEE Consulting',
        sectionTitle10: 'YEE Partners & Collaborators',
        sectionTitle11: 'YEE Partners & Collaborators',
        whatIsYee: `Our company has 10 years experience applying communication technology to solve real-world problems, 3 years experience developing and marketing YeeCall app and the revolutionary insight of how blockchain technology could change current mobile internet technology and products. Based on Ethereum,
we build an efficient distributed cloud-based communication system called YeeNet, which support stable 1 to 1 & group chat and calls, live streaming video and IoT communication. Base on YeeNet, we support 
        <ul><li class="small">YeeCall, an instant messaging app supporting 1 to 1 & group chat and calls;
        </li><li class="small">YeeWallet, a payment infrastructure, which supports friction-free commerce and smart contracts;
        </li><li class="small">YeeStore, a web development suite for developers to easily add YeeNet, YeeCall, and YeeWallet to different Dapps；
        </li></ul>
We called the whole system Yee, which includes YeeNet, YeeCall, YeeWallet and YeeStore.
Yee is a blockchain-based cloud communication network and decentralized social ecosystem.`,
        advantages: [
            {
                title: 'Communication Network With Global Coverage',
                img: advantageImg1,
                desc: 'YeeCall already built a network covering 277 countries worldwide, 1000 operators’ networks and has 5 data centers and 400+ connecting nodes. 70% data transmit with high efficiency through P2P. YeeCall is working on IoT compatibility;'
            },
            {
                title: '30 Million Users Worldwide',
                img: advantageImg2,
                desc: 'YeeCall has more than 30 million registered users from Southeast Asia, Europe, North America, India and  Middle East. These users already created a social network based on acquaintances;'
            },
            {
                title: 'Strong Technological Capability and Rich Community Management Experience',
                img: advantageImg3,
                desc: 'The team has 10 years experience applying communication technology to solve real-world problems, 3-year experience in AI, Blockchain field etc. , and created more than 3 super apps with more than 100 million users worldwide;'
            },
            {
                title: 'Open Partnership',
                img: advantageImg4,
                desc: 'More than 10 partners own more than 100 million users worldwide'
            }
        ],
        coverages: [
            {
                title: 'Better Than WeChat, YeeCall, The Top IM App For Global Users',
                img: coverageImg1,
                link: 'http://www.chinadaily.com.cn/newsrepublic/2016-10/20/content_27124893.htm'
            },
            {
                title: 'YeeCall: Because His Wife Is Terrible With Directions',
                img: coverageImg2,
                link: 'http://epaper.bjnews.com.cn/html/2015-05/28/content_579189.htm?div=-1'
            },
            {
                title: 'Zhang Lei: 3 Companies, 3 Journeys',
                img: coverageImg3,
                link: 'http://www.eeo.com.cn/2016/0415/284968.shtml'
            },
            {
                title: 'Frist Chinese Entrepreneurs Documentary Kai-Fu Lee Entrepreneurs Are The Greatest',
                img: coverageImg4,
                link: 'https://www.xcnnews.com/kj/1424496.html'
            },
            {
                title: 'Copy From China, Entrepreneurs Expand Their Business To The World',
                img: coverageImg5,
                link: 'http://tech.sina.com.cn/it/2017-03-28/doc-ifycstww1556802.shtml'
            },
            {
                title: 'YeeCall CEO Zhang Lei: Healthy Ecosystem Is The Most Important For Business Expand To The World',
                img: coverageImg6,
                link: 'http://www.xfz.cn/post/1918.html'
            }
        ],
        whitePaper: 'https://ysubcdn.gl.yeecall.com/yee/white-paper/Yee%E2%80%94%E2%80%94%E5%9F%BA%E4%BA%8E%E5%8C%BA%E5%9D%97%E9%93%BE%E7%9A%84%E4%BA%91%E9%80%9A%E8%AE%AF%E7%BD%91%E7%BB%9C%E5%8F%8A%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E7%9A%84%E7%A4%BE%E4%BA%A4%E7%94%9F%E6%80%81%E7%B3%BB%E7%BB%9FV1.11.pdf',
        whitePaperName: 'Yee——a blockchian-based cloud communication network and decentralized social ecosystem.pdf'
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
        login: '	Sign In',
        language: '简体中文',
        nav: [
            {
                path: 'home#index',
                name: 'Home'
            },
            {
                path: 'home#yee',
                name: 'Background'
            },
            {
                path: 'home#advantages',
                name: 'Our Strength'
            },
            {
                path: 'home#coverage',
                name: 'News'
            }
        ]
    },
    footer: {
        copyright: 'Copyright © 2017 Yee Foundation Ltd. All rights reserved.',
        terms: 'Privacy & Terms'
    }
}