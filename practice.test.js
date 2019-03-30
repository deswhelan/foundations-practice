const request = require('supertest')
const server = require('./myServer')
const cheerio = require('cheerio')

test('test suite is working', () => {
    expect(5).toEqual(5)
})

test('fighter query returns appropriate page', done => {
    const expected = "Jorge"

    request(server).get('/fighters/?fighter=bigJoe').end((err, res) => {

        const $ = cheerio.load(res.text)
        
        const actual = $('h1').text()

        expect(actual).toContain(expected)
        done()
    })
})

test('fighter query returns appropriate page', done => {
    const expected = "Jorge"

    request(server).get('/fighters/?fighter=bigJoe').end((err, res) => {

        const $ = cheerio.load(res.text)
        
        const actual = $('h1').text()

        expect(actual).toContain(expected)
        done()
    })
})

test('param/param returns the correct image', done => {
    const expected = "Joto"

    request(server).get('/fork/eye').end((err, res) => {

        const $ = cheerio.load(res.text)
        
        const actual = $('img').attr("class")

        expect(actual).toContain(expected)
        done()
    })
})



