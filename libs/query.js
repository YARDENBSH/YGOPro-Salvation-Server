'use strict';

/**
 * Filters non cards from a collection of possible cards.
 * @param   {Array} a stack of cards which may have overlay units attached to them.
 * @returns {Array} a stack of cards, devoid of overlay units.
 */
function filterIsCard(stack) {
    return stack.filter(function (item) {
        return item.type === 'card';
    });
}

/**
 * Filters out cards based on player.
 * @param   {Array} Array a stack of cards.
 * @param {Number} player 0 or 1
 * @returns {Array} a stack of cards that belong to only one specified player. 
 */
function filterPlayer(stack, player) {
    return stack.filter(function (item) {
        return item.player === player;
    });
}

/**
 * Filters out cards based on zone.
 * @param   {Array} stack a stack of cards.
 * @param {String} location
 * @returns {Array} a stack of cards that are in only one location/zone.
 */
function filterlocation(stack, location) {
    return stack.filter(function (item) {
        return item.location === location;
    });
}

/**
 * Filters out cards based on index.
 * @param   {Array}  a stack of cards.
 * @param {Number} index
 * @returns {Array} a stack of cards that are in only one index
 */
function filterIndex(stack, index) {
    return stack.filter(function (item) {
        return item.index === index;
    });
}
/**
 * Filters out cards based on if they are overlay units or not.
 * @param {Array} stack a stack of cards attached to a single monster as overlay units.
 * @param {Number} overlayindex
 * @returns {Array} a single card
 */
function filterOverlyIndex(stack, overlayindex) {
    return stack.filter(function (item) {
        return item.overlayindex === overlayindex;
    });
}

/**
 * Filters out cards based on if they are a specific UID
 * @param {Array} stack a stack of cards attached to a single monster as overlay units.
 * @param {Number} uid
 * @returns {boolean} if a card is that UID
 */
function filterUID(stack, uid) {
    return stack.filter(function (item) {
        return item.uid === uid;
    });
}


/**
 * Sort function, sorts by card index
 * @param   {object}   first  card object
 * @param   {object}   second card object
 * @returns {boolean} 
 */
function sortByIndex(first, second) {
    return first.index - second.index;
}


module.exports = {
    filterPlayer: filterPlayer,
    filterIsCard: filterIsCard,
    filterIndex: filterIndex,
    filterOverlyIndex: filterOverlyIndex,
    filterlocation: filterlocation,
    filterUID: filterUID,
    sortByIndex: sortByIndex
};