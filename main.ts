namespace SpriteKind {
    export const invincible = SpriteKind.create()
    export const makeInvincible = SpriteKind.create()
}
// recreates the player
sprites.onDestroyed(SpriteKind.invincible, function (sprite) {
    spawnPlayer()
})
// this is the overlap to cause invincibility
function makeInvincibile () {
    mySprite2 = sprites.create(img`
        .............c...................
        ...........1cccccfcc.............
        ...........bcccccccc.............
        ..........bccffccccccccbb........
        ..........ccccccccccccccbb.......
        .........bbcfccccccccccbbb.......
        .........becfceccccfcccbbb.......
        ........bbecccfcccfcccccbb.......
        ........bbeceffecccccccccb.......
        .......bbeeeccccccfcccccbbb......
        .......bbbeccccccfccceccbbb......
        ......bbbeeeeeecccceeeecbbbb.....
        ......bbbeeeeeececceeeeebbbb.....
        ......bbbeeeeeeeeeeeeeeebbbb.....
        ......bbeeeeeeeeeeeebeebbeeb.....
        ......dbbeeebeeeeeebbeeebeeb4....
        .....bdbebebeebeeebbbeeebeeb4....
        .....bdbbbbebebbbbbbbeeebeeb44...
        .....dddbbbbbbbbbbbbbebbbeeb44...
        ....1dddbbbbbbbebbbbbbebbeeb1d...
        ....1dddbbbbbbbebbbbbbbbbeebd....
        ....bdbbeebbbbbbbbbbbbbbbeeb1....
        ....ddbbeeeebbbbbeeebbbbbbed1....
        ....ddbecffcbbeeeeebeebbbbbd.....
        ....dddbcffcbbbeeefeeebbbbb9.....
        ....dddbbbebbbbbecfffebbbbeb.....
        ....dddbbbbbbbbbeeeeeeebbbeb.....
        ....ddddbbbbbbbbbeebbbbbbbb6.....
        ....ddddbbbbdbbbbbbbbbbbbe.......
        ....dddbbbebbbbbebbbbbbbbe.......
        ....ddbbbebeeeeeebbbbbbbbe.......
        ....dbbbbebbbeeeebbbbbbbbb.......
        .....bbbbebbbbbbbbbbbbbbb1.......
        .....bbbeeebbeeeeebbbbbb64.......
        .....bbbeebbbbbbeebbbbb669.......
        .....bbbebbbeebbbebbbbb66d.......
        .....6bbebbbbbebbebbbbbf6ddd91...
        .....66beeeeeeeeeeeebbcf6ddddd...
        .....6666beeeeeeeeebb6ffddddddd..
        ....66fff6eeeeeeecbcfff6ddddddd..
        ....666ffffffcccfffffffdddddddd..
        ....66f6fffffffffffff6ddddddddd..
        ....66ffffffffffffffcdddddddddd..
        ....666ffdbdbcffffbbbdddddddddd..
        ....ff66bbdbbbbbbbbbddddddddddd9.
        ....ffffdcdbbbbbdddddddddddddddd.
        ...ffff6dcdbbbbbdddddddddddddddd.
        ...ffffcdbdbbbbbbddddddddddddddd.
        ...ffffdddbbbbbbbbdddddddddddddd6
        ..ffff6dbbbbbbbbbbdddddddddddddd6
        ..fffffbbbbbbbbbbbdbdddddddddddd9
        ..fffffebbbbebebbbbbddddddddddddd
        ..ffff6fbbeeeeebbbbbbbbdddddddbbb
        .6ffff6feeeeeeeeeebdbbbbdddddddbb
        .6fff66ffeeeeeeeeedddbbbddbbdddbb
        `, SpriteKind.makeInvincible)
    mySprite2.setPosition(129, 35)
}
// just a quick flash to show the player is now invincible
// 
function invincibiltyFlash () {
    mySprite3 = sprites.create(img`
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
        `, SpriteKind.Food)
    mySprite3.setPosition(8, 8)
    animation.runImageAnimation(
    mySprite3,
    [img`
        1111111111111111111111111111111111111111111991111111d1111111191911111411134111d111111161b1311111111961111991111119111d11111111111111111111111111111111111111111
        1111111111111111111111111111111111111191111169111191d1111111191611111d111d4111d111111161b1d11111111961116111111199113111111111111111111111111111111111111111111
        11111111111111111111111111111111111111191111961111111d911111191991111dd11d4111d111111161d1d111111196611169111111991d1911111111111111111111111111111111111111111
        1111111111111111111111111111111111111111911119911119131119111999911111411d4111d11d1111699dd11111119691199911111991131111111111111111111d11111111111111111111111
        111111111111111111111111111111111111111191111961111111d91111119161111141114d11111d11116b93111111116611169111111991d1911111111111111111d111111111111111111111111
        11111111111111111111111111111111111111111611116611119149111111916d111149114d11111d11196b1411111119661196911111991139d1111111111111111d1111111111111111111111111
        111111111111111111111111111111111111111119911196911111dd919111999911114d114311111d1d1964141111111969116911111969131d1111111111111111d11111111111111111111111111
        11111111111111111111111111111111111111111199111961111d14911111199611114d1144111d1d1d1664141111111669196611111691dd9d111111111111111d111111111111111111111111111
        1111111111111111111111111111111111111111111611116611111dd919111616d111341144111d131d1664d4111111966116611111969149d111111111111111d1111111111111111111111111111
        111111111111111111111111111111111111111111196111969111d1461d1119969111d41144111d131d169bdd1111116661166111116913db111111111111111dd1111111111111111111111111111
        1111111111111111111111111111111111111111111199111661111d4b91d119996111d41144d11d141316d64d11111d66919691111961d49d11111111111111dd19111111111111111111111111111
        1111111111111111111111111111111111111111111116911966111b1461b111696d1114d144d11d141416d641911116661166111116914bd11111111111111dd19111d111111111111111111111111
        11111111111111111111111911111111111111111111196111669111d4b9d911696d1114b144d11d14141646416111d66619661111961dbbd1111111111111d319111d1111111111111111111111111
        11111111111111111111111191111111111111111111116611966111dd461b11996611144144411d141496464961116669166111196914631111111111111d319111d11111111111111111111111111
        111111111111111111111111191111111111111111111196911666111d4b9d9196661114414441131414964b466119666996611116614bb1111111111111d419111d111111111111111111111111111
        11111111111111d111111111119111111111111111111d196911669114346d911696d11441344113debecccce669166661669111969d4b3111111111111d4d9111d1111111111111111111111111111
        111111111111111d111111111119911111111111111111d16611666111d4b9b1166661144d344dbecccccccccccb6666696611116614b411111111111134d9111d11111111111111111111111111111
        1111111111111111dd1111d11111991111111111111111d196611666114446d9196661144334ecccccccccccccccbb669669111669344d1111111111134d91113111111111111111111111111111111
        11111111111111111131111d11111991111111111111111d1669166691d44bdb19666d144bccccccccccccccccccbbb6666111166d4441111111111134d911d31d11111111111111111111111111111
        11111111111111111113d1111d1111961111111111111111d16691666914446b99666b1bbcccccccccccfccfcccccbbbb66111669444d111111111134b911d31d111111111111111111111111111111
        11111111111111111111d41111d1111169111111111111111d966166661d44bbb9b666bbccccccccffcccfccccccccbbbb911966d4b4111111111144b911d3d11111111111111111111111111111111
        11111111111111111111114d111d119116911191111111111dd666166661444bb9bbbbbccccccccccccccccccccccccbbbb116664b4111111111144491133d111111111d11111111111111111111111
        1111111111111111111111134111dd119166111911111111913966966666db4446bbbbcccccccffccccfffccccccccccbbbb66644d311111111144491143d11111111d1111111111111111111119111
        111111111111111111111111d4d1114119166111911111111914666966666bb44bbbbccccccfcffccccccfcccccccccccbbbb66464111d1111144491143311111111311911111111111111111911111
        11111111111111111111111111441113d1919691191111111111466666666b64bbbbccccccccccccccccccccccccccccccbbbb4b1d11411111444d11433111111113d11111d11111111111161111111
        11111111111111111111111111134d11d3199966119111111111db66666666bbbbbccccccccccccccccccccccccccccccccbbbb9d1d431111444d1143311111113dd911111111111111116111111111
        1111111111111111111111111111d4411d4119966119111d11111466666666bbbbbbbccccfccccccccccccccccccccccccbbbbbd3444d11d444d1144d111111143d1111d11111111119691111111111
        11111111111111111111111111111144d114d1696691911191119d46666666bbbbbbccccffcccccccccccccccffcccccccbbbbbd444411344449d44d111111d4d9111d1111111111969111111111111
        1111111111111111111111111111111444114316966996119691196466666bbbbbbbecccffcceeccccccccccffcccccccbbbbbbbb4443444449d44d11111144d9111d11111111196911111111111111
        1111111111111111111111111111111134431341966669691966966446666bbbbbbeeecfccceeccccccccccccccccccccccbbbbbbb4444444d344d11111d44d111dd111111119661111111191111111
        11111111dd11111111111111111111111d4441d4d9666696916666664b666bbbbbbeeeccccecffccccccccfccccccccccccbbbbbdb444444d444d1111134d911dd11111111966911111119111111111
        1111111111dd1111111111111111111111d4443d4d9996666996666664b6bbbbbbbeeecceecfffceeecccccccccccccccccccbbbbdb4444344411111d44b9113d111111196691111119911111111111
        111111111111d3d11111111111911111111d4444d43d9966666666666b4bbbbbbbbeeeeecffffcccccccffffccccccccccccbbbbbdb444444411111344d11d311111119669111111991111111111111
        11111111111111d3d111111111199111111114444334d91966666666664bbbbbbbeeeeeccccccccccccfccffccccccccccccbbbbbbdb444441111d44b9113d111111966691111199111111111111111
        11111111111111111ddd11111111199111111144444d4d919666666666bbbbbbbbbeeeeccccccccccccccfcccccccecccccbbbbbbbbb4444d111344b91d311111996669111119911111111111111111
        111111111111111111113d11111111199111111444441dd91166666666bbbbbbbbbeeecccccccccccecffcccccccceeccecbbbbbbbbd444d11d444b1d4d111196666911119991111111111111111111
        111111111111111111111133d1111111d6d1111d4444411191196666bdbbbbbbbbeeeeccceeceececcfccccccccceeeeeecbbbbbbbbdb4411d444914b91119666669111969111111111111111111111
        11111111111111111111111114d111111144dd1d44444411111116666bbbbbbbbbeeeeeeeeeeeeccccccccccceeeeeeeeecbbbbbbbbbb44444449346111966666911196911111111119111111111111
        111111111111111111111111111d4d11111d444444444441999111966bbbbbbbbbeeeeeeeeeeeecccceccccceeeeeeeeeeebbbbbbbbbd444444d4461966666669119691111111119911119911111111
        111111111111111111111111111111441111144444444444119911166bbbbbbbbeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeebbbbbbbbbb444444466666666669116691111111169d1119911111111111
        11111111111111111111111111111111d441114444b44444d11191116bbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbb444444666666666699669111111166dd196911111111111191
        111111111111111111111111111111111113444444466ddd11911111bbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbebbbbb444b6666666666966611111966b3166611111111111911111
        1111111111111111111111111111111111d111444444b66111116691bbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeebebbebebbbbb44666696666666669111966b4d66691111111196911111111
        111111111111111111111111111111111111d11114444b6669111666bbbddbbeeeeeeeeebbeeeeeeeeeeeeeebbbbeeeeeebebbeeeebbb441111db6666666611966bbb66691111111969111111119669
        1111199111111111111111111111111111111d19111134d666691166bbdddbeebeeeeeebbbeeeeeeeeeeeeebbbbbeeeeeeebbbeeeeebb44444466666666691d3bb99961111119669111111966669111
        1111111119991111111111111111111111111d14d991111196666666bbdddbebeebeebbbbeeeebeeeeeeebbbbbbbeeeeeeebbbeeeeebb44444666666666bbdbd1199111199699111199666691111111
        911111111111999991111111111111111111111d3d19911111666666bbdddbbebbebbbbeeeebbeeeeeebbbbbbbbbeeeebeebbbeeeeebb44446699966bbdddd119919966699199966666991111111111
        19969991111111119969991111111111111111111111199911196666bbdddbbbbbbbbeeebbbeebbbbbbbbbbbbbbbeeeebbebbbeeeeebb444311d3b4d1db919999666669966666669911111111111111
        11111999669999111111996699111111111111111111111199919666bbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbeeeeeb44444443d11db66666666666666666669911111111111111111
        11111111119966666999911199669991111111111111111111969966bdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbeeeeeb44443d11dd96666666666666666669111111111111111111111
        1111111111111199666666669999999669911111111111111119991dbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbeeeebb3d1111dd1666666666666666699111111111111111111111111
        11111111111111111199666666666666911111111111111111111191bdddddbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbeebbbbbbeeeebb111ddd11196666666666666911111111111d111111111111111
        11111111111111111111119966666666669111111111111111111111bdddddbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbeeeebb1d3111111166666666666911111d1dd11111111111111111111
        1111111111111111111111111996666666666111111111111111111dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebb44d111111166666666691d1d3d1111111111111111111111111
        1111111111111111111111111111966666666661111111111111111bdddbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebb111111111119999666bbd111111111111111111111111111111
        1111111111111111111111111111196666666669111111111111111bdddbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebd1111119691111d4666666699111111199991111111111111111
        1111111111111111111111111111166666666691111111111111111ddddbbbbeeeeeeeeeebbbbbbbbbbeeeeeeebbbbbbbbbbbbbeeebd119669111113666699999991111111111111111111111111111
        11111111111111111111111196666666669111111111111111111111ddbbbecffffffceebbbbbeebeeeeeeeeeeeeebbbbbbbbbbbeebd666611114444444311111111111111111111111111111111111
        111111111111111111111dddbb66666666669111111111111111111dddbbeecccfffffcebbbbeeeeeeeeeeeeebeeeebbbbbbbbbbbbdd966666b44444444d1111111111111111111111111111ddddddd
        1111111111111111111111111111166666b444443dd111111111111dddddbbbecffffccebbbbbbeeeeeeeffeeeeeeeebbbbbbbbbbb196666666d44444444444444444444444444444443dd111111111
        111111111111111111111111111196666666691111dd444d1111111dddddddbbeecccecbbbbbbbbeeeeccfcffffeeebbbbbbbbbbebb9666666699d3444444444444444444dd11111111111111111111
        11111111111111111199966666669991111111111dd344444d11111dddddbbbbbbbbeebbbbbbbbbbbeefcfffffcfcebbbbbbbbbeebbb11111db44444444444444bb9dd1111111111111111111111111
        9999966699999999991111111111111111111111d33444444443111ddddddbbbbbeeebbbbbbbbbbbbbeeecfffccffeebbbbbbbbebbeb11111d4444444444443dbbbbbbbbbb999999111111111111111
        1111111111111111111111111111ddd333444444444444444444311dddddbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbeeeb99966666b4444444444444433ddddddddddddddddddd1111111
        11111111111111ddd33333444444444444444444444444444444443dddddddbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbee666666691113444444dd11111111111111111111111111111111
        11111111ddddddddddddddddddddddddddddd344444444444444444ddddddddbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbeebeb6666666911111dd4441dd3d11111111111111111111111111111
        111111111111111111111111111111111111ddd3444444444444444dddddddbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebe196666666911111111d3dd3444443ddd111111111111111111111
        11111111111111111111111111111ddd44444333334444444444443ddddddbbbbbbbeebbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbeeed111966999b444444411111d344333ddd333dddddd111111111111
        111111111111111111111dd1dd33dd1111111111134444444444444dddddbbbbbbbeebbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbeebb11111119999b44444443dddddd34444443dd111111111111111111
        111111111111111111111111111111111111111d444444444444444ddddbbbbbbbeeebeeebbeeebbbbebbbbbbbbbbbbbbbbbbeeb1ddd111111134444444444443d111111111dd3333ddd11111111111
        1111111111111111111111111111111111111d44444444444444444dddbbbbbbbbeebbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbeb1344444dd11d44444444444444444dd111111111111111111111111
        1111111111111111111111111111111111111111111d443d1134431ddbbbbbbbbbebbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbb44d3441111d33d444444444444443d34444d11111111111111111111
        111111111111111111111111111111111111111111dd11111d43111dbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd13444441111111134444444444444444d111d343d111111111111111
        111111111111111111111111111111111111111111111d444411334dbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111144444d111144314444444444444444444d111111d4d1111111111
        1111111111111111111111111111111111111d111d44434d1d111111bbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbb111111441d311111444441111d11111d344444444111111111ddd1111
        1111111111111111111111111111111111d31d444d14b6b96b446619bbbbbbbbeeeeebbbbbeeeeeeeeeeebbbbbbbbbbbbbb66b444d111d4d111111114444d111111d11111111d444444d11111111111
        1111111111111111111111111111111d33444d11146bdb4444466666bbbbbbbbbeeebbbbbbbbbbbeecceebbbbbbbbbbbbbb666664444111d41111111113d4411111111111111111111d4444d1111111
        1111111111111111111111111111d34444d111dbbd1996b444666b466bbbbbbbeeebbbbbbbbbbbbbbeeeebbbbbebbbbbbb666b9666b444311341111111111d11111111111111111111111111d44d111
        1111111111111111111111111d1344d1111d3dd1191164444b4444466bbbbbbbeebbbbbbeeeebbbbbbbeebbbbbebbbbbbb6f6bddd996d1d34113311111111111d1111111111111111111111111111dd
        111111111111111111111111d43d11111ddd1111119b44444444446666bbbbbeebbbbbbbbebbeeebbbbbbbbbbbbbbbbbbcfffddddddd99111d3d1431199911999111111111111111111111111111111
        111111111111111111111d3dd11111ddd111111196bb6b4444444666666bbbeeebbbbbbbbbbbeeeebbbbebbbbbbbbbbbbfff6dddddddd9911111ddd4d666669666991d1111111111111111111111111
        111111111111111111ddd1111111ddd111111119666664444444b6666669deeeebbebbbbbbeeeeeeebeeeebbeebbbbbb6fff6dddddddddd9111111ddd4b666669999699111111111111111111111111
        111111111111111ddd1111111ddd111111111966666644444446666666666bbeeeeeeeebbeeeeeeeeeeeeeeeeebbbbbcffff6dddddddddddd1111111113466666999199691111111111111111111111
        11111111111111111111111dd11111111119666666b44444446666666666666bbeeeeeeeeeeeeeeeeeeeeeeebbbbbb6ffff6ddddddddddddd1111116691dbb666691111199991111111111111111111
        1111111111111111111111111111111119666669d444444446666b66666666666bbeeeeeeeeeeeeeeeeeeeeebbbbc6fffff6dddddddddddddd111119666696bb6666911111199991111111111111111
        111111111111111111111111111111119666991d444444bb666bb666666fffffff6ceeeeeeeeeeeeeeebcbbbcccfffffff6ddddddddddddddd11111196666666bb66669111111199911111111111111
        11111111111111111111111111111196669111344444b664664b666666666fffffffffcccceeeeeeeccccccffffffffff6ddddddddddddddddd111111166666666bb666691111111199911111111111
        111111111111111111111111111196669111d44444196b4d34b666666666fffffffffffffffccccccfffffffffffffff6bdddddddddddddddddd1111111966691199bb6666911111111199111111111
        11111111111111111111111111966911111d44431196b4444d66666666666ffffffffffffffffffffffffffffffffff6ddddddddddddddddddd6d19111119666111111db66669111111111191111111
        111111111111111111111111166911111d44431111d4434d1666666666fff6fffffffffffffffffffffffffffffff66dddddddddddddddddddd9619691111966911111111b666691111111111191111
        11111111111111111111111669111111d444111111441d1166666666666ffffffffffffffffffffffffffffffffc6ddddddddddddddddddddddd66d96691191669111111111d6666911111111111111
        111111111111111111111969111111d44411111114d11116666666666666fffff6fbbfb6fffffffffffffffff6bddddddddddddddddddddddddd669d966699666691111111111196669111111111111
        11111111111111111119691111111b441111111d41119166666666666666fffffbdbbbdbbbccfffffffffcbbbbbbdddddddddddddddddddddddd6661199666966699111111111111166691111111111
        111111111111111119611111111d44d11111114d1119166666666fffff6f6fffcdbddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddd666111d196669669911111111111111966911111111
        11111111111111119111111111b4d1111111141111996666f6666ffffff6f6f6bbbbddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddd9669111d11666966911111111111111119669111111
        111111111111119111111111d4d111111111d11119966666fff6fffffff6ff6bdbbbdbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddd666111111196699661111111111111111119691111
        1111111111119111111111143111111111d1111199616666ffff6fffffff6fcddbcbdbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddd666111111111669196911111111111111111196911
        111111111111111111111d31111111111d111119661d66666ffffffffffff6dddbcddbbbbbebbbbbbdddddddddddddddddddddddddddddddddddd6ff611111111196919691111111111111111111999
        111111111111111111113d11111111111111119691d666666ffffffffffff6dbdbbddbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddd6ff691111111119661196911111111111111111111
        111111111111111111dd111111111111111119691db6666666fffffffffffcdbdbbddbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbf6661111111111196911991111111111111111111
        11111111111111111d11111111111111111196911b66666666fffffffffffbdbbdddbbbbbbbbbbbbebbbbdddddddddddddddddddddddddddddddddf6666111111111119691199911111111111111111
        1111111111111111111111111111111111196911b9666666666fffffffff6ddddddbbbbbbbbbbbbebbbbbddddddddddddddddddddddddddddddddd66666711111111111196111991111111111111111
        111111111111111111111111111111111196911d9d66666666fffffffff66dddddbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddd66666691111111111119691119111111111111111
        11111111111111111111111111111111116111d91666666666fffffffff6cddbbbbbbbbbbbbbbbbbbbbbbbdbdddddddddddddddddddddddddddddd66666661111111111111199111991111111111111
        1111111111111111111111111111111119111d91166666666fffffffff6fcbbbbbbbbbbbbbbbbbbbbbbbbbddbbbddddddddddddddddddddddddddd96666667111111111111119911119111111111111
        111111111111111111111111111111119111d911d66666666fffffffff6ffbbbbbbbbbbbbbbbbbbbbbbcbbbddbbdddddddddddddddddddddddddddd6666666111111111111111199111111111111111
        11111111111111111111111111111119111d91117f6666666fffffffff6ffebbbbbbbbbeeebbbebbbbbcbbbbdbbdbdbdddddddddddddddddddddddd6666666611111111111111119911111111111111
        1111111111111111111111111111119111d111116f6666f66ffffffffff6fcbbbbbbbeeeeeeeeeebbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbd9666666611111111111111111191111111111111
        111111111111111111111111111119111d1111116f666ff66ffffffffff6ffebbbbeeeeeeeeeeeebbebbbbbbbbdbbbbbbbdddddddddddddddbbbbbbdfff66ff61111111111111111119111111111111
        111111111111111111111111111111111111111d6f66fff66ffffffffff6ffcebbeeeeeeeeeeeeeeeeeeeebddbbbbbbbbbdddddddddddddddbbbbbbd6ffffff61111111111111111111191111111111
        1111111111111111111111111191111111111116ff66fff66fffffffff666ffceeeeeeeeeeeeeeeeeeeeeebddddbbbbbbbbdddddddddddddddbbbbbd6fffffff7111111111111111111119111111111
        1111111111111111111111111911111111111116ff6fff666ffffffff6666ffffeeeeeeeeeeeeeeeeeeeebddddddbbbbbbbbdddbbbbbbddddddbbbbb9fffffff6111111111111111111111191111111
        11111111111111111111111111111111111111d6f66fff66fffffffff6666fffffeeeeeeeeeeeeeeeeeebbddddddddbbbbbbddddddbbbbbddddddbbbb6fffffffb11111111111111111111119111111
        1111111111111111111111111111111111111176f66ff66fffffffff666fffffffffceeeeeeeeeeeeeecbbd99999dddbbbbbbddddddddddddd99d9dbb6fffffff6d1111111111111111111111111111
        1111111111111111111111111111111111111166f6fff6fffffffff6666ffffffffffffccceeeeeecccbbbb9999999ddbbbbbdddddddd999999999ddb6fffffff6d1111111111111111111111111111
        111111111111111111111111111111111111116ff6ff6fffffffff6666fffffffffffffffffffffcfccbbbbddd9999999dbbbd99999999999999999dd6fffffff661111111111111111111111111111
        11111111111111111111111111111111111111dff6f6fffffffff6f66ffffffffffffffffffffcfcfccbbbbbbbbbdd9d99ddbbd9d9999999999999999cfffffff666111111111111111111111111111
        1111111111111111111111111111111111111116c666ffffffff666c6666cccfffffffffffffcccccccbbbbbbbbbbbbddddddddddddddddddddddddddefffeefe666111111111111111111111111111
        ...............................................................................................................................................................
        ...............................................................................................................................................................
        `],
    500,
    false
    )
    pause(500)
    sprites.destroy(mySprite3)
}
// this makes player invincible on overlap for 10 seconds... then the sprite is destroyed ... the next "on destroyed" block allows the player to be re-spawned
sprites.onOverlap(SpriteKind.Player, SpriteKind.makeInvincible, function (sprite, otherSprite) {
    // simple flash on the screen to show you're invincible
    invincibiltyFlash()
    // gets rid of invincibility dude
    sprites.destroy(otherSprite)
    // changes kind of sprite from "player" to "invincible" which means it doesn't interact with the block that overlaps the projectile
    sprite.setKind(SpriteKind.invincible)
    // adds a countdown for the invincibility to show how long they have
    info.startCountdown(5)
    // length of invisibility
    pause(4900)
    // if you don't stop a countdown, the game ends.
    info.stopCountdown()
    // ends invincibility
    sprites.destroy(sprite)
})
// loses lives on overlap with projectile
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
// creates the player
function spawnPlayer () {
    mySprite = sprites.create(img`
        ..............bbbbbbb...........
        ...........bb66663333baa........
        .........bb3367776333663aa......
        ........b33333888333389633aa....
        .......b3333333333333389633aa...
        ......b34443333333333338633bae..
        .....b3455433333333334443333ae..
        ....b33322333dddd3333455233daee.
        ...b3d333333dd3bbbb33322333dabe.
        ..b3d333333d3bb33bb33333333da4e.
        ..bd33333333b33aab3333333223a4ee
        .b3d3663333b33aab33366332442b4ee
        .bd3b983333a3aa3333387633ee3b4ee
        .bd6983333baaa333333387633bb4bee
        b3d6833333bba333333333863ba44ebe
        bdd3333333bb3333333333333a44bebe
        add666633333322333366333ba44bbbe
        ad67776333332442336983d3a444b4e.
        add888b333333ee3369833d3a44b44e.
        add333333333333336833d3a444b4e..
        a3dd3333344433333dddd3a444b44e..
        ab33ddd325543333dd33aa444b44e...
        .eabb3dd32233333baaa4444b44e....
        .ebabb3d333d33baa444443b44e.....
        ..ebaab3ddd3aaa4444433b44e......
        ..eebbaab33a44444333b444e.......
        ...eeebbaab444b333b4444e........
        ....ebeeebbbbbbbb4444ee.........
        .....eebbbb44444444ee...........
        .......eeebbb444eee.............
        ..........eeeeee................
        ................................
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    return mySprite
}
// call the two sprites and set the lives
let projectile2: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
spawnPlayer()
makeInvincibile()
info.setLife(10)
game.onUpdateInterval(2000, function () {
    projectile2 = sprites.createProjectileFromSide(img`
        ...........................ccccccccccc...............................
        .........................ccccccccccccccccc...........................
        .......................ccbbbdbbbacccccccccccc........................
        ......................cbddddd1111111ddbccccccc.......................
        .....................cbdddbddd11111d1111dddbcccc.....................
        ....................cbddbddddd111111111111111dacc....................
        ....................cdd1dbdd1111111111111111111bcc...................
        ...................cdd11d1d11dddd111111111111111bc...................
        ..................cbdd1111bbccccbd11111111111111bcc..................
        ..................cbbd1dddcbcccd1bdd111dddddd111dccc.................
        .................cbbbd1111dddddbbbb111bccedced111acfc................
        .................cbddddd1111dd111d1111bccbddd1111dac.................
        .................cdbcccc71dbd111111111dd1111111111dcc................
        .................cbcdbbdbbb11111dd1111dd1111111111dc.................
        ................ccbbdccbdd111dddcd11111bbd1d1dddd1dc.................
        .................cbcbabdbbbdd119bdbbd11dcb11dddbddbc.................
        .........cc.cc...ebcddabbcbbbbddbddd1ddbbd111d7dddbcc................
        .......ccccddc..ccbd11dbbcbdddbcbbdddccd1111dbcd1dccc................
        ......cccd1db....ccd111dbcbb7d7d1ddbbbbdddddcdbd1bcccc...............
        .ccccccb1ddcfc...ccb1111dbddbac7dd1b11dd1dbdd1bd1cccc..cc............
        .ccbbcc1dbccc.....ce111111bb5dbdbccc77bbdd7dbb71dcccccccccccc.cc.....
        .cccbbdddbc.......cce111111bacbd11bbbbccccccccd1dccccccccccccddbc....
        .ccccbbddcc........cced1111d11bbddd111bddbdbdcd1bcccd111dbcc7dbbc....
        ccccccbdcc.........ccc7d1ddd1111ddbbbdbddbdbbd11bccce7ddd1dadbbcccc..
        .cccbbbbc............cce7ddddd111111ddddddddd111cccccccc7ddddbbbbcc..
        .cccccbc..............ccc7ddddddd111111111111111ccccccccc7ddbbbbbcc..
        ..ccccc.................cce71ddddd1111111111111dccc.c.cccc7bbbbbccc..
        ..cccc...................ccce7d11ddd111111111dddcc........cebccccccc.
        .cccc.....................ccccee7d1111d11111dddbcc..........cccccccc.
        ..ccc......................ccccccc7dd111111ddddbc..............cccc..
        ...cc........................cccccccc7dd1ddddbc.................cc...
        ..c..............................ccccccccccccc..................c....
        ...c...............................ccccccccc.........................
        ....cc...............................................................
        .....c...............................................................
        `, -50, 0)
    projectile2.y = 60
})
