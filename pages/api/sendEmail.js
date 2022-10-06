import nodemailer from "nodemailer"

const sendEmailHandler = (req, res) => {
	if (req.method === "POST") {
		const email = req.body.email

		try {
			const transporter = nodemailer.createTransport({
				host: "mail.privateemail.com",
				port: 587,
				secureConnection: true,
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD
				}
			})

			const messageToEmail = {
				from: process.env.EMAIL_USERNAME,
				to: email,
				subject: "Connect with the Maria Carrillo web development club",
				text: `Hello!
                
You sent us your email at http://mchswebdev.club, so you're probably interested in programming. In our club, there are exciting opportunites for people of all experience levels to develop and apply their real-world programming skills.

If you're not yet familiar with programming or web development, you can learn these skills from our experienced developers and make original projects along the way. Or if you're already an avid programmer, you can work on a team with us to build novel and impactful websites. I have a ton of ideas for this, including websites for the benefit of our community, such as websites for our school or other clubs, or for entrepreneurial ventures, such as a new social media platform or chat app.
                
There so many exciting possibilities, but we'll need the support of as many passionate members as possible. Even students not at Maria Carrillo High School are invited to participate.

Meeting times are very flexible, and could be in-person or online. Reach out to me if you have any questions!
                
David
President of Maria Carrillo web development club
Find us at our Discord server: ${process.env.DISCORD_INVITE_LINK}`
			}

			transporter.sendMail(messageToEmail)

			const messageToSelf = {
				from: process.env.EMAIL_USERNAME,
				to: process.env.SELF_EMAIL_USERNAME,
				subject: "New person is interested in WDC",
				text: `Person with email address "${email}" wants to get involved in the WDC.`
			}

			transporter.sendMail(messageToSelf)

			res.status(200).end()
		} catch {
			res.status(500).end()
		}
	} else {
		res.status(405).end()
	}
}

export default sendEmailHandler
