import React from 'react';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
	return (
		<ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route
							path='/dashboard'
							element={<div>Dashboard</div>}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</ThirdwebProvider>
	);
};

export default App;

