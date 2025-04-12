export const mailConfig = {
    transport: {
        host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
        port: parseInt(process.env.EMAIL_PORT??"",10) || 587,
        secure:process.env.EMAIL_SECURE || true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    }
    
}