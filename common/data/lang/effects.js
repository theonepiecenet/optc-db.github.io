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

    'Treasure Map [Global]': {
        description: 'Boost stats of characters, check in-game news for lists.',
        thumb: 1972,
        id: 43, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 1951, 1937, 1970, 1969, 1968, 1967, 1810, 1737, 1597, 1582, 1581, 1426, 1242, 1137, 1049, 929 ].indexOf(id) != -1) boost = 2.5;
            if([ 1916, 1889, 1853, 1808, 1933, 1932, 1931, 1893, 1891, 1812, 1943, 1879, 1830, 1826, 1772, 1739, 1727, 516, 1945, 1312, 1294, 1959, 1957, 1955, 1953, 1926, 1908, 1906, 1902, 1887, 1885, 1877, 1875, 1873, 1851, 1849, 1806, 1804, 1721, 1713, 1575, 1573, 1540, 1208, 1119, 995, 908, 752, 210, 1935, 1927, 1910, 1883, 1869, 1832, 1794, 1747, 1941, 1972, 1939 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 1951, 1937, 1970, 1969, 1968, 1967, 1810, 1737, 1597, 1582, 1581, 1426, 1242, 1137, 1049, 929 ].indexOf(id) != -1) boost = 2.5;
            if([ 1916, 1889, 1853, 1808, 1933, 1932, 1931, 1893, 1891, 1812, 1943, 1879, 1830, 1826, 1772, 1739, 1727, 516, 1945, 1312, 1294, 1959, 1957, 1955, 1953, 1926, 1908, 1906, 1902, 1887, 1885, 1877, 1875, 1873, 1851, 1849, 1806, 1804, 1721, 1713, 1575, 1573, 1540, 1208, 1119, 995, 908, 752, 210, 1935, 1927, 1910, 1883, 1869, 1832, 1794, 1747, 1941, 1972, 1939 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 1951, 1937, 1970, 1969, 1968, 1967, 1810, 1737, 1597, 1582, 1581, 1426, 1242, 1137, 1049, 929 ].indexOf(id) != -1) boost = 2.5;
            if([ 1916, 1889, 1853, 1808, 1933, 1932, 1931, 1893, 1891, 1812, 1943, 1879, 1830, 1826, 1772, 1739, 1727, 516, 1945, 1312, 1294, 1959, 1957, 1955, 1953, 1926, 1908, 1906, 1902, 1887, 1885, 1877, 1875, 1873, 1851, 1849, 1806, 1804, 1721, 1713, 1575, 1573, 1540, 1208, 1119, 995, 908, 752, 210, 1935, 1927, 1910, 1883, 1869, 1832, 1794, 1747, 1941, 1972, 1939 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
	},

    'Treasure Map [Japan]': {
        description: 'Boost stats of characters, check in-game news for lists.',
        thumb: 2175,
        id: 44, // don't change this
        atk: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2173, 2171, 2169 ].indexOf(id) != -1) boost = 2.5;
            if([ 2148, 2113, 2099, 2156, 2154, 2152, 2150, 2137 ].indexOf(id) != -1) boost = 1.25;
            if([ 2159, 2138, 2066, 1121, 578, 1652, 1571, 2142, 2141, 2140, 2139, 2109, 1941, 1089, 1401, 1553, 2017, 2123, 2163, 516, 836, 1432, 1595, 1623, 1727, 1780, 1830, 2070, 2158, 797, 929, 1095, 1112, 1287, 1357, 1608, 1671, 1690, 1865, 1867, 1893, 1933, 2046, 2144, 2146, 2165, 2167, 681, 683, 685, 1715 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        hp: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2173, 2171, 2169 ].indexOf(id) != -1) boost = 2.5;
            if([ 2148, 2113, 2099, 2156, 2154, 2152, 2150, 2137 ].indexOf(id) != -1) boost = 1.25;
            if([ 2159, 2138, 2066, 1121, 578, 1652, 1571, 2142, 2141, 2140, 2139, 2109, 1941, 1089, 1401, 1553, 2017, 2123, 2163, 516, 836, 1432, 1595, 1623, 1727, 1780, 1830, 2070, 2158, 797, 929, 1095, 1112, 1287, 1357, 1608, 1671, 1690, 1865, 1867, 1893, 1933, 2046, 2144, 2146, 2165, 2167, 681, 683, 685, 1715 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
        rcv: function(p) {
            var boost = 1;
            var id = p.number + 1;
            if([ 2173, 2171, 2169 ].indexOf(id) != -1) boost = 2.5;
            if([ 2148, 2113, 2099, 2156, 2154, 2152, 2150, 2137 ].indexOf(id) != -1) boost = 1.25;
            if([ 2159, 2138, 2066, 1121, 578, 1652, 1571, 2142, 2141, 2140, 2139, 2109, 1941, 1089, 1401, 1553, 2017, 2123, 2163, 516, 836, 1432, 1595, 1623, 1727, 1780, 1830, 2070, 2158, 797, 929, 1095, 1112, 1287, 1357, 1608, 1671, 1690, 1865, 1867, 1893, 1933, 2046, 2144, 2146, 2165, 2167, 681, 683, 685, 1715 ].indexOf(id) != -1) boost = 1.2;
            return boost;
        },
    },
    
    '3 Ranking Missions - Shanks, Tony Tony Chopper and Jinbe': {
        description: 'Stats of certain units boosted',
        thumb: 1700,
        id: 45, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Gecko Moria", "Leo", "Trafalgar Law", "Carina", "Brannew", "Carrot", "Roronoa Zoro", "Brook", "Marguerite", "Machvise", "Dosun", "King Neptune" ].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },    
    },
	
	'X-Drake Neo': {//Remove this eventually
        description: 'Certain units boosted',
        thumb: 1976,
        id: 46, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ([ 1974, 1972, 1945, 1926, 1895, 1770, 1721, 1688, 1684, 1678, 1665, 1632, 1577, 1481, 1047 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ([ 1974, 1972, 1945, 1926, 1895, 1770, 1721, 1688, 1684, 1678, 1665, 1632, 1577, 1481, 1047 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ([ 1974, 1972, 1945, 1926, 1895, 1770, 1721, 1688, 1684, 1678, 1665, 1632, 1577, 1481, 1047 ].indexOf(id) != -1);
            return !matching ? 1 : 1.75;
        }, 
	},
    
    'Blitz Battle! The Three Admirals': {
        description: 'Lot of units boosted',
        thumb: 1314,
        id: 47, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Buggy", "Portgas D. Ace", "Marco", "Jozu", "Vista", "Whitebeard", "Crocodile", "Emporio Ivankov", "Jimbe", "Boa Hancock", "Namule", "Rakuyo", "Fossa", "Curiel", "Doma", "Decalvan Brothers", "Squard", "Whitey Bay", "Little Oars Jr.", "Inazuma", "Blenheim", "Kingdew", "Atmos", "Speed Jiru", "Blackbeard", "Rob Lucci", "Thatch", "Silvers Rayleigh", "Eneru", "Dracule Mihawk", "Perona", "Kinemon", "Kanjuro", "Inuarashi", "Wanda", "Sicilian", "Momonosuke", "Nekomamushi", "Pedro", "Carrot", "Raizo" ].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        }, 
    },
    
    'Blitz Battle! Straw Hat Pirates': {
        description: 'Lot of units boosted',
        thumb: 1404,
        id: 48, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Akainu", "Eneru", "Cavendish", "Fujitora", "Hody Jones", "Dracule Mihawk", "Rob Lucci", "Sengoku", "Magellan", "Blackbeard", "Donquixote Doflamingo", "Aokiji", "Kizaru", "Crocodile", "Boa Hancock", "Buggy", "Nefertari Vivi", "Emporio Ivankov", "Gecko Moria", "Bartholomew Kuma", "Vander Decken IX", "Caribou", "Hyouzou", "Don Chinjao", "Hajrudin", "Hannyabal", "Bentham", "Kinemon", "Duval", "Elizabeth", "Monkey D. Garp", "Smoker", "Tashigi", "Coby", "Momonga", "Sentomaru", "Monet", "Caesar Clown", "Kaku", "Blueno", "Jabra", "Kumadori"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },  
    },
    
    'Kizaru Neo [GLOBAL] - Free Spirit/Striker': {
        description: 'Chain multiplier reduced.',
        thumb: 1780,
        id: 49,
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Striker': {
        description: 'Chain multiplier halved.',
        thumb: 1780,
        id: 50,
        chainModifier: function(p) { return 0.5 ; }//Chain by half
    },
    
    'Kizaru Neo [GLOBAL] - Powerhouse': {
        description: 'Chain multiplier locked at 1.1x after revive.',
        thumb: 1780,
        id: 51,
        chainLimiter: function() { return 1.1; } //Chain locked at 1.1x
    },
    
    'Strawhats 20th Anniversary Mission': {
        description: 'Stats of Strawhats boosted, 1.75x ATK, 1.75x HP, 1.5x RCV and Cooldown reduced by 7 turns at the start of the island.',
        thumb: 1753,
        id: 52,
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.75;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.75;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    'Rainbow Orbs': {
        description: 'Activates [RAINBOW] orb support even when Shirahoshi is not in the team',
        thumb: 1472,
        id: 53, // don't change this
        rainbowOrbsEnabled: true
    },
    
    'Blitz Battle! Doflamingo Family': {
        description: 'Lot of units boosted',
        thumb: 870,
        id: 54, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;
            if (matching) boost *= 1.5;
            return matching ? boost : 1;
        },
        hp: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            /*if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;*/
            if (matching) boost *= 1.5;
            return boost;
        },  
        rcv: function(p) {
            var character = window.families[p.number];
            var boost = 1;
            matching = [ "Monkey D. Luffy", "Roronoa Zoro", "Franky", "Nico Robin", "Usopp", "Trafalgar Law", "Bartolomeo", "Cavendish", "Rob Lucci", "Sabo", "Boa Sandersonia", "Boa Marigold", "Boa Hancock", "Marguerite", "Leo", "Don Sai", "Don Chinjao", "Ideo", "Blue Gilly", "Suleiman", "Mansherry", "Ricky", "Kyros", "Funk Brothers", "Hajrudin", "Abdullah and Jeet", "Orlumbus", "Elizabello", "Bepo", ].indexOf(character) != -1;
            /*if (p.class.has("Slasher")) boost *= 1.5;
            if (p.class.has("Powerhouse")) boost *= 1.5;
            if (p.class.has("Striker")) boost *= 1.5;
            if (p.class.has("Shooter")) boost *= 1.5;*/
            if (matching) boost *= 1.5;
            return boost;
        }, 
    },

    'Orb amplification (1.75x)': {
        description: 'Orb effects amplified by 1.75x',
        thumb: 1961,
        id: 55, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.75 : (p.orb == 0.5 ? 4/7 : 1); }
    },

    '0.5x Chain Boost - Zoro Sanji Change Action': {
        description: 'Chain Boosted by 0.5x',
        thumb: 2000,
        id: 56, // don't change this
        chainAddition: function(p) { return 0.5 }
    },
    
    'Encourage the Soul': {
        description: 'Stats of Strawhats boosted, 1.5x ATK, 1.5x HP, 1.5x RCV and Cooldown reduced by 9 turns at the start of the island.',
        thumb: 1547,
        id: 57, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Monkey D. Luffy", "Roronoa Zoro", "Usopp", "Sanji", "Nami", "Tony Tony Chopper", "Franky", "Nico Robin", "Brook"].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },
    
    '3 Ranking Missions - Ganfor, Mihawk and Blackbeard': {
        description: 'Stats of certain characters boosted.',
        thumb: 447,
        id: 58, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Koala", "Leo", "Elizabello", "Yasopp", "Curiel", "Hina", "Coby", "Monkey D. Garp", "Vinsmoke Reiju", "Nami", "Lucky Roo", "Kizaru"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
    },
    
    'STR Orbs Beneficial': {
        description: 'Activates [STR] orb beneficial effects for all characters',
        thumb: 1313,
        id: 59, // don't change this
        strOrbsEnabled: true
    },
    
    '3 Ranking Missions - Wanda, Ivankov and Kyros': {
        description: 'Stats of certain characters boosted.',
        thumb: 1873,
        id: 60, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = ["Usopp", "Dracule Mihawk", "Jinbe", "Donquixote Doflamingo", "Koala", "Kizaru", "Diamante", "Tanaka", "Byrnndi World", "Caribou", "Charlotte Pudding", "Charlotte Amande"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = ["Usopp", "Dracule Mihawk", "Jinbe", "Donquixote Doflamingo", "Koala", "Kizaru", "Diamante", "Tanaka", "Byrnndi World", "Caribou", "Charlotte Pudding", "Charlotte Amande"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = ["Usopp", "Dracule Mihawk", "Jinbe", "Donquixote Doflamingo", "Koala", "Kizaru", "Diamante", "Tanaka", "Byrnndi World", "Caribou", "Charlotte Pudding", "Charlotte Amande"].indexOf(character) != -1;
            return !matching ? 1 : 1.25;
        },
    },
    
    'High Seas Pirate': {
        description: 'Stats of certain characters boosted.',
        thumb: 1984,
        id: 61, // don't change this
        atk: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Portgas D. Ace", "Jinbe", "Marco", "Crocodile", "Buggy", "Daz Bones", "Sabo", "Franky", "Monkey D. Garp", "Coby", "Little Oars Jr.", "Jozu", "Vista", "Izo", "Blamenco", "Namule", "Rakuyo", "Fossa", "Curiel", "Squard", "Whitey Bay", "Blenheim", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Doma", "Tashigi", "Smoker",].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        hp: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Portgas D. Ace", "Jinbe", "Marco", "Crocodile", "Buggy", "Daz Bones", "Sabo", "Franky", "Monkey D. Garp", "Coby", "Little Oars Jr.", "Jozu", "Vista", "Izo", "Blamenco", "Namule", "Rakuyo", "Fossa", "Curiel", "Squard", "Whitey Bay", "Blenheim", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Doma", "Tashigi", "Smoker",].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
        rcv: function(p) {
            var character = window.families[p.number];
            matching = [ "Monkey D. Luffy", "Portgas D. Ace", "Jinbe", "Marco", "Crocodile", "Buggy", "Daz Bones", "Sabo", "Franky", "Monkey D. Garp", "Coby", "Little Oars Jr.", "Jozu", "Vista", "Izo", "Blamenco", "Namule", "Rakuyo", "Fossa", "Curiel", "Squard", "Whitey Bay", "Blenheim", "Kingdew", "Haruta", "Atmos", "Speed Jiru", "Doma", "Tashigi", "Smoker",].indexOf(character) != -1;
            return !matching ? 1 : 1.5;
        },
    },

    'Attack boost (1.75x)': {
        description: 'ATK of all units boosted by 1.75x',
        thumb: 2215,
        id: 62, // don't change this
        atk: function(p) { return 1.75; }
    },
};
