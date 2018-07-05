window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: '통통배',
        thumb: 'ship_0001_c.png',
        description: '선장의 회복력을 120 높인다. 일당의 체력이 1.3배가 된다',
        hp: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ][p.boatLevel - 1];
        }
    },

    { // 1
        name: '고잉 메리호',
        thumb: 'ship_0002_c.png',
        description: '선장의 회복력을 300 높인다. 일당의 공격력이 1.5배가 된다',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 100, 130, 150, 170, 190, 210, 230, 250, 270, 300 ][p.boatLevel - 1];
        },
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 2
        name: '해군선',
        thumb: 'ship_0003_c.png',
        description: '일당의 체력을 1.5배 높인다 사격형 캐릭터의 공격력을 100 높인다',
        atkStatic: function(p) {
            return !p.unit.class.has('Shooter') ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 3
        name: '발라티에',
        thumb: 'ship_0004_c.png',
        description: '선장의 체력을 2,000 높인다.',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: '관선',
        thumb: 'ship_0005_c.png',
        description: '참격형 캐릭터의 공격과 체력을 1.5배 선장의 회복력을 700 낮춘다',
        atk: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    { // 5
        name: 'Miss 러브덕 호',
        thumb: 'ship_0006_c.png',
        description: '받는 데미지 10% 낮춘다., 타격형 캐릭터의 공격력 100 높인다.',
        atkStatic: function(p) {
            return !p.unit.class.has('Striker') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 100 ][p.boatLevel -1];
        }
    },

    { // 6
        name: '고잉 메리호 플라잉 모델',
        thumb: 'ship_0007_c.png',
        description: '일당의 공격력 1.2배 높인다., 턴 종료 후에 체력을 350 회복한다',
        atk: function(p) {
            return p.boatLevel < 7 ? 1 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        },
        heal: function(p) {
            return [ 50, 100, 125, 150, 175, 200, 250, 275, 300, 350 ][p.boatLevel - 1];
        }
    },

    { // 7
        name: '모비딕호',
        thumb: 'ship_0008_c1.png',
        description: '모험을 시작할 때 체력이 50% 남은 상태가 된다 일당의 공격력이 1.5배, 체력이 1.4배가 된다',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 8
        name: '빅 탑',
        thumb: 'ship_0009_c1.png',
        description: '코스트 20이하 캐릭터의 공격력이 1.5배 높인다.,  4성 이하 캐릭터의 체력이 1.4배 높인다.',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    },

    { // 9
        name: '베잔 블랙',
        thumb: 'ship_0010_c1.png',
        description: '전투 시작시 스킬 1턴 단축, 속 속성 공격력 1.4배, 체력 1.3배 높인다.',
        atk: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: '아오키지의 자전거',
        thumb: 'ship_0011_c1.png',
        description: '타격형의 공격력과 체력이 각각 1.5배가 된다 [RCV] 슬롯 출현율이 크게 줄어든다',
        atk: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    { // 11
        name: '스트라이커',
        thumb: 'ship_0012_c1.png',
        description: '사격형 캐릭터의 공격력이 1.5배, 체력이 1.3배가 된다 전투 시작 전 사격형 스킬 1턴 단축',
        atk: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1.2, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 12
        name: '드레드노트 샤벨',
        thumb: 'ship_0014_c1.png',
        description: '일당의 체력 1.5배 높인다., 턴 종료 후 무속성 데미지 5,000',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: '사우전드 써니호',
        thumb: 'ship_0013_c.png',
        description: '일당의 공격력 1.5배가 된다 필살기: 적 전체에 50,000의 무 속성 데미지(15턴)',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: '구사 해적선',
        thumb: 'ship_0015_c1.png',
        description: '자유형 캐릭터의 공격력을 1.5배, 체력을 1.35배 높인다., 자유형이 아닌 캐릭터의 체력이 크게 줄어든다 필살기: 일당의 체력을 6,500 회복한다(15턴)',
        atk: function(p) {
            return !p.unit.class.has('Free Spirit') ? 1 :
            [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Free Spirit') ? 0.01 :
                [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { //15
        name: '방주 맥심',
        thumb: 'ship_0016_c1.png',
        description: '[QCK] [PSY] 캐릭터의 공격력이 1.5배, 체력이 1.2배가 된다 필살기: 적 전체에 고정 데미지 56,560을 준다 (17턴)',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: '레드 포스호',
        thumb: 'ship_0017_c1.png',
        description: '박식형의 캐릭터의 공격력을 1.5배, 체력을 1.35배로 만들고, 박식형의 속성 일치 슬롯 출현율이 아주 조금 상승한다',
        atk: function(p) {
            return  !p.unit.class.has('Cerebral') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Cerebral') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: '사우전드 써니 호 트레저 크루즈 2주년 기념모델',
        thumb: 'ship_0018_c1.png',
        //description: 'Boosted Ability: Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge. Base Ability: Boosts ATK by 1.2x.',
        description: '일당의 공격력을 1.2배로 만든다',
        //atk: function(p) { return 1.5; },
        atk: function(p) { return 1.2; },
    }, 
    
    { // 18
        name: '태양의 해적단선',
        thumb: 'ship_0019_c.png',
        description: '일당 편성 시 격투형이 많을수록 격투형의 공격력과 체력을 상승시켜 각각 최대 1.5배가 된다 다른 타입 캐릭터의 공격력, 체력이 크게 줄어든다',
        atk: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        }
    },
    
    { // 19
        name: "돈키호테 해적단선",
        thumb: 'ship_0020_c.png',
        description: '야심형의 공격력을 1.5배, 체력을 1.35배로 만들고, 야심형의 PERFECT 타이밍이 쉬워진다 필살기: 2턴 동안 체인 계수 +0.2(15턴)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 19.2
        name: "돈키호테 해적단선 - 필살기 활성화",
        thumb: 'ship_0020_c.png',
        description: '야심형 캐릭터의 공격력을 최대 1.5배, 체력을 1.35배 높인다.시킨다. 필살기: 야심형의 퍼펙트 적중률을 쉽게 만들어준다. 2턴 동안 체인 계수가 +0.2 (발동: 15턴)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 20
        name: '로켓맨',
        thumb: 'ship_0021_c.png',
        description: '강인형의 공격력 1.55배, 다른 타입의 체력 대폭 감소, 강인형 수에 따라서 턴 종료 시 체력을 회복한다 필살기: 적 1명에게 무 속성 큰 데미지(17턴)',
        atk: function(p) {
            return !p.unit.class.has('Powerhouse') ? 1 : [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class.has('Powerhouse') ? 1 : 0.01;
        },
        heal: function(p) {
            return p.classCount.Powerhouse == 1 ? 1 : p.classCount.Powerhouse == 2 ? 10 : p.classCount.Powerhouse == 3 ? 20 : p.classCount.Powerhouse == 4 ? 30 : p.classCount.Powerhouse == 5 ? 100 : p.classCount.Powerhouse == 6 ? 900 : 0;  
        },
        
    },
    
    { // 21
        name: '모비딕 호-정상전쟁의 용자',
        thumb: 'ship_0022_c.png',
        //description: 'Boosted Ability: Boosts ATK by 1.5x and HP by 1.4x, reduces HP by 7% at the end of the turn. Special: Cuts the current HP of each enemy by 20% (cooldown: 18 turns). Base Ability: Boosts HP by 1.3x.',
        description: '채력 1.3배 상승',
        /*atk: function(p) {
            return 1.5;
        },
        hp: function(p) {
            return 1.4;
        },*/
        hp: function(p) {
            return 1.3;
        },
    },
    
    { // 22
        name: '가프의 군함',
        thumb: 'ship_0023_c.png',
        description: '[STR] 캐릭터와 [PSY] 캐릭터의 공격을 1.5배, 체력을 1.25배로 상승시킨다',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //23
        name: '폴라 탱 호',
        thumb: 'ship_0024_c.png',
        description: '자유형 및 참격형의 공격력 1.5배, 체력 1.25배, PERFECT의 타이밍이 약간 쉬워진다 필살기: 일당의 체력이 매우 적을 때 체력을 10,000 회복한다(18턴)',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1];
        },
    },
    { // 24
        name: '빅톱 호',
        thumb: 'ship_0025_c.png',
        //description: 'Boosted Ability: Boosts ATK of all units by 1.5x. Boosts EXP gained by 1.5x and Beli gained by 1.5x.  Base Ability: Boosts ATK of characters with 20 cost or less by 1.2x',
        description: '코스트 20이하의 캐릭터 공격력이 1.2배',
        atk: function(p) {
            return p.unit.cost <= 20 ? 1.2 : 1;
        }
    },
    { // 25
        name: '사우전드 써니 호 코팅선',
        thumb: 'ship_0026_c.png',
        description: '일당의 공격력이 1.5배가 된다 필살기: 1턴 동안 받는 데미지를 50% 감소시킨다(16턴)',
        atk: function(p) {
            return [ 1.3, 1.3, 1.3, 1.3, 1.35, 1.35, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1];
        }
    },
    { // 26
        name: '키자루 상륙·선전포고의 포탄 동란의 샤본디 제도',
        thumb: 'ship_0027_c.png',
        description: '사격형의 공격력을 1.55배, 체력을 1.2배, 모험 시작 시 사격형의 필살기 턴을 2턴 단축 필살기: 적 전체의 HP를 7% 줄인다(15턴)',
        atk: function(p) {
            return !(p.unit.class.has('Shooter')) ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Shooter')) ? 1 : [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { // 27
        name: '고잉 루피 선배 호',
        thumb: 'ship_0028_c.png',
        description: '모험 시작 시 타격형의 필살기 턴을 1턴 단축하고, 타격형 6명 편성일 때 공격력을 1.5배, 체력을 1.2배로 만든다 필살기:1턴 동안 적 각각에 대해 데미지 10,000이 넘는 부분을 초대폭 감소(17턴)',
        atk: function(p) {
            return !(p.classCount.Striker == 6) ? 1 : !p.unit.class.has('Striker') ? 1 :
                [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.classCount.Striker == 6) ? 1 : !p.unit.class.has('Striker') ? 1 :
                [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    { //28
        name: "스릴러 바크",
        thumb: 'ship_0029_c.png',
        description: '[DEX][INT속 성 캐릭터의 공격력 1.5배, 체력 1.25배 상승.',
        atk: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "INT" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "DEX" || p.unit.type == "INT" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //29
        name: "까마귀 호",
        thumb: 'ship_0030_c.png',
        //description: 'Boosted Ability: Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns). Base Ability: Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 1 turn (cooldown: 16 turns).',
        description: '사격 캐릭터의 공격력 1.2배 상승. 필살기: 적 공격을 1턴 늦춘다. (쿨타임: 16 턴)',
        /*atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.02;
        },*/
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    
    { //29.2
        name: "까마귀 호 - 필살기 활성화",
        thumb: 'ship_0030_c.png',
        //description: 'Boosted Ability: Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns). Base Ability: Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 1 turn (cooldown: 16 turns).',
        description: '사격 캐릭터의 공격력 1.2배 상승. 필살기 활성화: 적 공격을 1턴 늦춘다. (쿨타임: 16 턴)',
        /*atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.5;
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Striker') || p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit') || p.unit.class.has('Cerebral') || p.unit.class.has('Powerhouse') || p.unit.class.has('Driven')) ? 2 : 1.02;
        },*/
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
    },
    
    
    
    { //30
        name: '사우전드 써니 호-3주년 기념모델',
        thumb: 'ship_0032_c.png',
        //description: 'Boosted Ability 1: Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge. Boosted Ability 2: Boosts ATK by 1.5x. Boosts EXP gained by 3x . Base Ability: Boosts ATK by 1.2x.',
        description: '공격력 1.2배 상승',
        atk: function(p) { return 1.2; },
    },
    
    
    
    { //31
        name: "플라잉 더치맨 호",
        thumb: 'ship_0033_c.png',
        description: '일당의 공격력을 1.5배, 획득하는 해적 EXP가 1.5배가 된다 필살기: 적 전체의 방어력을 1턴 동안 25% 줄인다(16턴)',
        atk: function(p) { return [ 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1]; },
    },
    
    
    
    { //31.2
        name: "플라잉 더치맨 - 필살기 활성화",
        thumb: 'ship_0033_c.png',
        description: '공격력 1.5배 상승, 획득 해적 EXP 1.5배 상승. 필살기 활성화: 1턴 동안 적 전체의 방어력 25% 낮춘다. (쿨타임: 16 턴)',
        atk: function(p) { return [ 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1]; },
    },
    
    
    
    { //32
        name: "마샬 D. 티치의 해적선",
        thumb: 'ship_0034_c.png',
        description: '일당의 체력이 1.25배, 모험이 시작될 때 필살기 1턴 단축. 일당에 격투형, 참격형, 타격형, 사격형이 있을 때 일당의 공격력이 1.55배가 된다',
        atk: function(p) { 
            return (p.classCount.Striker >= 1 && p.classCount.Fighter >= 1 && p.classCount.Shooter >= 1 && p.classCount.Slasher >= 1) ? [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //33
        name: "혁명군의 검은 새",
        thumb: 'ship_0035_c.png',
        description: '모험 시작 시 필살기 턴을 1턴 단축, 일당의 체력이 1.2배, 일당에 [STR]·[DEX]·[QCK] 속성이 있을 때, [STR]·[DEX]·[QCK] 속성의 공격력이 1.55배가 된다',
        atk: function(p) { 
            return (p.colorCount.STR>=1 && p.colorCount.DEX>=1 && p.colorCount.QCK>=1) ? [ 1.2, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.5, 1.55 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return [ 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
    
    
    
    { //34
        name: "즈니샤",
        thumb: 'ship_0036_c.png',
        description: '강인형과 박식형 캐릭터의 공격력이 1.55배, 체력이 1.25배가 되고, 같은 타입 캐릭터의 [RCV][TND] 슬롯을 [유리] 슬롯으로 취급하며, PERFECT 타이밍이 상당히 쉬워진다',
        atk: function(p) {
            return !(p.unit.class.has('Powerhouse') || p.unit.class.has('Cerebral')) ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Powerhouse') || p.unit.class.has('Cerebral')) ? 1 : [ 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25 ][p.boatLevel - 1];
        },
    },
    
    
    
    { //35
        name: "라분",
        thumb: 'ship_0038_c.png',
        description: 'Boosted Ability: Boosts ATK of all units by 1.5x. At the start of the adventure, all specials start at MAX charge. Default Ability: Boosts ATK of all units by 1.2x',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //36
        name: "섹시 폭시",
        thumb: 'ship_0037_c.png',
        description: 'Boosts ATK of all units by 1.5x. Boosts EXP gained by 1.2x and Beli gained by 2x.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //38
        name: "사우전드 써니 호-4주년 기념모델",
        thumb: null,
        description: 'Boosted Ability 1: Boosts ATK of all units by 1.5x. Boosts EXP gained by 3x and Beli gained by 3x. Boosted Ability 2: Boosts ATK of all units by 1.5x. At the start of the adventure, all specials start at MAX charge.',
        atk: function(p) {
            return 1.5;
        },
    },
    
    
    
    { //38
        name: "노스트라 카스테로 호",
        thumb: null,
        description: 'Boosts ATK of all units by 1.55x and their HP by 1.3x. Makes PERFECTS easier to Hit. Cuts the current HP of each enemy by 3% at the end of each turn. Reduces ATK based on how many Slasher, Free Spirit or Powerhouse characters you have on your crew.',
        atk: function(p) {
            var reduction = 1;
            if(p.classCount.Slasher > 0) reduction *= 0.5;
            if(p.classCount.FreeSpirit > 0) reduction *= 0.5;
            if(p.classCount.Powerhouse > 0) reduction *= 0.5;
            return [ 1.1, 1.2, 1.25, 1.3, 1.4, 1.4, 1.5, 1.5, 1.5, 1.55 ][p.boatLevel - 1] * reduction;
        },
        hp: function(p) {
            return [ 1, 1, 1, 1, 1, 1, 1, 1.1, 1.2, 1.3 ][p.boatLevel - 1];
        },
    },

];
