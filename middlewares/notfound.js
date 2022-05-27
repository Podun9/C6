const notFound = (req, res, next) => {
    return res.status(504).json({ message: 'Halaman tidak di temukan'})
}

module.exports = {
    notFound,
}