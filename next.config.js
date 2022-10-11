module.exports = {
    images: {
        domains: ["buhalbu.com", "darky.buhalbu.com"],
        loader: "imgix", // this is a hack until nextjs fixes the custom value.
        path: process.env.NODE_ENV !== 'production' ? "http://localhost:3002" : "https://darky.buhalbu.com",
    },
};
