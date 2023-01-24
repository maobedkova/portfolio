
import profile from './profile.png';
import { faGithub, faTwitter, faMedium, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faBrowser, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Professional Activity",
			link: "#work",
		},
		{
			title: "Expertise",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Maria Obedkova",
	description: "NLP Engineer with expertise in ML and DL and experience working in the industry applying NLP methods to real-world problems.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://maobedkova.github.io/",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"As an NLP Engineer, I am passionate about all aspects of Natural Language and Speech Processing. I have a diverse range of experience in various NLP fields, with an extensive knowledge in Machine Learning and Deep Learning.",
		"At some point, I have transitioned to working in the industry, and am currently focused on Aspect-Based Sentiment Analysis. Still, I always keep an eye out for new and exciting developments in the field of NLP. I am a huge fan of open-source projects and try to contribute here and there.",
		"Additionally, I am driven to educate others about NLP, through my blogs and even have begun to merge my love for illustration with my work in NLP. My ultimate goal is to improve the lives of people through human-computer interaction and make a transformative impact.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "NLP Engineer at TrustYou",
			description: "I work as a Senior NLP Engineer at TrustYou devolping and maintaining an Aspect-Based Sentiment Analysis system.",
			image: null,
			icons: [
				{
					icon: faBrowser,
					link: "https://www.trustyou.com/",
				},
			]
		},
		{
			title: "NLP Advisor",
			description: "I am open to consult you about NLP or help you with your NLP solution.",
			image: null,
			icons: [
				{
					icon: faLinkedIn,
					link: "https://www.linkedin.com/in/mobedkova/",
				},
				{
					icon: faBrowser,
					link: "http://polywork.com/invite/maria_obedkova",
				},
			]
		},
		{
			title: "Writing about NLP",
			description: "I write NLP blog posts on Medium and share my thoughts about NLP in Twitter.",
			image: null,
			icons: [
				{
					icon: faMedium,
					link: "https://medium.com/@maobedkova",
				},
				{
					icon: faTwitter,
					link: "https://mobile.twitter.com/maobedkova",
				},
			]
		},
		{
			title: "Contributing to NLP projects",
			description: "I take part in different hackathons and NLP-related open-source projects.",
			image: null,
			icons: [
				{
					icon: faGithub,
					link: "https://huggingface.co/mobedkova",
				},
				{
					icon: faFaceSmilingHands,
					link: "https://huggingface.co/mobedkova",
				},
			]
		}
	],
}

export const projects = {
	title: "What I can",
	cards: [
		{
			title: "Natural Language Pocessing",
			description: "I worked on various NLP tasks among which",
			image: null,
			items: [
				{
					item: "Sentiment Analysis",
				},
				{
					item: "Machine Translation",
				},
				{
					item: "Topic Modelling",
				},
				{
					item: "Named Entity Recognition",
				},
		                {
					item: "Text Classification and Clusterization",
				}
		               ]
		},
		{
			title: "Speech Recognition",
			description: "I spent time working on",
			image: null,
			items: [
				{
					item: "Speech-to-Text",
				},
				{
					item: "Acoustic Embeddings",
				},
				{
					item: "Pronunciation Modelling",
				}
			]
		}
	],
}

export const contact = {
	title: "Feel free to get in touch!",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:maryobedkova@gmail.com",
			isPrimary: true,
		},
		{
			title: "Reach me on LinkedIn",
			link: "https://www.linkedin.com/in/mobedkova/",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Maria Obedkova | NLP Engineer | ASR Engineer | ML | DL",
	description: "NLP Engineer with expertise in ML and DL and experience working in the industry applying NLP methods to real-world problems.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@maobedkova",
	description: "NLP | ASR | AI | R&D | writing and illustrating as a hobby",
	cards: [
		{
			title: "My Resume",
			link: "https://maobedkova.github.io/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/mobedkova/",
		},
		{
			title: "My Twitter",
			link: "https://mobile.twitter.com/maobedkova",
		},
		{
			title: "My Medium",
			link: "https://medium.com/@maobedkova",
		},
		{
			title: "My GitHub",
			link: "https://github.com/maobedkova",
		},
		{
			title: "My HuggingFace Hub",
			link: "https://huggingface.co/mobedkova",
		},
		{
			title: "My Polywork",
			link: "http://polywork.com/invite/maria_obedkova",
		},
	]
}
