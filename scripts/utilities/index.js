/*jslint node : true*/
'use strict';
module.exports = {
    fusionMonster: function fusionMonster(card, effect, FUSION_MATERIALS) {
        card.FUSION_MATERIALS = FUSION_MATERIALS;
        effect.type = 'EFFECT_TYPE_SINGLE';
        effect.operation = function fusionSummon(action) {
            if (action.type === 'FUSION_SUMMONED') {
                card.FUSION_SUMMONED = true;
            }
        };
        return effect;
    }
};