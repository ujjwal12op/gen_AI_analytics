const apiKey = "supersecretkey"; // You can change this to any key you prefer

const authenticate = (req, res, next) => {
    const clientKey = req.headers['x-api-key'];
    if (clientKey && clientKey === apiKey) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).json({ error: "Unauthorized: Invalid API key" });
    }
};

module.exports = authenticate;
