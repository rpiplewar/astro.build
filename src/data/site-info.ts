export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
	name: "BhuMe",
	title: "The AI co-pilot for Mortgage Lawyers",
	description:
		"BhuMe speeds up the due diligence process by 10X using large language models.",
	image: {
		src: "/og/social.jpg",
		alt: "AI co-pilot for Mortgage Lawyers",
	},
	socialLinks: [
		// {
		// 	platform: "github",
		// 	href: "https://github.com/withastro/astro",
		// 	me: "https://github.com/withastro/",
		// 	text: "Go to Astro's GitHub repo",
		// 	icon: "social/github",
		// },
		// {
		// 	platform: "discord",
		// 	href: "/chat",
		// 	text: "Join the Astro community on Discord",
		// 	icon: "social/discord",
		// },
		{
			platform: "twitter",
			href: "https://twitter.com/rajatpiplewar",
			me: "https://twitter.com/rajatpiplewar",
			text: "Follow Our team on Twitter",
			icon: "social/twitter",
		},
		// {
		// 	platform: "mastodon",
		// 	href: "https://m.webtoo.ls/@astro",
		// 	me: "https://m.webtoo.ls/@astro",
		// 	text: "Follow Astro on Mastodon",
		// 	footerOnly: true,
		// 	icon: "social/mastodon",
		// },
	],
}

export default siteInfo
