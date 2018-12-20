'use strict';
const path = require('path');
const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, { wait: false });

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://juristr.com'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/juristr'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/juristr'
	},
	{
		label: 'Blog',
		url: 'https://juristr.com/blog'
	},
	{
		label: 'Ask Me Anything',
		url: 'https://github.com/juristr/ama'
	},
	{
		label: 'Contact',
		url: 'https://juristr.com/about'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br />
		<div>
			<Text>Hi, I'm Juri!</Text>
		</div>
		<div>
			<Text>
				Google Developer Expert #GDE •🎓 @eggheadio instructor • ❤ Softw.
				Architecture, JS, Angular • dev • freelance trainer • 📽 author • 📝
				blogger • intl speaker
			</Text>
		</div>
		<br />
		<SelectInput items={items} onSelect={handleSelect} />
	</div>
);
