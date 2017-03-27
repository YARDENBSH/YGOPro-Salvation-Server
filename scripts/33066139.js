/*jslint node : true*/
'use strict';

// Reaper of the Cards
module.exports = {
    id: 33066139,
    initial_effect: function initial_effect(card, duel, aux) {

        var flipEffect = {
            SetDescription: aux.Stringid(33066139, 0),
            SetCategory: 'CATEGORY_DESTROY',
            SetProperty: 'EFFECT_FLAG_CARD_TARGET',
            SetType: ['EFFECT_TYPE_SINGLE', 'EFFECT_TYPE_FLIP'],
            SetTarget: target,
            SetOperation: operation
        };

        card.registerEffect(flipEffect);

        return card;
    }
};