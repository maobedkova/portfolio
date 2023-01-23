
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Hashir",
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
			icons: null,
		},
		{
			title: "Writing about NLP",
			description: "I write NLP blog posts on Medium and share my thoughts about NLP in Twitter.",
			icons: null,
		},
		{
			title: "NLP Advisor",
			description: "I am open to consult you about NLP or help you with your NLP solution.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Expertise",
	cards: [
		{
			title: "Natural Language Pocessing",
			description: "Sentiment Analysis | Machine Translation | Topic Modelling | Named Entity Recognition | Text Classification, Clusterization and more"
		},
		{
			title: "Speech Recognition",
			description: "Speech-to-Text | Acoustic Embeddings | Pronunciation Modelling"
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
