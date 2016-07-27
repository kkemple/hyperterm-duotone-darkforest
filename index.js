'use strict'

const foregroundColor = '#eff0eb'
const backgroundColor = '#2a2d2a'
const black = backgroundColor
const slate = '#535f53'
const lightSlate = '#677d67'
const mutedYellow = '#b2d7b2'
const green = '#a2b445'
const lightGreen = '#e5fd70'
const gray = '#919a63'
const brightBlack = '#919a63'
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: slate,
	pink: lightSlate,
	yellow: mutedYellow,
	blue: green,
	magenta: lightGreen,
	cyan: gray,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: slate,
	lightGreen: lightSlate,
	lightPink: lightGreen,
	lightYellow: mutedYellow,
	lightBlue: green,
	lightMagenta: lightGreen,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#a2b445',
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(162, 180, 69, 0.25)
			}
		`
	})
}

exports.middleware = () => (next) => (action) => {
	switch (action.type) {
		case 'CONFIG_LOAD':
		case 'CONFIG_RELOAD':
		action.config.foregroundColor = foregroundColor
		action.config.backgroundColor = backgroundColor
		action.config.cursorColor = green
		action.config.colors = colors
	}
	next(action)
}
