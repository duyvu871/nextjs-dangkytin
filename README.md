## Hệ thống tự động đăng ký tín chỉ - PTIT/FTU

### Info:
- *Original: [n0xgg04/nextjs-dangkytin](https://github.com/n0xgg04/nextjs-dangkitin)
- *Version : 1.1.1
- *Author: [n0xgg04](https://facebook.com/n0xgg03)
- *Modifier: [duyvu871](https://www.facebook.com/du.bui.380683)

### Requirements:

- VPS chạy được node v20+
- Cài đặt NextJS v14.0 trở lên

### Techs:
- Next 14.0
- Prisma
- SocketIO
- ua generator: [qldt-ua-reverse](https://github.com/duyvu871/qldt-ua-reverse)
### Installation:
#### 1. Clone project
```bash
git clone https://github.com/duyvu871/nextjs-dangkytin
```

#### 2. Install node modules
```bash
yarn install
```

#### 3. Set up prisma client
```bash
yarn run postinstall
```

#### 4. Run and run app
```bash
yarn build && yarn start
```
