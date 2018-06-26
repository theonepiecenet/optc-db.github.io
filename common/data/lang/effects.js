window.effects = {

    // always use unique IDs, and don't ever change an ID once you've set it
    // IDs must always be greater than 0
    // last ID used: 42
    // Use p.type instead of p.unit.type here

    '바로크 워크스 (pre-v4.0)': {
        description: '격투타입이 아닌경우 스탯의 90% 감소',
        thumb: 462,
        id: 1, // don't change this
        atk: function(p) { return !p.class.has('격투') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('격투') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('격투') ? 0.1 : 1; }
    },

    '바로크 워크스': {
        description: '격투타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 462,
        id: 2, // don't change this
        atk: function(p) { return p.class.has('격투') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('격투') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('격투') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; }
    },

    '죄수 크로커다일(pre-v4.0)': {
        description: '타격타입이 아닌경우 스탯의 90% 감소',
        thumb: 510,
        id: 3, // don't change this
        atk: function(p) { return !p.class.has('타격') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('타격') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('타격') ? 0.1 : 1; }
    },

    '죄수 크로커다일': {
        description: '타격타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 510,
        id: 4, // don't change this
        atk: function(p) { return p.class.has('타격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('타격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('타격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; }
    },

    '부간수장 도미노 (pre-v4.0)': {
        description: '사격타입이 아닌경우 스탯의 90% 감소',
        thumb: 538,
        id: 5, // don't change this
        atk: function(p) { return !p.class.has('사격') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('사격') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('사격') ? 0.1 : 1; }
    },

    '부간수장 도미노': {
        description: '사격타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 538,
        id: 6, // don't change this
        atk: function(p) { return p.class.has('사격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('사격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('사격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; }
    },

    '옥졸장 사디짱 (pre-v4.0)': {
        description: '참격타입이 아닌경우 스탯의 90% 감소',
        thumb: 550,
        id: 7, // don't change this
        atk: function(p) { return !p.class.has('참격') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('참격') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('참격') ? 0.1 : 1; }
    },

    '옥졸장 사디짱': {
        description: '참격타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 550,
        id: 8, // don't change this
        atk: function(p) { return p.class.has('참격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('참격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('참격') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; }
    },

    '샨디아의 전사들': {
        // Note: The debuff is applied to normal attacks but not to specials
        description: '하늘섬 캐릭터가 아닌경우 스탯의 20% 감소',
        thumb: 583,
        id: 9, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584, 780, 781 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        }
    },

    '샨디아의 전사들, 마지막 라운드': {
        // Note: The debuff is applied to normal attacks but not to specials
        // Note 2: The 50% reduction is applied to enemy's defense as well, for whatever reason
       description: '하늘섬 캐릭터가 아닌경우 스탯의 20% 감소, 심 속성 캐릭터의 공격력 50% 감소',
        thumb: 583,
        id: 10, // don't change this
        atk: function(p) {
            var result = window.effects['샨디아의 전사들'].atk(p);
            return (p.type == '마음' ? 0.5 : 1) * result;
        },
        hp: function(p) { return window.effects['샨디아의 전사들'].hp(p); },
        rcv: function(p) { return window.effects['샨디아의 전사들'].rcv(p); },
    },

    '간 폴': {
        description: '자유타입,진화재료,강화재료 를 제외한 타입의 공격력 90%감소',
        thumb: 713,
        id: 11, // don't change this
        atk: function(p) { return p.class.has('자유') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('자유') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('자유') || p.class.has('진화용') || p.class.has('강화용') ? 1 : 0.1; }
    },

    '속성 증폭 (1.05x)': {
        description: '속성 효과가 1.05배 증폭된다.',
        thumb: 768,
        id: 12, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.05 : (p.orb == 0.5 ? 20/21 : 1); }
    },

    '속성 증폭 (1.10x)': {
        description: '속성 효과가 1.10배 증폭된다.',
        thumb: 415,
        id: 13, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); }
    },

    '체인계수 제한 (2.0x)': {
        description: '체인계수가 2.0x로 제한',
        thumb: 772,
        id: 14, // don't change this
        chainLimiter: function() { return 2.0; }
    },
    
    '나이트메어 루피, 2라운드': {
        description: '체인계수가 2.0x로 제한, nullifies the first 11 hits in the chain',
        thumb: 795,
        id: 15, // don't change this
        comboShield: 11,
        chainLimiter: function() { return 2.0; }
    },

    '공격력 감소(50%)': {
        description: '모든 유닛의 공격력이 50%감소',
        thumb: 546,
        id: 16, // don't change this
        atk: function(p) { return 0.5; }
    },

    '공격력 감소(70%)': {
        description: '모든 유닛의 공격력이 80%감소',
        thumb: 765,
        id: 17, // don't change this
        atk: function(p) { return 0.3; }
    },

    '쿠마': {
        description: '[STR],[DEX] 캐릭터의 데미지가 무효화된다.',
        thumb: 836,
        id: 18,  // don't change this
        atk: function(p) { return p.type == '힘' || p.type == '기술' ? 0 : 1; }
    },

    '슈 (Expert)': {
        description: '참격 캐릭터의 공격력이 50% 감소한다.',
        thumb: 773,
        id: 19, // don't change this
        atk: function(p) { return p.class.has("참격") ? 0.5 : 1; }
    },

    '슈 (Master)': {
        description: '참격 캐릭터의 공격력이 70% 감소한다.',
        thumb: 773,
        id: 20, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.3 : 1; }
    },

    '공격력 감소(20%)': {
        description: '모든 캐릭터의 공격력이 20% 감소한다.',
        thumb: 567,
        id: 21, // don't change this
        atk: function(p) { return 0.8; }
    },

    'Hit barrier (26 hits)': {
        description: '첫 26번의 콤보공격이 무효화 된다.',
        thumb: 375,
        id: 22, // don't change this
        comboShield: 26
    },

    'There\'s the G!': {
        description: 'Activates [G] orb support even when Lao-G is not in the team',
        thumb: 880,
        id: 23, // don't change this
        gOrbsEnabled: true
    },
    
    'Coliseum Franky': {
        description: 'Activates [G] orb Support, boosts Orbs by 1.5x',
        thumb: 560,
        id: 24, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); },
        gOrbsEnabled: true
    },

    'Coliseum Killer': {
        description: 'ATK of all units reduced by 95%',
        thumb: 1043,
        id: 25, // don't change this
        atk: function(p) { return 0.05; }
    },
    
    'Coliseum Cricket': {
        description: 'Fixed threshold barrier (200,000)',
        thumb: 428,
        id: 26,
        barrierThreshold: 200000,
        barrierReduction: 0.99
    },
    
    'Sabo Raid Boss': {
        description: 'Reduces Chain By Half',
        thumb: 1047,
        id: 27,
        chainModifier: function(p) { return 0.5 ; }
    },
    
    'Pirate Ship Competition! \"Dead End\" Opens!': {
        description: 'STR/DEX/QCK ATK 1.6x. INT/PSY HP 2x',
        thumb: 1072,
        id: 28,
        atk: function(p) { return (p.type == "힘" || p.type == "기술" || p.type == "속도") ? 1.6 : 1; },
        hp: function(p) { return (p.type == "힘" || p.type == "기술" || p.type == "속도") ? 1 : 2.0; }
        
    },
    
    '1.25x Orb Boost': {
        description: 'Used by Christmas Law in Saga Coliseum',
        thumb: 856,
        id: 29,
        orb: function(p) { return p.orb == 2.0 ? 1.25 : (p.orb == 0.5 ? 20/25 : 1); }
    },
    
    '700k Damage Treshold Barrier': {
        description: 'Used by Saga. You cannot do more that 700k damage in one hit',
        thumb: 1089,
        id: 30,
        barrierThreshold: 700000,
        barrierReduction: 0.99
    },
    
    'Dr. Indigo & Scarlet! Fortnight': {
        //OLD description: 'Boosts ATK of Driven and Powerhouse characters by 2x, other classes get .5x ATK. Boosts HP of Slasher and Fighter characters by 2x, other classes get .5x HP.',
        description: 'Boosts ATK of Driven characters by 2x and boosts HP for Powerhouse characters by 2x.',
        thumb: 1095,
        id: 31,
        atk: function(p) { 
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Driven')) { boost1 = 2.0}
                            if(p.class.has('Powerhouse')) { boost2 = 2.0}
                            if(!(p.class.has('Driven')&&p.class.has('Powerhouse')) && p.class.constructor === Array){
                            if(!p.class.has('Driven')){ boost3 = 0.5}
                            if(!p.class.has('Powerhouse')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Driven') || p.class.has('Powerhouse'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/ 
                            return p.class.has('야심') ? 2 : 1;
                        },
        hp: function(p) {
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Fighter')) { boost1 = 2.0}
                            if(p.class.has('Slasher')) { boost2 = 2.0}
                            if(!(p.class.has('Fighter')&&p.class.has('Slasher')) && p.class.constructor === Array){
                            if(!p.class.has('Fighter')){ boost3 = 0.5}
                            if(!p.class.has('Slasher')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Fighter') || p.class.has('Slasher'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/
                            return p.class.has('강인') ? 2 : 1;
                        }
    },
    
    'Coliseum Tashigi': {
        description: '25 hit barrier and 2x chain limit',
        thumb: 783,
        id: 32,
        comboShield: 25,
        chainLimiter: function() { return 2.0; }
    },
    
    'Robin and Nami\'s Secret Undercover Investigation': {
        description: 'Boosts ATK of Cerebral and Free Spirit characters by 2x, other classes get .5x ATK. Boosts HP of Striker and Shooter characters by 2x, other classes get .5x HP.',
        thumb: 1112,
        id: 33,
        atk: function(p) { 
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('박식')) { boost1 = 2.0}
                            if(p.class.has('자유')) { boost2 = 2.0}
                            if(!(p.class.has('박식')&&p.class.has('자유')) && p.class.constructor === Array){
                            if(!p.class.has('박식')){ boost3 = 0.5}
                            if(!p.class.has('자유')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('박식') || p.class.has('자유'))){ boost5 = 0.5}
                            }
                            //console.log(boost1+" "+boost2+" "+boost3+" "+boost4+" "+boost5)
                            return 1*boost1*boost2*boost3*boost4*boost5; 
                        },
        hp: function(p) {
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('타격')) { boost1 = 2.0}
                            if(p.class.has('사격')) { boost2 = 2.0}
                            if(!(p.class.has('타격')&&p.class.has('사격')) && p.class.constructor === Array){
                            if(!p.class.has('타격')){ boost3 = 0.5}
                            if(!p.class.has('사격')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('타격') || p.class.has('사격'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;
                        }
    },
    
    'Gild Tesoro - 40 Stamina': {
        description: 'Boosts the Orbs and ATK of all characters by 1.1x',
        thumb: 1162,
        id: 34,
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); },
        atk: function(p) { return 1.1; }
    },
    
    'Gild Tesoro - 60 Stamina': {
        description: 'Boosts the Orbs and ATK of all characters by 1.2x',
        thumb: 1163,
        id: 35,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.2; }
    },
    
    '세계 해적 - Boa Stage 1': {
        description: 'Boosts the ATK of characters with 30 cost or less by 1.5x',
        thumb: 865,
        id: 36,
        atk: function(p) { return p.cost <= 30 ? 1.5 : 1; }
    },
    
    '아오키지 [개]- Striker Raid Boss': {
        description: 'Reduces Chain By 90%',
        thumb: 1668,
        id: 37,
        chainModifier: function(p) { return 0.1 ; }
    },

    '도플라밍고 [개] - Fighter Raid Boss': {
        description: 'Reduces Damage taken by 30%',
        thumb: 1623,
        id: 38, // don't change this
        atk: function(p) { return .7 ; },
    },

    '도플라밍고 [개] [GLOBAL] - Fighter Raid Boss': {
        description: 'Reduces Damage taken by 50%',
        thumb: 1623,
        id: 39, // don't change this
        atk: function(p) { return .5 ; },
    },

    '도플라밍고 [개] [GLOBAL] - Striker Raid Boss': {
        description: 'Halves Chain Multiplier.',
        thumb: 1623,
        id: 40, // don't change this
        chainModifier: function(p) { return 0.5 ; }
    },
    
    '사보 [개] - Fighter Raid Boss': {
        description: 'Boosts the Orbs all characters by 1.2x, ATK by 1.3x and Reduces Chain by Half.',
        thumb: 1727,
        id: 41,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.3; },
        chainModifier: function(p) { return 0.5 ; }
    },

    'Kyros Colisuem - Chain multiplier limiter (1.5x)': {
        description: 'Limits chain multiplier to 1.5x',
        thumb: 1667,
        id: 42, // don't change this
        chainLimiter: function() { return 1.5; }
    },
    
};
