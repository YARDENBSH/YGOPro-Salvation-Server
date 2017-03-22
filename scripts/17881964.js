/*jslint node : true*/
'use strict';

// Darkfire Dragon
module.exports = {
    initial_effect: function initial_effect(card, duel, aux) {

        var effect = {},
            FUSION_MATERIALS = [
                53293545, // Firegrass
                75356564 // Petit Dragon
            ];
        effect = aux.fusionMonster(card, effect, FUSION_MATERIALS);

        card.registerEffect(effect);

        return card;
    }
};