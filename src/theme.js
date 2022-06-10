import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#b58c3f',
		},
		secondary: {
			main: '#f5bc00',
		},
		background: {
			default: '#1c1c1c',
			paper: '#202020',
		},
		text: {
			primary: '#fefefe',
		},
		divider: '#1a1a1a',
	},
	typography: {
		fontFamily: 'Noto Sans',
	},
	spacing: 10,
	shape: {
		borderRadius: 2,
	},
	props: {
		MuiAppBar: {
			color: 'transparent',
		},
		MuiTooltip: {
			arrow: true,
		},
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
});

