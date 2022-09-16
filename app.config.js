export default ({ config }) => {
  if (process.env.APP_ENV === "production") {
    return {
      ...config,
      name: "Breaking Bad",
      android: {
        package: "com.hmdarkfire.breakingbad",
      },
    };
  } else {
    return {
      ...config,
      name: "Breaking Bad (DEVELOPMENT)",
      android: {
        package: "com.hmdarkfire.breakingbad.development",
      },
    };
  }
};
