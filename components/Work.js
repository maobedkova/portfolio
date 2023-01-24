import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


export const Skills = ({ title, cards, image }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<CardSkills
						        component="img"
							key={index}
							image={value.image}
							title={value.title}
							description={value.description}
							link={value.link}
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-2">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<CardProject
							key={index}
                                                        title={value.title}
							description={value.description}
                                                        items={value.items}
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const CardProject = ({ title, description, icons, items }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "22rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<ul>
				{items && items.map((value) => (
					<li key={value.toString()}>
						{value.item}
					</li>
				))}
			</ul>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export const CardSkills = ({ image, title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "22rem" }}>
			<img className="card-img-top my-1" src={publicRuntimeConfig.basePath + image} alt="Image Top" width="250" height="220"></img>
			<div className="py-1" />
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<span className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</span>
		</div>
	);
}
	
