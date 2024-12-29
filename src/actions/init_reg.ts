"use server";

import { Session } from "next-auth";
import axios from "lta/lib/axios";

export default async function initReg(data: Session) {
	try {
		const a = await axios.get("/#/dangkymonhoc", {
			headers: {
				Authorization: "Bearer " + data?.user.token,
				Idpc: data?.user.Idpc,
			},
			timeout: 120000,
		});
		const b = await axios.post(
			"/api/sch/w-locdshockytkbuser",
			{
				filter: {
					is_tieng_anh: null,
				},
				additional: {
					paging: {
						limit: 100,
						page: 1,
					},
					ordering: [
						{
							name: "hoc_ky",
							order_type: 1,
						},
					],
				},
			},
			{
				headers: {
					Authorization: "Bearer " + data?.user.token,
					Idpc: data?.user.Idpc,
					"Content-Type": "application/json",
				},
				timeout: 120000,
			},
		);
		const c = await axios.post(
			"/public/api/dkmh/w-locdsnhomto",
			{
				is_CVHT: false,
				additional: {
					paging: {
						limit: 99999,
						page: 1,
					},
					ordering: [
						{
							name: "",
							order_type: "",
						},
					],
				},
			},
			{
				headers: {
					Authorization: "Bearer " + data?.user.token,
					Idpc: data?.user.Idpc,
					"Content-Type": "application/json",
				},
				timeout: 120000,
			},
		);
		const d = await axios.post(
			"/public/api/sms/w-locketquaduyetsinhvien",
			{
				ma_sv: data?.user.student_code,
			},
			{
				headers: {
					Authorization: "Bearer " + data?.user.token,
					Idpc: data?.user.Idpc,
					"Content-Type": "application/json",
				},
				timeout: 120000,
			},
		);

		const e = await axios.post(
			"/api/dkmh/w-locdskqdkmhsinhvien",
			{
				is_CVHT: false,
				is_Clear: false,
			},
			{
				headers: {
					Authorization: "Bearer " + data?.user.token,
					Idpc: data?.user.Idpc,
					"Content-Type": "application/json",
				},
				timeout: 120000,
			},
		);
		//   console.log("e");
		const f = await axios.post(
			"/api/dkmh/w-locdsdieukienloc",
			{},
			{
				headers: {
					Authorization: "Bearer " + data?.user.token,
					Idpc: data?.user.Idpc,
					"Content-Type": "application/json",
				},
				timeout: 30000 * 2,
			},
		);
		const g = await axios.post(
			"/api/sch/w-locdstkbtuanusertheohocky",
			{
				filter: {
					hoc_ky: 20242,
					ten_hoc_ky: "",
				},
				additional: {
					paging: {
						limit: 100,
						page: 1,
					},
					ordering: [
						{
							name: null,
							order_type: null,
						},
					],
				},
			},
			{
				headers: {
					Authorization: "Bearer " + data?.user.token,
					Idpc: data?.user.Idpc,
					"Content-Type": "application/json",
				},
				timeout: 120000,
			},
		);

		const responseList = [a, b, c, d, e, f, g];

		return [
			a.status,
			b.status,
			c.status,
			d.status,
			e.status,
			f.status,
			g.status,
		];
	} catch (e) {
		console.log(e);
		return null;
	}
}
