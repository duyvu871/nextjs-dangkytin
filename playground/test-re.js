let o = (() => {
	class O {}
	return (O.offset = 0), O;
})();

class k {
	rk(re) {
		var ge = this.sc(),
			ne = (re % 3) + 1;
		return Array.from(
			{
				length: 10,
			},
			(Te, Qe) => ge[(re + Qe * ne) % ge.length],
		);
	}
	sc() {
		return [
			58, 43, 197, 133, 4, 165, 110, 3, 44, 202, 186, 28, 118, 177, 32,
			94, 219, 6, 199, 27, 101, 191, 66, 115, 234, 120, 10, 236, 104, 108,
			74, 247, 68, 198, 62, 203, 17, 102, 185, 42,
		]
			.slice(-36)
			.slice(0, 32);
	}
	ec(re, ge) {
		const ne = this.rk(ge).reverse(),
			Te = re.split("").map((xt) => xt.charCodeAt(0));
		let Qe = [];
		for (; Qe.length < Te.length; ) Qe = [...Qe, ...ne];
		return Te.map((xt, Cn) => xt ^ Qe[Cn]);
	}
}

// tạo token xác thực
class UaGenerate {
	constructor(ge) {
		(this.arq = ge), (this.cn = "%\\6SaCzTYFe~Wua?ak"), (this.a = "Phapix");
	}
	mc(ge, ne, Te) {
		return ge.slice(-ne).slice(0, ne - Te);
	}
	rnd(ge) {
		return Math.ceil(Math.random() * ge);
	}
	// token generator
	gc(ge) {
		const ne = `${this.rnd(89) + 10}${new Date().getTime() - o.offset}${
				this.rnd(89) + 10
			}${ge}`,
			Te = this.rnd(31),
			Qe = [Te + 32, ...new k().ec(ne, Te)]
				.map((At) => String.fromCharCode(At))
				.join("");
		return btoa(Qe);
	}
	/*
	 * @param {string}
	 * ex: https://qldt.ptit.edu.vn/api/auth/login
	 * return: AUTH/LOGIN
	 */
	isapi(ge) {
		const ne = this.mc(this.a, 4, 1);
		let Te = ge?.toLowerCase() || "";
		return (
			Te.startsWith(`${ne}/`) && (Te = "/" + Te),
			Te.indexOf(`/${ne}/`) >= 0
				? Te.split(`/${ne}/`)[1].toUpperCase()
				: ""
		);
	}
	chd(ge, ne = null) {
		let Te = ne || new D.WM();
		var Qe = this.isapi(ge); //ex: AUTH/LOGIN
		if (Qe) {
			const xt = this.mc(this.cn, 5, 3); // ua header
			Qe.length > 22 && (Qe = Qe.slice(0, 22)),
				(Te = ne
					? {
							headers: (Te.headers || {}).set(xt, this.gc(Qe)),
						}
					: {
							// set ua header
							headers: new D.WM().set(xt, this.gc(Qe)),
						});
		}
		return Te || {};
	}
	chd_upload(ge, ne = null) {
		let Te = ne || new D.WM();
		var Qe = this.isapi(ge);
		if (Qe) {
			const xt = this.mc(this.cn, 5, 3);
			Qe.length > 22 && (Qe = Qe.slice(0, 22)),
				(Te = ne
					? {
							headers: (Te.headers || {}).set(xt, this.gc(Qe)),
						}
					: {
							headers: new D.WM().set(xt, this.gc(Qe)),
						});
		}
		return (
			(Te.reportProgress = !0),
			(Te.observe = "events"),
			(Te.responseType = "json"),
			Te || {}
		);
	}
	serializeObject(ge) {
		return ge ? JSON.stringify(ge) : null;
	}
	get(ge, ne = null) {
		return (ne = this.chd(ge, ne)), this.arq.get(ge, ne);
	}
	post(ge, ne, Te = null) {
		return this.arq.post(ge, ne, this.chd(ge, Te));
	}
	post_upload(ge, ne, Te = null) {
		return this.arq.post(ge, ne, this.chd_upload(ge, Te));
	}
	request(ge) {
		return this.arq.request(ge);
	}
	direct() {
		return this.arq;
	}
}

//test chd
const ge = new UaGenerate(null);

const isapi = ge.isapi("https://qldt.ptit.edu.vn/api/auth/login");
const mc = ge.mc(ge.cn, 5, 3);
const gc = ge.gc(isapi);

console.log("isapi", isapi); // AUTH/LOGIN
console.log("header key", mc); // ua
console.log("ua token", gc); // token
