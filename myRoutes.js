module.exports = {
    myIndex: myIndex,
    cavan: cavan,
    fighters: fighters
}

function myIndex (req, res) {
    res.send('<p>Hello Simey it\'s me again Simey. I\'m your worst nightmare</p>')
}

function cavan (req, res) {
    res.sendFile(__dirname+'/simey.html')
}

function fighters (req, res) {
    var fighterName = req.query.fighter;

    var listOfFighters = {
        simey: 'simey',
        joe: 'joe',
        bigJoe: 'big-joe'
    }

    var pageName = listOfFighters[fighterName];

    res.sendFile(__dirname +'/' + pageName + '.html')
}