import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#5e81ac',
		},
		secondary: {
			main: '#8fbcbb',
		},
		background: {
			default: '#2e3440',
			paper: '#3b4252',
		},
		text: {
			primary: '#eceff4',
			secondary: '#e5e9f0',
			disabled: '#4c566a',
		},
		error: {
			main: '#bf616a',
		},
		warning: {
			main: '#d08770',
		},
		info: {
			main: '#81a1c1',
		},
		success: {
			main: '#a3be8c',
		},
		divider: '#434c5e',
	},
	typography: {
		fontFamily: 'Noto Sans',
	},
	spacing: 5,
	shape: {
		borderRadius: 5,
	},
	overrides: {
		MuiSwitch: {
			root: {
				width: 42,
				height: 26,
				padding: 0,
				margin: 8,
			},
			switchBase: {
				padding: 1,
				'&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
					transform: 'translateX(16px)',
					color: '#fff',
					'& + $track': {
						opacity: 1,
						border: 'none',
					},
				},
			},
			thumb: {
				width: 24,
				height: 24,
			},
			track: {
				borderRadius: 13,
				border: '1px solid #bdbdbd',
				backgroundColor: '#fafafa',
				opacity: 1,
				transition:
					'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
			},
		},
	},
	props: {
		MuiTooltip: {
			arrow: true,
		},
	},
});
