module.exports = {
  apps: [
		{
			name: 'dangkytin',
			script: 'set DEV_HOSTNAME=14.225.218.92&&set PORT=3000&&npx next start',
			watch: '.',
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
};
