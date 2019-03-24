module.exports = {
    myIndex: myIndex,
    cavan: cavan
}

function myIndex (req, res) {
    res.send('<p>Hello Simey it\'s me again Simey. I\'m your worst nightmare</p>')
}

function cavan (req, res) {
    res.sendFile(__dirname+'/simey.html')
}
