const fs = require('fs');


const requestHandeler = (req, res) => {
    res.setHeader('Content-type', 'text/html')
    if (req.url === '/') {
        res.write(`
       <html>
           <head> <title>Hello</title> </head>
           <body>
               <form method="POST" action="/message">
                   <input type="text" name="message"/>
                   <input type="submit"/>
               </form>
           </body>
       </html>
       `)
        return res.end()
    }
    if (req.url === '/message') {
        const body = []
        req.on('data', (chunck) => {
            body.push(chunck)
        })

        return req.on('end', () => {
            const barsedbody = Buffer.concat(body).toString()
            fs.appendFile('text.txt', barsedbody.split('=')[1], (err) => {
                if (err) { console.error(err) } else {
                    res.statusCode = 302
                    res.setHeader('Location', '/')
                    console.log('in append')
                    return res.end()
                }
            })
            console.log('onend')
        })
    }

    res.write(`
       <html>
           <head> <title>Hello</title> </head>
           <body>
               <h1>Hello mohamed</h1>
           </body>
       </html>
       `)
}

module.exports = requestHandeler