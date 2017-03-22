function getCardObject(id, database) {
    var result = {};
    database.some(function (card, index) {
        if (id === card.id) {
            result = card;
            return true;
        } else {
            return false;
        }
    });

    return result;
}

/**
 * Constructor for card objects.
 * @param    movelocation 'DECK'/'EXTRA' etc, in caps. 
 * @param   {Number} player       [[Description]]
 * @param   {Number} index        [[Description]]
 * @param   {Number} unique       [[Description]]
 * @returns {object}   a card
 */
function makeCard(database, movelocation, player, index, unique, code) {
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
    Object.assign(baseCard, getCardObject(code, database));

    return baseCard;
}

modules.exports = makeCard;