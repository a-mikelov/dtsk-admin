module.exports = ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
			host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'postgres'),
			user: env('DATABASE_USERNAME', 'admin'),
			password: env('DATABASE_PASSWORD', '062855'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	},
	debug: false,
	pool: {
		min: 0,
		max: 10,
		acquireTimeoutMillis: 600000,
		createTimeoutMillis: 30000,
		idleTimeoutMillis: 20000,
		reapIntervalMillis: 20000,
		createRetryIntervalMillis: 200,
	}
});
