var itemList = [
        {
            id: 0,
            name:" Streamer Build ",
            price: 850.99,
            category: "Computers",
            description: " If you are looking to become the next TimTheFatMan, then this build is exactly for you. This machine allows you to run the toughest of games at 100+ frames, while simoultaneosly letting you stream at the heighest quality",
        },
        {  
                id: 1,
                name: " The Sweat ",
                price: 2500.99,
                category: "Computers",
                description: "Are you looking for every possible edge in a game, is the fastest proccessing and speeds and frames more important than fun. Than this build is for you, as the 'Sweat Build' you will become 10X better than anyone in the game, you will be ultra, you will be the SWEAT (Roze Skin)",
            },
            {
                    id: 2,
                    name: " Casual Gamer ",
                    category: "Computers",
                    description: "So you are one of those few, one of the originals that still plays games because it makes them happy. If you to have fun and enjoy your time, this build is perfect as it fits the OG gamers budget and delivers on the nessasary performance for you to have atleast a bit of fun",
                },
                {
                        id: 3,
                        name: " Editing Deus ",
                        category: "Computers",
                        description: "As an editor you need speed in every action you commit. Moving those blocks to where they need to be, compling those shaders, exporting 5X than the shitty editor. All to get that perfect transition, or to achive the title of Editor Deus with the godly edits",       
                    },
                    {
                            id: 4,
                            name: " The Broke",
                            category: "Computers",
                            description: " Get a job",
                        }
    ]

    console.log(itemList);

    var VM = new Vue ({
            el: '#app_Shop',
            data: { 
                products: itemList,

                product0: itemList[0],
                product1: itemList[1],
                product2: itemList[2],
                product3: itemList[3],
                product4: itemList[4],
            }
        })