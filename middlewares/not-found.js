const notFound = (req, res) => {
    return res.status(404).json({ message: 'Not found error 404' });
}
module.exports = notFound;