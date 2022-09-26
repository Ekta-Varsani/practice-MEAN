const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!--icons-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
        <!--font-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">
    
        <!--css-->
        <style>
        .container{
            margin: 50px;
        }
        body{
            font-family: rubik, sans-serif;
            font-size: 18px;
            line-height: 1.5;
        }
        h1{
            line-height: normal;
        }
        .header{
            display: grid;
            grid-template-columns: 1fr 500px;
            gap: 50px;
            gap: 70px;
            align-items: center;
            margin-bottom: 50px;
        }
        .box{
            padding: 10px;
            background-color: #099268;
            text-decoration: none;
            color: white;
        }
        .part-2{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 50px;
            justify-content: center;
            margin-bottom: 50px;
        }
        .icon{
            color: #099268;
        }
        .part-3{
            display: grid;
            grid-template-columns: 300px 1fr;
            padding: 24px;
            background-color: #099268;
            border-radius: 20px;
            color: white;
            align-items: center;
            margin-bottom: 50px;
        }
        
        .part-4{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            
        }
        .part-4-list {
            list-style: none;
            padding-left: 10px !important;
            line-height: 2;
        }
        figure{
            box-shadow: 3px 3px 5px 0;
        }
        .cost{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 100px;
        }
        .image{
            height: 200px;
            width: 100%;
        }
        </style>
    
        <title>grid</title>
    </head>
    <body>
        <div class="container">
            <div class="container-1">
                <section class="header"> 
                    <div>
                        <h1>We design and built better chair for your better life</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus illo, sequi odit esse asperiores harum vitae eius laboriosam distinctio, officiis aspernatur laborum alias fuga nam deleniti nihil inventore sint.</p>
                        <a class="box" href="#">Shope chair</a>
                    </div>
                    <div>
                        <img src="i1.webp" height="400px" width="500px">
                    </div>
                </section>
                <h1>What makes our chairs special</h1>
            </div>
            <div class="part-2">
                <div>
                    <div class="icon">
                        <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                    </div>
                    <h3>Science meets design</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, veritatis nobis illo doloribus enim assumenda, dolores ullam ipsa unde ipsum.</p>
                </div>
                <div>
                    <div class="icon">
                        <i class="fa fa-smile-o" aria-hidden="true"></i>
                    </div>
                    <h3>Meximal comfort</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, cupiditate, veniam aliquam error molestiae esse praesentium libero fugit pariatur corrupti cumque expedita eaque illo iusto at consequatur.</p>
                </div>
                <div>
                    <div class="icon">
                        <i class="fa fa-heart-o" aria-hidden="true "></i>
                    </div>
                    <h3>Ethical and sustainable</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, veritatis nobis illo doloribus </p>
                </div>
            </div>
            <div class="part-3">
                <div class="img">
                    <img src="i4.jpg" style="border-radius: 20px;">
                </div>
                <div class="part-3-text">
                    <h3 style="font-size: 25px;">"We couldn't live without these chairs anymore"</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sunt, placeat itaque molestiae pariatur aspernatur hic officiis magni non quidem voluptatibus ratione saepe! Qui quo, nostrum libero magnam explicabo earum.</p>
                    <p>-Mary and sara Johnson</p> 
                </div>
            </div>
            <div class="part-4">
                <figure>
                    <img class="image" src="i5.jpg">
                    <div class="part-4-text">
                        <h3>The lais back</h3>
                        <ul class="part-4-list">
                            <li>
                                <i class="fa fa-star-o icon" aria-hidden="true"></i>
                                <span>  Leisure and relaxing</span>
                            </li>
                            <li>
                                <i class="fa fa-heart-o icon" aria-hidden="true"></i>
                                <span>Comfirtable for 4h</span>
                            </li>
                            <li>
                                <i class="fa fa-sun-o icon" aria-hidden="true"></i>
                                <span>Vegan leather</span>
                            </li>
                            <li>
                                <i class="fa fa-codepen icon" aria-hidden="true"></i>
                                <span>Weight 16kg</span>
                            </li>
                        </ul>
                        <div class="cost">
                            <strong>250&pound;</strong>
                            <a href="#" class="box">Add to cart</a>
                        </div>
                    </div>
                </figure>
        
                <figure>
                    <img class="image" src="i7.jpg">
                    <div class="part-4-text">
                        <h3>The worker bee</h3>
                        <ul class="part-4-list">
                            <li>
                                <i class="fa fa-star-o icon" aria-hidden="true"></i>
                                <span>Work</span>
                            </li>
                            <li>
                                <i class="fa fa-heart-o icon" aria-hidden="true"></i>
                                <span>Comfirtable for 8h</span>
                            </li>
                            <li>
                                <i class="fa fa-sun-o icon" aria-hidden="true"></i>
                                <span>Vegan leather</span>
                            </li>
                            <li>
                                <i class="fa fa-codepen icon" aria-hidden="true"></i>
                                <span>Weight 22kg</span>
                            </li>
                        </ul>
                        <div class="cost">
                            <strong>525&pound;</strong>
                            <a href="#" class="box">Add to cart</a>
                        </div>
                    </div>
                </figure>
        
                <figure>
                    <img class="image" src="i1.webp">
                    <div class="part-4-text">
                        <h3>TThe chair 4/2</h3>
                        <ul class="part-4-list">
                            <li>
                                <i class="fa fa-star-o icon" aria-hidden="true"></i>
                                <span>Leisure and relaxing</span>
                            </li>
                            <li>
                                <i class="fa fa-heart-o icon" aria-hidden="true"></i>
                                <span>Comfirtable for all day!!</span>
                            </li>
                            <li>
                                <i class="fa fa-sun-o icon" aria-hidden="true"></i>
                                <span>Organic cotton</span>
                            </li>
                            <li>
                                <i class="fa fa-codepen icon" aria-hidden="true"></i>
                                <span>Weight 80kg</span>
                            </li>
                        </ul>
                        <div class="cost">
                            <strong>1450&pound;</strong>
                            <a href="#" class="box">Add to cart</a>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    </body>
    </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});