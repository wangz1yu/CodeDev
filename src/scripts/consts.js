import websiteIcon from '@/assets/services/website.svg';
import maintenanceIcon from '@/assets/services/maintenance.svg';
import softwareIcon from '@/assets/services/software.svg';

import instagramIcon from "@/assets/social/instagram.svg"
import linkedinIcon from "@/assets/social/linkedin.svg"
import githubIcon from "@/assets/social/github.svg"

export const projects = {
	en: [
		{
			tag: 'Web Development & Rebranding',
			name: 'Trattoria Enoteca Luca',
			description:
				'We like to laugh and build strong relationships with the people that we work with.',
			img: '/projects/trattoria.webp',
			link: 'https://github.com/',
		},
		{
			tag: 'E-commerce and Management',
			name: 'Red Feather Trading Post',
			description:
				'We are quick to respond to messages and we are there when you need us most.',
			img: '/projects/commerce.webp',
			link: 'https://github.com/',
			gallery: true
		},
		{
			tag: 'Web Development',
			name: 'Slate Electric',
			description:
				'Saving you money to invest back in the business, and to promote team lunches and coffee chats.',
			img: '/projects/electric.webp',
			link: 'https://github.com/',
			gallery: true
		},
		{
			tag: 'Website Revamp',
			name: 'SkyShot Management',
			description:
				'We like to laugh and build strong relationships with the people that we work with.',
			img: '/projects/skyshot.webp',
			link: 'https://github.com/',
			gallery: true
		},
	],
	de: [
		{
			tag: 'Webentwicklung und Rebranding',
			name: 'Trattoria Enoteca Luca',
			description:
				'Wir lachen gerne und bauen starke Beziehungen zu den Menschen auf, mit denen wir arbeiten.',
			img: '/projects/trattoria.webp',
			link: 'https://github.com/',
		},
		{
			tag: 'E-Commerce und Management',
			name: 'Red Feather Trading Post',
			description:
				'Wir reagieren schnell auf Nachrichten und sind da, wenn Sie uns am meisten brauchen.',
			img: '/projects/commerce.webp',
			link: 'https://github.com/',
			gallery: true
		},
		{
			tag: 'Web Entwicklung',
			name: 'Slate Electric',
			description:
				'Sie sparen Geld, das Sie wieder in Ihr Unternehmen investieren und Team-Mittagessen und Kaffeeklatsch fördern können.',
			img: '/projects/electric.webp',
			link: 'https://github.com/',
			gallery: true
		},
		{
			tag: 'Web Entwicklung',
			name: 'SkyShot Management',
			description:
				'Wir lachen gerne und bauen starke Beziehungen zu den Menschen auf, mit denen wir arbeiten.',
			img: '/projects/skyshot.webp',
			link: 'https://github.com/',
			gallery: true
		},
	],
	zh: [
		{
			tag: '网站开发与品牌重塑',
			name: 'Trattoria Enoteca Luca',
			description:
				'我们喜欢欢声笑语，与合作伙伴建立牢固的关系。',
			img: '/projects/trattoria.webp',
			link: 'https://github.com/',
		},
		{
			tag: '电子商务与管理',
			name: 'Red Feather Trading Post',
			description:
				'我们快速响应消息，在您最需要的时候为您提供支持。',
			img: '/projects/commerce.webp',
			link: 'https://github.com/',
			gallery: true
		},
		{
			tag: '网站开发',
			name: 'Slate Electric',
			description:
				'为您节省资金，让您重新投资业务，促进团队聚餐和咖啡聊天。',
			img: '/projects/electric.webp',
			link: 'https://github.com/',
			gallery: true
		},
		{
			tag: '网站改版',
			name: 'SkyShot Management',
			description:
				'我们喜欢欢声笑语，与合作伙伴建立牢固的关系。',
			img: '/projects/skyshot.webp',
			link: 'https://github.com/',
			gallery: true
		},
	],
};

export const socials = [
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/',
		icon: instagramIcon.src
	},
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/',
		icon: linkedinIcon.src
	},
	{
		name: "Github",
		link: "https://github.com/cosmoart/CodeDev",
		icon: githubIcon.src
	}
];

export const services = {
	en: [
		{
			title: 'Website Development',
			items: [
				'Website Creation',
				'UI/UX Design & Wireframing',
				'Website Maintenance',
			],
			icon: websiteIcon.src,
		},
		{
			title: 'Software Development',
			items: [
				'Web App Development',
				'Mobile App Development',
				'Desktop App Development',
			],
			icon: softwareIcon.src,
		},
		{
			title: 'Maintenance',
			items: [
				'Hosting & Management',
				'Optimization & Best Practices',
				'Iterations & Frequent Updates',
			],
			icon: maintenanceIcon.src,
		},
	],
	de: [
		{
			title: 'Webseitenentwicklung',
			items: [
				'Website-Erstellung',
				'UI/UX-Design und Wireframing',
				'Website-Wartung',
			],
			icon: websiteIcon.src,
		},
		{
			title: 'Software-Entwicklung',
			items: [
				'Web-App-Entwicklung',
				'Entwicklung mobiler Apps',
				'Entwicklung von Desktop-Apps',
			],
			icon: softwareIcon.src,
		},
		{
			title: 'Web- und Softwarewartung',
			items: [
				'Hosting und Verwaltung',
				'Optimierung und Best Practices',
				'Iterationen und häufige Updates',
			],
			icon: maintenanceIcon.src,
		},
	],
	zh: [
		{
			title: '网站开发',
			items: [
				'网站创建',
				'UI/UX 设计与线框图',
				'网站维护',
			],
			icon: websiteIcon.src,
		},
		{
			title: '软件开发',
			items: [
				'Web 应用开发',
				'移动应用开发',
				'桌面应用开发',
			],
			icon: softwareIcon.src,
		},
		{
			title: '维护服务',
			items: [
				'托管与管理',
				'优化与最佳实践',
				'迭代与频繁更新',
			],
			icon: maintenanceIcon.src,
		},
	],
};

export const perks = {
	en: [
		{
			title: 'Cost Effective',
			description:
				'Saving you money to invest back in the business, and to promote team lunches and coffee chats :)',
		},
		{
			title: 'Human Touch',
			description:
				'We like to laugh and build strong relationships with the people that we work with.',
		},
		{
			title: 'Quick and Efficient',
			description:
				'We are quick to respond to messages and we are there when you need us most.',
		},
	],
	de: [
		{
			title: 'Kosteneffizient',
			description:
				'Sie sparen Geld, das Sie wieder in Ihr Unternehmen investieren und zur Förderung von Team-Mittagessen und Kaffeeklatsch nutzen können :)',
		},
		{
			title: 'Menschliche Berührung',
			description:
				'Wir lachen gerne und bauen starke Beziehungen zu den Menschen auf, mit denen wir arbeiten.',
		},
		{
			title: 'Schnell und effizient',
			description:
				'Wir reagieren schnell auf Nachrichten und sind da, wenn Sie uns am meisten brauchen.',
		},
	],
	zh: [
		{
			title: '成本效益',
			description:
				'为您节省资金，让您重新投资业务，促进团队聚餐和咖啡聊天 :)',
		},
		{
			title: '人文关怀',
			description:
				'我们喜欢欢声笑语，与合作伙伴建立牢固的关系。',
		},
		{
			title: '快速高效',
			description:
				'我们快速响应消息，在您最需要的时候为您提供支持。',
		},
	],
};

export const process = {
	en: [
		{
			title: 'Research',
			description: 'Understand your needs, and plan.',
		},
		{
			title: 'Concept',
			description: 'Bringing your dreams to reality.',
		},
		{
			title: 'Development',
			description: 'Solution development.',
		},
		{
			title: 'Delivery',
			description: 'Solution deployed and supported.',
		},
	],
	de: [
		{
			title: 'Forschung',
			description: 'Verstehen Sie Ihre Bedürfnisse und planen Sie.',
		},
		{
			title: 'Konzept',
			description: 'Wir machen Ihre Träume wahr.',
		},
		{
			title: 'Entwicklung',
			description: 'Lösungsentwicklung.',
		},
		{
			title: 'Lieferung',
			description: 'Lösung bereitgestellt und unterstützt.',
		},
	],
	zh: [
		{
			title: '研究',
			description: '了解您的需求，制定计划。',
		},
		{
			title: '概念',
			description: '将您的梦想变为现实。',
		},
		{
			title: '开发',
			description: '解决方案开发。',
		},
		{
			title: '交付',
			description: '解决方案部署与支持。',
		},
	],
};

export const techs = [
	{
		title: 'React',
		color: '#61DAFB',
		icon: '/techs/react.svg',
	},
	{
		title: 'Node.js',
		color: '#5FA04E',
		icon: '/techs/nodejs.svg',
	},
	{
		title: 'Next.js',
		color: '#000000',
		icon: '/techs/nextjs.svg',
	},
	{
		title: 'Astro',
		color: '#BC52EE',
		icon: '/techs/astro.svg',
	},
	{
		title: 'Svelte',
		color: '#FF3E00',
		icon: '/techs/svelte.svg',
	},
	{
		title: 'PHP',
		color: '#777BB4',
		icon: '/techs/php.svg',
	},
	{
		title: 'MySQL',
		color: '#4479A1',
		icon: '/techs/mysql.svg',
	},
	{
		title: 'Figma',
		color: '#F24E1E',
		icon: '/techs/figma.svg',
	},
	{
		title: '.NET',
		color: '#512BD4',
		icon: '/techs/net.svg',
	},
];