export const jwtConfig = {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: "7d" },
};
