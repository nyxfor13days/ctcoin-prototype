import React from 'react';
import { useAddress, useMetamask } from '@thirdweb-dev/react';
import {
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
	Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	let navigate = useNavigate();
	const connectWithMetamask = useMetamask();
	const address = useAddress();

	return (
		<Container maxWidth='lg'>
			<Stack
				justifyContent='center'
				alignItems='center'
				sx={{ height: '100vh' }}>
				<Paper
					elevation={1}
					sx={{ padding: '2.5em 0', minWidth: '500px' }}>
					<Stack
						direction='column'
						justifyContent='center'
						alignItems='center'
						spacing={2}>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={0.5}>
							<Grid item sx={6}>
								<img
									alt='Logo'
									src={
										process.env.PUBLIC_URL +
										'/assets/images/logo.png'
									}
									style={{ width: '100px' }}
								/>
							</Grid>

							<Grid item sx={6}>
								<Typography variant='h3'>CTCoin</Typography>
							</Grid>
						</Grid>

						{address ? (
							navigate('dashboard', { replace: true })
						) : (
							<Grid
								container
								direction='column'
								justify='center'
								alignItems='center'
								spacing={2}>
								<Grid item>
									<Typography variant='body1'>
										Connect your wallet to continue...
									</Typography>
								</Grid>

								<Grid item>
									<Button
										startIcon={
											<img
												alt='metamask logo'
												src={
													process.env.PUBLIC_URL +
													'/assets/images/metamask-logo.png'
												}
												style={{ width: '24px' }}
											/>
										}
										variant='contained'
										color='info'
										onClick={connectWithMetamask}>
										Connect with Metamask
									</Button>
								</Grid>
							</Grid>
						)}
					</Stack>
				</Paper>
			</Stack>
		</Container>
	);
};

export default Login;

