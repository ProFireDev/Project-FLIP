<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Your Offline!</title>
            <div class="flex flex-col justify-center items-center">
                <img
                    class="logo"
                    src="/src/assets/icons/favicon.ico"
                    alt="We're sorry, we can't load the Flipping logo right now"
                />
            </div>
        </head>
        <body>
            <p class="offline">You're currently offline!</p>
            <p class="directions">
                Please connect to the internet to continue using this app
            </p>
            <p class="dino">🦖</p>
        </body>
    </html>
</template>

<style>
img.logo {
    right: 0;
    top: -6%;
    opacity: 1;
    z-index: -1;
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 04%;
}

body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    min-height: 100vh;
    background-image: linear-gradient(
        to bottom,
        hsl(219, 62%, 35%),
        hsl(202, 100%, 36%),
        hsl(196, 100%, 45%)
    );
    color: white;
    font-family: sans-serif;
}

p {
    margin: 0;
    padding: 0;
}

.offline {
    font-weight: normal;
    font-size: 2rem;
    position: relative;
}

.directions {
    font-weight: lighter;
    font-size: 1.5rem;
}

.dino {
    position: absolute;
    font-size: 4rem;
    bottom: 0;
    right: -4rem;
    animation: dino 10s infinite 2s;
}

@keyframes dino {
    0% {
        transform: translateX(4rem);
    }

    40% {
        transform: translateX(-50vw);
    }

    45% {
        transform: translateX(-50vw) scaleX(-1);
    }

    55% {
        transform: translateX(-50vw) scaleX(-1);
    }

    60% {
        transform: translateX(-50vw) scaleX(1);
    }

    65% {
        transform: translateX(-50vw) scaleX(1);
    }

    80% {
        transform: translateX(calc(-100vw - 4rem));
    }

    100% {
        transform: translateX(calc(-100vw - 4rem));
    }
}
</style>