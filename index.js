'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#2a2d2a';
const black = backgroundColor;
const slate = '#535f53';
const lightSlate = '#677d67';
const mutedYellow = '#b2d7b2';
const green = '#a2b445';
const lightGreen = '#e5fd70';
const gray = '#919a63';
const brightBlack = '#919a63';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#a2b445',
		colors: [
			black,
			slate,
      lightSlate,
      mutedYellow,
			green,
			lightGreen,
			gray,

			// bright
			brightBlack,
			slate,
      lightSlate,
      mutedYellow,
			green,
			lightGreen,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(162, 180, 69, 0.25);
			}
		`
	});
};
