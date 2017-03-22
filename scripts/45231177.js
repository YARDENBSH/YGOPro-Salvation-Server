/*jslint node : true*/
'use strict';

// Flame Swordsman
module.exports = {
    initial_effect: function card_45231177(card, duel, aux) {

        var effect = {},
            FUSION_MATERIALS = [
                34460851, // Flame Manipulator
                44287299 // Masaki the Legendary Swordsman
            ];
        effect = aux.fusionMonster(card, effect, FUSION_MATERIALS);

        card.registerEffect(effect);

        return card;
    }

};