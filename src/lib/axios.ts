import axios from "axios";
import uaGenerate from "lta/services/ua-generate";

const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL_PTIT,
	headers: {
		Accept: "application/json, text/plain, */*",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
		"Content-Type": "application/x-www-form-urlencoded",
		Referer: process.env.BASE_URL_PTIT + "/",
		"Sec-Ch-Ua":
			'"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
		"Sec-Ch-Ua-Mobile": "?0",
		"Sec-Ch-Ua-Platform": '"Windows"',
	},
});

axiosInstance.interceptors.request.use((config) => {
	// console.log("Starting Request", config);
	const urlRequest = config.url;
	let tokenGenerated: string;
	if (urlRequest) {
		tokenGenerated = uaGenerate.genTokenFromURL(urlRequest);
		console.log("Token Generated", tokenGenerated, "from URL", urlRequest);
		config["headers"]["ua"] = tokenGenerated;
	}
	return config;
});

axiosInstance.interceptors.response.use((response) => {
	if (response.status === 200) {
		console.log(
			"Response:",
			response.data,
			"with status",
			response.status,
			"from URL",
			response.config.url,
		);
	} else {
		console.log(
			"Response with status",
			response.status,
			"from URL",
			response.config.url,
			"with payload",
			response.request,
		);
	}
	return response;
});

export default axiosInstance;

export const clientAxios = axios.create({
	baseURL: "https://qldt.ptit.edu.vn",
	headers: {
		Accept: "application/json, text/plain, */*",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
		"Content-Type": "application/x-www-form-urlencoded",
		Referer: "https://qldt.ptit.edu.vn/",
		"Sec-Ch-Ua":
			'"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
		"Sec-Ch-Ua-Mobile": "?0",
		"Sec-Ch-Ua-Platform": '"Windows"',
		"Access-Control-Allow-Origin": "http://localhost:3000",
	},
});
