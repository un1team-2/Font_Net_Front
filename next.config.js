/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://localhost:5096/api/v1/:path*",
			},
		];
	},
};

module.exports = nextConfig;
