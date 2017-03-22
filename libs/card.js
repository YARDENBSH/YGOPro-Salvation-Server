'use strict';
var hotload = require("hotload");


/**
 * Constructor for card objects.
 * @param    movelocation 'DECK'/'EXTRA' etc, in caps. 
 * @param   {Number} player       [[Description]]
 * @param   {Number} index        [[Description]]
 * @param   {Number} unique       [[Description]]
 * @returns {object}   a card
 */
function makeCard(movelocation, player, index, unique, code) {
    var baseCard = {
        type: 'card',
        player: player,
        location: movelocation,
        id: code,
        index: index,
        position: 'FaceDown',
        overlayindex: 0,
        uid: unique,
        originalcontroller: player,
        counters: 0
    };

    try {
        // if the card doesnt exist this will fail and that is ok.
        baseCard.script = hotload('../scripts/' + code + '.js').init(baseCard);

        /*Script augment baseCard with trigger functions*/

    } catch (error) {
        console.log(error);
        baseCard.script = function () {
            return baseCard;
        };
    }
    return baseCard;
}