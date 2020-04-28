namespace SpriteKind {
    export const topWall = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const brick = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const hpBrick = SpriteKind.create()
    export const ballBrick = SpriteKind.create()
    export const superBrick = SpriteKind.create()
    export const secondBall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.brick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    if (_super != 1) {
        sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    }
    numBricks += -1
    info.changeScoreBy(15)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.wall, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, 1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.topWall, function (sprite, otherSprite) {
    sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.superBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    if (_super != 1) {
        sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    }
    numBricks += -1
    info.changeScoreBy(15)
    superProjectile = sprites.createProjectileFromSprite(img`
. 2 2 2 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
`, otherSprite, 0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite == superProjectile) {
        otherSprite.destroy()
        _super = 1
        pause(5000)
        _super = 0
    } else if (otherSprite == hpProjectile) {
        if (info.life() != 3) {
            info.changeLifeBy(1)
        } else {
            info.changeScoreBy(50)
        }
        otherSprite.destroy()
    } else if (otherSprite == ballProjectile) {
        secondBallVar = sprites.create(img`
. 8 8 . 
8 8 8 8 
8 8 8 8 
. 8 8 . 
`, SpriteKind.ball)
        secondBallVar.setPosition(Paddle.x, 105)
        secondBallVar.setVelocity(Math.randomRange(-10, 10), -50)
        otherSprite.destroy()
        secondBallVarNum += 1
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.hpBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    if (_super != 1) {
        sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    }
    numBricks += -1
    info.changeScoreBy(15)
    hpProjectile = sprites.createProjectileFromSprite(img`
. 2 2 . 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
. . 2 2 2 . . 
. . . 2 . . . 
`, otherSprite, 0, 50)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy > -150) {
        sprite.vy += -5
    }
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, col * 8 + 24)
            col += 1
        }
        col = 0
    }
}
function createBrick (x: number, y: number) {
    ranNum = Math.randomRange(1, 31)
    if (ranNum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 2) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 3) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 4) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 5) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 6) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 7) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 8) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 9) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 10) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 11) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 12) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 13) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 14) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 15) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 16) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 17) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 18) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 19) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 20) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 21) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.brick)
    } else if (ranNum == 22) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 2 8 8 2 8 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 8 2 2 2 2 8 8 8 8 8 f 
f 8 8 8 8 8 8 2 2 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.hpBrick)
    } else if (ranNum == 23) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 2 8 8 2 8 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 8 2 2 2 2 8 8 8 8 8 f 
f 8 8 8 8 8 8 2 2 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.hpBrick)
    } else if (ranNum == 24) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 2 8 8 2 8 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 8 2 2 2 2 8 8 8 8 8 f 
f 8 8 8 8 8 8 2 2 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.hpBrick)
    } else if (ranNum == 25) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 2 8 8 2 8 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 2 2 2 2 2 2 8 8 8 8 f 
f 8 8 8 8 8 2 2 2 2 8 8 8 8 8 f 
f 8 8 8 8 8 8 2 2 8 8 8 8 8 8 f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.hpBrick)
    } else if (ranNum == 26) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.ballBrick)
    } else if (ranNum == 27) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.ballBrick)
    } else if (ranNum == 28) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.ballBrick)
    } else if (ranNum == 29) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.ballBrick)
    } else if (ranNum == 30) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.ballBrick)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f c c c c c 2 2 2 2 c c c c c f 
f c c c c 2 2 2 2 2 2 c c c c f 
f c c c c 2 2 2 2 2 2 c c c c f 
f c c c c 2 2 2 2 2 2 c c c c f 
f c c c c 2 2 2 2 2 2 c c c c f 
f c c c c c 2 2 2 2 c c c c c f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.superBrick)
    }
    brick2.setPosition(x, y)
    numBricks += 1
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.ballBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    if (_super != 1) {
        sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    }
    numBricks += -1
    info.changeScoreBy(15)
    ballProjectile = sprites.createProjectileFromSprite(img`
. 8 8 . 
8 8 8 8 
8 8 8 8 
. 8 8 . 
`, otherSprite, 0, 50)
})
let brick2: Sprite = null
let ranNum = 0
let secondBallVar: Sprite = null
let ballProjectile: Sprite = null
let hpProjectile: Sprite = null
let superProjectile: Sprite = null
let _super = 0
let col = 0
let Paddle: Sprite = null
let startBallVar = 0
scene.setBackgroundColor(6)
Paddle = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
Paddle.setPosition(80, 110)
controller.moveSprite(Paddle, 100, 0)
Paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.topWall)
top.setPosition(80, 0)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.wall)
left.setPosition(0, 60)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.wall)
right.setPosition(159, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
ballVar.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
let numBricks = 0
col = 0
let secondBallVarNum = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        _super = 0
        ballVar.setPosition(Paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-15, 15), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks == 0) {
        for (let index = 0; index < secondBallVarNum; index++) {
            secondBallVar.destroy()
        }
        startBallVar = 0
        info.changeScoreBy(100)
        effects.confetti.startScreenEffect()
        pause(200)
        effects.confetti.endScreenEffect()
        buildSetBricks()
    }
})
forever(function () {
    if (_super == 1) {
        ballVar.setImage(img`
. 1 1 1 1 1 . 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
. 1 1 1 1 1 . 
`)
    } else {
        ballVar.setImage(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`)
    }
})
