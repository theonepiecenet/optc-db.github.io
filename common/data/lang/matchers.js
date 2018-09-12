window.matchers = [

    /* * * * * Captain abilities * * * * */
    
    {
        name: 'Type-boosting captains',
        name_kr: "속성 강화",
        target: 'captain',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Class-boosting captains',
        name_kr: "타입 강화",
        target: 'captain',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },

    {
        name: 'Universal ATK boosting captains',
        name_kr: "공격력 강화 (일당)",
        target: 'captain',
        matcher: /Boosts.+ATK of (all characters|all others)/i
    },

    {
        name: 'ATK boosting captains',
        name_kr: "공격력 강화",
        target: 'captain',
        matcher: /Boosts ATK/i
    },

    {
        name: 'HP boosting captains',
        name_kr: "체력 강화",
        target: 'captain',
        matcher: /Boosts (HP|ATK and HP|ATK, HP)|Boosts.+and their HP/i
    },

    {
        name: 'RCV boosting captains',
        name_kr: "회복력 강화",
        target: 'captain',
        matcher: /Boosts (RCV|ATK and RCV|HP and RCV|ATK, HP and RCV)|Boosts.+and their RCV/i
    },

    {
        name: 'Special boosting captains',
        name_kr: "필살기 강화",
        target: 'captain',
        matcher: /Boosts damage.+specials/i
    },

    {
        name: '2x ATK and HP captains',
        name_kr: "공격력과 체력 2배 강화",
        target: 'captain',
        matcher: /Boosts (ATK and HP|ATK, HP).+by 2x/i
    },

    {
        name: '2x ATK and RCV captains',
        name_kr: "공격력과 회복력 2배 강화",
        target: 'captain',
        matcher: /Boosts ATK and RCV.+by 2x/i
    },

    /*{
        name: '1.25x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 1.25x/i
    },

    {
        name: '1.5x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 1.5x/i
    },

    {
        name: '1.75x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 1.75x/i
    },*/

    {
        name: '2x ATK captains',
        name_kr: "공격력 2배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2x/i
    },

    /*{
        name: '2.25x ATK captains',
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2.25x/i
    },*/

    {
        name: '2.5x ATK captains',
        name_kr: "공격력 2.5배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2.5x/i
    },

    {
        name: '2.75x ATK captains',
        name_kr: "공격력 2.75배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 2.75x/i,
        include: [ 529, 530, 668, 669 ]
    },

    {
        name: '3x ATK captains',
        name_kr: "공격력 3배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3x/i
    },

    {
        name: '3.25x ATK captains',
        name_kr: "공격력 3.25배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3.25x/i
    },

    {
        name: '3.5x ATK captains',
        name_kr: "공격력 3.5배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3.5x/i
    },

    {
        name: '3.75x ATK captains',
        name_kr: "공격력 3.75배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 3.75x/i
    },

    {
        name: '4x ATK captains',
        name_kr: "공격력 4배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 4x/i
    },

    {
        name: '4.25x ATK captains',
        name_kr: "공격력 4.25배 강화",
        target: 'captain',
        matcher: /Boosts (their )?ATK\D*by 4.25x/i
    },

    {
        name: 'HP-based ATK captains',
        name_kr: "체력 기반 공격력 강화",
        target: 'captain',
        matcher: /Boosts ATK.+proportionally to/i
    },

    {
        name: 'Positional captains',
        name_kr: "탭 타이밍 기반 강화",
        target: 'captain',
        matcher: /(after scoring|following a chain|perfect|great|good)/i
    },
    
    {
        name: '"Beneficial" Orb captains',
        name_kr: "[유리] 슬롯 취급",
        target: 'captain',
        matcher: /"beneficial/i
        //matcher: /Makes ((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\])|((STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]) and (STR|DEX|QCK|PSY|INT|\[RCV\]|\[TND\]))) orbs "beneficial"/i
    },

    {
        name: 'Chain multipliers',
        name_kr: "체인 계수 증가량 강화",
        target: 'captain',
        matcher: /Boosts.+chain multiplier/i
    },
    
    {
        name: 'Combo Boost Captains',
        name_kr: "콤보시 공격력 강화",
        target: 'captain',
        matcher: /Boosts.+hit in the chain/i
    },

    {
        name: 'Cooldown reducers',
        name_kr: "필살기 턴 단축",
        target: 'captain',
        matcher: /Reduces cooldown.+by/i
    },

    {
        name: 'Damage reducers',
        name_kr: "데미지 감소",
        target: 'captain',
        matcher: /Reduces (any )?damage received/i
    },

    {
        name: 'Healers',
        name_kr: "힐러",
        target: 'captain',
        matcher: /Recovers/i
    },

    {
        name: 'Tankers',
        name_kr: "탱커",
        target: 'captain',
        matcher: /Reduces (any )?damage.+if HP.+99/i
    },

    {
        name: 'Zombies',
        name_kr: "버티기",
        target: 'captain',
        matcher: /Protects from defeat/i
    },
    
    {
        name: 'End of Turn Damage Dealer',
        name_kr: "턴 종료시 데미지 딜러",
        target: 'captain',
        matcher: /(deals|cuts).+end of each turn/i
    },
    
    {
        name: 'Beli Boosters',
        name_kr: "베리 강화",
        target: 'captain',
        matcher: /boosts.+Beli/i
    },
    
    {
        name: 'EXP Boosters',
        name_kr: "경험치 강화",
        target: 'captain',
        matcher: /boosts.+EXP/i
    },
    
    {
        name: 'Drop Doublers',
        name_kr: "보물 추가",
        target: 'captain',
        matcher: /duplicating a drop/i
    },

    /* * * * * Specials * * * * */

    {
        name: 'Type-boosting specials',
        name_kr: "속성 공격력 강화",
        target: 'special',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },

    {
        name: 'Class-boosting specials',
        name_kr: "타입 공격력 강화",
        target: 'special',
        matcher: /Boosts (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },
    
    {
        name: 'Multiple Stage specials',
        name_kr: "단계별 필살기 보유",
        target: 'special',
        matcher: /description/i
    },

    {
        name: 'Universal ATK boosting specials',
        name_kr: "일당 공격력 강화",
        target: 'special',
        matcher: /Boosts ATK[^,]+(all characters)/i
    },
    
    {
        name: '1.5x ATK specials',
        name_kr: "공격력 1.5배 강화",
        target: 'special',
        matcher: /Boosts ATK\D*by 1.5x/i
    },

    {
        name: '1.75x ATK specials',
        name_kr: "공격력 1.75배 강화",
        target: 'special',
        matcher: /Boosts ATK\D*by 1.75x/i
    },

    {
        name: '2x ATK specials',
        name_kr: "공격력 2배 강화",
        target: 'special',
        matcher: /Boosts ATK\D*by 2x/i
    },
    
    {
        name: '2.25x ATK specials',
        name_kr: "공격력 2.25배 강화",
        target: 'special',
        matcher: /Boosts ATK\D*by 2.25x/i
    },

    {
        name: 'Conditional ATK boosters',
        name_kr: "조건부 공격력 강화",
        target: 'special',
        matcher: /Boosts ATK.+against.+enemies/i
    },

    {
        name: 'Following-turn ATK boosters',
        name_kr: "다음 턴 공격력 강화",
        target: 'special',
        matcher: /(Following the activation.+boosts.+ATK|If during that turn.+boosts.+ATK)/i
    },
    
    {
        name: 'Color Affinity boosters',
        name_kr: "속성 상성 영향 강화",
        target: 'special',
        matcher: /Boosts the Color Affinity/i
    },
    
    {
        name: 'Combo Boost Specials',
        name_kr: "콤보시 공격력 강화",
        target: 'special',
        matcher: /Boost.+hit in the chain/i
    },
    
    {
        name: 'RCV boosters',
        name_kr: "회복력 강화",
        target: 'special',
        matcher: /Boosts.+RCV/i
    },

    {
        name: 'Orb lockers',
        name_kr: "슬롯 고정",
        target: 'special',
        matcher: /locks (orbs|all orbs|orb|own orb)/i
    },

    {
        name: 'Orb boosters',
        name_kr: "슬롯 영향 강화",
        target: 'special',
        matcher: /amplifies.+orb/i
    },
    
    {
        name: '1.5x Orb boost specials',
        name_kr: "슬롯 영향 1.5배 강화",
        target: 'special',
        matcher: /amplifies.+orb\D*by 1.5x/i
    },

    {
        name: '1.75x Orb boost specials',
        name_kr: "슬롯 영향 1.75배 강화",
        target: 'special',
        matcher: /amplifies.+orb\D*by 1.75x/i
    },

    {
        name: '2x Orb boost specials',
        name_kr: "슬롯 영향 2배 강화",
        target: 'special',
        matcher: /amplifies.+orb\D*by 2x/i
    },
    
    {
        name: '2.25x Orb boost specials',
        name_kr: "슬롯 영향 2.5배 강화",
        target: 'special',
        matcher: /amplifies.+orb\D*by 2.25x/i
    },

    {
        name: 'Orb chance boosters',
        name_kr: "속성 일치 슬롯 출현율 상승",
        target: 'special',
        matcher: /boosts chances of getting.+orbs/i
    },

    {
        name: 'Negative to Positive Orb controllers',
        name_kr: "불리 슬롯을 속성 일치 슬롯으로 변경",
        target: 'special',
        matcher: /(Badly Matching orbs into.+Matching orbs)/i,
        //include: [ 900, 901, 996, 997, 933, 938, 939 ],
    },

    {
        name: 'Orb controllers',
        name_kr: "슬롯 변경",
        target: 'special',
        matcher: /(Changes.+(orb|orbs))/i
    },
    
    {
        name: 'Full-board orb controllers',
        name_kr: "모든 슬롯 변경",
        target: 'special',
        matcher: /(Changes[^,]+all orbs|Changes the orbs in|Changes[^,]*every other orb)/i
    },

    {
        name: 'Self-orb controllers',
        name_kr: "자신의 슬롯 변경",
        target: 'special',
        matcher: /Changes.+own orb.+into/i
    },

    {
        name: 'Orb randomizers',
        name_kr: "슬롯 변경 (무작위)",
        target: 'special',
        matcher: /randomizes.+orb/i
    },

    {
        name: 'Orb switchers',
        name_kr: "슬롯 이동",
        target: 'special',
        matcher: /switches orbs/i
    },
    
    {
        name: 'Orb matchers',
        name_kr: "슬롯 변경 (일치)",
        target: 'special',
        matcher: /(Changes.+(orb|orbs|orbs,))[^,]+Matching/i,
        include: [ 1036, 1037 ]
    },

    {
        name: 'Slot emptiers',
        name_kr: "슬롯 변경 (공백)",
        target: 'special',
        matcher: /(Empties|Changes.+into.+\[EMPTY\])/i
    },

    /*{
        name: 'Slot fillers',
        target: 'special',
        matcher: /(Fills\b|\[EMPTY\] orbs into|Changes.+\[EMPTY\].+into)/i
    },*/

    {
        name: 'Delayers',
        name_kr: "공격 지연",
        target: 'special',
        matcher: /delays/i
    },
    
    {
        name: 'Damage dealer',
        name_kr: "데미지 딜러",
        target: 'special',
        matcher: /deals.+to/i
    },
    
    {
        name: 'Single-target damage dealer',
        name_kr: "데미지 딜러 (1명)",
        target: 'special',
        matcher: /deals.+to one enemy/i
    },

    {
        name: 'Multi-target damage dealers',
        name_kr: "데미지 딜러 (여러 명)",
        target: 'special',
        matcher: /Deals.+to (all|random) enemies/i
    },

    {
        name: 'Area of Effect damage dealers',
        name_kr: "데미지 딜러 (전체)",
        target: 'special',
        matcher: /Deals.+to all enemies/i
    },

    {
        name: 'Multi-hit damage dealers',
        name_kr: "데미지 딜러 (멀티 히트)",
        target: 'special',
        matcher: /Deals \d+ hits/i
    },

    {
        name: 'Fixed damage dealers',
        name_kr: "고정 데미지 딜러",
        target: 'special',
        matcher: /Deals.+fixed damage/i
    },

    {
        name: 'Typeless damage dealers',
        name_kr: "무 속성 데미지 딜러",
        target: 'special',
        matcher: /Deals.+typeless damage/i
    },

    {
        name: 'Typed damage dealers',
        name_kr: "속성 데미지 딜러",
        target: 'special',
        matcher: /Deals.+(\[STR\]|\[DEX\]|\[QCK\]|\[PSY\]|\[INT\]) damage/i
    },
    
    {
        name: 'Additional Damage dealer',
        name_kr: "추가 데미지 딜러",
        target: 'special',
        matcher: /Additional.+Damage/i
    },
    
    {
        name: 'Instant Defeat special',
        target: 'special',
        matcher: /instantly defeat/i
    },
    
    {
        name: 'Defense and Barrier Buff Ignoring damage dealer',
        name_kr: "모든 방어 효과 무시 데미지 딜러",
        target: 'special',
        matcher: /Deals.+ignore damage negating abilities and barriers/i
    },

    {
        name: 'Healers',
        name_kr: "체력 회복",
        target: 'special',
        matcher: /Recovers/i
    },

    {
        name: 'Health reducers',
        name_kr: "체력 감소",
        target: 'special',
        matcher: /Reduces crew's (current )?HP/i
    },

    {
        name: 'Poisoners',
        name_kr: "중독",
        target: 'special',
        matcher: /(poisons|Inflicts Toxic)/i
    },

    {
        name: 'Poison removers',
        name_kr: "독 상태 회복",
        target: 'special',
        matcher: /removes.+poison/i 
    },

    {
        name: 'Health cutters',
        name_kr: "체력 퍼센트 데미지",
        target: 'special',
        matcher: /Cuts.+current HP.+enem/i
    },

    {
        name: 'HP-based damage dealers',
        name_kr: "체력 기반 데미지 딜러",
        target: 'specialNotes',
        matcher: /specialProportional/i
    },

    {
        name: 'Defense reducers',
        name_kr: "방어력 감소",
        target: 'special',
        matcher: /Reduces the defense/i
    },

    /*{
        name: 'Meat producers',
        target: 'special',
        matcher: /into( either)?[\s,\[\]A-Zor]+\[RCV\]/
    },

    {
        name: 'Meat converters',
        target: 'special',
        matcher: /\[RCV\].+into/i
    },*/

    {
        name: 'Damage reducers',
        name_kr: "데미지 감소",
        target: 'special',
        matcher: /Reduces (any )?damage received/i
    },

    {
        name: 'Damage nullifiers',
        name_kr: "데미지 무효화",
        target: 'special',
        matcher: /Reduces (any )?damage received.+100%/i
    },
    
    /*{
        name: 'Debuff Reducing Specials',
        target: 'special',
        matcher: /(reduces|removes) [^,]+(Bind|Despair|Silence|Paralysis|Blindness|Poison|No Healing|Chain Limit).+duration/i
    },*/

    {
        name: 'Bind reducers',
        name_kr: "봉쇄 상태 회복",
        target: 'special',
        matcher: /(reduces|removes).+bind.+duration/i
    },

    {
        name: 'Despair reducers',
        name_kr: "선장 효과 무효 상태 회복",
        target: 'special',
        matcher: /(reduces|removes).+despair.+duration/i
    },
    
    {
        name: 'Silence reducers',
        name_kr: "필살기 봉쇄 상태 회복",
        target: 'special',
        matcher: /(reduces|removes).+silence.+duration/i
    },
    
    {
        name: 'Paralysis reducers',
        name_kr: "마비 상태 회복",
        target: 'special',
        matcher: /(reduces|removes).+Paralysis/i 
    },

    {
        name: 'Block orb removers',
        name_kr: "[방해] 슬롯 변경",
        target: 'special',
        matcher: /(empties.+with \[BLOCK\]|changes.+\[BLOCK\].+into|including.+\[BLOCK\])/i,
        include: [ 1383, 1384 ]
    },

    {
        name: 'Blindness reducers',
        name_kr: "의성어 은폐 상태 회복",
        target: 'special',
        matcher: /(reduces|removes).+blindness/i
    },

    {
        name: 'Crew ATK DOWN reducer',
        name_kr: "일당의 공격력 감소 회복",
        target: 'special',
        matcher: /(removes|reduces).+ATK DOWN/i 
    },

    {
        name: 'Crew Increase Damage Taken reducer',
        name_kr: "일당의 받는 데미지 증가 회복",
        target: 'special',
        matcher: /(removes|reduces).+Increase Damage Taken/i 
    },

    {
        name: 'Crew positive buff reducer',
        name_kr: "일당의 유리 효과 해제",
        target: 'special',
        matcher: /removes.+positive buffs/i 
    },

    {
        name: 'Enemy End of Turn buff reducer',
        name_kr: "적 추격 데미지 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+End of Turn/i 
    },

    {
        name: 'Enemy Enrage buff reducer',
        name_kr: "적 분노 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+Enrage/i 
    },

    {
        name: 'Enemy ATK UP buff reducer',
        name_kr: "적 공격력 강화 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+ATK UP/i 
    },

    {
        name: 'Enemy Increased Defense reducer',
        name_kr: "적 방어력 상승 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+Increased Defense/i 
    },

    {
        name: 'Enemy Percent Damage Reduction reducer',
        name_kr: "적 데미지 감소 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+Percent Damage Reduction/i 
    },

    {
        name: 'Enemy Damage Nullification reducer',
        name_kr: "적 데미지 무효화 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+Damage Nullification/i 
    },

    {
        name: 'Enemy Threshold Damage Reduction reducer',
        name_kr: "적 데미지 격감 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+Threshold Damage Reduction/i 
    },

    {
        name: 'Enemy Barrier reducer',
        name_kr: "적 배리어 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+enemy Barrier/i 
    },

    {
        name: 'Enemy Resilience reducer',
        name_kr: "적 버티기 상태 감소",
        target: 'special',
        matcher: /(removes|reduces).+Resilience/i 
    },

    {
        name: 'Zombies',
        name_kr: "버티기",
        target: 'special',
        matcher: /Protects from defeat/i
    },
    
    {
        name: 'End of Turn Damage Dealer',
        name_kr: "턴 종료시 데미지 딜러",
        target: 'special',
        matcher: /(deals|cuts).+end of the turn/i
    },
    
    {
        name: 'Special cooldown reducers',
        name_kr: "필살기 턴 단축",
        target: 'special',
        matcher: /reduces special cooldown/i
    },
    
    {
        name: 'Chain Boosters',
        name_kr: "체인 계수 강화",
        target: 'special',
        matcher: /Adds.+to Chain/i 
    },
    
    {
        name: 'Chain Lockers',
        name_kr: "체인 계수 고정",
        target: 'special',
        matcher: /Locks the chain multiplier/i 
    },
    
    {
        name: 'Chain Multiplier Limit reducer',
        name_kr: "체인 계수 상한 고정 상태 회복",
        target: 'special',
        matcher: /(removes|reduces).+Chain Multiplier Limit/i 
    },
    
    {
        name: 'Chain Coefficient Reduction reducer',
        name_kr: "체인 계수 감소 상태 회복",
        target: 'special',
        matcher: /(removes|reduces).+Chain Coefficient Reduction/i 
    },
    
    {
        name: '"Beneficial" Orb Enablers',
        name_kr: "[유리] 슬롯 취급",
        target: 'special',
        matcher: /"beneficial/i
    },
    
    /* * * * * Sailor * * * * */
    
    {
        name: 'Has Sailor Ability',
        target: 'sailor',
        name_kr: "선원효과 보유",
        matcher: /\S/i
    },
    
    {
        name: 'Type-boosting sailors',
        name_kr: "속성 강화",
        target: 'sailor',
        matcher: /Boosts base (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },
    
    {
        name: 'Class-boosting sailors',
        name_kr: "타입 강화",
        target: 'sailor',
        matcher: /Boosts base (ATK|HP|RCV|ATK and HP|ATK and RCV|HP and RCV|ATK, HP and RCV) of[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },
    
    {
        name: 'ATK boosting sailors',
        name_kr: "공격력 강화",
        target: 'sailor',
        matcher: /Boosts base ATK/i
    },

    {
        name: 'HP boosting sailors',
        name_kr: "체력 강화",
        target: 'sailor',
        matcher: /Boosts base (HP|ATK and HP|ATK, HP)|Boosts.+and their HP/i
    },

    {
        name: 'RCV boosting sailors',
        name_kr: "회복력 강화",
        target: 'sailor',
        matcher: /Boosts base (RCV|ATK and RCV|HP and RCV|ATK, HP and RCV)|Boosts.+and their RCV/i
    },
    
    {
        name: 'Paralysis reducers',
        name_kr: "마비 상태 회복",
        target: 'sailor',
        matcher: /(reduces|removes|resists).+Paralysis/i 
    },

    {
        name: 'Blindness reducers',
        name_kr: "의성어 은폐 상태 회복",
        target: 'sailor',
        matcher: /(reduces|removes|resists).+blindness/i
    },
    
    {
        name: 'Silence reducers',
        name_kr: "필살기 봉쇄 상태 회복",
        target: 'sailor',
        matcher: /(reduces|removes|resists).+silence/i
    },
    
    {
        name: 'Special Rewind Restorers',
        name_kr: "필살기 턴 되돌리기 회복",
        target: 'sailor',
        matcher: /Restores (his|her) own special/i
    },
    
    {
        name: 'Special Cooldown Reducer on Special Activation',
        name_kr: "필살기 사용시 필살기 턴 단축",
        target: 'sailor',
        matcher: /When any.+character uses a special, reduces own cooldown/i
    },
    
    {
        name: 'Orb Retainer',
        name_kr: "슬롯 유지",
        target: 'sailor',
        matcher: /If this character has.+(STR|DEX|QCK|PSY|INT|RCV).+(GOOD|GREAT|PERFECT)/i
    },
    
    {
        name: 'Blow Away Resistance',
        name_kr: "날리기 저항",
        target: 'sailor',
        matcher: /Cannot be Blown away/i
    },
    
    {
        name: 'Additional Damage dealer',
        name_kr: "추가 데미지 딜러",
        target: 'sailor',
        matcher: /Additional.+Damage/i
    },
    
    {
        name: '"Beneficial" Orb sailors',
        name_kr: "[유리] 슬롯 취급",
        target: 'sailor',
        matcher: /"beneficial/i
    },
    
    {
        name: 'STR Orb Team "Beneficial" Orb sailors',
        name_kr: 'STR Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[STR\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'DEX Orb Team "Beneficial" Orb sailors',
        name_kr: 'DEX Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[DEX\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'QCK Orb Team "Beneficial" Orb sailors',
        name_kr: 'QCK Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[QCK\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'PSY Orb Team "Beneficial" Orb sailors',
        name_kr: 'PSY Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[PSY\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'INT Orb Team "Beneficial" Orb sailors',
        name_kr: 'INT Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[INT\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'TND Orb Team "Beneficial" Orb sailors',
        name_kr: 'TND Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[TND\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    {
        name: 'RCV Orb Team "Beneficial" Orb sailors',
        name_kr: 'RCV Orb Team "Beneficial" Orb sailors',
        target: 'sailor',
        matcher: /Makes.+\[RCV\][^\"\d]+orbs \\"beneficial\\"[^\"\d]+characters/i
    },
    
    /* * * * * Limit Break * * * * */
    
    {
        name: 'Has Limit Break',
        name_kr: "한계돌파 보유",
        target: 'limit',
        matcher: /\S/i
    },
    
    {
        name: 'Enrage Potential Ability',
        name_kr: "피격 시 공격력 상승",
        target: 'limit',
        matcher: /Enrage/i
    },
    
    {
        name: 'Reduce No Healing Potential Ability',
        name_kr: "회복 무효 내성",
        target: 'limit',
        matcher: /Reduce No Healing/i
    },
    
    {
        name: 'Critical Hit Potential Ability',
        name_kr: "크리티컬 공격",
        target: 'limit',
        matcher: /Critical Hit/i
    },
    
    {
        name: 'Slot Bind Self-reduction Potential Ability',
        name_kr: "슬롯 봉쇄 내성",
        target: 'limit',
        matcher: /Slot Bind Self-reduction/i
    },
    
    {
        name: 'Barrier Penetration Potential Ability',
        name_kr: "배리어 관통",
        target: 'limit',
        matcher: /Barrier Penetration/i
    },
    
    {
        name: 'Pinch Healing Potential Ability',
        name_kr: "긴급 회복",
        target: 'limit',
        matcher: /Pinch Healing/i
    },
    
    {
        name: 'Cooldown Reduction Potential Ability',
        name_kr: "초기 필살기 턴 수 단축",
        target: 'limit',
        matcher: /Cooldown Reduction/i
    },
    {
        name: 'Double Special Activation Potential Ability',
        name_kr: "Double Special Activation Potential Ability",
        target: 'limit',
        matcher: /Double Special Activation/i
    },
    {
        name: 'Damage Reduction Potential Ability',
        name_kr: "데미지 피해 감소",
        target: 'limit',
        matcher: /Damage Reduction/i
    },
    
    {
        name: 'STR Damage Reduction Potential Ability',
        name_kr: "[힘]속성 데미지 피해 감소",
        target: 'limit',
        matcher: /\[STR\] Damage Reduction/i
    },
    
    {
        name: 'DEX Damage Reduction Potential Ability',
        name_kr: "[기]속성 데미지 피해 감소",
        target: 'limit',
        matcher: /\[DEX\] Damage Reduction/i
    },
    
    {
        name: 'QCK Damage Reduction Potential Ability',
        name_kr: "[속]속성 데미지 피해 감소",
        target: 'limit',
        matcher: /\[QCK\] Damage Reduction/i
    },
    
    {
        name: 'PSY Damage Reduction Potential Ability',
        name_kr: "[심]속성 데미지 피해 감소",
        target: 'limit',
        matcher: /\[PSY\] Damage Reduction/i
    },
    
    {
        name: 'INT Damage Reduction Potential Ability',
        name_kr: "[지]속성 데미지 피해 감소",
        target: 'limit',
        matcher: /\[INT\] Damage Reduction/i
    },
];
