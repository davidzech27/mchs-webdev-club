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
				html: `Hello!
                <br><br>
                You sent us your email on <a href="http://mchswebdev.club">our website</a>, so you're probably interested in programming.
                In our club, there are exciting opportunities for people of all experience levels to develop and apply real-world programming skills.
                <br><br>
                If you're not yet familiar with programming or web development, you can learn these skills from our experienced developers and create original projects along the way.
                Or if you're already an avid programmer, you can work on a team with us to build novel and impactful websites.
                We have lots of ideas for this, such as building a website to streamline our advocacy pass system or developing and promoting a new social media platform.
                <br><br>
                There are so many exciting possibilities for our club, but we'll need the support of as many enthusiastic, passionate members as possible.
                Even students outside of Maria Carrillo High School are invited to participate.
                <br><br>
                You can find us at <a href="${process.env.DISCORD_INVITE_LINK}">our Discord server</a>.
                Meeting times are dependent on your experience level, but are very flexible and could be in-person or online.
                Reach out to me if you have any questions!
                <br><br>
                David<br>
                President of Maria Carrillo web development club`
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
