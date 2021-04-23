namespace SpriteKind {
    export const Melee = SpriteKind.create()
    export const wddwa = SpriteKind.create()
    export const Explo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Melee, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    pause(7500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(1)
    Player1.startEffect(effects.hearts)
    pause(200)
    effects.clearParticles(Player1)
    potion.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b b b . . 
        . . . . . . . . . b . . b b . . 
        . . . . . . . . . b b b b . . . 
        . . . . . . . . . b d d b . . . 
        . . . . . . . . b b d d b . . . 
        . . . . . . . . b d d d b . . . 
        . . . . . . . b . d . d b . . . 
        . . . . . . b . d d . . b b . . 
        . . . . . b b d d . . . d b . . 
        . . . . b b d d . . . . d b . . 
        . . . b b d d . . . . . d . b . 
        . b b . d d . . . . . . d . b . 
        b b d d . . . . . . . . . d . b 
        b d d d d d d d d d d d d d . b 
        b b b b b b b b b b b b b d d d 
        `)
    pause(5000)
    potion.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b 9 9 9 . . 
        . . . . . . . . . b . . 9 9 . . 
        . . . . . . . . . b b 9 9 . . . 
        . . . . . . . . . b d 2 9 . . . 
        . . . . . . . . b b d 2 9 . . . 
        . . . . . . . . b d d 2 9 . . . 
        . . . . . . . b . d . 2 9 . . . 
        . . . . . . b . d d . . 9 9 . . 
        . . . . . b b d d . . . 2 9 . . 
        . . . . b b d d . . . . 2 9 . . 
        . . . b b d d . . . . . 2 . 9 . 
        . b b . d d . . . . . . 2 . 9 . 
        b b d d . . . . . . . . . 2 . 9 
        b d d d d d d d 2 2 2 2 2 2 . 9 
        b b b b b b b b 9 b b b b 2 2 2 
        `)
    pause(5000)
    potion.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 9 9 9 9 . . 
        . . . . . . . . . 9 . . 9 9 . . 
        . . . . . . . . . 9 9 9 9 . . . 
        . . . . . . . . . 9 2 2 9 . . . 
        . . . . . . . . 9 9 2 2 9 . . . 
        . . . . . . . . 9 2 . 2 9 . . . 
        . . . . . . . 9 . 2 . 2 9 . . . 
        . . . . . . 9 . 2 . . . 9 9 . . 
        . . . . . 9 9 2 . . . . 2 9 . . 
        . . . . 9 9 2 . . . . . 2 9 . . 
        . . . 9 9 2 . . . . . . 2 . 9 . 
        . 9 9 . 2 . . . . . . . 2 . 9 . 
        9 9 2 2 . . . . . . . . . 2 . 9 
        9 2 2 2 2 2 2 2 2 2 2 . . 2 . 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SwordSwing.setImage(img`
        . . . . 1 . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(50)
    SwordSwing.setImage(img`
        . . . . 1 . . . . . . . . . . . 
        . . . . . 1 . . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(50)
    SwordSwing.setImage(img`
        . . . . 1 1 . . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        `)
    pause(50)
    SwordSwing.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        `)
    pause(50)
    SwordSwing.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        `)
    pause(50)
    SwordSwing.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprite.destroy()
    info.player1.changeLifeBy(-1)
    scene.cameraShake(3, 500)
    pause(2000)
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Sword.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 9 9 . . . . 
        . . . . . . . . . 9 9 9 . . . . 
        . . . . . . . . 9 9 9 . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . 9 9 9 9 9 . . . . 
        . . . . . . . . . e . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . . . . . e e . . . 
        . . . . . . . . . . . . e e . . 
        . . . . . . . . . . . . . . . . 
        `)
    Player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    SwordSwing.setPosition(Player1.x - 16, Player1.y)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Sword.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 . . . . . . . . . . 
        . . . . 9 9 9 . . . . . . . . . 
        . . . . . 9 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . 9 9 9 9 9 . . . . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . e e . . . . . . . . . . . 
        . . e e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Player1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    SwordSwing.setPosition(Player1.x + 16, Player1.y)
})
sprites.onOverlap(SpriteKind.Explo, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.player1.changeLifeBy(-1)
    scene.cameraShake(3, 500)
    pause(2000)
    otherSprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
info.player1.onLifeZero(function () {
    game.splash("Good Try.")
    game.over(false)
})
info.player2.onLifeZero(function () {
    scene.cameraShake(8, 7000)
    pause(2000)
})
let projectile: Sprite = null
let SwordSwing: Sprite = null
let potion: Sprite = null
let Sword: Sprite = null
let Player1: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff1fffff1111ff1111ff1111ff1ff1ff1111ff1fffff111fff1111ff1111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1fffff1ff1ff1fffff1fffff1ff1ff1ff1ff1fffff1ff1ff1fffff1ff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ff1fffff1ff1ff1fffff1fffff1ff1ff1ff1ff1fffff1ff1ff1fffff1ff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff1fffff1ff1ff1fffff1fffff1ff1ff1ff1ff1fffff1ff1ff1fffff1111fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffff1111ff1fffff1111ff1111ff1ff1ff1fffff1ff1ff1111ff1f1ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffff1ff1ff1fffff1fffff1ff1ff1ff1ff1fffff1ff1ff1fffff1f1ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffff1ff1ff1fffff1fffff1ff1ff1ff1ff1fffff1ff1ff1fffff1ff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffff1ff1ff1fffff1fffff1ff1ff1ff1ff1fffff1ff1ff1fffff1ff1fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1111ff1ff1ff1111ff1111ff1ff1ff1111ff1111ff111fff1111ff1ff1fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setTilemap(tilemap`level1`)
let RangedAttk1 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......222222.......
    .....22eeeeee22.....
    ...22e22....22e22...
    ..2ee.ee.22.ee.ee2..
    ..e22.22.ee.22.22e..
    ...ee22e....e22ee...
    .....ee222222ee.....
    .......eeeeee.......
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.wddwa)
let RangedAttk2 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......222222.......
    .....22eeeeee22.....
    ...22e22....22e22...
    ..2ee.ee.22.ee.ee2..
    ..e22.22.ee.22.22e..
    ...ee22e....e22ee...
    .....ee222222ee.....
    .......eeeeee.......
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.wddwa)
let RangedAttk3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......222222.......
    .....22eeeeee22.....
    ...22e22....22e22...
    ..2ee.ee.22.ee.ee2..
    ..e22.22.ee.22.22e..
    ...ee22e....e22ee...
    .....ee222222ee.....
    .......eeeeee.......
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.wddwa)
Player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Player1.setStayInScreen(true)
scene.cameraFollowSprite(Player1)
let BossStg1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 f f f f f f f f f 2 . . 
    . . f 2 2 f f f f f f 2 2 f . . 
    . . f f 2 f f f f f f 2 f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f 2 f f f f f f f f f . . 
    . . f f f f f f f f f 2 f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f 2 2 2 2 2 f f f f . . 
    . . f f 2 f f f f 2 2 f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
BossStg1.setPosition(127, 127)
Sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 . . . . . . . . . . 
    . . . . 9 9 9 . . . . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . . e . . . . . . . . . . 
    . . . . . e . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . e e . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
potion = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 9 9 9 9 9 9 . . 
    . . . . . . . . . 9 . . 9 9 . . 
    . . . . . . . . . 9 9 9 9 . . . 
    . . . . . . . . . 9 2 2 9 . . . 
    . . . . . . . . 9 9 2 2 9 . . . 
    . . . . . . . . 9 2 . 2 9 . . . 
    . . . . . . . 9 . 2 . 2 9 . . . 
    . . . . . . 9 . 2 . . . 9 9 . . 
    . . . . . 9 9 2 . . . . 2 9 . . 
    . . . . 9 9 2 . . . . . 2 9 . . 
    . . . 9 9 2 . . . . . . 2 . 9 . 
    . 9 9 . 2 . . . . . . . 2 . 9 . 
    9 9 2 2 . . . . . . . . . 2 . 9 
    9 2 2 2 2 2 2 2 2 2 2 . . 2 . 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 2 2 2 
    `, SpriteKind.Player)
potion.setPosition(10, 107)
potion.setFlag(SpriteFlag.Ghost, true)
potion.setFlag(SpriteFlag.GhostThroughWalls, true)
potion.setFlag(SpriteFlag.RelativeToCamera, true)
SwordSwing = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Melee)
info.player2.setLife(5)
info.player1.setLife(3)
let EndGame = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let BossAttack = 0
let BFist = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Explosion = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Explo)
let Explosion2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Explo)
let Explosion3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Explo)
forever(function () {
    Player1.x += controller.dx()
    Player1.y += controller.dy()
    Sword.setPosition(Player1.x, Player1.y)
    SwordSwing.setPosition(Player1.x + 16, Player1.y)
})
forever(function () {
    if (BossAttack == 1) {
        for (let index = 0; index < 3; index++) {
            pause(1000)
            projectile = sprites.createProjectileFromSprite(img`
                4 2 2 2 2 2 
                `, BossStg1, -70, 0)
            projectile = sprites.createProjectileFromSprite(img`
                2 
                2 
                2 
                2 
                2 
                4 
                `, BossStg1, 0, 70)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . 4 2 2 2 2 2 . . . . . 
                `, BossStg1, 0, -70)
            projectile = sprites.createProjectileFromSprite(img`
                4 
                2 
                2 
                2 
                2 
                2 
                `, BossStg1, 70, 0)
        }
    }
    if (BossAttack == 2) {
        pause(200)
        RangedAttk1.setPosition(Player1.x, Player1.y)
        pause(500)
        RangedAttk2.setPosition(Player1.x, Player1.y)
        pause(500)
        RangedAttk3.setPosition(Player1.x, Player1.y)
        pause(1000)
        Explosion.setPosition(RangedAttk1.x - 20, RangedAttk1.y - 20)
        Explosion.setImage(img`
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ..........eeeeeeee..............................................
            ........ee55555eeeee.eeeeeeeeeee................................
            .......e555555555555eee555555555eee.............................
            .....ee5555555555555555ee5555555555ee...........................
            ....e55555555555555555555ee444555555ee..........................
            ...e55555555555555555555555e544444555ee.........................
            ..e555555555554444444444445ee444444eeeeeeeeeeeee................
            ..e5555555554444444444444444e4444ee444444455555eeee.............
            .e555555554444444444444444444e44ee4444444444455555ee............
            .e5555554444444444444444444444e4e4444444444444455555ee..........
            e555554444444444444444444444444ee44444444444444445555ee.........
            e555554444444444222222222244444ee4444444444444444455555e........
            e5555444444444222222222222222444e44444444444444444555555e.......
            e5555444444442222222222222222244e44444444444444444455555e.......
            e5555444444442222222222222222224e42222222444444444445555e.......
            e5554444444422222222222222222222e22222222222444444445555ee......
            e5554444444222222222222222222222eeeeee2222222444444455555e......
            e5554444444222222222222222222222eeeeeeee22222244444445555e......
            e5554444442222222222222222222222eeeeeeee22222222444445555e......
            e5554444442222222222222222222e2eeeeeeeeee222222244444555ee......
            e555444444222222222eeeeeeeeeeeeeeeeeeeeee222222244444555e.......
            e55554444422222222eeeeeeeeeeeeeeeeeeeeeee22222222444455e........
            e5555444442222222eeeeeeeeeeeeeeeeeeeeeeee2222222244455ee........
            .ee55444444222222eeeeeeeeeeee2eeeeeeeee22ee222222445eeeee.......
            ..ee5544444222222eeeeeeeeeee222eeee22222222eeeeeeeee4444ee......
            ....ee54444222222eeeeeeeeee2222222222222222eeeee222224444ee.....
            ...eeeeee444222222eeeeeeeee42222222222222444eeee2222224444ee....
            ...e55555eeeee222eeeeee4e44444422222222244444ee222222244444ee...
            ..ee5555555555eeee2eeeee4444444444444444444444e22222224444455e..
            ..e5555555544444222eeeee4444444444444444444444e222222244444455e.
            ..e555555444444422eeeee544444444444444444444445e22222244444455ee
            ...e55554444444422eeee5544444444444444444444455e222222444444555e
            ...e55554444444222eeee5544444444444444444444555e222224444444555e
            ...e555544444442222eee5544444444444444444445555e222244444444555e
            ....e555444444422222ee5555444444444444444445555e224444444445555e
            ....ee55444444422222ee5555555444444444444555555e444444444445555e
            .....ee5544444422222eee55555555555555555555555ee444444444455555e
            ......ee5444444222ee44ee5555555555555555555555e4444444444555555e
            ........eeeeeeeeeee4444ee5555555555555555555eeee44444444555555ee
            ................e55544444ee55555555555555eeeeeeeee44444555555ee.
            ................e5544444444eeeee5555eeeeee44eeeeeeeeee555555ee..
            ...............e55544444444e444eeeeee4444e4444eeeeee5eeeeeee....
            ...............e5554444444e4444222e224444e444444444555e.........
            ...............e5544444444e4444222e224444e444444444555e.........
            ..............ee5544444444e4444222e224444ee444444445555e........
            ..............e5554444444ee4444222e2244444e444444444555e........
            .............e55554444444e44444222e2244444ee444444445555e.......
            ............e55555444444ee44444222e22244444e444444444555ee......
            ...........e555554444444e444442222e22244444ee444444444555ee.....
            .........ee555544444444e4444422222e222444444ee444444445555ee....
            ........e555444444444eee4444422222e2222444444ee444444455555ee...
            .....eee554444444444ee44444422222ee22224444444ee444444455555ee..
            ..ee55554444444444eee444444222222e2222224444444eee44444455555ee.
            eee554444444444eeee444444222222222222222444444444ee44444455555ee
            `)
        pause(500)
        Explosion.setImage(img`
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            `)
    }
})
forever(function () {
    pause(1000)
    BossAttack = randint(1, 3)
    pause(100)
    BossAttack = 0
})
forever(function () {
    if (info.life() == 4) {
        info.setLife(3)
    }
})
