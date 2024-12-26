fetch("https://qldt.ptit.edu.vn/api/auth/login", {
	headers: {
		accept: "application/json, text/plain, */*",
		"accept-language": "vi;q=0.9",
		"cache-control": "no-cache",
		"content-type": "text/plain",
		idpc: "0",
		pragma: "no-cache",
		priority: "u=1, i",
		"sec-ch-ua":
			'"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": '"Windows"',
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"sec-gpc": "1",
		ua: "OWqELf0wkPn1xVtviSTzMZ3yh6I4Fp5QhUTshQ==",
	},
	referrer: "https://qldt.ptit.edu.vn/",
	referrerPolicy: "strict-origin-when-cross-origin",
	body: "username=B23DCKH026&password=5cZFJea66s%5ELe%26%269Vvdjn%259f(K6_!5!y4%5EF0OkpF5Kp(3ga%26W)&grant_type=password",
	method: "POST",
	mode: "cors",
	credentials: "omit",
})
	.then((res) => res.json())
	.then(console.log)
	.catch(console.error);
