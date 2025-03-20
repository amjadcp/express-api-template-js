const envConfig = {
    whitelist: process.env.WHITELIST?.split(",") ?? [],
    port: process.env.PORT ?? 5000,
    mode: process.env.NODE_ENV ?? "development",
    dbUri: process.env.DB_URI,
    firebaseCredentials: JSON.parse(process.env.FIREBASE_CREDENTIALS ?? "{}"),
    firebaseConfig: JSON.parse(process.env.FIREBASE_CONFIG ?? "{}"),
};

export default envConfig;