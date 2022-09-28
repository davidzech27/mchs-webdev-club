import nodemailer from "nodemailer"

const sendEmailHandler = (req, res) => {
	const email = req.body.email
	try {
		transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				type: "OAuth2",
				user: process.env.EMAIL_USERNAME,
				clientId: "000000000000-xxx0.apps.googleusercontent.com",
				clientSecret: "XxxxxXXxX0xxxxxxxx0XXxX0",
				refreshToken: "1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx",
				accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x"
			}
		})

		const message = {
			from: process.env.EMAIL_USERNAME,
			to: email,
			subject: "Hi! Welcome to the Maria Carrillo Web Development Club!",
			text: "asdfadsojfaludnfaisndfiasdf"
		}

		transporter.sendMail(message)
		res.status(200).end()
	} catch {
		res.status(500).end()
	}
}

export default sendEmailHandler
