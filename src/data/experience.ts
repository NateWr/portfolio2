import type { CodeTile } from '../scripts/tiles';

const experience: CodeTile[] = [
	{
		path: '~/projects/pkp',
		branch: 'stable-3_4_0',
		commit: 'b1aaa1 Apr 29 13:38',
		title: 'Code Modernization',
		description: 'I helped refactor and modernize a legacy PHP/jQuery application with type hints, automatic code formatting and Vue.js.',
		url: '/code-modernization',
	},
	{
		path: '~/projects/ui-library',
		branch: 'stable-3_4_0',
		commit: '8c6e20 Apr 19 15:05',
		title: 'UI Component Library',
		description: "I designed and built a Vue.js component library for the world's most widely used scholarly publishing software.",
		url: '/ui-component-library',
	},
	{
		path: '~/projects/scrollytelling-vue',
		branch: 'main',
		commit: '2a14f2 May 6 10:04',
		title: 'Scrollytelling with Vue.js',
		description: 'How I managed CPU usage in an interactive, scroll-based story using a reactive framework like Vue.js.',
		url: '/scrollytelling-vue',
	},
	{
		path: '~/projects/fmep-lawfare-data',
		branch: 'main',
		commit: 'd977ed Sep 14 2023',
		title: 'Data Extraction from PDF/Word',
		description: 'I used Node.js scripts to extract unstructured research data and reformat it into well-organized spreadsheets.',
		url: '/lawfare-data-walkthrough',
	},
	{
		path: '~/projects/edinburgh-councillors',
		branch: 'main',
		commit: 'ddc6c1 Mar 8 2023',
		title: 'Data Scraping with Cypress',
		description: "I scraped data on my city councillors and created a postcode lookup tool for local residents.",
		url: '/councillors-walkthrough',
	},
	{
		path: '~/projects/pkp-docs',
		branch: 'main',
		commit: '325461 Jun 5 2023',
		title: 'Documentation',
		description: `I handled developer relations for an open source project, writing documentation, a contributor's guide, and a newsletter.`,
		url: '/devrel',
	},
]

export default experience