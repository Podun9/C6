const error = (err, req, res, next) => {
    console.log(err.toString()); // supaya mempersingkat pesan error dan mengetahui konteks error
    
    return res.status(500).json({ message: 'Terjadi Kesalahan'})
}

module.exports = {
    error,
}