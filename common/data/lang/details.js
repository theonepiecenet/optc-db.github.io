window.details = {
    1: {
        special: "적 1명에게 캐릭터의 공격력x5배의 STR 데미지",
		specialName: "빙글빙글 고무 펀치"
    },
    2: { // modified
        special: "적 1명에게 캐릭터의 공격x7배의 [STR] 데미지",
		specialName: "고무고무 총",
		captain: "일당의 공격력이 1.5배가 된다."
    },
    3: { // modified
        special: "적 1명에게 캐릭터의 공격력x15배의 [STR] 데미지",
		specialName: "고무고무 바주카",
		captain: "일당의 공격력이 1.5배가 된다."
    },
    4: { // modified
        captain: "[STR] 캐릭터의 공격력이 2배가 되고, 다른 속성 캐릭터의 공격력이 1.5배가 된다",
        special: "적 1명에게 캐릭터 공격x25배의 [STR] 데미지",
        specialName: "고무고무 트윈 JET총",
        limit: [
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 30" },
            { "description": "회복력 상승 : 20" },
            { "description": "잠재능력 습득 1: 격분" },
            { "description": "체력강화 : 30" },
            { "description": "회복력 상승 : 30" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "선원효과 추가 1: 자신이 마지막으로 공격할 때 자신의 기본 공격력이 100증가한다." },
            { "description": "체력 상승 : 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "선원효과 추가 2: [QCK] 슬롯도 [유리] 슬롯으로 만든다." },
            { "description": "잠재능력 습득 2: 회복 무효 상태 회복" },
        ],
        potential: [
            {
                "Name": "격분",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "회복 무효 상태 회복",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 2 턴",
                    "Level 4: 회복 무효 상태 회복 : 3 턴",
                    "Level 5: 회복 무효 상태 회복 : 4 턴"
                ]
            },
        ],
        potentialNotes: "격분은 선원이 이전 턴에 적으로부터 공격을 받을 경우 활성화 된다."
    },
	5: { // modified
		special: "적 1명에게 캐릭터 공격x7배의 [DEX] 데미지",
		specialName: "도깨비 참수",
		captain: "[DEX] 캐릭터의 공격력이 1.5배가 된다"
	},
    6: {
    special: "적 전체에게 캐릭터의 공격x10배의 [DEX] 데미지",
		specialName: "삼도류 오의 삼천세계",
		captain: "[DEX] 캐릭터의 공격력이 1.5배가 된다."
    },
    7: {
    special: "적 전체에 캐릭터 공격x10배의 [DEX] 데미지",
		specialName: "삼도류 백팔번뇌봉",
		captain: "[DEX] 캐릭터의 공격력이 1.5배가 된다."
    },
    8: {
		special: "적 전체에게 캐릭터 공격력 15배의 DEX 데미지",
		specialName: "아수라 일무은",
		captain: "DEX 캐릭터의 공격력이 2배가 된다.",
    },
    9: { // modified
		special: "체력을 1000 회복한다",
		specialName: "도둑 고양이",
		captain: "[INT] 캐릭터가 주는 데미지를 20% 감소시킨다"
    },
	10: {
		special: "적 1명에게 캐릭터 공격력 15배의 INT 데미지",
		specialName: "토네이도 템포",
		captain: "INT 캐릭터의 공격력이 1.5배가 된다."
	},
	11: {
		special: "INT의 공격을 1턴 무효화시킨다",
		specialName: "신기루 템포",
		captain: "INT 캐릭터의 공격력이 1.5배가 된다."
	},
	12: {
		special: "적 전체에게 캐릭터 공격력 15배의 INT 데미지",
		specialName: "썬더볼트 템포",
		captain: "INT 캐릭터의 체력과 공격이 1.5배가 된다"
	},
	13: {
		special: "적 전체의 공격을 1턴 지연시킨다",
		specialName: "허풍쟁이",
		captain: "사격형 캐릭터의 공격력이 1.2배가 된다"
	},
	14: {
		special: "적 전체의 공격을 2턴 지연시킨다",
		specialName: "타바스코 탄",
		captain: "PSY 캐릭터의 공격력이 1.5배가 된다."
	},
    15: {
        special: "적 전체의 공격을 3턴 지연시킨다.",
        specialName: "골드 파운드",
        captain: "PSY 캐릭터의 공격력이 1.5배가 ."
    },
    16: {
		special: "적 전체의 공격을 3턴 지연시키고, 캐릭터의 공격15배의 PSY 데미지",
		specialName: "화조성",
		captain: "PSY 캐릭터의 체력과 공격이 1.5배가 된다"
	},
	17: {
		special: "캐릭터의 회복×10배의 체력을 회복한다",
		specialName: "특제 볶음밥",
		captain: "QCK 캐릭터의 공격력이 1.5배가 된다"
	},
	18: {
		special: "적 전체의 방어력을 2턴 동안 반으로 줄인다",
		specialName: "정형 쇼트",
		captain: "QCK 캐릭터의 체력이 1.5배가 된다"
	},
	19: {
		special: "캐릭터의 회복×10배의 체력을 회복한다",
		specialName: "구운 돌 스튜",
		captain: "QCK 캐릭터의 공격력이 1.5배가 된다"
	},
	20: {
		special: "적 전체에 5000의 고정 데미지",
		specialName: "디아블 잠브",
		captain: "QCK 캐릭터의 공격력과 체력이 1.5배가 된다"
	},
	21: {
		special: "가까이 있는 캐릭터의 슬롯을 RCV로 바꾼다",
		specialName: "활기를 주는 응원",
		captain: "PSY 캐릭터의 회복력이 1.2배가 된다"
	},
	22: {
		special: "적 1명에게 캐릭터의 공격×15배의 PSY 데미지",
		specialName: "헤비 공",
		captain: "PSY 캐릭터의 회복력이 1.5배가 된다"
	},
	23: {
		special: "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다",
		specialName: "진단",
		captain: "INT 캐릭터의 회복력이 1.5배가 된다"
	},
	24: {
		special: "적 전체의 방어력을 2턴 동안 반으로 줄인다",
		specialName: "발굽 로제오",
		captain: "STR 캐릭터의 회복력이 1.5배가 된다"
	},
	25: {
		special: "적 전체에 캐릭터의 공격×7배의 QCK 데미지",
		specialName: "뿔 강화 로제오 콜로네이드",
		captain: "QCK 캐릭터의 회복력이 1.5배가 된다"
	},
	26: {
		special: "받는 데미지를 3턴 동안 50％ 감소시킨다",
		specialName: "모피강화",
		captain: "DEX 캐릭터의 회복력이 1.5배가 된다"
	},
	27: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬",
		captain: "QCK 캐릭터의 체력이 1.2배가 된다"
	},
	28: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트",
		captain: "격투형 캐릭터의 공격력이 1.2배가 된다"
	},
	29: {
		special: "적 1명에게 캐릭터의 공격×7배의 STR 데미지",
		specialName: "아름다운 쇠몽둥이",
		captain: "STR 캐릭터가 주는 데미지를 30％ 감소시킨다"
	},
	30: {
		special: "받는 데미지를 1턴 동안 80％ 감소시킨다",
		specialName: "미끌미끌 슈플",
		captain: "STR 캐릭터가 주는 데미지를 50％ 감소시킨다"
	},
	31: { // modified
		captain: "턴 종료 후에 캐릭터의 회복×2배의 체력이 회복한다"
	},
	32: {
		special: "RCV슬롯을 TND으로 바꾼다",
		specialName: "결사의 난사",
		captain: "턴 종료 후에 캐릭터의 회복×2배의 체력이 회복한다"
	},
	33: {
		captain: "INT 캐릭터가 주는 데미지를 30％ 감소시킨다"
	},
	34: {
		special: "적 전체의 방어력을 1턴 동안 0으로 만든다",
		specialName: "적반하장의 지푸라기 인형",
		captain: "INT 캐릭터가 주는 데미지를 30％ 감소시킨다"
	},
	35: {
		special: "적 1명에게 캐릭터의 공격×5배의 STR 데미지",
		specialName: "처형의 도끼손",
		captain: "참격형 캐릭터의 체력이 1.2배가 된다"
	},
	36: {
		special: "적 1명에게 캐릭터의 공격×5배의 PSY 데미지",
		specialName: "격렬 물어뜯기",
		captain: "PSY 캐릭터의 공격력이 1.5배가 된다"
	},
	37: {
		special: "적 1명에게 캐릭터의 공격×5배의 DEX 데미지",
		specialName: "곡예기술 일백팽이 태풍극장",
		captain: "DEX 캐릭터의 공격력이 1.5배가 된다"
	},
	38: {
		special: "RCV슬롯을 INT 슬롯으로 바꾼다",
		specialName: "동강동강 페스티벌",
		captain: "INT 캐릭터의 공격력이 1.5배가 된다"
	},
	39: {
		special: "RCV슬롯을 INT 슬롯으로 바꾼다",
		specialName: "동갈동갈 페스티벌",
		captain: "INT 캐릭터의 공격력이 2배가 된다"
	},
	40: { // modified
		special: "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다",
		specialName: "[RCV] 슬롯 스톰",
		captain: "사격형 캐릭터가 주는 데미지를 30％ 감소시킨다"
	},
	41: {
		special: "[RCV] 슬롯을 [INT] 슬롯으로 바꾼다",
		specialName: "오리발 작전",
		captain: "[INT] 캐릭터의 회복력이 1.2배가 된다"
	},
	42: {
		special: "적 전체에 캐릭터의 공격×3배의 STR 데미지",
		specialName: "필살 고양이 밟았다",
		captain: "STR 캐릭터의 공격력이 1.2배가 된다"
	},
	43: {
		special: "RCV슬롯을 DEX슬롯으로 바꾼다",
		specialName: "최면술 원 투 쟝고",
		captain: "받는 데미지를 10％ 감소시킨다"
	},
	44: {
		special: "RCV슬롯을 DEX슬롯으로 바꾼다",
		specialName: "댄스 천국",
		captain: "받는 데미지를 10％ 감소시킨다"
	},
	45: {
		special: "적 전체에 캐릭터의 공격×5배의 QCK 데미지",
		specialName: "작살",
		captain: "QCK 캐릭터의 공격력이 1.2배가 된다"
	},
	46: {
		special: "적 전체에 캐릭터의 공격×5배의 QCK 데미지",
		specialName: "작살",
		captain: "QCK 캐릭터의 공격력이 1.5배가 된다"
	},
	47: {
		special: "TND을 RCV로 바꾼다",
		specialName: "연 슬롯 체인지· 고기 슬롯"
	},
	48: {
		special: "가까이 있는 캐릭터의 슬롯을 RCV로 바꾼다",
		specialName: "고기 슬롯 스톰"
	},
	49: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트",
		captain: "STR 캐릭터의 공격력이 1.5배가 된다"
	},
	50: {
		special: "적 1명에게 캐릭터의 공격×5배의 STR 데미지",
		specialName: "식중독 포탄",
		captain: "턴 종료 후에 캐릭터의 회복×4배의 체력이 회복한다"
	},
	51: {
		captain: "턴 종료 후에 캐릭터의 회복×3배의 체력이 회복한다"
	},
	52: {
		special: "STR슬롯을 DEX슬롯으로 바꾼다",
		specialName: "요리장 드롭",
		captain: "격투형 캐릭터의 공격력이 2.5배가 된다"
	},
	53: {
		captain: "QCK으로부터 받는 데미지를 30％ 감소시킨다"
	},
	54: {
		special: "적 1명에게 캐릭터의 공격×7배의 QCK 데미지",
		specialName: "귀신난무",
		captain: "QCK으로부터 받는 데미지를 50％ 감소시킨다"
	},
	55: {
		captain: "STR으로부터 받는 데미지를 30％ 감소시킨다"
	},
	56: {
		special: "RCV슬롯을 STR슬롯으로 바꾼다",
		specialName: "파이어 파알 프레젠트",
		captain: "STR으로부터 받는 데미지를 50％ 감소시킨다"
	},
	57: {
		special: "적 1명에게 캐릭터의 공격×7배의 INT 데미지",
		specialName: "체인 해머",
		captain: "받는 데미지를 10％ 감소시킨다"
	},
	58: {
		special: "적 전체를 독으로 만든다",
		specialName: "맹독 가스탄 MH5",
		captain: "받는 데미지를 20％ 감소시킨다"
	},
	59: {
		special: "PSY슬롯을 INT슬롯으로 바꾼다",
		specialName: "심 속성 슬롯 체인지·지 속성",
		captain: "INT 캐릭터의 공격력이 1.2배가 된다"
	},
	60: {
		special: "TND을 STR으로 바꾼다",
		specialName: "연 슬롯 체인지·힘 슬롯",
		captain: "STR 캐릭터의 공격력이 1.5배가 된다"
	},
	61: {
		special: "적 전체에 캐릭터의 공격×5배의 INT 데미지",
		specialName: "물대포",
		captain: "사격형 캐릭터의 체력이 1.5배가 된다"
	},
	62: {
		special: "적 1명에게 캐릭터의 공격×7배의 STR 데미지",
		specialName: "손바닥 올려치기",
		captain: "격투형 캐릭터의 체력이 1.5배가 된다"
	},
	63: {
		captain: "DEX으로부터 받는 데미지를 30％ 감소시킨다"
	},
	64: {
		special: "적 전체에 캐릭터의 공격×10배의 DEX 데미지",
		specialName: "문어발식 집중공격",
		captain: "DEX으로부터 받는 데미지를 50％ 감소시킨다"
	},
	65: {
		special: "적 1명에게 캐릭터의 공격×7배의 STR 데미지",
		specialName: "샤크 온 다트",
		captain: "참격형 캐릭터의 공격력이 2배가 된다"
	},
	66: {
		special: "적 1명에게 캐릭터의 공격×15배의 STR 데미지",
		specialName: "샤크 온 톱니바퀴",
		captain: "참격형 캐릭터의 공격력이 2배가 된다"
	},
	67: {
		special: "적 1명에게 캐릭터의 공격×25배의 QCK 데미지",
		specialName: "거합베기",
		captain: "참격형 캐릭터의 회복력이 1.5배가 된다"
	},
	68: {
		special: "적 1명에게 캐릭터의 공격×25배의 QCK 데미지",
		specialName: "거합베기",
		captain: "참격형 캐릭터의 회복력이 2배가 된다"
	},
	69: {
		special: "받는 데미지를 3턴 동안 50％ 감소시킨다",
		specialName: "화이트 아웃",
		captain: "받는 데미지를 20％ 감소시킨다"
	},
	70: { // modified
		special: "받는 데미지를 3턴 동안 50％ 감소시킨다",
		specialName: "화이트 아웃",
		captain: "받는 데미지를 20％ 감소시킨다"
	},
	71: {
		special: "받는 데미지를 1턴 동안 50％ 감소시킨다",
		specialName: "매혹의 향수 댄스",
		captain: "턴 종료 후에 캐릭터의 회복x2배의 체력이 회복한다"
	},
	72: {
		special: "랜덤으로 슬롯을 바꾼다",
		specialName: "돌격! 초 카루가모 부대!",
		captain: "턴 종료 후에 캐릭터의 회복x3배의 체력이 회복한다"
	},
	73: {
		special: "랜덤으로 슬롯을 바꾼다",
		specialName: "돌격! 초 카루가모 부대!",
		captain: "턴 종료 후에 캐릭터의 회복x5배의 체력이 회복한다"
	},
	74: {
		special: "적 1명에게 캐릭터의 공격×25배의 QCK 데미지",
		specialName: "불주먹",
		captain: "QCK 캐릭터의 공격력이 2배가 된다"
	},
	75: {
		special: "적 전체에 캐릭터의 공격×15배의 QCK 데미지",
		specialName: "경화염",
		captain: "QCK 캐릭터의 공격력이 2.5배가 된다"
	},
	76: {
		special: "적 전체에 캐릭터의 공격×15배의 PSY 데미지",
		specialName: "패왕색 패기",
		captain: "PSY 캐릭터의 공격력이 2배가 된다"
	},
	77: {
		special: "적 전체에 캐릭터의 공격×15배의 PSY 데미지",
		specialName: "패왕색 패기",
		captain: "PSY 캐릭터의 공격력이 2.5배가 된다"
	},
    119: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	120: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	121: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	122: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	123: {
		special: "STR슬롯을 DEX슬롯으로 바꾼다",
		specialName: "힘 슬롯 체인지·기 슬롯"
	},
	124: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	125: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	126: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	127: {// modified
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	128: {
		special: "QCK슬롯을 DEX슬롯으로 바꾼다",
		specialName: "속 슬롯 체인지·기 슬롯"
	},
	129: {
		special: "INT슬롯을 PSY슬롯으로 바꾼다",
		specialName: "지 슬롯 체인지·심 슬롯"
	},
	130: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	131: {
		special: "RCV슬롯을 STR슬롯으로 바꾼다",
		specialName: "고기슬롯 체인지·힘 슬롯"
	},
	132: {
		special: "DEX슬롯을 QCK슬롯으로 바꾼다",
		specialName: "[기]슬롯 체인지·[속]"
	},
	133: {
		special: "QCK슬롯을 DEX슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[기]"
	},
	134: {
		special: "QCK슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[고기]"
	},
	135: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스파이럴"
	},
	136: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	137: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	138: {
		special: "DEX슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[기]슬롯 체인지·[고기]"
	},
	139: {
		special: "PSY슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[심]슬롯 체인지·[고기]"
	},
	140: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	141: { // modified
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	142: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	143: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	144: {
		special: "STR슬롯을 DEX슬롯으로 바꾼다",
		specialName: "[힘]슬롯 체인지·[기]"
	},
	145: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	146: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	147: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	148: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	149: {
		special: "QCK슬롯을 DEX슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[기]"
	},
	150: {
		special: "INT슬롯을 PSY슬롯으로 바꾼다",
		specialName: "[지]슬롯 체인지·[심]"
	},
	151: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	152: {
		special: "RCV슬롯을 STR슬롯으로 바꾼다",
		specialName: "[고기]슬롯 체인지·[힘]"
	},
	153: {
		special: "DEX슬롯을 QCK슬롯으로 바꾼다",
		specialName: "[기]슬롯 체인지·[속]"
	},
	154: {
		special: "QCK슬롯을 DEX슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[기]"
	},
	155: {
		special: "QCK슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[고기]"
	},
	156: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스파이럴"
	},
	157: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	158: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	159: {
		special: "DEX슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[기]슬롯 체인지·[고기]"
	},
	160: {
		special: "PSY슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[심]슬롯 체인지·[고기]"
	},
	161: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	162: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	163: {
		special: "DEX슬롯을 TND으로 바꾼다",
		specialName: "[기]슬롯 체인지·[TND]"
	},
	164: {
		special: "QCK슬롯을 TND으로 바꾼다",
		specialName: "[속]슬롯 체인지·[TND]"
	},
	165: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	166: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	167: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	168: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	169: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	170: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	171: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	172: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	173: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	174: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	175: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	176: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	177: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스파이럴"
	},
	178: {
		special: "적 1명에게 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	179: {
		special: "QCK슬롯을 STR슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[힘]"
	},
	180: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	181: {
		special: "STR슬롯을 QCK슬롯으로 바꾼다",
		specialName: "[힘]슬롯 체인지·[속]"
	},
	182: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	183: {
		special: "RCV슬롯을 INT슬롯으로 바꾼다",
		specialName: "[고기]슬롯 체인지·[지]"
	},
	184: {
		special: "QCK슬롯을 STR슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[힘]"
	},
	185: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	186: {
		special: "STR슬롯을 QCK슬롯으로 바꾼다",
		specialName: "[힘]슬롯 체인지·[속]"
	},
	187: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	188: {
		special: "RCV슬롯을 INT슬롯으로 바꾼다",
		specialName: "[고기]슬롯 체인지·[지]"
	},
	194: {
		special: "QCK슬롯을 STR슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[힘]",
		captain: "STR 캐릭터의 공격력이 1.5배가 된다"
	},
	195: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링",
		captain: "DEX 캐릭터의 회복력이 1.5배가 된다"
	},
	196: {
		special: "STR슬롯을 QCK슬롯으로 바꾼다",
		specialName: "[힘]슬롯 체인지·[속]",
		captain: "QCK 캐릭터의 공격력이 1.5배가 된다"
	},
	197: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링",
		captain: "PSY 캐릭터가 주는 데미지를 20％ 감소시킨다"
	},
	198: {
		special: "RCV슬롯을 INT슬롯으로 바꾼다",
		specialName: "[고기]슬롯 체인지·[지]",
		captain: "사격형 캐릭터의 공격력이 1.5배가 된다"
	},
	199: {
		special: "적 1명에게 캐릭터의 공격×15배의 STR 데미지",
		specialName: "노즈 팬시 캐논",
		captain: "STR 캐릭터의 공격력이 1.5배가 된다"
	},
	200: {
		special: "적 1명에게 캐릭터의 공격×20배의 STR 데미지",
		specialName: "브리즈 브레스 봄",
		captain: "STR 캐릭터의 공격력이 2배가 된다"
	},
	201: {
		captain: "격투형 캐릭터의 체력이 1.5배가 된다"
	},
	202: {
		special: "RCV슬롯을 QCK슬롯으로 바꾼다",
		specialName: "1만 킬로 길로틴",
		captain: "격투형 캐릭터의 체력이 2배가 된다"
	},
	203: {
		captain: "INT 캐릭터가 주는 데미지를 10％ 감소시킨다"
	},
	204: {
		special: "적 전체의 공격을 1턴 지연시킨다",
		specialName: "특대 캔들 서비스 세트",
		captain: "INT 캐릭터가 주는 데미지를 10％ 감소시킨다"
	},
	205: {
		captain: "DEX 캐릭터의 체력과 회복력이 1.2배가 된다"
	},
	206: {
		special: "적 전체의 방어력을 2턴 동안 반으로 줄인다",
		specialName: "컬러즈 트랩 온화함의 초록",
		captain: "DEX 캐릭터의 체력과 회복력이 1.2배가 된다"
	},
	207: {
		captain: "PSY 캐릭터가 주는 데미지를 10％ 감소시킨다"
	},
	208: {
		special: "RCV슬롯을 PSY으로 바꾼다",
		specialName: "폭격백조 아라베스크",
		captain: "PSY 캐릭터가 주는 데미지를 20％ 감소시킨다"
	},
	209: { // modified
		special: "1턴 동안 [INT]의 공격이 1.5배가 된다",
		specialName: "16송이의 꽃",
		captain: "[INT] 캐릭터의 회복력이 1.5배가 된다"
	},
	210: {
		special: "1턴 동안 INT의 공격이 2배가 된다",
		specialName: "시엔 플루르",
		captain: "INT 캐릭터의 회복력이 2배가 된다"
	},
	211: {
		captain: "타격 타입 캐릭터의 공격력을 1.2배로 만든다."
	},
	212: {
		special: "적 1명에게 캐릭터의 공격X5배의 QCK 데미지",
		specialName: "열혈 배트",
		captain: "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	213: {
		special: "적 전체에 캐릭터의 공격×20배의 [STR] 데미지",
		specialName: "탄식의 박치기",
		captain: "체력이 일정수준(50%) 이상이면 공격을 받아도 쓰러지지 않는다."
	},
	214: {
		special: "적 전체에 캐릭터의 공격×20배의 [STR] 데미지",
		specialName: "탄식의 박치기",
		captain: "체력이 일정수준(50%) 이상이면 공격을 받아도 쓰러지지 않는다."
	},
	215: {
		special: "적 전체를 중독",
		specialName: "갱 포트리스",
		captain: "타격 유형 캐릭터의 체력을 1.5배로 만든다."
	},
	216: {
		special: "3턴간 받는 데미지를 50% 감소시킨다",
		specialName: "고무고무 풍선",
		captain: "받는 데미지를 20% 감소시킨다"
	},
	217: { // modified
		special: "적 전체에 캐릭터의 공격×15배의 [STR] 데미지",
		specialName: "고무고무 거인의 라이플",
		captain: "3연속 PERFECT 시 이후의 캐릭터 공격력이 3.5배"
	},
	218: {
		special: "STR의 공격을 1턴간 무효화한다",
		specialName: "늑대 칼부림",
		captain: "공격 시작 전에 체력이 가득 차 있으면 받는 데미지가 큰 폭(80%)으로 감소"
	},
	219: {
		special: "적 1명에게 캐릭터의 공격×25배의 DEX 데미지",
		specialName: "사자의 노래",
		captain: "공격 시작 전에 체력이 가득 차 있으면 받는 데미지가 큰 폭(80%)으로 감소"
	},
	220: {
		special: "PSY 슬롯을 INT 슬롯으로 변환한다",
		specialName: "파인 템포",
		captain: "INT 캐릭터의 공격을 2배로 만든다"
	},
	221: {
		special: "PSY 슬롯을 INT 슬롯으로 변환한다",
		specialName: "행복 펀치",
		captain: "INT 캐릭터의 공격을 2.5배로 만든다"
	},
	222: {
		special: "1턴간 PSY의 공격이 1.5배가 된다",
		specialName: "우솝 해머",
		captain: "PSY 캐릭터의 공격을 1.2배로 만든다",
	},
	223: {
		special: "1턴간 PSY의 공격이 2배가 된다",
		specialName: "임팩트",
		captain: "PSY 캐릭터의 공격력이 1.5배가 된다"
	},
	224: {
		special: "적 1명에게 캐릭터의 공격×15배의 QCK 데미지",
		specialName: "양고기 샷",
		captain: "2연속 PERFECT 시 이후의 캐릭터 공격력이 2배"
	},
	225: {
		special: "적 1명에게 캐릭터의 공격×20배의 QCK 데미지",
		specialName: "송아지 샷",
		captain: "2연속 PERFECT 시 이후의 캐릭터 공격력이 2.5배"
	},
	226: {
		special: "적 전체의 HP를 30% 줄인다",
		specialName: "흑도·선박 베기",
		captain: "참격형 캐릭터의 공격력이 ×2배가 된다."
	},
    227: { // modified
        special: "적 전체의 HP를 30% 줄인다",
        specialName: "흑도·선박 베기",
        captain: "참격형 캐릭터의 공격력이 2.5배가 된다.",
        limit: [
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 1: [RCV],[TND]도 [유리] 슬롯으로 만든다." },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "새로운 선장 효과 습득: 참격 캐릭터의 공격력을 2.5배로 만들고 체력을 1.3배로 만든다." },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]
    },
  228: {
		special: "봉인 상태를 2턴 회복",
		specialName: "탈옥의 도끼손",
		captain: "참격 유형 캐릭터의 체력을 1.5배로 만든다."
	},
	229: {
		special: "[INT] 슬롯을 [PSY] 슬롯으로 변환",
		specialName: "배신의 춤",
		captain: "받는 데미지를 10％ 감소시킨다"
	},
	230: {
		special: "적 1명에게 200의 고정 데미지",
		specialName: "W 하이퍼 스트레이트",
		captain: "[STR] 캐릭터의 공격을 1.5배로 만든다."
	},
	231: {
		special: "일당 전원의 슬롯을 고정한다 (1턴)",
		specialName: "겹날개 감옥",
		captain: "[QCK] 캐릭터의 공격을 2배로 만든다."
	},
	232: {
		special: "일당 전원의 슬롯을 고정한다 (1턴)",
		specialName: "겹날개 감옥",
		captain: "[QCK] 캐릭터의 공격을 2배로 만든다."
	},
	233: {
		captain: "[PSY] 캐릭터의 체력을 1.5배로 만든다."
	},
	234: {
		special: "모든 적에게 캐릭터 공격력에 5배의 [PSY] 데미지",
		specialName: "이가람 파파",
		captain: "[PSY] 캐릭터의 체력을 2배로 만든다."
	},
	235: {
		captain: "격투 타입 캐릭터의 공격력을 1.2배로 만든다."
	},
	236: {
		special: "적 1명에게 캐릭터 공격력에 20배의 [STR] 데미지",
		specialName: "괴력 너클",
		captain: "격투 타입 캐릭터의 공격력을 1.2배로 만든다."
	},
	237: {
		special: "QCK슬롯을 STR슬롯으로 바꾼다.",
		specialName: "[속]슬롯 체인지·[힘]"
	},
	238: {
		special: "TND 슬롯을 DEX슬롯으로 바꾼다.",
		specialName: "[TND]슬롯 체인지·[기]"
	},
	239: {
		special: "TND 슬롯을 QCK슬롯으로 바꾼다.",
		specialName: "[TND]슬롯 체인지·[속]"
	},
	240: {
		special: "STR 슬롯을 PSY슬롯으로 바꾼다.",
		specialName: "[힘]슬롯 체인지·[심]"
	},
	241: {
		special: "QCK슬롯을 INT슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[지]"
	},
	242: {
		special: "DEX슬롯을 STR슬롯으로 바꾼다",
		specialName: "[기]슬롯 체인지·[힘]"
	},
	243: {
		special: "TND 슬롯을 DEX슬롯으로 바꾼다.",
		specialName: "[TND]슬롯 체인지·[기]"
	},
	244: {
		special: "TND 슬롯을 QCK슬롯으로 바꾼다.",
		specialName: "[TND]슬롯 체인지·[속]"
	},
	245: {
		special: "STR 슬롯을 PSY슬롯으로 바꾼다.",
		specialName: "[힘]슬롯 체인지·[심]"
	},
	246: {
		special: "QCK슬롯을 INT슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[지]"
	},
	247: {
		special: "체력을 1224 회복하며 상당히 귀엽다.",
		specialName: "큔 스파크",
		captain: "받는 데미지를 10% 줄인다"
	},
	248: {
		special: "적 1명에게 랜덤으로 힘 속성 데미지",
		specialName: "폭주",
		specialNotes: "랜덤 데미지 : 2,000 ~ 200,000",
		captain: "STR 캐릭터의 체력을 대폭(60%) 줄이고 공격력이 2.5배가 된다."
	},
	249: { // modified
		special: "적 1명에게 랜덤으로 [STR] 데미지",
		specialName: "폭주",
		specialNotes: "랜덤 데미지 : 2,000 ~ 200,000",
		captain: "[STR] 캐릭터의 체력을 대폭 줄이고 공격력 3배가 된다."
	},
	250: {
		special: "체력을 모두 회복한다",
		specialName: "전생의 창염",
		captain: "공격 시작 전에 체력이 가득 차 있으면 PSY 캐릭터의 공격력이 3배가 된다."
	},
	251: {
		special: "체력을 모두 회복한다",
		specialName: "전생의 창염",
		captain: "격 시작 전에 체력이 가득 차 있으면 PSY 캐릭터의 공격력이 3배가 된다."
	},
	252: {
		special: "DEX의 공격이 무효가 된다 (1턴)",
		specialName: "브릴리언트 펑크",
		captain: "QCK 캐릭터의 공격력과 체력이 2배가 된다"
	},
	253: {
		special: "DEX의 공격이 무효가 된다 (1턴)",
		specialName: "브릴리언트 펑크",
		captain: "QCK 캐릭터의 공격력과 체력이 2배가 된다"
	},
	254: {
		special: "적 전체에게 고정 데미지 5000",
		specialName: "로즈 론도",
		specialNotes: "#{fixed}",
		captain: "INT 캐릭터의 공격력과 체력이 2배가 된다"
	},
	255: {
		special: "적 전체에게 고정 데미지 5000",
		specialName: "로즈 론도",
		specialNotes: "#{fixed}",
		captain: "INT 캐릭터의 공격력과 체력이 2배가 된다"
	},
	256: {
		special: "STR, QCK슬롯이DEX 슬롯으로 바뀐다.",
		specialName: "화려한 쌍권총",
		captain: "DEX 캐릭터의 공격력과 회복력이 2배가 된다"
	},
	257: {
		special: "STR, QCK슬롯이DEX 슬롯으로 바뀐다.",
		specialName: "화려한 쌍권총",
		captain: "DEX 캐릭터의 공격력과 회복력이 2배가 된다",
        limit: [
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 90" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 40" },
            { "description": "선원효과 추가 1: [DEX] 캐릭터의 공격력,체력,회복력을 50 상승시킨다." },
            { "description": "공격력 상승 : 50" },
            { "description": "체력 상승 : 150" },
            { "description": "새로운 선장 효과 습득: DEX 캐릭터의 공격력과 회복력을 2배로 만들고, 사격 캐릭터의 공격력을 1.2배로 만든다." },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "공격력 상승 : 60" },
            { "description": "선원효과 추가 2: 사격 캐릭터의 공격력을 50 상승시킨다." },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        limitnotes: "선장효과는 중첩됩니다. 그래서 [DEX] 사격 캐릭터는 공격력이 2.4배가 됩니다.",
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ]
    },
    258: {
		special: "DEX, QCK 슬롯이STR 슬롯으로 바뀐다.",
		specialName: "포켓 대망치",
		captain: "STR 캐릭터의 공격력과 회복력이 2배가 된다"
	},
	259: {
		special: "DEX, QCK 슬롯이STR 슬롯으로 바뀐다.",
		specialName: "포켓 대망치",
		captain: "STR 캐릭터의 공격력과 회복력이 2배가 된다",
	},
	260: {
		special: "적 전체의 HP를 30% 줄인다",
		specialName: "해진",
		captain: "체력이 얼마 남지 않게 되면(30%이하), 일당의 공격력이 3배가 된다"
	},
	261: {
		special: "적 전체의 HP를 30% 줄인다",
		specialName: "해진",
		captain: "체력이 얼마 남지 않게 되면, 일당의 공격력이 3배가 된다",
	},
	262: {
		captain: "턴 종료 후 캐릭터의 회복력 x2배의 체력을 회복 시킨다."
	},
	263: {
		special: "2턴동안 슬롯의 영향을 1.5배 증폭시킨다.",
		specialName: "체",
		captain: "격투타입 캐릭터의 공격력을 2배로 만든다."
	},
	264: {
		captain: "[INT] 캐릭터에게 받는 데미지를 30% 감소한다."
	},
	265: {
		special: "봉인 상태를 3턴 감소시킨다.",
		specialName: "단련 쿠크리",
		captain: "참격캐릭터의 체력과 공격력을 1.5배로 만든다."
	},
	267: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔",
		captain: "일당의 공격력이 1.5배가 된다"
	},
	268: { // modified
		special: "받는 데미지를 3턴 동안 50% 감소시킨다",
		specialName: "화이트 아웃",
		captain: "받는 데미지가 25% 감소한다."
	},
	269: {
		pecial: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	270: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	271: {
		special: "STR슬롯을 DEX슬롯으로 바꾼다",
		specialName: "힘 슬롯 체인지·기 슬롯"
	},
	272: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	273: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트"
	},
	274: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	275: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	276: {
		special: "QCK슬롯을 DEX슬롯으로 바꾼다",
		specialName: "속 슬롯 체인지·기 슬롯"
	},
	277: {
		special: "INT슬롯을 PSY슬롯으로 바꾼다",
		specialName: "지 슬롯 체인지·심 슬롯"
	},
	278: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 슬래쉬"
	},
	279: {
		special: "RCV슬롯을 STR슬롯으로 바꾼다",
		specialName: "고기슬롯 체인지·힘 슬롯"
	},
	280: {
		special: "DEX슬롯을 QCK슬롯으로 바꾼다",
		specialName: "[기]]슬롯 체인지·[속]"
	},
	281: {
		special: "QCK슬롯을 DEX슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[기]"
	},
	282: {
		special: "QCK슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[속]슬롯 체인지·[고기]"
	},
	283: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스파이럴"
	},
	284: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	285: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	286: {
		special: "DEX슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[기]슬롯 체인지·[고기]"
	},
	287: {
		special: "PSY슬롯을 RCV슬롯으로 바꾼다",
		specialName: "[심]슬롯 체인지·[고기]"
	},
	288: {
		special: "적 전체에 공격×5배의 캐릭터 속성 데미지",
		specialName: "하이퍼 샷"
	},
	289: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	290: {
		special: "적 1명에게 캐릭터 공격력의 25배의 INT 데미지",
		specialName: "심판의 폭탄",
		captain: "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	291: {
		special: "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다.",
		specialName: "고기 슬롯 스톰",
		captain: "[INT] 캐릭터에게 받는 데미지를 50% 감소한다."
	},
	292: {
		special: "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다.",
		specialName: "고기 슬롯 스톰",
		captain: "[PSY] 캐릭터에게 받는 데미지를 50% 감소한다."
	},
	293: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드",
		captain: "[QCK] 캐릭터의 체력을 2배로 만든다."
	},
	294: {
		special: "적 1명에게 공격×10배의 캐릭터 속성 데미지",
		specialName: "하이퍼 스트레이트",
		captain: "[STR] 캐릭터의 체력을 2배로 만든다."
	},
	295: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔",
		captain: "[DEX] 캐릭터의 체력을 2배로 만든다."
	},
	296: {
		special: "체력 2,000 회복, 랜덤으로 모든 슬롯을 변경시킨다.",
		specialName: "클렌징 워시",
		captain: "사격타입 캐릭터의 공격력을 2배로 만든다."
	},
	297: {
		special: "체력 2,000 회복, 랜덤으로 모든 슬롯을 변경시킨다.",
		specialName: "클렌징 워시",
		captain: "사격타입 캐릭터의 공격력을 2배로 만든다."
	},
	298: {
		special: "적 한명에게 캐릭터 공격력에 25배의 [PSY] 데미지",
		specialName: "문워크",
		captain: "[PSY]  캐릭터의 체력을 2배로 만든다."
	},
	299: {
		special: "적 전체의 HP를 10% 줄인다",
		specialName: "8도류 오니구모",
		captain: "[DEX] 캐릭터의 공격력을 2배로 만든다."
	},
	305: {
		special: "모든 슬롯을 [PSY] 혹은 [RCV]로 변환시킨다.",
		specialName: "주먹 유성우",
		captain: "[PSY] 캐릭터의 체력과 공격력을 1.5배로 만든다."
	},
	306: {
		special: "모든 슬롯을 [PSY] 혹은 [RCV]로 변환시킨다.",
		specialName: "주먹 유성우",
		captain: "[PSY] 캐릭터의 체력과 공격력을 2배로 만든다."
	},
	307: {
		special: "[DEX] 이외의 슬롯을 [DEX], [RCV],[TND] 으로 변환한다.",
		specialName: "ROOM - 샘블즈",
		captain: "DEX 캐릭터의 공격력을 2.5배로 만든다."
	},
	308: {
		special: "[DEX] 이외의 슬롯을 [DEX], [RCV],[TND] 으로 변환한다.",
		specialName: "ROOM - 샘블즈",
		captain: "DEX 캐릭터의 공격력을 2.5배로 만든다."
	},
	309: {
		special: "적 전체의 HP를 10% 줄이고, 방어력을 반으로 줄인다 (3턴)",
		specialName: "항마의 상",
		captain: "일당의 회복력을 큰 폭으로 낮추고(90%감소), 받는 피해를 40% 줄인다."
	},
	310: {
		special: "적 전체의 HP를 10% 줄이고, 방어력을 반으로 줄인다 (3턴)",
		specialName: "항마의 상",
		captain: "일당의 회복력을 큰 폭으로 낮추고(90%감소), 받는 피해를 40% 줄인다.",
	},
	311: {
		special: "HP가 1이 되는 대신 적 1명에게 슈퍼 데미지 (공격력 x100)",
		specialName: "살육무인",
		captain: "3연속으로 GOOD 이전 판정을 받으면 이후 캐릭터의 공격력이 3.5배",
		sailor: "When HP is below x%, boosts ATK of Cerebral Characters by 50"
	},
	312: {
		special: "HP가 1이 되는 대신 적 1명에게 슈퍼 데미지 (공격력 x100)",
		specialName: "살육무인",
		captain: "3연속으로 GOOD 이전 판정을 받으면 이후 캐릭터의 공격력이 3.5배",
		sailor: "When HP is below x%, boosts ATK of Cerebral Characters by 50"
	},
	313: {
		special: "타격형 캐릭터의 공격이1.5배 (1턴), 1명에게 PSY 데미지(25배) ",
		specialName: "인과응보",
		captain: "타격 타입 캐릭터의 공격력을 2배, 체력을 1.5배로 만든다."
	},
	314: {
		special: "타격형 캐릭터의 공격이1.5배 (1턴), 1명에게 PSY 데미지(25배) ",
		specialName: "인과응보",
		captain: "타격 타입 캐릭터의 공격력을 2배, 체력을 1.5배로 만든다.",
	},
	315: {
		special: "슬롯 [PSY],[INT] 을 [STR] 으로, [DEX],[QCK]을 [EMPTY]으로 변환",
		specialName: "아이 아이, 캡틴!",
		captain: "격투 타입 캐릭터의 능력치를 1.5배로 만든다.",
		sailor: "Reduces numbess for 2 turns for himself"
	},
	316: {
		special: "슬롯 [PSY],[INT] 을 [STR] 으로, [DEX],[QCK]을 [EMPTY]으로 변환",
		specialName: "아이 아이, 캡틴!",
		captain: "격투 타입 캐릭터의 능력치를 1.5배로 만든다.",
		sailor: "Reduces numbess for 2 turns for himself"
	},
	317: {
		special: "모든 슬롯을 [DEX] 혹은 [STR]로 변환시킨다., 모든 적에게 랜덤으로 [DEX] 데미지",
		specialName: "미인 비서의 직업",
		specialNotes: "랜덤 데미지 1 ~ 15,000",
		captain: "턴 종료후 HP 500 회복, 적으로부터 받는 데미지 10% 감소",
		sailor: "Boosts HP of Powerhouse Units by 100"
	},
	318: {
		special: "모든 슬롯을 [DEX] 혹은 [STR]로 변환시킨다., 모든 적에게 랜덤으로 [DEX] 데미지",
		specialName: "미인 비서의 직업",
		specialNotes: "랜덤 데미지 1 ~ 15,000",
		captain: "턴 종료후 HP 1,000 회복, 적으로부터 받는 데미지 15% 감소"
	},
	319: {
		special: "일당 전원의 슬롯을 고정한다 (1턴)",
		specialName: "벌칙, 외줄낚시",
		captain: "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	320: {
		special: "일당 전원의 슬롯을 고정한다 (1턴)",
		specialName: "벌칙, 외줄낚시",
		captain: "타격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	321: {
		special: "적 1명에게 캐릭터 공격력에 25배의 [QCK] 데미지.",
		specialName: "과묵한 연격",
		captain: "[QCK] 캐릭터의 공격력을 2배로 만든다."
	},
	322: {
		special: "적 1명에게 캐릭터 공격력에 25배의 [QCK] 데미지.",
		specialName: "과묵한 연격",
		captain: "[QCK] 캐릭터의 공격력을 2배로 만든다."
	},
	323: {
		special: "2턴동안 슬롯의 영향을 1.5배 증폭시킨다.",
		specialName: "산 바람",
		captain: "[QCK] 캐릭터의 체력과 회복력을 1.5배로 만든다."
	},
	324: {
		special: "2턴동안 슬롯의 영향을 1.5배 증폭시킨다.",
		specialName: "산 바람",
		captain: "[QCK] 캐릭터의 체력과 회복력을 1.5배로 만든다."
	},
	325: {
		special: "[TND] 슬롯을 [RCV] 슬롯으로, [RCV] 슬롯을 [QCK] 슬롯으로 변환",
		specialName: "작열하는 장인 정신"
	},
	326: {
		special: "모든 슬롯을 비우고, 적 1명에게 캐릭터 공격력에 25배의 [STR] 데미지.",
		specialName: "우걱우걱 ‘벨로 대포’",
		captain: "턴 종료 후 캐릭터 회복력에 10배의 체력을 회복시킨다."
	},
	327: {
		special: "모든 슬롯을 비우고, 적 1명에게 캐릭터 공격력에 25배의 [STR] 데미지.",
		specialName: "우걱우걱 ‘벨로 대포’",
		captain: "턴 종료 후 캐릭터 회복력에 10배의 체력을 회복시킨다."
	},
	328: {
		special: "적 전체에게 캐릭터 공격력에 20배의 [QCK] 데미지.",
		specialName: "바이올린 돌격",
		captain: "전투가 시작될때 체력이 30% 이하면 일당의 회복력이 5배가 된다."
	},
	329: {
		special: "적 전체에게 캐릭터 공격력에 20배의 [QCK] 데미지.",
		specialName: "바이올린 돌격",
		captain: "전투가 시작될때 체력이 30% 이하면 일당의 회복력이 5배가 된다."
	},
	332: {
		special: "[STR]슬롯을 [RCV] 슬롯으로, [RCV] 슬롯을 [DEX] 슬롯으로 변환.",
		specialName: "눈 가르기 풀",
		captain: "타격 타입 캐릭터의 체력, 회복력, 공격력을 1.2배로 만든다."
	},
	333: {
		special: "체력을 랜덤량 회복한다.",
		specialName: "닥터 스톱",
		captain: "[PSY] 캐릭터의 회복력과 공격력을 1.5배로 만든다."
	},
	334: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	335: {
		special: "캐릭터의 회복×5배의 체력을 회복한다",
		specialName: "라이트 힐링"
	},
	336: {
		special: "슬롯을 슈퍼! 자유롭게 2번 바꾸자!",
		specialName: "프랑키 켄타우로스",
		captain: "전투 시작시 체력이 50% 이상이면 받는 데미지 10% 감소시킨다. 또한 [PSY] 캐릭터 공격력을 2배로 만들고 다른 속성 캐릭터의 공격력을 20% 감소 시킨다."
	},
	337: {
		special: "슬롯을 슈퍼! 자유롭게 2번 바꾸자!",
		specialName: "프랑키 켄타우로스",
		captain: "전투 시작시 체력이 50% 이상이면 받는 데미지 10% 감소시킨다. 또한 [PSY] 캐릭터 공격력을 2.5배로 만들고 다른 속성 캐릭터의 공격력을 20% 감소 시킨다."
	},
	338: {
		special: "[QCK] 슬롯을 [PSY] 슬롯으로 변환시킨다.",
		specialName: "삼각 머리"
	},
	339: {
		special: "[INT] 슬롯을 [TND] 슬롯으로 변환시킨다.",
		specialName: "사각 머리"
	},
	340: {
		special: "모든 슬롯을 [STR] 혹은 [QCK]로 변환시킨다., 모든 적에게 랜덤으로 [STR] 데미지.",
		specialName: "크라켄 촉수 크러쉬",
		specialNotes: "랜덤 데미지 1 ~ 15,000",
		captain: "타격 타입의 캐릭터 공격력을 2배로 만든다."
	},
	341: {
		special: "모든 슬롯을 [STR] 혹은 [QCK]로 변환시킨다., 모든 적에게 랜덤으로 [STR] 데미지.",
		specialName: "크라켄 촉수 크러쉬",
		specialNotes: "랜덤 데미지 1 ~ 15,000",
		captain: "타격 타입의 캐릭터 공격력을 2배로 만든다."
	},
	352: {
		special: "2턴 동안 사격 타입의 캐릭터 공격력을 1.75배로 만든다.",
		specialName: "스매쉬 버스터",
		captain: "사격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	353: {// modified
		special: "2턴 동안 사격형 캐릭터의 공격력이 1.75배가 된다",
		specialName: "스매쉬 버스터",
		captain: "사격형 캐릭터의 공격력이 2.5배, 체력이 1.2배, 턴 종료 시 체력을 300 회복한다",
        sailor: {
            "base": "None",
            "level1": "사격형 캐릭터의 기본 능력치가 20 상승한다",
        },
        limit: [
            { "description": "공격력 상승 : 10" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 30" },
            { "description": "선원효과 추가 1: B사격 캐릭터의 공격력, 체력, 회복력을 20 상승시킨다." },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "회복력 상승 : 40" },
            { "description": "새로운 선장 효과 습득: 사격 캐릭터의 공격력을 2.5배 상승시키고, 체력을 1.2배 상승시킨다. 그리고 매턴 체력 300을 회복한다." },
            { "description": "체력 상승 : 50" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ],
    },
    354: {
		special: "‘봉인’과 ‘선장 효과 무효’ 상태를 3턴 줄인다.",
		specialName: "쌍검 난무"
	},
	355: {
		special: "‘봉인’과 ‘선장 효과 무효’ 상태를 3턴 줄인다.",
		specialName: "쌍검 난무"
	},
	356: {
		special: "자신의 슬롯을 [STR]으로 변경하고 적 전체에 공격X7배의 데미지",
		specialNotes: "인게임 설명이 잘못되어있음, 이 필살기는 7배의 데미지가 아님.",
		specialName: "강철 자성체의 팔",
		captain: "타격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	357: {
		special: "자신의 슬롯을 [STR]으로 변경하고 적 전체에 공격X7배의 데미지",
		specialNotes: "인게임 설명이 잘못되어있음, 이 필살기는 7배의 데미지가 아님.",
		specialName: "강철 자성체의 팔",
		captain: "타격 타입 캐릭터의 공격력을 2.5배로 만든다.",
	},
	358: {
		special: "[TND],[RCV]슬롯을 [DEX]슬롯으로 변환 적 전체에 랜덤의 [DEX]데미지.",
		specialName: "스크래치 바디",
		specialNotes: "랜덤 데미지 범위는 5,000 ~ 20,000 사이",
		captain: "전투가 시작되기전 체력이 가득 차 있으면 [DEX] 캐릭터의 공격력이 2.5배가 된다."
		
	},
	359: {
		special: "[TND],[RCV]슬롯을 [DEX]슬롯으로 변환 적 전체에 랜덤의 [DEX]데미지.",
		specialName: "스크래치 바디",
		specialNotes: "랜덤 데미지 범위는 5,000 ~ 20,000 사이",
		captain: "전투가 시작되기전 체력이 가득 차 있으면 [DEX] 캐릭터의 공격력이 3배가 된다.",
        limit: [
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 50" },
            { "description": "회복력 상승 : 20" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "체력 상승 : 80" },
            { "description": "회복력 상승 : 40" },
            { "description": "공격력 상승 : 100" },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "선원효과 추가 1: [DEX]캐릭터의 공격력, 체력, 회복력이 30 상승한다." },
            { "description": "체력 상승 : 150" },
            { "description": "선원효과 추가 2: 사격 캐릭터의 공격력을 50 상승시킨다." },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "새로운 선장 효과 습득: 전투 시작시 체력이 가득 차 있으면 [DEX]캐릭터의 공격력이 3배 상승하고, 그렇지 않으면 2배 상승한다." },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
                    "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    360: {
      special: "적 전체에 공격력 X10배의 [INT] 데미지,체력이 50% 이상 일때 1턴 동안 공격을 받아도 쓰러지지 않는다.",
		    specialName: "동물 고대 종의 힘",
		    captain: "전투가 시작될때 체력이 30%이하면 [INT]캐릭터의 공격력을 3배로 만든다.",
        sailor: "강인 캐릭터의 체력을 100 상승시킨다."
    },
    361: {
        special: "적 전체에 공격력 X10배의 [INT] 데미지,체력이 50% 이상 일때 1턴 동안 공격을 받아도 쓰러지지 않는다.",
  		    specialName: "동물 고대 종의 힘",
  		    captain: "전투가 시작될때 체력이 30%이하면 [INT]캐릭터의 공격력을 3배로 만든다.",
          sailor: "강인 캐릭터의 체력을 100 상승시킨다."
    },
    362: {
        sspecial: "2턴 동안 [RCV] 사용 시 회복량이 1번째에 1.5배, 2연속 2배, 3연속이후 2.5배 가 된다.",
		specialName: "대식가",
		captain: "[PSY] 캐릭터의 공격력과 회복을 2배로 만든다."
    },
    363: {
        special: "2턴 동안 [RCV] 사용 시 회복량이 1번째에 1.5배, 2연속 2배, 3연속이후 2.5배 가 된다.",
		specialName: "대식가",
		captain: "[PSY] 캐릭터의 공격력과 회복을 2배로 만든다."
    },
    364: {
		special: "[STR],[DEX] 슬롯을 [QCK]슬롯으로 바꾼다.",
		specialName: "갱 포트리스",
		captain: "[QCK] 캐릭터의 공격력과 회복을 2배로 만든다.",
        sailor: "모든 캐릭터의 회복력을 10 상승시킨다."
    },
    365: {
		special: "[STR],[DEX] 슬롯을 [QCK]슬롯으로 바꾼다.",
		specialName: "갱 포트리스",
		captain: "[QCK] 캐릭터의 공격력과 회복을 2배로 만든다.",
        sailor: "모든 캐릭터의 회복력을 10 상승시킨다."
    },
    366: { // modified
        special: "적 전체에 캐릭터 공격력x20배의 [INT] 데미지, 봉쇄 상태를 5턴 회복",
        specialName: "명왕의 패기",
        captain: "체인 계수 증가량 4배로 상승"
    },
    367: {
        special: "적 전체에 공격x20배의 INT 데미지, 봉쇄 상태를 5턴 회복",
        specialName: "명왕의 패기",
        captain: "체인 계수 증가량 4배로 상승"
    },
  368: {
		special: "1턴 동안 [DEX] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [기]"
	},
	369: {
		special: "1턴 동안 [STR] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [힘]"
	},
	370: {
		special: "1턴 동안 [QCK] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [속]"
	},
	371: {
		special: "1턴 동안 [INT] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [지]"
	},
	372: {
		special: "1턴 동안 [PSY] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [심]"
	},
  373: {
		special: "1턴 동안 [DEX] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [기]",
		captain: "참격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	374: {
		special: "1턴 동안 [STR] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [힘]",
		captain: "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	375: {
		special: "1턴 동안 [QCK] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [속]",
		captain: "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	376: {
		special: "1턴 동안 [INT] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [지]",
		captain: "격투 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	377: {
		special: "1턴 동안 [PSY] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
		specialName: "크리스탈 실드 [심]",
		captain: "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	378: {
		special: "캐릭터 회복력의 3배 만큼 체력을 회복시킨다.",
		specialName: "빠른 회복",
		captain: "모든 캐릭터의 회복력을 1.5배로 만든다."
	},
	379: {
		special: "‘중독’ 상태를 제거한다.",
		specialName: "회복의 듀공 쿵푸 주먹"
	},
	380: {
		special: "‘중독’ 상태를 제거한다.",
		specialName: "회복의 듀공 쿵푸 주먹",
		captain: "[STR] 캐릭터의 회복력과 공격력을 1.5배로 만든다."
	},
	381: {
		special: "받는 데미지를 1턴 동안 20％ 감소시킨다",
		specialName: "아이언 실드"
	},
	382: {
		special: "적 전체의 방어력을 1턴 동안 반으로 줄인다",
		specialName: "실드 크래셔"
	},
	383: {
		special: "적 1명을 강력하게 중독시킨다.",
		specialNotes: "맹독은 턴 종료시 캐릭터 공격력에 5배의 고정데미지를 입힌다.",
		specialName: "독침",
		captain: "받는 데미지를 10% 감소 시키고 [INT] 캐릭터의 공격력을 2배로 만든다."
	},
	384: {
		special: "적 1명을 강력하게 중독시킨다.",
		specialNotes: "맹독은 턴 종료시 캐릭터 공격력에 5배의 고정데미지를 입힌다.",
		specialName: "독침",
		captain: "받는 데미지를 10% 감소 시키고 [INT] 캐릭터의 공격력을 2배로 만든다."
	},
	385: { // modified
		special: "받는 데미지 반감+격투형 캐릭터의 공격력이 1.25배가 된다 (1턴)",
		specialName: "광기의 마리오 수술",
		captain: "[INT] 캐릭터의 공격력이 2배가 된다"
	},
	386: {
		special: "1턴 동안 받는 데미지를 50% 감소 시키고, 타격 타입 캐릭터의 공격력을 1.25배로 만든다.",
		specialName: "좀비 인형 수술",
		captain: "[INT] 캐릭터의 공격을 2배로 만든다."
	},
	387: {
		special: "모든 슬롯이 [PSY][INT]로 바뀌며 적 전체에 랜덤으로 [PSY] 데미지를 준다",
		specialName: "사각접시도",
		specialNotes: "랜덤 데미지 1~10,000",
		captain: "[PSY] 캐릭터의 회복력이 1.5배가 된다"
	},
	388: {
		special: "모든 슬롯이 [PSY][INT]로 바뀌며 적 전체에 랜덤으로 [PSY] 데미지를 준다",
		specialName: "사각접시도",
		specialNotes: "랜덤 데미지 1~10,000",
		captain: "[PSY] 캐릭터의 회복력이 1.5배가 된다"
	},
	389: {
		special: "자신의 슬롯을 [QCK] 으로 바꾸고 다른 슬롯을 [RCV], [STR], [DEX] 또는 [QCK] 슬롯으로 변환 시킨다.",
		specialName: "헬 윙크",
		captain: "[DEX] -> [INT] -> [QCK] 캐릭터 순서로 GOOD 이상 연계하면 공격력이 2.25배로 증가한다."
	},
	390: {
		special: "자신의 슬롯을 [QCK] 으로 바꾸고 다른 슬롯을 [RCV], [STR], [DEX] 또는 [QCK] 슬롯으로 변환 시킨다.",
		specialName: "헬 윙크",
		captain: "[DEX] -> [INT] -> [QCK] 캐릭터 순서로 GOOD 이상 연계하면 공격력이 2.75배로 증가한다."
	},
	391: {
		special: "1턴 동안 받는 데미지를 90% 감소 시키고, 모든 적의 방어력을 80% 감소시킨다 그리고 턴이 종료되면 1,000의 고정데미지를 입힌다.",
		specialName: "네가티브 할로우",
		captain: "[DEX] 캐릭터의 회복력을 1.5배로 만든다"
	},
	392: {
		special: "1턴 동안 받는 데미지를 90% 감소 시키고, 모든 적의 방어력을 80% 감소시킨다 그리고 턴이 종료되면 1,000의 고정데미지를 입힌다.",
		specialName: "네가티브 할로우",
		captain: "[DEX] 캐릭터의 회복력을 2배로 만든다"
	},
	393: {
		special: "적 한명에게 캐릭터 공격력에 35배의 [STR] 데미지.",
		specialName: "쿠마시 너클"
	},
	394: {
		special: "모든 적에게 500의 고정 데미지",
		specialName: "‘사랑’이라 불리는 토네이도"
	},
	395: {
		special: "주위 캐릭터의 슬롯을 비우고, 1턴 동안 슬롯의 영향을 1.25배 증폭시킨다.",
		specialName: "두더지 바나나",
		captain: "[QCK] 캐릭터의 회복력과 공격력을 1.2배로 만든다."
	},
	396: {
		special: "주위 캐릭터의 슬롯을 비우고, 1턴 동안 슬롯의 영향을 1.25배 증폭시킨다.",
		specialName: "두더지 바나나",
		captain: "[QCK] 캐릭터의 회복력과 공격력을 1.2배로 만든다."
	},
	397: {
		special: "50%확률로 [EMPTY]을 [STR]슬롯으로 채우고, 모든 적에게 캐릭터 공격력에 15배의 데미지를 입힌다.",
		specialName: "4톤짜리 배트",
		captain: "5연속 PERFECT 이후 캐릭터의 공격력이 3배가 된다."
	},
	398: {
		special: "50%확률로 [EMPTY]을 [STR]슬롯으로 채우고, 모든 적에게 캐릭터 공격력에 15배의 데미지를 입힌다.",
		specialName: "4톤짜리 배트",
		captain: "5연속 PERFECT 이후 캐릭터의 공격력이 4배가 된다."
	},
	399: {
		special: "1턴 동안 [DEX] 캐릭터의 공격력을 1.5배로 만든다.",
		specialName: "가시 가시 도핑",
		captain: "타격 타입 캐릭터의 체력을 1.5배로 만든다."
	},
400: {
		special: "1턴 동안 [DEX] 캐릭터의 공격력을 1.5배로 만든다.",
		specialName: "가시 가시 도핑",
		captain: "타격 타입 캐릭터의 체력을 2배로 만든다."
	},
  401: {
		special: "1턴 동안 받는 데미지를 50% 감소시키고, 참격 타입 캐릭터의 공격력을 1.25배로 만든다.",
		specialName: "아이언 가드",
		captain: "받는 데미지를 10% 감소시키고, 참격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	402: {
		special: "1턴 동안 받는 데미지를 50% 감소시키고, 참격 타입 캐릭터의 공격력을 1.25배로 만든다.",
		specialName: "아이언 가드",
		captain: "받는 데미지를 10% 감소시키고, 참격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	403: {
		special: "모든 적에게 일당의 체력이 적을 수록 큰 [QCK] 데미지를 입힌다.",
		specialName: "배수진 검무",
		captain: "남은 체력이 적을 때, 받는 데미지 50% 감소 시키고 캐릭터의 회복력을 3배로 만든다."
	},
	404: {
		special: "2턴 동안 받는 데미지를 50% 감소 시키고 캐릭터의 회복력을 2배로 만든다.",
		specialName: "투명투명 열매",
		captain: "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	405: {
		special: "2턴 동안 받는 데미지를 50% 감소 시키고 캐릭터의 회복력을 2배로 만든다.",
		specialName: "투명투명 열매",
		captain: "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
	},
	406: {
		special: "일당의 체력을 1로 감소 시키고, 적 전체에게 고정 데미지 1,000을 입힌다, 1턴동안 모든 캐릭터의 공격력을 1.2배로 만든다.",
		specialName: "고대 전사들의 전투기술",
	},
	407: {
		special: "랜덤으로 모든 슬롯을 바꾸고, 전 전체에게 캐릭터 공격력에 7배의 [DEX]데미지",
		specialName: "좀비류 36번뇌봉"
	},
	408: {
		special: "자신의 슬롯을 [INT]슬롯으로 변환 하고 나머지 캐릭터의 슬롯을 랜덤으로 바꾼다.,적 전체에게 캐릭터 공격력에 15배의 [INT]데미지",
		specialName: "그라운드 데스",
		captain: "받는 데미지를 20%줄이고, 참격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	409: {
		special: "자신의 슬롯을 [QCK]슬롯으로 변환하고 적 한명에게 캐릭터 공격력에 13배의 [QCK]데미지.",
		specialName: "해류 한판 엎어치기",
		captain: "격투 타입 캐릭터의 공격력을 2배로 만든다."
	},
	410: {
		special: "자신의 슬롯을 [QCK]슬롯으로 변환하고 적 한명에게 캐릭터 공격력에 13배의 [QCK]데미지.",
		specialName: "해류 한판 엎어치기",
		captain: "격투 타입 캐릭터의 공격력을 2.5배로 만든다."
	},
	411: {
		special: "자신과 인접한 캐릭터의 슬롯을 [STR]으로 변환시키고, 적 전체에게 1,000의 고정 데미지",
		specialName: "곰의 충격",
		captain: "[STR] 캐릭터의 체력과 공격력을 2배로 만든다."
	},
	412: {
		special: "자신과 인접한 캐릭터의 슬롯을 [STR]으로 변환시키고, 적 전체에게 1,000의 고정 데미지",
		specialName: "곰의 충격",
		captain: "[STR] 캐릭터의 체력과 공격력을 2배로 만든다."
	},
	413: {
		special: "[STR],[DEX]슬롯을 [INT]슬롯으로 변환",
		specialName: "그림자",
		captain: "전투가 시작될때 체력이 가득 차 있으면 [INT] 캐릭터의 공격력을 2.5배로 만든다. "
	},
	414: {
		special: "[STR],[DEX]슬롯을 [INT]슬롯으로 변환",
		specialName: "그림자",
		captain: "전투가 시작될때 체력이 가득 차 있으면 [INT] 캐릭터의 공격력을 3배로 만든다. "
	},
	415: {
		special: "캐릭터 회복력에 15배만큼 체력을 회복한다. 적의 공격을 1턴 늦춘다.",
		specialName: "메로메로 멜로우",
		captain: "전투가 시작될때 체력이 70% 이상이면, [QCK],[PSY]캐릭터의 공격력을 2.75배로, 회복력을 1.5배로 만든다."
	},
	416: {
		special: "캐릭터 회복력에 15배만큼 체력을 회복한다. 적의 공격을 1턴 늦춘다.",
		specialName: "메로메로 멜로우",
		captain: "전투가 시작될때 체력이 70% 이상이면, [QCK],[PSY]캐릭터의 공격력을 2.75배로, 회복력을 1.5배로 만든다."
	},
	417: {
		special: "슬롯을 2회 자유롭게 변경하고, 1턴 동안 슬롯의 영향을 2배로 증폭시킨다.",
		specialName: "채찍실(오버 히트)",
		captain: "참격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	418: { // modified
		special: "슬롯을 자유롭게 움직이고(2회), 슬롯 영향이 두 배가 된다(1턴)",
		specialName: "오버 히트",
		captain: "참격형 캐릭터의 공격력과 체력이 2배가 된다"
	},
	419: {
		special: "2턴 동안 적 전체의 방어력을 50% 감소시킨다., 모든 슬롯을 랜덤으로 바꾼다.",
		specialName: "파라즈 쇼트 : 스톰",
		captain: "[QCK] 캐릭터의 공격력을 2배로 만든다."
	},
    420: {
        special: "선장 효과 무효 상태를 3 턴 회복하고 적 1 체에 캐릭터 공격력 × 15 배의 STR데미지",
        specialName: "고무고무 바주카 ‘하’",
        captain: "STR캐릭터의 능력치가 1.5 배가 된다."
    },
    421: {
        special: "봉인 상태를 2 턴 회복 적 전체에 캐릭터 공격력 × 10 배의 DEX데미지",
        specialName: "삼.천.세.계: 일무은 ‘참’",
        captain: "DEX캐릭터의 능력치가 1.5 배가 된다"
    },
    422: {
        special: "INT의 공격을 1 턴 무효화하고 체력을 랜덤 량 회복",
        specialName: "미라쥬 템포: 하늘",
        captain: "INT캐릭터의 능력치가 1.5 배가 된다"
    },
    423: {
        special: "체력을 4,343 회복 적 전체의 방어력을 2 턴 동안 반감",
        specialName: "자장가 프랑",
        captain: "체력이 많이 남아 있으면 공격을 받아도 쓰러지지 않는다.",
    },
    424: {
        special: "체력을 4,343 회복 적 전체의 방어력을 2 턴 동안 반감",
        specialName: "자장가 프랑",
        captain: "체력이 많이 남아있는 경우 일당의 공격력이 1.5 배가 된다, 공격을 받아도 쓰러지지 않는다",
    },
    425: {
        special: "적 전체에 무작위의 PSY데미지",
        specialName: "명검 슈스이 콧노래 삼백보",
        captain: "참격 타입 캐릭터의 공격력과 체력이 1.5 배가 된다"
    },
    426: {
        special: "5턴 동안 STR 공격력을 1.05배 상승시킨다.",
        specialName: "선체 헌터 브레스",
        captain: "STR캐릭터의 체력이 2 배가 된다"
    },
    427: {
        special: "봉인상태와 선장 효과 무효 상태를 2 턴 회복",
        specialName: "음파 ‘파괴의 외침’",
        captain: "DEX캐릭터의 체력이 2 배가 된다"
    },
    428: {
        special: "받는 데미지를 2 턴 동안 50% 감소",
        specialName: "최종 보스 – 심해 다이브의 꿈",
        captain: "PSY캐릭터의 공격력이 2 배가 된다"
    },
    429: {
        special: "적 전체에 캐릭터 공격력 × 7 배의 DEX타격을 주고, 1 턴 동안 방어력을 반감",
        specialName: "사우스 버드의 겁없는 미소"
    },
    430: {
        special: "1 턴 동안 일당 전원 슬롯의 영향 확대(1.5배)",
        specialName: "스프링 하네토",
        captain: "DEX캐릭터의 공격력이 1.5 배가 된다."
    },
    431: {
        special: "1 턴 동안 일당 전원 슬롯의 영향 확대(1.5배)",
        specialName: "스프링 하네토",
        captain: "DEX캐릭터의 공격력이 1.5 배가 된다."
    },
    432: {
        special: "적 1기에 캐릭터 공격력 × 20배 QCK데미지",
        specialName: "빅 춉"
    },
    433: {
        special: "봉인상태 선장 효과 무효 상태를 1 턴 회복",
        specialName: "뉴 커머의 유혹",
        captain: "QCK → STR → DEX의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
    },
    434: {
        special: "3 턴 동안 일당 전원 슬롯의 영향을 조금 확대(1.25배)",
        specialName: "뉴 커머 권법 처녀의 각성",
        captain: "PSY → INT → INT의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
    },
    435: {
        special: "[RCV], [STR], [DEX] 슬롯을 [STR], [QCK] 임의로 교체",
        specialName: "가련한 처녀의 꽃",
        captain: "INT → PSY → QCK의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
    },
    436: {
        special: "[RCV], [STR], [DEX] 슬롯을 [STR], [QCK] 임의로 교체",
        specialName: "가련한 처녀의 꽃",
        captain: "INT → PSY → QCK의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
    },
    437: {
        special: "체력을 조금 회복하고 1 턴 동안받는 데미지를 80% 감소, 턴 당 1,000의 독데미지",
        specialName: "네거티브 호로 ‘스위트’",
        captain: "남은 체력이 적을 때, DEX캐릭터의 회복력이 3 배가 된다"
    },
    438: {
        special: "체력을 조금 회복하고 1 턴 동안받는 데미지를 80% 감소, 턴 당 1,000의 독데미지",
        specialName: "네거티브 호로 ‘스위트’",
        captain: "남은 체력이 적을 때, DEX캐릭터의 회복력이 5 배가 된다"
    },
    439: {
        special: "인접한 슬롯을 [RCV] 슬롯으로 변환하고 다른 슬롯을 랜덤으로 교체",
        specialName: "돌격! 초 카루가모 부대! ‘러브’",
        captain: "턴 종료 후에 캐릭터의 회복 x5 배의 체력을 회복한다"
    },
    440: {
        special: "인접한 슬롯을 [RCV] 슬롯으로 변환하고 다른 슬롯을 랜덤으로 교체",
        specialName: "돌격! 초 카루가모 부대! ‘러브’",
        captain: "턴 종료 후에 캐릭터의 회복 x7 배의 체력을 회복한다"
    },
    444: {
        captain: "체력 일정 이상일 때 진화, 강화 타입 캐릭터의 공격력이 2 배가 된다"
    },
    445: {
        special: "모든 슬롯을 [STR][DEX][QCK][PSY][INT] 슬롯으로 무작위 교체한다, 슬롯을 3 회 자유롭게 이동",
        specialName: "	응원! 초 카루가모 부대!",
        captain: "체력 일정 이상일 때 진화, 강화 타입 캐릭터의 공격력이 2.5 배가 된다"
    },
    446: {
        special: "적 전체에 이전 턴에받은 데미지 × 10 배의 무 속성데미지",
        specialName: "Black Hole",
        captain: "받는 데미지가 2 배가 되지만, STR캐릭터의 공격력이 2 배 체력이 1.5 배가 된다"
    },
    447: {
        special: "적 전체에 이전 턴에받은 데미지 × 10 배의 무 속성데미지",
        specialName: "Black Hole",
        captain: "받는 데미지가 2 배가 되지만, STR캐릭터의 공격력이 2.5 배 체력이 2.25 배가 된다",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 10" },
            { "description": "체력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 30" },
            { "description": "선원효과 추가 1: [STR]캐릭터의 체력 +120" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 60" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "공격력 상승 : 40" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
  448: {
		special: "3턴 동안 [QCK] 슬롯 출현율이 크게 상승한다.",
		specialName: "해적왕이 이끄는 검",
		captain: "공격 시작 전 체력이 꽉 차있으면 [QCK] 캐릭터 공격력을 3배로 만든다"
	},
	449: {
		special: "3턴 동안 [QCK] 슬롯 출현율이 크게 상승한다.",
		specialName: "해적왕이 이끄는 검",
		captain: "공격 시작 전 체력이 꽉 차있으면 [QCK] 캐릭터 공격력을 3배로 만든다."
	},
	450: {
		special: "1턴 동안 격투타입 캐릭터의 공격력을 1.5배로 만들고, 적 한명에게 캐릭터 공격력의 25배 [DEX] 데미지를 입힌다.",
		specialName: "넘버 에이트의 일격",
		captain: "격투 타입 캐릭터의 공격력을 2배로, 체력은 1.5배로 만든다.",
        	sailor: "격투 캐릭터의 공격력을 20 상승시킨다."
	},
	451: {
		special: "1턴 동안 격투타입 캐릭터의 공격력을 1.5배로 만들고, 적 한명에게 캐릭터 공격력의 25배 [DEX] 데미지를 입힌다.",
		specialName: "넘버 에이트의 일격",
		captain: "격투 타입 캐릭터의 공격력을 2배로, 체력은 1.5배로 만든다.",
		sailor: "격투 캐릭터의 공격력을 20 상승시킨다."
	},
	452: {
		special: "선장과 자신의 슬롯을 [PSY] 으로 변환",
		specialName: "드레드 모닝 스타",
		captain: "전투가 시작 될 때 필살기를 3턴 줄이고, 타격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	453: {
		special: "선장과 자신의 슬롯을 [PSY] 으로 변환",
		specialName: "드레드 모닝 스타",
		captain: "전투가 시작 될 때 필살기를 3턴 줄이고, 타격 타입 캐릭터의 공격력을 2배로 만든다."
	},
	454: {
		special: "1턴 동안 [STR] 캐릭터의 공격력을 1.5배로 만들고, 적 전체에게 캐릭터 공격력의 15배 [STR] 데미지를 입힌다.",
		specialName: "남자다운 화염도",
		captain: "[STR] 캐릭터의 공격력을 2배로 만들고,[STR] 필살기의 데미지를 2배로 만든다."
	},
	455: {
		special: "1턴 동안 [STR] 캐릭터의 공격력을 1.5배로 만들고, 적 전체에게 캐릭터 공격력의 15배 [STR] 데미지를 입힌다.",
		specialName: "남자다운 화염도",
		captain: "[STR] 캐릭터의 공격력을 2배로 만들고,[STR] 필살기의 데미지를 2배로 만든다."
	},
	456: {
		special: "중간 줄 슬롯을 [STR] 이나 [DEX] 으로 바꾸고, 아랫 줄 슬롯을 [PSY] 이나 [INT] 으로 바꾼다, 이후 슬롯을 1회 변경 할수있다.",
		specialName: "더블 캐논",
		captain: "사격 타입 캐릭터의 공격력을 2배로 만들고 회복력을 1.5배로 만든다",
        sailor: "[PSY] 슬롯도 [유리] 슬롯으로 만든다."
	},
	457: {
		special: "중간 줄 슬롯을 [STR] 이나 [DEX] 으로 바꾸고, 아랫 줄 슬롯을 [PSY] 이나 [INT] 으로 바꾼다, 이후 슬롯을 1회 변경 할수있다.",
		specialName: "더블 캐논",
		captain: "사격 타입 캐릭터의 공격력을 2배로 만들고 회복력을 1.5배로 만든다",
        sailor: "[PSY] 슬롯도 [유리] 슬롯으로 만든다."
	},
	458: {
		special: "적 전체에게 랜덤의 [PSY] 데미지를 입히고, 1턴 동안 모든 캐릭터의 공격력을 1.5배로 만든다.",
		specialName: "부처의 충격파",
		captain: "전투가 시작될때 필살기를 2턴 줄이고, 코스트가 20이하인 캐릭터의 공격력을 3배로 만든다."
	},
	459: {
	
		special: "적 전체에게 랜덤의 [PSY] 데미지를 입히고, 1턴 동안 모든 캐릭터의 공격력을 1.5배로 만든다.",
		specialName: "부처의 충격파",
		captain: "전투가 시작될때 필살기를 2턴 줄이고, 코스트가 20이하인 캐릭터와 ‘부처님 센코쿠’의 공격력을 3배로 만든다."
	},
    460: {
        special: "턴 종료 후 체력을 조금 회복하고 적 전체 공격을 1 턴 지연",
        specialName: "‘대형 촛불 서비스 세트’",
        captain: "받는 데미지를 10% 감소"
    },
    461: {
        special: "자신의 슬롯을 [DEX]으로 바꾸고 다른 캐릭터의 슬롯을 무작위로 변경한다.  2 턴 동안 격투 타입 캐릭터 공격력을 1.25 배 상승시킨다.",
        specialName: "탈주 춤 ‘백조 아라베스크’",
        captain: "격투 타입 캐릭터의 공격력이 2 배가 된다"
    },
    462: {
        special: "자신의 슬롯을 [DEX]으로 바꾸고 다른 캐릭터의 슬롯을 무작위로 변경한다.  2 턴 동안 격투 타입 캐릭터 공격력을 1.25 배 상승시킨다.",
        specialName: "탈주 춤 ‘백조 아라베스크’",
        captain: "격투 타입 캐릭터의 공격력이 2 배가 된다"
    },
    463: {
        special: "모든 슬롯을 비우고 적 1기에 PSY의 큰 데미지",
        specialName: "깜짝 구슬 드래곤",
        captain: "PSY캐릭터의 체력이 2 배가 된다"
    },
    464: {
        special: "적 전체에 캐릭터 공격력 × 20배의 INT데미지",
        specialName: "삼장조 후자의 불무리",
        captain: "타격 타입 캐릭터의 공격력과 체력이 1.5 배가 된다"
    },
    465: {
        special: "적 1기에 캐릭터 공격력 × 20배 QCK데미지를 주고 2 턴 동안 슬롯의 영향이 조금 커진다",
        specialName: "제트 펀치",
        captain: "이하 적중을 4회 하면 캐릭터의 공격력이 3배가 된다."
    },
    466: {
        special: "적 전체 공격을 1 턴 지연",
        specialName: "쌍권총의 플래시 건",
        captain: "사격 타입 캐릭터의 공격력과 체력이 1.5 배가 된다"
    },
    467: {
        special: "[RCV] 슬롯을 [STR] 슬롯으로 변환",
        specialName: "복부 만점",
        captain: "STR캐릭터의 공격력과 체력이 1.5 배가 된다"
    },
    468: {
        special: "1 턴 동안 일당의 회복력을 1.5 배로 한다",
        specialName: "힐링 파워"
    },
    469: {
        special: "슬롯을 1 회 자유롭게 이동",
        specialName: "퀵 체인지"
    },
    470: {
        special: "PSY캐릭터의 회복력이 1.5 배가 된다",
        specialName: "힐링파워",
        captain: "1 턴 동안 일당의 회복력을 1.5 배로 한다"
    },
    471: {
        special: "슬롯을 1 회 자유롭게 이동",
        specialName: "퀵 체인지"
    },
    472: {
        special: "적 1기에 캐릭터 공격력 × 20배의 STR데미지",
        specialName: "밀키 파워 액스"
    },
    473: {
        special: "적 1기에 캐릭터 공격력 × 10배의 QCK데미지",
        specialName: "밀키 속도 액스"
    },
    474: {
        special: "적 전체에 캐릭터 공격력 × 5 배의 캐릭터의 DEX타격을 주고, ‘봉인’상태를 1 턴 회복",
        specialName: "밀키 기술 액스"
    },
    475: {
        special: "적 전체에 캐릭터 공격력 × 5 배의 캐릭터의 PSY타격을 주고, 체력을 500 회복",
        specialName: "밀키 마인드 액스"
    },
    476: {
        special: "적 1기에 1,000의 고정 데미지",
        specialName: "밀키 인텔리전스 액스",
    },
    477: {
        special: "[DEX] 슬롯을 [STR] 슬롯으로 변환",
        specialName: "[기] 슬롯 체인지 [힘]"
    },
    478: {
        special: "[PSY] 슬롯을 [QCK] 슬롯으로 변환",
        specialName: "[심] 슬롯 체인지 [속]"
    },
    479: {
        special: "[INT] 슬롯을 [DEX] 슬롯으로 변환",
        specialName: "[지] 슬롯 체인지 [기]"
    },
    480: {
        special: " [TND]을 [PSY] 슬롯으로 변환",
        specialName: "[TND] 슬롯 체인지 [힘]"
    },
    481: {
        special: "[DEX] 슬롯을 [INT] 슬롯으로 변환",
        specialName: "[기] 슬롯 체인지 [지]"
    },
    482: {
        special: "[DEX] 슬롯을 [STR] 슬롯으로 변환",
        specialName: "[기] 슬롯 체인지 [힘]",
        captain: "타격 타입 캐릭터의 체력이 1.5 배가 된다"
    },
    483: {
        special: "[PSY] 슬롯을 [QCK] 슬롯으로 변환",
        specialName: "[심] 슬롯 체인지 [속]",
        captain: "QCK캐릭터의 공격력과 회복력이 1.2 배가 된다"
    },
    484: {
        special: "[INT] 슬롯을 [DEX] 슬롯으로 변환",
        specialName: "[지] 슬롯 체인지 [기]",
        captain: "받는 데미지를 10% 감소한다."
    },
    485: {
        special: "[TND]을 [PSY] 슬롯으로 변환",
        specialName: "[TND] 슬롯 체인지 [심]",
        captain: "PSY 캐릭터의 체력과 회복력을 1.2배로 만든다."
    },
    486: {
        special: "[DEX] 슬롯을 [INT] 슬롯으로 변환",
        specialName: "[기] 슬롯 체인지 [지]",
        captain: "타격 캐릭터의 공격력을 1.5배로 만든다."
    },
    487: {
        special: "1 턴 동안 STR의 공격이 1.2 배가 된다",
        specialName: "어택 부스트 [힘]"
    },
    488: {
        special: "1 턴 동안 QCK의 공격이 1.2 배가 된다.",
        specialName: "어택 부스트 [속]"
    },
    489: {
        special: "1 턴 동안 DEX의 공격이 1.2 배가 된다.",
        specialName: "어택 부스트 [기]"
    },
    490: {
        special: "1 턴 동안 STR의 공격이 1.2 배가 된다",
        specialName: "어택 부스트 [힘]",
        captain: "타격 캐릭터의 공격력과 체력이 1.2배가 된다."
    },
    491: {
        special: "1 턴 동안 QCK의 공격이 1.2 배가 된다.",
        specialName: "어택 부스트 [속]",
        captain: "타격 캐릭터의 회복력이 1.5배가 된다."
    },
    492: {
        special: "1 턴 동안 DEX의 공격이 1.2 배가 된다.",
        specialName: "어택 부스트 [기]",
        captain: "DEX 캐릭터의 공격력이 1.2배가 된다."
    },
    493: {
        special: "캐릭터 회복력 × 7 배의 체력을 회복한다",
        specialName: "미들 힐링"
    },
    494: {
        special: "적 전체에 캐릭터 공격력 × 3 배의 INT타격을 주고, 독 상태로 만든다",
        specialName: "포이즌 어택"
    },
    495: {
        special: "캐릭터 회복력 × 7 배의 체력을 회복한다",
        specialName: "미들 힐링",
        captain: "턴 종료시에 체력이 500 회복"
    },
    496: {
        special: "적 전체에 캐릭터 공격력 × 3 배의 INT타격을 주고, 독 상태로 만든다",
        specialName: "포이즌 어택",
        captain: "사격 캐릭터의 공격력이 1.5배가 된다."
    },
    497: {
        special: "봉인상태를 4 턴 회복하고 적 1 체에 캐릭터 공격력 × 3 배 QCK데미지",
        specialName: "제멋대로 악동 킥",
        captain: "QCK 캐릭터의 공격력이 1.5 배가 된다"
    },
    498: {
        special: "봉인상태를 4 턴 회복하고 적 1 체에 캐릭터 공격력 × 3 배 QCK데미지",
        specialName: "제멋대로 악동 킥",
        captain: "QCK캐릭터의 공격력과 체력이 1.5 배가 된다"
    },
    499: {
        special: "적 전체 공격을 1 턴 지연",
        specialName: "여자는 배짱!",
        captain: "사격 타입 캐릭터의 회복력이 1.5 배가 된다"
    },
    500: {
        special: "적 전체 공격을 1 턴 지연",
        specialName: "여자는 배짱!",
        captain: "사격 타입 캐릭터의 회복력이 2 배가 된다"
    },
    501: {
        special: "4 턴 동안 턴 종료시에 체력을 캐릭터 회복력 × 5 배 회복",
        specialName: "의학 공부 중",
        captain: "PSY 캐릭터의 능력치가 1.2 배가 된다"
    },
    502: {
        special: "4 턴 동안 턴 종료시에 체력을 캐릭터 회복력 × 5 배 회복",
        specialName: "의학 공부 중",
        captain: "PSY 캐릭터의 능력치가 1.5 배가 된다"
    },
    503: {
        special: "적 전체에게 INT 데미지를 주고, 1턴 동안 다양한 효과가 발동한다.",
        specialName: "깜짝 다이얼 일루젼",
        captain: "INT캐릭터의 체력이 1.5배가 된다."
    },
    504: {
        special: "적 전체에게 INT 데미지를 주고, 1턴 동안 다양한 효과가 발동한다.",
        specialName: "깜짝 다이얼 일루젼",
        captain: "INT캐릭터의 체력이 2배가 된다."
    },
    505: {
        special: "3 턴 동안 QCK의 공격이 1.25 배가된다",
        specialName: "날으는 발톱",
        captain: "체력이 일정 이상인 경우, 공격을 받아도 쓰러지지 않는다",
    },
    506: {
        special: "3 턴 동안 QCK의 공격이 1.25 배가된다",
        specialName: "날으는 발톱",
        captain: "체력이 적어도 일정 이상인 경우, 공격을 받아도 쓰러지지 않는다",
    },
    507: { // modified
        special: "적 1명에게 캐릭터의 공격력x25배의 [STR]데미지를 준다",
        specialName: "울부짖는 이빨",
        captain: "[STR] 캐릭터의 공격력과 체력이 1.2배가 된다"
    },
    508: {
        special: "적 1명에게 캐릭터의 공격력x25배의 [STR]데미지를 준다",
        specialName: "울부짖는 이빨",
        captain: "STR 캐릭터의 공격력과 체력이 1.5 배가 된다"
    },
    509: {
        special: "적 전체를 중독시키고, 타격 타입 캐릭터 공격력을 1 턴 1.5 배",
        specialName: "냉혹하고 비정한 책략 ‘독침’",
        captain: "타격 타입 캐릭터의 공격력이 2 배가 된다"
    },
    510: {
        special: "적 전체를 중독시키고, 타격 타입 캐릭터 공격력을 1 턴 1.5 배",
        specialName: "냉혹하고 비정한 책략 ‘독침’",
        captain: "받는 데미지를 10% 감소시키고, 타격 타입 캐릭터의 공격력이 2 배가 된다"
    },
    511: {
        special: "2 턴 동안받는 데미지를 30% 감소하고, 참격 타입 캐릭터 공격력의 1.25 배",
        specialName: "잔혹함 참격: 참인",
        captain: "참격 타입 캐릭터의 공격력이 2 배가 된다"
    },
    512: {
        special: "3 턴 동안 PSY슬롯의 출현율이 크게 오르고, INT슬롯의 출현율이 낮아진다.",
        specialName: "제멋대로 악동 스트라이크",
        captain: "체력이 일정 이상인 경우, 공격을 받아도 쓰러지지 않는다",
    },
    513: {
        special: "3 턴 동안 PSY슬롯의 출현율이 크게 오르고, INT슬롯의 출현율이 낮아진다.",
        specialName: "제멋대로 악동 스트라이크",
        captain: "체력이 일정 이상이면 PSY캐릭터의 공격력이 1.5 배가 되고 공격을 받아도 쓰러지지 않는다.",
    },
    514: {
        special: "1 턴 동안 적 전체의 방어력을 반감시키고, INT캐릭터 공격력이 1.5 배가된다",
        specialName: "상하의 백화요란",
        captain: "INT캐릭터의 공격력이 2 배가 된다"
    },
    515: {
        special: "왼쪽 슬롯을 [INT], [PSY], [RCV], 오른쪽 슬롯을 [STR], [DEX], [QCK]로 순서대로 변환한다. 슬롯을 자유롭게 3회 움직일 수 있다.",
        specialName: "팝 그린",
        captain: "사격 타입 캐릭터의 능력치가 1.5 배가 된다."
    },
    516: {
        special: "왼쪽 슬롯을 [INT], [PSY], [RCV], 오른 슬롯을 [STR], [DEX], [QCK]로 순서대로 변환한다. 슬롯을 자유롭게 3회 움직일 수 있다.",
        specialName: "팝 그린",
        captain: "사격 타입 캐릭터의 능력치가 1.5 배가 되고, 턴 종료시 체력이 조금 회복된다."
    },
    517: {
        special: "[RCV]슬롯을 [EMPTY]으로 변환하고, 일당의 공격력이 2턴 동안 조금 증가한다.",
        specialName: "폭식! 에너지 충전",
        captain: "PSY캐릭터의 체력이 1.5 배가 된다"
    },
    518: {
        special: "[RCV]슬롯을 [EMPTY]으로 변환하고, 일당의 공격력이 2턴 동안 조금 증가한다.",
        specialName: "폭식! 에너지 충전",
        captain: "PSY캐릭터의 체력이 2배가 되고,[RCV]슬롯 출현율이 조금 증가한다."
    },
    519: {
        special: "일당의 체력을 크게 줄여 적 전체 고정 큰 데미지를 주고, 1 턴 동안 STR의 공격을 2배로 만든다.",
        specialName: "고무고무 거인의 천둥 도끼",
        captain: "STR 캐릭터의 공격력을 2배로 만든다."
    },
    520: {
        special: "일당의 체력을 크게 줄여 적 전체 고정 큰 데미지를 주고, 1 턴 동안 STR의 공격을 2배로 만든다.",
        specialName: "고무고무 거인의 천둥 도끼",
        captain: "STR 캐릭터의 공격력을 2.5배로 만든다."
    },
    521: {
        special: "적 전체에 아군의 체력이 적을수록 큰 INT데미지",
        specialName: "디아블잠브 - 야수 고기 슛",
        captain: "체력이 가득 차 있을 때 상대로 부터 받는 데미지를 크게 감소",
        sailor: "본인의 저림 상태를 3턴 감소 시킨다."
    },
    522: {
        special: "적 전체에 아군의 체력이 적을수록 큰 INT데미지",
        specialName: "디아블잠브 - 야수 고기 슛",
        captain: "체력이 가득 차 있을 때 상대로 부터 받는 데미지를 크게 감소",
        sailor: "본인의 저림 상태를 3턴 감소 시킨다."
    },
    523: {
        special: "슬롯을 랜덤으로 교체, 1 턴 동안 체력이 일정 이상일 때 공격을 받아도 쓰러지지 않는다",
        specialName: "빌리 방전 ‘비리비리비리!’",
        captain: "타격 타입 캐릭터의 공격력과 회복력이 1.5 배가 된다",
        sailor: "[DEX]슬롯도 [유리] 슬롯으로 취급한다."
    },
    524: {
        special: "슬롯을 랜덤으로 교체, 1 턴 동안 체력이 일정 이상일 때 공격을 받아도 쓰러지지 않는다",
        specialName: "빌리 방전 ‘비리비리비리!’",
        captain: "타격 타입 캐릭터의 공격력이 2배가 되고 회복력이 1.5 배가 된다",
        sailor: "[DEX]슬롯도 [유리] 슬롯으로 취급한다."
    },
    525: {
        special: "적 전체에 무작위의 PSY의 타격을 주고, 랜덤으로 슬롯을 교체",
        specialName: "콧노래 삼보 오니가르기",
        captain: "PSY캐릭터의 공격력이 2 배가 된다",
        sailor: "PSY캐릭터의 회복력이 15 증가"
    },
    526: {
        special: "적 전체에 무작위의 PSY의 타격을 주고, 랜덤으로 슬롯을 교체",
        specialName: "콧노래 삼보 오니가르기",
        captain: "PSY캐릭터의 공격력이 2 배가 되고, INT 적 에게 받는 데미지가 30% 감소한다.",
        sailor: "PSY캐릭터의 회복력이 15 증가"
    },
    527: {
        special: "독 · 맹독 상태를 회복하고 캐릭터 회복력 × 15 배의 체력을 회복",
        specialName: "헌신의 치유 ‘무사해서 다행이야’",
        captain: "DEX캐릭터의 공격력과 회복력이 1.5 배가 된다",
        sailor: "남은 체력이 적을 때 (30%) 자신의 회복력이 50 증가"
    },
    528: {
        special: "독 · 맹독 상태를 회복하고 캐릭터 회복력 × 15 배의 체력을 회복",
        specialName: "헌신의 치유 ‘무사해서 다행이야’",
        captain: "DEX캐릭터의 공격력과 회복력이 2 배가 된다",
        sailor: "남은 체력이 적을 때 (30%) 자신의 회복력이 50 증가"
    },
    529: {
        special: "적 전체에 캐릭터 공격력 × 35 배의 PSY데미지를 준 후 2 턴 동안 적의 방어력을 0으로한다",
        specialName: "패왕색 패기: 황제",
        captain: "[PSY]슬롯 출현율 상승!, 공격 시작 전에 체력이 많을수록 PSY의 공격이 커진다",
    },
    530: {
        special: "적 전체에 캐릭터 공격력 × 35 배의 PSY데미지를 준 후 2 턴 동안 적의 방어력을 0으로한다",
        specialName: "패왕색 패기: 황제",
        captain: "[PSY]슬롯 출현율 상승!, 공격 시작 전에 체력이 많을수록 PSY의 공격이 커진다",
    },
    531: {
        special: "받는 데미지를 4 턴 동안 30% 감소",
        specialName: "스무송이 꽃 금송화: 벚꽃",
        captain: "STR DEX QCK 캐릭터에게 받는 데미지 30% 감소"
    },
    532: {
        special: "받는 데미지를 4 턴 동안 30% 감소",
        specialName: "스무송이 꽃 금송화: 벚꽃",
        captain: "STR DEX QCK 캐릭터에게 받는 데미지 30% 감소"
    },
    533: {
        special: "1 턴 동안 슬롯의 영향을 크게 하고 적 1기에 20 배 QCK데미지",
        specialName: "비연 본나반 : 벚꽃",
        captain: "QCK캐릭터의 공격력이 2 배가 된다."
    },
    534: {
        special: "1 턴 동안 슬롯의 영향을 크게 하고 적 1기에 20 배 QCK 데미지",
        specialName: "비연 본나반 : 벚꽃",
        captain: "QCK캐릭터의 공격력이 2 배가 된다."
    },
    535: {
        special: "2 턴 동안받는 데미지를 반감하고, 회복력은 2 배로 한다",
        specialName: "미라쥬 템포 환상의 요정: 벚꽃",
        captain: "DEX캐릭터의 회복력이 1.5 배가 된다"
    },
    536: {
        special: "2 턴 동안받는 데미지를 반감하고, 회복력은 2 배로 한다",
        specialName: "미라쥬 템포 환상의 요정: 벚꽃",
        captain: "DEX캐릭터의 회복력이 2 배가 된다"
    },
    537: {
        special: "봉인· 선장 효과 무효 상태를 1 턴 회복하고 슬롯을 1 턴 고정한다.",
        specialName: "해루석 수갑",
        captain: "체인 계수 증가량이 2 배가 된다"
    },
    538: {
        special: "봉인· 선장 효과 무효 상태를 1 턴 회복하고 슬롯을 1 턴 고정한다.",
        specialName: "해루석 수갑",
        captain: "체인 계수 증가량이 2 배가 되고 턴 종료 후 체력이 조금 회복된다."
    },
    539: {
        special: "Changes own orb into [STR], deals 25x character's ATK in STR damage to one enemy",
        specialName: "Bashful Prison Beast's Metal Rod"
    },
    540: {
        special: "Boosts chances of getting [DEX] orbs for 2 턴",
        specialName: "Deadly Glare"
    },
    541: {
        special: "Greatly reduces chances of getting [PSY], [INT], [TND] and [RCV] slots for 5 턴",
        specialName: "White Thorn Deathmatch",
        captain: "Boosts ATK of STR characters by 2.5x 전투 시작 시 체력이 50% 미만이면"
    },
    542: {
        special: "Boosts RCV of all characters by 2x for 1 턴",
        specialName: "Roar of the Ruler of the Sky",
        captain: "Boosts HP of all characters by 1.5x"
    },
    543: {
        special: "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        specialName: "Reject",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x, reduces crew's RCV to 0"
    },
    544: {
        special: "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        specialName: "Reject",
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.5x, reduces crew's RCV to 0"
    },
    545: {
        special: "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 턴",
        specialName: "60,000,000 Volt Jamboule",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    546: {
        special: "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 턴",
        specialName: "60,000,000 Volt Jamboule",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received by 20%"
    },
    547: {
        special: "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 턴",
        specialName: "Crazy Punk Kid Punch",
        captain: "Boosts chances of getting [RCV] orbs"
    },
    548: {
        special: "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 턴",
        specialName: "Crazy Punk Kid Punch",
        captain: "Boosts chances of getting [RCV] orbs, boosts ATK of all characters by 1.2x"
    },
    549: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 턴",
        specialName: "Arousal Manifesto - Red Demon Whip",
        captain: "Boosts ATK by 2x after scoring 3 PERFECTs in a row"
    },
    550: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 턴",
        specialName: "Arousal Manifesto - Red Demon Whip",
        captain: "Boosts ATK by 2.5x after scoring 3 PERFECTs in a row"
    },
    551: {
        special: "Reduces damage received by 50% for 1 턴, deals 15x character's ATK in STR damage to one enemy",
        specialName: "Uncompromising Prison Beast's Morning Star"
    },
    552: {
        special: "Reduces the defense of all enemies by 100% for 1 턴",
        specialName: "Cursed Shout"
    },
    553: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        captain: "Boosts ATK of DEX characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    554: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        captain: "Boosts ATK of DEX characters by 3x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    555: {
        special: "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x",
        sailor: "Boosts base RCV of Shooter characters by 10"
    },
    556: {
        special: "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Boosts base RCV of Shooter characters by 10",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "체력 상승 : 80" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 120" },
            { "description": "선원효과 추가 1: 사격 캐릭터의 공격력을 50 상승시킨다." },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 2: If there are 5 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 3: If there are 4 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 4: If there are 4 Shooter characters in your crew, 회복 무효 상태 회복 : 2 턴",
                    "Level 5: If there are 4 Shooter characters in your crew, 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ]
    },
    557: {
        special: "Boosts chances of getting [INT] orbs for 3 턴",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        sailor: "Reduces Blindness duration by 3 턴"
    },
    558: {
        special: "Boosts chances of getting [INT] orbs for 3 턴",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        sailor: "Reduces Blindness duration by 3 턴"
    },
    559: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    560: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    561: { // modified
        special: "일당의 체력을 40% 줄이고, 전체에게 감소치x15배의 무 속성 데미지, 1턴 슬롯을 고정한다",
        specialName: "대염계 염제",
        captain: "사격형 캐릭터의 체력이 1.5배가 되고, 슬롯 일치 시에는 공격력이 3배, 보통 때는 2배가 된다"
    },
    562: { // modified
        special: "일당의 체력을 40% 줄이고, 전체에게 감소치x15배의 무 속성 데미지, 1턴 슬롯을 고정한다",
        specialName: "대염계 염제",
        captain: "사격형 캐릭터의 체력이 1.5배가 되고, 슬롯 일치 시에는 공격력이 3배, 보통 때는 2배가 된다"
    },
    563: {
        special: "Deal 3x character's ATK in PSY damage to one enemy, changes [INT] orbs into [RCV] orbs",
        specialName: "Cutie Baton"
    },
    564: {
        special: "Reduces Bind duration by 2 턴",
        specialName: "Sea Surface Split"
    },
    565: {
        special: "Deals 5,000 fixed damage to one enemy",
        specialName: "Hamburger Hammer",
    },
    566: {
        special: "Empties all slots with [BLOCK] orbs",
        specialName: "Wipeout Tackle"
    },
    567: {
        special: "Reduces Bind and Despair duration by 1 턴, deals 15x the character's ATK as STR damage to all enemies",
        specialName: "Mudfish Coaster"
    },
    568: {
        special: "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴, switches orbs between slots twice",
        specialName: "Slow Slow Beam",
        captain: "Boosts ATK, HP and RCV of all characters by 1.25x"
    },
    569: {
        special: "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴, switches orbs between slots twice",
        specialName: "Slow Slow Beam",
        captain: "Boosts ATK, HP and RCV of all characters by 1.5x, reduces cooldown of all specials by 1 턴 at the start of the fight"
    },
    570: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x",
    },
    571: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x, reduces cooldown of all specials by 1 턴 at the start of the fight",
    },
    572: {
        special: "Boosts ATK of Fighter characters by 2x for 1 턴, binds himself for 15 턴",
        specialName: "Roar of Mettle",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 99% at the start of the 턴"
    },
    573: {
        special: "Reduces Despair duration by 2 턴, recovers 10x character's RCV in HP",
        specialName: "Manly Support",
        captain: "Boosts RCV of all characters by 1.2x"
    },
    574: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 턴, locks all orbs for 2 턴",
        specialName: "아이스 블록 페즌트 펙",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    575: { // modified
        special: "2턴 동안 일당 슬롯을 고정, 타격형 캐릭터의 공격력이 1.75배가 된다",
        specialName: "아이스 블록 페즌트 펙",
        captain: "타격형 캐릭터의 공격력과 체력이 2배가 된다",
    },
    576: {
        special: "Changes [PSY] orbs into [INT] orbs, boosts RCV of all characters by 1.5x for 1 턴",
        specialName: "Fine Tempo - Tea Time Show",
        captain: "Boosts ATK of all characters by 1.5x, boosts RCV of all characters by 1.2x"
    },
    577: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum Jet Gatling",
        captain: "Boosts ATK by 4x following a chain of Good > Great > PERFECT hits"
    },
    578: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum Jet Gatling",
        captain: "Boosts ATK by 4x following a chain of Good > Great > PERFECT hits"
    },
    579: {
        special: "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        specialName: "Dragon Twister",
        captain: "Boosts ATK of QCK and DEX characters by 1.5x"
    },
    580: {
        special: "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        specialName: "Dragon Twister",
        captain: "Boosts ATK of QCK and DEX characters by 2x"
    },
    581: {
        special: "Cuts the current HP of each enemy by 7%",
        specialName: "High-Caliber Bazooka",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    582: {
        special: "Deals 10x character's ATK in QCK damage to one enemy, boosts ATK of QCK characters by 1.5x for 1 턴",
        specialName: "Burn Blade",
        captain: "Boosts ATK and HP of Striker characters by 1.5x"
    },
    583: {
        special: "Changes own orb into [INT] and the captain's orb into [DEX], boosts RCV of Shooter characters by 300 for 3 턴",
        specialName: "Disrupting Fire",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x"
    },
    584: {
        special: "Reduces damage received from PSY enemies by 100% for 1 턴",
        specialName: "Mantra",
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight, reduces ATK, HP and RCV of all characters by 90%"
    },
    585: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        specialName: "The Bond Bellmere Left Us",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    586: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        specialName: "The Bond Bellmere Left Us",
        captain: "Boosts HP and RCV of PSY characters by 1.5x"
    },
    587: { // modified
        special: "모든 독 상태를 회복하고, 봉쇄·선장효과 무효 상태를 2턴 회복한다",
        specialName: "위로의 진정제",
        captain: "턴 종료 후에 캐릭터의 회복력x3배의 체력을 회복한다"
    },
    588: {
        special: "Removes Poison, reduces Bind and Despair duration by 2 턴",
        specialName: "Merciful Painkiller",
        captain: "Recovers 5x character's RCV in HP at the end of each 턴"
    },
    589: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 턴",
        specialName: "Flag of the Rebellion",
        captain: "Boosts ATK of all characters by 1.5x, reduces HP and RCV of all characters by 80%"
    },
    590: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 턴",
        specialName: "Flag of the Rebellion",
        captain: "Boosts ATK of all characters by 2x, reduces HP and RCV of all characters by 80%"
    },
    596: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 턴",
        specialName: "Rozeo Michelli",
        captain: "Boosts ATK of STR characters by 1.5x, recovers 500 HP at the end of each 턴"
    },
    597: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 턴",
        specialName: "Rozeo Michelli",
        captain: "Boosts ATK of STR characters by 1.75x, recovers 750 HP at the end of each 턴"
    },
    598: {
        special: "Changes own orb into [INT], switches orbs between slots once",
        specialName: "Split Split Cannon",
        captain: "Boosts ATK of characters with fewer than 3 stars by 2.5x"
    },
    599: {
        special: "Changes own orb into [INT], switches orbs between slots once",
        specialName: "Split Split Cannon",
        captain: "Boosts ATK of characters with fewer than 3 stars by 3x"
    },
    600: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 턴",
        specialName: "Sword Draw - Single Flash",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    601: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 턴",
        specialName: "Sword Draw - Single Flash",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    602: {
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 턴",
        specialName: "200,000,000 Volt Amaru",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    603: {
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 턴",
        specialName: "200,000,000 Volt Amaru",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of QCK characters by 2.25x, recovers 5x character's RCV in HP at the end of each 턴"
    },
    604: {
        special: "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
        specialName: "Diable Jambe: Extra Hachis Hash",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    605: {
        special: "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
        specialName: "Diable Jambe: Extra Hachis Hash",
        captain: "Boosts ATK of Fighter characters by 2x, reduces damage received by 20%"
    },
    606: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
        specialName: "Red Leg Kick",
        captain: "Boosts ATK of Fighter characters by 2x if HP is above 50% at the start of the 턴"
    },
    607: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
        specialName: "Red Leg Kick",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 50% at the start of the 턴"
    },
    608: {
        special: "For 1 턴, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Wicked Strength"
    },
    609: {
        special: "Changes the captain's orb into [RCV] and randomizes every other orb",
        specialName: "Wicked Spirit"
    },
    610: {
        special: "Changes [TND] orbs into [RCV] orbs",
        specialName: "[TND] Slot Change [RCV]"
    },
    611: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm"
    },
    612: {
        special: "Boosts ATK and RCV of all characters by 45 for 1 턴, reduces damage received by 45% for 1 턴",
        specialName: "45-Degree Joy",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    613: {
        special: "Boosts ATK and RCV of all characters by 45 for 1 턴, reduces damage received by 45% for 1 턴",
        specialName: "45-Degree Joy",
        captain: "Boosts ATK, HP and RCV of Slasher characters by 1.5x"
    },
    614: {
        special: "Reduces the defense of all enemies by 50% for 1 턴, deals 10x character's ATK in PSY damage to all enemies",
        specialName: "Demolisher Chop",
        captain: "Boosts ATK of characters with cost 20 or less by 2.25x 전투 시작 시 체력이 30% 미만이면"
    },
    615: {
        special: "Deals random STR damage to one enemy",
        specialName: "Demolisher Axe"
    },
    616: {
        special: "Changes the captain's orb into STR",
        specialName: "Demolisher Spear"
    },
    617: {
        special: "Boosts ATK of Shooter characters by 1.2x for 1 턴",
        specialName: "Demolisher Cannon"
    },
    618: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Mach Punch"
    },
    619: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break"
    },
    620: {
        special: "Changes [INT] orbs into [QCK] orbs",
        specialName: "[INT] Slot Change [QCK]"
    },
    621: {
        special: "Changes [INT] orbs into [STR] orbs",
        specialName: "[INT] Slot Change [STR]"
    },
    622: {
        special: "Boosts RCV of all characters by 100 for 3 턴",
        specialName: "Patch Job"
    },
    623: {
        special: "Recovers 3x character's RCV in HP at the end of each 턴 for 5 턴",
        specialName: "Auto Repair"
    },
    624: {
        special: "Slightly boosts chances of getting [PSY] orbs for 3 턴",
        specialName: "Slot Rate Up [PSY]"
    },
    625: {
        special: "Slightly boosts chances of getting [INT] orbs for 3 턴",
        specialName: "Slot Rate Up [INT]"
    },
    626: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst"
    },
    627: {
        special: "Randomizes all orbs",
        specialName: "Slot Shuffle"
    },
    628: {
        special: "Deals 15,000 fixed damage to one enemy",
        specialName: "Keel Crusher",
        specialNotes: "#{fixed}"
    },
    629: {
        special: "Empties all slots including those with [BLOCK] orbs, deals random INT damage to all enemies",
        specialName: "Master Nail",
        captain: "Boosts ATK of characters with 3 or fewer stars by 2x"
    },
    630: {
        special: "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        specialName: "Tempest Kick: Slaughter",
        specialNotes: "#{random : 5,000 : 15,000}",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    631: {
        special: "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        specialName: "Tempest Kick: Slaughter",
        specialNotes: "#{random : 5,000 : 15,000}",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    632: {
        special: "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 턴",
        specialName: "Finger Pistol: Yellow Lotus",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        specialNotes: "#{random : 2,000 : 20,000}"
    },
    633: {
        special: "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 턴",
        specialName: "Finger Pistol: Yellow Lotus",
        captain: "Boosts ATK of Fighter characters by 2x",
        specialNotes: "#{random : 2,000 : 20,000}"
    },
    634: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 3 턴, boosts ATK of QCK and PSY characters by 1.2x for 3 턴",
        specialName: "Guiding Mermaid Voice",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.25x"
    },
    635: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 3 턴, boosts ATK of QCK and PSY characters by 1.2x for 3 턴",
        specialName: "Guiding Mermaid Voice",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.5x"
    },
    636: {
        special: "Binds himself for 3 턴, reduces damage received by 50% for 3 턴, recovers 3.5x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Wretched Ballade",
        captain: "Boosts ATK of characters with cost 2 or less by 3x"
    },
    637: {
        special: "Cuts the current HP of each enemy by 8%, boosts ATK against enemies with increased defense by 1.3x for 1 턴",
        specialName: "Hachi Ink Jet",
        captain: "Recovers 618 HP at the end of each 턴, boosts ATK of Slasher characters by 1.5x"
    },
    638: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 턴",
        specialName: "Bohemian Reverse Slash",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Slasher characters by 2x",
        sailor: "Restores his own special by 1 턴 when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    639: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 턴",
        specialName: "Bohemian Reverse Slash",
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of Slasher characters by 2x",
        sailor: "Restores his own special by 1 턴 when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    640: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Pirate Brothers: Twin Strike",
        captain: "Boosts ATK of Fighter characters by 2x, deals 2x character's ATK in DEX damage to all enemies at the end of each 턴",
        sailor: "When HP is below 30% at the start of the 턴, boosts ATK of Fighter characters by 100"
    },
    641: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Pirate Brothers: Twin Strike",
        captain: "Boosts ATK of Fighter characters by 2.25x, deals 2x character's ATK in DEX damage to all enemies at the end of each 턴",
        sailor: "When HP is below 30% at the start of the 턴, boosts ATK of Fighter characters by 100"
    },
    642: {
        special: "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
        specialNotes: "#{fixed} #{orb : 1.75x}",
        specialName: "Raging Greatsword",
        captain: "Boosts ATK of PSY characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Recovers 2 턴 of Paralysis on self"
    },
    643: {
        special: "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
        specialNotes: "#{fixed} #{orb : 1.75x}",
        specialName: "Raging Greatsword",
        captain: "Boosts ATK of PSY characters by 3x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Recovers 2 턴 of Paralysis on self",
    },
    644: {
        special: "Reduces Bind and Despair duration by 2 턴, boosts ATK against delayed enemies by 1.2x for 3 턴",
        specialName: "Witch's Icebreaker",
        captain: "Boosts ATK of INT characters by 2x",
        sailor: "Boosts base ATK and RCV of INT characters by 20"
    },
    645: {
        special: "Reduces Bind and Despair duration by 2 턴, boosts ATK against delayed enemies by 1.2x for 3 턴",
        specialName: "Witch's Icebreaker",
        captain: "Boosts ATK of INT characters by 2.5x",
        sailor: "Boosts base ATK and RCV of INT characters by 20"
    },
    646: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 턴",
        specialName: "Vanguard Breaker",
        captain: "Boosts ATK of Shooter characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Boosts base HP of STR characters by 30"
    },
    647: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 턴",
        specialName: "Vanguard Breaker",
        captain: "Boosts ATK of Shooter characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Boosts base HP of STR characters by 30"
    },
    648: {
        special: "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 턴",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Blue Flame Kick",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the 턴, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the 턴"
    },
    649: { // modified
        special: "캐릭터의 회복력x100배의 체력을 회복하고, 슬롯의 영향을 크게 만든다(2턴)",
        specialNotes: "#{orb : 1.5x}",
        specialName: "창염의 축격",
        captain: "공격 개시 전에 체력이 일정량 이상이면 [QCK]과 [PSY] 속성 캐릭터의 공격력이 2.75배가 되고 받는 데미지가 30% 감소"
    },
    650: {
        special: "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 턴",
        specialNotes: "#{fixed} #{orb : 1.5x}",
        specialName: "Thunder Lance Tempo",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
    },
    651: {
        special: "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 턴",
        specialNotes: "#{fixed} #{orb : 1.5x}",
        specialName: "Thunder Lance Tempo",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
    },
    652: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 턴",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of DEX characters by 2x if they have matching orbs"
    },
    653: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 턴",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of DEX characters by 2.25x if they have matching orbs"
    },
    654: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 턴",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of DEX characters by 2.75x if they have matching orbs"
    },
    655: {
        special: "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 턴",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Tooth Gum",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    656: {
        special: "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 턴",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Tooth Gum",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of STR characters by 2x"
    },
    657: {
        special: "Randomly changes [INT] and [PSY] orbs into either [STR] or [EMPTY] orbs",
        specialName: "Forearm Sledge",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    658: {
        special: "Randomly changes all orbs into either [INT] or [PSY] orbs",
        specialName: "Lipowertzer",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    659: {
        special: "Reduces Bind and Despair duration by 2 턴, reduces damage received by 50% for 2 턴",
        specialName: "Gum-Gum Balloon Swim",
        captain: "Boosts ATK by 2.5x after scoring 3 PERFECTs in a row"
    },
    660: {
        special: "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴",
        specialName: "Atlas Comet",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    661: {
        special: "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴",
        specialName: "Atlas Comet",
        captain: "Boosts ATK of Shooter characters by 2x, reduces cooldown of all specials by 1 턴 at the start of the fight"
    },
    662: {
        special: "Deals 13x character's ATK in PSY damage to one enemy, randomizes all orbs other than [PSY]",
        specialName: "Tornado Tempo - Beach Side",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    663: {
        special: "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each 턴 for 5 턴",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        specialName: "Vivi's Important Security Guard",
        captain: "Recovers 2x character's RCV in HP at the end of each 턴"
    },
    664: {
        special: "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each 턴 for 5 턴",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        specialName: "Vivi's Important Security Guard",
        captain: "Recovers 3x character's RCV in HP at the end of each 턴"
    },
    665: {
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 턴",
        specialName: "Let's Go! Suna Suna Clan!!",
        captain: "Boosts ATK of all characters by 1.2x, reduces HP and RCV of all characters by 80%"
    },
    666: {
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 턴",
        specialName: "Let's Go! Suna Suna Clan!!",
        captain: "Boosts ATK of all characters by 1.75x, reduces HP and RCV of all characters by 80%"
    },
    667: {
        special: "Protects from defeat as long as HP is above 50% for 1 턴",
        specialName: "King's Chopper",
        specialNotes: "#{zombie}",
        captain: "Reduces damage received by 10%, boosts ATK of all characters by 1.5x"
    },
    668: { // modified
        special: "1턴 동안 자유형 캐릭터의 공격력이 1.5배가 되고, 그 턴 내에 일당 전원이 PERFECT 공격에 성공하면 다음 턴에 자유형 캐릭터의 공격력이 2배가 된다",
        specialName: "용의 발톱",
        captain: "일당의 체력과 회복력을 조금 올리고, 공격 개시 전에 체력이 많을수록 자유형 캐릭터의 공격력이 상승한다",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    669: {
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 턴. If during that 턴 every unit scores a PERFECT hit, boosts ATK of Free Spirit characters by 2x in the following 턴.",
        specialName: "Dragon's Claw",
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    670: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 턴",
        specialName: "Fishman Karate! True Fist Thrust of the Revolutionaries",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    671: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 턴",
        specialName: "Fishman Karate! True Fist Thrust of the Revolutionaries",
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.5x"
    },
    672: {
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
        specialName: "Four Thousand Tile True Punch",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    673: {
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
        specialName: "Four Thousand Tile True Punch",
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of Fighter characters by 2x"
    },
    674: {
        special: "Removes Poison, reduces damage received by 50% for 2 턴, recovers 13x character's RCV in HP at the end of each 턴 for 2 턴",
        specialName: "Emporio Healing Hormone",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    675: { // modified
        special: "모든 독 상태를 회복, 2턴 동안 받는 데미지를 반감+턴 종료 시에 체력을 중량 회복! 그런 미라클!!",
        specialName: "엠포리오 치유 호르몬",
        captain: "자유형 캐릭터의 공격력이 2.5배가 돼욧!!!"
    },
    676: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 턴",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        specialName: "KEEP OUT",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each 턴"
    },
    677: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 턴",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        specialName: "KEEP OUT",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each 턴"
    },
    678: {
        special: "Reduces damage received by 50% for 1 턴, locks all orbs for 1 턴",
        specialName: "Cien Fleur Spider Net",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x, boosts chances of getting [PSY] orbs"
    },
    679: {
        special: "Reduces damage received by 50% for 1 턴, locks all orbs for 1 턴",
        specialName: "Cien Fleur Spider Net",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x, boosts chances of getting [PSY] orbs"
    },
    680: {
        special: "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 턴",
        specialName: "Midsummer Relax Time"
    },
    681: {
        special: "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 턴",
        specialName: "Midsummer Relax Time",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x"
    },
    682: {
        special: "Recovers a random amount of HP, reduces damage received by 50% for 2 턴",
        specialName: "Transcendental Serenity Healing"
    },
    683: {
        special: "Recovers a random amount of HP, reduces damage received by 50% for 2 턴",
        specialName: "Transcendental Serenity Healing",
        captain: "Boosts ATK and RCV of Fighter characters by 1.5x"
    },
    684: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 턴",
        specialName: "Romantic Ghost"
    },
    685: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 턴",
        specialName: "Romantic Ghost",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x"
    },
    686: {
        special: "Delays all enemies for 1 턴, recovers 3x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Captivating Perfume Dance - Relaxation",
        captain: "Boosts ATK and RCV of Slasher characters by 1.5x"
    },
    687: {
        special: "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 턴",
        specialName: "First Spear of the Battle",
        captain: "Boosts ATK of Free Spirit characters by 1.5x"
    },
    688: {
        special: "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 턴",
        specialName: "First Spear of the Battle",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Free Spirit characters by 2x"
    },
    689: {
        special: "Amplifies the effect of orbs by 1.5x for 2 턴",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Botanist's Great Discovery",
        captain: "Boosts ATK and RCV of Slasher characters by 1.2x"
    },
    690: {
        special: "Amplifies the effect of orbs by 1.5x for 2 턴",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Botanist's Great Discovery",
        captain: "Boosts ATK and RCV of Slasher characters by 1.5x"
    },
    691: {
        special: "Changes [PSY] orbs into [DEX] orbs",
        specialName: "[PSY] Slot Change [DEX]"
    },
    692: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]"
    },
    693: {
        special: "Changes [DEX] orbs into [PSY] orbs",
        specialName: "[DEX] Slot Change [PSY]"
    },
    694: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst"
    },
    695: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break"
    },
    696: {
        special: "Changes [PSY] orbs into [DEX] orbs",
        specialName: "[PSY] Slot Change [DEX]",
        captain: "Boosts ATK of Striker characters by 1.75x"
    },
    697: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]",
        captain: "Boosts ATK of Shooter characters by 1.75x"
    },
    698: {
        special: "Changes [DEX] orbs into [PSY] orbs",
        specialName: "[DEX] Slot Change [PSY]",
        captain: "Boosts ATK of Slasher characters by 1.75x"
    },
    699: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst",
        captain: "Boosts ATK of Shooter characters by 500, reduces damage received by 10%"
    },
    700: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break",
        captain: "Boosts ATK of Fighter characters by 1.75x"
    },
    701: {
        special: "Deals 15x character's ATK in PSY damage to all enemies, changes own orb into [PSY]",
        specialName: "Oimo Press",
        captain: "Boosts HP of PSY characters by 2.25x"
    },
    702: {
        special: "Seals himself for 5 턴, reduces damage received by 30% for 5 턴",
        specialName: "Kashi Swing",
        captain: "Boosts HP of INT characters by 2.25x"
    },
    703: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Arm Claw of the Watchdog"
    },
    704: {
        special: "Deals 9x character's ATK in STR damage to all enemies, reduces the defense of all enemies by 50% for 1 턴",
        specialName: "Companion's Guilt"
    },
    705: {
        special: "[PSY][INT][TND][RCV][EMPTY] 슬롯을 [STR][DEX][QCK]으로 바꾼다",
        specialName: "유죄판결 「절충해서 사형」",
        captain: "[STR][DEX][QCK] 속성 캐릭터의 공격력과 체력이 1.25배가 된다"
    },
    706: {
        special: "Changes own orb and the captain's orb into [STR]",
        specialName: "Air Door",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    707: {
        special: "Changes own orb and the captain's orb into [STR]",
        specialName: "Air Door",
        captain: "Boosts ATK and HP of STR characters by 1.5x"
    },
    708: {
        special: "Reduces Bind and Despair duration by 3 턴",
        specialName: "Cien Fleur - Wing",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x"
    },
    709: {
        special: "Reduces Bind and Despair duration by 3 턴",
        specialName: "Cien Fleur - Wing",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    710: {
        special: "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 턴, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Coup de Vent",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    711: {
        special: "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 턴, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Coup de Vent",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    712: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 턴",
        specialNotes: "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
        specialName: "Sky Knight's Javelin",
        captain: "Boosts ATK of Striker characters by 2x if HP is above 50% at the start of the 턴"
    },
    713: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 턴",
        specialNotes: "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
        specialName: "Sky Knight's Javelin",
        captain: "Boosts ATK of Striker characters by 2.5x if HP is above 50% at the start of the 턴"
    },
    714: {
        special: "Randomizes slots with [STR], [QCK], [INT] or [PSY] orbs",
        specialName: "Pegasus' Neigh"
    },
    715: {
        special: "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 턴, seals herself for 3 턴",
        specialName: "Angel's Harp - Healing",
        captain: "Boosts RCV of all characters by 2x 전투 시작 시 체력이 30% 미만이면"
    },
    716: {
        special: "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 턴, seals herself for 3 턴",
        specialName: "Angel's Harp - Healing",
        captain: "Boosts RCV of all characters by 5x 전투 시작 시 체력이 30% 미만이면"
    },
    717: { // modified
        special: "이전 턴에 적에게 준 일반 공격에 의한 총 데미지의 50%를 무 속성 데미지로 적 전체에게 준다(추가 데미지 등으로 적을 전멸시키고 다음 배틀로 이동할 시, 이전 턴에 일반 공격으로 준 총 데미지 합계치는 0으로 계산)",
        specialNotes: "The special only includes the damage inflicted through normal attacks.",
        specialName: "흑도·자전일섬",
        captain: "앞 캐릭터의 공격 타이밍에 따라 이후 참격형 캐릭터의 공격이 최소 2배, 최대 2.75배가 된다",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a PERFECT hit by 2.75x. This bonus is applied only to Slasher characters."
    },
    718: { // modified
        special: "이전 턴에 적에게 준 일반 공격에 의한 총 데미지의 50%를 무 속성 데미지로 적 전체에게 준다(추가 데미지 등으로 적을 전멸시키고 다음 배틀로 이동할 시, 이전 턴에 일반 공격으로 준 총 데미지 합계치는 0으로 계산)",
        specialNotes: "The special only includes the damage inflicted through normal attacks.",
        specialName: "흑도·자전일섬",
        captain: "앞 캐릭터의 공격 타이밍에 따라 이후 참격형 캐릭터의 공격이 최소 2배, 최대 2.75배가 된다",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a PERFECT hit by 2.75x. This bonus is applied only to Slasher characters."
    },
    719: {
        special: "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
        specialName: "Sables: Pesado",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
    },
    720: {
        special: "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
        specialName: "Sables: Pesado",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
    },
    721: {
        special: "Randomizes all orbs, including [BLOCK] orbs",
        specialName: "Screw Drop Kick",
        captain: "Boosts ATK of Fighter characters by 1.5x if HP is is above 99% at the start of the 턴"
    },
    722: {
        special: "Randomizes all orbs, including [BLOCK] orbs",
        specialName: "Screw Drop Kick",
        captain: "Boosts ATK of Fighter characters by 2x if HP is is above 99% at the start of the 턴"
    },
    723: {
        special: "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 턴",
        specialName: "Right Angle Flying Bird: Bone Phoenix",
        captain: "Boosts ATK of Slasher characters by 1.5x, recovers 1.2x character's RCV in HP at the end of each 턴"
    },
    724: {
        special: "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 턴",
        specialName: "Right Angle Flying Bird: Bone Phoenix",
        captain: "Boosts ATK of Slasher characters by 1.75x, recovers 1.5x character's RCV in HP at the end of each 턴"
    },
    725: {
        special: "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
        specialName: "Peacock String Slasher",
        captain: "Recovers 1,000 HP at the end of each 턴"
    },
    726: {
        special: "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
        specialName: "Peacock String Slasher",
        captain: "Recovers 2,000 HP at the end of each 턴"
    },
    727: {
        special: "Deals 10x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 턴",
        specialName: "Gum-Gum Gatling",
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Free Spirit and Fighter characters by 1.75x"
    },
    728: {
        special: "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Sheep Cloud Relaxing Bubbles",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x, slightly boosts chances of getting [DEX] orbs"
    },
    729: {
        special: "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Sheep Cloud Relaxing Bubbles",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x, boosts chances of getting [DEX] orbs"
    },
    730: {
        special: "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 턴",
        specialName: "Rankyaku - Lupus Fall",
        captain: "Boosts ATK and HP of INT characters by 1.2x, deals 9 HP as fixed damage to all enemies at the end of each 턴",
        captainNotes: "#{fixed}"
    },
    731: {
        special: "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 턴",
        specialName: "Rankyaku - Lupus Fall",
        captain: "Boosts ATK and HP of INT characters by 1.5x, deals 9 HP as fixed damage to all enemies at the end of each 턴",
        captainNotes: "#{fixed}"
    },
    732: {
        special: "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 턴",
        specialName: "Tekkai Dama",
        captain: "Boosts ATK of STR characters by 1.5x, reduces damage received by 10%"
    },
    733: {
        special: "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 턴",
        specialName: "Tekkai Dama",
        captain: "Boosts ATK of STR characters by 1.5x, reduces damage received by 20%"
    },
    734: {
        special: "For 1 턴, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Life Re턴 - Digestion, Absorption",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x"
    },
    735: {
        special: "For 1 턴, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Life Re턴 - Digestion, Absorption",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    736: {
        special: "Deals 20x character's ATK in STR damage to all enemies, changes [QCK] orbs into [STR] orbs",
        specialName: "Fierce Smash",
        captain: "Boosts ATK of Slasher characters by 2.5x if HP is above 50% at the start of the 턴"
    },
    737: {
        special: "Changes [RCV] orbs into [QCK] orbs, changes adjacent orbs into [QCK] orbs",
        specialName: "Shigan - Bachi",
        captain: "Boosts ATK of Fighter characters by 2.75x 전투 시작 시 체력이 30% 미만이면"
    },
    738: {
        special: "Deals 200x character's ATK in INT damage to one enemy",
        specialName: "Ivory Rush",
        captain: "Boosts ATK of characters with cost 21 or more by 2x"
    },
    739: {
        special: "Reduces Bind duration by 5 턴, randomizes all orbs",
        specialName: "Coup de Boo",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    740: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 턴",
        specialName: "Rankyaku - Sen",
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight"
    },
    741: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 턴",
        specialName: "Rankyaku - Sen",
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight"
    },
    742: {
        special: "Amplifies the effect of orbs by 1.25x for 2 턴, reduces the defense of all enemies by 80% for 2 턴",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Ramen Beam",
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x"
    },
    743: {
        special: "Amplifies the effect of orbs by 1.25x for 2 턴, reduces the defense of all enemies by 80% for 2 턴",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Ramen Beam",
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x"
    },
    744: {
        special: "Reduces damage received by 50% for 3 턴",
        specialName: "Flame Fence",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    745: {
        special: "Reduces damage received by 50% for 3 턴",
        specialName: "Flame Fence",
        captain: "Boosts ATK of Free Spirit characters by 2.5x"
    },
    746: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, protects from defeat as long as HP is above 50% for 1 턴",
        specialName: "Megalo Assault!",
        specialNotes: "#{zombie}",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}"
    },
    747: {
        special: "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 턴",
        specialName: "Rokuougan",
        captain: "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
    },
    748: {
        special: "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 턴",
        specialName: "Rokuougan",
        captain: "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
    },
    749: {
        special: "Deals random DEX damage to all enemies, randomizes all orbs",
        specialName: "Tempest Kick: Sky Slicer",
        specialNotes: "#{random : 10,000 : 90,000}",
        captain: "Boosts ATK of DEX characters by 1.5x, boosts damage of DEX specials by 1.5x",
        captainNotes: "#{noFixedPerc}"
    },
    750: {
        special: "Deals random DEX damage to all enemies, randomizes all orbs",
        specialName: "Tempest Kick: Sky Slicer",
        specialNotes: "#{random : 10,000 : 90,000}",
        captain: "Boosts ATK of DEX characters by 2x, boosts damage of DEX specials by 2x",
        captainNotes: "#{noFixedPerc}"
    },
    751: {
        special: "Reduces damage received in the next 턴 by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
        specialName: "Sheep Cloud Tidal Wave",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x"
    },
    752: {
        special: "Reduces damage received in the next 턴 by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
        specialName: "Sheep Cloud Tidal Wave",
        captain: "Boosts ATK of Cerebral characters by 2.25x and their RCV by 1.5x"
    },
    753: { // modified
        special: "적 한 명에게 캐릭터의 공격력x15배의 [QCK] 데미지를 주고, 1턴 동안 슬롯의 영향을 상당히 크게 증폭시킨다",
        specialNotes: "#{orb : 1.75x}",
        specialName: "월광십지건",
        captain: "강인형 캐릭터의 공격력이 2배가 된다"
    },
    754: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
        specialNotes: "#{orb : 1.75x}",
        specialName: "Moonlight Ten Finger Pistol",
        captain: "Boosts ATK of Powerhouse characters by 2.5x"
    },
  755: {
		special: "1턴 동안 받는 데미지를 50% 감소하고, 강인 타입 캐릭터의 공격력을 1.75배 상승",
		specialName: "「철괴」 - 륜",
		captain: "INT 캐릭터의 공격을 1.5배로 하고, PSY 캐릭터로 부터 받는 데미지를 20%감소한다."
	},
	756: { // modified
		special: "1턴 동안 받는 데미지를 반으로 줄이고, 강인형 캐릭터의 공격력이 1.75배가 된다",
		specialName: "‘철괴’ 륜",
		captain: "[INT] 캐릭터이 2배가 되고, [PSY] 캐릭터로부터 받는 데미지가 약 30% 감소"
	},
	757: {
		special: "[DEX][QCK] 슬롯을 [PSY] 슬롯으로 변환",
		specialName: "「수엄」오의 후쿠로강타 ",
		captain: "PSY 캐릭터의 공격이 2배가 된다."
	},
	758: {
		special: "[DEX][QCK] 슬롯을 [PSY] 슬롯으로 변환",
		specialName: "「수엄」오의 후쿠로강타 ",
		captain: "PSY 캐릭터의 공격을 2배로하고, 턴 종료시 이 캐릭터의 회복력 X3배의 체력을 회복한다."
	},
	759: {
		special: "슬롯을 3회 자유롭게 움직이고, 일당 전원의 슬롯을 1턴 동안 고정한다",
		specialName: "‘생·명·귀·환’ 사자 지건",
		captain: "남은 체력이 적을 때 [STR] 캐릭터의 공격력이 2.5배가 된다"
	},
	760: {
		special: "슬롯을 3회 자유롭게 이동하고, 일당의 슬롯을 1턴 고정",
		specialName: "「생명귀환」 - 사자지건",
		captain: "체력이 30%이하일때 STR 캐릭터의 공격이 3배가 된다."
	},
	761: {
		special: "적 1명에게 캐릭터의 공격 X15배의 DEX 데미지를 주고, 1턴동안 모든 속성 캐릭터의 공격을 1.2배 상승한다.",
		specialName: "고무고무 피스톨 「몬스터」",
		captain: "격투 타입 캐릭터의 공격이 2배가 된다."
	},
	762: {
		special: "1턴동안 PSY 캐릭터의 공격을 1.75배 상승",
		specialName: "임팩트 비스트",
		captain: "PSY 캐릭터의 공격과 회복이 1.5배가 된다."
	},
	763: {
		special: "자신의 슬롯을 [STR]으로 변환하고, 슬롯을 1회 자유롭게 이동",
		specialName: "변체 프랑키 켄타우로스「프랑켄」",
		captain: "STR 캐릭터의 공격이 2배가 된다."
	},
	764: {
		special: "체력을 3,000 회복",
		specialName: "도둑 고양이 「트릭」",
		captain: "타격 타입 캐릭터의 공격과 회복이 1.5배가 된다."
	},
	765: {
		special: "선장 효과 무효 상태를 3턴 회복",
		specialName: "진단 「매직」",
		captain: "턴 종료시 이 캐릭터의 회복력 X2배의 체력을 회복한다."
	},
	766: {
		special: "적 전체에 캐릭터의 공격 X7배의 QCK 데미지를 주고, 1턴간 적 공격을 지연시킨다.",
		specialName: "3도류 108번뇌하는 봉황「사신」",
		captain: "QCK 캐릭터의 공격이 2배가 된다."
	},
	767: {
		special: {
			"japan": "상단 슬롯을 [DEX]으로 변환하고, 블라인드 상태를 회복한다.",
			"global": "산단 슬롯을 [DEX]으로 변환하고,선장 효과 무효화를 1턴 회복한다."
		},
		specialName: "옥호스 플루르 「스릴러」",
		captain: "DEX 캐릭터의 공격과 회복이 1.5배가 된다."
	},
	768: {
		special: "이 캐릭터의 회복 X15배의 체력을 회복하고, [TND]슬롯을 [RCV]슬롯으로 변환",
		specialName: "온돌 스튜 「파티」",
		captain: "PSY 캐릭터의 공격이 2배가 된다."
	},
	769: {
		special: "체력을 4343회복하고, 적 전체에 독 공격",
		specialNotes: "#{poison}",
		specialName: "자장가 「공포」",
		captain: "INT 캐릭터의 공격과 회복이 1.5배가 된다."
	},
	770: {
		special: "적 1체에 캐릭터의 공격 X15배 STR 데미지를 주고, 공격 지연 상태의 적에게 주는 데미지가 1.3배 증가",
		specialName: "일점집중 「지건」",
		captain: "모험 시작시 일당의 필살 턴을 2턴 단축하고, STR 캐릭터의 공격이 2배가 된다."
	},
	771: {
		special: "적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 1턴간 박식 타입 캐릭터의 공격이 1.75배 상승",
		specialName: "공중보법 「월보」",
		captain: "박식 타입 캐릭터의 공격이 2.5배가 된다."
	},
	772: {
		special: "적 전체의 체력을 10% 줄이고, [PSY],[INT] 슬롯을 [DEX] 으로 변환",
		specialName: "8도류「맹장연격」",
		captain: "참격 타입 캐릭터의 공격을 2배로 하고, QCK 캐릭터로 부터 받는 데미지를 20% 감소한다."
	},
	773: {
		special: "1턴간 3,000을 넘는 데미지를 80% 감소시킨다.",
		specialNotes: "정확한 데미지 공식: 3000 + ((총 데미지) - 3000) * 0.2",
		specialName: "녹 녹 열매",
		captain: "받는 데미지를 20% 감소한다."
	},
	774: {
		special: "[TND], [RCV], [EMPTY], [BLOCK],[BOMB] 슬롯을 [STR], [DEX], [QCK], [PSY], [INT] 슬롯으로 변환하고, 슬롯을 3회 자유롭게 이동",
		specialName: "베리베리 열매",
		captain: "자유 타입 캐릭터의 공격이 2배가 된다."
	},
	775: {
		special: "적 1체에 일당 체력이 적을수록 PSY 큰 데미지",
		specialName: "분노의 박치기",
		captain: "박식 타입 캐릭터의 공격과 체력을 1.5배가 된다."
	},
	776: {
		specialName: "활기넘치는 럭키샷!!",
		special: "체력을 5,000 회복하고, 적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 자신은 3턴간 봉인",
		captain: "PSY 캐릭터의 공격과 회복이 1.25배가 된다."
	},
	777: {
		special: "체력을 5,000 회복하고, 적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 자신은 3턴간 봉인",
		specialName: "활기넘치는 럭키샷!!",
		captain: "PSY 캐릭터의 공격과 회복이 1.75배가 된다."
	},
	778: {
		special: "적 1체에 일당 체력이 적을수록 QCK 큰 데미지를 주고, 자신의 슬롯을 [QCK] 변환",
		specialName: "무패의 검기",
		captain: "받는 데미지를 20% 감소한다."
	},
	779: {
		special: "적 1체에 일당 체력이 적을수록 QCK 큰 데미지를 주고, 자신의 슬롯을 [QCK] 변환",
		specialName: "무패의 검기",
		captain: "받는 데미지를 25% 감소한다."
	},
	780: {
		special: "1턴간 자신의 공격력을 남은 체력에 따라 상승",
		specialNotes: "남은체력이 50%이상일때: 1.5배, 20%이상 50%미만일때: 1.75배, 20%미만일때: 2배",
		specialName: "계명의 귀신화",
		captain: "남은 체력이 30%이하일때 일당의 공격이 2배가 된다."
	},
	781: {
		special: "1턴간 자신의 공격력을 남은 체력에 따라 상승",
		specialNotes: "남은체력이 50%이상일때: 1.5배, 20%이상 50%미만일때: 1.75배, 20%미만일때: 2배",
		specialName: "계명의 귀신화",
		captain: "남은 체력이 30%이하일때 일당의 공격이 2.5배가 된다."
	},
	782: {
		special: "적 전체 공격을 1턴 지연시키고, 체력을 랜덤으로 소량 회복",
		specialName: "화조풍월 미소",
		captain: "참격 타입 캐릭터의 회복이 1.5배가 된다."
	},
	783: {
		special: "적 전체 공격을 1턴 지연시키고, 체력을 랜덤으로 소량 회복",
		specialName: "화조풍월 미소",
		captain: "참격 타입 캐릭터의 공격이 2배, 회복이 1.5배가 된다."
	},
	784: {
		special: "선장 효과 무효화 상태를 2턴 회복, 블라인드를 완전히 회복",
		specialName: "칠칠맞은 딸을 꾸짖다"
	},
	785: {
		special: "선장 효과 무효화 상태를 2턴 회복, 블라인드를 완전히 회복",
		specialName: "칠칠맞은 딸을 꾸짖다",
		captain: "받는 데미지를 20% 감소한다."
	},
	786: {
		special: "자신을 10턴 봉인하고, 적 전체 공격을 1턴 지연시키고, 4턴동안 받는 데미지를 반감",
		specialName: "결사의 각오!「오픈 마인드」"
	},
	787: { // modified
		special: "자신을 10턴 동안 봉쇄 상태로 만들고, 적 전체를 1턴 지연시키며, 4턴 동안 받는 데미지를 반으로 줄인다",
		specialName: "결사의 각오! ‘오픈 마인드’",
		captain: "받는 데미지가 반으로 줄지만, 턴 종료 시에 일당의 체력이 10% 감소한다"
	},
	788: { // modified
		special: "필살기 발동 턴 내에 일당 전원이 PERFECT 공에 성공하면 다음 턴에 참격형 캐릭터의 공격력이 1.75배가 된다",
		specialName: "소녀검사의 진검승부"
	},
	789: {
		special: "필살기 발동 턴 에 일당 전원 PERFECT 공격 성공시 다음턴에 참격 타입의 공격이 1.75배 상승",
		specialName: "소녀검사의 진검승부",
		captain: "참격 타입 캐릭터의 공격이 1.5배가 된다."
	},
	790: {
		special: "적 1체에 캐릭터의 공격 X3배 QCK 데미지를 주고, 3턴간 STR, DEX, QCK 캐릭터의 공격을 1.2배 상승",
		specialName: "출동!! 우솝 해적단"
	},
	791: {
		special: "적 1체에 캐릭터의 공격 X3배 QCK 데미지를 주고, 3턴간 STR, DEX, QCK 캐릭터의 공격을 1.2배 상승",
		specialName: "출동!! 우솝 해적단",
		captain: "STR, DEX, QCK 캐릭터의 체력,공격,회복이 1.25배가 된다."
	},
	792: {
		special: "랜덤으로 [STR], [QCK], [DEX], [PSY], [INT]으로 변환하고, 2회 슬롯을 자유롭게 이동하고, 1턴 슬롯 고정",
		specialName: "솜씨좋은 장인을 통솔하는 열정"
	},
	793: {
		special: "랜덤으로 [STR], [QCK], [DEX], [PSY], [INT]으로 변환하고, 2회 슬롯을 자유롭게 이동하고, 1턴 슬롯 고정",
		specialName: "솜씨좋은 장인을 통솔하는 열정",
		captain: "박식 타입 캐릭터의 공격과 회복이 1.5배가 된다."
	},
	794: {
		special: "적 전체의 임의의 대상에 10회 무작위INT 데미지를 주고, 적 공격을 1턴 지연",
		specialName: "고무고무 폭풍우",
		captain: "강인타입 캐릭터의 공격을 3배가 되지만 턴 경과마다 체력이 10% 감소, 공격이 0.1배 감소한다.",
		captainNotes: "처음 던전 입장시 3배, 첫턴 경과시 2.9배, 두번째턴 2.8배 최소 1배까지 감소."
	},
	795: {
		special: "적 전체의 임의의 대상에 10회 무작위INT 데미지를 주고, 적 공격을 1턴 지연",
		specialName: "고무고무 폭풍우",
		captain: "강인타입 캐릭터의 공격을 3.5배가 되지만 턴 경과마다 체력이 10% 감소, 공격이 0.1배 감소한다.",
		captainNotes: "처음 던전 입장시 3배, 첫턴 경과시 2.9배, 두번째턴 2.8배 최소 1배까지 감소."
	},
	796: {
		special: "3턴간 자슬롯 출현율이 약간 상승하고 자신의 공격력이 1턴간 1.75배 상승",
		specialName: "페토페토 열매, 최강의 힘",
		captain: "박식 타입 캐릭터의 공격이 2배가 된다."
	},
	797: {
		special: "3턴간 자슬롯 출현율이 약간 상승하고 자신의 공격력이 1턴간 1.75배 상승",
		specialName: "페토페토 열매, 최강의 힘",
		captain: "박식 타입 캐릭터와 강인 타입 캐릭터의 공격이 2배가 된다."
	},
	798: {
		special: "독, 맹독 상태를 회복하고, 이 턴에 일당 전원 PERFECT 공격이 성공하면 다음 턴에 격투 타입 캐릭터의 공격이 1.75배 상승",
		specialName: "듀공 오의! 흑 지느러미 권",
		captain: "3연속 PERFECT 이후 일당의 공격력이 2.5배가 된다."
	},
	799: {
		special: "슬롯을 랜덤으로 교체하고, 캐릭터의 회복 X9배 체력을 회복",
		specialName: "해수 힐링"
	},
	800: {
		special: "모든 슬롯을 [STR], [DEX], [QCK] 으로 변환",
		specialName: "옥토퍼스 텐타클 블로"
	},
	801: {
		special: "[STR], [QCK], [DEX], [INT], [BOMB], [BLOCK] 슬롯을 [STR], [QCK], [DEX], [PSY], [INT] 슬롯으로 랜덤 교체, [TND], [RCV] 슬롯을 [PSY] 으로 교체",
		specialName: "흉내흉내 몽타주",
		captain: "PSY 캐릭터의 공격이 2배가 된다."
	},
	802: {
		special: "[STR], [QCK], [DEX], [INT], [BOMB], [BLOCK] 슬롯을 [STR], [QCK], [DEX], [PSY], [INT] 슬롯으로 랜덤 교체, [TND], [RCV] 슬롯을 [PSY] 으로 교체",
		specialName: "흉내흉내 몽타주",
		captain: "PSY 캐릭터의 공격이 2.5배가 된다."
	},
	803: {
		special: "적 전체의 임의의 대상에 8회 DEX 랜덤 데미지를 주고, 3턴간 일당의 공격이 1.1배 상승",
		specialName: "흑창의 진「총 공격!」",
		captain: "DEX 캐릭터의 공격과 회복이 1.2배가 된다."
	},
	804: {
		special: "적 전체의 임의의 대상에 8회 DEX 랜덤 데미지를 주고, 3턴간 일당의 공격이 1.1배 상승",
		specialName: "흑창의 진「총 공격!」",
		captain: "DEX 캐릭터의 공격과 회복이 1.5배가 되고, 턴 종료시 캐릭터 공격 X1배의 DEX 데미지를 추가로 준다."
	},
	805: {
		special: "체력을 20% 줄이고, 감소 값의 X10배의 INT 데미지를 주고, 1턴동안 슬롯 영향을 1.75배 확대",
		specialName: "화이트 바인",
		captain: "타격 타입 캐릭터의 공격이 2배가 된다.",
	},
	806: {
		special: "체력을 20% 줄이고, 감소 값의 X10배의 INT 데미지를 주고, 1턴동안 슬롯 영향을 1.75배 확대",
		specialName: "화이트 바인",
		captain: "타격 타입 캐릭터의 공격이 2배가 되고, 남은 체력이 적을수록 받는 데미지를 최대 30%까지 감소한다.",
	},
	807: {
		captain: "박식 타입 캐릭터의 공격과 회복이 1.5가 된다.",
		specialName: "썬더 챠지「풍속계」",
		special: "적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 3턴간 방어력 다운된 적에게 주는 데미지가 1.3배 상승"
	},
	808: {
		captain: "박식 유형 캐릭터의 공격과 회복이 1.5배이 되고, 턴 종료시 체력을 캐릭터의 회복 X2배 회복한다.",
		specialName: "썬더 챠지「풍속계」",
		special: "적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 3턴간 방어력 다운된 적에게 주는 데미지가 1.3배 상승"
	},
	809: {
		captain: "강인 타입 캐릭터의 공격과 회복이 1.5배가 된다.",
		specialName: "로라 어택 찬스",
		special: "1턴간 적 전체의 방어력을 80% 감소하고, 슬롯 영향을 1.5배 확대",
	},
	810: {
		captain: "강인 타입 캐릭터의 공격이 2배, 회복이 1.5배가 되고, 턴 종료시 체력이 10%씩 감소한다.",
		specialName: "로라 어택 찬스",
		special: "1턴간 적 전체의 방어력을 80% 감소하고, 슬롯 영향을 1.5배 확대",
	},
	811: {
		specialName: "엉뚱한 선물",
		special: "자신의 슬롯을 DEX 변환하고, 슬롯을 1회 자유롭게 이동"
	},
	812: {
		specialName: "지옥의 울음소리",
		special: "1턴동안 적 전체의 방어력을 격감"
	},
	813: {
		specialName: "끈적끈적 거미줄",
		special: "적 전체 공격을 1턴 지연시키고, 1턴동안 슬롯 영향을 1.25배 상승",
	},
	814: {
		specialName: "카펫 스크래치",
		special: "적 1체에 캐릭터의 공격 X13배 DEX 데미지를 주고, 선장슬롯 [TND]로 변환"
	},
	815: {	
		captain: "STR > INT > DEX 캐릭터 순서로 GOOD 이상의 공격이후 일당의 공격력이 2.5배가 된다.",
		specialName: "브릭 배트",
		special: "적 전체의 임의의 대상에 10회 5000 고정데미지를 준다.",
	},
	816: {
		captain: "STR > INT > DEX 캐릭터 순서로 GOOD 이상의 공격이후 일당의 공격력이 2.75배가 된다.",
		specialName: "브릭 배트",
		special: "적 전체의 임의의 대상에 10회 5000 고정데미지를 준다.",
	},
	817: {
		specialName: "[심] 슬롯 체인지[힘]",
		special: "[PSY] 슬롯을 [STR] 슬롯으로 변환"
	},
	818: {
		specialName: "퀵 체인지",
		special: "슬롯을 1회 자유롭게 이동"
	},
	819: {
		specialName: "하이퍼 버스트",
		special: "적 전체에 캐릭터의 공격 X13배 [DEX] 데미지를 준다."
	},
	820: {
		specialName: "[TND] 슬롯 체인지[지]",
		special: "[TND]슬롯을 [INT]슬롯으로 변환"
	},
	821: {
		specialName: "슬롯 셔플",
		special: "랜덤으로 슬롯을 교체"
	},
	822: {
		specialName: "힐링 업",
		special: "3턴간 일당의 회복력을 +100증가"
	},
	823: {
		specialName: "슬롯 레이트 업[INT]",
		special: "3턴간 [INT] 슬롯 출현율을 약간 상승"
	},
	824: {
		specialName: "오토 리페어",
		special: "5턴동안 턴 종료시 캐릭터의 회복 X3배 체력을 회복"
	},
	825: {
		captain: "STR 캐릭터의 공격과 체력이 1.5배가 된다.",
		specialName: "고대기사의 에너지",
		special: "1턴동안 STR 캐릭터의 공격을 +200 상승"
	},
	826: {
		captain: "DEX 캐릭터의 공격과 체력이 1.5배가 된다.",
		specialName: "고대기사의 약점",
		special: "적 전체 공격을 1턴 지연시키고, 2턴간 일당의 공격을 80% 감소"
	},
	827: {
		captain: "QCK 캐릭터의 공격과 체력이 1.5배가 된다.",
		specialName: "고대기사의 해독",
		special: "999턴간 독, 맹독 상태의 적에게 주는 데미지가 1.05배가 된다."
	},
	828: {
        specialName: "기습 찌르기",
        special: "적 1체에 캐릭터의 공격 X3배 [PSY] 데미지를 주고, 필살 발동시 체력이 20% 이하일때 참격, 야심 타입의 공격을 1.75배 상승",
        captain: "체력이 50%이상일때, 공격을 받아도 죽지 않는다.",
	},

	829: {
        specialName: "기습 찌르기",
        special: "적 1체에 캐릭터의 공격 X3배 [PSY] 데미지를 주고, 필살 발동시 체력이 20% 이하일때 참격, 야심 타입의 공격을 1.75배 상승",
        captain: "체력이 50%이상일때, 일정 이상 공격을 받아도 죽지 않는다.",
	},
	830: {
		captain: "박식타입과 타격타입의 공격이 1.75배가 되고, 턴 종료시 적으로부터 받은 데미지의 2배를 DEX 데미지를 준다",
		specialName: "천명의 단죄",
		special: "상단 슬롯을 [STR], 중단 슬롯을 [DEX], 하단 슬롯을 [QCK] 으로 변환"
	},
	831: {
		captain: "박식타입과 타격타입의 공격이 2배가 되고, 턴 종료시 적으로부터 받은 데미지의 5배를 DEX 데미지를 준다",
		specialName: "천명의 단죄",
		special: "상단 슬롯을 [STR], 중단 슬롯을 [DEX], 하단 슬롯을 [QCK] 으로 변환"
	},
	832: {
		captain: "체력이 적을수록 자유 타입 캐릭터의 공격이 최대 2.5배가 되고, 턴 종료시 현재 체력의 10%씩 감소한다.",
		specialName: "번 바주카",
		special: "1턴간 자유 타입 캐릭터의 공격이 1.5배 상승하고, 캐릭터의 공격 X15배 STR 데미지",
	},
	833: {
		captain: "체력이 적을수록 자유 타입 캐릭터의 공격이 최대 2.75배가 되고, 턴 종료시 현재 체력의 10%씩 감소한다.",
		specialName: "번 바주카",
		special: "1턴간 자유 타입 캐릭터의 공격이 1.5배 상승하고, 캐릭터의 공격 X15배 STR 데미지",
	},
	834: {
		captain: "사격 타입 캐릭터의 공격과 회복이 1.5배가 된다.",
		specialName: "노란총과 개굴개굴총",
		special: "자신의 슬롯을 [QCK]으로 선장의 슬롯을 [PSY]으로 교체한다."
	},
	835: {
		captain: "박식 타입 캐릭터의 공격과 체력이 2배가 된다.",
		specialName: "밀쳐내기 압력포",
		special: "[RCV], [TND], [EMPTY], [BLOCK], [BOMB] 슬롯을 자슬롯으로 변환하고, 1턴동안 슬롯 영향을 1.75배 상승",
	},
	836: {
		captain: "박식 타입 캐릭터의 공격과 체력이 2배가 되고, 적으로부터 받은 데미지의 5배를 턴 종료시 적 전체에 STR 데미지를 준다.",
		specialName: "밀쳐내기 압력포",
		special: "[RCV], [TND], [EMPTY], [BLOCK], [BOMB] 슬롯을 자슬롯으로 변환하고, 1턴동안 슬롯 영향을 1.75배 상승",
	},
	837: {
		captain: "야심 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "가스 로브",
		special: "적 전체에 독 공격을 하고, 2턴간 야심 타입 캐릭터의 공격이 1.75배 상승",
	},
	838: { // modified
		captain: "야심형 캐릭터의 공격력이 2.5배가 된다",
		specialName: "가스 로브",
		special: "적 전체를 중독시키고, 2턴 동안 야심형 캐릭터의 공격력이 1.75배가 된다"
	},
	839: {
		captain: "타격 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "귀죽 (귀신대나무)",
		special: "자신의 슬롯을 [INT]으로 변환하고, 1턴간 자신의 공격을 2배 상승하고, 적 1체에 캐릭터의 공격 X15배의 INT 데미지"
	},
	840: {
		captain: "타격 타입 캐릭터의 공격이 2.5배가 된다.",
		specialName: "귀죽 (귀신대나무)",
		special: "자신의 슬롯을 [INT]으로 변환하고, 1턴간 자신의 공격을 2배 상승하고, 적 1체에 캐릭터의 공격 X15배의 INT 데미지"
	},
	841: { // modified
		captain: "턴 종료 시 체력을 회복력x3배 회복하고, 전 전체에 공격력x3배의 PSY 데미지를 준다",
		specialName: "눈토끼",
		special: "적 전체 공격을 1턴 지연시키고, 2턴 동안 지연된 적에게 주는 데미지가 1.25배가 된다"
	},
	842: { // modified
		captain: "턴 종료 시 체력을 회복력x5배 회복하고, 전 전체에게 공격력x5배의 데미지를 준다",
		specialName: "눈토끼",
		special: "적 전체의 공격을 1턴 지연시키고, 2턴 동안 지연된 적에게 주는 데미지가 1.25배가 된다"
	},
	843: {
		captain: "참격, 타격 타입 캐릭터의 공격이 1.5배가 된다.",
		specialName: "무기변모 「미사일 소녀」",
		special: "적 전체에 캐릭터의 공격 X15배 STR 데미지를 주고, 1턴간 사격 타입 캐릭터의 공격을 1.5배 상승. 필살기 사용 턴에 일당 전원 PERFECT 공격 성공시 다음턴에 사격, 참격, 타격 타입 캐릭터의 공격을 1.5배 상승"
	},
	844: {
		captain: "참격, 타격 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "무기변모 「미사일 소녀」",
		special: "적 전체에 캐릭터의 공격 X15배 STR 데미지를 주고, 1턴간 사격 타입 캐릭터의 공격을 1.5배 상승. 필살기 사용 턴에 일당 전원 PERFECT 공격 성공시 다음턴에 사격, 참격, 타격 타입 캐릭터의 공격을 1.5배 상승"
	},
	845: {
		captain: "콤보수가 11이상 시점에서 1.5배, 22이상 시점에서 2.5배 공격력이 상승한다.",
		specialName: "돌풍 「마타사부로 (又三郎)」",
		special: "자신의 슬롯을 [QCK] 으로 변환하고, 다른 슬롯을 랜덤으로 변환"
	},
	846: {
		captain: "콤보수가 11이상 시점에서 1.5배, 22이상 시점에서 2.5배, 30이상 시점에서 2.75배, 40이상 시점에서 3.5배 공격력이 상승한다.",
		specialName: "돌풍 「마타사부로 (又三郎)」",
		special: "자신의 슬롯을 [QCK] 으로 변환하고, 다른 슬롯을 랜덤으로 변환",
        limit: [
            { "description": "체력 상승 : 10" },
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 60" },
            { "description": "체력 상승 : 70" },
            { "description": "선원효과 추가 1: 모든 캐릭터의 공격력을 30 상승시킨다." },
            { "description": "체력 상승 : 80" },
            { "description": "공격력 상승 : 100" },
            { "description": "선원효과 추가 2: [DEX] 캐릭터에 대항하여 공격력이 2배 상승한다." },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]
    },
    847: {
		captain: "체력이 30% 이하일때 일당의 공격이 1.5배가 된다.",
		specialName: "튼튼한 선박「진수 (進水)」",
		special: "선장 효과 무효화 상태를 5차례 회복하고, 3턴간 일당의 공격을 1.05배 상승, 슬롯 영향 1.15배 확대, 데미지 10%감소, 턴 종료시 캐릭터의 회복 X2배 체력을 회복한다.",
	},
	848: {
		captain: "체력이 30% 이하일때 일당의 공격이 2배가 된다.",
		specialName: "튼튼한 선박「진수 (進水)」",
		special: "선장 효과 무효화 상태를 5차례 회복하고, 3턴간 일당의 공격을 1.05배 상승, 슬롯 영향 1.15배 확대, 데미지 10%감소, 턴 종료시 캐릭터의 회복 X2배 체력을 회복한다.",
	},
	849: {
		captain: "사격 타입 캐릭터의 공격이 1.75배가 된다.",
		specialName: "배틀 프랑키 9호",
		special: "적 전체 랜덤 대상에게 5회 랜덤 STR 데미지를 주고, 2턴간 적 전체의 방어력을 50%감소"
	},
	850: {
		captain: "타격 타입과 박식 타입 캐릭터의 공격이 1.5배가 된다.",
		specialName: "열혈장인의 일류 어시스트",
		special: "슬롯을 오른쪽 상단 [DEX], 오른쪽 중단 [STR], 오른쪽 하단 [QCK] 으로 변환하고, 자신은 3턴간 봉인된다."
	},
	851: {
		captain: "야심 타입 캐릭터의 공격이 1.5배가 된다.",
		specialName: "설국명물『설화장(雪化粧)』",
		special: "적 1체에 캐릭터의 공격 X20배 속성 데미지를 주고, 슬롯을 1턴 고정한다."
	},
	852: {
		captain: "야심 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "설국명물『설화장(雪化粧)』",
		special: "적 1체에 캐릭터의 공격 X20배 속성 데미지를 주고, 슬롯을 1턴 고정한다."
	},
	853: {
		specialName: "롭슨 『진심모드』",
		special: "필살기 발동 턴에 일당 전원 PERFECT 공격 성공시 다음턴에 3턴동안 강인 타입, 격투 타입 캐릭터의 공격을 1.2배 상승한다."
	},
	854: {
		captain: "DEX 캐릭터의 공격이 1.5배가 되고, 받는 데미지가 10% 감소된다.",
		specialName: "모피 강화『겨울 코트』",
		special: "3턴간 받는 데미지를 50% 감소하고, [DEX] 슬롯 출현율이 약간 상승한다."
	},
	855: {
		captain: "참격 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "샴블즈 『세레모니』",
		special: "선장의 슬롯을 [RCV]슬롯으로 변환하고, 캐릭터의 회복 X15배의 체력을 회복한다."
	},
	856: {
		captain: "참격 타입 캐릭터의 공격이 2.5배가 된다.",
		specialName: "샴블즈 『세레모니』",
		special: "선장의 슬롯을 [RCV]슬롯으로 변환하고, 캐릭터의 회복 X15배의 체력을 회복한다."
	},
	857: {
		captain: "PSY 캐릭터의 공격이 2배가 된다.",
		specialName: "보니의 진수성찬 타임",
		special: "인접한 슬롯을 [RCV]슬롯으로 변환하고, 1턴간 PSY 캐릭터의 회복을 1.5배 상승"
	},
	858: {
		captain: "PSY 캐릭터의 공격과 회복이 2배가 된다.",
		specialName: "보니의 진수성찬 타임",
		special: "인접한 슬롯을 [RCV]슬롯으로 변환하고, 1턴간 PSY 캐릭터의 회복을 1.5배 상승"
	},
	859: {
		captain: "야심 타입 캐릭터의 공격이 1.5배가 되고, 체력이 적을때 받는 데미지를 최대 10%감소한다.",
		specialName: "목숨을 건 중재",
		special: "인접한 슬롯을 [RCV]슬롯으로 변환하고 필살기 발동시 체력이 50% 이상일때 일정 이상 공격을 받아도 죽지 않는다.",
	},
	860: {
		captain: "야심 타입 캐릭터의 공격이 2배가 되고, 체력이 적을때 받는 데미지를 최대 30%감소한다.",
		specialName: "목숨을 건 중재",
		special: "인접한 슬롯을 [RCV]슬롯으로 변환하고 필살기 발동시 체력이 50% 이상일때 일정 이상 공격을 받아도 죽지 않는다.",
	},
	861: {
		specialName: "매혹의 아름다운 쇠방망이",
		special: "적 1체에 캐릭터의 공격 X13배 QCK 데미지를 주고, 1턴간 받는 데미지를 75% 감소하고, 슬롯 영향을 1.5배 확대",
		captain: "받는 데미지를 10% 감소한다."
	},
	862: {
		captain: "QCK 캐릭터의 공격이 2배가 되고, 받는 데미지를 10% 감소한다.",
		specialName: "매혹의 아름다운 쇠방망이",
		special: "적 1체에 캐릭터의 공격 X13배 QCK 데미지를 주고, 1턴간 받는 데미지를 75% 감소하고, 슬롯 영향을 1.5배 확대",
	},
	863: {
		captain: "QCK 캐릭터의 공격이 1.75배가 되고, 턴 종료시 캐릭터의 회복 X2배 만큼 체력을 회복한다.",
		specialName: "스노우 크리스탈 크리마 택트",
		special: "2턴간 적 전체의 방어력을 50%감소하고, 적 전체의 공격을 10% 감소시킨다."
	},
	864: {
		captain: "자유 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "슬레이브 에로우",
		special: "2턴간 체인계수를 2.5배로 고정시키고, 적 전체 공격을 1턴간 지연시킨다."
	},
	865: { // modified
		captain: "자유형 캐릭터의 공격력과 체력이 2배가 된다",
		specialName: "슬레이브 에로우",
		special: "2턴 동안 체인 계수가 2.5배로 고정, 적 전체의 공격을 1턴 지연시킨다"
	},
	866: {
		captain: "박식 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "시엔 플루르 윙 『화(華)』",
		special: "2턴간 참격, 박식 타입 캐릭터의 공격을 1.3배 상승하고, 봉인 상태를 2턴 회복"
	},
	867: {
		captain: "콤보 수가 12이상 시점에서 일당의 공격이 1.5배가 된다.",
		specialName: "타바스코 별 『격(撃)』",
		special: "적 전체 공격을 2턴간 지연시키고, 적 전체에 캐릭터의 공격 X9배 DEX 데미지를 준다."
	},
	868: {
		captain: "일당의 공격이 1.2배가 되고,턴 종료후 체력을 1000회복한다.",
		specialName: "중량 강화 헤비 공『수(獣)』",
		special: "적 1체에 캐릭터의 공격 X15배 STR 데미지를 주고, 봉인 상태를 3턴 회복"
	},
	869: { // modified
		captain: "PERFECT 이외의 공격을 할 때까지 야심형 캐릭터의 공격력이 3배가 된다.",
		specialName: "영기사",
		special: "인접한 캐릭터의 슬롯을 속성이 일치하는 슬롯으로 바꾸고, 1턴 동안 슬롯의 영향이 두 배가 된다",
	},
	870: { // modified
		captain: "PERFECT 이외의 공격을 할 때까지 야심형 캐릭터의 공격력이 3배가 된다.",
		specialName: "블랙 나이트",
		special: "인접한 캐릭터의 슬롯을 속성이 일치하는 슬롯으로 바꾸고, 1턴 동안 슬롯의 영향이 두 배가 된다",
	},
	871: { // modified
		captain: "[QCK] 속성 캐릭터의 공격력과 회복력이 1.5배가 된다",
		specialName: "하비하비 열매",
		special: "체력이 적게 남은 적을 모두 전투 불능 상태가 된다",
//		specialNotes: "이 능력은 적의 방어력을 무시하고, 적 체력을 0으로 만든다."
	},
	872: {
		captain: "QCK 캐릭터의 공격과 회복이 2배가 된다.",
		specialName: "하비하비 열매",
		special: "체력이 20%이하 인 적 전체를 전투불능으로 만든다.",
		specialNotes: "이 능력은 적의 방어력을 무시하고, 적 체력을 0으로 만든다."
	},
	873: {
		captain: "체력이 30% 이하일때 격투 타입 캐릭터의 공격이 2.5배가 된다.",
		specialName: "냥냥 수윔(Swim)",
		special: [
			{
				"description": "자신의 슬롯을 [PSY]으로 변환하고, 1턴간 슬롯 영향을 1.5배 확대",
				"cooldown": [
					13,
					8
				]
			},
			{
				"description": "자신의 슬롯을 [PSY]으로 변환하고, 1턴간 슬롯 영향을 1.75배 확대",
				"cooldown": [
					19,
					14
				]
			}
		],
	},
	874: { // modified
		captain: "남은 체력이 적을 때 격투형 캐릭터의 공격력이 3배가 되지만, 나 어린애는 사양이라고",
		specialName: "냥냥 헤엄",
		special: [
			{
				"description": "자신의 슬롯을 [PSY]으로 바꾸고, 1턴 동안 일당의 슬롯의 영향을 증폭시킨다",
				"cooldown": [
					13,
					8
				]
			},
			{
				"description": "자신의 슬롯을 [PSY]으로 바꾸고, 1턴 동안 일당의 슬롯의 영향을 상당히 증폭시킨다",
				"cooldown": [
					19,
					14
				]
			}
		],
	},
	875: {
		captain: "박식, 야심 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "찐득찐득 런처",
		special: "선장의 슬롯을 자슬롯으로 변환하고, 1턴간 슬롯을 고정하고, 캐릭터의 공격 X13배 INT 데미지를 준다."
	},
	876: {
		captain: "박식, 야심 타입 캐릭터의 공격이 2.25배가 되고, 박식과 야심타입 캐릭터는 [TND], [RCV] 슬롯을 유리한 슬롯으로 취급한다.",
		captainNotes: "유리한 슬롯은 자슬롯과 같은 슬롯효과이다.",
		specialName: "찐득찐득 런처",
		special: "선장의 슬롯을 자슬롯으로 변환하고, 1턴간 슬롯을 고정하고, 캐릭터의 공격 X13배 INT 데미지를 준다."
	},
	877: {
		captain: "모험에서 모은 적립 베리가 2배가 된다.",
		specialName: "헤븐즈 도 아트(Heaven's Do Art)",
		special: "2턴간 적이 가하는 2000을 넘는 부분의 데미지를 88%감소",
		specialNotes: "정확한 데미지 공식: 2000 + ((총 데미지) - 2000) * 0.12"
	},
	878: {
		captain: "일당의 공격이 1.5배가 되고, 모험에서 모은 적립 베리가 2배가 된다.",
		specialName: "헤븐즈 도 아트(Heaven's Do Art)",
		special: "2턴간 적이 가하는 2000을 넘는 부분의 데미지를 88%감소",
		specialNotes: "정확한 데미지 공식: 2000 + ((총 데미지) - 2000) * 0.12"
	},
	879: {
		captain: "모험을 시작할때 필살턴을 2턴 단축하고, 격투 타입 캐릭터의 공격이 1.75배가 된다.",
		specialName: "전투보권 만귀해소(戦闘保拳 満鬼解焼)",
		special: "[BLOCK] 슬롯 포함한 모든슬롯을 [G]슬롯으로 변환하고, 적 전체에 랜덤 무속성 큰 데미지를 준다.",
	},
	880: { // modified
		captain: "모험을 시작할 때 필살 턴을 3턴 단축하고, 격투형 캐릭터의 공격력이 2배가 된다",
		specialName: "전투보권 만귀해소(戦闘保拳 満鬼解焼)",
		special: "[BLOCK] 슬롯을 포함하여 모든 슬롯을 [G] 슬롯을 바꾸고, 적 전체에게 랜덤 무 속성 큰 데미지",
	},
	881: {
		captain: "Good > Great > PERFECT 순서로 공격이후 사격과 자유 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "싸우는 음악『투쟁의 체킷아웃(check it out)』",
		special: "2턴간 받는 데미지가 2배, 회복력이 90%감소 되지만, 사격과 자유 타입 캐릭터의 공격력이 1턴간 1.75배 상승한다."
	},
	882: {
		captain: "Good > Great > PERFECT 순서로 공격이후 사격과 자유 타입 캐릭터의 공격이 3배가 된다.",
		specialName: "싸우는 음악『투쟁의 체킷아웃(check it out)』",
		special: "2턴간 받는 데미지가 2배, 회복력이 90%감소 되지만, 사격과 자유 타입 캐릭터의 공격력이 1턴간 1.75배 상승한다."
	},
	883: {
		captain: "강인 타입 캐릭터의 공격과 체력이 1.25배가 된다.",
		specialName: "패국",
		special: "적 전체에 캐릭터의 공격 X20배 INT 데미지를 주고, 1턴간 강인 타입 캐릭터의 공격이 1.5배 상승, 동일턴에 이미 \"패국\"스킬이 발동되어 있을경우 공격이 2배 상승"
	},
	884: {
		captain: "강인 타입 캐릭터의 공격과 체력이 1.5배가 된다.",
		specialName: "패국",
		special: "적 전체에 캐릭터의 공격 X20배 INT 데미지를 주고, 1턴간 강인 타입 캐릭터의 공격이 1.5배 상승, 동일턴에 이미 \"패국\"스킬이 발동되어 있을경우 공격이 2배 상승"
	},
	885: {
		captain: "격투 타입 캐릭터의 공격이 2배가되고 받는 데미지가 10% 감소된다.",
		specialName: "당초 기와 정권 『태양』",
		special: "적 전체의 체력을 10% 줄이고, 스킬 발동시 일당의 체력이 30% 이하일때 격투 타입 캐릭터의 공격이 1.5배 상승"
	},
	886: {
		captain: "모험 시작시 필살 턴을 1턴 줄이고, 참격 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "스파클링 데이지",
		special: "적 전체에 캐릭터의 공격 X15배 STR 데미지를 주고, 필살 발동시 일당의 체력이 30% 이하일때 참격 타입 캐릭터의 공격이 1.5배 상승"
	},
	887: {
		captain: "야심 타입 캐릭터의 공격이 1.5배가 되고, 모험에서 모은 적립 베리가 1.2배가 된다.",
		specialName: "특제 버기 탄",
		special: "1턴간 적 전체의 방어력을 80%감소시키고, 적 전체에 캐릭터의 공격 X15배 QCK 데미지를 준다."
	},
	888: {
		specialName: "네거티브 고스트",
		special: "3턴간 적 전체의 공격을 10% 줄인다.",
		specialNotes: "필살기에는 적용되지 않는다."
	},
	889: {
		captain: "DEX 캐릭터의 공격과 회복이 1.2배가 된다.",
		specialName: "고스트 랩",
		special: "[STR] 슬롯을 [DEX] 으로 변환하고, 적 전체에 캐릭터의 공격 X10배 DEX 데미지를 준다."
	},
	890: {
		captain: "DEX 캐릭터의 공격과 회복이 1.5배가 된다.",
		specialName: "고스트 랩",
		special: "[STR] 슬롯을 [DEX] 으로 변환하고, 적 전체에 캐릭터의 공격 X10배 DEX 데미지를 준다."
	},
	891: {
		captain: "강인 타입 캐릭터의 공격과 체력이 1.75배가 된다.",
		specialName: "사자의 소생",
		special: "1턴간 받는 데미지를 50% 감소하고, 강인 타입 캐릭터의 공격이 1.5배 상승",
		},
	892: {
		captain: "체인 계수 증가량이 2배가 된다.",
		specialName: "죽음의 손",
		special: "슬롯을 3회 자유롭게 이동"
	},
	893: {
		captain: "3연속 PERFECT 이후 강인 타입 캐릭터의 공격이 3배가 된다.",
		specialName: "오즈 볼",
		special: "1턴동안 받는 데미지를 50% 감소하고, 적 전체에 캐릭터의 공격 X30배 STR 데미지를 준다."
	},
	894: {
		captain: "Good > Great > PERFECT 순서로 공격이후 야심 타입 캐릭터의 공격이 3배가 된다.",
		specialName: "브릭 배트 『그림자 상자』",
		special: "일당 전원의 [INT] 슬롯을 소비하고, 적 1체에 소비한 슬롯 갯수에 따라서 INT 데미지를 준다.",
		specialNotes: "[INT] 슬롯 데미지 계산: 슬롯 1개 X10배, 2개 X15배, 3개 X20배, 4개 X50배, 5개 X100배, 6개 X200배 만큼 데미지를 준다."
	},
	895: {
		captain: "참격 타입 캐릭터의 공격이 1.5배가 된다.",
		specialName: "최후의 대 합창 『빙크스의 술』",
		special: "3턴간 턴 종료시 캐릭터의 회복 X6배 체력을 회복한다."
	},
	896: {
		captain: "참격 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "최후의 대 합창 『빙크스의 술』",
		special: "3턴간 턴 종료시 캐릭터의 회복 X6배 체력을 회복한다."
	},
	897: {
		captain: "박식과 야심 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "침식윤회",
		special: "자신의 슬롯을 [STR]으로 변환하고, 다른 슬롯은 랜덤으로 변환하고, 적 전체 체력을 10% 감소"
	},
	898: {
		captain: "타격, 박식 타입 캐릭터의 공격이 1.5배가 된다.",
		specialName: "챔프 파이트 『밭 갈기』",
		special: "적 전체에 캐릭터의 공격 X10배의 QCK 데미지를 주고, 인접 슬롯을 [G] 슬롯으로 변환",
	},
	899: {
		captain: "격투, 자유 타입 캐릭터의 공격이 1.75배, 회복이 1.25배가 된다.",
		specialName: "우정의 찬가 『오카마의 길』",
		special: "선장 효과 무효화 상태를 5턴 회복하고, 캐릭터의 회복 X10배 체력을 회복한다."
	},
	900: {
		captain: "공격 시작 전에 체력이 가득 차 있으면 사격 타입 캐릭터의 공격이 2배가 된다.",
		specialName: "프랑키 파괴 포",
		special: "적 전체의 랜덤 대상에 2000 고정데미지를 6회 주고, 사격과 자유 타입 캐릭터의 역슬롯을 [G] 슬롯으로 변환",
		specialNotes: "이 슬롯은 오직 사격과 자유 타입 슬롯만 변환되고, 다른 타입 슬롯에는 영향이 없다. #{gOrbs}"
	},
    901: {
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is above 99% at the start of the 턴",
        specialName: "Franky Destroy Gun",
        special: "Deals 6 hits of 2,000 fixed damage to random enemies and for Shooter and Free Spirit characters, randomly changes Badly Matching orbs into [G] orbs or Matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter and Free Spirit characters, other classes are unaffected. #{gOrbs}"
    },
    902: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.25x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 턴. If \"Hakoku Sovereignity\" is used again in the same 턴 the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    903: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 턴. If \"Hakoku Sovereignity\" is used again in the same 턴 the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    904: {
        captain: "Protects from defeat as long as HP is above 50%",
        specialName: "Yokozuna Slap!",
        special: "Deals 20x character's ATK in STR damage to one enemy, delays all enemies for 1 턴"
    },
    905: {
        captain: "Boosts ATK of Slasher characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
        specialName: "Two Gorilla Cut",
        special: [
            {
                "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 턴",
                "cooldown": [ 17, 11 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 턴",
                "cooldown": [ 21, 15 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 턴",
                "cooldown": [ 24, 18 ]
            }
        ],
    },
    906: { // modified
        captain: "남은 체력이 적을 때, 참격형 캐릭터의 공격력을 2.75배로 만든다",
        specialName: "삼도류 이강력참",
        special: [
            {
                "description": "자신의 슬롯을 [STR]으로 바꾸고 2턴 동안 자신의 공격력을 1.5배로 만든다",
                "cooldown": [ 17, 11 ]
            },
            {
                "description": "자신의 슬롯을 [STR]으로 바꾸고 2턴 동안 참격형 캐릭터의 공격력을 1.5배로 만든다",
                "cooldown": [ 21, 15 ]
            },
            {
                "description": "자신의 슬롯을 [STR]으로 바꾸고 2턴 동안 자신의 공격력을 1.75배로 만든다",
                "cooldown": [ 24, 18 ]
            }
        ],
    },
    907: {
        specialName: "Cien Fleur: Big Tree",
        special: "Delays all enemies for 1 턴, locks all orbs for 1 턴, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x 전투 시작 시 체력이 30% 미만이면"
    },
    908: {
        specialName: "Cien Fleur: Big Tree",
        special: "Delays all enemies for 1 턴, locks all orbs for 1 턴, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
        captain: "Boosts ATK of Cerebral characters by 2.5x and their RCV by 1.75x 전투 시작 시 체력이 30% 미만이면"
    },
    909: {
        captain: "Boosts ATK and RCV of PSY characters by 1.5x",
        specialName: "Hero of Justice! Chopper Mask!!",
        special: "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 턴"
    },
    910: { // modified
        specialName: "정의의 편! 쵸파 마스크!!",
        special: "체력을 5,000 회복하고 2턴 동안 [PSY] 캐릭터의 공격력이 1.5배가 된다",
        captain: "[PSY] 캐릭터를 공격력 2배, 회복력 1.5배로 만들고, [PSY] 캐릭터는 [INT] 슬롯도 [유리](\"beneficial\") 슬롯으로 취급한다",
    },
    911: {
        specialName: "Diable Jambe: Premier Hachis",
        special: [
            {
                "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 턴",
                "cooldown": [ 15, 8 ]
            },
            {
                "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 턴",
                "cooldown": [ 25, 18 ]
            }
        ],
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
    },
    912: {
        specialName: "Diable Jambe: Premier Hachis",
        special: [
            {
                "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 턴",
                "cooldown": [ 15, 8 ]
            },
            {
                "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 턴",
                "cooldown": [ 25, 18 ]
            }
        ],
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x. Recovers 2x character's RCV in HP at the end of each 턴",
    },
    913: {
        captain: "Boosts ATK of QCK characters by 2.5x if they have a matching orb",
        specialName: "Black Magic Summoning: Advent of the Demon Lord Satan",
        special: "Seals himself for 1 턴, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
    },
    914: {
        captain: "Boosts ATK of QCK characters by 3x if they have a matching orb, by 1.2x otherwise",
        specialName: "Black Magic Summoning: Advent of the Demon Lord Satan",
        special: "Seals himself for 1 턴, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
    },
    915: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        specialName: "Feeling of Mutual Love",
        special: "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 턴"
    },
    916: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.75x",
        specialName: "Feeling of Mutual Love",
        special: "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 턴"
    },
    917: {
        captain: "Boosts ATK of Shooter characters by 1.5x",
        specialName: "Kuja's Haki Arrow",
        special: "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 턴, changes [RCV] orbs on Shooter characters into matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter characters, other classes are unaffected."
    },
    918: {
        captain: "Boosts ATK of Shooter characters by 1.75x, recovers a small amount of health at the end of each 턴",
        specialName: "Kuja's Haki Arrow",
        special: "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 턴, changes [RCV] orbs on Shooter characters into matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter characters, other classes are unaffected."
    },
    919: {
        specialName: "Spike of the Warrior Defending Her Country",
        special: "Reduces damage received from STR enemies by 50% for 2 턴"
    },
    920: {
        specialName: "Snake Bow of the Warrior Defending Her Country",
        special: "Changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [TND] orbs"
    },
    921: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x",
        specialName: "Pure and Beautiful Shyness",
        special: "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 턴"
    },
    922: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.75x",
        specialName: "Pure and Beautiful Shyness",
        special: "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 턴"
    },
    923: {
        captain: "Boosts ATK of Driven Characters by 2.5x 전투 시작 시 체력이 30% 미만이면, 2x otherwise",
        specialName: "Repel: Weapons Reflect",
        special: "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    924: {
        captain: "Boosts ATK of Driven Characters by 2.75x 전투 시작 시 체력이 30% 미만이면, 2x otherwise",
        specialName: "Repel: Weapons Reflect",
        special: "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    925: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        specialName: "Let's go, Jailer Beasts!",
        special: "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 턴"
    },
    926: {
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        specialName: "Let's go, Jailer Beasts!",
        special: "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 턴"
    },
    927: {
        captain: "Boosts ATK and HP of Driven characters by 1.5x",
        specialName: "Unwavering Hammer of Justice",
        special: "Increases damage received by 1.5x and boosts ATK of Slasher and Driven characters by 1.2x for 3 턴"
    },
    928: {
        captain: "Boosts ATK of Driven characters by 1.75x while above 30% HP and boosts ATK of Striker characters by 1.75x while below 30% HP",
        special: "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴",
        specialName: "Hell Wisdom Rush"
    },
    929: {
        captain: "Boosts ATK of Driven characters by 2.25x while above 30% HP and boosts ATK of Striker characters by 2.25x while below 30% HP",
        special: "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴",
        specialName: "Hell Wisdom Rush"
    },
    930: {
        captain: "Boosts chain multiplier by 2x",
        specialName: "Blugori Manipulation Song",
        special: "Changes orbs in left column to [DEX], then [QCK], then [INT]. Locks himself for 3 턴."
    },
    931: {
        specialName: "Large Axe of Punishment",
        special: "Deals 13x ATK to 1 enemy in [DEX] Damage. 턴 [BLOCK] orbs into [RCV] orbs"
    },
    932: {
        captain: "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
        specialName: "Rock Domination Wall",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 25, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 31, 17 ]
            }
        ],
        },
    933: {
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
        specialName: "Rock Domination Wall",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 25, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 31, 17 ]
            }
        ],
    },
    934: {
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
        specialName: "Fishman Karate!! Shark Fist Tile Breaker",
        special: "Makes PERFECTs harder to hit for 1 턴. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into Matching",
    },
    935: {
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
        specialName: "Fishman Karate!! Shark Fist Tile Breaker",
        special: "Makes PERFECTs harder to hit for 1 턴. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into matching",
    },
    936: { // modified
        captain: "체인 계수 증가량이 3배가 된다",
        specialName: "고무고무 거인의 JET 포탄",
        special: "적 1명에게 캐릭터의 공격력x20배의 [QCK] 데미지를 주고, 3턴 동안 PERFECT 타이밍이 매우 쉬워진다",
    },
    937: {
        captain: "Boosts Chain Multiplier by 3.5x and boosts HP by 1.25x",
        specialName: "고무고무 거인의 JET 포탄",
        special: "적 1명에게 캐릭터의 공격력x20배의 [QCK] 데미지를 주고, 3턴 동안 PERFECT 타이밍이 매우 쉬워진다",
    },
    938: { // modified
        captain: "모험 시작 시 필살 턴을 2턴 단축하고, 박식형 캐릭터의 공격력을 1.5배로 만든다",
        specialName: "사이클론 버스트",
        special: "1명의 봉쇄 상태를 완전히 해제하고 타격형과 박식형의 [불리] 슬롯을 속성이 일치하는 슬롯으로 바꾼다"
    },
    939: { // modified
        captain: "모험 시작 시 필살 턴을 3턴 단축하고, 박식형 캐릭터의 공격력을 2배로 만든다",
        specialName: "사이클론 버스트",
        special: "1명의 봉쇄 상태를 완전히 해제하고 타격형과 박식형의 [불리] 슬롯을 속성이 일치하는 슬롯으로 바꾼다"
    },
    940: {
        captain: "Boosts ATK and HP of [DEX] characters by 1.5x",
        specialName: "Sure Kill! Exploding Star!!",
        special: "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 턴"
    },
    941: {
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 2.25x",
        specialName: "Sure Kill! Exploding Star!!",
        special: "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 턴"
    },
    942: {
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        specialName: "Future Country's Big Incident: The Nightmare of Baldimore",
        special: "Reduces damage received from [QCK] enemies by 100% for 1 턴"
    },
    943: {
        captain: "Boosts ATK of [STR] characters by 2.25x and their HP by 1.75x",
        specialName: "Future Country's Big Incident: The Nightmare of Baldimore",
        special: "Reduces damage received from [QCK] enemies by 100% for 1 턴"
    },
    944: {
        captain: "Boosts ATK and RCV of Driven characters by 1.2x",
        specialName: "Spiritual Bouquet",
        special: "Boosts ATK and RCV of Driven characters by 1.5x for 1 턴"
    },
    945: {
        captain: "Boosts ATK and RCV of Driven characters by 1.75x",
        specialName: "Spiritual Bouquet",
        special: "Boosts ATK and RCV of Driven characters by 1.5x for 1 턴"
    },
    946: {
        specialName: "Lock-on Iron Ball",
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Striker characters by 1.75x",
        special: "Change Friend Captain and changes own orb into [INT]"
    },
    947: {
        captain: "Boosts ATK of [INT] characters by 1.5x, Boosts damage of [INT] specials by 1.5x",
        specialName: "Flame Flash",
        special: "[STR] and [INT] characters gain 1.3x ATK for 1 턴. Deals 10x character's ATK in [INT] damage to all enemies",
    },
    948: {
        captain: "Boosts ATK of Shooter characters by 1.5x and their RCV by 1.2x",
        specialName: "Twin Cannons",
        special: "Randomly changes all orbs to either [STR] or [INT]. Deals random [STR] damage",
    },
    949: {
        captain: "Boosts ATK of Slasher characters by 2x, recovers 2x character's RCV in HP at the end of each 턴",
        specialName: "Ties with Ace",
        special: "Reduces Silence duration by 3 턴, and recovers 4,000 HP",
    },
    950: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.5x after scoring 3 PERFECTs in a row",
        specialName: "Flame Commandment: Fire Pillar",
        special: "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 턴. Reduces damage received by 50% for 1 턴.",
    },
    951: { // modified
        captain: "3연속 PERFECT를 달성하면 이후 격투형과 자유형의 공격력이 2.75배가 된다",
        specialName: "염계 불기둥",
        special: "자유형과 격투형의 필살기 턴을 1턴 단축하고 1턴 동안 받는 데미지를 50% 감소시킨다",
    },
    952: {
        captain: "Boosts ATK and HP of Shooter and Striker characters by 1.2x",
        specialName: "Life-saving Gunstock Blow",
        special: "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
    },
    953: {
        captain: "Boosts ATK and HP of Shooter and Striker characters by 1.5x",
        specialName: "Life-saving Gunstock Blow",
        special: "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
    },
    954:{
        captain: "Boosts ATK and HP of [QCK] characters by 1.5x",
        specialName: "Goldfish Fencing! I'll Dye the Sea Red with Your Blood",
        special: "Reduces the defense of all enemies by 80% for 2 턴"
    },
    955:{
        captain: "Boosts ATK and HP of [PSY] characters by 1.5x",
        specialName: "Get Rich Quick Scheme! We're All Gonna Be Rich",
        special: "Boosts ATK against enemies with reduced defense by 1.2x for 2 턴"
    },
    956:{
        captain: "Boosts ATK and HP of [INT] characters by 1.5x",
        specialName: "Fishman karate! I'll Finish You",
        special: "Boosts ATK of Powerhouse characters by 1.2x for 2 턴"
    },
    957:{
        specialName: "First Aid",
        special: "Recover 2,000 HP"
    },
    958:{
        specialName: "Bind Purge",
        special: "Reduces Bind duration by 2 턴"
    },
    959:{
        specialName: "Captain Soul Recovery",
        special: "Reduces Despair duration by 2 턴"
    },
    960:{
        specialName: "Slot Color Shuffle",
        special: "Randomly changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs"
    },
    961:{
        specialName: "Slot Power Light",
        special: "Amplifies the effect of orbs by 1.25x for 1 턴"
    },
    962:{
        specialName: "Captain Slot Change RCV",
        special: "Changes captain's orb into [RCV]"
    },
    963:{
        captain: "Boosts ATK of characters with cost between 50 and 55 by 2x",
        specialName: "Saint Charloss' Stroll",
        special: "Reduces the defense of all enemies by 100% for 1 턴 and randomizes all orbs"
    },
    964:{
        captain: "Boosts ATK, HP, and RCV of characters with cost between 50 and 55 by 1.5x",
        specialName: "Wrath of the Creator Bloodline",
        special: "Boosts ATK of all characters by 1.1x for 1 턴. If \"Wrath of the Creator Bloodline\" is used again in the same 턴 the special is activated in, boosts ATK of all characters by 1.5x instead."
    },
    965:{
        captain: "Boosts ATK of characters with cost between 50 and 55 by 1.5x, recovers 500 HP at the end of each 턴",
        specialName: "Wrath of the Creator Bloodline",
        special: "Boosts ATK of all characters by 1.1x for 1 턴. If \"Wrath of the Creator Bloodline\" is used again in the same 턴 the special is activated in, boosts ATK of all characters by 1.5x instead."
    },
    966:{
        captain: "Boosts ATK of Driven characters by 2.25x",
        specialName: "Repel",
        special: "Empties slots with [QCK] orbs, deals [QCK] damage based on number of [QCK] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [QCK] orbs consumed: 0 orbs - Can't activate; 1 orb - 14x ATK; 2 orbs - 21x ATK; 3 orbs - 35x ATK; 4 orbs - 49x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    967:{
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        specialName: "Surgeon of Death's First Aid Surgery",
        special: "Recovers 20x character's RCV in HP. Switches orbs between slots twice"
    },
    968:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    969:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    970:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    971:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    972:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    973:{
        captain: "Boosts ATK of Powerhouse characters by 2x if HP is above 99% at the start of the 턴",
        specialName: "Ironclad Thrust: Dwarf Guard of the World",
        special: "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
    },
    974:{
        captain: "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the 턴",
        specialName: "Ironclad Thrust: Dwarf Guard of the World",
        special: "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
    },
    975:{
        captain: "Reduces damage received by 10%",
        specialName: "A Threat That Puts Adults to Shame",
        special: "Boosts ATK of Striker and Driven characters by 1.3x for 1 턴. Protects from defeat as long as HP is above 50% for 1 턴",
    },
    976:{
        captain: "Boosts ATK of Driven characters by 2x. Reduces damage received by 10%",
        specialName: "A Threat That Puts Adults to Shame",
        special: "Boosts ATK of Striker and Driven characters by 1.3x for 1 턴. Protects from defeat as long as HP is above 50% for 1 턴",
    },
    977:{
        captain: "Boosts ATK of Shooter characters by 2x",
        specialName: "Yata no Kagami (Sacred Mirror)",
        special: [
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 턴",
                "cooldown": [ 19, 5 ]
            },
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 턴. Adds .5x to Chain multiplier for 2 턴",
                "cooldown": [ 25, 11 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    978:{ // modified
        captain: "사격형 캐릭터의 필살기 턴을 3턴 단축하고, 공격력 2.35배, 체력을 1.5배로 만든다",
        specialName: "팔지경",
        special: [
            {
                "description": "자신의 슬롯을 [QCK]으로 바꾸고 사격형과 격투형의 필살기 턴을 1턴 단축한다",
                "cooldown": [ 19, 5 ]
            },
            {
                "description": "자신의 슬롯을 [QCK]으로 바꾸고, 사격형과 격투형의 필살기 턴을 1턴 단축, 2턴 동안 체인 계수가 +0.5 된다",
                "cooldown": [ 25, 11 ]
            }
        ],
        specialNotes: "#{stages}",
        sailor: {
            "base": "None",
            "level1": "사격형 캐릭터의 기본 능력치가 20 상승한다",
        },
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "선원효과 추가 1: Boosts ATK, HP and RCV of Shooter characters by 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 20" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 60" },
            { "description": "새로운 선장 효과 습득: Reduces cooldown of Shooter specials by 3 턴 at the start of the fight, boosts ATK of Shooter characters by 2.35x and boosts HP of Shooter characters by 1.5x" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    979: {
        captain: "Boosts ATK of [PSY] and [DEX] characters by 1.75x and their RCV by 1.2x",
        specialName: "Flintlock Barrage",
        special: "Randomly changes all orbs into either [PSY] or [DEX] orbs, deals random PSY damage to all enemies",
    },
    980: {
        captain: "Boosts ATK of [DEX] and [STR] characters by 1.75x and their RCV by 1.2x",
        specialName: "Hidden King Mallet",
        special: "Randomizes all orbs and changes own orb into [DEX]"
    },
    981: {
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x and sharply reduces their RCV",
        specialName: "Martial Art Diving Fist",
        special: "Boosts own ATK by 1.75x for 1 턴 and deals 800 fixed damage to one enemy",
    },
    982: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Flower Sword Straight Cut",
        special: "Deals 25x character's ATK to one enemy, changes bottom row orbs into matching orbs"
    },
    983: {
        captain: "Boosts ATK of Slasher characters by 2.25x, makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters",
        specialName: "Flower Sword Straight Cut",
        special: "Deals 25x character's ATK to one enemy, changes bottom row orbs into matching orbs"
    },
    984: {
        captain: "Boosts ATK of Striker characters by 2.25x",
        specialName: "Shrouds and Rattling Knot",
        special: "Delays all enemies for 1 턴 and locks all orbs for 1 턴"
    }, 
    985:{  
	    captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP" 
	    },
	986:{  
	    captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP" 
	    },
	987:{  
	    captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP" 
	    },
	988:{  
	    captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP" 
	    },
    989:{
        captain: "Boosts ATK of characters with cost above 20 and below 30 by 2.5x, but reduces the HP of every character by 90%",
        special: "Changes the orbs in the left column into [G], [QCK] and [DEX], the orbs in the right column into [STR], [PSY] and [INT]",
        specialName: "Bluff Piracy"
    },
    990: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x if HP is above 99% at the start of the 턴",
        specialName: "10,000 Ton Vise of Hell",
        special: "Changes [RCV] orbs into matching orbs"
    },
    991: {
        captain: "Boosts ATK of Free Spirit characters by 2.75x if HP is above 99% at the start of the 턴",
        specialName: "10,000 Ton Vise of Hell",
        special: "Changes [RCV] orbs into matching orbs"
    },
    992: {
        captain: "Boosts ATK of [QCK] characters by 2x",
        special: "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
        specialName: "Punc Rock Fest"
    },
    993: {
        captain: "Boosts ATK of [QCK] characters by 2.5x",
        special: "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
        specialName: "Punc Rock Fest",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 30" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 30" },
            { "description": "새로운 선장 효과 습득: Boosts ATK of [QCK] characters by 2.75x" },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 60" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 60" },
            { "description": "선원효과 추가 1: Boosts HP, RCV, and ATK of [QCK] characters by 30" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    994: {
        captain: "Boosts amount of Beli received by 2x",
        special: "Reduces Special Cooldown of Cerebral and Fighter characters, and shows the stats of enemies",
        specialName: "Peeping Mind",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 턴. Displays the status of all enemies.",
                "cooldown": [ 13, 7 ]
            },
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 턴. Displays the status of all enemies.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialNotes: "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on 턴', and 'Effect after Death'<br>#{stages}",
        sailor: "Restores her own special by 1 턴 when it is rewinded",
    },
    995:{ // modified
        captain: "베리의 획득량이 3배가 된다(모험 도중에 선장이 되면 효과 무효)",
//        special: "Reduces Special Cooldown of Cerebral and Fighter characters, and shows the stats of enemies",
        specialName: "피핑 마인드",
        special: [
            {
                "description": "적의 능력치가 보이게 되며, 박식형과 격투형의 필살 턴을 1턴 단축한다",
                "cooldown": [ 13, 7 ]
            },
            {
                "description": "적의 능력치가 보이게 되며, 박식형과 격투형의 필살 턴을 2턴 단축한다",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialNotes: "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on 턴', and 'Effect after Death'<br>#{stages}",
        sailor: "자신의 필살기 턴 되돌리기를 1턴 회복한다",
    },
    996: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: [
            {
                "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 11, 5 ]
            },
            {
                "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialName: "Decapitation High Heel",
    },
    997: {
        captain: "Boosts ATK of Powerhouse characters by 2.25x, makes [TND] and [RCV] orbs \"beneficial\" to Powerhouse characters",
        special: [
            {
                "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 11, 5 ]
            },
            {
                "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialName: "Decapitation High Heel",
    },
    998: {
        captain: "Boosts ATK of Driven characters by 2x and reduces cooldown of all specials by 1 턴 at the start of the fight",
        specialName: "Hira Release: Death Enjambre",
        special: "Delays all enemies for 2 턴, deals 50x character's ATK as typeless damage to all enemies at the end of the 턴 for 5 턴"
    },
    999: {
        captain: "Boosts ATK of Driven characters by 2.25x and reduces cooldown of all specials by 2 턴 at the start of the fight",
        specialName: "Hira Release: Death Enjambre",
        special: "Delays all enemies for 2 턴, deals 50x character's ATK as typeless damage to all enemies at the end of the 턴 for 5 턴",
    },
    1000: {
        captain: "Boosts ATK of all characters proportionally to the crew's current HP. Heals for 1.5x his RCV at the end of the 턴 each time you hit a Good. Heals for .5x his RCV at the end of the 턴 each time you hit a Great",
        special: "Recovers 25x character's RCV in HP. Reduces Bind and Despair duration by 3 턴",
        specialName: "Love Sacrifice"
    },
    1001: { // modified
        captain: "공격 시작 전 남은 체력이 많을수록 일당의 공격력이 높아지며 턴 종료 시, GREAT 1회당 캐릭터의 회복력x0.5배, GOOD 1회당 캐릭터의 회복력x1.5배의 체력을 회복한다",
        special: "캐릭터의 회복력x25배의 체력을 회복하고, 봉쇄ㆍ선장효과 무효 상태를 3턴 회복한다",
        specialName: "사랑의 새크리파이스"
    },
    1002: {
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Reduces Paralysis duration by 3 턴 and deals 7x ATK as [STR] damage to one enemy",
        specialName: "Bepo's Ultimate Fist!!",
    },
    1003: {
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Reduces Paralysis duration by 3 턴 and deals 7x ATK as [STR] damage to one enemy",
        specialName: "Bepo's Ultimate Fist!!",
    },
    1004: {
        captain: "Boosts RCV of all characters by 1.5x",
        specialName: "Hilarious Combination",
        special: "Changes the orbs in the left column into [RCV] orbs"
    },
    1005: {
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        specialName: "Rush to Freedom",
        special: "Boosts own ATK by 1.75x for 1 턴"
    },
    1006: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Rush to Freedom",
        special: "Boosts own ATK by 1.75x for 1 턴"
    },
    1007: {
        captain: "Boosts ATK of Cerebral and Free Spirit characters by 1.5x",
        specialName: "Cherry Blossom Storm: Spring Pattern",
        special: "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
    },
    1008: {
        captain: "Boosts ATK of Cerebral and Free Spirit characters by 2x. Recovers 3x character's RCV in HP at the end of each 턴",
        specialName: "Cherry Blossom Storm: Spring Pattern",
        special: "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
    },
    1009: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of [STR] and Fighter characters by 1.5x, reduces cooldown of all specials by 1 턴 at the start of the fight",
    },
    1010:{
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Boosts own ATK by 1.3x for 5 턴, reduces damage received by 20% for 5 턴, deals 13x character's ATK as [INT] damage to one enemy",
        specialName: "Evil Beast's Horn Pierce"
    },
    1011:{
        captain: "Boosts ATK of Driven characters by 1.75x, and boosts ATK of Powerhouse characters by 1.5x",
        special: "Boosts own ATK by 1.3x for 5 턴, reduces damage received by 20% for 5 턴, deals 13x character's ATK as [INT] damage to one enemy",
        specialName: "Evil Beast's Horn Pierce"
    },
    1012: {
        specialName: "Phantom Snake Sword",
        special: "Changes the orbs in the left column into [RCV], [QCK] and [DEX], binds himself for 2 턴"
    },
    1013: {
        specialName: "Binding Iron Chain",
        special: "Boosts ATK against delayed enemies by 1.2x for 1 턴"
    },
    1014: {
        special: "Binds himself for 1 턴 and makes PERFECTs easier to hit for 2 턴",
        specialName: "Scapegoat Substitute",
        captain: "Boosts ATK of Powerhouse characters by 2x, and Recovers 2x character's RCV in HP at the end of each 턴"
    },
    1015: {
        captain: "Boosts ATK of [INT] characters by 2.75x if they have a matching orb",
        special: "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 턴. If during that 턴 every unit scores a PERFECT hit, boosts ATK of [INT] characters by 1.5x for the next 2 턴",
        specialName: "Hollow Eye Killing Shot"
    },
    1016: {
        captain: "Boosts ATK of [INT] characters by 3x if they have a matching orb, by 1.5x otherwise",
        special: "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 턴. If during that 턴 every unit scores a PERFECT hit, boosts ATK of [INT] characters by 1.5x for the next 2 턴",
        specialName: "Hollow Eye Killing Shot"
    },
    1017: {
        captain: "Boosts HP of Slasher characters by 1.5x",
        special: "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 턴",
        specialName: "Ravaging Cutlass Dance",
    },
    1018: {
        captain: "Boosts ATK of Slasher characters by 1.5x and their HP by 2x",
        special: "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 턴",
        specialName: "Ravaging Cutlass Dance",
    },
    1019: {
        captain: "Reduces damage received from [QCK] enemies by 50%",
        special: "Switches orbs between slots 2 times and deals 2000 fixed damage to one enemy",
        specialName: "Blacksmithing Measurement: Double Slash",
    },
    1020: {
        captain: "Boosts ATK and RCV of Shooter and Cerebral characters by 1.5x.",
        specialName: "Sweet Fruit Trap",
        special: "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
    },
    1021: {
        captain: "Boosts ATK and RCV of Shooter and Cerebral characters by 1.75x.",
        specialName: "Sweet Fruit Trap",
        special: "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
    },
    1022: {
        captain: "Boosts ATK of all characters by 2x and boosts amount of Beli received by 1.2x",
        special: "Deals 13x character's ATK as [PSY] damage to all enemies. Changes [BOMB], [EMPTY], and [TND] orbs to [PSY]",
        specialName: "Gum-Gum Gigant Rifle: New Star"
    },
    1023: {
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        special: "Deals 13x characters ATK in INT damage to all enemies, boosts atk of Free Spirit characters by 1.75x for one 턴.",
        specialName: "Flame Mirror: Dawn"
    },
    1024: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Amplifies the effect of orbs for 2 턴, the exact multiplier changes depending on the current HP at the time the special was activated. ",
        specialName: "Eight-Impact Fist! Blow of Resentment"
    },
    1025: {
        captain: "Boosts ATK of Powerhouse characters by 2x and boosts the HP of Striker characters by 2x",
        special: "Amplifies the effect of orbs for 2 턴, the exact multiplier changes depending on the current HP at the time the special was activated. ",
        specialName: "Eight-Impact Fist! Blow of Resentment",
        limit: [
            { "description": "체력 상승 : 50" },
            { "description": "회복력 상승 : 30" },
            { "description": "회복력 상승 : 30" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 40" },
            { "description": "회복력 상승 : 40" },
            { "description": "공격력 상승 : 50" },
            { "description": "선원효과 추가 1: Boosts ATK and HP of Powerhouse and Striker characters by 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "새로운 선장 효과 습득: Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Powerhouse characters by 2.25x and boosts the HP of Striker characters by 2x" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 50" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1026: {
        captain: "Boosts ATK and RCV of Fighter characters by 1.5x",
        specialName: "Shooting Moon",
        special: "Changes Captain orb into Matching orb, and switches orbs between slots three times"
    },
    1027: {
        captain: "Boosts ATK and RCV of Fighter characters by 2x",
        specialName: "Shooting Moon",
        special: "Changes Captain orb into Matching orb, and switches orbs between slots three times"
    },
    1028: {
        captain: "Boosts ATK of all characters by 2.5x after the 21st hit in the chain",
        specialName: "Rah-Rah-Rah Rampage",
        special: "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 턴.",
    },
    1029: {
        captain: "Boosts ATK of all characters by 2.5x after the 21st hit in the chain and by 3.5x after the 36th hit",
        specialName: "Rah-Rah-Rah Rampage",
        special: "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 턴.",
    },
    1030: {
        captain: "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the 턴",
        specialName: "Hero's Gungnir",
        special: "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 턴."
    },
    1031: {
        captain: "Boosts ATK of Powerhouse characters by 2.75x if HP is above 99% at the start of the 턴",
        specialName: "Hero's Gungnir",
        special: "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 턴."
    },
    1032: { // modified
        captain: "모험 시작 시 타격형과 참격형의 필살 턴을 1턴 단축하고, 같은 타입의 공격력을 1.5배로 만든다",
        special: "타격형과 참격형의 필살 턴을 1턴 단축하고, 같은 타입의 [불리] 슬롯을 [RCV]로 바꾼다",
        specialName: "불의의 협공"
    },
    1033: {
        captain: "Boosts ATK of Striker and Slasher characters by 2.25x and reduces cooldown of Slasher and Striker characters by 2 턴 at the start of the fight",
        special: "Reduces Special Cooldown of Slasher and Striker specials by 1 턴. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
        specialName: "Surprise Pincer Attack",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 30" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 30" },
            { "description": "선원효과 추가 1: Boosts ATK and HP of Slasher and Striker characters by 50" },
            { "description": "체력 상승 : 70" },
            { "description": "회복력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 60" },
            { "description": "선원효과 추가 2: Restores his own special by 1 턴 when it is rewinded" },
            { "description": "잠재능력 습득 #: Critical Hit" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 40",
                    "Level 3: 공격력 상승 : 60",
                    "Level 4: 공격력 상승 : 80",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 2: If you hit a PERFECT with this character, there is a 25% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous 턴"
    },
    1034: { // modified
        captain: "일당 편성에 타격형 캐릭터가 많을수록 타격형 캐릭터의 공격력이 상승하고 자신이 공격하지 않은 턴에 받는 데미지가 줄어든다",
        captainNotes: "공격력 상승은 타격형 캐릭터가 1명일때 1.25배, 2명일때 1.5배, 3명일때 1.75배, 4명일때 2배, 5명일때 2.5배, 6명일때 2.75배 상승한다.",
        special: "적 1명에게 남은 체력이 적을수록 큰 무속성 데미지를 주고, 1턴 동안 공격을 받아도 쓰러지지 않는다(쓰러지지 않는 효과는 여러 번 발동하지 않음)",
        specialName: "오마주 신권 배리어배리어 총"
    },
    1035: {
        captain: "일당 편성에서 타격형 캐릭터가 많을수록 타격형 캐릭터의 공격력이 상승하고, 자신이 공격하지 않은 턴에 받는 데미지가 30% 줄어든다.",
        captainNotes: "공격력 상승은 타격형 캐릭터가 1명일때 1.25배, 2명일때 1.5배, 3명일때 1.75배, 4명일때 2배, 5명일때 2.5배, 6명일때 2.75배 상승한다.",
        special: "적 1명에게 남은 체력이 적을수록 큰 무속성 데미지를 주고, 1턴 동안 공격을 받아도 쓰러지지 않는다. (쓰러지지 않는 효과는 여러 번 발동하지 않음)",
        specialName: "오마주 신권 배리어배리어 총",
    },
    1036: {
        captain: "Boosts ATK of Free Spirit characters by 2x after scoring 3 PERFECTs in a row",
        special: "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
        specialName: "Kenpo: Kick Thrust Drop",
    },
    1037: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x after scoring 3 PERFECTs in a row",
        special: "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
        specialName: "Kenpo: Kick Thrust Drop",
    },
    1038: {
        captain: "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.2x",
        special: "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
        specialName: "Great Scissors"
    },
    1039: {
        captain: "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.5x",
        special: "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
        specialName: "Great Scissors"
    },
    1040: {
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        special: "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
        specialName: "Ice Throw"
    },
    1041: {
        captain: "Boosts ATK and HP of [STR] characters by 2x",
        special: "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
        specialName: "Ice Throw"
    },
    1042: {
        captain: "Boosts ATK of Striker and Slasher characters by 2x, reduces crew's RCV to 0.",
        special: "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
        specialName: "Hitting Size"
    },
    1043: {
        captain: "Boosts ATK of Striker and Slasher characters by 2.75x if they have a matching Orb, by 2x otherwise, reduces crew's RCV to 0.",
        special: "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
        specialName: "Hitting Size"
    },
    1044: { // modified
        captain: "참격형과 자유형의 공격력을 2배로 만들고 PERFECT를 3연속, 5연속 달성 시, 이후 같은 타입의 공격력이 3배, 4배로 상승한다",
        specialName: "감마 나이프",
        special: [
            {
                "description": "1턴 동안 참격형과 자유형의 필살기 데미지·적 HP 감소 필살기가 모든 방어 효과를 무시하고, 1명에게 [PSY] 데미지를 준다",
                "cooldown": [ 18, 13 ]
            },
            {
                "description": "1턴 동안 필살기 데미지·적 HP 감소 필살기가 모든 방어 효과를 무시하고, 1명에게 [PSY] 특대 데미지를 준다",
                "cooldown": [ 25, 20 ]
            }
        ],
    },
    1045: { // modified
        captain: "참격형과 자유형의 공격력을 2배로 만들고 PERFECT를 3연속, 5연속 달성 시, 이후 같은 타입의 공격력이 3배, 4배로 상승한다",
        specialName: "감마 나이프",
        special: [
            {
                "description": "1턴 동안 참격형과 자유형의 필살기 데미지·적 HP 감소 필살기가 모든 방어 효과를 무시하고, 1명에게 [PSY] 데미지를 준다",
                "cooldown": [ 18, 13 ]
            },
            {
                "description": "1턴 동안 필살기 데미지·적 HP 감소 필살기가 모든 방어 효과를 무시하고, 1명에게 [PSY] 특대 데미지를 준다",
                "cooldown": [ 25, 20 ]
            }
        ],
    },
    1046: {
        captain: "Boosts ATK of Free Spirit characters by 2.75x following a chain of Good > Great > PERFECT hits",
        specialName: "Dragon Claw Fist: Dragon's Breath",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 턴",
    },
    1047: { // modified
        captain: "GOOD→GREAT→PERFECT 순으로 공격 성공한 후부터 자유형의 공격력이 3.5배가 된다",
        specialName: "「용조권」 용의 숨결",
        special: "적 전체에 무 속성 랜덤 데미지를 주고, 2턴 동안 GOOD, GREAT, PERFECT 공격 시 필살기를 사용한 캐릭터의 공격력×55배의 무 속성 데미지를 가산한다",
    },
    1048: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.2x",
        special: "Reduces Paralysis duration by 3 턴 and Recovers 4x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Mother's Wish to Fight The World"		
    },
    1049: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x, when HP is low the ATK multiplier becomes 2.25x",
        special: "Reduces Paralysis duration by 3 턴 and Recovers 4x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Mother's Wish to Fight The World"		
    },
    1050: {
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Reduces Bind duration by 4 턴, and Reduces damage received by 50% for 2 턴",
        specialName: "Dereshishishi Towards Hope"
    },
    1051: {
        captain: "Boosts ATK of [PSY] characters by 2x",
        special: "Reduces Bind duration by 4 턴, and Reduces damage received by 50% for 2 턴",
        specialName: "Dereshishishi Towards Hope"
    },
    1052: {
        captain: "Recovers 1,000 HP at the end of each 턴",
        special: "Reduces Silence duration by 2 턴",
        specialName: "Knowledge the World is Afraid of",
    },
    1053: {
        captain: "Boosts RCV of Cerebral characters by 1.5x",
        special: "Reduces Paralysis and Despair duration by 3 턴, removes Blindness",
        specialName: "Precocious Provocation"
    },
    1054: {
        captain: "Boosts RCV of Cerebral characters by 2x",
        special: "Reduces Paralysis and Despair duration by 3 턴, removes Blindness",
        specialName: "Precocious Provocation"
    },
    1055: {
        special: "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 턴 ",
        specialName: "Snake Press"
    },
    1056: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their RCV by 1.25x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 턴 ",
        specialName: "Snake Press"
    },
    1057: {
        special: "Strongly Poisons one enemy",
        specialName: "Deadly Poisonous Corrosive Liquid"
    },
    1058: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their HP by 1.25x",
        special: "Strongly Poisons one enemy",
        specialName: "Deadly Poisonous Corrosive Liquid"
    },
    1059: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.2x",
        special: "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Strong Bow of Rejection"
    },
    1060: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        special: "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Strong Bow of Rejection"
    },
    1061: {
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Locks the chain multiplier at 2x for 2 턴",
        specialName: "Instructions to the Warriors"
    },
    1062: {
        captain: "Boosts ATK of Cerebral characters by 2x and Recovers 2x character's RCV in HP at the end of each 턴",
        special: "Recovers 13x character's RCV in HP",
        specialName: "Timeless Art of Self-Defense"
    },
    1063: {
        captain: "Boosts ATK and HP of Shooter characters by 1.2x",
        special: "Boosts ATK of Shooter characters by 1.3x for 1 턴",
        specialName: "Shooting Power Light"
    },
    1064: {
        captain: "Boosts ATK and HP of [INT] characters by 1.2x",
        special: "Recovers 3x character's RCV in HP at the end of each 턴 for 5 턴",
        specialName: "Auto Repair"
    },
    1065: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Amplifies the effect of orbs by 1.25x for 1 턴",
        specialName: "Slot Power Light"
    },
    1066: {
        captain: "Boosts ATK and HP of [PSY] characters by 1.2x",
        special: "Adds .1x to Chain multiplier for 1 턴",
        specialName: "Chain Plus Light"
    },
    1067: {
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Boosts own ATK by 1.5x for 1 턴",
        specialName: "Attack Boost Light"
    },
    1068: {
        captain: "Boosts chain multiplier by 1.5x",
        special: "Changes captain's orb into [QCK]",
        specialName: "Captain Slot Change QCK"
    },
    1069: {
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
        specialName: "Fighting Method of the Pirate Executioner"
    },
    1070: {
        captain: "Boosts ATK of Driven characters by 2.25x",
        special: "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
        specialName: "Fighting Method of the Pirate Executioner"
    },
    1071: {
        captain: "Boosts ATK of characters with cost 20 or less by 1.5x",
        special: "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 턴.",
        specialName: "Emerald Porcupine Robe"
    },
    1072: {
        captain: "Boosts ATK of characters with cost 20 or less by 2x and boosts the HP of Powerhouse characters by 1.2x",
        special: "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 턴.",
        specialName: "Emerald Porcupine Robe"
    },
    1073: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Deals 5x ATK in [QCK] damage to all enemies and randomizes all orbs",
        specialName: "Drilling Hooks"
    },
    1074: {
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Changes [QCK] and [PSY] orbs into [INT] orbs.",
        specialName: "Tenacious Sword of Destruction"
    },
    1075: {
        captain: "Boosts ATK and HP of [INT] characters by 2x",
        special: "Changes [QCK] and [PSY] orbs into [INT] orbs.",
        specialName: "Tenacious Sword of Destruction"
    },
    1076:{
        captain: "Boosts ATK of Striker and Free Spirit characters by 1.75x",
        special: [
            {
                "description": "Delays all enemies for 1 턴. Locks all orbs for 1 턴. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 16, 12 ]
            },
            {
                "description": "Delays all enemies for 1 턴. Locks all orbs for 1 턴. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 20, 16 ]
            }
        ],
        specialName: "Haute Couture: Patchwork"
    },
    1077:{ // modified
        captain: "타격형과 자유형의 공격력을 2.25배, 회복력을 1.5배로 만든다",
        special: [
            {
                "description": "일당의 슬롯을 1턴 고정하고, 적 전체의 공격을 1턴 지연, 적 전체의 HP를 10% 줄인다",
                "cooldown": [ 16, 12 ]
            },
            {
                "description": "일당의 슬롯을 1턴 고정하고, 적 전체의 공격을 1턴 지연, 적 전체의 HP를 20% 줄인다",
                "cooldown": [ 20, 16 ]
            }
        ],
        specialName: "오트 쿠튀르 패치★워크",
        limit: [
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 50" },
            { "description": "회복력 상승 : 50" },
            { "description": "선원효과 추가 1: Boosts ATK of Striker characters by 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 100" },
            { "description": "새로운 선장 효과 습득: Boosts ATK of Striker and Free Spirit characters by 2.45x and their RCV by 1.5x" },
            { "description": "선원효과 추가 2: Boosts this character's attack against DEX characters by 2x" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 5: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]
    },
    1078: { // modified 
        captain: "턴 종료 후 캐릭터의 회복력x3배의 체력을 회복한다",
        special: [
            {
                "description": "마비 상태를 3턴 회복하고, 캐릭터의 회복력x6배의 체력을 회복한다",
                "cooldown": [ 14, 8 ]
            },
            {
                "description": "모든 독·마비·회복력 감소·의성어 은폐 상태를 회복하고, 캐릭터의 회복력x15배의 체력을 회복한다",
                "cooldown": [ 19, 13 ]
            },
            {
                "description": "모든 독·마비·회복력 감소·의성어 은폐 상태를 회복하고, 캐릭터의 회복력x50배의 체력을 회복한다",
                "cooldown": [ 24, 18 ]
            },
        ],
        specialName: "치유들레"
    },
    1079: {
        captain: "Recovers 4x character's RCV in HP at the end of each 턴",
        special: [
            {
                "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 턴",
                "cooldown": [ 14, 8 ]
            },
            {
                "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
                "cooldown": [ 19, 13 ]
            },
            {
                "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
                "cooldown": [ 24, 18 ]
            },
        ],
        specialName: "Chiyupopo",
    },
    1080: {
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 턴",
        specialName: "Trueno Bastardo"
    },
    1081: {
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 턴",
        specialName: "Trueno Bastardo"
    },
    1082: {
        captain: "Boosts ATK of Striker and Fighter characters by 1.2x",
        special: "Deals 20x ATK in [STR] damage to all enemies. For 2 턴, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
        specialName: "Drill Dragon: Drill Nail"
    },
    1083: {
        captain: "Boosts ATK of Striker and Fighter characters by 1.5x at the start of the chain, and by 3x after the 3rd PERFECT in a row",
        special: "Deals 20x ATK in [STR] damage to all enemies. For 2 턴, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
        specialName: "Drill Dragon: Drill Nail",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 40" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 10" },
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "선원효과 추가 1: Restores his own special by 2 턴 when it is rewinded" },
            { "description": "공격력 상승 : 50" },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "공격력 상승 : 100" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "선원효과 추가 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: If you hit a PERFECT with this character, there is a 5% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 5% chance to deal 7% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 5% chance to deal 10% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 10% chance to deal 10% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 15% chance to deal 15% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1084: {
        captain: "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
        special: "Cuts the current HP of each enemy by 20%. At the end of the 턴, cuts the current HP of each enemy by 20% for 3 턴",
        specialName: "Gravito: Heavens Fall"
    },
    1085: { // modified
        captain: "슬롯 일치 시 야심형 캐릭터의 공격력을 3배, 평상시 1.5배, 체력을 1.5배로 만들고, 야심형은 [RCV][연] 슬롯도 [유리] 슬롯으로 취급된다",
        special: "적 전체의 HP를 20% 줄이고, 3턴 동안 턴 종료 시 적 전체의 HP를 20% 줄인다",
        specialName: "중력도 「천락」",
        limit: [
            { "description": "체력 상승 : 25" },
            { "description": "체력 상승 : 25" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 15" },
            { "description": "선원효과 추가 1: Cannot be Blown Away" },
            { "description": "회복력 상승 : 15" },
            { "description": "회복력 상승 : 15" },
            { "description": "회복력 상승 : 15" },
            { "description": "잠재능력 습득 2: Critical Hit" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 60" },
            { "description": "선원효과 추가 2: Boosts ATK, HP and RCV of Powerhouse and Driven characters by 50" },
            { "description": "회복력 상승 : 15" },
            { "description": "공격력 상승 : 25" },
            { "description": "체력 상승 : 60" },
            { "description": "Reduce base Special Cooldown by 1" },
            { "description": "공격력 상승 : 50" },
            { "description": "체력 상승 : 70" },
            { "description": "체력 상승 : 80" },
            { "description": "체력 상승 : 100" },
            { "description": "잠재능력 습득 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 40",
                    "Level 3: 공격력 상승 : 60",
                    "Level 4: 공격력 상승 : 80",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 턴 on this character",
                    "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 3: Reduces Slot Bind duration by 7 턴 on this character",
                    "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다.",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
    },
    1086: {
        captain: "Boosts ATK and RCV of Driven characters by 1.5x",
        special: "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 턴",
        specialName: "Lot Stiffen"
    },
    1087: {
        captain: "Boosts ATK of Driven characters by 2x and their RCV by 1.5x",
        special: "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 턴",
        specialName: "Lot Stiffen"
    },
    1088: {
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴.",
        specialName: "Seven Stars Sword of Darkness"
    },
    1089: {
        captain: "Boosts ATK of Slasher characters by 2x and boosts HP of Driven characters by 1.75x",
        special: "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴.",
        specialName: "Seven Stars Sword of Darkness"
    },
    1090: {
        captain: "Boosts ATK of all characters by 2x 전투 시작 시 체력이 30% 미만이면",
        special: "Deals 25x ATK in [PSY] damage to one enemy. If HP < 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt"
    },
    1091: {
        captain: "Boosts ATK of all characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
        special: "Deals 25x ATK in [PSY] damage to one enemy. If HP < 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt"
    },
    1092: {
        captain: "Boosts RCV of all characters depending on the current Health.",
        special: "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
        specialName: "Present After the Rain"
    },
    1093: {
        captain: "Boosts RCV of all characters depending on the current Health.",
        special: "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
        specialName: "Present After the Rain"
    },
    1094: {
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 턴.",
        specialName: "Mass Juggling"
    },
    1095: {
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 턴.",
        specialName: "Mass Juggling"
    },
    1096: {
        captain: "Boosts ATK of Powerhouse characters by 3x after the 5th PERFECT in a row.",
        special: "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 턴.",
        specialName: "Crash Drumming"
    },
    1097: {
        captain: "Boosts ATK of Powerhouse characters by 3.5x after the 5th PERFECT in a row.",
        special: "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 턴.",
        specialName: "Crash Drumming"
    },
    1098: {
        captain: "Boosts chain multiplier by 2x",
        special: "Randomizes all orbs including [BLOCK] orbs and switches orbs between slots once.",
        specialName: "Mutation-Induced Thunder"
    },
    1099: {
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 턴",
        specialName: "\"To the End of the Clouds\""
    },
    1100: {
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.2x",
        special: "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 턴",
        specialName: "\"To the End of the Clouds\""
    },
      1101: {
        captain: "PERFECT 외의 공격을 할때까지 모든 캐릭터의 공격력을 2.25배로 만들고, 턴이 경과 할때마다 체력이(10%씩) 감소된다.",
        special: "일당의 남은 체력을 80% 감소시키며 적 1기에 감소한 값의 10배에 해당하는 무속성 데미지를 주고, STR, INT의 공격력을 1턴 동안 1.75배로 한다.",
        specialName: "검은팔의 마지막 충격"
    },
    1102: {
        captain: "PERFECT 외의 공격을 할때까지 모든 캐릭터의 공격력을 2.25배로 만들고, 턴이 경과 할때마다 체력이(10%씩) 감소된다.",
        special: "일당의 남은 체력을 80% 감소시키며 적 1기에 감소한 값의 10배에 해당하는 무속성 데미지를 주고, STR, INT의 공격력을 1턴 동안 1.75배로 한다.",
        specialName: "검은팔의 마지막 충격"
    },
    1103: {
        captain: "박식 캐릭터의 공격력과 회복력이 1.5배가 된다.",
        special: [
            {
                "description": "최대 체력의 12%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
                "cooldown": [ 21, 11 ]
            },
            {
                "description": "최대 체력의 24%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
                "cooldown": [ 24, 14 ]
            },
            {
                "description": "최대 체력의 36%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
                "cooldown": [ 27, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "뒤로 뒤로 열매"
    },
    1104: {
        captain: "박식 캐릭터의 공격력과 회복력이 1.75배가 된다.",
        special: [
            {
                "description": "최대 체력의 12%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
                "cooldown": [ 21, 11 ]
            },
            {
                "description": "최대 체력의 24%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
                "cooldown": [ 24, 14 ]
            },
            {
                "description": "최대 체력의 36%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
                "cooldown": [ 27, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "뒤로 뒤로 열매"
    },
    1105: {
        captain: "타격, 자유 캐릭터의 공격력을 1.5배로 하고, 턴 종료시 캐릭터 공격력x2배의 추가 데미지를 입힌다.",
        special: "적 전체의 공격을 1턴 지연시키고, 2턴 동안 체인 계수 +0.2를 추가한다. 2턴간 PERFECT 타이밍이 쉬워진다.",
        specialName: "모사모사 댄스"
    },
    1106: {
        captain: "타격, 자유 캐릭터의 공격력을 2배로 하고, 턴 종료시 캐릭터 공격력x2배의 추가 데미지를 입힌다.",
        special: "적 전체의 공격을 1턴 지연시키고, 2턴 동안 체인 계수 +0.2를 추가한다. 2턴간 PERFECT 타이밍이 쉬워진다.",
        specialName: "모사모사 댄스"
    },
    1107: {
        captain: "야심 캐릭터의 공격력과 체력이 1.5배가 된다.",
        special: "적 전체에 캐릭터 공격력x30배 무속성 데미지를 주고, 야심 타입의 [BLOCK],[G],[BOMB] 슬롯을 각자 특성 슬롯으로 변환시켜준다. 1턴간 야심 캐릭터의 공격력이 1.75배가 된다.",
        specialName: "사자 떨어트리기 궁궐의 회오리"
    },
    1108: { // modified
        captain: "야심형의 공격력과 체력이 2배가 된다",
        special: "적 전체에게 무 속성의 큰 데미지를 주고, 야심형의 [BLOCK][G][BOMB] 슬롯을 속성이 일치하는 슬롯으로 변환, 1턴 동안 야심형의 공격력이 1.75배가 된다",
        specialName: "사자 떨어트리기 궁궐의 회오리",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Driven characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Driven characters by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 120"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1109: {
        captain: "획득 베리가 1.5배가 된다.",
        special: "PSY 캐릭터의 [BLOCK]슬롯을 PSY슬롯으로 변환",
        specialName: "도둑고양이의 잠입 수사"
    },
    1110: {
        captain: "획득 베리가 1.5배가 되고, PSY 캐릭터의 공격력과 회복력이 1.25배 증가한다.",
        special: "PSY 캐릭터의 [BLOCK]슬롯을 PSY슬롯으로 변환",
        specialName: "도둑고양이의 잠입 수사"
    },
    1111: {
        captain: "박식 캐릭터의 공격력과 회복력이 1.25배로 증가한다.",
        special: "3턴 동안 슬롯의 영향이 1.25배증가하고 턴 종료시 캐릭터 회복력의 x8배 만큼 회복한다. ",
        specialName: "작은 악마에 초대의 춤"
    },
    1112: {
        captain: "박식 캐릭터의 공격력과 회복력이 1.5배로 증가한다.",
        special: "3턴 동안 슬롯의 영향이 1.25배증가하고 턴 종료시 캐릭터 회복력의 x8배 만큼 회복한다. ",
        specialName: "작은 악마에 초대의 춤"
    },
    1113: {
        captain: "INT 캐릭터의 공격력이 2배가 된다.",
        special: "1턴 동안 모든 캐릭터의 공격력이 1.2배가 된다.",
        specialName: "작은 괴물의 분노 : \"전쟁이야!!!\""  
    },
    1114: {
        special: "일당의 남은 체력을 99% 감소시켜 적 전체에 공격력의 x25배의 고정 데미지를 주고, 1턴 동안 STR의 공격력을 2배 증가시킨다.",
        specialName: "고무고무 거인의 도끼",
        specialNotes: "#{fixed}",
        captain: "STR 캐릭터의 공격력이 2배가 된다."
    },
    1115: { // modified
        special: "체력을 큰 폭으로 줄이고 적 전체에게 고정 데미지 + 1턴 동안 [STR] 캐릭터의 공격력이 2배가 된다",
        specialName: "고무고무 거인의 도끼",
        specialNotes: "#{fixed}",
        captain: "[STR] 캐릭터의 공격력이 2.5배가 된다"
    },
    1116: {
        special: "적 전체에 파티의 체력이 적을수록 큰 INT 데미지를 준다.",
        specialName: "디아블 잠브 : 분쇄",
        captain: "체력이 가득 차 있을때 받는 데미지를 크게(80%) 감소한다.",
        sailor: "자신의 저림 상태를 3턴 줄여준다."
    },
    1117: {
        special: "적 전체에 파티의 체력이 적을수록 큰 INT 데미지를 준다.",
        specialName: "디아블 잠브 : 분쇄",
        captain: "체력이 가득 차 있을때 받는 데미지를 크게(80%) 감소한다.",
        sailor: "자신의 저림 상태를 3턴 줄여준다."
    },
    1118: {
        special: "슬롯을 랜덤으로 교체한다, 1턴 동안 체력이 일정 이상(50%)일 때 공격을 받아도 쓰러지지 않는다.",
        specialName: "1만 캐럿의 미소",
        specialNotes: "#{zombie}",
        captain: "타격 캐릭터의 공격력과 회복력을 1.5배 상승시킨다.",
        sailor: "DEX 슬롯을 [유리] 슬롯으로 만든다."
    },
    1119: {
        special: "슬롯을 랜덤으로 교체한다, 1턴 동안 체력이 일정 이상(50%)일 때 공격을 받아도 쓰러지지 않는다.",
        specialName: "1만 캐럿의 미소",
        specialNotes: "#{zombie}",
        captain: "타격 캐릭터의 공격력을 2배 상승시키고, 회복력을 1.5배 상승시킨다.",
        sailor: "DEX 슬롯을 [유리] 슬롯으로 만든다."
    },
    1120: { // modified
        special: "적 전체에 무속성의 랜덤 데미지(대)를 주고, 자기 슬롯을 [STR]으로 바꾼다",
        specialName: "고무고무 JET 총난타",
        specialNotes: "랜덤 데미지 : 70,00 ~ 200,000",
        captain: "GOOD→GREAT→PERFECT 순으로 공격하면 이후 캐릭터의 공격력이 4배"
    },
    1121: { // modified
        special: "적 전체에게 무속성의 데미지(대)를 주고, 자기 슬롯을 [STR]으로 바꾼다",
        specialName: "고무고무 JET 총난타",
        specialNotes: "랜덤 데미지 : 70,00 ~ 200,000",
        captain: "GOOD→GREAT→PERFECT 순으로 공격하면 이후 캐릭터의 공격력이 4배"
    },
    1122: { // modified
        captain: "[STR] [DEX] [QCK] 속성 캐릭터의 공격력을 2.5배, 자신의 공격력을 4배로 만든다.",
        special: "적 전체에 무 속성의 큰 데미지를 주고 일당에게 걸려있는 유리한 효과를 모두 없애며, 2턴 동안 자신에게만 여러 가지 유리한 효과가 발동된다",
        specialName: "휘몰아치는 롬멜의 칼바람"
    },
    1123: { // modified
        captain: "[STR][DEX][QCK] 속성 캐릭터의 공격력을 2.5배, 자신의 공격력을 4배로 만든다",
        special: "적 전체에 무 속성의 큰 데미지를 주고 일당에게 걸려있는 유리한 효과를 모두 없애며, 2턴 동안 자신에게만 여러 가지 유리한 효과가 발동된다",
        specialName: "휘몰아치는 롬멜의 칼바람"
    },
    1124: {
        captain: "참격 캐릭터의 공격력을 3배로 상승시키고, 턴 경과마다 공격력이 x0.1배씩 감소한다.",
        special: "적 전체에게 캐릭터 공격력의 x13배의 PST데미지를 주고, 자신과 선장의 슬롯을 자신의 속성으로 변환 한다.",
        specialName: "게으른 단죄"
    },
    1125: {
        captain: "참격 캐릭터의 공격력을 3.5배로 상승시키고, 턴 경과마다 공격력이 x0.1배씩 감소한다.",
        special: "적 전체에게 캐릭터 공격력의 x13배의 PST데미지를 주고, 자신과 선장의 슬롯을 자신의 속성으로 변환 한다.",
        specialName: "게으른 단죄"
    },
    1126: { // modified
        captain: "[DEX] 캐릭터의 공격력과 체력을 1.5배로 만든다",
        special: "[BLOCK] 슬롯을 소비하여 적 전체에 소비한 [BLOCK] 슬롯의 수에 따라 커지는 무 속성 데미지를 주고, 데미지를 준 후 [공백] 슬롯을 속성이 일치하는 슬롯으로 바꾼다",
        specialNotes: "[BLOCK] 슬롯 갯수에 따른 무 속성 데미지량 : 0 슬롯 - 효과 없음; 1 슬롯 - 20배 상승; 2 슬롯 - 40배 상승; 3 슬롯 - 100배 상승; 4 슬롯 - 200배 상승; 5 슬롯 - 300배 상승; 6 슬롯 - 500배 상승.",
        specialName: "제독 킬러 볼링"
    },
    1127: {//orlumbus
        captain: "DEX 캐릭터의 공격력을 2.25배로 상승시키고, 체력을 1.5배로 상승시킨다.",
        special: "[BLOCK] 슬롯을 삭제하고, 적 전체에 삭제한 방해 슬롯의 수에 따라 커지는 무 속성 데미지를 준다. 동시에 [EMPTY]을 자신의 속성 슬롯으로 변환한다.",
        specialNotes: "[BLOCK] 슬롯 갯수에 따른 무 속성 데미지량 : 0 슬롯 - 효과 없음; 1 슬롯 - 20배 상승; 2 슬롯 - 40배 상승; 3 슬롯 - 100배 상승; 4 슬롯 - 200배 상승; 5 슬롯 - 300배 상승; 6 슬롯 - 500배 상승.",
        specialName: "제독 킬러 볼링"
    },
    1128: {
        captain: "전투 시작시 필살기를 1턴 단축하고, 모든 캐릭터의 공격력을 1.75배로 상승시킨다.",
        special: "저림 · 선장 효과 무효 상태를 5 차례 회복하고 적 1 기의 HP를 10 % 감소시킨다.",
        specialName: "군사의 참격"
    },
    1129: {
        captain: "전투 시작시 필살기를 2턴 단축하고, 모든 캐릭터의 공격력을 2배로 상승시킨다.",
        special: "저림 · 선장 효과 무효 상태를 5 차례 회복하고 적 1 기의 HP를 10 % 감소시킨다.",
        specialName: "군사의 참격"
    },
    1130: { // modified
        captain: "격투형과 강인형 캐릭터의 공격력과 체력을 1.5배로 만든다",
        special: [
            {
                "description": "적 전체에 공격력x7배의 무 속성 데미지를 준다",
                "cooldown": [ 12, 6 ]
            },
            {
                "description": "적 전체에 공격력x15배의 무 속성 데미지를 준다",
                "cooldown": [ 20, 14 ]
            },
            {
                "description": "적 전체에 공격력x25배의 무 속성 데미지를 주며 또한 필살 턴을 계속 쌓으면 위력이 올라간다",
                "cooldown": [ 26, 20 ]
            },
        ],
        specialName: "킹 펀치"
    },
    1131: { // modified
        captain: "격투형과 강인형 캐릭터의 공격력을 1.5배, 체력을 2배로 만든다",
        special: [
            {
                "description": "적 전체에 공격력x7배의 무 속성 데미지를 준다",
                "cooldown": [ 12, 6 ]
            },
            {
                "description": "적 전체에 공격력x15배의 무 속성 데미지를 준다",
                "cooldown": [ 20, 14 ]
            },
            {
                "description": "적 전체에 공격력x25배의 무 속성 데미지를 주며 또한 필살 턴을 계속 쌓으면 위력이 올라간다",
                "cooldown": [ 26, 20 ]
            },
        ],
        specialName: "킹 펀치"
    },
    1132: {
        captain: "격투 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
        special: [
            {
                "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.5배 상승시킨다.",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.75배 상승시킨다.",
                "cooldown": [ 23, 17 ]
            }
        ],
        specialName: "파괴포"
    },
    1133: {
        captain: "격투 캐릭터의 공격력을 2.25배 상승시키고, 체력을 1.5배 상승시킨다. 턴 종료후 캐릭터 회복력의 2배만큼 체력을 회복한다.",
        special: [
            {
                "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.5배 상승시킨다.",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.75배 상승시킨다.",
                "cooldown": [ 23, 17 ]
            }
        ],
        specialName: "파괴포"
    },
    1134: {
        captain: "타격과 참격 캐릭터의 공격력과 회복력을 1.2배 상승시킨다.",
        special: "INT 캐릭터의 필살기를 1턴 감소시킨다.",
        specialName: "양보할 수 없는 탐구",
    },
    1135: {
        captain: "타격과 참격 캐릭터의 공격력과 회복력을 1.5배 상승시킨다.",
        special: "INT 캐릭터의 필살기를 1턴 감소시킨다.",
        specialName: "양보할 수 없는 탐구",
    },
    1136: { //Fortnight Fukuro
        captain: "QCK 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
        special: "QCK 캐릭터의 TND,RCV슬롯을 QCK슬롯으로 변환한다.",
        specialName: "야수- 오의: '올빼미' 야습"
    },
    1137: { //Fortnight Jabra
        captain: "강인 캐릭터의 공격력을 2.25배 상승시킨다.",
        special: "적 1기에 캐릭터 공격력 x13배의 STR 데미지를 주고, 2턴 동안 자유 캐릭터의 슬롯 영향을 1.5배 증가시킨다.",
        specialName: "치명적인 박격포 - 야습",
    },
    1138: {
        captain: "받는 데미지가 25% 감소한다.",
        special: "받는 데미지가 60% 감소하고, 1턴 동안 강인, 격투 캐릭터의 공격력이 1.3배 상승한다.",
        specialName: "철괴 : 고리야습",
    },
    1139: {
        captain: "타격 캐릭터의 공격력과 회복력을 1.5배 상승시킨다.",
        special: "[BLOCK] 슬롯을 포함한 모든 슬롯을 STR DEX QCK PSY INT 슬롯으로 랜덤 변환한다.",
        specialName: "생명귀환 : 사자지건"
    },
    1140: {// Coliseum Moria
        captain: "야심 캐릭터의 공격력을 2배 상승시킨다.",
        special: "자신의 슬롯을 DEX으로 변환하고, 적 1기에 30만의 고정 데미지를 준다.",
        specialName: "뿔도마뱀"
    },
    1141: {// Coliseum Moria :: modified
        captain: "야심형 캐릭터의 공격력을 2.25배로 만들고 턴 종료 시 회복력x3배의 체력을 회복한다",
        special: "자신의 슬롯을 [DEX]로 바꾸고, 적 1명에게 고정 데미지 300,000을 준다",
        specialName: "뿔도마뱀"
    },
    1142: {// Coliseum Foxy
        captain: "자유 캐릭터의 공격력을 1.5배 상승시킨다.",
        special: "랜덤의 적에게 STR 데미지를 15회 주고, 적 전체의 공격을 1턴 지연시킨다.",
        specialName: "고릴라 펀치 : 골든 스트라이크"
    },
    1143: {// Coliseum Foxy
        captain: "자유 캐릭터의 공격력을 2배 상승시키고, 전투 시작 시 자유 캐릭터의 필살기를 2턴 감소시킨다.",
        special: "랜덤의 적에게 STR 데미지를 15회 주고, 적 전체의 공격을 1턴 지연시킨다.",
        specialName: "고릴라 펀치 : 골든 스트라이크"
    },
    1144: {// Coliseum Porche
        captain: "PSY 캐릭터의 공격력을 1.75배 상승시킨다.",
        special: "적 전체에게 캐릭터 공격력 x5배의 PSY데미지를 주고, 캐릭터 회복력 x15배의 체력을 회복한다.",
        specialName: "큐티 바톤: 꽃 수리검"
    },
    1145: {// Coliseum Porche
        captain: "PSY 캐릭터의 공격력을 1.75배 상승시키고, 회복력을 1.5배 상승시킨다.",
        special: "적 전체에게 캐릭터 공격력 x5배의 PSY데미지를 주고, 캐릭터 회복력 x15배의 체력을 회복한다.",
        specialName: "큐티 바톤: 꽃 수리검"
    },
    1146:{
        specialName: "봉인 제거",
        special: "봉인 상태 2턴 감소"
    },
    1147:{
        special: "캐릭터 회복력 x7배의 체력을 회복한다.",
        specialName: "M적당한 회복",
    },
    1148:{
        specialName: "저림 회복 - Light",
        special: "저림 상태 1턴 감소"
    },
    1149:{
        special: "적 전체에게 캐릭터 공격력 x3배의 INT 데미지를 주고, 중독 시킨다.",
        specialNotes: "#{poison}",
        specialName: "독 공격",
    },
    1150:{
        special: "선장의 슬롯을 자기 슬롯으로 변환시킨다.",
        specialName: "선장 슬롯 변환",
    },
    1151: {//Minotaur
        special: "Cuts the current HP of one enemy by 10%",
        specialName: "Tough Jailer Beast: Spiked Club"
    },
    1152: {
        special: "Deals 3 hits of 7x character's ATK in [INT] damage to random enemies.",
        specialName: "Shy Jailer Beast: Spiked Mace",
    },
    1153: {
        special: "Reduces the defense of all enemies by 100% and boosts ATK of Powerhouse characters by 1.25x for 1 턴",
        specialName: "Demon Lord's Roar"
    },
    1154: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their HP by 1.3x",
        special: "Reduces crew's current HP by 30%. Boosts ATK of Powerhouse characters by 1.5x",
        specialName: "Leader of the Jailers",
    },
    1155: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        specialName: "Monsterous Appetite"
    },
    1156: {
        captain: "Boosts ATK of Driven characters by 1.2x if HP is above 50% at the start of the 턴",
        special: "Removes Poison. Protects from defeat as long as HP is above 50% for 1 턴",
        specialName: "Abyss Road",
    },
    1157: {
        captain: "Boosts ATK of Driven and Striker characters by 1.75x and protects from defeat as long as HP is above 50% at the start of the 턴",
        special: "Removes Poison. Protects from defeat as long as HP is above 50% for 1 턴",
        specialName: "Abyss Road",
    },
    1158: {
        captain: "Boosts ATK of Shooter, Striker, and Powerhouse characters by 1.75x",
        special: "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy, and Poisons all other enemies.",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each 턴. Regular Poison deals .5x character's ATK in fixed damage at the end of each 턴.",
        specialName: "Poison Puffer Fish"
    },
    1159: {
        captain: "Boosts ATK of Shooter, Striker, and Powerhouse characters by 2.25x",
        special: "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy, and Poisons all other enemies.",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each 턴. Regular Poison deals .5x character's ATK in fixed damage at the end of each 턴.",
        specialName: "Poison Puffer Fish"
    },
    1160: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Reduces Bind, Despair, and Silence duration by 3 턴, and recovers 2,000 HP",
        specialName: "Open Sun"
    },
    1161: {
        captain: "Boosts ATK of Free Spirit characters by 2x and their RCV by 1.5x",
        special: "Reduces Bind, Despair, and Silence duration by 3 턴, and recovers 2,000 HP",
        specialName: "Open Sun"
    },
    1162: {//Tesoro
        captain: "Boosts ATK of [PSY] characters by 1.75x and boosts amount of Beli received by 1.5x",
        special: "Deals large [PSY] damage to all enemies, and if HP is above 50%, changes all orbs to [PSY] orbs",
        specialName: "Gold-Gold Fruit",
    },
    1163: {//Tesoro Evolved
        captain: "Boosts ATK of PSY characters by 1.75x. Also boosts ATK of Driven and Cerebral characters by 1.5x. Boosts amount of Beli received by 2x",
        special: "Deals large [PSY] damage to all enemies, and if HP is above 50%, changes all orbs to [PSY] orbs",
        specialName: "Gold-Gold Fruit",
    },
    1164: {//Carina
        captain: "Boosts RCV of all characters by 1.2x",
        special: "Boosts RCV by 1.5x for 1 턴 and amplifies the effects of orbs by 1.5x for 1 턴",
        specialName: "Sexy Diva",
    },
    1165: {//Carina Evolved
        captain: "Boosts RCV of all characters by 1.5x",
        special: "Boosts RCV by 1.5x for 1 턴 and amplifies the effects of orbs by 1.5x for 1 턴",
        specialName: "Sexy Diva",
    },
    1166: {//Baccarat
        captain: "Gives chance of duplicating a drop upon completion of the island.",
        special: "Boosts chance of matching orbs and reduces the ATK of enemies for 1 턴",
        specialName: "Lucky-Lucky Fruit",
    },
    1167: {//Baccarat Evolved
        captain: "Boosts ATK of all characters by 1.2x. Gives chance of duplicating a drop upon completion of the island.",
        special: "Boosts chance of matching orbs and reduces the ATK of enemies for 1 턴",
        specialName: "Lucky-Lucky Fruit",
    },
    1168: {//Dice
        captain: "Boosts ATK of [STR] characters by 2x 전투 시작 시 체력이 30% 미만이면",
        special: "Boosts ATK of [STR] characters by a variable factor for 1 턴",
        specialName: "Trump Card Dealer",
    },
    1169: {//Dice Evolved
        captain: "Boosts ATK of [STR] characters proportionally to the crew's current HP",
        special: "Boosts ATK of [STR] characters by a variable factor for 1 턴",
        specialName: "Trump Card Dealer",
    },
    1170: {//Tanaka
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Bind duration by 3 턴 and swaps Badly Matching, [BLOCK], and [BOMB] orbs to [EMPTY]",
        specialName: "Escape-Escape Fruit",
    },
    1171: {//Tanaka Evolved
        captain: "Boosts ATK of [QCK] characters by 2x",
        special: "Reduces Bind duration by 3 턴 and swaps Badly Matching, [BLOCK], and [BOMB] orbs to [EMPTY]",
        specialName: "Escape-Escape Fruit",
    },
    1172: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x",
        sailor: "Boosts base base RCV of PSY characters by 15"
    },
    1173: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
        sailor: "Boosts base RCV of PSY characters by 15"
    },
    1174: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        captain: "Boosts ATK of DEX characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    1175: { // modified
        special: "남은 체력이 적을 때 [DEX] 캐릭터의 공격력이 3배가 된다",
        specialName: "아수라 마구섬",
        captain: "인접한 슬롯을 [DEX]로 바꾸고, 적 전체에게 고정 데미지 1,000을 준다",
        sailor: "참격형 캐릭터의 기본 공격력이 20 상승한다"
    },
    1176: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        sailor: "When HP is below 30% at the start of the 턴, boosts own RCV by 50"
    },
    1177: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        sailor: "When HP is below 30% at the start of the 턴, boosts own RCV by 50"
    },
    1178: {
        captain: "Boosts ATK of [STR] characters by 2x if HP is above 99% at the start of the 턴. Reduces damage received by 50%",
        special: "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
        specialName: "Not Rubber Gum-Gum Jet Gatling",
    },
    1179: {
        captain: "Boosts ATK of [STR] characters by 2.75x if HP is above 99% at the start of the 턴. Reduces damage received by 50%",
        special: "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
        specialName: "Not Rubber Gum-Gum Jet Gatling",
    },
    1181: { //Blenheim
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 턴",
        specialName: "Anger of the Ki Sword",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit"
    },
    1182: { //Blenheim
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 턴",
        specialName: "Anger of the Ki Sword",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit"
    },
    1183: {
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
        specialName: "Brass Knuckle Destruction",
        sailor: "If HP is above 99% at the start of the 턴, boosts ATK of [PSY] characters by 75"
    },
    1184: {
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
        specialName: "Brass Knuckle Destruction",
        sailor: "If HP is above 99% at the start of the 턴, boosts ATK of [PSY] characters by 75"
    },
    1185: { // modified
        captain: "참격형과 박식형의 공격력을 1.75배로 만들고 일정 확률로 모험에서 획득한 보물이 한 개 추가된다(보물 추가 효과는 모험 도중에 선장이 되면 발동되지 않습니다)",
        special: [
            {
                "description": "적 전체에 공격력x4배의 [INT] 데미지를 주고, 자신의 슬롯을 [INT]로 바꾼다",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "적 전체에 공격력x15배의 [INT] 데미지를 주고, 자신의 슬롯을 [INT]로 바꾸며 참격형과 박식형의 필살기 턴을 1턴 단축한다",
                "cooldown": [ 17, 12 ],
            }
        ],
        specialName: "신속한 일검류 십자베기",
        sailor: "Restores his own special by 1 턴 when it is rewinded",
    },
    1186: { // modified
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
        special: [
            {
                "description": "적 전체에 공격력x4배의 [INT] 데미지를 주고, 자신의 슬롯을 [INT]로 바꾼다",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "적 전체에 공격력x15배의 [INT] 데미지를 주고, 자신의 슬롯을 [INT]로 바꾸며, 참격형과 박식형의 필살기 턴을 1턴 단축한다",
                "cooldown": [ 17, 12 ],
            }
        ],
        specialName: "신속한 일검류 십자베기",
        sailor: "자신의 필살기 턴 되돌리기를 1턴 회복한다",
    },
    1187: {
        captain: "Boosts ATK of [STR] characters by 2.5x",
        special: "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 턴",
        specialName: "Advancing Continuous Sword Attack",
        sailor: "Boosts base ATK, HP, and RCV of all characters by 20"
    },
    1188: {
        captain: "Boosts ATK of [STR] characters by 2.5x",
        special: "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 턴",
        specialName: "Advancing Continuous Sword Attack",
        sailor: "Boosts base ATK, HP, and RCV of all characters by 20"
    },
    1189: {
        captain: "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
        special: "Reduces enemy Barrier duration by 1 턴",
        specialName: "Break Bullet",
        sailor: "Boosts base ATK of [QCK] characters by 40"
    },
    1190: { // modified
        captain: "[QCK] 캐릭터의 공격력을 2.25배로 만들고, [QCK] 캐릭터는 [DEX] 슬롯도 [유리] 슬롯으로 취급한다",
        special: "적 전체의 체력 게이지에 붙어있는 배리어의 턴을 1턴 줄인다(hit 배리어 등)",
        specialName: "브레이크 불릿",
        sailor: "[QCK] 캐릭터의 기본 공격력이 40 상승한다",
    },
    1191: { // modified
        captain: "일당의 공격력을 2배, 체력을 조금 상승시키며, 전 턴에 적을 1명이라도 격파했다면 공격력 배율이 단계적으로 상승한다(최대 8단계이며, 최대 공격력 3.5배)",
        special: "필살기 발동 시 일당에 걸려 있는 공격력 상승 및 슬롯 영향 증폭 효과를 1턴 연장한다",
        specialName: "빙하시대",
    },
    1192: {
        captain: "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 턴",
        specialName: "Ice Age",
    },
    1193: {
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 턴",
        specialName: "Sweet Style Petrification",
    },
    1194: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x",
        special: "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 턴",
        specialName: "Sweet Style Petrification",
    },
    1195: {
        captain: "Boosts ATK of Striker characters by 1.75x. Recovers 2x character's RCV in HP at the end of each 턴",
        special: "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 턴",
        specialName: "Split Air Hole",
    },
    1196: { // modified
        captain: "타격형 캐릭터의 공격력을 2.5배로 만들고, 받는 데미지를 10% 감소시킨다",
        special: "적 1명에게 공격력x50배의 [DEX] 데미지를 주고, 1턴 동안 타격형 캐릭터의 슬롯의 영향을 상당히 크게 증폭시키고, 1턴 동안 받는 데미지를 50% 감소시킨다",
        specialName: "순흑의 도깨비",
    },
    1197: {
        captain: "Boosts ATK of Cerebral and Powerhouse characters by 2.5x if they have a matching orb, by 1x otherwise, reduces crew's RCV to 0",
        special: "For Cerebral and Powerhouse characters, changes all orbs including [BLOCK] orbs to Badly Matching. Deals [INT] damage to all enemies",
        specialName: "Investigator of Sorrow",
    },
    1198: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
        specialName: "Appetite Or Sex Appeal - Has it Switched Yet!?",
    },
    1199: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
        specialName: "Appetite Or Sex Appeal - Has it Switched Yet!?",
    },
    1200: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Silence duration by 2 턴. If your HP is below 30%, changes top row into Matching Orbs",
        specialName: "Passionate Look, 'I'm a Bad Guy...'",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this unit by 2 턴",
        sailorNotes: "#{silence}",
    },
    1201: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Silence duration by 2 턴. If your HP is below 30%, changes top row into Matching Orbs",
        specialName: "Passionate Look, 'I'm a Bad Guy...'",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this unit by 2 턴",
        sailorNotes: "#{silence}",
    },
    1202: {
        captain: "Boosts ATK of Free Spirit characters by 1.5x",
        specialName: "Session of Pirates",
        special: "Changes [PSY] orbs on Free Spirit characters into matching orbs"
    },
    1203: {
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        specialName: "Session of Pirates",
        special: "Changes [PSY] orbs on Free Spirit characters into matching orbs"
    },
    1204: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x",
        specialName: "Awakening Tune Power",
        special: "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
    },
    1205: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        specialName: "Awakening Tune Power",
        special: "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
    },
    1206: {
        captain: "Boosts HP by 1.3x",
        specialName: "Chorus echoing in the sea",
        special: "Protects from defeat as long as HP is above 50%",
        specialNotes: "#{zombie}"
    },
    1207: { // modified
        special: "[INT] 슬롯의 출현율이 크게 상승한다(3턴)",
        specialName: "오첸타 플루트 콰트로 마노!! 쇼크!!",
        captain: "[INT] 캐릭터의 공격력과 회복력이 1.5배가 된다",
        sailor: "의성어 은폐 상태를 3턴 회복한다"
    },
    1208: {
        special: "Boosts chances of getting [INT] orbs for 3 턴",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        sailor: "Reduces Blindness duration by 3 턴"
    },
    1209: {
        special: "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x",
        sailor: "Boosts base RCV of Shooter characters by 10"
    },
    1210: {
        special: "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Boosts base RCV of Shooter characters by 10",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "체력 상승 : 80" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 120" },
            { "description": "선원효과 추가 1: 사격 캐릭터의 공격력을 50 상승시킨다." },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 2: If there are 5 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 3: If there are 4 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 4: If there are 4 Shooter characters in your crew, 회복 무효 상태 회복 : 2 턴",
                    "Level 5: If there are 4 Shooter characters in your crew, 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ]
    },
    1211: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    1212: { // modified
        special: "자신의 슬롯을 [STR]으로 바꾸고, 일당 모두의 슬롯의 영향을 증폭시킨다 (2턴)",
        specialNotes: "#{orb : 1.5x}",
        specialName: "변태의 자존심 「수퍼 스크류 댄스!!」",
        captain: "[STR] 캐릭터의 공격력이 2.25배가 되고, 턴 종료 시 공격력 x 2배의 추가 데미지",
        sailor: "사격형 캐릭터의 기본 공격력이 20 상승한다"
    },
    1213: {
        captain: "Boosts ATK of Slasher characters by 1.5x, the HP of Striker characters by 1.2x, and the RCV of Shooter characters by 1.2x",
        specialName: "Exciting Transfiguration",
        special: "Recovers 10x character's RCV in HP. For 4 턴, makes [BOMB] orbs \"beneficial\"",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
    },
    1214: {
        captain: "Boosts ATK of Slasher characters by 2x, the HP of Striker characters by 1.25x, and the RCV of Shooter characters by 1.25x",
        specialName: "Exciting Transfiguration",
        special: "Recovers 10x character's RCV in HP. For 4 턴, makes [BOMB] orbs \"beneficial\"",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
    },
    1215: {//Gairam
        captain: "Boosts ATK by 2.5x following a chain of [QCK] > [PSY] > [DEX] attacks no lower than Good",
        special: "Deals 5 hits of 2,000 fixed damage to random enemies and reduces any damage received above 5,000 HP by 80% for 1 턴",
        specialNotes: "#{randomHits : 5}",
        specialName: "Totem Cube"
    },
    1216: {//Sebastian
        captain: "Boosts ATK of Powerhouse characters by 2x and reduces damage received based on current HP by up to 20%",
        captainNotes: "The lower the HP, the larger the damage reduction. At 50% HP you take 10% reduced damage",
        special: "Reduces damage received by 50% for 1 턴, and changes own orb into [QCK]",
        specialName: "Camouflage Air",
    },
    1217: {//Nightin
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Paralysis and Bind duration by 2 턴. Deal 10x her ATK in [PSY] damage to one enemy",
        specialName: "Catepillar Soul Shot",
    },
    1218: {//Hancock
        captain: "Boosts ATK by 2.5x after scoring 3 PERFECTs in a row",
        special: "Locks all orbs for 1 턴. If HP is below 30%, changes own orb and the captain's orb into matching. ",
        specialName: "Everybody Confusing Fragrance",
    },
    1219: {//Byrnndi World Coliseum
        captain: "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 16 times to a maximum of 3x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 턴",
                "cooldown": [ 22, 6 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
                "cooldown": [ 28, 12 ],
            },
            {
                "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 턴",
                "cooldown": [ 34, 18 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "More More, 10 Times \"Iron Hammer\"",
    },
    1220: {//Byrnndi World Coliseum
        captain: "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 10 times to a maximum of 3.25x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 턴",
                "cooldown": [ 22, 6 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
                "cooldown": [ 28, 12 ],
            },
            {
                "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 턴",
                "cooldown": [ 34, 18 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "More More, 10 Times \"Iron Hammer\"",
        limit: [
            { "description": "체력 상승 : 10" },
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 60" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "선원효과 추가 1: Boosts own ATK by 100 if this character is the last in the chain to attack" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous 턴"
    },
    1221: {//Coliseum Oars Jr
        captain: "Boosts ATK of Slasher characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy. For 1 턴, makes [STR] orb \"beneficial\" for all characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Blood of the Devil Warrior",
    },
    1222: {//Coliseum Oars Jr
        captain: "Boosts ATK of Slasher characters by 2x and the HP of Powerhouse characters by 1.75x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy. For 1 턴, makes [STR] orb \"beneficial\" for all characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Blood of the Devil Warrior",
    },
    1223: { // Story Bastille
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Deals 25x character's ATK in [INT] damage to all enemies",
        specialName: "Shark Knife - Flash",
    },
    1224: { // Story Yamakaji
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Reduces damage received by 60% for 1 턴",
        specialName: "Appreciation For The Great Men",
    },
    1225: { // Story Hina
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Delays all enemies for 1 턴, and locks own orb for 1 턴",
        specialName: "Binding Iron Tablet",
    },
    1226: { // Story Smoker
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10% and changes own orb into [PSY]",
        specialName: "Seastone Truncheon",
    },
    1227: { //Story Mihawk
        captain: "Reduces cooldown of Slasher specials by 2 턴 at the start of the fight. Boosts ATK of Slasher characters by 2.25x",
        special: "Deals 100,000 fixed damage to one enemy, and boosts own ATK by 1.75x for 1 턴 ",
        specialName: "Black Blade - Slashing Burial Drop",
    },
    1228: { // Story Kizaru
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "For Shooter characters, changes [BLOCK] orbs into Matching, and deals large [DEX] damage to all enemies",
        specialName: "The Cave of the Sun Goddess",
    },
    1229: {//Sentomaru
        captain: "Boosts ATK of Powerhouse characters by 2x, and his OWN ATK by 2x.",
        special: [
            {
                "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
                "cooldown": [ 15, 8 ],
            },
            {
                "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 턴",
                "cooldown": [ 22, 15 ], 
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Cannot be Blown Away (Such as Raid Boss Kuma)",
        specialName: "Leg-Locked Heave-Ho",
    },
    1230: {//Sentomaru
        captain: "Boosts ATK of Powerhouse characters by 2.5x, but boost his OWN ATK by 2.75x. Reduces damage received by 10%",
        special: [
            {
                "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
                "cooldown": [ 15, 8 ],
            },
            {
                "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 턴",
                "cooldown": [ 22, 15 ], 
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Cannot be Blown Away (Such as Raid Boss Kuma)",
        specialName: "Leg-Locked Heave-Ho",
    },
    1231: {//Smoker
        captain: "Boosts ATK of Striker and Driven characters by 1.75x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.25x",
        captainNotes: "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.1875x",
        special: "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 턴",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap.",
        specialName: "Armed - White Launcher",
        sailor: "Boosts base ATK of Striker characters by 50",
    },
    1232: {//Smoker
        captain: "Boosts ATK of Striker and Driven characters by 2.25x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.3x",
        captainNotes: "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.925x",
        special: "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 턴",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
        specialName: "Armed - White Launcher",
        sailor: "Boosts base ATK of Striker characters by 50",
    },
    1233: {//Tashigi
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x, and their RCV by 1.2x",
        captainNotes: "Attack boost stacks, so a Slasher Cerebral unit has 2.25x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 턴",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Cutting Drizzle",
        sailor: "Boosts base RCV of Slasher characters by 30",
    },
    1234: {//Tashigi
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.6x, and their RCV by 1.3x",
        captainNotes: "Attack boost stacks, so a Slasher Cerebral unit has 2.56x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 턴",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Cutting Drizzle",
        sailor: "Boosts base RCV of Slasher characters by 30",
    },
    1235: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 1.75x, deals 3x character's ATK to all enemies at the end of each 턴",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 턴",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 턴",
    },
    1236: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 2x, deals 5x character's ATK to all enemies at the end of each 턴",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 턴",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 턴",
    },
    1237: {//Bastille
        captain: "Boosts ATK of all characters by 2x after the 15th hit in the chain",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 턴.",
        specialName: "Shark Cutter - Flash",
        sailor: "Makes [QCK] orbs \"beneficial\" for this unit"
    },
    1238: {//Bastille
        captain: "Boosts ATK of all characters by 2x after the 15th hit in the chain and by 3x after the 30th hit",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 턴.",
        specialName: "Shark Cutter - Flash",
        sailor: "Makes [QCK] orbs \"beneficial\" for this unit"
    },
    1239: {//6* Kizaru :: modified
        captain: "모험 시작 시 필살기 턴을 1턴 단축하고, 일당의 공격력이 2배, 회복력이 1.3배가 된다. ‘팔척경곡옥’을 사용한 턴은 일당의 공격력이 3배가 된다",
        specialName: "팔척경곡옥",
        special: [
            {
                "description": "사격형과 참격형의 슬롯을 속성 일치 슬롯 이외는 랜덤으로 바꾸고, 무작위의 적에게 무 속성의 낮은 랜덤 데미지를 10회 준다",
                "cooldown": [ 6, 3 ],
            },
            {
                "description": "사격형과 참격형의 슬롯을 속성 일치 슬롯 이외는 랜덤으로 바꾸고, 체력을 소량 회복하며, 무작위의 적에게 무 속성의 랜덤 데미지를 10회 준다",
                "cooldown": [ 12, 9 ],
            },
            {
                "description": "사격형과 참격형의 슬롯을 속성 일치 슬롯으로 바꾸고, 체력을 중량 회복하며, 무작위의 적에게 무 속성의 큰 랜덤 데미지를 10회 준다",
                "cooldown": [ 20, 17 ], 
            },
        ],    
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}",
    },
    1240: {//6* Kizaru :: modified
        captain: "모험 시작 시 필살기 턴을 1턴 단축하고, 일당의 공격력이 2배, 회복력이 1.3배가 된다. ‘팔척경곡옥’을 사용한 턴은 일당의 공격력이 3배가 된다",
        specialName: "팔척경곡옥",
        special: [
            {
                "description": "사격형과 참격형의 슬롯을 속성 일치 슬롯 이외는 랜덤으로 바꾸고, 무작위의 적에게 무 속성의 낮은 랜덤 데미지를 10회 준다",
                "cooldown": [ 6, 3 ],
            },
            {
                "description": "사격형과 참격형의 슬롯을 속성 일치 슬롯 이외는 랜덤으로 바꾸고, 체력을 소량 회복하며, 무작위의 적에게 무 속성의 랜덤 데미지를 10회 준다",
                "cooldown": [ 12, 9 ],
            },
            {
                "description": "사격형과 참격형의 슬롯을 속성 일치 슬롯으로 바꾸고, 체력을 중량 회복하며, 무작위의 적에게 무 속성의 큰 랜덤 데미지를 10회 준다",
                "cooldown": [ 20, 17 ], 
            },
        ],
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}",
    },
    1241: {//Fortnight Koala
        captain: "Boosts chain multiplier by 1.5x. Recovers 1x character's RCV in HP at the end of each 턴",
        special: "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 턴",
        specialNotes: "#{additionalDamage : 15x}",
        specialName: "Fishman Karate, Midair Upwards Kick",
    },
    1242: {//Fortnight Koala
        captain: "Boosts chain multiplier by 2x. Recovers 2x character's RCV in HP at the end of each 턴",
        special: "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 턴",
        specialNotes: "#{additionalDamage : 15x}",
        specialName: "Fishman Karate, Midair Upwards Kick",
    },
    1243: {// Fortnight Hack
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 1.69x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1244: {// Fortnight Hack
        captain: "Boosts ATK of Fighter characters by 1.75x and the ATK of Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 2.275x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1245: {// Event Luffy
        captain: "Boosts ATK of Fighter characters by 1.75x. If HP is below 10%, boosts ATK of Fighter characters by 3x instead.",
        special: "Deals random [QCK] damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 턴. If \"Firefly Light, Fiery Doll\" is used again in the same 턴 the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Gomu Gomu no Stamp Gatling",
        specialNotes: "Firefly Light, Fiery Doll is Event Ace's special ability.",
    },
    1246: {// Event Ace
        captain: "Boosts ATK of Fighter characters by 1.2x",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 턴. If \"Gomu Gomu no Stamp Gatling\" is used again in the same 턴 the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1247: {// Event Ace
        captain: "Boosts HP of Fighter characters by 1.2x and their ATK by 2.75x if they have a matching orb, by 2x otherwise",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 턴. If \"Gomu Gomu no Stamp Gatling\" is used again in the same 턴 the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1248: {// Kimono Marco
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 1.69x",
        special: "Recovers 3,000 HP and reduces damage received by 50% for 1 턴",
        specialName:"Shining Daylight - Dayflower",
    },
    1249: {// Kimono Marco
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.6x",
        captainNotes: "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 2.56x",
        special: "Recovers 3,000 HP and reduces damage received by 50% for 1 턴",
        specialName:"Shining Daylight - Dayflower",
    },
    1250: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 1.5x and Recovers a variable amount of character's RCV in HP at the end of each 턴 depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 3.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
    },
    1251: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 2x and Recovers a variable amount of character's RCV in HP at the end of each 턴 depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 2.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
    },
    1252: {// Coliseum Doma
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of [INT] characters by 2x",
        special: "Changes adjacent orbs into [INT] orbs. Deals 20x character's ATK in [INT] damage to all enemies.",
        specialName: "Reversed Twin Blades - Surprise Thrust",
        sailor: "Reduces own Silence by 1 턴",
        sailorNotes: "#{silence}",
    },
    1253: {// Coliseum Shura
        captain: "Boosts ATK of [DEX] characters by 2.25x if HP is above 99% at the start of the 턴",
        special: "Makes PERFECTs harder to hit for 1 턴. If during that 턴 every unit scores a PERFECT hit, boosts ATK of [DEX] characters by 1.75x in the following 턴.",
        specialName: "Angry Instigator",
    },
    1254: {//FN Squard
        captain: "Boosts ATK of Striker characters by 2.5x until the first hit other than PERFECT. Reduce crew's current HP by 5% at the end of each 턴.",
        special: "Deals 10x character's ATK in fixed damage to one enemy, reduces crews current HP by 30% and reduces enemies defense by 80% for one 턴",
        specialName: "Sword Attack Without Hesitation",
        sailor: "Reduces his own Numbness by 1 턴"
    },
    1255: {//FN DeCalvan
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2x after the 16th hit, by 2.5x after the 22nd hit",
        special: "For 1 턴, makes PERFECTs slightly easier to hit and amplifies the effect of orbs by 1.5x",
        sailor: "When HP is below 30% at the start of the 턴, boost base ATK of Fighter characters by 40",
        specialName: "Large Fleet Commander",
    },
    1256: {//FN Whitey Bay
        captain: "Boosts ATK of Slasher and Driven characters by 2x and reduces their RCV by 90%",
        special: "For Slasher and Driven characters, randomizes non-matching orbs, boosts Atk against enemies with increased defense by 1.3x for 1 턴",
        sailor: "Boosts base ATK and RCV of Driven characters by 10",
        specialName: "Icebreaker Breakthrough Force",
    },
    1257: {//Young Whitebeard
        captain: "Boosts ATK of all characters by 2x 전투 시작 시 체력이 50% 미만이면",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 23, 11 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 28, 16 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 40%",
                "cooldown": [ 36, 24 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Earth Shattering Fist",
    },
    1258: {//Young Whitebeard Evolved
        captain: "Boosts ATK of all characters by 2.5x 전투 시작 시 체력이 50% 미만이면",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 23, 11 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 28, 16 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 40%",
                "cooldown": [ 36, 24 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Earth Shattering Fist",
    },
    1259: {//Young Doflamingo
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Deals 25x character's ATK in typeless damage to all enemies. For 3 턴, makes [STR], [DEX], [QCK], [PSY], and [INT] orbs \"beneficial\" for Driven characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Five Color Strings (Goshikito)",
    },
    1260: {//Young Doflamingo
        captain: "Reduces cooldown of Driven specials by 1 턴 at the start of the fight. Boosts ATK of Driven characters by 2.5x",
        special: "Deals 25x character's ATK in typeless damage to all enemies. For 3 턴, makes [STR], [DEX], [QCK], [PSY], and [INT] orbs \"beneficial\" for Driven characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Five Color Strings (Goshikito)",
    },
    1261: {//Young Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 1.5x. Heals for .75x his RCV at the end of the 턴 each time you hit a PERFECT.",
        special: "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 턴",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Blood and Gunpowder of the Underground Family",
    },
    1262: {//Young Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 1.75x. Heals for .75x his RCV at the end of the 턴 each time you hit a PERFECT.",
        special: "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 턴",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Blood and Gunpowder of the Underground Family",
    },
    1263: {//Young Vergo
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 턴",
        specialName: "Iron Leg Sanctions",
    },
    1264: {//Young Vergo
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 턴",
        specialName: "Iron Leg Sanctions",
    },
    1265: {//Kimono Ace
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 턴",
        specialName: "Looking to the Full Moon",
    },
    1266: {//Kimono Ace Evo
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 턴",
        specialName: "Looking to the Full Moon",
    },
    1267: {//Legend Blackbeard
        captain: "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter, and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
        captainNotes: "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
        special: "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
        specialNotes: "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
        specialName: "World Shaking Impact",
    },
    1268: {//Legend Blackbeard :: modified
        captain: "적의 방어 효과를 무시하고 일반 공격을 할 수 있지만, 일당의 방어 효과가 모두 무효가 된다. 또한 일당에 격투형, 참격형, 타격형, 사격형이 모두 편성되어 있을 시 일당의 공격력이 2.75배, 체력은 1.5배가 된다",
        captainNotes: "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
        special: "적 전체의 HP를 30% 줄인다(자신이 선장, 조력자 선장, 친구 선장일 때는 모든 방어 효과를 관통한다)",
        specialNotes: "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
        specialName: "세계를 뒤흔드는 충격",
    },
    1269: {//Laffitte
        captain: "Recovers 3x character's RCV in HP at the end of each 턴. Deals 3x character's ATK in [DEX] damage to all enemies at the end of each 턴.",
        special: "Reduces Bind and Despair duration by 2 턴. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 턴",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        sailor: "Boosts base ATK of all characters by 100 if your captain is a Driven character",
        specialName: "Horrifying Suggestion",
    },
    1270: {//Laffitte
        captain: "Recovers 3x character's RCV in HP at the end of each 턴. Deals 7x character's ATK in [DEX] damage to all enemies at the end of each 턴.",
        special: "Reduces Bind and Despair duration by 2 턴. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 턴",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        sailor: "Boosts base ATK of all characters by 100 if your captain is a Driven character",
        specialName: "Horrifying Suggestion",
    },
    1271: {//Van Augur :: modified
        captain: "사격형 캐릭터의 공격력이 2배가 된다",
        special: "상단의 슬롯을 속성 일치 슬롯으로 바꾸고, 1턴 동안 사격형 캐릭터의 슬롯의 영향을 상당히 증폭시킨다",
        sailor: "의성어 은폐 상태를 5턴 회복한다",
        specialName: "저편의 운명",
    },
    1272: {//Van Augur :: modified
        captain: "모험 시작 시 사격형 캐릭터의 필살기 턴을 1턴 단축하고, 사격형의 공격력이 2.5배가 된다",
        special: "상단의 슬롯을 속성 일치 슬롯으로 바꾸고, 1턴 동안 사격형 캐릭터의 슬롯의 영향을 상당히 증폭시킨다",
        sailor: "의성어 은폐 상태를 5턴 회복한다",
        specialName: "저편의 운명",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "회복력 상승 : 20" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "체력 상승 : 60" },
            { "description": "체력 상승 : 60" },
            { "description": "회복력 상승 : 20" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 90" },
            { "description": "회복력 상승 : 30" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "선원효과 추가 1: Boosts base ATK of Shooter characters by 60" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
                    "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    1273: {//Jesus Burgess
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 1.2",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK and 1.44x HP",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 턴",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "자이언트 슬로우빌딩",
    },
    1274: {//Jesus Burgess :: modified
        captain: "격투형과 강인형의 공격력이 각각 1.6배, 체력이 각각 1.15배가 된다",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.56x ATK and 1.44x HP",
        special: "적 전체에 [STR] 큰 데미지를 주고, 5턴 동안 격투형 캐릭터의 공격력을 1.5배로 만든다",
        sailor: "일당의 기본 체력이 75 상승한다",
        specialName: "자이언트 슬로우빌딩",
    },
    1275: {//Shiliew
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        special: "For each enemy, has a small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : 25%}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Handling Hell",
    },
    1276: {//Shiliew
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        special: "For each enemy, has a small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : 25%}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Handling Hell",
    },
    1277: {//Doc Q
        captain: "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.25x if HP is above 99% at the start of the 턴",
        special: "Reduces crew's current HP by 10%. Changes [BLOCK], [TND], and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
        specialName: "Reaping of Desperate Lives",
    },
    1278: {//Doc Q
        captain: "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.75x if HP is above 99% at the start of the 턴",
        special: "Reduces crew's current HP by 10%. Changes [BLOCK], [TND], and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
        specialName: "Reaping of Desperate Lives",
    },
    1279: {//John Giant
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        special: "Reduces damage received in the next 턴 by 50% if the special is activated with less than 50% health remaining",
        specialName: "Manifesto to the Weak",
    },
    1280: {//Marineford Aokiji
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Deals 10,000 fixed damage to all enemies and locks all orbs for 1 턴",
        specialName: "Ice Chunks - Trident",
    },
    1281: {//Marineford Garp
        captain: "Boosts ATK of Fighter characters by 2.25x and reduces damage received by 10%",
        special: "Deals 25x character's ATK in [STR] damage to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Fist of Love - Falling Fortress",
    },
    1282: {//Marineford Sengoku
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Reduces cooldown of all specials by 1 턴. Boosts ATK of all characters by 1.2x and amplifies the effect of orbs by 1.2x for 1 턴",
        specialName: "Encircling Wall around Marineford Bay",
    },
    1283: {//Marineford Akainu
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Deals 35x character's ATK in [INT] damage to one enemy. Boosts ATK of Driven characters by 1.5x for 1 턴",
        specialName: "Dark Dog",
    },
    1284: {//Wild Luffy
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.2x",
        special: "Reduces Bind and Silence duration by 3 턴. Randomizes non-matching orbs including [BLOCK] orbs",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this character by 3 턴",
        sailorNotes: "#{silence}",
        specialName: "Wild Hunt",
    },
    1285: {//Wild Luffy Evolved
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.25x. Boosts ATK of Striker characters by 3.375x after scoring 3 PERFECTs in a row.",
        special: "Reduces Bind and Silence duration by 3 턴. Randomizes non-matching orbs including [BLOCK] orbs",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this character by 3 턴",
        sailorNotes: "#{silence}",
        specialName: "Wild Hunt",
    },
    1286: {//Kid Baby 5
        captain: "Boosts ATK and RCV of [PSY] characters by 1.3x",
        special: "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
        specialName: "Handgun Legs",
    },
    1287: {//Kid Baby 5
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x",
        special: "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
        specialName: "Handgun Legs",
    },
    1288: {//Kid Law
        captain: "Boosts ATK of Driven characters by 2.5x, reduces crew's current HP by 10% at the end of each 턴, reduces his own ATK multiplier by 0.1x at the end of each 턴",
        captainNotes: "His ATK multiplier will be 2.5x on the first 턴, 2.4x on the second, 2.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces Special Cooldown of Driven specials by 1 턴. If during that 턴 every unit scores a PERFECT hit, reduces Special Cooldown of Driven specials by 1 턴.",
        specialName: "Outcome of Sparta",
    },
    1289: {//Kid Law
        captain: "Boosts ATK of Driven characters by 2.75x, reduces crew's current HP by 10% at the end of each 턴, reduces his own ATK multiplier by 0.1x at the end of each 턴",
        captainNotes: "His ATK multiplier will be 2.75x on the first 턴, 2.65x on the second, 2.55x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces Special Cooldown of Driven specials by 1 턴. If during that 턴 every unit scores a PERFECT hit, reduces Special Cooldown of Driven specials by 1 턴.",
        specialName: "Outcome of Sparta",
    },
    1290: {//Kid Buffalo
        captain: "Recovers 500 HP at the end of each 턴",
        special: "Changes own orb into [INT], and Captain orb into [BOMB]",
        specialName: "Rude Prank",
    },
    1291: {//Lao G, Coliseum
        captain: "Boosts ATK of Driven characters by 1.75x",
        special: "Changes [PSY], [INT], [RCV], and [TND] orbs into [G] orbs. Locks orbs for 1 턴. If during that 턴 every unit scores a PERFECT hit, changes [G] orbs into Matching Orbs",
        specialName: "Lower Back Pain Stance - The Eyes of Blight Impact",
    },
    1292: {//Lao G, Coliseum
        captain: "Boosts ATK of Driven characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Changes [PSY], [INT], [RCV], and [TND] orbs into [G] orbs. Locks orbs for 1 턴. If during that 턴 every unit scores a PERFECT hit, changes [G] orbs into Matching Orbs",
        specialName: "Lower Back Pain Stance - The Eyes of Blight Impact",
    },
    1293: {//Coliseum Sandersonia
        captain: "Boosts ATK of Fighter characters by 1.75x, deals 2 times the damage received in the previous 턴 in [PSY] damage to all enemies at the end of each 턴",
        special: [
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by 40%",
                "cooldown": [ 21, 11 ],
            },
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by a variable factor.",
                "cooldown": [ 26, 16 ],
            },
        ],
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
        specialName: "Snake Dance",
    },
    1294: {//Coliseum Sandersonia
        captain: "Boosts ATK of Powerhouse characters by 2x, deals 4 times the damage received in the previous 턴 in [PSY] damage to all enemies at the end of each 턴",
        special: [
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by 40%",
                "cooldown": [ 21, 11 ],
            },
            {
                "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by a variable factor.",
                "cooldown": [ 26, 16 ],
            },
        ],
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
        specialName: "Snake Dance",
    },
    1295: {//Halloween Kalifa
        captain: "Boosts ATK and RCV of [STR] characters by 1.5x",
        special: "Reduces Paralysis duration by 3 턴, removes Poison, and reduces the defense of all enemies by 100% for 1 턴",
        specialName: "Mysterious Hour of the Dark Night",
    },
    1296: {//Halloween Kalifa
        captain: "Boosts ATK of [STR] characters by 2x and their RCV by 1.5x",
        special: "Reduces Paralysis duration by 3 턴, removes Poison, and reduces the defense of all enemies by 100% for 1 턴",
        specialName: "Mysterious Hour of the Dark Night",
    },
    1297: {//Akainu
        captain: "Boosts ATK by 2.5x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
        special: "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 턴",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption",
    },
    1298: {//Akainu
        captain: "Boosts ATK by 3x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
        special: "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 턴",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption",
    },
    1299: {//Halloween Rebecca
        captain: "Boosts ATK and RCV of [INT] characters by 1.2x",
        special: "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 턴",
        specialName: "Driving Away Evil Spirits of Sin - Cat Pose",
    },
    1300: {//Halloween Rebecca
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 턴",
        specialName: "Driving Away Evil Spirits of Sin - Cat Pose",
    },
    1301: {//Jailbreak Buggy
        captain: "Boosts ATK of Slasher characters by 1.75x",
        special: "Reduces crew's HP to 1, empties all slots, and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Special Muggy Ball",
    },
    1302: {//Jailbreak Buggy
        captain: "Boosts ATK of Slasher characters by 1.75x and boosts ATK of Driven characters by 1.5x",
        captainNotes: "The bonus is cumulative. Slasher Driven characters get a 2.625x bonus.",
        special: "Reduces crew's HP to 1, empties all slots, and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Special Muggy Ball",
    },
    1303: {//Jailbreak Mr. 3
        captain: "Boosts ATK of Cerebral characters by 1.5x. If you don't attack with Mr. 3, reduces damage received by 10% for that 턴.",
        special: "Reduces damage received by 60% for 2 턴",
        specialName: "Extra Large Candle Wall",
    },
    1304: {//Jailbreak Mr. 3
        captain: "Boosts ATK of Cerebral characters by 2x. If you don't attack with Mr. 3, reduces damage received by 10% for that 턴.",
        special: "Reduces damage received by 60% for 2 턴",
        specialName: "Extra Large Candle Wall",
    },
    1305: {//Halloween Sugar
        captain:  "Boosts ATK of Cerebral characters by 1.3x and recovers 500 HP at the end of each 턴",
        special: "Changes Badly Matching, [BLOCK], and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 턴",
        specialName: "Aggressive 'Trick-Or-Treat'",
    },
    1306: {//Halloween Sugar
        captain:  "Boosts ATK of Cerebral characters by 1.75x and recovers 1,000 HP at the end of each 턴",
        special: "Changes Badly Matching, [BLOCK], and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 턴",
        specialName: "Aggressive 'Trick-Or-Treat'",
    },
    1307: {//Halloween Bartolomeo
        captain: "Boosts ATK of Driven characters by 1.75x. If you don't attack with Bartolomeo, reduces damage received by 10% for that 턴.",
        special: "Reduces damage received by 50% for 1 턴. If during that 턴 every unit scores a PERFECT hit, reduces damage received by 80% in the following 턴",
        specialName: "Vulgar Provocation",
    },
    1308: {//Halloween Bartolomeo
        captain: "Boosts ATK of Driven characters by 2x. If you don't attack with Bartolomeo, reduces damage received by 20% for that 턴.",
        special: "Reduces damage received by 50% for 1 턴. If during that 턴 every unit scores a PERFECT hit, reduces damage received by 80% in the following 턴",
        specialName: "Vulgar Provocation",
    },
    1309: {//Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each 턴",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 턴 and if HP is above 70%, changes adjacent orbs into Matching Orbs",
        specialName: "Poof",
    },
    1310: {//Coliseum Kinemon :: modified
        captain: "자유형 캐릭터의 공격력을 2.5배로 만들고, 턴 종료 시 회복력x2배의 체력을 회복한다",
        special: "참격형과 자유형의 필살기 턴을 1턴 단축하고, 남은 체력이 70% 이상일 때 인접한 슬롯을 속성 일치 슬롯으로 바꾼다",
        specialName: "도롱",
    },
    1311: {//Coliseum Marigold
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 턴",
        specialNotes: "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
        specialName: "King Cobra Machetes",
    },
    1312: {//Coliseum Marigold
        captain: "Boosts ATK and HP of Powerhouse characters by 1.75x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 턴",
        specialNotes: "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
        specialName: "King Cobra Machetes",
    },
    1313: {//Akainu :: modified
        captain: "일당의 공격력을 2.25배로 만들고, [STR] 슬롯이 나온 캐릭터의 공격력은 1.75배 더 상승하며, [STR] 슬롯 출현율이 상승한다",
        special: "적 전체에 무 속성 초월 데미지를 주고, [STR] 슬롯 외의 다른 슬롯을 랜덤으로 바꾸며 코스트 50 이상인 캐릭터의 공격력을 2턴동안 1.75배로 만든다",
        specialName: "유성화산",
    },
    1314: {//Akainu
       captain: "일당의 공격력을 2.25배로 만들고, STR슬롯이 나온 캐릭터의 공격력은 1.76배 더 상승하며, STR슬롯 출현율이 상승한다.",
        special: "적 전체에 무 속성(x125배) 초월데미지를 주고, STR슬롯 외의 다른 슬롯을 랜덤으로 바꾸며, 코스트 50이상인 캐릭터의 공격력을 2턴동안 1.76배로 만든다.",
        specialName: "유성화산",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 40" },
            { "description": "선원효과 추가 1: 자신이 QCK에게 입히는 통상 공격 데미지 2배 증가한다." },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 50" },
            { "description": "잠재능력 습득 2: Enrage" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "잠재능력 소켓슬롯 추가 : 1" },
            { "description": "체력 상승 : 60" },
            { "description": "체력 상승 : 60" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 25" },
            { "description": "공격력 상승 : 25" },
            { "description": "공격력 상승 : 30" },
            { "description": "잠재능력 습득 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: 만약 PERFECT를 적중하면, 20% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
                    "Level 2: 만약 PERFECT를 적중하면, 30% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
                    "Level 3: 만약 PERFECT를 적중하면, 40% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
                    "Level 4: 만약 PERFECT를 적중하면, 50% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
                    "Level 5: 만약 PERFECT를 적중하면, 50% 확률로 캐릭터 공격력의 10%에 해당하는 추가데미지를 입힌다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 40",
                    "Level 3: 공격력 상승 : 60",
                    "Level 4: 공격력 상승 : 80",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 7턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태가 무효화된다."
                ]
            },
        ],
    },
    1315: {//Coby
        captain: "Boosts ATK of all characters by 2x after the 2nd PERFECT in a row and by 3x after the 5th PERFECT in a row.",
        special: [
            {
                "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 1 턴. Recovers 3x character's RCV in HP",
                "cooldown": [ 15, 9 ],
            },
            {
                "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 3 턴. Recovers 6x character's RCV in HP",
                "cooldown": [ 20, 14 ],
            },
            {
                "description": "If HP is below 3,000 when the special is activated, removes No Healing debuff. Recovers 13x character's RCV in HP",
                "cooldown": [ 24, 18 ],
            },
        ],
        specialNotes: "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
        sailor: "Reduces Blindness duration by 5 턴",
        specialName: "Echoing Cry of the Soul",
    },
    1316: {//Coby :: modified
        captain: "PERFECT 타이밍을 2연속, 5연속 성공 시에 이후 캐릭터의 공격력이 각각 2.5배, 3.5배가 된다",
        special: [
            {
                "description": "남은 체력이 3,000 이하인 경우, 회복 무효 상태를 1턴 줄이고, 회복력x3배의 체력을 회복한다",
                "cooldown": [ 15, 9 ],
            },
            {
                "description": "남은 체력이 3,000 이하인 경우, 회복 무효 상태를 3턴 줄이고, 회복력x6배의 체력을 회복한다",
                "cooldown": [ 20, 14 ],
            },
            {
                "description": "남은 체력이 3,000 이하인 경우, 회복 무효 상태를 해제하고 회복력x13배의 체력을 회복한다",
                "cooldown": [ 24, 18 ],
            },
        ],
        specialNotes: "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
        sailor: "의성어 은폐 상태를 5턴 회복한다",
        specialName: "메아리치는 영혼의 외침",
    },
    1317: {//Garp :: modified
        captain: "[STR] 캐릭터와 [PSY] 캐릭터의 공격력이 2배가 된다",
        special: "적 전체에 방어 효과를 무시하고 공격력x30배의 [STR] 데미지를 주며, 1턴 동안 적 전체를 지연시켜 방어력을 크게 줄인다",
        specialNotes: "#{ignoreBarrier}",
        sailor: "일당의 기본 체력이 75 상승한다",
        specialName: "초 특대 철구",
    },
    1318: {//Garp
        captain: "Boosts ATK of [STR] and [PSY] characters by 2.5x",
        special: "Deals 30x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 턴. Reduces the defense of all enemies by 80% for 1 턴.",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Super Large Iron Ball",
    },
    1319: {//Lady Tsuru
        captain: "Heals for 1x her RCV at the end of the 턴 each time you hit a Good. Heals for .1x her RCV at the end of the 턴 each time you hit a PERFECT",
        special: "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 턴",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
        sailor: "Reduces Paralysis duration by 1 턴",
        specialName: "A Decree of the Veteran",
    },
    1320: {//Lady Tsuru
        captain: "Heals for 1.5x her RCV at the end of the 턴 each time you hit a Good. Heals for .1x her RCV at the end of the 턴 each time you hit a PERFECT",
        special: "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 턴",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
        sailor: "Reduces Paralysis duration by 1 턴",
        specialName: "A Decree of the Veteran",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 60" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 80" },
            { "description": "Reduce base Special Cooldown by 1" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 80" },
            { "description": "공격력 상승 : 60" },
            { "description": "선원효과 추가 1: Reduces Blindness duration by 3 턴" },
            { "description": "새로운 선장 효과 습득: Boosts ATK of all characters by 1.2x, heals for 1.5x her RCV at the end of the 턴 each time you hit a Good. Heals for .3x her RCV at the end of the 턴 each time you hit a PERFECT" },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
                    "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ]
    },
    1321: {//Momonga :: modified
        captain: "일당에 서로 다른 5속성의 캐릭터가 있을 때, 참격형과 박식형 캐릭터의 공격력이 2.25배가 된다",
        special: "적 전체에 공격력x15배의 [DEX] 데미지를 주고, 지연 중인 적에게 주는 데미지가 2턴 동안 1.5배가 된다",
        specialName: "베어 가르는 전선",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character",
    },
    1322: {//Momonga
        captain: "Boosts ATK of Cerebral and Slasher characters by 2.5x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT], and [PSY] character on your crew.",
        special: "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 턴",
        specialName: "Front Line Dissection",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character",
    },
    1323: {//Onigumo
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Slasher and Driven characters by 1.3x",
        captainNotes: "The bonus is cumulative. Slasher + Driven characters get a 1.69x bonus.",
        special: "Randomize [RCV], [TND], and [BLOCK] orbs. Makes [STR], [DEX], and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 턴",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Onigumo of Dismantling Swordsmanship",
        sailor: "Reduces Paralysis for 5 턴 for himself"
    },
    1324: {//Onigumo
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Slasher and Driven characters by 1.6x",
        captainNotes: "The bonus is cumulative. Slasher + Driven characters get a 2.56x bonus.",
        special: "Randomize [RCV], [TND], and [BLOCK] orbs. Makes [STR], [DEX], and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 턴",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Onigumo of Dismantling Swordsmanship",
        sailor: "Reduces Paralysis for 5 턴 for himself"
    },
    1325: {//Halloween Corazon
        captain: "Recovers 3x character's RCV in HP at the end of each 턴",
        special: "If HP is above 99%, changes [STR], [DEX], and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
        specialName: "Amulet Flame",
    },
    1326: {//Halloween Corazon
        captain: "Boosts ATK by 1.3x and recovers 4x character's RCV in HP at the end of each 턴",
        special: "If HP is above 99%, changes [STR], [DEX], and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
        specialName: "Amulet Flame",
    },
    1327: {//Fornight Leo
        captain: "Boosts ATK of characters with cost 20 or less by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
                "cooldown": [ 19, 12 ],
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Tail Hammer",
    },
    1328: {//Fornight Leo
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: [
            {
                "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
                "cooldown": [ 19, 12 ],
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Tail Hammer",
    },
    1329: {//Wicca
        captain: "Reduces cooldown of Fighter and Free Spirit specials by 1 턴 at the start of the fight. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 6 fixed damage to all enemies. Randomizes orbs of upper row characters",
                "cooldown": [ 9, 3 ],
            },
            {
                "description": "Deals 15 fixed damage to all enemies. Recovers 3x character's RCV in HP",
                "cooldown": [ 11, 5 ],
            },
            {
                "description": "Deals 300 fixed damage to all enemies. Boosts the Color Affinity of Fighter and Free Spirit characters by 1.25x",
                "cooldown": [ 16, 10 ],
            },
        ],
        specialName: "The Work of Fairies",
        specialNotes: "#{colorAffinity : 1.25}<br>#{stages}",
    },
    1330: {//Gancho
        captain: "Boosts ATK of Striker characters by 1.5x and recovers 2x character's RCV in HP at the end of each 턴",
        special: "Switches orbs between slots twice. Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 턴",
        specialName: "Tonta Knowledge",
    },
    1331: {//Mansherry
        captain: "Recovers 2x character's RCV in HP at the end of each 턴",
        special: [
            {
                "description": "Reduces Bind duration for one character by 4 턴. Recovers 7x character's RCV in HP.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Reduces Bind duration for one character by 7 턴. Recovers 15x character's RCV in HP.",
                "cooldown": [ 24, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Tears of Healing",
    },
    1332: {//Mansherry
        captain: "Recovers 3x character's RCV in HP at the end of each 턴",
        special: [
            {
                "description": "Reduces Bind duration for one character by 4 턴. Recovers 7x character's RCV in HP.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Reduces Bind duration for one character by 7 턴. Recovers 15x character's RCV in HP.",
                "cooldown": [ 24, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Tears of Healing",
    },
    1333: {//Kabu
        captain: "Boosts ATK of [STR] and Powerhouse characters by 1.4x",
        captainNotes: "The bonus is cumulative. [STR] Powerhouse characters get a 1.96x bonus.",
        special: "Slightly boosts chances of getting [STR] orbs and boosts own ATK by 1.2x for 2 턴",
        specialName: "Yellow Kabu Squad",
    },
    1334: {//Bian
        captain: "Boosts ATK of [DEX] and Free Spirit characters by 1.4x",
        captainNotes: "The bonus is cumulative. [DEX] Free Spirit characters get a 1.96x bonus.",
        special: "Poisons all enemies and randomizes all orbs",
        specialName: "Pink Bee Squad",
    },
    1335: {//Wedding Sabo
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight. Boosts ATK of Free Spirit characters by 1.5x.",
        special: "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 턴",
        specialName: "Gentleman's Welcome",
    },
    1336: {//Wedding Sabo
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight. Boosts ATK of Free Spirit characters by 2x.",
        special: "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 턴",
        specialName: "Gentleman's Welcome",
    },
    1337: {//Kanjuro
        captain: "타격, 자유 캐릭터의 공격력이 2배가 된다.",
        special: "타격, 자유 캐릭터의 STR,QCK,DEX,PSY,INT을 자신의 속성 슬롯으로 만들고, 그 외 [RCV],[TND], [EMPTY], [G], [BOMB] 슬롯은 불리한 속성 슬롯으로 변환한다.",
        specialName: "가부키의 필치",
    },
    1338: {//Kanjuro :: modified
        captain: "타격형과 자유형의 공격력을 2.25배로 만들고, 받는 데미지를 10% 감소시킨다",
        special: "타격형과 자유형의 모든 속성 슬롯을 속성 일치 슬롯으로, 다른 슬롯을 [불리] 슬롯으로 바꾼다",
        specialName: "가부키 사무라이의 필치",
    },
    1339: {//Chopper Jump Point
        captain: "Boosts ATK of [DEX] characters by 2.25x",
        special: [
            {
                "description": "Reduces Paralysis duration by 1 턴. Adds .2x to Chain multiplier for 1 턴",
                "cooldown": [ 18, 8 ],
            },
            {
                "description": "Reduces Paralysis duration by 2 턴. Adds .3x to Chain multiplier for 1 턴",
                "cooldown": [ 23, 13 ],
            },
            {
                "description": "Reduces Paralysis duration by 2 턴. Adds .5x to Chain multiplier for 1 턴",
                "cooldown": [ 25, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Flight Power Strengthening - Jump Point",
    },
    1340: {//Gedatsu
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Delays all enemies for 1 턴. Cuts the current HP of all enemies by 10%",
        specialName: "Swamp Cloud Burger",
    },
    1341: {//Getdatsu
        captain: "Boosts ATK of [QCK] characters by 1.75x. After scoring 3 hits below Good in a row, boosts ATK of [QCK] characters by 2.625x instead.",
        special: "Delays all enemies for 1 턴. Cuts the current HP of all enemies by 10%",
        specialName: "Swamp Cloud Burger",
    },
    1342: {//Dadan
        captain: "Boosts HP of [PSY] characters by 1.75x",
        special: "Reduces Silence duration by 2 턴",
        specialNotes: "#{silence}",
        specialName: "Rogue Threat",
    },
    1343: {//Porchemy
        captain: "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2x.",
        special: "Deals 13x character's Atk in [DEX] damage to one enemy, and boosts ATK against enemies with reduced defense by 1.3x for 1 턴",
        specialName: "Spiked Glove of Punishment",
    },
    1344: {//Bluejam
        captain: "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2.25x.",
        special: "Deals 20x character's ATK in [STR] damage to all enemies, and boosts ATK of Driven characters by 1.3x for 1 턴",
        specialName: "Bullet Purge",
    },
    1345: {//Jimbe
        captain: "Boosts ATK of Fighter characters by 2.5x",
        special: "Reduces Despair duration by 5 턴. Reduces Special Cooldown of your top row by 1 턴",
        specialName: "Gathering Strength for a Counter Attack",
    },
    1346: {//Heracles'n
        captain: "Boosts ATK, HP and RCV of Shooter and Cerebral characters by 1.5x",
        special: "Randomizes all orbs, including [BLOCK] orbs, switches orbs between slots 3 times",
        specialName: "Survival Techniques of the Hungry Baron",
    },
    1347: {//Torino Kingdom Monsters
        special: "Change own orb into [PSY], and deals 25x character's attack in [PSY] damage to one enemy",
        specialName: "Tsubami Behemoth",
    },
    1348: {//Humandrills
        special: "Boosts ATK of all characters by 1.2x for 2 턴 and amplifies the effect of orbs by 1.2x for 2 턴",
        specialName: "Imitation Tactics",
    },
    1349: {//Haredas
        captain: "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.75x",
        special: "Empty all slots including [BLOCK] orbs, and boosts ATK of Cerebral characters by 1.2x for 1 턴",
        specialName: "Gust 'Wind Knot'",
    },
    1350: {//Longarm Tribe Theives
        special: "Switches orbs between slots 3 times",
        specialName: "Longarm Tribe of Tehna Gehna",
    },
    1351: {//Tequila Wolf Guard
        special: "Reduces the defense of all by 50% and delays all enemies for 1 턴",
        specialName: "Covering Fire",
    },
    1352: {//Ivankov
        captain: "Boosts ATK of Fighter characters by 2x at the start of the chain, boosts Atk of Fighter characters by 3.5x after the 5th PERFECT in a row",
        special: "Following the activation of the special, if every unit scores a PERFECT hit, reduces damage received by 90% in the following 턴",
        specialName: "Rolling Beauty",
    },
    1353: {//Rayleigh
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Deals 50,000 Fixed damage to one enemy, adds 0.5 to Chain multiplier for 1 턴",
        specialName: "Guidence to Control Haki",
    },
    1354: {//Secret Rayleigh
        captain: "Boosts chain multiplier by 2x, recovers 1.5x character's RCV in HP at the end of each 턴",
        special: "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Straight Stimultaion",
        specialNotes: "#{orb : 1.5x}",
    },
    1355: {//Secret Rayleigh
        captain: "Boosts chain multiplier by 3x, recovers 1.5x character's RCV in HP at the end of each 턴",
        special: "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Straight Stimultaion",
        specialNotes: "#{orb : 1.5x}",
    },
    1356: {//Pekoms
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes PERFECTs easier to hit for 1 턴.",
        specialName: "Serious Threat",
        specialNotes: "Increases timing window to hit a PERFECT. (Animation remains the same)"
    },
    1357: {//Pekoms
        captain: "Boosts ATK, HP and RCV of Powerhouse characters by 1.5x",
        special: "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes PERFECTs easier to hit for 1 턴.",
        specialName: "Serious Threat",
        specialNotes: "Increases timing window to hit a PERFECT. (Animation remains the same)"
    },
    1358: {//Tamago
        captain: "Boosts ATK of Cerebral characters by 1.5x and the HP of Striker characters by 1.5x",
        special: "Boosts RCV of all characters by 1.75x and delays all enemies by 1 턴.",
        specialName: "The Long Legged Gentleman's Resolution",
    },
    1359: {//Tamago
        captain: "Boosts ATK of Cerebral characters by 1.75x and the HP of Striker characters by 1.75x",
        special: "Boosts RCV of all characters by 1.75x and delays all enemies by 1 턴.",
        specialName: "The Long Legged Gentleman's Resolution",
    },
    1360: {//Winter Luffy
        captain: "Boosts ATK characters with cost 30 or less by 2x and their HP by 1.2x",
        special: "Changes own orb into [QCK], deals 15x character's ATK in [QCK] damage to one enemy",
        specialName: "Gum-Gum Twin Jet Pistol: Snowflake",
    },
    1361: {//6* Zoro :: modified
        captain: "일당에 참격형이 5명 이상이면 참격형의 공격력을 2.5배, 체력을 1.5배로 만들 뿐만 아니라 이전 턴에서 적을 1명이라도 격파했으면 참격형의 공격력이 3배가 되고 참격형이 아닌 캐릭터의 공격력이 1.2배가 된다",
        captainNotes: "You only need to kill at least 1 character in the last 턴 to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
        special: "적 전체에게 공격력x60배의 무 속성 데미지를 주고, 1턴 동안 참격형 캐릭터의 공격력이 자신이 선장 또는 조력자 선장 또는 친구 선장일 때는 2배, 선원일 때는 1.75배가 된다",
        specialName: "삼도류 비기 육도의 갈림길",
    },
    1362: {//6* Zoro
        captain: "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last 턴, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "You only need to kill at least 1 character in the last 턴 to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
        special: "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 턴. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 턴 instead",
        specialName: "Three Blade Style Secret Skill: Crossroad of Six Paths",
    },
    1363: {//Timeskip Franky :: modified
        captain: "[PSY] 캐릭터의 공격력이 2배가 되고, 받는 데미지를 10% 줄인다",
        special: "적 전체에게 공격력x25배의 [PSY] 데미지를 주고, 1턴 동안 [PSY] 캐릭터의 슬롯의 영향이 2배가 된다",
        specialNotes: "#{orb : 2x}",
        sailor: "[PSY] 캐릭터의 기본 체력이 100 상승한다",
        specialName: "프랑키~~ 파이어볼",
    },
    1364: {//Timeskip Franky :: modified
        captain: "[PSY] 캐릭터의 공격력이 2.5배가 되고, 받는 데미지를 10% 줄인다",
        special: "적 전체에게 공격력x25배의 [PSY] 데미지를 주고, 1턴 동안 [PSY] 캐릭터의 슬롯의 영향이 2배가 된다",
        specialNotes: "#{orb : 2x}",
        sailor: "[PSY] 캐릭터의 기본 체력이 100 상승한다",
        specialName: "프랑키~~ 파이어볼",
    },
    1365: {//Timeskip Nami
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: [
            {
                "description": "Reduces Paralysis and Silence duration by 1 턴. Delays all enemies for 1 턴",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 2 턴. Delays all enemies for 1 턴",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 5 턴. Delays all enemies for 2 턴",
                "cooldown": [ 18, 13 ],
            },
        ],
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}<br>#{stages}",
        specialName: "Black Ball - Thundercloud Rod",
    },
    1366: {//Timeskip Nami :: modified
        captain: "박식형 캐릭터의 공격력과 회복력이 1.5배가 되고, 슬롯 일치 시엔 공격력이 2.75배가 된다",
        special: [
            {
                "description": "마비, 필살기 봉쇄 상태를 1턴 회복하고 적 전체를 1턴 지연시킨다",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "마비, 필살기 봉쇄 상태를 2턴 회복하고 적 전체를 1턴 지연시킨다",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "마비, 필살기 봉쇄 상태를 5턴 회복하고 적 전체를 2턴 지연시킨다",
                "cooldown": [ 18, 13 ],
            },
        ],
        sailorNotes: "#{silence}<br>#{stages}",
        sailor: "자신은 필살기 봉쇄 상태를 완전히 회피한다",
        specialNotes: "#{silence}",
        specialName: "뇌운 로드",
    },
    1367: {//Timeskip Sanji :: modified
        captain: "[STR] 캐릭터의 공격력이 2배가 된다",
        special: [
            {
                "description": "1턴 동안 받는 데미지를 50% 줄이고, 슬롯의 영향을 증폭시킨다",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "1턴 동안 받는 데미지를 70% 줄이고, 슬롯의 영향을 상당히 증폭시킨다",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{orb : 1.75x}<br>#{stages}",
        sailor: "일당의 기본 능력치가 50 상승한다",
        specialName: "스카이 워크",
    },
    1368: {//Timeskip Sanji :: modified
        captain: "[STR] 캐릭터의 공격력이 2.25배가 되고, 남은 체력이 적을 때는 3배가 된다",
        special: [
            {
                "description": "1턴 동안 받는 데미지를 50% 줄이고, 슬롯의 영향을 증폭시킨다",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "1턴 동안 받는 데미지를 70% 줄이고, 슬롯의 영향을 상당히 증폭시킨다",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{orb : 1.75x}<br>#{stages}",
        sailor: "일당의 기본 능력치가 50 상승한다",
        specialName: "스카이 워크",
    },
    1369: {//Timeskip Chopper
        captain: "Boosts ATK of [QCK] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Changes [DEX] and [RCV] on [QCK] characters into [QCK], cuts the current HP of one enemy by 15%",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Kakuho: Elf",
    },
    1370: {//Timeskip Chopper
        captain: "Boosts ATK of [QCK] characters by 2x and their HP and RCV by 1.2x",
        special: "Changes [DEX] and [RCV] on [QCK] characters into [QCK], cuts the current HP of one enemy by 15%",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Kakuho: Elf",
    },
    1371: {//Wild Zoro
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.25x after the 2nd PERFECT in a row and by 2.5x after the 4th PERFECT in a row.",
        special: "Reduces Despair duration by 3 턴. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 턴",
        sailor: "Restores his own special by 2 턴 when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        specialName: "Wild Plan",
    },
    1372: {//Wild Zoro
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.5x after the 2nd PERFECT in a row and by 3x after the 4th PERFECT in a row.",
        special: "Reduces Despair duration by 3 턴. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 턴",
        sailor: "Restores his own special by 2 턴 when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        specialName: "Wild Plan",
    },
    1373: {//Magellan
        captain: "Boosts ATK of INT characters by 1.5x and their HP by 1.2x, deals 5 times the damage received in the previous 턴 in [INT] damage to all enemies at the end of each 턴",
        special: [
            {
                "description": "Poisons all enemies and delays all enemies for 1 턴.",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Inflicts Toxic to all enemies and delays all enemies for 1 턴.",
                "cooldown": [ 31, 16 ],
            },
        ],
        specialName: "Poison Dragon",
        specialNotes: "Toxic starts at 0.5x character's attack and increases by 3x at the end of every 턴 until 1,500,000 damage per 턴.<br>#{stages}",
    },
    1374: {//Magellan :: modified
        captain: "[INT] 캐릭터의 공격력을 2.25배, 체력을 1.5배로 만들고, 적으로부터 받은 데미지의 5배를 턴 종료 시에 적 전체에게 돌려준다",
        special: [
            {
                "description": "적 전체를 독 상태로 만들고 공격을 1턴 지연시킨다",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "적 전체를 서서히 데미지량이 늘어나는 독 상태로 만들고(최대 데미지 1,500,000), 공격을 1턴 지연시킨다",
                "cooldown": [ 31, 16 ],
            },
        ],
        specialName: "히드라",
        specialNotes: "Toxic starts at 0.5x character's attack and increases by 3x at the end of every 턴 until 1,500,000 damage per 턴.<br>#{stages}",
    },
    1375: {//Dellinger
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduces crew's HP by 50%, Increases damage received by 2x",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 턴, amplifies the effect of Dellinger's orb by 1.5x for 1 턴, and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
        specialName: "Deadly Fangs of Rage",
    },
    1376: {//Dellinger
        captain: "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's HP by 20%, Increases damage received by 2x",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 턴, amplifies the effect of Dellinger's orb by 1.5x for 1 턴, and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
        specialName: "Deadly Fangs of Rage",
    },
    1377: {//Marguerite
        captain: "Boosts ATK and RCV of Slasher and Shooter characters by 1.3x",
        special: "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 턴",
        sailor: "Boosts amount healed from [RCV] orbs by 125 each",
        specialName: "Sincere Devotion",
    },
    1378: {//Marguerite
        captain: "Boosts ATK and RCV of Slasher and Shooter characters by 1.75x",
        special: "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 턴",
        sailor: "Boosts amount healed from [RCV] orbs by 125 each",
        specialName: "Sincere Devotion",
    },
    1379: {//Shanks
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2x",
        special: "마비 상태를 3턴 회복하고, 1턴 동안 박식형과 자유형 슬롯의 영향이 2배로 증폭되며, 같은 타입의 [RCV][TND] 슬롯을 [유리] 슬롯으로 취급한다",
        specialName: "결렬의 이별주",
        specialNotes: "#{orb : 2x}",
    },
    1380: {//Shanks :: modified
        captain: "박식형 캐릭터의 공격력을 2.5배로 만들고, 박식형 캐릭터는 속성 일치 슬롯의 출현율이 상승한다",
        special: "마비 상태를 3턴 회복하고, 1턴 동안 박식형과 자유형 슬롯의 영향이 2배로 증폭되며, 같은 타입의 [RCV][TND] 슬롯을 [유리] 슬롯으로 취급한다",
        specialName: "결렬의 이별주",
        specialNotes: "#{orb : 2x}",
    },
    1381: {//Christmas Tashigi
        captain: "Boosts ATK and RCV of Slasher and Cerebral characters by 1.2x",
        special: "Reduces Silence duration by 1 턴, and recovers 12,240 HP",
        specialNotes: "Silence will refer to effects that prevent you from activating Special Abilities",
        specialName: "Strawberry Smile",
        specialNotes: "#{silence}",
    },
    1382: {//Christmas Tashigi
        captain: "Boosts ATK and RCV of Slasher and Cerebral characters by 1.75x",
        special: "Reduces Silence duration by 1 턴, and recovers 12,240 HP",
        specialNotes: "Silence will refer to effects that prevent you from activating Special Abilities",
        specialName: "Strawberry Smile",
        specialNotes: "#{silence}",
    },
    1383: {//Soldier-San :: modified
        captain: "타격형 캐릭터의 공격력이 2배가 되지만, 데미지를 2배로 받는다",
        special: "일당의 [BLOCK][불리][EMPTY] 슬롯을 랜덤으로 바꾸고, 마비·봉쇄·선장효과 무효·필살기 봉쇄 상태를 1턴 회복한다",
        specialNotes: "#{silence}",
        specialName: "분노의 악충 박멸",
    },
    1384: {//Soldier-San
        captain: "Boosts ATK of Striker characters by 2.5x. Increases damage received by 1.5x",
        special: "Reduces Paralysis, Bind, Despair, and Silence duration by 1 턴. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
        specialNotes: "#{silence}",
        specialName: "Angry Extermination of Bugs",
    },
    1385: {//Rebecca
        captain: "Reduces damage received by 20%",
        special: "Removes blindness",
        specialName: "Mother's Promise",
    },
    1386: {//Rebecca
        captain: "Reduces damage received by 25%",
        special: "Removes blindness",
        specialName: "Mother's Promise",
    },
    1387: {//Luffy 5+ :: modified
        captain: "일당의 공격력을 2.25배, 체력을 1.25배, 4연속 PERFECT를 달성하면 이후 캐릭터의 공격력이 1.25배 더 상승한다",
        special: "적 전체에게 공격력x40배의 [STR] 데미지를 주고, 공격을 1턴 지연시킨다",
        specialName: "고무고무 코끼리 총",
        limit: [
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 강화 : 30" },
            { "description": "회복력 강화 : 20" },
            { "description": "잠재능력 습득 1: 격분" },
            { "description": "체력강화 : 30" },
            { "description": "회복력 강화 : 30" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 강화 : 40" },
            { "description": "체력 강화 : 50" },
            { "description": "선원효과 추가 1: 자신이 마지막으로 공격할 때 자신의 기본 공격력이 100증가한다." },
            { "description": "체력강화 : 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "선원효과 추가 2: [QCK] 슬롯도 [유리] 슬롯으로 만든다." },
            { "description": "잠재능력 습득 2: 회복 무효 상태 회복" },
        ],
        potential: [
            {
                "Name": "격분",
                "description": [ 
                    "Level 1: 공격력 강화 : 20",
                    "Level 2: 공격력 강화 : 30",
                    "Level 3: 공격력 강화 : 40",
                    "Level 4: 공격력 강화 : 50",
                    "Level 5: 공격력 강화 : 100"
                ]
            },
            {
                "Name": "회복 무효 상태 회복",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 2 턴",
                    "Level 4: 회복 무효 상태 회복 : 3 턴",
                    "Level 5: 회복 무효 상태 회복 : 4 턴"
                ]
            },
        ],
    },
    1388: {//Zoro 5+ :: modified
        captain: "[DEX] 캐릭터의 공격력을 2.5배로 만든다",
        special: "적 전체의 HP를 10% 줄이고 [DEX] 캐릭터의 필살기 턴을 1턴 단축한다",
        specialName: "일검류 액항조",
    },
    1389: {//Nami 5+
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, Boosts ATK of [INT] characters by 2x and their RCV by 1.5x.",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Amplifies the effect of orbs for [INT] characters by 1.75x for 1 턴",
        specialName: "Weather Egg: Thunder Breed Tempo",
        specialNotes: "#{orb : 1.75x}",
    },
    1390: {//Buggy Legend
        captain: "Boosts ATK of characters with cost 40 or less by 1.5x and boosts the HP and ATK of characters with cost 41 or greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 턴",
        specialName: "Chop-Chop Clown Car",
    },
    1391: {//Buggy Legend :: modified
        captain: "코스트 40 이하인 캐릭터의 공격력을 1.5배, 코스트 41 이상인 캐릭터의 공격력과 체력을 50% 감소시키고, 모험에서 획득한 보물이 한 가지 추가된다",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "슬롯을 랜덤으로 바꾸고, 2턴 동안 코스트 40 이하인 캐릭터의 공격력이 1.75배가 된다.",
        specialName: "동강동강 카",
    },
    1392: {//Sentomaru
        captain: "Boosts ATK of Striker characters by 2x and boosts the HP of [PSY] characters by 1.25x",
        captainNotes: "A character with both classes will get both boosts",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies. If during that 턴 every unit scores a PERFECT hit, boosts ATK of [PSY] characters by 1.75x in the following 턴.",
        specialName: "Large Cutting Axe",
    },
    1393: {//Demaro Black
        captain: "Boosts ATK of characters with cost 30 or less by 2x",
        special: "Boosts ATK of all characters by 1.1x, slightly boosts chances of getting matching orbs and amplifies the effect of orbs by 1.1x for 7 턴",
        specialName: "Three Forked Tongue",
    },
    1394: {//Kimono Baby 5
        captain: "Boosts ATK of [STR] and [QCK] characters by 1.5x and their RCV by 1.1x",
        special: "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 턴",
        specialName: "Nation's Ambition",
    },
    1395: {//Kimono Baby 5
        captain: "Boosts ATK of [STR] and [QCK] characters by 2.25x and their RCV by 1.2x",
        special: "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 턴",
        specialName: "Nation's Ambition",
    },
    1396: {//Tashigi Shambles
        captain: "Boosts ATK of Driven characters by 1.75x and the HP of Striker Characters by 1.25x",
        special: "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 턴",
        specialName: "Surprise Jitte Onslaught",
        specialNotes: "#{randomHits : 7}",
    },
    1397: {//Tashigi Shambles
        captain: "Boosts ATK of Driven characters by 2x and the HP of Striker Characters by 1.5x",
        special: "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 턴",
        specialName: "Surprise Jitte Onslaught",
        specialNotes: "#{randomHits : 7}",
    },
    1398: {//Smoker Shambles
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x",
        special: "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 턴",
        specialName: "Out-of-Control White Smoke",
    },
    1399: {//Smoker Shambles
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x, reduces damage received by 15%",
        special: "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 턴",
        specialName: "Out-of-Control White Smoke",
    },
    1400: {//Colo Gladius
        captain: "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.3x",
        captainNotes: "The bonus is cumulative. Shooter Driven characters get a 2.275x bonus.",
        special: [
            {
                "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 턴 and boosts the Color Affinity of Shooter characters by 1.5x for 1 턴",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 턴 and boosts the Color Affinity of Shooter characters by 1.75x for 1 턴",
                "cooldown": [ 33, 18 ],
            },
        ],
        specialName: "Stonewall Punk",
        specialNotes: "#{colorAffinity : 1.75}<br>#{stages}",
    },
    1401: {//Colo Gladius
        captain: "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.5x",
        captainNotes: "The bonus is cumulative. Shooter Driven characters get a 2.625x bonus.",
        special: [
            {
                "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 턴 and boosts the Color Affinity of Shooter characters by 1.5x for 1 턴",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 턴 and boosts the Color Affinity of Shooter characters by 1.75x for 1 턴",
                "cooldown": [ 33, 18 ],
            },
        ],
        specialName: "Stonewall Punk",
        specialNotes: "#{colorAffinity : 1.75}<br>#{stages}",
        limit: [
            { "description": "체력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 20" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 40" },
            { "description": "선원효과 추가 1: " },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 70" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "필살기 턴 단축 : 2턴" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous 턴"
    },
    1402: {//Colo Dalton
        captain: "Boosts ATK of [PSY] and [QCK] characters by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.3x for 1 턴",
                "cooldown": [ 14, 4 ],
            },
            {
                "description": "Deals 13x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 턴",
                "cooldown": [ 18, 8 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Offense Battle Axe",
    },
    1403: {//Timeskip Luffy
        captain: "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 턴.",
        captainNotes: "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
        special: [
            {
                "description": "Deals 25x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 턴",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 60x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" for 3 턴",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Gomu Gomu no Red Hawk",
    },
    1404: {//Timeskip Luffy :: modified
        captain: "자유형의 공격력을 2.5배로 만들고, 받는 데미지는 15% 감소되며 ‘고무고무 레드 호크’를 사용하면 필살기를 발동한 자신의 선장효과가 3턴 동안 ‘지유형의 공격력을 4배, 받는 데미지는 15% 감소’로 변경된다",
        captainNotes: "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
        special: [
            {
                "description": "1턴 동안 격투형과 자유형 캐릭터는 [QCK][DEX][PSY] 슬롯을 [유리](\"beneficial\") 슬롯으로 취급하고, 적 1명에게 [QCK] 큰 데미지를 준다",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "3턴 동안 [QCK][DEX][PSY] 슬롯을 [유리](\"beneficial\") 슬롯으로 취급하고, 적 1명에게 [QCK] 특대 데미지를 준다",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "고무고무 레드 호크",
    },
    1405: {//Timeskip Usopp
        captain: "Boosts ATK of Shooter characters by 1.75x, and their RCV by 1.25x",
        special: "Deals 10 hits of 2,000 fixed damage to random enemies, and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 턴",
        specialNotes: "#{randomHits : 10}",
        specialName: "Assault Meteor Shower",
        sailor: "When HP is below 30% at the start of the 턴, boosts ATK and RCV of Shooter characters by 100",
    },
    1406: {//Timeskip Usopp
        captain: "Boosts ATK of Shooter characters by 2.25x, and their RCV by 1.5x",
        special: "Deals 10 hits of 2,000 fixed damage to random enemies, and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 턴",
        specialNotes: "#{randomHits : 10}",
        specialName: "Assault Meteor Shower",
        sailor: "When HP is below 30% at the start of the 턴, boosts ATK and RCV of Shooter characters by 100",
    },
    1407: {//Timeskip Robin
        captain: "Boosts ATK of [DEX] and [PSY] characters by 1.75x and their RCV by 1.25x",
        special: "Reduces Despair duration by 3 턴 and boosts ATK of [DEX] and [PSY] characters by 2x for 1 턴",
        specialName: "Mil Fleur: Gigantesco Mano Stomp",
        sailor: "Reduces Blindness duration by 3 턴",
    },
    1408: {//Timeskip Robin
        captain: "Boosts ATK of [DEX] and [PSY] characters by 2.25x and their RCV by 1.5x",
        special: "Reduces Despair duration by 3 턴 and boosts ATK of [DEX] and [PSY] characters by 2x for 1 턴",
        specialName: "Mil Fleur: Gigantesco Mano Stomp",
        sailor: "Reduces Blindness duration by 3 턴",
    },
    1409: {//Timeskip Brook
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Delays all enemies by 1 턴, and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 턴",
        specialName: "Soul's Murder Soul: Soul Solid",
        sailor: "Completely resists Paralysis on this character",
    },
    1410: {//Timeskip Brook :: modified
        captain: "체인 계수 증가량이 2.5배가 되고 체력이 일정 비율 이상인 경우, 공격을 받아도 쓰러지지 않는다",
        captainNotes: "#{zombie}",
        special: "적 전체의 공격을 1턴 지연시키고, 참격형과 자유형 캐릭터의 공격력을 1턴 동안 1.75배로 만든다",
        specialName: "소울 솔리드",
        sailor: "자신은 마비 상태를 완전히 회피한다",
    },
    1411: {//Timeskip Chopper Again
        captain: "Boosts ATK of Powerhouse characters by 2.25x, reduces crew's RCV to 0",
        special: "Reduce enemies Damage Reduction and Increased Defense duration by 3 턴 and deals 60x character's ATK in typeless damage to all enemies",
        specialNotes: "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have, and Increased Defense is the blue shiled buff enemies have",
        specialName: "Carving Hoof Palm: Coconut",
        sailor: "If Chopper has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next 턴",
    },
    1412: {//Timeskip Chopper Again :: modified
        captain: "강인형 캐릭터의 공격력이 2.75배가 되고 일당의 회복력이 0이 된다",
        special: "적의 방어력 상승과 데미지 감소 상태를 3턴 줄이고, 적 전체에 무 속성 특대 데미지를 준다",
        specialNotes: "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have, and Increased Defense is the blue shield buff enemies have",
        specialName: "발굽 「팔메」",
        sailor: "자신의 PERFECT 공격 성공 시 [STR] 슬롯이 다음 턴에도 이어진다",
    },
    1413: {//6+ Whitebeard
        captain: "Boosts ATK of all characters by 3x 전투 시작 시 체력이 30% 미만이면, 1.75x otherwise and boosts the HP of all characters by 1.2x",
        special: "Cuts the current HP of each enemy by 30%, reduces special cooldown of all non-Captain specials by 1 턴, and randomizes non-matching orbs including [BLOCK] orbs.",
        specialName: "Emperor's Pride",
    },
    1414: {//Shop Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        special: "Changes own orb into [INT] and reduces Special Cooldown of Powerhouse characters by 1 턴.",
        specialName: "Are you ready?",
    },
    1415: {//Fortnight Sengoku
        captain: "Boosts ATK of characters with cost 30 or less by 1.5x",
        special: "Reduces Special Cooldown of all characters with cost 30 or less by 1 턴 and boosts ATK of characters with cost 30 or less by 1.5x for 1 턴",
        specialName: "Unshakeable Resolution of the Wise Master",
    },
    1416: {//Fortnight Sengoku
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their HP by 1.2x",
        special: "Reduces Special Cooldown of all characters with cost 30 or less by 1 턴 and boosts ATK of characters with cost 30 or less by 1.5x for 1 턴",
        specialName: "Unshakeable Resolution of the Wise Master",
    },
    1417: {//Ronse
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        special: "Cuts the current HP of all enemies by 10%, changes [BLOCK] orbs into [STR] orbs for Slasher characters",
        specialName: "Raid Battle-Axe: One Flash",
    },
    1418: {//Stainless
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        special: "Reduces any damage received above 5,000 HP by 99% for 1 턴",
        specialName: "Defence of the Command Line",
    },
    1419: {//Kimono Lucci
        captain: "Boosts ATK of Powerhouse characters by 2x, reduce damage received by 10%",
        special: "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 턴",
        specialName: "Demonic Style",
    },
    1420: {//Kimono Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduce damage received by 10%",
        special: "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 턴",
        specialName: "Demonic Style",
    },
    1421: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 턴, 1.5x otherwise",
        specialName: "Half Moon Glaive",
    },
    1422: {//Coliseum Diamante :: modified
        captain: "야심형 캐릭터의 공격력을 2.25배, 참격형과 타격형 캐릭터의 체력을 1.5배로 만든다",
        special: "적 전체에 [INT] 큰 데미지를 주고, 1턴 동안 야심형 캐릭터의 공격력이 1.5배, 필살기 발동 시 체력이 가득 차 있으면 2배가 된다",
        specialName: "반…월~ 글레이브",
    },
    1423: {//Coliseum T-Bone
        captain: "Boosts ATK of the whole crew by 1.75x and recovers 918 HP at end of each 턴,",
        special: "If HP is below 500, reduces damage received by 99% for 1 턴",
        specialName: "For the Sake of Justice",
    },
    1424: {//Coliseum Gin
        captain: "Boosts ATK of Striker characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 1 + 1.25 * (remaining HP) / (total HP) : 2.25 : 1}",
        special: "Deals 500 fixed damage to all enemies and reduces Special Cooldown of Striker characters by 1 턴.",
        specialName: "General Commander's Fight",
    },
    1425: {//Don Sai
        captain: "Boosts ATK of Fighter and Striker characters by 1.75x",
        special: "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 턴",
        specialName: "Military Leg Heel",
    },
    1426: {//Don Sai
        captain: "Boosts ATK of Fighter and Striker characters by 2x and their HP by 1.25x",
        special: "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 턴",
        specialName: "Military Leg Heel",
    },
    1427: {//Boo
        captain: "Boosts ATK of QCK characters by 2x",
        special: "Deals 15x character's ATK in QCK damage to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Unblockable Eight Fists",
    },
    1428: {//Jean Ango
        captain: "Boosts amount of Beli received by 1.5x, and gives chance of duplicating a drop upon completion of the island",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "If the enemy is delayed at the time the special is activated, reduces Special Cooldown of all characters by 1 턴 and boosts own attack by 1.75x for 1 턴",
        specialName: "Looting the Losers",
    },
    1429: {//Valentines Mansherry
        captain: "Boosts the RCV of Striker and Free Spirit characters by 1.5x",
        special: "Reduces Bind, Despair, and Paralysis duration by 3 턴 and recovers 2000 HP at the end of each 턴 for 3 턴",
        specialName: "Boy's Unknown Taste of Hard Work",
    },
    1430: {//Valentines Mansherry
        captain: "Boosts the RCV of Striker and Free Spirit characters by 2x",
        special: "Reduces Bind, Despair, and Paralysis duration by 3 턴 and recovers 2000 HP at the end of each 턴 for 3 턴",
        specialName: "Boy's Unknown Taste of Hard Work",
    },
    1431: {//Raid Franky :: modified
        captain: "일당에 5속성 캐릭터가 모두 있으면 일당의 공격력이 2.5배가 되고, 일당에 격투형, 참격형, 사격형, 야심형, 자유형, 강인형이 모두 있으면 일당의 체력이 1.5배가 된다",
        special: "적 전체에게 무 속성 슈퍼 데미지를 주고, 적에게 걸려 있는 [ATK UP], [ENRAGE], [DAMAGE CUT], [RCV]을(를) 완전히 해제, 1턴 동안 일당의 공격력이 1.5배가 된다",
        specialName: "장군포",
    },
    1432: {//Raid Franky :: modified
        captain: "일당에 5속성 캐릭터가 모두 있으면 일당의 공격력이 2.5배가 되고, 일당에 격투형, 참격형, 사격형, 야심형, 자유형, 강인형이 모두 있으면 일당의 체력이 1.5배가 된다",
        special: "적 전체에게 무 속성 슈퍼 데미지를 주고, 적에게 걸려 있는 [ATK UP], [ENRAGE], [DAMAGE CUT], [RCV]을(를) 완전히 해제, 1턴 동안 일당의 공격력이 1.5배가 된다",
        specialName: "장군포",
    },
    1433: {//Hody Jones
        captain: "Reduces cooldown of Powerhouse specials by 1 턴 at the start of the fight, reduces crew's current HP by 10% at the end of each 턴, and boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x, and with 1 the boost is 1.1x.",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 턴, reduces damage received by 60% for 1 턴",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 턴, reduces damage received by 90% for 1 턴",
                "cooldown": [ 22, 17 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Water Bullets",
    },
    1434: {//Hody Jones
        captain: "Reduces cooldown of Powerhouse specials by 1 턴 at the start of the fight, reduces crew's current HP by 10% at the end of each 턴, and boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x, and with 1 the boost is 1.1x.",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 턴, reduces damage received by 60% for 1 턴",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 턴, reduces damage received by 90% for 1 턴",
                "cooldown": [ 22, 17 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Water Bullets",
    },
    1435: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2x and HP of Powerhouse characters by 1.2x",
        special: "Makes PERFECTs harder to hit for 1 턴, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 턴, recovers 20% of crew's MAX HP.",
        specialName: "Staggering Slash",
        specialNotes: "Decreases timing window to hit a PERFECT. (Animation remains the same)",
        sailor: "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew",
    },
    1436: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2.5x and HP of Powerhouse characters by 1.25x",
        special: "Makes PERFECTs harder to hit for 1 턴, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 턴, recovers 20% of crew's MAX HP.",
        specialName: "Staggering Slash",
        specialNotes: "Decreases timing window to hit a PERFECT. (Animation remains the same)",
        sailor: "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew",
    },
    1437: {//Ikaros Much :: modified
        captain: "강인형과 타격형의 공격력을 각각 1.3배로 만든다",
        captainNotes: "The bonus is cumulative. Powerhouse + Striker characters get a 1.69x bonus.",
        special: "일당의 체력을 50% 줄이고, 1턴 동안 지연 중인 적에게 주는 데미지가 1.5배, 강인형 캐릭터의 슬롯의 영향을 상당히 증폭시킨다",
        specialName: "살오징어 창",
        sailor: "강인형 6명으로 편성 시 자신은 모든 속성 슬롯이 [유리] 슬롯으로 취급된다",
    },
    1438: {//Ikaros Much
        captain: "Boosts ATK of Powerhouse and Striker characters by 1.6x",
        captainNotes: "The bonus is cumulative. Powerhouse + Striker characters get a 2.56x bonus.",
        special: "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 턴",
        specialName: "Squid Spear",
        sailor: "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew",
    },
    1439: {//Daruma
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.2x",
        special: "Reduces Paralysis and Silence duration by 2 턴, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 턴",
        specialNotes: "#{silence}",
        specialName: "Fire Daruma Cutter",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1440: {//Daruma :: modified
        captain: "모험 시작 시 필살기 턴을 4턴 단축하고, 격투형과 강인형의 공격력을 1.5배로 ㅁ나든다",
        special: "마비·필살기 봉쇄 상태를 2턴 회복, 적 1명의 HP를 10% 줄이고 강인형 캐릭터의 공격력을 1턴 동안 1.75배로 만든다",
        specialNotes: "#{silence}",
        specialName: "불덩어리 커터",
        sailor: "자신은 필살기 봉쇄 상태를 완전히 회피한다",
        sailorNotes: "#{silence}",
    },
    1441: {//Zeo
        captain: "Boosts ATK of [INT] characters by 1.5x, and reduces damage received by 10%",
        special: "Makes PERFECTs easier to hit, locks all orbs, and locks the chain multiplier at 2.5x for 1 턴",
        specialNotes: "Increases timing window to hit a PERFECT. (Animation remains the same)",
        specialName: "Flail Hidden From God",
        sailor: "Completely resists Blindness if your Captain is a Powerhouse character",
    },
    1442: {//Zeo :: modified
        captain: "[INT] 캐릭터의 공격력을 2.25배, 받는 데미지를 20% 줄인다",
        special: "1턴 동안 일당의 슬롯을 고정, PERFECT 타이밍이 쉬워지고 체인 계수를 2.5배로 고정한다",
        specialNotes: "Increases timing window to hit a PERFECT. (Animation remains the same)",
        specialName: "은신 플레일",
        sailor: "선장이 강인형이면 일당의 의성어 은폐를 완전히 회피한다",
    },
    1443: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 2.75x following a chain of Good > Great > PERFECT hits",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Papara Hammer",
        sailor: "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew",
    },
    1444: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 3.25x following a chain of Good > Great > PERFECT hits",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Papara Hammer",
        sailor: "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew",
    },
    1445: {//Boa Hancock+
        captain: "Boosts ATK of [QCK] and [PSY] characters proportionally to the crew's current HP. If HP is below 50%, Boosts RCV of [QCK] and [PSY] units by 1.5x.",
        special: "Boosts ATK and RCV of [QCK] and [PSY] characters by 1.75x for 1 턴, and delays all enemies for 1 턴. Changes your Captain orb to [RCV]. If HP is above 50%, changes left column into Matching orbs.",
        specialName: "Perfume Femur",
        captainNotes: "#{captainProportional : higher : 2.25 + 0.5 * (remaining HP) / (total HP) : 2.75 : 2.25}"
    },
    1446: {//Sogeking 5+
        captain: "Boosts ATK of Shooter characters by 2x and RCV of Shooter characters by 1.25x.",
        special: "Deals random PSY damage to all enemies and delays enemies by 3 턴.",
        specialName: "Green Star: Platanus Shuriken",
    },
    1447: {//Sanji 5+ :: modified
        captain: "강인형 캐릭터의 공격력을 2.5배로 만들고, 받는 데미지를 10% 줄인다",
        special: [
            {
                "description": "적 전체에 고정 데미지 5,000을 주고, 자신의 공격력이 1턴 동안 1.2배가 된다",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "적 전체에 고정 데미지 50,000을 주고, 자신의 공격력이 1턴 동안 1.5배가 된다",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "그릴 샷",
    },
    1448: {//Chopper 5+
        captain: "Boosts ATK of Fighter characters by 2.5x.",
        special: "Deals PSY damage according to HP. Changes [BLOCK] orbs on Fighter characters into matching.",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the higher the HP is. The formula used is ???? * (current HP) / (total HP)",
        specialName: "Weight Gain: Heavy Gong",
    },
    1449: {//Violet
        captain: "Boosts ATK of Cerebral characters by 1.5x. Heals for .3x character's RCV at the end of the 턴 each time you hit a Great.",
        special: "Reduces the defense of all enemies by 50% for 1 턴, and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
        specialName: "Clairvoyance",
    },
    1450: {//Violet
        captain: "Boosts ATK of Cerebral characters by 1.75x. Heals for .5x character's RCV at the end of the 턴 each time you hit a Great.",
        special: "Reduces the defense of all enemies by 50% for 1 턴, and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
        specialName: "Clairvoyance",
    },
    1451: {//Moustache Sanji
        captain: "Boosts ATK of [DEX] characters by 2.25x if they have a matching orb, by 1.5x otherwise. Slightly boosts chances of getting [DEX] orbs",
        special: "Deals 15x character's ATK in DEX damage to one enemy, and boosts chances of getting DEX orbs for 2 턴",
        specialName: "Diable Jambe: Love Shot",
    },
    1452: {//Moustache Sanji
        captain: "Boosts ATK of [DEX] characters by 2.5x if they have a matching orb, by 2x otherwise. Slightly boosts chances of getting [DEX] orbs",
        special: "Deals 15x character's ATK in DEX damage to one enemy, and boosts chances of getting DEX orbs for 2 턴",
        specialName: "Diable Jambe: Love Shot",
    },
    1453: {//Valentines Margeurite
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.5x",
        special: "Changes all orbs depending on the current HP",
        specialNotes: "<br> HP>70%: Top row to [QCK], middle row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
        specialName: "Doki Doki Heart",
    },
    1454: {//Valentines Margeurite
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x and their RCV by 1.5x",
        special: "Changes all orbs depending on the current HP",
        specialNotes: "<br> HP>70%: Top row to [QCK], middle row to [DEX], bottom row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
        specialName: "Doki Doki Heart",
    },
    1455: {//Coliseum Don Chinjao
        captain: "Boosts ATK of Driven characters by 2.5x until the first hit other than PERFECT and recovers 120 HP at end of each 턴",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 턴",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 턴",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Legend told to the Grandchild",
    },
    1456: {//Coliseum Don Chinjao
        captain: "Boosts ATK of Powerhouse characters by 2.75x until the first hit other than PERFECT and recovers 120 HP at end of each 턴",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 턴",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 턴",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Legend told to the Grandchild",
    },
    1457: {//Coliseum Kuro
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of [QCK] and [INT] characters by 1.75x",
        special: "Reduces Bind and Despair duration by 2 턴, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
        specialName: "Pussyfoot Maneuver",
    },
    1458: {//Coliseum Kuro
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of [QCK] and [INT] characters by 2x",
        special: "Reduces Bind and Despair duration by 2 턴, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
        specialName: "Pussyfoot Maneuver",
    },
    1459: {//Coliseum Miss Valentine
        captain: "Boosts ATK by 1.75x following a chain of Good > Good > Great > PERFECT hits",
        special: "Binds self for 2 턴, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 턴.",
        specialName: "Crescendo Stone",
    },
    1460: {//Coliseum Miss Valentine
        captain: "Boosts ATK by 2.14x following a chain of Good > Good > Great > PERFECT hits",
        special: "Binds self for 2 턴, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 턴.",
        specialName: "Crescendo Stone",
    },
    1461: {//Snow Zoro
        captain: "Boosts ATK of [QCK] characters by 2x at the start of the chain, by 2.6x after the 3rd PERFECT in a row.",
        special: "Deals 11x character's ATK in [QCK] damage to one enemy, boosts ATK of [QCK] characters by 1.5x for 1 턴",
        specialName: "Demoltion: Ice Crush",
    },
    1462: {//White Day Luffy
        captain: "Boosts chain multiplier by 2x",
        special: "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20%, and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 턴",
        sailor: "Reduces Paralysis for 2 턴 for himself",
        specialName: "Gum-Gum Gigant Axe - Sweets",
    },
    1463: {//White Day Luffy
        captain: "Boosts chain multiplier by 2.5x, recovers 1.5x character's RCV in HP at the end of each 턴",
        special: "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20%, and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 턴",
        sailor: "Reduces Paralysis for 2 턴 for himself",
        specialName: "Gum-Gum Gigant Axe - Sweets",
    },
    1464: {//White Day Chopper
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 턴",
        sailor: "Boosts amount healed from [RCV] orbs by 100 each",
        specialName: "Devoted Healing - \"Instant Recovery\"",
    },
    1465: {//White Day Chopper
        captain: "Boosts ATK and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 턴",
        sailor: "Boosts amount healed from [RCV] orbs by 100 each",
        specialName: "Devoted Healing - \"Instant Recovery\"",
    },
    1466: {//White Day Cavendish
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Reduces the defense of all enemies by 100% for 1 턴 and changes own orb into [PSY] and friend captain's orb into [STR]",
        specialName: "Rosy Pleasure",
    },
    1467: {//White Day Cavendish
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.3x",
        special: "Reduces the defense of all enemies by 100% for 1 턴 and changes own orb into [PSY] and friend captain's orb into [STR]",
        specialName: "Rosy Pleasure",
    },
    1468: {//Fortnight Sentomaru 
        captain: "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Captain ability stacks, so a [STR] Powerhouse character benefits from both parts",
        special: "Delays all enemies for 1 턴. Changes own orb into Matching orb",
        specialName: "Warning of the New World",
    },
    1469: {//Fortnight Sentomaru Evolved
        captain: "Boosts ATK of [STR] characters by 2x and the HP of Powerhouse characters by 1.25x",
        captainNotes: "Captain ability stacks, so a [STR] Powerhouse character benefits from both parts",
        special: "Delays all enemies for 1 턴. Changes own orb into Matching orb",
        specialName: "Warning of the New World",
    },
    1470: {//Lip Service Doughty
        captain: "Boosts ATK of Slasher and Powerhouse characters by 1.5x, but boost his OWN ATK by 3x",
        captainNotes: "Captain ability does not stack with itself (Will not boost another Doughty by 3x)",
        special: "Deals 8x character's ATK as [STR] damage to one enemy. Changes captain orb into [RCV]",
        specialName: "Meat Grinder Blade",
    },
    1471: {//Albion
        captain: "Boosts ATK of Slasher and Driven characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1 + 1 * (1 - (remaining HP) / (total HP)) : 1 : 2}",
        special: "Reduces crew's HP by 90%, deals 1x the removed HP as damage to all enemies.",
        specialName: "Deep Claw Stab",
    },
    1472: {//Shirahoshi :: modified
        captain: "턴 종료 시에 회복력x5배의 체력을 회복하고, 자신 이외의 공격력을 2.25배, 자신의 공격력은 약간 상승, 자신이 공격하지 않았던 턴은 받는 데미지가 10% 감소한다",
        special: [
            {
                "description": "[BLOCK] 슬롯을 포함해 인정한 슬롯을 무지개 슬롯(공격력을 2배로 만드는 슬롯이며, 적과 아군 모두 무지개 슬롯을 변환 대상으로 할 수 없음)으로 바꾸며, 캐릭터의 회복력x9배의 체력을 회복한다",
                "cooldown": [ 13, 9 ],
            },
            {
                "description": "[BLOCK] 슬롯을 포함해 모든 슬롯을 무지개 슬롯(공격력을 2배로 만드는 슬롯이며, 적과 아군 모두 무지개 슬롯을 변환 대상으로 할 수 없음)으로 바꾸며, 캐릭터의 회복력x100배의 체력을 회복한다",
                "cooldown": [ 22, 18 ],
            },
        ],
        specialNotes: "Rainbow orbs are the beneficial form of [BLOCK] orbs. They can not be shuffled by you or your opponent. They count as beneficial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
        sailor: "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
        specialName: "울보의 용기",
    },
    1473: {//Shirahoshi :: modified
        captain: "턴 종료 시에 회복력x5배의 체력을 회복하고, 자신 이외의 공격력을 2.25배, 자신의 공격력은 약간 상승, 자신이 공격하지 않았던 턴은 받는 데미지가 10% 감소한다",        
        special: [
            {
                "description": "[BLOCK] 슬롯을 포함해 인정한 슬롯을 무지개 슬롯(공격력을 2배로 만드는 슬롯이며, 적과 아군 모두 무지개 슬롯을 변환 대상으로 할 수 없음)으로 바꾸며, 캐릭터의 회복력x9배의 체력을 회복한다",                
                "cooldown": [ 13, 9 ],
            },
            {
                "description": "[BLOCK] 슬롯을 포함해 모든 슬롯을 무지개 슬롯(공격력을 2배로 만드는 슬롯이며, 적과 아군 모두 무지개 슬롯을 변환 대상으로 할 수 없음)으로 바꾸며, 캐릭터의 회복력x100배의 체력을 회복한다",
                "cooldown": [ 22, 18 ],
            },
        ],
        specialNotes: "Rainbow orbs are the benefittial form of [BLOCK] orbs. They can not be shuffled or swapped by you or your opponent. They count as benefittial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
        sailor: "모험 시작 시 모든 슬롯을 무지개 슬롯으로 바꾼다(같은 효과 중복 시엔 하나만 효과 발동)",
        specialName: "울보의 용기",
    },
    1474: {//King Neptune :: modified
        captain: "일당의 공격력을 1.5배로 만들고, 획득하는 해적 EXP가 1.5배가 된다(획득 해적 EXP 증가 효과는 모험 도중 선장이 된 경우에는 발휘 되지 않음)",
        special: "일당의 슬롯을 1턴 고정하여, 최대 HP가 가장 높은 적의 HP가 50% 이상일 때는 적 전체의 HP를 20% 줄이고, HP가 50% 미만일 때는 적 전체에 공격력x140배의 무 속성 데미지를 준다",
        sailor: "PSY,INT과 TND도 [유리] 슬롯으로 취급한다",
        specialName: "머맨 컴배트 울트라 마린",
    },
    1475: {//King Neptune :: modified
        captain: "일당의 공격력을 2.25배로 만들고, 획득하는 해적 EXP가 1.5배가 된다(획득 해적 EXP 증가 효과는 모험 도중 선장이 된 경우에는 발휘 되지 않음)",
        special: "일당의 슬롯을 1턴 고정하여, 최대 HP가 가장 높은 적의 HP가 50% 이상일 때는 적 전체의 HP를 20% 줄이고, HP가 50% 미만일 때는 적 전체에 공격력x140배의 무 속성 데미지를 준다",
        sailor: "자신은 [PSY][INT][TND] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "머맨 컴배트 울트라 마린",
    },
    1476: {//Fukaboshi
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Delays all enemies by 1 턴, and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 턴",
        sailor: "Boosts base HP, RCV and ATK of all characters by 50",
        specialName: "Merman Gujutsu - Spear of the Ages",
    },
    1477: {//Fukaboshi
        captain: "Boosts ATK of Striker characters by 2.5x and boosts HP of Powerhouse characters by 1.25x",
        captainNotes: "This effect does stack for characters that have both classes, so Striker/Powerhouse characters will have 2.5x ATK and 1.25x HP",
        special: "Delays all enemies by 1 턴, and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 턴",
        sailor: "Boosts base HP, RCV and ATK of all characters by 50",
        specialName: "Merman Gujutsu - Spear of the Ages",
    },
    1478: {//Caribou
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 1.75x after the 22nd hit, by 2x after the 33th hit, by 3x after the 44th hit",
        special: "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 턴",
        specialNotes: "#{randomHits : 15}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "Swamp-Swamp Gatling Gun",
    },
    1479: {//Caribou
        captain: "Boosts ATK of all characters by 1.75x after the 11th hit in the chain, by 2.5x after the 22nd hit, by 2.75x after the 33th hit, by 3.5x after the 44th hit",
        special: "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 턴",
        specialNotes: "#{randomHits : 15}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "Swamp-Swamp Gatling Gun",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : " },
            { "description": "선원효과 추가 #: " },
            { "description": "체력 상승 : 70" },
            { "description": "체력 상승 : 90" },
            { "description": "회복력 상승 : 40" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 40",
                    "Level 3: 공격력 상승 : 60",
                    "Level 4: 공격력 상승 : 80",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous 턴"
    },
    1480: {//Vander Decken IX
        captain: "Boosts ATK by 2.5x after scoring 2 PERFECTs in a row",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 턴",
        specialNotes: "#{ignoreBarrier}<br>#{silence}",
        sailor: "Restores his own special by 1 턴 when it is rewinded and reduces Silence for 3 턴 for himself",
        sailorNotes: "#{rewind : 1}<br>#{silence}",
        specialName: "Stalking Rose Axe",
    },
    1481: {//Vander Decken IX
        captain: "Boosts ATK by 2.5x after the 2nd PERFECT in a row and by 3.5x after the 5th PERFECT in a row.",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 턴",
        specialNotes: "#{ignoreBarrier}<br>#{silence}",
        sailor: "Restores his own special by 1 턴 when it is rewinded and reduces Silence for 3 턴 for himself",
        sailorNotes: "#{rewind : 1}<br>#{silence}",
        specialName: "Stalking Rose Axe",
    },
    1482: {//Madame Shyarly
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots twice, and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
        sailor: "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
        specialName: "Foretold Catastrophe",
    },
    1483: {//Madame Shyarly
        captain: "Boosts ATK of INT characters by 2.5x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots twice, and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
        sailor: "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
        specialName: "Foretold Catastrophe",
    },
    1484: {//Wild Sanji
        captain: "Boosts ATK by 2.5x after scoring 3 PERFECTs in a row",
        special: "Locks the chain multiplier at 2.5x for 1 턴, reduces Bind duration by 5 턴",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight.",
        specialName: "Wild Shot",
    },
    1485: {//Wild Sanji :: modified
        captain: "일당의 체력과 회복력을 조금 상승시키고, 3연속 PERFECT 달성 시 이후 캐릭터의 공격력이 3.25배가 된다",
        special: "봉쇄 상태를 5턴 회복하고, 1턴 동안 체인 계수를 2.5배로 고정한다",
        sailor: "모험 시작 시 모든 슬롯을 [RCV] 슬롯으로 바꾼다(같은 효과 중복 시엔 하나만 효과 발동)",
        specialName: "와일드 샷",
    },
    1486: {//Coliseum Ideo
        captain: "Boosts ATK of Fighter characters by 2.5x if they have a matching orb.",
        special: "Increases damage received by 2x for 2 턴, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 턴",
        specialNotes: "#{orb : 2x}",
        specialName: "Destruction Cannon: Hidden Bullet",
    },
    1487: {//Coliseum Ideo :: modified
        captain: "모험 시작 시 필살기 턴을 2턴 단축하고, 격투형 캐릭터의 공격력을 슬롯 일치 시 3배로 만든다",
        special: "2턴 동안 받는 데미지가 2배가 되지만, 적 1명에게 [DEX] 데미지를 주고 1턴 동안 격투형 캐릭터의 슬롯의 영향을 2배로 증폭시킨다",
        specialNotes: "#{orb : 2x}",
        specialName: "「파괴포」의 숨겨진 탄",
    },
    1488: {//Coliseum Don Krieg
        captain: "Boosts ATK of Driven characters by 1.5x, reduces damage received by 20%",
        special: "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
        specialName: "Great Battle Spear",
    },
    1489: {//Coliseum Don Krieg
        captain: "Boosts ATK of Driven characters by 2x, reduces damage received by 20%",
        special: "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
        specialName: "Great Battle Spear",
    },
    1490: {//Coliseum Mr. 5
        captain: "Boosts ATK by 1.75x following a chain of Good > Good > Great hits",
        special: "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 턴, and reduces the defense of all enemies by 50% for one 턴.",
        specialName: "Explosion Blocking Escape",
    },
    1491: {//Coliseum Mr. 5
        captain: "Boosts ATK by 2x following a chain of Good > Good > Great hits",
        special: "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 턴, and reduces the defense of all enemies by 50% for one 턴.",
        specialName: "Explosion Blocking Escape",
    },
    1492: {//6+ Sabo :: modified
        captain: "자유형 캐릭터의 공격력이 2.75배가 되고, 체력과 회복력이 조금 상승한다",
        captainNotes: "HP and RCV boost are not known yet, but are assumed to be for anyone and is a 1.2x boost for both in the calculator.",
        special: [
            {
                "description": "1턴 동안 자유형 캐릭터의 공격력을 1.5배, 그 턴 내에 PERFECT 공격 5번 이상 성공 시, 다음 턴의 자유형 공격력이 2배가 된다",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "1턴 동안 자유형 캐릭터의 공격력을 1.75배, 그 턴 내에 PERFECT 공격 4번 이상 성공 시, 다음 턴의 자유형 공격력이 2배가 된다",
                "cooldown": [ 23, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "되살아난 「불주먹」",
    },
    1493: {//STR Fishman Outlaw
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Deals 5 hits of random typeless damage to random enemies",
        specialNotes: "#{randomHits : 5}",
        specialName: "Random Light Blows",
    },
    1494: {//QCK Fishman Outlaw
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Locks captain's orb for 1 턴",
        specialName: "Captain Slot Hold: Light",
    },
    1495: {//DEX Fishman Outlaw
        captain: "Boosts ATK of [DEX] characters by 1.5x",
        special: "Reduces Silence duration by 1 턴",
        specialNotes: "#{silence}",
        specialName: "Special Seal Recovery: Light",
    },
    1496: {//INT Fishman Outlaw
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces Despair duration by 2 턴",
        specialName: "Captain Soul Recovery",
    },
    1497: {//PSY Fishman Outlaw
        captain: "Boosts ATK of Shooter characters by 1.5x",
        special: "Boosts own ATK by 1.5x for 1 턴",
        specialName: "Light Attack Boost",
    },
    1498: {//STR Fishman Guard
        captain: "Boosts ATK, HP and RCV of [STR] characters by 1.2x",
        special: "Changes Captain's orb into [STR]",
        specialName: "Captain Slot Change - [STR]",
    },
    1499: {//QCK Fishman Guard
        captain: "Boosts ATK, HP and RCV of [QCK] characters by 1.2x",
        special: "Changes Captain's [BLOCK] orbs into Matching orbs",
        specialName: "Captain [BLOCK] Slot Change - Matching",
    },
    1500: {//DEX Fishman Guard
        captain: "Boosts ATK, HP and RCV of [DEX] characters by 1.2x",
        special: "Recovers 2000 HP",
        specialName: "First Aid",
    },
    1501: {//Caribou
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of characters with cost 15 or less by 2x",
        special: "Reduces crew's current HP by 50%, boosts ATK of all characters by 1.3x for 1 턴",
        specialName: "Conviction of God's Will",
    },
    1502: {//Coribou
        captain: "Reduces damage received from [PSY] and [INT] enemies by 30%",
        special: "For Driven characters, randomizes non-matching orbs",
        specialName: "Confession Burial",
    },
    1503: {//Hammond
        captain: "Boosts ATK of Powerhouse characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : ??? + ??? * (1 - (remaining HP) / (total HP)) : ??? : 2.25}",
        special: "Changes own orb into [QCK] and changes adjacent orbs into [EMPTY] orbs",
        specialName: "Absurd Invitation",
    },
    1504: {//Vander Decken IX
        captain: "Boosts ATK of Driven characters by 2x. After scoring 3 PERFECTs in a row, boosts ATK of Driven characters by 2.4x instead.",
        special: "Changes the orbs in the middle row into [EMPTY] orbs and deals 20x character's ATK as [DEX] damage to all enemies at the end of the 턴 for 2 턴",
        specialName: "Inescapable Pursuit",
    },
    1505: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Powerhouse characters by 2.25x 전투 시작 시 체력이 30% 미만이면",
        special: "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes PERFECTs harder to hit for 1 턴, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 턴.",
        specialName: "Shark Arrows",
    },
    1506: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Powerhouse characters by 2.5x 전투 시작 시 체력이 30% 미만이면, 2.25x otherwise",
        special: "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes PERFECTs harder to hit for 1 턴, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 턴.",
        specialName: "Shark Arrows",
    },
    1507: {//White Day Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 1.69x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 턴",
        sailor: "Boosts base ATK of all characters by 15",
        specialName: "Diable Jambe - Concassé Baked",
    },
    1508: {//White Day Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x. Recovers 2x character's RCV in HP at the end of each 턴",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 턴",
        sailor: "Boosts base ATK of all characters by 15",
        specialName: "Diable Jambe - Concassé Baked",
    },
    1509: {//Haruta
        captain: "Reduces cooldown of Slasher and Cerebral specials by 1 턴 at the start of the fight. Boosts ATK of [INT] characters by 2x.",
        special: "Deals 12x character's ATK in INT damage to one enemy and reduces damage received from PSY enemies by 80%.",
        specialName: "Honorable Blade",
        sailor: "Reduces Silence duration against this unit by 2 턴",
        sailorNotes: "#{silence}",
    },
    1510: {//Speed Jiru
        captain: "Boosts ATK of Driven and Striker characters by 2x",
        special: "Deals 12,500 fixed damage to one enemy",
        specialName: "Acceleration Lance",
        sailor: "When HP is above 70% at the start of the 턴, boosts ATK of Striker characters by 20",
    },
    1511: {//Atmos
        captain: "Boosts ATK of PSY characters by 2x",
        special: "Reduces Despair duration by 3 턴, boosts own ATK by 1.5x for 1 턴",
        specialName: "Buffalo Roar",
        sailor: "Boosts base ATK of Powerhouse characters by 20 if your captain is a Powerhouse character",
    },
    1512: {//Kingdew
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Removes Poison, boosts ATK of Powerhouse characters by 1.5x for 1 턴 if HP is below 30% when the special is activated",
        specialName: "Enlightened Spirit",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit if your captain is a Powerhouse character",
    },
    1513: {//Anniversary Sanji
        captain: "Boosts ATK of Fighter characters by 1.75x and RCV of Powerhouse characters by 1.2x",
        special: "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 턴",
        specialName: "Unfamiliar Escort",
    },
    1514: {//Anniversary Sanji
        captain: "Boosts ATK of Fighter characters by 2.5x and RCV of Powerhouse characters by 1.2x",
        special: "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 턴",
        specialName: "Unfamiliar Escort",
    },
    1515: {//White Day Brook
        captain: "Boosts ATK of [STR] and [QCK] characters by 1.5x",
        special: "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 턴",
        specialName: "Three-Verse Humming: Arrow-Notch Slash - Hail",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
    },
    1516: {//White Day Brook
        captain: "Boosts ATK of [STR] and [QCK] characters by 2x, recovers 2x character's RCV in HP at the end of each 턴",
        special: "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 턴",
        specialName: "Three-Verse Humming: Arrow-Notch Slash - Hail",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
    },
    1517: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 턴 and amplifies the effect of orbs by 1.75x for 1 턴",
        specialName: "Spring Hopper - Bullet",
    },
    1518: {//Raid Bellamy :: modified
        captain: "야심형 캐릭터의 공격력을 2.5배로 만든다",
        special: "적 1명의 HP를 10% 줄이고, 1턴 동안 일당의 [PSY][INT] 슬롯을 [유리] 슬롯으로 취급하고 슬롯의 영향을 상당히 증폭시킨다",
        specialName: "스프링 호퍼 흉탄",
    },
    1519: {//Dadan
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight. Boosts ATK of Slasher characters by 1.5x",
        special: "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
        specialName: "Break by the Fireplace",
    },
    1520: {//Dadan
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight. Boosts ATK of Slasher characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
        specialName: "Break by the Fireplace",
    },
    1521: {//Dogra
        captain: "Boosts ATK of [QCK] and Slasher characters by 1.2x",
        captainNotes: "The bonus is cumulative. [QCK] Slasher characters get a 1.44x bonus.",
        special: "Reduces Despair duration by 1 턴, recovers 1000 HP at the end of each 턴 for 2 턴",
        specialName: "Affectionate Circumstances",
    },
    1522: {//Ace
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.2x",
        special: "Removes blindness, boosts own ATK by 1.75x for 1 턴",
        specialName: "Demon's Temper",
    },
    1523: {//Spring Chopper
        captain: "Boosts ATK of [PSY] characters by 1.75x and recovers 1,000 HP at end of each 턴",
        special: "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
        specialName: "The Life Risked for the 'Sakura' Miracle",
        sailor: "Boosts amount healed from [RCV] orbs by 124 each",
    },
    1524: {//Spring Chopper
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 1,224 HP at end of each 턴",
        special: "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
        specialName: "The Life Risked for the 'Sakura' Miracle",
        sailor: "Boosts amount healed from [RCV] orbs by 124 each",
    },
    1525: {//Sulieman
        captain: "Boosts ATK of Slasher characters by 3.25x, reduces his own ATK multiplier by 0.0625x at the end of each 턴 until it is 2x",
        special: "Deals 3 hits of random typeless damage to random enemies, delays all enemies for 1 턴, boosts ATK against delayed enemies by 1.3x for 2 턴",
        specialNotes: "#{randomHits : 3}<br>#{random : 50,000 : 150,000 : per hit}",
        specialName: "Sorrowful Execution",
    },
    1526: {//Arlong
        captain: "Boosts ATK of [INT] characters by 1.75x",
        special: [
            {
                "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.5x for 1 턴",
                "cooldown": [ 16, 7 ],
            },
            {
                "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.75x for 1 턴",
                "cooldown": [ 21, 12 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Just 'Water Play'",
    },
    1527: {//Arlong
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight. Boosts ATK of [INT] characters by 2x",
        special: [
            {
                "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.5x for 1 턴",
                "cooldown": [ 16, 7 ],
            },
            {
                "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.75x for 1 턴",
                "cooldown": [ 21, 12 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Just 'Water Play'",
    },
    1528: {//Blenheim
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Reduces Despair duration by 2 턴, makes STR, DEX, and QCK orbs \"beneficial\" to Powerhouse characters for 1 턴 전투 시작 시 체력이 30% 미만이면",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
        specialName: "Australian Army Aid Blade",
    },
    1529: {//Cavendish
        captain: "Boosts ATK of all characters by 1.5x, but boosts his OWN attack by 3x",
        special: "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 턴, 2x otherwise",
        sailor: "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
        specialName: "Blue Bird Sword",
    },
    1530: {//Cavendish
        captain: "Boosts ATK of all characters by 1.75x, but boosts his OWN attack by 3.5x",
        special: "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 턴, 2x otherwise",
        sailor: "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
        specialName: "Blue Bird Sword",
    },
    1531: {//Legend Usopp
        captain: "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x 전투 시작 시 체력이 30% 미만이면. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to all characters.",
        special: [
            {
                "description": "Delays all enemies for 3 턴",
                "cooldown": [ 13, 10 ],
            },
            {
                "description": "Delays all enemies for 4 턴, adds 0.2x to Chain multiplier for 4 턴",
                "cooldown": [ 18, 15 ],
            },
            {
                "description": "Delays all enemies for 5 턴, adds 0.3x to Chain multiplier for 4 턴",
                "cooldown": [ 24, 21 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Completely resists Blindness",
        specialName: "Long-Range Attack: Bagworm",
    },
    1532: {//Legend Usopp
        captain: "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x 전투 시작 시 체력이 30% 미만이면. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to all characters.",
        special: [
            {
                "description": "Delays all enemies for 3 턴",
                "cooldown": [ 13, 10 ],
            },
            {
                "description": "Delays all enemies for 4 턴, adds 0.2x to Chain multiplier for 4 턴",
                "cooldown": [ 18, 15 ],
            },
            {
                "description": "Delays all enemies for 5 턴, adds 0.3x to Chain multiplier for 4 턴",
                "cooldown": [ 24, 21 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Completely resists Blindness",
        specialName: "Long-Range Attack: Bagworm",
        limit: [
            { "description": "공격력 상승 : 15" },
            { "description": "체력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Reduce No Healing duration" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 15" },
            { "description": "선원효과 추가 1: Boosts base HP of Shooter characters by 100" },
            { "description": "공격력 상승 : 15" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 2: Critical Hit" },
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 25" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 25" },
            { "description": "체력 상승 : 70" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 80" },
            { "description": "회복력 상승 : 25" },
            { "description": "체력 상승 : 100" },
            { "description": "잠재능력 습득 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: This character's attack will ignore barriers if HP is above 30%"
                ]
            },
        ]
    },
    1533: {//Rayleigh
        captain: "Boosts ATK of [QCK] characters by 2x and their HP by 1.2x at the start of the chain, by 2.5x after the 4th PERFECT in a row.",
        special: "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
        sailor: "Makes [STR], [INT], and [DEX] orbs \"beneficial\" for this unit",
        specialName: "The Teacher's Final Ordeal",
    },
    1534: {//Rayleigh :: modified
        captain: "[QCK]의 공격력을 2.5배, 체력을 1.2배, 4연속 PERFECT 이후 같은 속성의 공격력이 3배가 된다",
        special: "[BLOCK] 슬롯을 포함한 모든 슬롯을 [QCK] 슬롯으로 바꾼다",
        sailor: "자신은 [STR][INT][DEX] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "사부로부터의 최종 시련",
    },
    1535: {//Duval
        captain: "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of [PSY] characters by 2.5x if they have matching orbs",
        special: "Reduces damage received by 50% for 1 턴, boosts ATK of PSY characters by 1.75x for 1 턴",
        sailor: "Makes [INT] orbs \"beneficial\" for [PSY] characters",
        specialName: "Prideful Memories",
    },
    1536: {//Duval
        captain: "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of [PSY] characters by 3x if they have matching orbs",
        special: "Reduces damage received by 50% for 1 턴, boosts ATK of PSY characters by 1.75x for 1 턴",
        sailor: "Makes [INT] orbs \"beneficial\" for [PSY] characters",
        specialName: "Prideful Memories",
    },
    1537: {//Heracles'n
        captain: "Boosts ATK of [STR] characters by 2x and boosts HP of Shooter and Striker characters by 1.2x",
        special: "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
        sailor: "Boosts base HP of STR characters by 150",
        specialName: "Greenstone Threat",
    },
    1538: {//Heracles'n :: modified
        captain: "[STR]의 공격력을 2.5배, 타격형과 사격형 캐릭터의 체력을 1.25배로 만든다",
        special: "적 전체의 HP를 20% 줄이고, 오른쪽 줄의 타격형과 사격형 캐릭터의 속성 슬롯을 속성 일치 슬롯으로 바꾼다",
        sailor: "[STR]의 기본 체력이 150 상승한다",
        specialName: "그린 스톤의 위협",
    },
    1539: {//Perona
        captain: "Boosts ATK and RCV of characters with cost 20 or less by 1.5x",
        special: "Reduces damage received by 90% for 1 턴, reduces the defense of all enemies by 90% for 1 턴, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 턴",
        sailor: "Boosts base ATK of INT characters by 50",
        specialName: "Negative Hollow: You're All Rotten Imbeciles",
    },
    1540: {//Perona
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their RCV by 1.5x",
        special: "Reduces damage received by 90% for 1 턴, reduces the defense of all enemies by 90% for 1 턴, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 턴",
        sailor: "Boosts base ATK of INT characters by 50",
        specialName: "Negative Hollow: You're All Rotten Imbeciles",
    },
    1541: {//Elizabeth
        captain: "Boosts ATK by 2x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
        special: "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier, and reduces the defense of all enemies by 100% for 1 턴",
        sailor: "Restores her own special by 2 턴 when it is rewinded",
        sailorNotes: "#{rewind : 1}",
        specialName: "Soft and Gentle Fluffy Kisses",
    },
    1542: {//Elizabeth
        captain: "Boosts RCV and HP by 1.2x, boosts ATK by 2.5x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
        special: "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier, and reduces the defense of all enemies by 100% for 1 턴",
        sailor: "Restores her own special by 2 턴 when it is rewinded",
        sailorNotes: "#{rewind : 1}",
        specialName: "Soft and Gentle Fluffy Kisses",
    },
    1543: {//6+ Usopp :: modified
        captain: "각 배틀별(선제 행동 후)로 적 전체의 턴을 1턴 증가시키며, 사격형 캐릭터의 [STR][DEX][QCK]PSY][INT][RCV][TND] 슬롯을 [유리] 슬롯으로 취급하고, 같은 타입의 공격력을 남은 체력이 50% 이하일 때 1.5배, 30% 이하일 때 1.75배로 만든다",
        captainNotes: "The Attack Timer increase is NOT a delay, so the enemies can still be delayed. Attack Timer increase ignores Debuff Prevention barriers",
        special: "적 전체의 HP를 10% 줄이고, 지연 무효·상태이상 무효를 무시하고 적 전체의 공격을 1턴 지연, 지연 무효·상태이상 무효가 아닐 때는 3턴 동안 지연시킨다",
        sailor: "일당의 의성어 은폐 상태를 완전히 회피한다",
        specialName: "초록성 임팩트 울프",
        limit: [
            { "description": "공격력 상승 : 15" },
            { "description": "체력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Reduce No Healing duration" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 15" },
            { "description": "선원효과 추가 1: Boosts base HP of Shooter characters by 100" },
            { "description": "공격력 상승 : 15" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 2: Critical Hit" },
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 25" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 25" },
            { "description": "체력 상승 : 70" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 80" },
            { "description": "회복력 상승 : 25" },
            { "description": "체력 상승 : 100" },
            { "description": "잠재능력 습득 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: This character's attack will ignore barriers if HP is above 30%"
                ]
            },
        ]
    },
    1544: {//Sakura Koala
        captain: "Boosts ATK of Fighter characters by 1.75x and heals for .3x her RCV at the end of the 턴 each time you hit a PERFECT",
        special: "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 턴",
        specialName: "Bean Paste under the Petal Snow",
    },
    1545: {//Sakura Koala
        captain: "Boosts ATK of Fighter characters by 2.25x and heals for .5x her RCV at the end of the 턴 each time you hit a PERFECT",
        special: "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 턴",
        specialName: "Bean Paste under the Petal Snow",
    },
    1546: {//Soul King Brook
        captain: "Boosts ATK of [QCK] characters by 1.5x and boosts HP of Free Spirit characters by 1.2x",
        special: "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 턴",
        specialName: "Dawn of A Big Star",
    },
    1547: {//Soul King Brook
        captain: "Boosts ATK of [QCK] characters by 2x and boosts HP of Free Spirit characters by 1.3x",
        special: "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 턴",
        specialName: "Dawn of A Big Star",
    },
    1548: {//Soul King Managers
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Delays all enemies for 1 턴. Adds .2x to Chain multiplier for 1 턴",
        specialName: "Former Thief's Box Office",
    },
    1549: {//5+ Robin
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 3x character's RCV in HP at the end of each 턴",
        special: "Reduces Bind, Despair and Silence duration by 3 턴, and reduces Special Cooldown of all characters by 1 턴",
        specialName: "Mil Fluer: Campo de Flores",
        specialNotes: "#{silence}",
    },
    1550: {//5+ Franky
        captain: "Boosts ATK of [INT] characters by 2.5x, reduces damage received by 10%",
        special: "Deals 35x character's ATK in [INT] damage to all enemies. Changes [TND] and [RCV] orbs on Shooter and Free Spirit characters into Matching Orbs.",
        specialName: "Franky's Rocket Launcher",
    },
    1551: {//5+ Brook // modified
        captain: "자유형 캐릭터의 공격력을 2.5배로 만들고, 턴 종료 시 체력을 430 회복한다",
        special: "적 전체의 공격을 1턴 지연시키고, 일당의 슬롯을 1턴 고정한다",
        specialName: "흥얼흥얼 눈보라 베기",
    },
    1552: {//Coliseum Hajrudin
        captain: "Boosts ATK of characters with 40 cost by 2.5x",
        special: "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 턴",
        specialName: "Thunder Giant",
    },
    1553: {//Coliseum Hajrudin :: modified
        captain: "코스트 40인 캐릭터의 공격력을 2.75배로 만든다",
        special: "적 1명에게 고정 데미지 300,000을 주고, 적 전체의 HP 바에 걸려 있는 모든 배리어를 1턴 줄이고, 1턴 동안 코스트 40인 캐릭터의 공격력을 1.75배로 만든다",
        specialName: "거인의 천둥",
    },
    1554: {//Coliseum Ryuma
        captain: "Boosts ATK of [DEX] characters by 2x",
        special: "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 턴",
        specialName: "Pure Body and Soul",
    },
    1555: {//Coliseum Ryuma
        captain: "Boosts ATK of [DEX] characters by 2.25x, recovers 2x character's RCV in HP at the end of each 턴",
        special: "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 턴",
        specialName: "Pure Body and Soul",
    },
    1556: {//Wadatsumi
        captain: "Boosts HP of STR characters by 2x",
        special: "If the HP of the enemy with the highest HP percentage is above 3,000,000 HP, boosts own ATK by 2x for 1 턴",
        specialName: "Sailboat Sinking Fist",
    },
    1557: {//Zeo
        captain: "Boosts ATK of Striker characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
        special: "Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 턴",
        specialName: "Super Sole Headbutt",
    },
    1558: {//Ikaros
        captain: "Boosts ATK of Shooter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
        special: "Cuts the current HP of each enemy by 15%",
        specialName: "Stamping Press",
    },
    1559: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
        special: "Reduces crew's HP by 50%, deals 55x ATK in Typeless damage to all enemies",
        specialName: "Disorderly Drunken Frenzy Killing",
    },
    1560: {//Daruma
        captain: "Boosts ATK of Fighter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
        special: "Empties all slots including those with [BLOCK] orbs",
        specialName: "Daruma Drop",
    },
    1561: {//Dosun
        captain: "Boosts ATK of [INT] characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
        special: "Boosts ATK of Striker characters by 1.5x for 1 턴, deals 25x character's ATK in [INT] damage to one enemy",
        specialName: "Explosive Nail Hammer",
    },
    1562: {//Hody Jones
        captain: "Boosts ATK of Powerhouse characters by 3.5x, reduces own ATK multiplier by 0.1x at the end of each 턴 until it is 1.5x, reduces crew's current HP by 10% at the end of each 턴",
        special: "Deals 60x character's ATK in [QCK] damage to one enemy, increases damage received by 2x for 2 턴, boosts ATK of Powerhouse characters by 1.75x for 1 턴",
        specialName: "Drugs From Heaven",
    },
    1563: {//Elizabello
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.75x at the start of the chain and by 2.1875x after the 5th PERFECT in a row",
        special: [
            {
                "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
                "cooldown": [ 17, 9 ],
            },
            {
                "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 턴",
                "cooldown": [ 24, 16 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Battle Royale Rush",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    1564: {//Elizabello
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x at the start of the chain and by 3x after the 5th PERFECT in a row",
        special: [
            {
                "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
                "cooldown": [ 17, 9 ],
            },
            {
                "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 턴",
                "cooldown": [ 24, 16 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Battle Royale Rush",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    1565: {//Dagama
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of all characters by 1.75x",
        special: "Reduces Special Cooldown of all characters by 1 턴 and reduces crew's current HP by 10%",
        specialName: "War of Mislead Order",
    },
    1566: {//Dagama
        captain: "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 1 턴 and reduces crew's current HP by 10%",
        specialName: "War of Mislead Order",
    },
    1567: {//Kid Boa
        captain: "Boosts ATK and RCV of [QCK] characters by 1.5x",
        special: "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 턴",
        specialName: "The Princess' Principle",
    },
    1568: {//Kid Boa
        captain: "Boosts ATK and RCV of [QCK] characters by 2x",
        special: "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 턴",
        specialName: "The Princess' Principle",
    },
    1569: {//Anniversary Law :: modified
        captain: "일당의 공격력을 2.25배로 만들고, 획득하는 베리와 해적의 EXP가 1.2배가 된다(획득하는 베리와 해적 EXP의 증가 효과는 모험 도중에 선장이 되었을 때는 발동되지 않습니다)",
        special: "속성 일치 슬롯 이외의 슬롯을 랜덤으로 바꾸고([BLOCK]도 변환 가능) 슬롯을 3번 자유롭게 움직인다",
        specialName: "ROOM 샘블즈·정크션",
    },
    1570: {//Inuarashi
        captain: "전투 시작 시 체력이 30% 미만이면 박식 캐릭터의 공격력이 2.75배, 체인 계수가 1.5배가 되고, 박식 캐릭터의 공격력이 2.5배가 된다.",
        special: "일당의 체력을 크게 줄이고 적 1기에 힘 속성 특대 데미지, 1턴 동안 탭 타이밍 보너스로 필살기 사용 캐릭터의 공격력 80배의 무속성 데미지를 가산한다",
        specialNotes: "#{additionalDamage : 80x}",
        specialName: "빛나는 왕의 검",
    },
    1571: {//Inuarashi
        captain: "전투 시작 시 체력이 30% 미만이면 박식 캐릭터의 공격력이 2.75배, 체인 계수가 1.5배가 되고, 박식 캐릭터의 공격력이 2.5배가 된다.",
        special: "일당의 체력을 크게 줄이고 적 1기에 힘 속성 특대 데미지, 1턴 동안 탭 타이밍 보너스로 필살기 사용 캐릭터의 공격력 80배의 무속성 데미지를 가산한다",
        specialNotes: "#{additionalDamage : 80x}",
        specialName: "빛나는 왕의 검",
    },
    1572: {//Wanda
        captain: "Boosts ATK of Cerebral characters by 2x, and their RCV by 1.2x",
        special: "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 턴",
        sailor: "Reduces Paralysis duration by 1 턴",
        specialName: "Ruler's Aide Flight",
    },
    1573: {//Wanda
        captain: "Boosts ATK of Cerebral characters by 2.5x, and their RCV by 1.2x",
        special: "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 턴",
        sailor: "Reduces Paralysis duration by 1 턴",
        specialName: "Ruler's Aide Flight",
    },
    1574: {//Sicilian
        captain: "Boosts ATK of [INT] characters by 2.25x",
        special: "Delays all enemies for 1 턴, deals 25x character's ATK [INT] damage to all enemies, and changes [STR], [DEX], [QCK], [INT], or [PSY] orbs on Cerebral characters into Matching orbs.",
        sailor: "When HP is below 30% at the start of the 턴, boosts own ATK by 200",
        specialName: "Dash - Dive - Destroy",
    },
    1575: {//Sicilian
        captain: "Boosts ATK of [INT] characters by 2.5x and their HP by 1.25x",
        special: "Delays all enemies for 1 턴, deals 25x character's ATK [INT] damage to all enemies, and changes [STR], [DEX], [QCK], [INT], or [PSY] orbs on Cerebral characters into Matching orbs.",
        sailor: "When HP is below 30% at the start of the 턴, boosts own ATK by 200",
        specialName: "Dash - Dive - Destroy",
    },
    1576: {//Kin'emon
        captain: "Boosts ATK by 2.5x following a chain of Good > Great > PERFECT hits",
        special: "Deals 60x character's ATK in typeless damage to all enemies, and changes all orbs on all characters into Kinemon's orb.",
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        sailor: "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
        specialName: "Flaming Flash",
    },
    1577: {//Kin'emon :: modified
        captain: "턴 종료 시에 캐릭터의 회복력x3배의 체력을 회복하고, GOOD→GREAT→PERFECT 순으로 공격한 이후부터 캐릭터의 공격력이 3.5배가 된다",
        special: "적 전체에게 무 속성 특대 데미지를 주고, 모든 슬롯을 자신과 같은 슬롯으로 바꾼다",
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        sailor: "자신은 [STR][QCK] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "화류일섬",
    },
    1578: {//Momonosuke :: modified
        captain: "체력이 일정 비율 이상일 떄, 공격을 받아도 쓰러지지 않는다",
        special: [
            {
                "description": "1턴 동안 체인 계수가 +0.2 증가한다",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "슬롯을 1회 자유롭게 움직이고, 1턴 동안 체인 계수가 +0.3 증가한다",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "슬롯을 1회 자유롭게 움직이고, 1턴 동안 체인 계수가 +0.5 증가한다",
                "cooldown": [ 14, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "자신은 [STR][QCK][DEX][INT] 슬롯도 [유리](\"beneficial\") 슬롯으로 취급한다",
        specialName: "승천하는 기적의 용",
    },
    1579: {//Momonosuke
        captain: "Boosts ATK, HP and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
        special: [
            {
                "description": "Adds .2x to Chain multiplier for 1 턴",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Switches orbs between slots once, and adds .3x to Chain multiplier for 1 턴",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Switches orbs between slots once, and adds .5x to Chain multiplier for 1 턴",
                "cooldown": [ 14, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Makes [STR], [QCK], [DEX], and [INT] orbs \"beneficial\" for this unit",
        specialName: "Miraculous Flying Dragon",
    },
    1580: {//Fortnight Law
        captain: "Boosts ATK of Free Spirit characters by 1.5x and boosts RCV of DEX characters by 1.2x",
        special: "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "ROOM Tact",
    },
    1581: {//Fortnight Law
        captain: "Boosts ATK of Free Spirit characters by 2x and boosts RCV of DEX characters by 1.5x",
        special: "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "ROOM Tact",
    },
    1582: {//Fortnight Monet
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        special: "Recovers 10x character's RCV in HP. Boosts ATK and RCV of Cerebral characters by 1.5x for 1 턴",
        specialName: "Observing within the Snow Storm",
    },
    1583: {//Coliseum Orlumbus
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Locks all orbs for 1 턴. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 턴, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 턴",
        specialName: "Admiral Hug",
    },
    1584: {//Coliseum Orlumbus
        captain: "Boosts ATK of Striker characters by 3x 전투 시작 시 체력이 30% 미만이면, by 2.5x otherwise",
        special: "Locks all orbs for 1 턴. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 턴, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 턴",
        specialName: "Admiral Hug",
    },
    1585: {//Coliseum Helmeppo
        captain: "Boosts ATK and RCV of Slasher and Driven characters by 1.5x",
        special: "If HP is below 5,000 when the special is activated, boosts ATK of Driven and Slasher characters by 1.75x for 1 턴 and recovers 10x character's RCV in HP",
        specialName: "Firey Morale",
    },
    1586: {//Coliseum Helmeppo
        captain: "Boosts ATK of Slasher and Driven characters by 2x and their RCV by 1.5x",
        special: "If HP is below 5,000 when the special is activated, boosts ATK of Driven and Slasher characters by 1.75x for 1 턴 and recovers 10x character's RCV in HP",
        specialName: "Firey Morale",
    },
    1587: {//Legend Sanji :: modified
        captain: " 일당의 공격력을 2.5배, 체력을 1.3배로 만든다[선장 액션:스카이 워크] 스카이 워크 발동 직후에 공격할 수 없지만, 자신을 대상으로 하는 일부 효과를 막을 수 있으며, 다음 턴에 자신의 공격력이 2.5배(일당 중에 공격하는 캐릭터가 없을 때는 발동 불가) 더 상승한다",
        captainNotes: "Multiple Sanjis can Sky Walk at the same time. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost, and will stack with other boosts",
        special: "적 전체에게 고정 데미지 100,000을 주고, 일당의 [BLOCK][TND] 슬롯, 자신의 슬롯 및 자신과 인접한 슬롯을 속성 일치 슬롯으로 변환하며, 1턴 동안 자신의 공격력을 2배로 만든다",
        sailor: "일당은 [RCV] 슬롯도 [유리](\"beneficial\") 슬롯으로 취급한다",
        specialName: "헬 메모리즈",
    },
    1588: {//Legend Sanji :: modified
        captain: " 일당의 공격력을 2.5배, 체력을 1.3배로 만든다[선장 액션:스카이 워크] 스카이 워크 발동 직후에 공격할 수 없지만, 자신을 대상으로 하는 일부 효과를 막을 수 있으며, 다음 턴에 자신의 공격력이 2.5배(일당 중에 공격하는 캐릭터가 없을 때는 발동 불가) 더 상승한다",
        captainNotes: "Multiple Sanjis can Sky Walk at the same time. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost, and will stack with other boosts",
        special: "적 전체에게 고정 데미지 100,000을 주고, 일당의 [BLOCK][TND] 슬롯, 자신의 슬롯 및 자신과 인접한 슬롯을 속성 일치 슬롯으로 변환하며, 1턴 동안 자신의 공격력을 2배로 만든다",
        sailor: "일당은 [RCV] 슬롯도 [유리](\"beneficial\") 슬롯으로 취급한다",
        specialName: "헬 메모리즈",
    },
    1589: {//Anniversary Shanks
        captain: "Boosts Chain Multiplier by 3x",
        special: "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
        specialName: "Sharing a Cup Filled with Emotions",
    },
    1590: {//Anniversary Shanks
        captain: "Boosts Chain Multiplier by 3.5x, Boosts HP and RCV of all characters by 1.2x",
        special: "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
        specialName: "Sharing a Cup Filled with Emotions",
    },	
    1591: {//Anniversary Boa
        captain: "Boosts ATK and RCV of Fighter and Free Spirit characters by 1.5x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 턴",
        specialName: "Immoral Gaze",
    },
    1592: {//Anniversary Boa
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.25x and their RCV by 1.75x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 턴",
        specialName: "Immoral Gaze",
    },
    1593: {//Gear 4 Luffy
        captain: "격투 캐릭터의 공격력을 2.5배로 상승시키고, 만약 \"킹콩 건\"을 사용하면, 3턴 동안 선장효과인 격투 캐릭터의 공격력 증가가 4배로 상승하며, 3턴 동안 받는 데미지가 56% 감소한다.",
        special: [
            {
                "description": "적 1기에 캐릭터 공격력 100배의 무속성 데미지를 주고, 1턴 동안 격투 캐릭터의 [STR], [DEX], [PSY], [INT], [TND], [RCV] 슬롯을 [유리] 슬롯으로 취급한다. 3턴 후 7턴 동안 캐릭터 봉쇄, 선장효과 무효가 발생한다.",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "적 1기에 캐릭터 공격력 200배의 무속성 데미지를 주고, 3턴 동안 격투,자유 캐릭터의 [STR], [DEX], [PSY], [INT], [TND], [RCV] 슬롯을 [유리] 슬롯으로 취급한다. 3턴 후 7턴 동안 캐릭터 봉쇄, 선장효과 무효가 발생한다.",
                "cooldown": [ 18, 13 ],
            },
        ],
        sailor: "이 캐릭터는 저림효과에 완전히 면역된다.",
        specialName: "킹콩 건",
    },
    1594: {//Fujitora
        captain: "Cuts the current HP of each enemy by 10% at the end of each 턴",
        special: "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 턴",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Gravity Blade: Fierce Tiger",
    },
    1595: {//Fujitora :: modified
        captain: "강인형 캐릭터의 공격력을 2.25배, 체력을 1.2배로 만들고, 턴 종료 시 적 전체의 HP를 10% 감소시킨다",
        special: "적 전체에 모든 방어 효과를 무시하고 공격력x50배의 [PSY] 데미지를 주며, 인접한 슬롯을 속성 일치 슬롯으로 바꾸고, 1턴 동안 강인형 캐릭터의 슬롯의 영향을 2배로 증폭시킨다",
        specialNotes: "#{ignoreBarrier}",
        specialName: "중력도 맹호",
    },
    1596: {//Shirahoshi
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 턴, reduces damage received by 70% for 1 턴",
        specialName: "Great Dinner Buffet",
    },
    1597: {//Shirahoshi
        captain: "Boosts ATK and RCV of [INT] characters by 1.75x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 턴, reduces damage received by 70% for 1 턴",
        specialName: "Great Dinner Buffet",
    },
    1598: {//Ryuboshi
        captain: "Boosts HP of Powerhouse characters by 1.5x",
        special: "Boosts ATK of all characters by 1.2x and recovers 5x character's RCV in HP at the end of each 턴 for 3 턴",
        specialName: "Musical Scale",
    },
    1599: {//Manboshi
        captain: "Boosts ATK of Powerhouse characters by 1.75x",
        special: "Reduces the defense of all enemies by 50% for 1 턴. Changes own orb into [QCK]",
        specialName: "Happy Dance",
    },
    1600: {//3rd Anniversary Luffy
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x",
        special: "Deals 20x character's ATK in [PSY] damage to one enemy, locks orbs for 1 턴, and amplifies the effect of orbs on [PSY] and [INT] characters by 1.75x for 1 턴",
        specialName: "Right Leg Armament: Gum-Gum Battle Axe",
    },
    1601: {//Power Creep Shiryu
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 턴,",
        specialName: "Blood Stained 'Iron Wall'",
        sailor: "Boosts own base ATK by 100 if this character is the last in the chain to attack",
    },
    1602: {//Power Creep Shiryu :: modified
        captain: "참격형 캐릭터의 공격력을 2배로 만들고, PERFECT 3연속 달성 시, 이후 참격형 캐릭터의 공격력이 1.5배 더 상승한다",
        special: "남은 HP가 필살기 발동자의 공격력x75배의 값 이하인 적 모두를 격파하고, 모든 독 상태를 회복하며, 3턴 동안 받는 데미지를 50% 줄인다",
        specialName: "피로 물든 「철벽」",
        sailor: "공격 가능한 캐릭터 전원이 공격하고 자신이 마지막으로 공격할 때, 자신의 기본 공격력이 100 상승한다",
    },
    1603: {//McGuy
        captain: "Boosts ATK of [STR] characters by 2.25x and their RCV by 1.25x",
        special: "Delays all enemies for 2 턴",
        specialName: "Numb Crosscut",
    },
    1604: {//Training Forest Ace
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
        specialName: "Fist of the Demon's Child 'Fire'",
    },
    1605: {//Training Forest Ace
        captain: "Boosts ATK of [STR] characters by 2x and recovers 500 HP at end of each 턴",
        special: "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
        specialName: "Fist of the Demon's Child 'Fire'",
    },
    1606: {//Lafitte
        captain: "Boosts ATK and RCV of [PSY] characters by 1.75x",
        special: "Randomly shuffles non-matching orbs on Shooter characters, reduces enemies defense by 50% for 1 턴 and delays all enemies for 1 턴",
        specialName: "Deprivation of Self-Consciousness",
    },
    1607: {//Van augur
        captain: "Boosts ATK of Shooters by 2x",
        special: "Deals 10x character's ATK in [DEX] damage to one enemy, locks orbs for 1 턴, and boosts ATK of Shooter characters by 1.5x for 1 턴",
        specialName: "Painless Bullet",
    },
    1608: {//Doc Q
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "For each enemy, has an extremely small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : <1%}",
        specialName: "Vile Fruit",
    },
    1609: {//Legend Enel :: modified
        captain: "일당의 최대 체력이 20% 줄어드는 대신 [RCV] 슬롯 출현율이 상승, 일당의 [RCV] 슬롯을 [유리](\"beneficial\") 슬롯으로 취급하고, 이전 턴의 회복량에 따라 일당의 공격력이 2배~3.25배가 된다",
        captainNotes: "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous 턴> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.",
        special: "필살기 발동 시까지 최대 체력을 넘어 회복한 값x10배의 무 속성 데미지를 적 전체에게 준다(최대 2,000,000 데미지)",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP, and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
        specialName: "만 개의 번개",
    },
    1610: {//Legend Enel
        captain: "일당의 최대 체력이 20% 줄어드는 대신 [RCV] 슬롯 출현율이 상승, 일당의 [RCV] 슬롯을 [유리](\"beneficial\") 슬롯으로 취급하고, 이전 턴의 회복량에 따라 일당의 공격력이 2배~3.25배가 된다",
        captainNotes: "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous 턴> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.",
        special: "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP, and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
        specialName: "Heavy Thunder",
    },
    1611: {//Kuma
        captain: "Boosts ATK of Shooter characters by 1.75x and their HP by 1.2x",
        special: "Reduces the duration of Bind and Despair by 7 턴.  Recovers 20% of crew's MAX HP, and has low chance to eliminate all enemies",
        specialNotes: "#{instantKill : 10%}",
        specialName: "Paw Paw Fruit: Scatter and Fly Away",
        sailor: "If Kuma has a [PSY] orb, and you hit a PERFECT with him, keep his [PSY] orb for the next 턴",
    },
    1612: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x",
        special: "Reduces the duration of Bind and Despair by 7 턴.  Recovers 20% of crew's MAX HP, and has low chance to eliminate all enemies",
        specialNotes: "#{instantKill : 10%}",
        specialName: "Paw Paw Fruit: Scatter and Fly Away",
        sailor: "If Kuma has a [PSY] orb, and you hit a PERFECT with him, keep his [PSY] orb for the next 턴",
    },
    1613: {//Rob Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 턴",
        specialName: "4000 Power Level Technique: Tempest Kick",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1614: {//Rob Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and their HP by 1.25x",
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 턴",
        specialName: "4000 Power Level Technique: Tempest Kick",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1615: {//Crocodile
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 턴 and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 턴",
        specialName: "Desert Spada",
        sailor: "Restores his own special by 2 턴 when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    1616: {//Crocodile
        captain: "Boosts ATK of Striker characters by 2.5x and recovers 1.5x character's RCV in HP at the end of each 턴",
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 턴 and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 턴",
        specialName: "Desert Spada",
        sailor: "Restores his own special by 2 턴 when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    1617: {//Moria :: modified
        captain: "[STR][INT][DEX] 속성 캐릭터의 공격력을 2배로 만든다",
        special: "[STR][INT][DEX] 속성 캐릭터의 속성 일치 슬롯을 제외한 나머지를 랜덤으로 바꾸고, 2턴 동안 [STR][INT][DEX] 속성 캐릭터의 공격력을 1.75배로 만든다",
        specialName: "섀도우즈 아스가르드 「왕의 부하 칠무해가 선사하는 세례」",
        sailor: "자신 이외의 캐릭터가 필살기 사용 시, 자신의 필살기 턴이 1턴 단축된다",
    },
    1618: {//Moria
        captain: "Boosts ATK of [STR], [INT], and [DEX] characters by 2.5x",
        special: "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 턴",
        specialName: "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
        sailor: "When any other character uses a special, reduces own cooldown by 1 턴",
    },
    1619: {//6+ Raybae/Rayleigh
        captain: "Boosts chain multiplier by 4x and boosts HP and RCV of all characters by 1.2x",
        special: "Reduces Bind, Despair, and Paralysis duration by 7 턴, delays all enemies for 1 턴, and makes PERFECTs easier to hit for 1 턴",
        specialName: "Netherworld Conqueror",
    },
    1620: {//Log Kid :: modified
        captain: "남은 체력이 적을 때 타격형 캐릭터의 공격력을 2.5배로 만든다",
        special: "일당의 체력이 대폭 감소하는 대신 1턴 동안 타격형 캐릭터의 공격력이 2배가 된다",
        specialName: "강철 자성체의 양팔",
    },
    1621: {//Log Kid
        captain: "Boosts ATK of Striker characters by 3x 전투 시작 시 체력이 30% 미만이면, by 2.5x otherwise and boosts HP of Striker characters by 1.2x",
        special: "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 턴",
        specialName: "Double Steel Magnetic Arm",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "선원효과 추가 #: Boosts base ATK of Striker characters by 75" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "선원효과 추가 #: Boosts base HP of Driven characters by 75" },
            { "description": "체력 상승 : 60" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]
    },
    1622: {//Reborn Doffy
        special: "슬롯을 자유롭게 움직이고(2회), 슬롯 영향이 두 배가 된다(1턴)",
        specialNotes: "#{orb : 2x}",
        specialName: "오버 히트 「개」",
        captain: "참격형 캐릭터의 공격력이 2배가 된다"
    },
    1623: {//Reborn Doffy :: modified
        special: "슬롯을 자유롭게 움직이고(2회), 슬롯 영향이 두 배가 된다(1턴)",
        specialNotes: "#{orb : 2x}",
        specialName: "오버 히트 「개」",
        captain: "참격형 캐릭터의 공격력과 체력이 2배가 된다"
    },
    1624: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 1.5x and boosts HP of Powerhouse characters by 1.25x",
        special: "Randomizes all orbs, cuts the current HP of all enemies by 10%, and Poisons all enemies.",
        specialName: "Flexible Six Swords",
    },
    1625: {//Daruma
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.75x",
        special: "Randomizes all orbs, including [BLOCK] orbs, and reduces damage received by 50% for 1 턴.",
        specialName: "Arching Fangs",
    },
    1626: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 2.5x following a chain of Good > Great > PERFECT hits",
        special: "Deals 20x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 턴",
        specialName: "The Calm Before The Storm",
    },
    1627: {//Mach Vise
        captain: "Boosts ATK Free Spirit characters by 2x",
        special: [
            {
                "description": "Reduces Chain Multiplier Limit duration by 1 턴 and boosts the Color Affinity of Striker characters by 1.25x for 1 턴",
                "cooldown": [ 23, 9 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 3 턴 and boosts the Color Affinity of Striker characters by 1.5x for 1 턴",
                "cooldown": [ 27, 13 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 턴 and boosts the Color Affinity of Striker characters by 1.75x for 1 턴",
                "cooldown": [ 31, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Thousand Ton Destruction",
    },
    1628: {//Mach Vise
        captain: "Boosts ATK Free Spirit and Striker characters by 2.25x and their RCV by 1.5x",
        special: [
            {
                "description": "Reduces Chain Multiplier Limit duration by 1 턴 and boosts the Color Affinity of Striker characters by 1.25x for 1 턴",
                "cooldown": [ 23, 9 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 3 턴 and boosts the Color Affinity of Striker characters by 1.5x for 1 턴",
                "cooldown": [ 27, 13 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 턴 and boosts the Color Affinity of Striker characters by 1.75x for 1 턴",
                "cooldown": [ 31, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Thousand Ton Destruction",
    },
    1629: {//Ikaros Much
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
        specialName: "The Spear that Penetrated the Undersea Mountain",
    },
    1630: {//Ikaros Much
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
        specialName: "The Spear that Penetrated the Undersea Mountain",
    },
    1631: {//Fisher Tiger
        captain: "강인형 캐릭터의 공격력이 2.25배가 된다",
        special: "3턴 동안 강인형 캐릭터의 공격력을 1.75배로 만든다",
        specialName: "「금지 사항」에 대한 반역",
        sailor: "자신 이외의 강인형 캐릭터가 필살기 사용 시 자신의 필살기 턴이 1턴 단축된다",
    },
    1632: {//Fisher Tiger :: modified
        captain: "강인형 캐릭터의 공격력이 2.75배가 된다",
        special: "3턴 동안 강인형 캐릭터의 공격력을 1.75배로 만든다",
        specialName: "「금지 사항」에 대한 반역",
        sailor: "자신 이외의 강인형 캐릭터가 필살기 사용 시 자신의 필살기 턴이 1턴 단축된다",
        limit: [
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "선원효과 추가 #: " },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 60" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]
    },
    1633: {//Punk Hazard Dragon
        captain: "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Deals 15x character's ATK in [STR] damage to all enemies and amplifies the effect of orbs by 1.25x for 1 턴",
        specialName: "Flame Breath",
    },
    1634: {//Rock and Scotch
        captain: "Boosts HP of [INT] characters by 2x",
        special: "Reduces damage received by 50% for 1 턴",
        specialName: "COOL Ambush",
    },
    1635: {//Brownbeard
        captain: "Boosts OWN ATK by 1.5x and the ATK of Cerebral characters by 2x",
        special: "Cuts the HP of all enemies by 20% and binds himself for 5 턴",
        specialName: "Crocodile Thrust",
    },
    1636: {//Caesar Clown
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴 and changes [BOMB] orbs into matching orbs",
        specialName: "Gastanet",
    },
    1637: {//Caesar Clown Evolved
        captain: "Boosts ATK of Cerebral characters by 2.25x and reduces damage received by 15%",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴 and changes [BOMB] orbs into matching orbs",
        specialName: "Gastanet",
    },
    1638: {//STR Gas Mask Fodder
        special: "Boosts chances of getting [RCV] orbs for 2 턴",
        specialName: "Meat for Meat",
    },
    1639: {//QCK Gas Mask Fodder
        special: "Reduces Paralysis duration by 1 턴",
        specialName: "Shock Recovery: Light",
    },
    1640: {//DEX Gas Mask Fodder
        special: "For 1 턴, makes STR orb \"beneficial\" for Shooter characters",
        specialName: "Shooter Beneficial Slot: STR",
    },
    1641: {//INT Gas Mask Fodder
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.2x for 1 턴",
        specialName: "Rising Damage: Poison",
    },
    1642: {//PSY Gas Mask Fodder
        special: "Deals 3x character's ATK in typeless damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
    },
    1643: {//STR Centaur Fodder
        captain: "Reduces cooldown of Slasher specials by 2 턴 at the start of the fight",
        special: "Boosts ATK of Slasher characters for 1 턴",
        specialName: "Attack Boost: Slasher",
    },
    1644: {//QCK Centaur Fodder
        captain: "Boosts ATK of [QCK] characters by 2x, reduces crew's current HP by ???% at the end of each 턴",
        special: "Reduces Silence duration by 1 턴",
        specialNotes: "#{silence}",
        specialName: "Special Seal Recovery: Light",
    },
    1645: {//DEX Centaur Fodder
        captain: "Boosts ATK of [DEX] characters by 1.5x and Slasher characters by 1.3x",
        captainNotes: "The bonus is cumulative. [DEX] Slasher characters get a 1.95x bonus.",
        special: "Deals 5 hits of random typeless damage to random enemies",
        specialNotes: "#{randomHits : 5}",
        specialName: "Random Light Blows",
    },
    1646: {//Reborn Pica
        captain: "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
        specialName: "Rock Domination Wall 「개」",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 20, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 26, 17 ]
            }
        ],
        specialNotes: "#{stages}"	
        },
    1647: {//Reborn Pica
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
        specialName: "Rock Domination Wall 「개」",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 20, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 26, 17 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1648: {//Giolla
        captain: "Boosts ATK of all characters by 1.2x. Boosts ATK by 2.4x after scoring 4 PERFECTs in a row",
        special: "Reduces damage received by 90% for 1 턴 and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
        specialName: "Sprouting with Beautiful Passion",
    },
    1649: {//Giolla
        captain: "Boosts ATK of all characters by 1.2x. Boosts ATK by 3x after scoring 4 PERFECTs in a row",
        special: "Reduces damage received by 90% for 1 턴 and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
        specialName: "Sprouting with Beautiful Passion",
    },
    1650: {//Brook x5
        captain: "Boosts RCV of [DEX] characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise.",
        special: "Changes [BLOCK], [TND], [EMPTY], and [BOMB] orbs into [DEX] orbs and amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Eyes Blinded by True Beauty",
    },
    1651: {//Nekomamushi
        captain: "Boosts HP of Striker characters by 1.25x and boosts ATK by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
        special: "Deals 60x character's ATK in [PSY] damage to one enemy and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Striker characters for 1 턴",
        specialName: "Daybreak Ruler's Spear",
    },
    1652: {//Nekomamushi
        captain: "타격 타입 캐릭터의 체력이 1.25 배, [STR], [QCK], [DEX], [INT], [PSY] 슬롯과 [RAINBOW] 슬롯일 경우 타격 타입 캐릭터의 공격력이 3.75 배가된다.",
        special: "적 1기에게 [PSY] 속성 데미지를 주고 1턴 동안 타격 타입 캐릭터의 [STR], [QCK], [DEX], [INT], [PSY] 슬롯이 유리한 슬롯으로 취급된다.",
        specialName: "새벽의 왕의 창",
    },
    1653: {//Pedro
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 턴",
        sailor: "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
        specialName: "Charge Drive",
    },
    1654: {//Pedro :: modified
        captain: "모험 시작 시 필살기 턴을 2턴 단축하고 [INT]의 공격력을 2.5배로 만든다",
        special: "일당의 체력을 1까지 줄이고, 적 전체에게 감소치x7배의 무 속성 데미지를 주며, 1턴 동안 슬롯의 영향을 상당히 증폭시킨다",
        sailor: "참격형과 박식형 캐릭터의 [INT] 슬롯을 [유리(\"beneficial\") 슬롯으로 취급한다",
        specialName: "차지 드라이브",
    },
    1655: {//Carrot
        captain: "Boosts ATK and RCV of [QCK] characters by 1.5x",
        special: "Boosts ATK of QCK characters by 2x for 1 턴",
        sailor: "Boosts base ATK and RCV of [QCK] characters by 75",
        specialName: "Electric Fist",
    },
    1656: {//Carrot
        captain: "Boosts ATK of [QCK] characters by 2.25x and their RCV by 1.5x",
        special: "Boosts ATK of QCK characters by 2x for 1 턴",
        sailor: "Boosts base ATK and RCV of [QCK] characters by 75",
        specialName: "Electric Fist",
    },
    1657: {//Kanjuro
        captain: "타격, 자유 캐릭터의 공격력이 2배가 된다",
        special: "봉인과 선장효과 무효 상태를 5턴 회복하고 선장이 타격 타입이라면 1턴 동안 체인 계수가 2.75배로 고정된다.",
        sailor: "선장이 타격 타입이라면, 자신의 [DEX]슬롯이 유리 슬롯 취급",
        specialName: "용오름",
    },
    1658: {//Kanjuro :: modified
        captain: "타격형과 자유형 캐릭터의 공격력이 2.5배가 된다",
        special: "봉쇄·선장효과 무효 상태를 5턴 회복하고, 선장이 타격형이면 1턴 동안 체인 계수가 2.75배로 고정된다",
        sailor: "선장이 타격형일 경우 타격형 캐릭터의 [DEX] 슬롯을 [유리] 슬롯으로 취급한다",
        specialName: "승룡",
    },
    1659: {//Raizo
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Reduces Paralysis and Silence duration by 3 턴, switches orbs between slots 3 times",
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Ninja Arts - Bunshin no Jutsu",
    },
    1660: {//Raizo
        captain: "Boosts ATK of Shooter characters by 2.5x and makes [TND] and [RCV] orbs \"beneficial\" to Shooter characters",
        special: "Reduces Paralysis and Silence duration by 3 턴, switches orbs between slots 3 times",
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Ninja Arts - Bunshin no Jutsu",
    },
    1661: {//Corazon
        captain: "Boosts ATK of [PSY], [QCK], and [DEX] characters by 2x and recovers 300 HP at end of each 턴",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
                "cooldown": [ 6, 6 ]
            },
            {
                "description": "Locks the chain multiplier at 2.5x for 1 턴 and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
                "cooldown": [ 10, 10 ]
            }
        ],
        specialName: "The Sun under the Rain",
    },
    1662: {//Corazon
        captain: "Boosts ATK of [PSY], [QCK], and [DEX] characters by 2.5x and recovers 500 HP at end of each 턴",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
                "cooldown": [ 6, 6 ]
            },
            {
                "description": "Locks the chain multiplier at 2.5x for 1 턴 and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
                "cooldown": [ 10, 10 ]
            }
        ],
        specialName: "The Sun under the Rain",
    },
    1663: {//6+ Rob Lucci
        special: "Deals 75x character's ATK in typeless damage to one enemy, greatly boosts chances of getting matching orbs for 3 턴",
        specialName: "Six Powers Supreme: Six King Gun",
        captain: "Boosts ATK of Powerhouse characters by 3.5x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
    },
    1664: {//STR Aokiji
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "Locks all orbs for 1 턴. If during that 턴, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 턴 in the following 턴.",
        specialName: "Ice Saber",
    },
    1665: {//STR Aokiji
        captain: "Boosts ATK of Shooter characters by 2.5x and boosts ATK of Shooters by 3.25x after scoring 3 PERFECTS in a row",
        special: "Locks all orbs for 1 턴. If during that 턴, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 턴 in the following 턴.",
        specialName: "Ice Saber",
        limit: [
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "잠재능력 습득 1: Reduce No Healing duration" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 1: Boosts base HP of Shooter characters by 50" },
            { "description": "체력 상승 : 60" },
            { "description": "선원효과 추가 2: 사격 캐릭터의 공격력을 50 상승시킨다." },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 2: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 3: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 1 턴",
                    "Level 4: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 2 턴",
                    "Level 5: If there are 6 Shooter characters in your crew, 회복 무효 상태 회복 : 3 턴"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    1666: {//Kyros
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 턴",
        specialName: "Trueno Bastardo",
    },
    1667: {//Kyros
        captain: "Boosts HP of Striker characters by 1.2x and boosts ATK of Striker characters by 2.75x 전투 시작 시 체력이 30% 미만이면, 2.25x otherwise",
        special: "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 턴",
        specialName: "Trueno Bastardo",
    },
    1668: {//Reborn Aokiji
        special: "Boosts ATK of Striker characters by 1.75x for 2 턴, locks all orbs for 2 턴",
        specialName: "Ice Block - Pheasant Beak 「개」",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    1669: {//Reborn Aokiji :: modified
        special: "2턴 동안 일당 슬롯을 고정, 타격형 캐릭터의 공격력이 1.75배가 된다",
        specialName: "아이스 블록 페즌트 펙 「개」",
        captain: "타격형 캐릭터의 공격력과 체력이 2배가 된다"
    },
    1670: {//Shyarly
        captain: "Boosts ATK of [DEX] characters by 1.75x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots two times, and delays all enemies for 1 턴",
        specialName: "A Warning to the Fool",
    },
    1671: {//Camie
        captain: "Boosts RCV of Free Spirit characters by 1.5x",
        special: "Recovers 15% of crew's MAX HP and amplifies the effect of orbs by 1.5x for 1 턴",
        specialName: "Cheerfulness that Shines in the Deep Sea",
    },
    1672: {//Pappagu
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Binds himself for 2 턴 and reduces Despair and Silence duration by 3 턴",
        specialName: "A Starfish Reaching for His Beliefs",
    },
    1673: {//Swinsuit Perona :: modified
        captain: "일당의 공격력을 1.75배로 만들고, 획득하는 해적 EXP가 1.2배가 된다(획득 해적 EXP 증가 효과는 모험 도중에 선장이 된 경우에는 발휘되지 않습니다)",
        special: "1턴 동안 적 전체의 방어력을 초대폭 감소시키고, 1턴 동안 받는 데미지를 70% 줄이며, 일당의 필살기 봉쇄 상태를 2턴 회복한다",
        specialNotes: "#{silence}",
        sailor: "자신은 필살기 봉쇄 상태를 완전히 회피한다",
        sailorNotes: "#{silence}",
        specialName: "로맨티스트 프린세스",
    },
    1674: {//Swinsuit Perona :: modified
        captain: "일당의 공격력을 2.25배로 만들고, 획득하는 해적 EXP가 1.5배가 된다(획득 해적 EXP 증가 효과는 모험 도중에 선장이 된 경우에는 발휘되지 않습니다)",
        special: "1턴 동안 적 전체의 방어력을 초대폭 감소시키고, 1턴 동안 받는 데미지를 70% 줄이며, 일당의 필살기 봉쇄 상태를 2턴 회복한다",
        specialNotes: "#{silence}",
        sailor: "자신은 필살기 봉쇄 상태를 완전히 회피한다",
        sailorNotes: "#{silence}",
        specialName: "로맨티스트 프린세스",
    },
    1675: {//Kimono Zoro
        captain: "Boosts chain multiplier by 2x",
        special: "Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 턴",
        sailor: "Reduces Blindness duration by 1 턴",
        specialName: "Great Swordsman Under the Umbrella",
    },
    1676: {//Kimono Zoro :: modified
        captain: "체인 계수의 증가량을 3.25배로 만들고, 받는 데미지를 10% 줄인다",
        special: "1턴 동안 참격형과 야심형 캐릭터의 공격력을 1.5배로 만들고, 선장이 참격형 또는 야심형이라면 인접한 슬롯을 속성 일치 슬롯으로 바꾸고, 마비 및 선장효과 무효 상태를 2턴 회복한다.",
        sailor: "의성어 은폐 상태를 1턴 회복한다",
        specialName: "대검호의 우산",
    },
    1677: {//Log Law
        captain: "Boosts ATK of Slasher characters by 2.5x",
        special: "Boosts the Color Affinity of Slasher by 1.5x for 1 턴, changes middle row orbs into matching orbs and switches orbs between slots three times",
        specialName: "ROOM: Kikoku",
    },
    1678: {//Log Law
        captain: "Boosts ATK of Slasher characters by 2.5x at the start of the chain, by 3.25x after the 3rd PERFECT in a row",
        special: "Boosts the Color Affinity of Slasher by 1.5x for 1 턴, changes middle row orbs into matching orbs and switches orbs between slots three times",
        specialName: "ROOM: Kikoku",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 25" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 35" },
            { "description": "회복력 상승 : 35" },
            { "description": "선원효과 추가 1: Completely resists Silence on this character" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 40" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 85" },
            { "description": "선원효과 추가 2: Reduces Paralysis duration by 1 턴" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    1679: {//Kai Mihawk
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter 「개」",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    1680: {//Kai Mihawk
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter 「개」",
        captain: "Boosts ATK of Slasher characters by 2.5x"
    },
    1681: {//20th Anni Luffy
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 턴.",
        specialName: "Gomu Gomu no Tako Stamp",
        sailor: "Boosts base HP and ATK of all characters by 56",
    },
    1682: {//20th Anni Luffy :: modified
        captain: "코스트 30 이하 캐릭터의 공격력이 2.5배, 체력이 1.3배가 되고, PERFECT 3연속 달성한 후로부터 일당의 공격력이 1.4배 더 추가된다",
        special: "적 전체의 HP를 20% 줄이고, 자신이 선장 또는 조력자 선장 또는 친구 선장일 때는 좌측 슬롯을 속성 일치 슬롯으로 바꾸고, 선원일 때는 1턴 동안 체인 계수가 +0.5 된다",
        specialName: "고무고무 문어 스탬프",
        sailor: "일당의 기본 공격력과 기본 체력이 56 상승한다",
    },
    1683: {//20th Anni Robin
        captain: "Boosts ATK of Cerebral characters by 2x, and their RCV by 1.3x",
        special: "Binds self for 1 턴, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 턴",
        specialName: "Mil Fleur: Gigantesco Mano",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - ???x ATK; 2 orbs - ???x ATK; 3 orbs - ???x ATK; 4 orbs - ???x ATK; 5 orbs - ???x ATK; 6 orbs - ???x ATK.",
        sailor: "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
    },
    1684: {//20th Anni Robin
        captain: "Boosts ATK of Cerebral characters by 2.5x, and their RCV by 1.3x",
        special: "Binds self for 1 턴, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 턴",
        specialName: "Mil Fleur: Gigantesco Mano",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - ???x ATK; 2 orbs - ???x ATK; 3 orbs - ???x ATK; 4 orbs - ???x ATK; 5 orbs - ???x ATK; 6 orbs - ???x ATK.",
        sailor: "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
    },
    1685: {//20th Anni Usopp
        captain: "Boosts ATK of Shooter characters by 2.75x following a chain of Good > Great > PERFECT hits",
        special: "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 턴",
        specialName: "Green Star: Bamboo Javelin-Grove",
        sailor: "Reduces Silence duration on this character by 4 턴",
        sailorNotes: "#{silence}",
    },
    1686: {//20th Anni Usopp
        captain: "Boosts ATK of Shooter characters by 3.25x following a chain of Good > Great > PERFECT hits",
        special: "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 턴",
        specialName: "Green Star: Bamboo Javelin-Grove",
        sailor: "Reduces Silence duration on this character by 4 턴",
        sailorNotes: "#{silence}",
    },
    1687: {//20th Anni Franky
        captain: "Boosts ATK of Fighter characters by 2x and reduce damage received by 10%",
        special: "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies, and reduces the defense of all enemies by 100% for 2 턴",
        specialNotes: "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
        specialName: "Franky Iron BOXING",
        sailor: "Restores his own special by 3 턴 when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1688: {//20th Anni Franky
        captain: "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 15%",
        special: "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies, and reduces the defense of all enemies by 100% for 2 턴",
        specialNotes: "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
        specialName: "Franky Iron BOXING",
        sailor: "Restores his own special by 3 턴 when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1689: {//Fortnight Kid
        captain: "Boosts ATK of all characters by 1.5x at the start of the chain, by 2.25x following a chain of STR > DEX > INT attacks no lower than Good",
        special: "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 턴",
        specialName: "Iron Giant Palm Slam",
    },
    1690: {//Fortnight Kid
        captain: "Boosts ATK of all characters by 2x at the start of the chain, by 3x following a chain of STR > DEX > INT attacks no lower than Good",
        special: "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 턴",
        specialName: "Iron Giant Palm Slam",
    },
    1691: {//Heat
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 1 턴, changes the captain's [STR], [DEX], [QCK], [INT], or [PSY] orbs into Matching orbs.",
        specialName: "Aim and Burn",
    },
    1692: {//Wire
        captain: "Boosts HP of Driven characters by 1.5x",
        special: "Adds .3x to Chain multiplier, and reduces the defense of all enemies by 50% for 1 턴",
        specialName: "Three Wind Tunnels",
    },
    1693: {//Inuarashi
        captain: "Boosts ATK of [PSY] characters by 2x",
        special: "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 턴, amplifies the effect of own orb by 1.75x for 1 턴 and changes own orb to [PSY].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "King's Lightning Burial",
    },
    1694: {//Inuarashi :: modified
        captain: "[PSY]의 공격력을 2.75배로 만든다",
        special: "일당의 체력이 50% 줄지만 적 1명에게 고정 데미지 50,000을 주고, 자신의 슬롯을 [PSY]으로 바꾸며, 1턴 동안 자신의 공격력과 슬롯의 영향이 1.75배가 된다",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "비장의 수단 뇌장",
    },
    1695: {//Vergo
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 턴 and reduces damage received by 50% for 1 턴",
        specialName: "The Darkest Demon",
    },
    1696: {//Vergo
        captain: "Boosts ATK of Striker characters by 2.5x and reduces damage received by 10%",
        special: "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 턴 and reduces damage received by 50% for 1 턴",
        specialName: "The Darkest Demon",
    },
    1697: {//Magellan
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each 턴",
        special: "적 전체를 서서히 데미지 양이 늘어나는 독 상태로 만들고(최소 캐릭터의 공격력x50배부터 최대 2,000,000 데미지), 3턴 동안 턴 종료 시 캐릭터의 회복력x13배의 체력을 회복한다",
        specialNotes: "Toxic starts at 50x character's attack and increases by 2x at the end of every 턴 until 2,000,000 damage per 턴.",
        specialName: "독구름",
    },
    1698: {//Magellan
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each 턴",
        special: "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each 턴 for 3 턴",
        specialNotes: "Toxic starts at 50x character's attack and increases by 2x at the end of every 턴 until 2,000,000 damage per 턴.",
        specialName: "Venom Cloud",
        limit: [
            { "description": "공격력 상승 : 15" },
            { "description": "체력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 15" },
            { "description": "선원효과 추가 1: Cannot be blown away" },
            { "description": "공격력 상승 : 15" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 60" },
            { "description": "회복력 상승 : 15" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 90" },
            { "description": "공격력 상승 : 40" },
            { "description": "공격력 상승 : 45" },
            { "description": "체력 상승 : 90" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 100" },
            { "description": "잠재능력 습득 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 5: 전투 시작 시 체력이 30% 미만이면, heals for 3x this character's RCV at the end of the 턴 each time you hit a PERFECT"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 2 턴",
                    "Level 3: 회복 무효 상태 회복 : 3 턴",
                    "Level 4: 회복 무효 상태 회복 : 4 턴",
                    "Level 5: 회복 무효 상태 회복 : 5 턴"
                ]
            },
        ]
    },
    1699: {//Jinbe
        captain: "격투 캐릭터의 공격력을 2배, 체력을 1.2배 증가시킨다.",
        special: "체인 계수 증가량 저하, 체인 계수 고정 상태를 3턴 회복하고 2턴 동안 체인 계수가 +0.3이 된다.",
        specialName: "온화한 초음파",
        sailor: "격투 캐릭터의 기본 공격력을 +75",
    },
    1700: {//Jinbe
        captain: "격투 캐릭터의 공격력을 2.5배, 체력을 1.3배 증가시킨다.",
        special: "체인 계수 증가량 저하, 체인 계수 고정 상태를 3턴 회복하고 2턴 동안 체인 계수가 +0.3이 된다.",
        specialName: "온화한 초음파",
        sailor: "격투 캐릭터의 기본 공격력을 +75",
        limit: [
            { "description": "공격력 상승 : 25" },
            { "description": "체력 상승 : 50" },
            { "description": "회복력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "공격력 상승 : 25" },
            { "description": "체력 상승 : 60" },
            { "description": "회복력 상승 : 20" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 70" },
            { "description": "회복력 상승 : 20" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "선원효과 추가 #: " },
            { "description": "체력 상승 : 90" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1701: {//Ivankov :: modified
        captain: "자유형 캐릭터의 공격력을 2배로 만든다.",
        special: [
            {
                "description": "일당의 슬롯을 랜덤으로 바꾼다",
                "cooldown": [ 9, 4 ]
            },
            {
                "description": "일당의 [BLOCK]슬롯을 속성 일치 슬롯으로 바꾼다",
                "cooldown": [ 12, 7 ]
            },
            {
                "description": "일당의 [불리][BLOCK] 슬롯을 속성 일치 슬롯으로 바꾼다",
                "cooldown": [ 15, 10 ]
            }
        ],
        specialName: "잔털정리권",
        sailor: "이 캐릭터는 마비효과 면역",
    },
    1702: {//Ivankov
        captain: "자유 캐릭터의 공격력을 2.5배 증가시키고 캐릭터 회복력 2배의 체력을 회복한다.",
        special: [
            {
                "description": "모든 슬롯을 랜덤으로 변환",
                "cooldown": [ 9, 4 ]
            },
            {
                "description": "[BLOCK]슬롯을 자속성 슬롯으로 변환",
                "cooldown": [ 12, 7 ]
            },
            {
                "description": "[BLOCK]슬롯을 포함한 불리한 슬롯을 자속성 슬롯으로 변환",
                "cooldown": [ 15, 10 ]
            }
        ],
        specialName: "잔털정리권",
        sailor: "이 캐릭터는 마비효과 면역",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 50" },
            { "description": "회복력 상승 : 15" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 90" },
            { "description": "회복력 상승 : 25" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 50" },
            { "description": "선원효과 추가 1: 자유 캐릭터가 필살기를 사용하면 이 캐릭터의 필살기가 1턴 감소한다." },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 30% 확률로 공격력의 7% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ]
    },
    1703: {//Hannyabal
        captain: "INT캐릭터의 공격력이 2배 증가한다.",
        special: "2턴 동안 받는 데미지를 50% 감소시키고, 2턴 동안 독에 중독된 적에게 주는 데미지가 1.75배가 된다.",
        specialName: "초열지옥차",
        sailor: "선장이 타격 캐릭터면 [STR][QCK][DEX][PSY][INT]슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1704: {//Hannyabal
        captain: "INT캐릭터의 공격력이 2.5배 증가하고 턴 종료 시 캐릭터 회복력 2배의 체력을 회복한다.",
        special: "2턴 동안 받는 데미지를 50% 감소시키고, 2턴 동안 독에 중독된 적에게 주는 데미지가 1.75배가 된다.",
        specialName: "초열지옥차",
        sailor: "선장이 타격 캐릭터면 [STR][QCK][DEX][PSY][INT]슬롯도 [유리] 슬롯으로 취급한다.",
        limit: [
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 50" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "선원효과 추가 1: 선장이 야심 캐릭터면 [RCV],[TND]도 [유리] 슬롯으로 만든다. " },
            { "description": "체력 상승 : 200" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 5% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
                    "Level 2: 전투 시작 시 체력이 5% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1.25배 만큼 체력을 회복한다",
                    "Level 3: 전투 시작 시 체력이 5% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1.5배 만큼 체력을 회복한다",
                    "Level 4: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1.5배 만큼 체력을 회복한다",
                    "Level 5: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1.5배 만큼 체력을 회복한다"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1705: {//Bon Clay
        captain: "STR캐릭터의 공격력이 2배 증가한다.",
        special: "일당에 걸려있는 모든 유리한 효과를 제거한다. 필살기 발동 시 체력이 50% 이상이면 1턴 동안 공격을 받아도 쓰러지지 않는다.",
        specialName: "지옥에 남기는 말",
        sailor: "캐릭터의 기본 공격력, 체력, 회복력을 +50",
    },
    1706: {//Bon Clay :: modified
        captain: "[STR]의 공격력을 2.5배로 만들고 3연속 PERFECT 달성 시, 이후 [STR]의 공격력이 1.25배 더 상승한다",
        special: "일당에게 걸려있는 모든 유리 효과를 없애고, 필살기 발동 시 체력이 일정 이상일 경우 1턴 동안 공격을 받아도 쓰러지지 않는다(쓰러지지 않는 효과는 여러 번 발동하지 않습니다)",
        specialName: "지옥에 남기는 말",
        sailor: "일당의 기본 능력치가 50 상승한다",
        limit: [
            { "description": "공격력 상승 : 15" },
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 50" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "체력 상승 : 70" },
            { "description": "회복력 상승 : 15" },
            { "description": "공격력 상승 : 15" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 130" },
            { "description": "공격력 상승 : 50" },
            { "description": "선원효과 추가 1: 필살기 턴 되감기가 2턴 회복된다." },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 #: Enrage" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
                    "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 PERFECT 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1707: {//Shanks 6+ :: modified
        captain: "[PSY]의 공격력을 2.75배, 체력을 1.3배로 만들고, 체력이 많을수록 [PSY] 슬롯 출현율이 크게 상승한다",
        special: "1턴 동안 적 전체의 방어력을 0으로 만들고, 적 1명에게 캐릭터 공격력x75배의 무 속성 데미지를 준 후, 일당의 모든 슬롯을 [PSY]으로 바꾼다",
        specialName: "하늘을 가르는 외팔",
    },
    1708: {//Summer Nami
        captain: "턴 종료 시 캐릭터 회복력 3배의 체력을 회복한다",
        special: "타격, 박식 캐릭터의 필살기 턴이 1턴 감소하고 마비 상태가 2턴 회복된다. 자속성 슬롯 이외의 슬롯을 랜덤으로 변환한다.",
        specialName: "도둑고양이의 아이컨택",
        sailor: "[TND]슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1709: {//Summer Nami
        captain: "모든 캐릭터의 공격력이 1.5배 증가하고 턴 종료 시 캐릭터 회복력 4배의 체력을 회복한다",
        special: "타격, 박식 캐릭터의 필살기 턴이 1턴 감소하고 마비 상태가 2턴 회복된다. 자속성 슬롯 이외의 슬롯을 랜덤으로 변환한다.",
        specialName: "도둑고양이의 아이컨택",
        sailor: "[TND]슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1710: {//Summer Robin
        captain: "박식 캐릭터의 공격력, 회복력이 1.2배 증가한다.",
        special: "1턴 동안 박식 캐릭터의 슬롯 영향력이 1.75배 증가하고 2턴 동안 받는 데미지가 30% 감소한다.",
        specialName: "사랑스러운 어른의 매력",
        sailor: "블라인드 상태가 2턴 회복된다.",
    },
    1711: {//Summer Robin
        captain: "박식 캐릭터의 회복력이 1.2배, 공격력이 1.5배 증가한다. 슬롯 일치 시 공격력이 3배 증가한다.",
        special: "1턴 동안 박식 캐릭터의 슬롯 영향력이 1.75배 증가하고 2턴 동안 받는 데미지가 30% 감소한다.",
        specialName: "사랑스러운 어른의 매력",
        sailor: "블라인드 상태가 2턴 회복된다.",
    },
    1712: {//Akainu
        captain: "야심 캐릭터의 공격력이 2.5배 증가한다.",
        special: "적 전체에게 캐릭터 공격력 50배의 무속성 데미지를 주고 1턴 동안 야심 캐릭터의 슬롯 영향력을 2배로 증가시킨다.",
        specialName: "견교홍련",
    },
    1713: {//Akainu
        captain: "야심 캐릭터의 공격력이 2.5배 증가한다, 이전 턴에 적을 격파했으면 일당의 공격 배율이 상승한다 (최대 3턴, 공격력 3.25배)",
        special: "적 전체에게 캐릭터 공격력 50배의 무속성 데미지를 주고 1턴 동안 야심 캐릭터의 슬롯 영향력을 2배로 증가시킨다.",
        specialName: "견교홍련",
        limit: [
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 10" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "공격력 상승 : 10" },
            { "description": "체력 상승 : 80" },
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 10" },
            { "description": "선원효과 추가 1: " },
            { "description": "공격력 상승 : 10" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 100" },
            { "description": "공격력 상승 : 20" },
            { "description": "선원효과 추가 2: " },
            { "description": "잠재능력 습득 #: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ],
    },
    1714: {//Monet
        captain: "INT캐릭터의 공격력이 2배 증가하고 턴 종료 시 캐릭터 회복력 2배의 체력을 회복한다.",
        special: "적 전체에게 캐릭터 공격력 10배의 INT데미지를 주고 일당의 슬롯을 [TND][BOMB][RCV]슬롯으로 랜덤 변환한다.",
        specialName: "강렬한 눈보라",
    },
    1715: {//Vergo
        captain: "타격 캐릭터의 공격력이 2배 증가한다. 만약 슬롯 일치시 공격력이 2.5배 증가한다.",
        special: "자신의 슬롯을 [QCK]으로 변환하고 1턴 동안 모든 슬롯을 고정",
        specialName: "입막음의 몰살자",
    },
    1716: {//Caesar
        captain: "일당의 체력을 50% 감소시키고 야심 캐릭터의 공격력을 1.2배 증가한다. 턴이 경과할수록 공격력이 0.1배씩 증가한다. (최대 3배)",
        special: "적 전체의 공격이 1턴 지연되고 야심 캐릭터의 [EMPTY]슬롯이 자속성 슬롯으로 변환한다. 필살기 발동시 체력이 30% 이하이면 야심 캐릭터의 공격력이 1.75배 증가한다.",
        specialName: "살육 GAS",
    },
    1717: {//Vegapunk Dragon
        captain: "모험 시작 시 사격 캐릭터의 필살기 턴이 2턴 감소한다.",
        special: "적 전체에게 캐릭터 공격력 3배의 QCK데미지를 준다.",
        specialName: "높은 기동성의 파이어볼 폭발",
    },
    1718: {//Buffalo
        captain: "Pefect를 적중 할 때까지 야심 캐릭터의 공격력이 2.5배 증가한다.",
        special: "5턴 동안 야심 캐릭터의 공격력이 1.25배 증가한다.",
        specialName: "소용돌이 치는 선회",
    },
    1719: {//Baby 5
        captain: "[PSY]캐릭터 공격력이 2배 증가한다. 만약 슬롯 일치시 PSY캐릭터는 INT슬롯도 [유리] 슬롯으로 취급한다.",
        special: "인접한 슬롯이 [G]슬롯으로 변환",
        specialName: "환영 같은 \"무기변이\"",
    },
    1720: {//Secret Jinbe
        captain: "격투 캐릭터의 공격력이 2.5배 증가한다.",
        special: "선장이 타격 캐릭터면 인접한 슬롯을 자속성 슬롯으로 변환하고 1턴 동안 체인 계수가 2.5배로 고정된다.",
        specialName: "두목의 조용한 분노",
    },
    1721: {//Secret Jinbe
        captain: "격투 캐릭터의 체력을 1.4배 공격력을 2.5배 증가한다. 슬롯 일치시 공격력이 2.75배 증가한다.",
        special: "선장이 타격 캐릭터면 인접한 슬롯을 자속성 슬롯으로 변환하고 1턴 동안 체인 계수가 2.5배로 고정된다.",
        specialName: "두목의 조용한 분노",
        limit: [
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 15" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 80" },
            { "description": "회복력 상승 : 30" },
            { "description": "선원효과 추가 1: [STR][DEX]슬롯을 [유리] 슬롯으로 취급한다." },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]

    },
    1722: {//Neptune
        captain: "타격 캐릭터의 공격력이 2배 증가한다.",
        special: "적 1기에 20,000의 고정 데미지를 주고 필살기 발동시 남은 체력이 30% 이하 일때 자신의 슬롯을 INT로 변환하고 타격 캐릭터의 공격력이 1.5배 증가한다.",
        specialName: "해신의 일격"
    },
    1723: {//Neptune
        captain: "타격 캐릭터의 공격력이 2배, 회복력이 1.2배 증가한다.",
        special: "적 1기에 20,000의 고정 데미지를 주고 필살기 발동시 남은 체력이 30% 이하 일때 자신의 슬롯을 INT로 변환하고 타격 캐릭터의 공격력이 1.5배 증가한다.",
        specialName: "해신의 일격"
    },
    1724: {//Fukaboshi
        captain: "강인 캐릭터의 공격력이 1.5배 증가한다.",
        special: "일당의 체력을 50% 감소시키고 1턴 동안 캐릭터 공격력 25배의 무속성 데미지를 추가한다.",
        specialName: "태양의 희망"
    },
    1725: {//Fukaboshi
        captain: "강인 캐릭터의 자속성 슬롯 출현율이 약간 상승하고 공격력이 1.5배 증가한다.",
        special: "일당의 체력을 50% 감소시키고 1턴 동안 캐릭터 공격력 25배의 무속성 데미지를 추가한다.",
        specialName: "태양의 희망"
    },
    1726: {//Sabo
        captain: "Good > Great > PERFECT 순으로 적중시 자유 캐릭터의 공격력이 2.75배 증가한다.",
        specialName: "용조권: 용의 숨결 「개」",
        special: "적 전체에게 무속성 랜덤 데미지를 주고 2턴 동안 캐릭터의 공격력 55배의 무속성 추가 데미지를 준다.",
    },
    1727: {//Sabo
        captain: "Good > Great > PERFECT 순으로 적중시 자유 캐릭터의 공격력이 3.5배 증가한다.",
        specialName: "용조권: 용의 숨결 「개」",
        special: "적 전체에게 무속성 랜덤 데미지를 주고 2턴 동안 캐릭터의 공격력 55배의 무속성 추가 데미지를 준다.",
    },
    1728: {//Tashigi
        captain: "[STR][DEX][QCK]캐릭터의 공격력을 2배 증가시킨다.",
        special: "[BLOCK]슬롯을 포함한 모든 슬롯을 [STR][DEX][QCK]슬롯으로 랜덤 변환하고 적 전체에 걸려있는 공격력 증가 상태를 완전히 해제, 체력을 2,000회복",
        sailor: "[STR][DEX][QCK]캐릭터의 기본 공격력, 체력, 회복력을 +30",
        specialName: "파괴적인 물뿌리기",
    },
    1729: {//Tashigi
        captain: "[STR][DEX][QCK]캐릭터의 공격력을 2.25배,체력을 1.25배 증가시키고 턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다.",
        special: "[BLOCK]슬롯을 포함한 모든 슬롯을 [STR][DEX][QCK]슬롯으로 랜덤 변환하고 적 전체에 걸려있는 공격력 증가 상태를 완전히 해제, 체력을 2,000회복",
        sailor: "[STR][DEX][QCK]캐릭터의 기본 공격력, 체력, 회복력을 +30",
        specialName: "파괴적인 물뿌리기",
    },
    1730: {//Vivi
        captain: "모든 캐릭터의 공격력이 2배 증가한다.",
        special: "모든 캐릭터의 필살기를 2턴 감소하고, 마비 상태를 3턴 회복, 받는 데미지를 2턴간 60% 감소시킨다.",
        sailor: "자신의 필살기 턴 되감기를 3턴 회복한다.",
        specialName: "내리쬐는 오아시스",
    },
    1731: {//Vivi
        captain: "모든 캐릭터의 공격력이 2배 증가하고 획득한 베리가 2.5배가 된다.",
        special: "모든 캐릭터의 필살기를 2턴 감소하고, 마비 상태를 3턴 회복, 받는 데미지를 2턴간 60% 감소시킨다.",
        sailor: "자신의 필살기 턴 되감기를 3턴 회복한다.",
        specialName: "내리쬐는 오아시스",
    },
    1732: {//Nekomamushi
        captain: "STR캐릭터 공격력이 2배, 타격, 강인 캐릭터의 체력이 1.1배 증가한다.",
        special: "적 1기에 캐릭터 공격력 50배의 베리어 무시효과 무속성 데미지를 주고 적이 상태 이상 무효일 때 방해 슬롯을 포함한 전체 슬롯이 자속성 슬롯으로 변환하고 1턴 동안 타격, 강인 캐릭터의 공격력이 1.75배가 된다.",
        specialName: "맹공의 수호신",
    },
    1733: {//Nekomamushi :: modified
        captain: "[STR]의 공격력을 2.5배, 타격형과 강인형 캐릭터의 체력을 1.25배로 만든다",
        special: "적 1명에게 모든 방어 효과를 무시하고 캐릭터의 공격력x50배의 무 속성 데미지를 주며, 적이 지연 무효, 상태 이상 무효일 때 [BLOCK]를 포함한 모든 슬롯을 속성 일치 슬롯으로 바꾸고, 1턴 동안 타격형과 강인형 캐릭터의 공격력이 1.75배가 된다",
        specialName: "맹공의 수호자",
    },
    1734: {//Sugar
        captain: "박식, 격투 캐릭터의 공격력이 1.5배 증가하고 턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다.",
        special: "슬롯을 오른쪽 하단은 STR, 왼쪽 하단은 INT로 변환하고 슬롯을 2회 자유롭게 이동.",
        specialName: "장난감의 백병전",
    },
    1735: {//Sugar
        captain: "박식, 격투 캐릭터의 공격력이 1.75배 증가하고 턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다.",
        special: "슬롯을 오른쪽 하단은 STR, 왼쪽 하단은 INT로 변환하고 슬롯을 2회 자유롭게 이동.",
        specialName: "장난감의 백병전",
    },
    1736: {//Trebol
        captain: "INT캐릭터의 공격력을 2.25배 증가시키고 받는 데미지를 10% 감소시킨다.",
        special: "적 전체의 공격을 1턴 지연시키고 2턴 동안 턴 종료 시 캐릭터 공격력 20배의 INT데미지를 준다.",
        specialName: "끈적 끈적 연소 폭발",
    },
    1737: {//Trebol
        captain: "INT캐릭터의 공격력을 2.25배, 체력을 1.2배 증가시키고 받는 데미지를 10% 감소시킨다.",
        special: "적 전체의 공격을 1턴 지연시키고 2턴 동안 턴 종료 시 캐릭터 공격력 20배의 INT데미지를 준다.",
        specialName: "끈적 끈적 연소 폭발",
    },
    1738: {//Raid Bellamy
        captain: "야심 캐릭터의 공격력을 2배 증가시킨다.",
        special: "적 1기의 체력을 10% 감소하고 1턴 동안 [PSY][INT]슬롯도 [유리] 슬롯으로 취급, 슬롯 영향력을 1.75배 증가시킨다. ",
        specialName: "스프링 호퍼 - 흉탄 「개」",
    },
    1739: {//Raid Bellamy
        captain: "야심 캐릭터의 공격력을 2.5배 증가시킨다.",
        special: "적 1기의 체력을 10% 감소하고 1턴 동안 [PSY][INT]슬롯도 [유리] 슬롯으로 취급, 슬롯 영향력을 1.75배 증가시킨다. ",
        specialName: "스프링 호퍼 - 흉탄 「개」",
    },
    1740: {//Sandersonia
        captain: "타격, 강인캐릭터의 공격력이 2배, DEX캐릭터의 체력이 1.1배 증가한다.",
        special: "모든 슬롯을 DEX슬롯으로 변환하고 2턴 동안 적 전체의 방어력을 격감, 2턴 동안 타격과 강인캐릭터의 공격력이 1.75배가 된다",
        sailor: "[STR}슬롯도 [유리] 슬롯으로 취급한다.",
        specialName: "뱀머리를 한 팔두사",
    },
    1741: {//Sandersonia :: modified
        captain: "타격형과 강인형 캐릭터의 공격력을 2.5배, [DEX]의 체력을 1.3배로 만든다",
        special: "모든 슬롯을 [DEX]로 바꾸고, 2턴 동안 적 전체의 방어력을 대폭 감소시키며, 타격형과 강인형 캐릭터의 공격력을 2턴 동안 1.75배로 만든다",
        sailor: "자신은 [STR] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "뱀머리칼 강림 팔기대사",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 70" },
            { "description": "공격력 상승 : 30" },
            { "description": "선원효과 추가 1: 이 캐릭터의 공격력은 [STR]캐릭터를 상대로 2배 증가한다." },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 90" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 40",
                    "Level 3: 공격력 상승 : 60",
                    "Level 4: 공격력 상승 : 80",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ],
    },
    1742: {//Marigold :: modified
        captain: "타격형과 강인형 캐릭터의 공격력을 2배, [STR]의 체력을 1.1배로 만든다",
        special: "[DEX], [QCK] 슬롯을 속성 일치 슬롯으로 바꾸고, 2턴 동안 방어력 감소 중인 적에게 주는 데미지가 1.75배가 되며, 1턴 동안 받는 데미지를 60% 줄인다",
        sailor: "DEX슬롯도 [유리] 슬롯으로 취급한다.",
        specialName: "뱀머리칼 강림 샐러맨더",
    },
    1743: {//Marigold :: modified
        captain: "타격형과 강인형 캐릭터의 공격력을 2.5배, [STR]의 체력을 1.3배로 만든다",
        special: "[DEX][QCK] 슬롯을 속성 일치 슬롯으로 바꾸고, 2턴 동안 방어력 감소 중인 적에게 주는 데미지가 1.75배가 되며, 1턴 동안 받는 데미지를 60% 줄인다",
        sailor: "자신은 [DEX] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "뱀머리칼 강림 샐러맨더",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 70" },
            { "description": "공격력 상승 : 30" },
            { "description": "선원효과 추가 1: [DEX] 캐릭터에 대항하여 공격력이 2배 상승한다." },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 90" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 40",
                    "Level 3: 공격력 상승 : 60",
                    "Level 4: 공격력 상승 : 80",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
        ]
    },
    1744: {//Marguerite
        captain: "사격 캐릭터의 공격력이 2배 증가한다.",
        special: "적 1기의 체력을 7% 감소하고 3턴 동안 사격 캐릭터의 슬롯 영향이 매우 커진다 (1.75배)",
        sailor: "사격 캐릭터의 기본 공격력, 체력, 회복력을 +30",
        specialName: "방어자의 스페이드 모양 화살",
    },
    1745: {//Marguerite
        captain: "사격 캐릭터의 공격력이 2배가 되고 턴 종료 후 캐릭터의 회복력 2배의 체력을 회복한다",
        special: "적 1기의 체력을 7% 감소하고 3턴 동안 사격 캐릭터의 슬롯 영향이 매우 커진다 (1.75배)",
        sailor: "사격 캐릭터의 기본 공격력, 체력, 회복력을 +30",
        specialName: "방어자의 스페이드 모양 화살",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "잠재능력 습득 1: Reduce No Healing duration" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "선원효과 추가 1: Reduces Blindness duration by 3 턴" },
            { "description": "체력 상승 : 70" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 만약 일당 중 6명이 사격 캐릭터면, 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 만약 일당 중 5명이 사격 캐릭터면, 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 만약 일당 중 4명이 사격 캐릭터면, 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 만약 일당 중 4명이 사격 캐릭터면, 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 만약 일당 중 4명이 사격 캐릭터면, 회복 무효 상태 회복 : 3 턴"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
        ]
    },
    1746: {//Boa Hancock :: modified
        captain: "앞 캐릭터의 공격 타이밍에 따라 이후의 사격형 캐릭터의 공격력이 최소 2.5배, 최대 3.25배가 되며, [RCV][TND] 슬롯의 출현율이 대폭 감소하지만, 턴 종료 시 체력을 1,000 회복한다",
        special: "무작위의 적에게 고정 데미지 20,000을 6회 주고, 공격을 1턴 지연시키며, 2턴 동안 사격형 캐릭터의 모든 속성 슬롯을 [유리] 슬롯으로 취급한다",
        specialName: "총 키스",
    },
    1747: {//Boa Hancock :: modified
        captain: "앞 캐릭터의 공격 타이밍에 따라 이후의 사격형 캐릭터의 공격력이 최소 2.5배, 최대 3.25배가 되며, [RCV][TND] 슬롯의 출현율이 대폭 감소하지만, 턴 종료 시 체력을 1,000 회복한다",
        special: "무작위의 적에게 고정 데미지 20,000을 6회 주고, 공격을 1턴 지연시키며, 2턴 동안 사격형 캐릭터의 모든 속성 슬롯을 [유리] 슬롯으로 취급한다.",
        specialName: "총 키스",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 개방 1: Pinch Healing" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 20" },
            { "description": "선원효과 개방 1: 선장이 자유 캐릭터라면, 이 유닛의 모든 슬롯이 [유리] 슬롯으로 취급된다." },	    
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 25" },
            { "description": "잠재능력 개방 2: Barrier Penetration" },
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 25" },
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 25" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "회복력 상승 : 15" },
            { "description": "체력 상승 : 70" },
            { "description": "공격력 상승 : 25" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 80" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 90" },
            { "description": "잠재능력 개방 3: 회복 무효 상태 회복" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 턴 시작시 체력이 10% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 2: 턴 시작시 체력이 15% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 3: 턴 시작시 체력이 20% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 4: 턴 시작시 체력이 30% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 5: 턴 시작시 체력이 50% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다."
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 남은 체력이 99%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 남은 체력이 99%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 남은 체력이 99%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 남은 체력이 80%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 남은 체력이 50%이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 2 턴",
                    "Level 3: 회복 무효 상태 회복 : 3 턴",
                    "Level 4: 회복 무효 상태 회복 : 4 턴",
                    "Level 5: 회복 무효 상태 회복 : 5 턴"
                ]
            },
        ]
    },
    1748: {//Bepo
        captain: "QCK 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
        special: "적의 일정 이상 데미지 격감 상태를 5차례 줄이고, 적 1기의 체력을 15% 감소시킨다.",
        sailor: "자신이 PERFECT 공격에 성공하면 다음 턴에도 자신의 [QCK] 속성 슬롯이 유지된다",
        specialName: "베어 러시 아웃",
    },
    1749: {//Bepo
        captain: "모험을 시작할 때 필살 턴을 2턴 단축하고, QCK 캐릭터의 공격력과 체력이 2배가 된다.",
        special: "적의 일정 이상 데미지 격감 상태를 5차례 줄이고, 적 1기의 체력을 15% 감소시킨다.",
        sailor: "자신이 PERFECT 공격에 성공하면 다음 턴에도 자신의 [QCK] 속성 슬롯이 유지된다",
        specialName: "베어 러시 아웃",
        limit: [
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 20" },
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "선원효과 추가 1: [DEX]슬롯도 [유리] 슬롯으로 취급한다." },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 60" },
            { "description": "체력 상승 : 90" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
                ]
            },
        ]
    },
    1750: {//Trafalgar Law :: modified
        captain: "타격형 캐릭터의 공격력을 3배로 만들고, 턴 종료 시에 PERFECT 1회당 캐릭터의 회복력x0.5배의 체력을 회복한다",
        special: [
            {
                "description": "적 1명에게 고정 데미지 50,000을 주고, 1턴 동안 타격형 캐릭터의 슬롯 영향을 상당히 증폭시킨다",
                "cooldown": [ 15, 10 ]
            },
            {
                "description": "적 1명에게 고정 데미지 300,000을 주고, 1턴 동안 타격형 캐릭터의 슬롯 영향을 2.25배로 증폭시킨다",
                "cooldown": [ 20, 15 ]
            }
        ],
        specialName: "인젝션 샷",
    },
    1751: {//Korea Law :: modified
        captain: "타격형 캐릭터의 공격력을 3배로 만들고, 턴 종료 시에 PERFECT 1회당 캐릭터의 회복력x0.5배의 체력을 회복한다",
        special: [
            {
                "description": "적 1명에게 고정 데미지 50,000을 주고, 1턴 동안 타격형 캐릭터의 슬롯 영향을 상당히 증폭시킨다",
                "cooldown": [ 15, 10 ]
            },
            {
                "description": "적 1명에게 고정 데미지 300,000을 주고, 1턴 동안 타격 캐릭터의 슬롯 영향을 2.25배로 증폭시킨다",
                "cooldown": [ 20, 15 ]
            }
        ],
        specialName: "인젝션 샷",
        limit: [
            { "description": "선원효과 개방 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 개방 1: Pinch Healing" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "선원효과 개방 1: 타격 캐릭터의 기본 공격력 50 증가" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 40" },
            { "description": "잠재능력 개방 2: Reduce No Healing Duration" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 40" },
            { "description": "공격력 상승 : 50" },
            { "description": "체력 상승 : 70" },
            { "description": "체력 상승 : 70" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "선원효과 개방 2: RCV슬롯과 TND슬롯도 [유리] 슬롯으로 취급한다." },
            { "description": "체력 상승 : 90" },
            { "description": "잠재능력 개방 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 턴 시작시 체력이 10% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 2: 턴 시작시 체력이 15% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 3: 턴 시작시 체력이 20% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 4: 턴 시작시 체력이 30% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다.",
                    "Level 5: 턴 시작시 체력이 50% 미만이면, PERFECT 적중으로 턴을 종료 할때 캐릭터 회복력의 2배 만큼 회복한다."
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 2 턴",
                    "Level 3: 회복 무효 상태 회복 : 3 턴",
                    "Level 4: 회복 무효 상태 회복 : 4 턴",
                    "Level 5: 회복 무효 상태 회복 : 5 턴"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 남은 체력이 99%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 남은 체력이 80%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 남은 체력이 70%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 남은 체력이 50%이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 이 캐릭터의 공격은 베리어를 완전히 무시한다."
                ]
            },
        ]
    },
    1752: {//20th Anni Zoro :: modified
        captain: "코스트 30 이하 캐릭터의 공격력을 2.5배로 만든다",
        special: "적 1명에게 [INT] 큰 데미지를 주고, 1턴 동안 코스트 30 이하 캐릭터의 공격력을 1.75배로 만들며, 자신이 선장 또는 친구 선장 또는 조력자 선장일 때, 필살기를 쓴 턴 내에 PERFECT 공격을 4번 이상 성공하면 다음 턴에 코스트 30 이하 캐릭터의 공격력을 2배로 만든다",
        sailor: "참격형 캐릭터의 기본 공격력이 50 상승한다",
        specialName: "삼검류 극 호랑이 사냥",
    },
    1753: {//20th Anni Zoro
        captain: "B코스트 30 이하의 캐릭터의 공격력을 2.5배, 체력을 1.3배, PERFECT 3회 연속 이후 일당의 공격력이 추가로 1.4배 증가한다.",
        special: "적 1기에게 지능 속성의 큰 데미지를 주고, 1턴 동안 코스트 30 이하 캐릭터의 공격력이 1.75배, 자신이 선장, 친구 선장, 조력자 선장일 때, 이 턴에서 PERFECT를 4회 성공하면 다음 턴에 코스트 30 이하 캐릭터의 공격력이 2배가 된다.",
        sailor: "참격 캐릭터의 기본 공격력을 +50",
        specialName: "삼도류: 극 호랑이 사냥",
    },
    1754: {//20th Anni Sanji
        captain: "격투, 참격 캐릭터의 공격력이 2배로 증가한다.",
        special: "적 1기의 체력을 15% 감소시키고 모든 독 상태를 회복, 1턴 동안 일당의 슬롯 영향을 상당히 확대한다.",
        sailor: "모든 캐릭터의 기본 공격력, 체력, 회복력을 +40",
        specialName: "디아블 잠브: 목살 스트라이크",
    },
    1755: {//20th Anni Sanji :: modified
        captain: "격투형과 강인형 캐릭터의 공격력을 2.5배, 체력을 1.2배로 만든다",
        special: "적 1명의 HP를 15% 줄이고, 모든 독 상태를 회복하며, 1턴 동안 일당의 슬롯 영향을 상당히 증폭시킨다",
        sailor: "일당의 기본 능력치가 40 상승한다",
        specialName: "디아블 잠브 목살 스트라이크",
    },
    1756: {//20th Anni Nami
        captain: "턴 종료 후 캐릭터 회복력 2배의 체력을 회복한다.",
        special: "1턴 동안 받은 데미지를 80% 감소시키고, 적의 일정 이상 데미지 격감과 공격력 증가 상태를 3턴 감소시킨다.",
        sailor: "[DEX]슬롯도 [유리] 슬롯으로 취급한다.",
        specialName: "돌풍 소드",
    },
    1757: {//20th Anni Nami :: modified
        captain: "턴 종료 후 캐릭터 회복력 5배의 체력을 회복한다.",
        special: "1턴 동안 받는 데미지를 80% 줄이고, 적의 [DAMAGE REDUCTION]와 [ATK UP] 상태를 3턴 줄인다",
        sailor: "자신은 [DEX] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "돌풍 소드",
    },
    1758: {//20th Anni Brook
        captain: "자유 캐릭터의 공격력을 2배, 체력을 1.1배 증가시킨다.",
        special: "적 전체의 공격을 1턴 지연시키고, 봉인 · 선장효과 무효와 저림 상태를 1턴 회복한다.",
        sailor: "[RCV]슬롯도 [유리] 슬롯으로 취급한다.",
        specialName: "파티 음악: 퀸트 티어스 판타지아",
    },
    1759: {//20th Anni Brook
        ccaptain: "자유 캐릭터의 공격력을 2.5배, 체력을 1.2배 증가시킨다.",
        special: "적 전체의 공격을 1턴 지연시키고, 봉인 · 선장효과 무효와 저림 상태를 1턴 회복한다.",
        sailor: "[RCV]슬롯도 [유리] 슬롯으로 취급한다.",
        specialName: "파티 음악: 퀸트 티어스 판타지아",
    },
    1760: {//20th Anni Chopper
        captain: "[DEX][INT]캐릭터의 공격력을 2배로 증가시킨다.",
        special: "일당의 슬롯을 오른쪽에서 [INT][PSY][DEX], 왼쪽에서 [INT][RCV][DEX]로 변환한다.",
        sailor: "자신의 필살기 봉인 상태와 필살기 턴 되감기를 2 턴 회복",
        specialName: "지혜의 괴물",
    },
    1761: {//20th Anni Chopper :: modified
        captain: "[DEX]과 [INT]의 공격력을 2.5배로 만든다",
        special: "일당의 슬롯을 우측 상단부터 [INT][PSY][DEX]로, 좌측 상단부터 [INT][RCV][DEX]로 바꾼다",
        sailor: "자신은 필살기 봉쇄 상태와 필살기 턴 되돌리기를 2턴 회복한다",
        specialName: "지혜의 괴물",
    },
    1762: {//Rob Lucci :: modified
        captain: "회복력을 50% 감소시키는 대신 강인형 캐릭터의 공격력을 2.5배, 체력을 1.2배로 만들며, 턴 내 PERFECT를 연속으로 달성할수록 강인형 캐릭터의 공격력이 1.1배씩 상승한다(최대 약 4.026배)",
        special: "2턴 동안 적 전체의 방어력을 대폭 감소시키고, 적 전체에 무 속성 특대 데미지를 준 후, 강인형 캐릭터의 모든 슬롯을 속성 일치 슬롯으로 바꾸고, 체력을 최대 체력의 20% 회복한다",
        specialName: "지건 「화발」",
    },
    1763: {//Human Beast Lucci :: modified
        captain: "회복력을 50% 감소시키는 대신 강인형 캐릭터의 공격력을 2.5배, 체력을 1.2배로 만들며, 턴 내 PERFECT를 연속으로 달성할수록 강인형 캐릭터의 공격력이 1.1배씩 상승한다(최대 약 4.026배)",        
        special: "2턴 동안 적 전체의 방어력을 대폭 감소시키고, 적 전체에 무 속성 특대 데미지를 준 후, 강인형 캐릭터의 모든 슬롯을 속성 일치 슬롯으로 바꾸고, 체력을 최대 체력의 20% 회복한다",
        specialName: "지건 「화발」",
        limit: [
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Pinch Healing" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "선원효과 추가 1: 강인 캐릭터의 기본 공격 +50" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 40" },
            { "description": "잠재능력 습득 2: Enrage" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "공격력 상승 : 40" },
            { "description": "공격력 상승 : 50" },
            { "description": "체력 상승 : 70" },
            { "description": "체력 상승 : 70" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "선원효과 추가 2: [RCV],[TND]도 [유리] 슬롯으로 만든다." },
            { "description": "체력 상승 : 90" },
            { "description": "잠재능력 습득 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: 전투 시작 시 체력이 10% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 2: 전투 시작 시 체력이 15% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 3: 전투 시작 시 체력이 20% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 4: 전투 시작 시 체력이 30% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT",
                    "Level 5: 전투 시작 시 체력이 50% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a PERFECT"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 7턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 완전히 무효화시킨다."
                ]
            },
        ],
    },
    1764: {//6+ Aokiji :: modified
        captain: "일당의 공격력을 2.25배, 체력을 1.25배, 이전 턴에 적을 1명이라도 격파했다면 공격력 배율이 상승한다(최대 5턴으로 공격력 3.5배)",
        special: "필살기 발동 시 일당에 걸려 있는 공격력 상승 및 슬롯 영향 증폭 효과를 1턴 연장, 1턴 동안 체인 계수를 2.5배로 고정, 모든 방어 효과를 무시하고 적 전체에게 고정 데미지 100,000을 준다",
        specialName: "결단을 내린 남자의 얼음 공격",
    },
    1765: {//Blue Gilly
        captain: "격투 타입 캐릭터의 공격력이 1.5배가 된다",
        special: "적 전체의 랜덤 대상에게 캐릭터 공격력x5배의 무속성 데미지를 10회 주고 1턴 동안 적 전체의 방어력을 반감, 자속성 이외 [BLOCK]슬롯 포함한 모든 슬롯을 랜덤 변환",
        specialName: "각공도 연속차기",
    },
    1766: {//Blue Gilly
        captain: "격투 타입 캐릭터의 공격력이 1.5배가 되고 체인 계수 증가량이 1.5배가 된다",
        special: "적 전체의 랜덤 대상에게 캐릭터 공격력x5배의 무속성 데미지를 10회 주고 1턴 동안 적 전체의 방어력을 반감, 자속성 이외 [BLOCK]슬롯 포함한 모든 슬롯을 랜덤 변환",
        specialName: "각공도 연속차기",
    },
    1767: {//Funk Bros
        captain: "격투 타입 캐릭터의 공격력이 1.75배가 된다",
        special: "적 전체의 공격을 1턴 지연시키고 이 턴에서 일당 전원이 Great공격에 성공하면 다음 턴에 격투 타입 캐릭터의 공격력이 1.5배가 된다",
        specialName: "자비없는 기습",
    },
    1768: {//Abdullah and Jeet
        captain: "참격과 타격 타입 캐릭터의 공격력이 1.5배가 된다",
        special: "2턴 동안 턴 종료시에 적 전체의 체력을 10% 감소한다",
        specialName: "지독한 추격",
    },
    1769: {//Ben Beckman
        captain: "박식 타입 캐릭터의 공격력이 2.5배가 된다.",
        special: "적 전체의 공격을 1턴 지연시키고 선장이 박식 타입일 경우 1턴 동안 지연 중의 적에게 주는 데미지가 1.5배가 되며, 인접 슬롯이 자속성 슬롯을 변환한다",
        specialName: "억제의 총구",
    },
    1770: {//Ben Beckman
        captain: "박식 타입 캐릭터의 공격력이 2.5배, 체력이 1.2배가 되며, Good > Great > PERFECT  판정 이후 같은 타입 캐릭터의 공격력이 3.25배가 된다",
        special: "적 전체의 공격을 1턴 지연시키고 선장이 박식 타입일 경우 1턴 동안 지연 중의 적에게 주는 데미지가 1.5배가 되며, 인접 슬롯이 자속성 슬롯을 변환한다",
        specialName: "억제의 총구",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 30" },
            { "description": "회복력 상승 : 30" },
            { "description": "선원효과 추가 1: 봉인상태가 3 턴 감소한다." },
            { "description": "체력 상승 : 50" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 2: 캐릭터 공격력의 2배의 무속성 데미지 추가" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 50",
                    "Level 3: 공격력 상승 : 80",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1771: {//Kuma
        captain: "박식 타입 캐릭터의 공격력과 체력이 2 배가 된다",
        specialName: "밀쳐내기 압력포 「개」",
        special: "[RCV][TND][EMPTY][BLOCK][BOMB]슬롯을 자속성 슬롯으로 변환하고, 1 턴 동안 슬롯의 영향이 1.75배가 된다",
    },
    1772: {//Kuma
        captain: "박식 타입 캐릭터의 공격력과 체력이 2 배가 되고 적으로부터받은 INT데미지의 5 배를 턴 종료시 적 전체에 준다",
        specialName: "밀쳐내기 압력포 「개」",
        special: "[RCV][TND][EMPTY][BLOCK][BOMB]슬롯을 자속성 슬롯으로 변환하고, 1 턴 동안 슬롯의 영향이 1.75배가 된다",
    },
    1773: {//Kinemon
        captain: "자유 타입 캐릭터의 공격력이 2배, 체력이 1.2배가 되며, 받는 데미지를 10% 감소한다",
        special: "적 1기에게 공격력 20배의 INT데미지를 주고 1턴 동안 자유 타입 캐릭터의 슬롯 영향을 상당히 증폭시킨다 (1.5배)",
        specialName: "여우불류 붉은 빛의 도선",
        sailor: "자유 타입 캐릭터의 기본 공격력이 +25"
    },
    1774: {//Kinemon
        captain: "자유 타입 캐릭터의 공격력이 2.25배, 체력이 1.25배가 되며, 받는 데미지를 15% 감소한다",
        special: "적 1기에게 공격력 20배의 INT데미지를 주고 1턴 동안 자유 타입 캐릭터의 슬롯 영향을 상당히 증폭시킨다 (1.75배)",
        specialName: "여우불류 붉은 빛의 도선",
        sailor: "자유 타입 캐릭터의 기본 공격력이 +25"
    },
    1775: {//Momonosuke
        captain: "QCK캐릭터의 공격력이 1.5배가 되고 QCK슬롯 출현율이 상승한다",
        special: "1턴 동안 받는 데미지를 50% 감소시키고 일당의 슬롯을 2회 자유 이동한다",
        specialName: "용이 머무는 아이",
    },
    1776: {//Momonosuke
        captain: "QCK캐릭터의 공격력이 1.75배가 되고 QCK슬롯 출현율이 상승한다",
        special: "1턴 동안 받는 데미지를 50% 감소시키고 일당의 슬롯을 2회 자유 이동한다",
        specialName: "용이 머무는 아이",
    },
    1777:{//Kizaru :: modified
        captain: "자유형 캐릭터의 공격력이 2.5배가 된다",
        special: "모든 방어 효과를 무시하고, 적 1명에게 캐릭터의 공격력x50배의 무 속성 데미지를 주며, 자유형 캐릭터의 [BLOCK] [STR] [INT] 슬롯을 속성 일치 슬롯으로 바꾸고, 3턴 동안 체인 계수가 +0.2 된다",
        specialName: "파마의 빛 화살",
    },
    1778:{//Kizaru
        captain: "자유 타입 캐릭터의 공격력이 2.5배, 체력이 1.2배가 되며, 턴 종료시에 캐릭터 회복력 1.5배의 체력을 회복한다",
        special: "모든 방어 효과를 무시하고 적 1기에 캐릭터 공격력 50배의 무속성 데미지를 주며, 자유 타입 캐릭터의 [BLOCK], STR, INT슬롯을 자속성 슬롯으로 변환, 3턴 동안 체인 계수가 +0.2",
        specialName: "파마의 빛 화살",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 30" },
            { "description": "회복력 상승 : 30" },
            { "description": "선원효과 추가 1: [DEX]슬롯도 [유리] 슬롯으로 취급" },
            { "description": "체력 상승 : 50" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 2: 사격, 자유 타입 캐릭터의 모든 스텟을 +50" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ]
    },
  1779:{//Kizaru
        captain: "사격 타입 캐릭터의 공격력이 2 배가 된다",
        specialName: "팔치경「Neo」",
          special: [
              {
                  "description": "자신의 슬롯을 [DEX]으로 변환한다. 사격과 격투 타입 캐릭터의 필살턴을 1턴 단축한다",
                  "cooldown": [ 14, 5 ]
              },
              {
                  "description": "자신의 슬롯을 [DEX]으로 변환한다. 사격과 격투 타입 캐릭터의 필살턴을 1턴 단축한다. 2 턴 동안 체인 계수가 +0.5된다",
                  "cooldown": [ 20, 11 ]
              }
          ],
    },
    1780:{//Kizaru :: modified
        captain: "사격형 캐릭터의 필살기 턴을 2턴 단축하고 공격력 2.25배, 체력 1.5배로 만든다",
        specialName: "팔지경 「개」",
        special: [
            {
                "description": "자신의 슬롯을 [DEX]로 바꾸고 사격형과 격투형의 필살기 턴을 1턴 단축한다",
                "cooldown": [ 14, 5 ]
            },
            {
                "description": "자신의 슬롯을 [DEX]로 바꾸고, 사격형과 격투형의 필살기 턴을 1턴 단축, 2턴 동안 체인 계수가 +0.5 된다",
                "cooldown": [ 20, 11 ]
            }
        ],
    },
    1781: {//Fighting Fish
        captain: "강인 타입 캐릭터의 공격력이 1.75배가 되고 강인 타입 캐릭터는 [TND],[RCV]슬롯을 유리한 슬롯으로 취급한다",
        special: "적 전체에 캐릭터 공격력 5배의 STR데미지를 주고 자신의 슬롯을 힘으로 변환, 1턴 동안 자신의 공격력이 1.3배가 된다",
        specialName: "꿰뚫는 쌍각",
    },
    1782: {//Chinjao
        captain: "QCK캐릭터의 공격력이 2.25배가 되고 필살기로 주는 QCK데미지가 1.75배가 된다",
        special: "적 전체의 공격을 2턴 지연시키고 적 1기에게 캐릭터 공격력 25배의 QCK데미지를 준다",
        specialName: "무두(武頭)",
    },
    1783: {//Hajrudin
        captain: "강인 타입 캐릭터의 공격력과 체력이 1.5배가 된다",
        special: "일당 전원의 슬롯을 1턴 고정하고 Pefect 공격 4회 적중 시 다음 턴에 일당의 슬롯 영향을 확대 (1.5배)",
        specialName: "전투거인의 철권",
    },
    1784: {//Fujitora
        captain: "모험을 시작할 때 일당의 필살턴을 2턴 단축하고 ★4 이하 캐릭터의 공격력이 2.5배가 된다",
        special: "적 전체에 랜덤 INT데미지를 주고 일당의 필살턴을 1턴 단축, 1턴 동안 모든 속성 캐릭터의 공격력이 1.5배가 된다",
        specialName: "부동의 틈",
    },
    1785: {//Spartan
        captain: "턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다",
        special: "체력을 3000회복, 1턴 동안 일당의 슬롯 영향이 조금 확대 (1.25배)",
        specialName: "들끓는 투기",
    },
    1786: {//Dressrosa Fodder
        special: "1턴 동안 사격 타입 캐릭터는 [QCK]슬롯이 유리한 속성으로 취급된다",
        specialName: "사격 타입 유리 슬롯: [QCK]"
    },
    1787: {//Dressrosa Fodder
        special: "일당의 체력을 50% 중리고 적 1기에게 감소값 5배의 무속성 데미지를 준다",
        specialName: "리스키 어택"
    },
    1788: {//Dressrosa Fodder
        special: "1턴 동안 사격 타입 캐릭터의 공격력이 1.2배가 된다",
        specialName: "공격 부스팅: 사격"
    },
    1789: {//Dressrosa Fodder
        special: "2턴 동안 [RCV]슬롯의 출현율이 약간 상승한다",
        specialName: "미트 위드 미트",
    },
    1790: {//Dressrosa Fodder
        special: "3턴 동안 턴 종료시에 캐릭터 회복력 3배의 체력을 회복한다",
        specialName: "오토 라이트 힐링"
    },
    1791:{//Lucy Luffy
        captain: "Pefect 3회 연속 적중 시 [STR][DEX][QCK]의 공격력이 2.5배가 된다.",
        special: "모든 방어 효과를 무시하고 적 1 기의 HP를 20 % 줄이고 상단 슬롯을 [STR], 중단 슬롯을 [QCK], 하단 슬롯을 [DEX]로 변환, 1 턴 동안 슬롯의 영향이 1.75배 증가",
        sailor: "선장이 [STR]이라면, 자신이 [STR] 속성에 미치는 통상 공격에 의한 데미지가 1.5배가 된다",
        specialName: "고무고무 호크 라이플",
    },
    1792:{//Lucy Luffy :: modified
        captain: "[STR][DEX][QCK] 속성의 회복력을 1.2배로 만들고, PERFECT 3연속 달성 시 이후 [STR][DEX][QCK] 속성의 공격력이 3.25배가 된다",
        special: "모든 방어 효과를 무시하고 적 1명의 HP를 20% 감소시키고, 슬롯 상단을 [STR], 중간단을 [QCK], 하단을 [DEX]로 바꾸고, 1턴 동안 슬롯의 영향을 상당히 증폭시킨다",
        sailor: {
            "base": "선장이 [STR]이면 자신이 [STR]에게 주는 일반 공격에 의한 데미지가 1.5배가 된다",
            "level1": "선장이 [STR]이면 [DEX][QCK]의 기본 공격력과 기본 체력이 75 상승한다",
        },
        specialName: "고무고무 호크 라이플",
        limit: [
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "선원효과 추가 1:선장이 [STR] 속성이라면 [DEX][QCK] 속성의 공격과 체력이 +75 " },
            { "description": "체력 상승 : 60" },
            { "description": "회복력 상승 : 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: 이 캐릭터가 PERFECT 적중 시, 20% 확률로 캐릭터 데미지의 3%만큼 추가데미지를 입힌다.",
                    "Level 2: 이 캐릭터가 PERFECT 적중 시, 30% 확률로 캐릭터 데미지의 5%만큼 추가데미지를 입힌다.",
                    "Level 3: 이 캐릭터가 PERFECT 적중 시, 30% 확률로 캐릭터 데미지의 5%만큼 추가데미지를 입힌다.",
                    "Level 4: 이 캐릭터가 PERFECT 적중 시, 50% 확률로 캐릭터 데미지의 5%만큼 추가데미지를 입힌다.",
                    "Level 5: 이 캐릭터가 PERFECT 적중 시, 50% 확률로 캐릭터 데미지의 7%만큼 추가데미지를 입힌다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 60",
                    "Level 3: 공격력 상승 : 90",
                    "Level 4: 공격력 상승 : 120",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1793:{//Lucy Sabo
        captain: " 일당에 [STR][DEX][QCK]이 있을 때 [STR][DEX][QCK]은 공격력이 2.75배, 체력이 1.3배, [DEX][QCK]슬롯도 유리한 슬롯 취급, [STR]슬롯 출현률 격감, 일당에 [PSY][INT]이 없을 때는 [STR][DEX][QCK]의 공격력이 1.35배 증가 (공격력이 2.75 배가되는 효과와 중복 가능)",
        special: "1 턴 동안 [STR][DEX][QCK]의 공격력이 1.75 배가 된다. 같은 턴에 PERFECT 공격 4 회 성공으로 다음 턴에[STR][DEX][QCK]의 공격력이 2배가된다.",
        specialName: "용의 발톱 : 파동 상쇄",
    },
    1794:{//Lucy Sabo :: modified
        captain: " 일당에게 [STR][DEX][QCK]이 있을 때, [STR][DEX][QCK]은 공격력이 2.75배, 체력이 1.3배, [DEX][QCK]슬롯도 유리한 슬롯 취급, [STR]슬롯 출현률 격감, 일당에 [PSY][INT]이 없을 때는 [STR][DEX][QCK]의 공격력이 1.35배 증가 (공격력이 2.75 배가되는 효과와 중복 가능)",
        special: "1턴 동안 [STR][DEX][QCK]의 공격력이 1.75배, 그 턴 동안 PERFECT 공격 4번 이상 성공하면 다음 턴에 [STR][DEX][QCK]의 공격력이 2배가 된다",
        specialName: "용의 발톱·파동 상쇄",
        sailor: {
            "base": "None",
            "level1": "자신의 필살기 턴 되돌리기를 2턴 회복한다",
            "level2": "[STR][DEX][QCK] 속성 캐릭터의 기본 능력치가 50 상승한다",
        },
        sailorNotes: "#{rewind : 2}",
        limit: [
            { "description": "공격력 상승 : 10" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 5" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 5" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 10" },
            { "description": "선원효과 추가 1: 자신에게 발동된 필살 턴 되감기를 2턴 회복한다." },
            { "description": "체력 상승 : 35" },
            { "description": "체력 상승 : 45" },
            { "description": "회복력 상승 : 10" },
            { "description": "공격력 상승 : 15" },
            { "description": "공격력 상승 : 20" },
            { "description": "회복력 상승 : 15" },
            { "description": "잠재능력 습득 2: Enrage" },
            { "description": "공격력 상승 : 25" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "체력 상승 : 60" },
            { "description": "체력 상승 : 75" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 35" },
            { "description": "체력 상승 : 85" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 25" },
            { "description": "회복력 상승 : 30" },
            { "description": "공격력 상승 : 35" },
            { "description": "선원효과 추가 2: [STR][DEX][QCK]캐릭터의 기초 스텟을 +50" },
            { "description": "체력 상승 : 100" },
            { "description": "공격력 상승 : 40" },
            { "description": "잠재능력 습득 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: 자신의 공격이 PERFECT일 경우 20% 확률로 자신의 최종 히트 시의 데미지에 3%의 추가 데미지가 가산된다",
                    "Level 2: 자신의 공격이 PERFECT일 경우 30% 확률로 자신의 최종 히트 시의 데미지에 5%의 추가 데미지가 가산된다",
                    "Level 3: 자신의 공격이 PERFECT일 경우 30% 확률로 자신의 최종 히트 시의 데미지에 5%의 추가 데미지가 가산된다",
                    "Level 4: 자신의 공격이 PERFECT일 경우 50% 확률로 자신의 최종 히트 시의 데미지에 5%의 추가 데미지가 가산된다",
                    "Level 5: 자신의 공격이 PERFECT일 경우 50% 확률로 자신의 최종 히트 시의 데미지에 10%의 추가 데미지가 가산된다"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 데미지를 받으면 다음 턴에 자신의 기본 공격력이 60 상승한다",
                    "Level 2: 데미지를 받으면 다음 턴에 자신의 기본 공격력이 90 상승한다",
                    "Level 3: 데미지를 받으면 다음 턴에 자신의 기본 공격력이 120 상승한다",
                    "Level 4: 데미지를 받으면 다음 턴에 자신의 기본 공격력이 150 상승한다",
                    "Level 5: 데미지를 받으면 다음 턴에 자신의 기본 공격력이 200 상승한다",
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 자신의 슬롯 봉쇄 상태를 3턴 회복한다",
                    "Level 2: 자신의 슬롯 봉쇄 상태를 5턴 회복한다",
                    "Level 3: 자신의 슬롯 봉쇄 상태를 7턴 회복한다",
                    "Level 4: 자신의 슬롯 봉쇄 상태를 10턴 회복한다",
                    "Level 5: 자신의 슬롯 봉쇄 상태를 완전히 회복한다",
                ]
            },
        ],
    },
    1795:{//Diamante :: modified
        captain: "참격형과 야심형 캐릭터의 공격력을 2배로 만든다",
        special: "적 전체의 공격을 2턴 지연시키고, 적에게 걸려있는 방어력 상승과 데미지 감소 상태를 3턴 줄이고, 우측의 속성 슬롯을 속성 일치 슬롯으로 바꾼다",
        sailor: "자신이 [STR]에게 주는 일반 공격에 의한 데미지가 1.1배가 된다",
        specialName: "위페라 글레이브",
    },
    1796:{//Diamante :: modified
        captain: "참격형과 야심형 캐릭터의 공격력을 2.5배로 만든다",
        special: "적 전체의 공격을 2턴 지연시키고, 적에게 걸려있는 방어력 상승과 데미지 감소 상태를 3턴 줄이고, 우측의 속성 슬롯을 속성 일치 슬롯으로 바꾼다",
        specialName: "위페라 글레이브",
        sailor: {
            "base": "자신이 [STR]에게 주는 일반 공격에 의한 데미지가 1.1배가 된다",
            "level1": "자신은 필살기 봉쇄 상태를 3턴 회복한다",
        },
        limit: [
            { "description": "공격력 상승 : 10" },
            { "description": "공격력 상승 : 20" },
            { "description": "공격력 상승 : 30" },
            { "description": "잠재능력 습득 1: Barrier Penetration" },
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "선원효과 추가 1: 캐릭터의 침묵상태가 3 턴 감소한다" },
            { "description": "회복력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "체력 상승 : 90" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 2: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 3: 일당의 체력이 가득 차 있을시, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 4: 일당의 체력이 80% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다.",
                    "Level 5: 일당의 체력이 50% 이상이면, 이 캐릭터의 공격은 베리어를 무시한다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
                ]
            },
        ]
    },
    1797:{//Jesus Burgess :: modified
        captain: "격투형 캐릭터의 공격력을 2.25배로 만든다",
        special: [
              {
                  "description": "적 전체의 HP를 10% 줄인다",
                  "cooldown": [ 15, 9 ]
              },
              {
                  "description": "적 전체의 HP를 20% 줄인다",
                  "cooldown": [ 18, 12 ]
              },
              {
                  "description": "적 전체의 HP를 20% 감소시키고, 2턴 동안 지연 중인 적에게 주는 데미지가 1.5배가 된다",
                  "cooldown": [ 21, 15 ]
              }
          ],
        sailor: "[STR][DEX][QCK] 속성의 기본 공격력과 기본 체력이 75 상승한다",
        specialName: "파동 엘보",
    },
    1798:{//Jesus Burgess
        captain: "격투 타입 캐릭터의 공격력이 2.5배가 되고 야심과 강인 타입 캐릭터의 체력이 1.25배가 된다",
        special: [
            {
                "description": "적 전체의 체력을 10% 감소",
                "cooldown": [ 15, 9 ]
            },
            {
                "description": "적 전체의 체력을 20% 감소",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "적 전체의 체력을 20% 감소, 2턴 동안 지연상태의 적에게 주는 데미지가 1.5배가 된다",
                "cooldown": [ 21, 15 ]
            }
        ],
        sailor: "[STR][DEX][QCK]캐릭터는 기본 능력치가 +75가 된다",
        specialName: "파동 엘보",
        limit: [
            { "description": "공격력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "회복력 상승 : 10" },
            { "description": "잠재능력 습득 1: Critical Hit" },
            { "description": "회복력 상승 : 20" },
            { "description": "체력 상승 : 10" },
            { "description": "공격력 상승 : 30" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 50" },
            { "description": "선원효과 추가 1: 캐릭터의 침묵상태가 3 턴 감소한다." },
            { "description": "체력 상승 : 60" },
            { "description": "회복력 상승 : 30" },
            { "description": "체력 상승 : 90" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Enrage" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: PERFECT 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
                    "Level 2: PERFECT 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 3: PERFECT 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 4: PERFECT 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
                    "Level 5: PERFECT 적중 시, 40% 확률로 공격력의 7% 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 30",
                    "Level 2: 공격력 상승 : 50",
                    "Level 3: 공격력 상승 : 70",
                    "Level 4: 공격력 상승 : 100",
                    "Level 5: 공격력 상승 : 150"
                ]
            },
        ],
    },
    1799:{//Cavendish :: modified
        captain: "[STR][DEX][QCK] 속성의 공격력을 2.25배로 만든다",
        special: "[BLOCK] 슬롯을 속성 일치 슬롯으로 바꾸고, 슬롯을 1턴 고정하고, 2턴동안 방어력 감소 중인 적에게 주는 데미지가 1.75배가 된다",
        sailor: "자신은 [PSY][INT] 슬롯도 [유리] 슬롯으로 취급한다",
        specialName: "미검 라운드 테이블",
    },
    1800:{//Cavendish :: modified
        captain: "[STR][DEX][QCK] 속성의 공격력을 2.5배, 회복력을 1.2배로 만든다",
        special: "[BLOCK] 슬롯을 속성 일치 슬롯으로 바꾸고, 슬롯을 1턴 고정하고, 2턴 동안 방어력 감소 중인 적에게 주는 데미지가 1.75배가 된다",
        sailor: {
            "base": "자신은 [INT][PSY] 슬롯도 [유리] 슬롯으로 취급한다",
            "level1": "[STR][DEX][QCK] 속성의 기본 능력치가 50 상승한다",
        },
        specialName: "미검 라운드 테이블",
        limit: [
            { "description": "회복력 상승 : 10" },
            { "description": "회복력 상승 : 20" },
            { "description": "회복력 상승 : 30" },
            { "description": "잠재능력 습득 1: Reduce No Healing duration" },
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 1: [STR][DEX][QCK]캐릭터의 공격력,체력,회복력을 50 상승시킨다." },
            { "description": "체력 상승 : 50" },
            { "description": "체력 상승 : 60" },
            { "description": "공격력 상승 : 50" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
                ]
            },
        ]
    },
    1801:{//Bartolomeo :: modified
        captain: "[STR][DEX][QCK] 속성의 공격력을 2배로 만들고, 자신이 공격하지 않은 턴은 받는 데미지가 10% 감소된다",
        special: "2턴 동안 적 전체의 방어력을 대폭 감소시키고, 적 전체에게 캐릭터 공격력x30배의 [QCK] 데미지를 주고, 1턴 동안 받는 데미지를 90% 감소시킨다",
        sailor: "자신은 마비 상태를 3턴 회복한다",
        specialName: "배리어 불스",
    },
    1802:{//Bartolomeo
        captain: "STR,DEX,QCK캐릭터의 공격력이 2.5배가 되고 자신이 공격하지 않은 턴에는 받는 데미지가 15% 감소",
        special: "2턴 동안 적 전체의 방어력을 격감하고 적 전체에게 캐릭터 공격력 30배의 QCK데미지를 주며, 1턴 동안 받는 데미지를 80% 감소시킨다",
        sailor: "자신의 마비상태를 3턴 회복한다",
        specialName: "B배리어 불스",
        limit: [
            { "description": "체력 상승 : 10" },
            { "description": "체력 상승 : 15" },
            { "description": "체력 상승 : 20" },
            { "description": "잠재능력 습득 1: Reduce No Healing duration" },
            { "description": "체력 상승 : 30" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 30" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 1: [STR][DEX][QCK]캐릭터의 공격력,체력,회복력을 50 상승시킨다." },
            { "description": "체력 상승 : 60" },
            { "description": "회복력 상승 : 60" },
            { "description": "공격력 상승 : 50" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: 회복 무효 상태 회복 : 1 턴",
                    "Level 2: 회복 무효 상태 회복 : 1 턴",
                    "Level 3: 회복 무효 상태 회복 : 1 턴",
                    "Level 4: 회복 무효 상태 회복 : 2 턴",
                    "Level 5: 회복 무효 상태 회복 : 3 턴"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
                ]
            },
        ]
    },
	 1803: {//Zoro
        captain: "참격 캐릭터의 공격력을 2배 증가시킨다.",
        special: "적 1기에 캐릭터 공격력 13배의 DEX 데미지를 주고, 적에 걸린 턴종료 데미지 감소를 완전 제거한다. [BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 변환한다.",
        specialName: "더 강해지기 위해.. 삼도류 오의- 삼천세계",
    },
    1804: {//Zoro
        captain: "참격 캐릭터의 공격력을 2.25배 증가시키고 체력을 1.3배 증가시킨다.",
        special: "적 1기에 캐릭터 공격력 13배의 DEX 데미지를 주고, 적에 걸린 턴종료 데미지 감소를 완전 제거한다. [BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 변환한다.",
        specialName: "더 강해지기 위해.. 삼도류 오의- 삼천세계",
    },
    1805: {//Buggy
        captain: "30코스트 이하의 캐릭터 공격력이 1.5배증가하고 체력이 1.2배 증가한다.",
        special: "1턴 동안 적 전체의 방어력을 100% 감소시키고 STR 적에게 받는 데미지를 80% 감소한다. 슬롯 영향이 1.5배 증가한다.",
        specialName: "세계를 유혹하는 가장 흉악한 쇼",
    },
    1806: {//Buggy
        captain: "30코스트 이하의 캐릭터 공격력이 2.25배증가하고 체력이 1.2배 증가한다.",
        special: "1턴 동안 적 전체의 방어력을 100% 감소시키고 STR 적에게 받는 데미지를 80% 감소한다. 슬롯 영향이 1.5배 증가한다.",
        specialName: "세계를 유혹하는 가장 흉악한 쇼",
    },
    1807: {//Mihawk
        captain: "'흑도·극한의 일도'을 사용한 턴은 베는 참격 캐릭터의 공격력이 1.35배가 된다",
        special: "적 전체에게 캐릭터 공격력 100배의 무속성 데미지를 입히고, 선장이 참격 캐릭터면 1턴 동안 체인계수가 2.75배로 고정된다. 참격 캐릭터의 슬롯 영향이 2배 증가한다.",
        specialName: "흑도·극한의 일도",
    },
    1808: {//Mihawk :: modified
        captain: "참격형 캐릭터의 공격력이 2.5배, 체력이 1.3배, 「흑도·극한의 일도」'를 사용한 턴은 베는 참격형 캐릭터의 공격력이 1.4배 더 상승한다",
        special: "적 전체에게 캐릭터의 공격력x100배의 무 속성 데미지를 주고, 선장이 참격형 캐릭터라면 1턴 동안 일당의 체인 계수가 2.75배로 고정되고 참격형 캐릭터의 슬롯의 영향을 2배로 증폭시킨다",
        specialName: "흑도·극한의 일도",
        sailor: {
            "base": "None",
            "level1": "참격형 캐릭터의 기본 공격력이 50 상승한다",
            "level2": "자신은 [QCK] 슬롯을 [유리] 슬롯으로 취급한다",
        },
        sailorNotes: "#{beneficial}",
       limit: [
            { "description": "소켓 슬롯 1 추가" },
            { "description": "기본 공격력 +10" },
            { "description": "기본 체력 +30" },
            { "description": "기본 회복력 +5" },
            { "description": "잠재능력 개방 1: Critical Hit" },
            { "description": "새로운 선장효과 개방: " },
            { "description": "선원효과 개방 1: 참격 캐릭터의 기본 공격력 +50" },
            { "description": "기본 공격력 +15" },
            { "description": "기본 체력 +40" },
            { "description": "기본 회복력 +10" },
            { "description": "새로운 선장효과 개방: 참격 캐릭터의 공격력이 1.4배, 체력이 1.1배 증가한다. 만약 필살기 흑도·극한의 일도을 사용하면 1턴간 참격 캐릭터의 공격력이 1.89배 증가한다." },
            { "description": "소켓슬롯 1 추가" },
            { "description": "필살기 턴 감소 1 턴" },
            { "description": "기본 공격력 +20" },
            { "description": "기본 체력 +50" },
            { "description": "기본 회복력 +15" },
            { "description": "새로운 선장효과 개방: " },
            { "description": "필살기 턴 감소 2 턴" },
            { "description": "기본 공격력 +25" },
            { "description": "기본 체력 +60" },
            { "description": "기본 회복력 +20" },
            { "description": "필살기 턴 감소 3 턴" },
            { "description": "소켓슬롯 1 추가" },
            { "description": "기본 공격력 +30" },
            { "description": "기본 체력 +65" },
            { "description": "필살기 턴 감소 4 턴" },
            { "description": "새로운 선장효과 개방: " },
            { "description": "기본 공격력 +35" },
            { "description": "기본 체력 +70" },
            { "description": "선원효과 개방 2: [QCK]슬롯도 [유리] 슬롯으로 취급" },
            { "description": "기본 공격력 +40" },
            { "description": "기본 체력 +75" },
            { "description": "기본 회복력 +30" },
            { "description": "필살기 턴 감소 5 턴" },
            { "description": "소켓슬롯 1 추가" },
            { "description": "새로운 선장효과 개방: " },
            { "description": "기본 공격력 +50" },
            { "description": "기본 체력 +80" },
            { "description": "새로운 선장효과 개방: 참격 캐릭터의 공격력을 2.5배, 체력을 1.3배로 만들고, 만약 필살기 흑도·극한의 일도을 사용하면 1턴 동안 참격 캐릭터의 공격력이 3.5배로 증가한다." },
            { "description": "잠재능력 개방 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [ 
                    "Level 1: 만약 이 캐릭터가 PERFECT를 적중하면 10% 확률로 캐릭터 공격력의 3%의 추가 데미지를 입힌다.",
                    "Level 2: 만약 이 캐릭터가 PERFECT를 적중하면 15% 확률로 캐릭터 공격력의 5%의 추가 데미지를 입힌다.",
                    "Level 3: 만약 이 캐릭터가 PERFECT를 적중하면 20% 확률로 캐릭터 공격력의 5%의 추가 데미지를 입힌다.",
                    "Level 4: 만약 이 캐릭터가 PERFECT를 적중하면 25% 확률로 캐릭터 공격력의 5%의 추가 데미지를 입힌다.",
                    "Level 5: 만약 이 캐릭터가 PERFECT를 적중하면 50% 확률로 캐릭터 공격력의 7%의 추가 데미지를 입힌다."
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터 봉쇄 상태가 1턴 회복된다.",
                    "Level 2: 캐릭터 봉쇄 상태가 2턴 회복된다.",
                    "Level 3: 캐릭터 봉쇄 상태가 3턴 회복된다.",
                    "Level 4: 캐릭터 봉쇄 상태가 5턴 회복된다.",
                    "Level 5: 캐릭터 봉쇄 상태가 10턴 회복된다."
                ]
            },
        ],
    },
    1809: {//Wanda
        captain: "2연속 PERFECT 판정을 받은 후 공격력이 2.25배로 상승한다.",
        special: "봉쇄/저림 효과가 2턴 감소하고, 선장이 참격 캐릭터라면 1턴 동안 PERFECT 적중이 쉬워진다.",
        sailor: "저림 효과가 1턴 감소한다.",
        specialName: "초특급 짐승이 다니는 길",
    },
    1810: {//Wanda
        captain: "2연속 PERFECT 판정을 받은 후 공격력이 2.25배로 상승한다.",
        special: "봉쇄/저림 효과가 2턴 감소하고, 선장이 참격 캐릭터라면 1턴 동안 PERFECT 적중이 쉬워진다.",
        sailor: "저림 효과가 1턴 감소한다.",
        specialName: "초특급 짐승이 다니는 길",
    },
    1811: {//Carrot
        captain: "전투 시작 시 모든 필살기의 턴이 1턴 감소하고, 격투 캐릭터의 공격력이 2배로 상승한다.",
        special: "선장의 필살기 턴이 2턴 감소하고, 1턴 동안 격투 캐릭터의 공격력이 1.5배로 상승한다.",
        specialName: "토끼 밍크 에어 스텝",
    },
    1812: {//Carrot :: modified
        captain: "격투형 캐릭터의 공격력을 2.25배, 모험 시작 시 필살기 턴을 1턴 단축한다",
        special: "상단 캐릭터의 필살기 턴을 2턴 단축하고, 1턴 동안 격투형 캐릭터의 공격력을 1.5배로 만든다",
        specialName: "토끼 밍크의 에어 스텝",
    },
    1813: {//Koala
        captain: "일당의 공격력이 2.25배가 되고 획득 베리와 해적 경험치가 1.2배가 된다 (획득 베리와 해적 경험치 증가 효과는 모험 도중에 선장이 되는 경우에는 발동하지 않습니다)",
        special: "선장의 슬롯을 자속성 슬롯으로 변환하고 1턴 동안 선장의 공격력이 1.5배가 된다",
        specialName: "혁명군의 분노",
    },
    1814: {//Raid Sanji
        captain: "PERFECT 이외의 공격을 할때까지 강인 타입 캐릭터의 공격력이 2.5배, 턴 종료시 체력을 300 회복한다",
        specialName: "볼살 슛",
        special: "적 1기에 공격력 150배의 무속성 데미지를 주고 1턴 동안 강입 타입 캐릭터의 공격력이 2배가 된다",
    },
    1815: {//Raid Sanji :: modified
        captain: "PERFECT 이외의 공격을 할 때까지 강인형 캐릭터의 공격력을 2.75배, 턴 종료 시 체력을 300 회복한다",
        specialName: "디아블 잠브 주 슛",
        special: "적 1명에게 캐릭터의 공격력x150배의 무 속성 데미지를 주고, 1턴 동안 강인형 캐릭터의 공격력이 2배가 된다",
        limit: [
            { "description": "체력 상승 : 20" },
            { "description": "체력 상승 : 30" },
            { "description": "공격력 상승 : 20" },
            { "description": "잠재능력 습득 1: Enrage" },
            { "description": "체력 상승 : 40" },
            { "description": "체력 상승 : 45" },
            { "description": "공격력 상승 : 30" },
            { "description": "회복력 상승 : 30" },
            { "description": "필살기 턴 단축 : 1턴" },
            { "description": "회복력 상승 : 50" },
            { "description": "소켓 슬롯 1개 추가" },
            { "description": "체력 상승 : 50" },
            { "description": "공격력 상승 : 40" },
            { "description": "선원효과 추가 1: 모든 캐릭터가 [RCV]슬롯을 \"이로운\" 슬롯으로 취급" },
            { "description": "잠재능력 습득 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [ 
                    "Level 1: 공격력 상승 : 20",
                    "Level 2: 공격력 상승 : 30",
                    "Level 3: 공격력 상승 : 40",
                    "Level 4: 공격력 상승 : 50",
                    "Level 5: 공격력 상승 : 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [ 
                    "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
                    "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
                    "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
                    "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
                    "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
                ]
            },
        ],
    },
    1816: {// Ace 6+
        special: "일당의 체력을 40% 줄이고 전체에 감소 값 × 15 배의 무 속성데미지, 1턴 동안 사격 타입 캐릭터의 공격력이 2배가 된다",
        specialName: "대염계: 염제 • 화륜",
        captain: "사격 타입 캐릭터의 공격력이 2.25배, 체력이 1.5배가 되고 슬롯 일치 시에는 공격력이 3.25배가 된다"
    },
    1817: {// Riku
        captain: "3연속 Great 판정을 받으면 공격력이 2배 상승한다.",
        special: "적 1기의 체력을 7% 감소시키고 1턴 동안 선원들의 공격력이 1.2배 증가한다(선장 제외).",
        specialName: "신의 검",
        sailor: "필살기 턴 되감기를 1턴 회복한다.",
    },
    1818: {// Riku
        captain: "모든 캐릭터의 공격력이 1.5배 상승하고, 체력이 1.2배 상승한다. 3연속 Great 판정을 받으면 공격력이 2.5배 상승한다.",
        special: "적 1기의 체력을 7% 감소시키고 1턴 동안 선원들의 공격력이 1.2배 증가한다(선장 제외).",
        specialName: "신의 검",
        sailor: "필살기 턴 되감기를 1턴 회복한다.",
    },
    1819: {//Tank
        captain: "강인, 타격 캐릭터의 공격력이 1.75배 상승한다.",
        special: "1턴 동안 자신의 공격력이 1.75배 상승한다.",
        specialName: "수치스러운 은둔 활동",
    },
    1820: {//Scarlet
        captain: "[PSY]캐릭터의 체력과 회복력이 1.5배 상승한다.",
        special: "1턴간 슬롯을 잠그고, 캐릭터 회복력 5배의 체력을 회복한다.",
        specialName: "국경을 넘는 사랑",
    },
    1821: {//Sanji
        captain: "모든 캐릭터의 공격력이 1.5배 상승하고, 턴 종료시 캐릭터 회복력의 x1배 만큼 체력을 보충한다.",
        special: [
            {
                "description": "캐릭터 회복력의 x4배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
                "cooldown": [ 8, 8 ]
            },
            {
                "description": "캐릭터 회복력의 x10배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
                "cooldown": [ 14, 14 ]
            },
        ],
        specialName: "스위트 데코레이션",
        sailor: "[RCV]슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1822: {//Sanji
        captain: "모든 캐릭터의 공격력이 2배 상승하고, 턴 종료시 캐릭터 회복력의 x2배 만큼 체력을 보충한다.",
        special: [
            {
                "description": "캐릭터 회복력의 x4배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
                "cooldown": [ 8, 8 ]
            },
            {
                "description": "캐릭터 회복력의 x10배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
                "cooldown": [ 14, 14 ]
            },
        ],
        specialName: "스위트 데코레이션",
        sailor: "[RCV]슬롯도 [유리] 슬롯으로 취급한다.",
    },
	 1823: {//World
        captain: "사격 캐릭터의 공격력이 2.2배 상승하고 PERFECT를 연속으로 터치할수록 사격 캐릭터읙 오격력이 1.1배씩 상승한다.(최대 약 3.543배)",
        special: [
            {
                "description": "적 1기에 100,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
                "cooldown": [ 14, 10 ]
            },
            {
                "description": "적 1기에 300,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
                "cooldown": [ 18, 14 ]
            },
            {
                "description": "적 1기에 500,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제, 적 전체 HP바에 걸려있는 베리어 1턴 감소",
                "cooldown": [ 22, 18 ]
            }
        ],
        specialName: "모아 모아: 100배 포",
    },
    1824: {//World
        captain: "사격 캐릭터의 공격력이 2.2배 상승하고 PERFECT를 연속으로 터치할수록 사격 캐릭터읙 오격력이 1.1배씩 상승한다.(최대 약 3.543배)",
        special: [
            {
                "description": "적 1기에 100,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
                "cooldown": [ 14, 10 ]
            },
            {
                "description": "적 1기에 300,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
                "cooldown": [ 18, 14 ]
            },
            {
                "description": "적 1기에 500,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제, 적 전체 HP바에 걸려있는 베리어 1턴 감소",
                "cooldown": [ 22, 18 ]
            }
        ],
        specialName: "모아 모아: 100배 포",
    },
	1825: {//Akainu
        captain: "[INT] > [INT] > [INT]캐릭터가 연속 체인으로 Good 판정 이상 받으면 공격력이 2.5배 상승한다. ",
        special: "적 전체에 캐릭터 공격력 50배의 [INT]데미지를 주고, [INT]캐릭터의 슬롯을 [INT]으로 변경한다,1턴 동안 [INT]캐릭터의 슬롯 영향을 1.75배 증가시킨다.",
        specialName: "거대한 분출「개」",
    },
    1826: {//Akainu :: modified
        captain: "속성 [INT]→[INT]→[INT] 캐릭터 순으로 GOOD 이상 공격 시 이후 캐릭터의 공격력이 3배가 된다",
        special: "적 전체에게 공격력x50배의 [INT] 데미지를 주고, [INT] 캐릭터의 슬롯을 [INT]로 바꾸고, 1턴 동안 [INT]의 일반 공격에 의한 속성 상성의 영향을 상당히 증폭시킨다",
        specialName: "거대한 분출「개」",
    },
    1827: {//Sicilian Colo
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduces crew's current HP by 50%, Boosts ATK of [INT] characters by 2x for 1 turn and randomize non-matching orbs, including [BLOCK] orbs",
        specialName: "Explosive Spirit",
    },
    1828: {//Sicilian Colo :: modified
        captain: "[INT]의 공격력을 2.5배로 만들고, 남은 체력이 적을 때는 3배가 된다",
        special: "일당의 체력이 50% 감소하는 대신 1턴 동안 [INT]의 공격력이 2배, 속성 일치 슬롯 이외의 슬롯을 랜덤으로 바꾼다([BLOCK] 슬롯 변환 가능)",
        specialName: "스트라이크 스트럭처",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 40",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher characters by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduces Damage received from [PSY] enemies by 1%",
                    "Level 2: Reduces Damage received from [PSY] enemies by 2%",
                    "Level 3: Reduces Damage received from [PSY] enemies by 3%",
                    "Level 4: Reduces Damage received from [PSY] enemies by 4%",
                    "Level 5: Reduces Damage received from [PSY] enemies by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
	
    1829: {//Raid Caesar
        captain: "박식, 야심 캐릭터의 공격력이 2배 증가한다.",
        special: "적 전체에게 공격력 45배의 무속성 데미지를 주고, 2턴 동안 박식, 야심 캐릭터의 슬롯 영향을 1.75배 증가시킨다. 적 전체를 중독시킨다.",
        spcialName: "인화성 : 미옥 가스",
    },
    1830: {//Raid Caesar :: modified
        captain: "박식형과 야심형 캐릭터의 공격력을 2.5배로 만든다",
        special: "적 전체에게 캐릭터의 공격력x45배의 무 속성 데미지를 주고, 2턴 동안 박식형과 야심형 캐릭터의 슬롯 영향이 상당히 증폭되고, 적 전체를 독 상태로 만든다",
        spcialName: "연소계 미오크 GAS",
    },
    1831: {//6* Judge :: modified
        captain: "[PSY] 슬롯 출현율이 상승하며, 받는 데미지가 15% 감소하고, 일당의 체력이 1.25배가 된다. 일당에게 모든 속성이 있을 때 일당의 공격력이 1.75배가 된다(공격력이 2.25배가 되는 효과와 중복 가능)",
        special: "봉쇄 상태를 7턴 회복하고, 1턴 동안 일당의 슬롯 영향을 2배로 증폭시키고, 자신이 선장 또는 친구 선장 또는 조력자 선장일 때는 1턴 동안 [PSY] 슬롯 출현율을 약간 상승시키고 [BLOCK]를 포함한 모든 슬롯을 랜덤으로 바꾼다",
        specialName: "전자 크랙",
    },
    1832: {//6* Judge
        captain: "PSY슬롯 출연율이 상승하고 받는 데미지가 15% 감소한다, 모든 캐릭터의 체력이 1.25배 증가하고 만약 일당에 [STR][DEX][QCK][PSY][INT]이 모두 있다면 모든 캐릭터의 공격력이 2.25배 증가한다. 슬롯 일치 시 3.9배로 증가한다.",
        special: "봉인상태가 7턴회복, 1턴 동안 일당의 슬롯 영향 2배 증가, 선장(친구포함)의 경우 1턴 동안 [PSY]슬롯 출현확률이 약간 상승하고 [BLOCK]슬롯을 포함 모든 슬롯을 랜덤으로 변환한다.",
        specialName: "뎅기 크랙",
    },
    1833: {//Reiju
        captain: "[INT]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 회복력이 1.1배 증가한다.(효과 중복가능)",
        special: "선장이 [INT] 혹은 [PSY] 일 때 체력을 7,000회복, 일당의 모든 독 상태를 회복하며, 마비, 선장효과 무효, 필살기 봉쇄 상태를 3턴 회복하고, 선장이 강인형일 때 2턴 동안 받는 데미지가 70% 감소한다",
        specialName: "데인저러스 힐링",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1834: {//Reiju :: modified
        captain: "[INT]과강인형 캐릭터의 공격력을 각각 2.25배, 1.3배로 만들고, 강인형 캐릭터의 회복력을 1.2배로 만든다",
        special: "선장이 [INT] 혹은 [PSY] 일 때 체력을 7,000회복, 일당의 모든 독 상태를 회복하며, 마비, 선장효과 무효, 필살기 봉쇄 상태를 3턴 회복하고, 선장이 강인형일 때 2턴 동안 받는 데미지가 70% 감소한다",
        specialName: "데인저러스 힐링",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1835: {//Ichiji
        captain: "[STR]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
        special: "선장이 STR 또는 PSY 캐릭터인 경우, 2턴 동안 체인 계수를 2.5배로 고정하고 선장이 강인 캐릭터인 경우 2턴 동안 적의 공격을 지연 시킨다.",
        specialName: "마제스틱 임팩트",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1836: {//Ichiji
        captain: "[STR]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
        special: "선장이 STR 또는 PSY 캐릭터인 경우, 2턴 동안 체인 계수를 2.5배로 고정하고 선장이 강인 캐릭터인 경우 2턴 동안 적의 공격을 지연 시킨다.",
        specialName: "마제스틱 임팩트",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1837: {//Niji
        captain: "[QCK]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
        special: "선장이 QCK 또는 PSY 캐릭터인 경우, 2턴 동안 모든 캐릭터의 공격력이 1.75배로 증가, 선장이 강인 캐릭터인 경우 1턴 동안 모든 슬롯을 고정한다.",
        specialName: "블리츠 니들",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1838: {//Niji
        captain: "[QCK]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
        special: "선장이 QCK 또는 PSY 캐릭터인 경우, 2턴 동안 모든 캐릭터의 공격력이 1.75배로 증가, 선장이 강인 캐릭터인 경우 1턴 동안 모든 슬롯을 고정한다.",
        specialName: "블리츠 니들",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1839: {//Yonji
        captain: "[DEX]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
        special: "선장이 DEX 또는 PSY 캐릭터인 경우 1턴 동안 지연 중인 적에게 공격력 1.75배로 증가, 선장이 강인 캐릭터인 경우 2턴 동안 캐릭터 공격력 40배의 무속성 데미지를 추가한다.",
        specialName: "버스트 엔드 킥",
        sailor: "PSY슬롯도 [유리] 슬롯으로 취급한다.",
    },
    1840: {//Yonji
        captain: "[DEX]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
        special: "선장이 DEX 또는 PSY 캐릭터인 경우 1턴 동안 지연 중인 적에게 공격력 1.75배로 증가, 선장이 강인 캐릭터인 경우 2턴 동안 캐릭터 공격력 40배의 무속성 데미지를 추가한다.",
        specialName: "버스트 엔드 킥",
    },
    1841: {//Caribou
        captain: "Boosts ATK of Driven characters by 1.5x, deals 2x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Boosts ATK of Driven characters by 1.5x for 1 turn, reduces enemy's Threshold Damage Reduction by 2 turns and ATK Up duration by 3 turns",
        specialName: "Fathomless Infinite Hell",
        sailor: "When any other character uses a special, reduces own cooldown by 5 turns",
    },
    1842: {//Caribou :: modified
        captain: "Boosts ATK of Driven characters by 1.5x, deals 4x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "1턴 동안 야심형 캐릭터의 공격력을 1.5배, 적의 [DAMAGE REDUCTION] 상태를 2턴 줄이고, 적의 [ATK UP] 상태를 3턴 줄인다",
        specialName: "끝이 없는 무한지옥",
        sailor: "자신 이외의 캐릭터가 필살기 사용 시, 자신의 필살기 턴이 5턴 단축된다",
    },
    1843: {//Coribou
        captain: "Boosts ATK of Driven and Striker characters by 1.5x",
        special: "Removes blindness and recovers 4x character's RCV in HP",
        specialName: "Frantic Funeral",
    },
    1844: {//Coribou
        captain: "Boosts ATK of Driven and Striker characters by 1.75x",
        special: "Removes blindness and recovers 4x character's RCV in HP",
        specialName: "Frantic Funeral",
    },
    1845: {//Garp
        captain: "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 5%",
        special: "Reduces the defense of all enemies by 100% for 1 turn. If the targeted enemy has less than or equal to 25% of their MAX HP, instantly defeats them, otherwise, cuts the current HP of one enemy by 30%",
        specialName: "Crushing Armament Fist",
    },
    1846: {//Garp :: modified
        captain: "격투형 캐릭터의 공격력을 2.75배로 만들고, 받는 데미지를 15% 감소시킨다",
        special: "1턴 동안 적 전체의 방어력을 0으로 만들고, 대상인 적 1명의 HP가 25% 이하일 때 그 적을 격파하며, 대상인 적 1명의 HP가 25%보다 많을 때는 그 적 1명의 HP를 30% 감소시킨다",
        specialName: "눌러 부수는 무장 주먹",
    },  
	 1847: {//Goku+ :: modified
        captain: "모험 시작 시 필살기 턴을 2턴 단축시키고, 코스트 29 이하 캐릭터의 공격력이 3.25배, 체력을 1.2배, 코스트 54인 캐릭터의 공격력을 3배로 만든다",
        special: "적 전체에게 [INT]의 랜덤 데미지를 주고, 1턴 동안 일당의 공격력을 1.5배로 만들며, 코스트 29 이하 캐릭터의 슬롯을 속성 일치 슬롯으로 바꾼다",
        specialName: "진혼의 충격파"
    },
    1848: {//Treasure Map Akainu
        captain: "[강인] 캐릭터의 공격력이 2배가 된다",
        special: "하나의 적에 50배의 [STR] 데미지를 주고, 적 전체에 적용된 보호 효과를 1턴 감소시킨다. reduces any damage above 3000 by 80% for 1 turn",
        specialName: "Hellhound Bite",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1849: {//Treasure Map Akainu
        captain: "[강인] 캐릭터의 공격력이 2배, 체력이 1.3배가 된다",
        special: "하나의 적에 50배의 [STR] 데미지를 주고, 적 전체에 적용된 보호 효과를 1턴 감소시킨다. reduces any damage above 3000 by 80% for 1 turn",
        specialName: "Hellhound Bite",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1850: {//Treasure Map Squard
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 40x character's ATK in [DEX] damage to one enemy that will ignore damage negating abilities and barriers, makes PERFECTs easier to hit for 1 turn and adds .5x to Chain multiplier for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Piercing Hatred",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1851: {//Treasure Map Squard
        captain: "Boosts ATK of Driven characters by 2.25x and their HP by 1.3x",
        special: "Deals 40x character's ATK in [DEX] damage to one enemy that will ignore damage negating abilities and barriers, makes PERFECTs easier to hit for 1 turn and adds .5x to Chain multiplier for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Piercing Hatred",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1852: {//Whitebeard
        captain: "Boosts ATK of all characters proportionally to the crew's current HP and their HP by 1.2x",
        captainNotes: "#{captainProportional : lower : 1 + 1 * (1 - (remaining HP) / (total HP)) : 1 : 2}",
        special: "Changes own orb into [INT], deals 100x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn. If enemies have a barrier at the time the special was activated, boosts own ATK by 2.25x",
        specialNotes: "#{ignoreBarrier}",
        specialName: "The Epicenter of the Halberd",
    },
    1853: {//Whitebeard :: modified
        captain: 
            "일당의 체력이 1.2배, 공격 시작 전 남은 체력이 적을수록 일당의 공격력이 상승한다(최대 2.55배)", // 원본과 다름
        captainNotes: "#{captainProportional : lower : 1 + 2.25 * (1 - (remaining HP) / (total HP)) : 1 : 3.25}",
        special: "자신의 슬롯을 [INT]로 바꾼 후, 적 전체에게 모든 방어 효과를 무시하고 캐릭터의 공격력x100배의 무 속성 데미지를 주고, 적이 지연 무효, 상태이상 무효일 때는 1턴 동안 일당의 슬롯 영향을 2배로 증폭시키고, 적이 배리어를 치고 있을 때는 1턴 동안 자신의 공격력이 2.25배가 된다",
        specialNotes: "#{ignoreBarrier}",
        specialName: "진원의 창",
        sailor: "일당의 기본 체력이 100 상승한다", // 원본과 다름
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.35x at max and their HP by 1.2x" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 100" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.45x at max and their HP by 1.2x" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.55x at max and their HP by 1.2x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.65x at max and their HP by 1.2x" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of all characters by 50" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.75x at max and their HP by 1.35x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 3.25x at max and their HP by 1.35x" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1854: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Amplifies the effect of orbs for Free Spirit characters by 1.5x and boosts ATK of Free Spirit characters by 1.5x for 1 turn",
        specialName: "Fighting Musical Performance",
    },
    1855: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 2x at the start of the chain, by 2.5x after the 3rd PERFECT in a row and by 3x after the 5th PERFECT in a row",
        special: "Amplifies the effect of orbs for Free Spirit characters by 1.5x and boosts ATK of Free Spirit characters by 1.5x for 1 turn",
        specialName: "Fighting Musical Performance",
    },
    1856: {//X Drake
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Cuts the current HP of each enemy by 7%. Boosts the Color Affinity of Powerhouse characters by 1.25x",
        specialName: "Intervening A Fierce Battle",
    },
    1857: {//X Drake :: modified
        captain: "강인형 캐릭터의 공격력을 2.5배로 만들고, 턴 종료 시 체력을 200 회복한다",
        special: "적 전체의 HP를 7% 줄이고, 1턴 동안 강인형 캐릭터의 일반 공격에 의한 속성 상성의 영향을 조금 증폭시킨다",
        specialName: "격전 중재",
    },
    1858: {//Leo
        captain: "Boosts ATK of Striker characters by 2x at the start of the chain. Boosts ATK of Striker characters by 2.4x after scoring 3 PERFECTs in a row.",
        special: "Reduce 3 turns of paralysis, randomize non-matching orbs, including [BLOCK] orbs, Adds 65x character's ATK as Additional Typeless Damage for 1 turn, when the captain is a Striker Character reduces enemies Percent Damage Reduction duration by 3 turns",
        sailor: "If this character has an [INT] orb and you hit a PERFECT with him, keep his [INT] orb for the next turn",
    },
    1859: {//Leo
        captain: "Boosts ATK of Striker characters by 2.5x and their HP by 1.2x at the start of the chain. Boosts ATK of Striker characters by 3.25x after scoring 3 PERFECTs in a row.",
        special: "Reduce 3 turns of paralysis, randomize non-matching orbs, including [BLOCK] orbs, Adds 65x character's ATK as Additional Typeless Damage for 1 turn, when the captain is a Striker Character reduces enemies Percent Damage Reduction duration by 3 turns",
        sailor: {
            "base": "If this character has an [INT] orb and you hit a PERFECT with him, keep his [INT] orb for the next turn",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1860: {//Coloseum Raizo
        captain: "Boosts ATK of Shooter characters by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK in [QCK] damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs,",
                "cooldown": [ 19, 4 ]
            },
            {
                "description": "Deals 7x character's ATK in [QCK] damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.35x for 1 turn",
                "cooldown": [ 24, 9 ]
            },
            {
                "description": "Deals 11x character's ATK in [QCK] damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
                "cooldown": [ 30, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Flower Shuriken",
    },
    1861: {//Coloseum Raizo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.5x",
        special: [
            {
                "description": "Deals 3x character's ATK in [QCK] damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs,",
                "cooldown": [ 19, 4 ]
            },
            {
                "description": "Deals 7x character's ATK in [QCK] damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.35x for 1 turn",
                "cooldown": [ 24, 9 ]
            },
            {
                "description": "Deals 11x character's ATK in [QCK] damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
                "cooldown": [ 30, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Flower Shuriken",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 30",
            "level2": "Boosts base ATK of Shooter characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 30% chance to deal 9% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    1862: {//Neo Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Poof 「개」",
    },
    1863: {//Neo Coliseum Kinemon :: modified
        captain: "자유형 캐릭터의 공격력을 2.5배로 만들고, 턴 종료 시 회복력x2배의 체력을 회복한다",
        special: "참격형과 자유형의 필살기 턴을 1턴 단축하고, 인접한 슬롯을 속성 일치 슬롯으로 바꾼다",
        specialName: "도롱 「개」",
    },
    1864: {//Urouge FN
        captain: "Protects from defeat as long as HP is above 50%",
        specialNotes: "PERFECT hits don't count, it has to GREAT hits",
        special: "Recovers 5,000 HP, boosts ATK of Striker characters by 1.5x for 1 turn. If during that turn you score 4 Great hits, boosts ATK of Striker characters by 1.75x in the following turn.",
        specialName: "Culling the Criminals from this Earthly World"
    },
    1865: {//Urouge FN
        captain: "Boosts ATK of Striker characters by 1.75x, protects from defeat as long as HP is above 50%",
        specialNotes: "PERFECT hits don't count, it has to GREAT hits",
        special: "Recovers 5,000 HP, boosts ATK of Striker characters by 1.5x for 1 turn. If during that turn you score 4 Great hits, boosts ATK of Striker characters by 1.75x in the following turn.",
        specialName: "Culling the Criminals from this Earthly World"
    },
    1866: {//Hawkins FN
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Cuts the current HP of each enemy by 10%. At the end of the turn, cuts the current HP of each enemy by 10% for 3 turns. Reduces damage received by 40% for 3 turns.",
        specialName: "Fortune-Telling from the Shadow of Death"
    },
    1867: {//Hawkins FN
        captain: "Boosts ATK of Cerebral characters by 2x, boosts chain multiplier by 1.5x",
        special: "Cuts the current HP of each enemy by 10%. At the end of the turn, cuts the current HP of each enemy by 10% for 3 turns. Reduces damage received by 40% for 3 turns.",
        specialName: "Fortune-Telling from the Shadow of Death"
    },
    1868: {//Fujitora :: modified
        captain: "데미지를 조금 더 받는 대신, 참격형 캐릭터의 공격력이 3.25배, 체력이 1.2배, GOOD→GREAT→PERFECT 순으로 공격하면 참격형 캐릭터의 공격력이 추가로 1.3배가 된다",
        special: "무작위의 적에게 캐릭터의 공격력x20배의 무 속성 데미지를 10회 주고, 적 전체의 공격을 1턴 지연시키고, 자신이 선장, 친구 선장, 조력자 선장인 경우 모든 슬롯을 속성 일치 슬롯으로 바꾼다",
        specialName: "종전의 비"
    },
    1869: {//Fujitora
        captain: "Increases damage received by 1.2x, Boosts ATK of Slasher characters by 3.25x at the start of the chain and their HP by 1.2x and boosts ATK of Slasher characters by 4.225x following a chain of Good > Great > PERFECT hits",
        special: "Deals 10 hits of 20x character's ATK in typeless damage to random enemies and delays all enemies for 1 turn. If this character is your Captain or Friend/Guest Captain, Changes all orbs on Slasher characters into Matching orbs.",
        specialName: "The Rain of War's End",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Slasher characters by 40",
            "level2": "Makes [STR], [QCK], [DEX] and [PSY] orbs \"beneficial\" for this unit if your Captain is a Slasher character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Slasher characters by 40" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Makes [STR], [QCK], [DEX] and [PSY] orbs \"beneficial\" for this unit if your Captain is a Slasher character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1870: {//Bellamy
        captain: "Boosts ATK of Driven characters by 2.25x",
        special: "Reduces crew's current HP by 50%, deals 10x the amount of HP subtracted in typeless damage to one enemy, reduces enemy's Threshold Damage Reduction, Increased Defense and ATK UP duration by 3 turns and changes own orb into [PSY]",
        specialName: "Spring Death Knock",
        sailor: "Boosts this character's attack against [INT] characters by 1.1x"
    },
    1871: {//Bellamy :: modified
        captain: "야심형 캐릭터의 공격력을 2.75배로 만든다",
        special: "일당의 체력을 50% 감소시키고, 적 1명에게 감소치x10배의 무 속성 데미지를 주고, 적에게 걸려있는 Threshold Damage Reduction, 방어력 상승 상태, ATK UP를 3턴 줄이고, 자신의 슬롯을 [PSY] 슬롯으로 바꾼다",
        specialName: "스프링 데스 녹",
        sailor: {
            "base": "자신이 [INT]에게 주는 일반 공격에 의한 데미지가 1.1배가 된다",
            "level1": "If this character has a [PSY] orb and you hit a PERFECT with him, keep his [PSY] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: If this character has a [PSY] orb and you hit a PERFECT with him, keep his [PSY] orb for the next turn" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1872: {//Kyros
        captain: "Boosts ATK of Slasher and Striker characters by 2.25x",
        special: "Deals 30x character's ATK in [STR] damage to one enemy, reduces Bind and Despair duration by 2 turns and boosts ATK of Slasher characters by 1.75x for 3 turns",
        specialName: "The Forefront Reclaiming His Country",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1873: {//Kyros :: modified
        captain: "참격형과 타격형의 캐릭터의 공격력을 2.5배로 만들고, 체력을 1.25배로 만든다",
        special: "적 1명에게 캐릭터의 공격력x30배의 [STR] 데미지를 주고, 봉쇄 및 선장효과 무효 상태를 2턴 회복하고, 3턴 동안 참격형 캐릭터의 공격력을 1.75배로 만든다",
        specialName: "선수 친 국가 탈환",
        sailor:  "GOOD, GREAT, PERCECT 타이밍 보너스에 캐릭터의 공격력x2배의 데미지가 가산된다",
        sailorNotes: "#{additionalDamage : 2x}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Slasher characters by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1874: {//Violet
        captain: "Boosts amount of Beli received by 2.5x",
        special: "Changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs, reduces Paralysis and Silence duration by 2 turns and adds .5x to Chain multiplier for 1 turn",
        specialName: "Violent Interrogation of Passion",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1875: {//Violet
        captain: "Boosts ATK of all characters by 1.5x. Boosts amount of Beli received by 2.5x",
        special: "Changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs, reduces Paralysis and Silence duration by 2 turns and adds .5x to Chain multiplier for 1 turn",
        specialName: "Violent Interrogation of Passion",
        sailor: {
            "base": "Completely resists Silence on this character",
            "level1": "Reduces Paralysis duration for 1 turn",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration for 1 turn" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1876: {//Rebecca
        captain: "Boosts ATK of Striker characters by 2x and reduces damage received by 10%",
        special: "Deals 50,000 fixed damage to one enemy, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns and changes adjacent orbs into matching orbs",
        specialName: "Strike of Determination",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1877: {//Rebecca
        captain: "Boosts ATK of Striker characters by 2.25x and reduces damage received by 15%",
        special: "Deals 50,000 fixed damage to one enemy, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns and changes adjacent orbs into matching orbs",
        specialName: "Strike of Determination",
        sailor: {
            "base": "Makes [STR] orbs \"beneficial\" for this unit",
            "level1": "Boosts base ATK, HP and RCV of Striker and Slasher characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker and Slasher characters by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1878: {//Bartolomeo
        captain: "Boosts ATK of all characters by 1.5x and reduces damage received by 10%. If you use \"Barrier Crash\" boosts ATK of all characters by 2.25x instead.",
        specialName: "Barrier Crash",
        special: [
            {
                "description": "Reduces any damage received above 5,000 HP by 97% for 2 turns, recovers 20% of crew's MAX HP, reduces enemies' ATK Up and Enrage Buffs by 5 turns.",
                "cooldown": [ 28, 13 ],
            },
            {
                "description": "Reduces any damage received above 3,000 HP by 97% for 2 turns, recovers 50% of crew's MAX HP, reduces enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut and Resilience Buffs by 5 turns.",
                "cooldown": [ 33, 18 ],
            },
        ],
    },
    1879: {//Bartolomeo :: modified
        captain: "일당의 공격력을 2.25배, 체력을 1.35배로 만들고, 받는 데미지를 10% 줄이며, ‘배리어 크래시’를 사용한 턴은 일당의 공격력이 약 2.75배가 된다",
        specialName: "배리어 크래시",
        special: [
            {
                "description": "2턴 동안 적 각각에 대해 5,000이 넘는 부분의 데미지를 초대폭 감소시키고, 최대 체력의 20%를 회복하며, 적의 ATK Up, Enrage Buff를 5턴 줄인다",
                "cooldown": [ 28, 13 ],
            },
            {
                "description": "2턴 동안 적 각각에 대해 3,000이 넘는 부분의 데미지를 초대폭 감소시키고, 최대 체력의 50%를 회복하며, 적의 ATK Up, Enrage, End of Turn Damage/Percent Cut&남은 체력 1로 버티는 효과를 5턴 줄인다",
                "cooldown": [ 33, 18 ],
            },
        ],
        sailor: {
            "base": "None",
            "level1": "일당의 기본 체력이 150 상승한다",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 150" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
        ]
    },
    1880: {//Hody Jones 6+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, reduces crew's current HP by 10% at the end of each turn, boosts ATK of Powerhouse characters by 3.25x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x and with 1 the boost is 1.1x. [BASED ON 6*]",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to all enemies that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 turn, reduces damage received by 60% for 1 turn",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to all enemies that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 turns, reduces damage received by 90% for 1 turn",
                "cooldown": [ 21, 16 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Swarm of Sharks",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Powerhouse characters by 60",
            "level2": "Restores his own special by 2 turns when it is rewinded",
        },
        sailorNotes: "#{rewind : 2}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Powerhouse characters by 60" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ]
    },
    1881: {//Mihawk 6+
        captain: "Boosts ATK of Slasher characters by a variable factor between 1.5x and 3.5x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 1.5x, a Good hit by 2x, a Great hit by 2.75x and a PERFECT hit by 3.5x. This bonus is applied only to Slasher characters.",
        special: [
            {
                "description": "Deals 30% of the damage dealt in the previous turn as typeless damage to all enemies",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Deals 60% of the damage dealt in the previous turn as typeless damage to all enemies",
                "cooldown": [ 24, 18 ]
            }
        ],
        specialNotes: "The special only includes the damage inflicted through normal attacks. If the enemy dies by End-Of-Turn damage, your inflicted Damage dealt last turn will be 0.<br>#{stages}",
        specialName: "Flash of [Yoru]",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Slasher characters by 120",
            "level2": "Boosts base ATK of Slasher characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Slasher characters by 120" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Slasher characters by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 120"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1882: {//Rayleigh V2
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of all characters by 3.5x and boosts chances of getting Matching orbs if HP is below 30% at the start of the turn, 2.5x otherwise and boosts the HP and RCV of all characters by 1.25x",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn, amplifies the effect of orbs by 1.75x for 1 turn and if HP is below 30% at the time the special is activated, reduces damage received by 95% for 1 turn and changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Signaling the Beginning of a Bright Future",
    },
    1883: {//Rayleigh V2
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of all characters by 3.5x and boosts chances of getting Matching orbs if HP is below 30% at the start of the turn, 2.5x otherwise and boosts the HP and RCV of all characters by 1.25x",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn, amplifies the effect of orbs by 1.75x for 1 turn and if HP is below 30% at the time the special is activated, reduces damage received by 95% for 1 turn and changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Signaling the Beginning of a Bright Future",
        sailor: {
            "base": "None",
            "level1": "Boosts ATK, HP and RCV of all characters by 50",
            "level2": "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts ATK, HP and RCV of all characters by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Sailor Ability 2: Makes [STR] and [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ]
    },
    1884: {//Robin
        captain: "Boosts ATK of Cerebral characters by 1.75x and their HP by 1.1x",
        special: "Reduces Paralysis duration by 2 turns, Changes [EMPTY] orbs into Matching orbs and delays all enemies for 1 turn",
        specialName: "Blooming Flower Spear",
    },
    1885: {//Robin
        captain: "Boosts ATK of Cerebral characters by 2.25x and their HP by 1.2x",
        special: "Reduces Paralysis duration by 2 turns, Changes [EMPTY] orbs into Matching orbs and delays all enemies for 1 turn",
        specialName: "Blooming Flower Spear",
    },
    1886: {//Gladius
        captain: "Boosts ATK of Driven characters by 1.75x and their HP by 1.1x",
        special: "Reduces crew's current HP by 80%, Empties all slots with [BOMB] orbs, deals severe typeless damage based on number of [BOMB] slots emptied to all enemies and boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Fashion Pop",
        specialNotes: "The exact multiplier used is chosen based on the number of [BOMB] orbs consumed: 0 orbs - 10x ATK; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 80x ATK; 4 orbs - 150x ATK; 5 orbs - 250x ATK; 6 orbs - 400x ATK."
    },
    1887: {//Gladius
        captain: "Boosts ATK of Driven characters by 2.25x and their HP by 1.2x",
        special: "Reduces crew's current HP by 80%, Empties all slots with [BOMB] orbs, deals severe typeless damage based on number of [BOMB] slots emptied to all enemies and boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Fashion Pop",
        specialNotes: "The exact multiplier used is chosen based on the number of [BOMB] orbs consumed: 0 orbs - 10x ATK; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 80x ATK; 4 orbs - 150x ATK; 5 orbs - 250x ATK; 6 orbs - 400x ATK."
    },
    1888: {//Cavendish
        captain: "Boosts ATK of Driven characters by 1.2x, recovers 0.5x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.32x following a chain of same type attacks no lower than Good",
        special: "Removes all positive buffs on your team, recovers 1,224 HP, changes Badly Matching orbs into Matching orbs. Boosts ATK of Driven characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Driven characters for 1 turn",
        specialName: "A Star Descending from the Twinkling Night Sky",
    },
    1889: {//Cavendish
        captain: {
            "base": "Boosts ATK of Driven characters by 1.5x, recovers 1.5x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.8x following a chain of 3 same Type attacks no lower than Good",
            "level1": "Boosts ATK of Driven characters by 1.5x, recovers 1.6x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.95x following a chain of 3 same Type attacks no lower than Good",
            "level2": "Boosts ATK of Driven characters by 1.5x, recovers 1.7x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.1x following a chain of 3 same Type attacks no lower than Good",
            "level3": "Boosts ATK of Driven characters by 1.5x, recovers 1.8x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.25x following a chain of 3 same Type attacks no lower than Good",
            "level4": "Boosts ATK of Driven characters by 1.75x, recovers 1.9x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.625x following a chain of 3 same Type attacks no lower than Good",
            "level5": "Boosts ATK of Driven characters by 2x, recovers 2x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3x following a chain of 3 same Type attacks no lower than Good",
            "level6": "Boosts ATK of Driven characters by 2.5x, recovers 2 character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3.75x following a chain of 3 same Type attacks no lower than Good",
        },
        special: "Removes all positive buffs on your team, recovers 1,224 HP, changes Badly Matching orbs into Matching orbs. Boosts ATK of Driven characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Driven characters for 1 turn",
        specialName: "A Star Descending from the Twinkling Night Sky",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Driven characters by 50",
            "level2": "Makes [PSY] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.5x, recovers 1.6x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.95x following a chain of same type attacks no lower than Good" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Driven characters by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.5x, recovers 1.7x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.1x following a chain of same type attacks no lower than Good" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.5x, recovers 1.8x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.25x following a chain of same type attacks no lower than Good" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.75x, recovers 1.9x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.625x following a chain of same type attacks no lower than Good" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Driven characters" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 2x, recovers 2x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3x following a chain of same type attacks no lower than Good" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 2.5x, recovers 2 character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3.75x following a chain of same type attacks no lower than Good" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 10% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 40% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    1890: {//Perona
        captain: "Boosts ATK of Shooter characters by 2x and their HP by 1.2x",
        special: "Reduces damage received by 50% for 2 turns, makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns and recovers 2,000 HP at the end of the turn for 3 turns",
        specialNotes: "Ex. A [STR] character with a [QCK] orb will still deal regular damage",
        specialName: "Gothic Angel",
        sailor: "Boosts base RCV of Shooter characters by 50"
    },
    1891: {//Perona
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.2x. Reduce damage received by 10%",
        special: "Reduces damage received by 50% for 2 turns, makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns and recovers 2,000 HP at the end of the turn for 3 turns",
        specialNotes: "Ex. A [STR] character with a [QCK] orb will still deal regular damage",
        specialName: "Gothic Angel",
        sailor: "Boosts base RCV of Shooter characters by 50"
    },
    1892: {//Mihawk
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x",
        special: [
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies.",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 19, 14 ],
            },
            {
                "description": "Reduces crew's current HP by 80%, deals 6x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 23, 18 ],
            },
        ],
        specialName: "A Test Against the Black Blade",
        specialNotes: "#{stages}",
        sailor: "When HP is below 50% at the start of the turn, boosts own base ATK by 1.25x"
    },
    1893: {//Mihawk
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x",
        special: [
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies.",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 19, 14 ],
            },
            {
                "description": "Reduces crew's current HP by 80%, deals 6x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 23, 18 ],
            },
        ],
        specialName: "A Test Against the Black Blade",
        specialNotes: "#{stages}",
        sailor: "When HP is below 50% at the start of the turn, boosts own base ATK by 1.25x"
    },
    1894: {//Urouge
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.2x",
        special: "If HP is below 50% at the time the special is activated, deal 75x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 2x for 1 turn",
        specialName: "The Collapsing Arhat",
    },
    1895: {//Urouge
        captain: "Boosts ATK of Fighter characters by 3.0375x if HP is below 50% at the start of the turn, 2.25x otherwise and boosts the HP of Fighter characters by 1.25x",
        special: "If HP is below 50% at the time the special is activated, deal 75x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 2x for 1 turn",
        specialName: "The Collapsing Arhat",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Fighter characters by 50",
            "level2": "When HP is below ??% at the start of the turn, boosts base ATK of Fighter characters by 75",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Fighter characters by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: When HP is below ??% at the start of the turn, boosts base ATK of Fighter characters by 75" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    1896: {//Enel
        captain: "Boosts ATK of Driven characters proportionally to the crew's current HP, by 2.25x at max",
        captainNotes: "#{captainProportional : higher : 1.25 + 1 * ((remaining HP) / (total HP)) : 2.25 : 1.25}",
        special: [
            {
                "description": "Changes own orb into [STR], reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 2 turns. If your Captain is a Driven character, adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 23, 9 ],
            },
            {
                "description": "Changes own orb into [STR], reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 5 turns. If your Captain is a Driven character, adds .7x to Chain multiplier for 1 turn",
                "cooldown": [ 28, 14 ],
            },
        ],
        specialName: "30,000,000 Volt: Hino",
        specialNotes: "#{stages}",
    },
    1897: {//Enel :: modified
        captain: "Boosts ATK of Driven characters proportionally to the crew's current HP, by 2.75x at max and their RCV by 1.3x",
        captainNotes: "#{captainProportional : higher : 1.5 + 1.25 * ((remaining HP) / (total HP)) : 2.75 : 1.5}",
        special: [
            {
                "description": "자신의 슬롯을 [STR]으로 바꾸고, 공격력 감소 & 체인 계수 상한 고정 & 마비 상태를 2턴 회복하며, 선장이 야심형일 경우 1턴 동안 체인 계수가 +0.3이 된다",
                "cooldown": [ 23, 9 ],
            },
            {
                "description": "자신의 슬롯을 [STR]으로 바꾸고, 공격력 감소 & 체인 계수 상한 고정 & 마비 상태를 5턴 회복하며, 선장이 야심형일 경우 1턴 동안 체인 계수가 +0.7 된다",
                "cooldown": [ 28, 14 ],
            },
        ],
        specialName: "3000만 볼트 뇌조",
        specialNotes: "#{stages}",
        sailor: {
            "base": "None",
            "level1": "야심형 캐릭터의 기본 회복력이 25 상승한다",
            "level2": "야심형 캐릭터의 기본 공격력이 40 상승한다",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base RCV of Driven characters by 25" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Driven characters by 40" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    1898: {//Neo Killer
        captain: "Boosts ATK of Striker and Slasher characters by 2x, reduces crew's RCV to 0.",
        special: "Changes [STR], [DEX] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 8%",
        specialName: "Hitting Size 「개」"
    },
    1899: {//Neo Killer
        captain: "Boosts ATK of Striker and Slasher characters by 2.75x if they have a Matching orb, by 2x otherwise, reduces crew's RCV to 0.",
        special: "Changes [STR], [DEX] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 8%",
        specialName: "Hitting Size 「개」",
    },
    1900: {//EXP Zoro :: modified
        captain: "일당의 공격력을 2.25배로 만들고, 획득하는 베리와 해적 EXP가 1.2배가 된다(획득하는 베리와 해적 EXP의 증가 효과는 모험 도중에 선장이 되었을 때는 발동되지 않습니다)",
        special: "적 1명에게 캐릭터의 공격력x20배의 [QCK] 데미지를 주고, 자신의 슬롯을 [QCK]으로 바꾸며, 1턴 동안 자신의 공격력을 1.5배로 만든다",
        specialName: "일검류 마귀",
    },
    1901:{//Pica :: modified
        captain: "야심형 캐릭터의 공격력을 1.2배, 체력을 1.75배로 만든다",
        special: "적 1명의 HP를 20% 줄이고, 봉쇄, 선장효과 무효 상태를 4턴 회복, 야심형 캐릭터의 [BLOCK] 슬롯을 포함한 모든 슬롯을 [G] 슬롯으로 바꾼다",
        specialNotes: "#{gOrbs}",
        specialName: "단단한 비장의 카드",
        sailor: "자신은 날아가지 않는다",
    },
    1902:{//Pica :: modified
        captain: "야심형 캐릭터의 공격력을 1.75배, 체력을 2.25배로 만든다",
        special: "적 1명의 HP를 20% 줄이고, 봉쇄, 선장효과 무효 상태를 4턴 회복, 야심형 캐릭터의 [BLOCK] 슬롯을 포함한 모든 슬롯을 [G] 슬롯으로 바꾼다",
        specialNotes: "#{gOrbs}",
        specialName: "단단한 비장의 카드",
        sailor: {
            "base": "자신은 날아가지 않는다",
            "level1": "야심형 캐릭터는 [INT] 슬롯도 [유리] 슬롯으로 취급한다",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    1903:{//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        special: "Reduces enemy Barrier duration by 1 turn, Reduces enemies Damage Nullification duration by 1 turn and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Diaper Bomb",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1904:{//Senor Pink :: modified
        captain: "자유형 캐릭터의 공격력을 2.75배로 만든다",
        special: "적 전체에게 캐릭터의 공격력x30배의 [QCK] 데미지를 주고, 적의 HP 바에 걸려있는 모든 배리어와 데미지 무효 상태를 1턴 줄인다",
        specialName: "기저귀 폭탄",
        sailor: "자신은 [DEX] 슬롯도 [유리] 슬롯으로 취급한다",
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 50" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    1905:{//Sugar
        captain: "Boosts ATK of Driven and Cerebral characters by 2x",
        special: "Changes [RCV], [TND] and [G] orbs into Matching orbs and amplifies the effect of orbs for Driven characters by 1.75x for 3 turns. Locks orbs for 1 turn.",
        specialName: "March of the Decapitating Dolls",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    1906:{//Sugar
        captain: "Boosts ATK of Driven and Cerebral characters by 2.25x and their RCV by 1.5x",
        special: "Changes [RCV], [TND] and [G] orbs into Matching orbs and amplifies the effect of orbs for Driven characters by 1.75x for 3 turns. Locks orbs for 1 turn.",
        specialName: "March of the Decapitating Dolls",
        sailor: {
            "base": "Reduces Paralysis duration by 1 turn",
            "level1": "Makes [RCV] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    1907:{//Trebol
        captain: "Boosts ATK of Driven characters by 3x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 4% at the end of each turn",
        captainNotes: "His ATK multiplier will be 3x on the first turn, 2.?x on the second, 2.?x on the third and so on. The reduction stops once the multiplier is ???x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces enemies Threshold Damage Reduction, Percent Damage Reduction and Increased Defense duration by 4 turns. If there are 6 Driven characters in your crew, Boosts ATK of Driven characters by 2x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        specialName: "Beta Betton Meteora",
        sailor: "Boosts base ATK of the characters in the top row by 100",
    },
    1908:{//Trebol :: modified
        captain: "야심형 캐릭터의 공격력을 3.5배로 만들고, 턴이 경과할 때마다 공격력과 체력이 감소한다",
        captainNotes: "His ATK multiplier will be 3.5x on the first turn, 3.?x on the second, 3.?x on the third and so on. The reduction stops once the multiplier is ???x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "적 전체에 걸려 있는 방어력 상승, 데미지 감소, ATK UP 상태를 4턴 줄이고, 일당에 야심형 캐릭터가 6명 있을 때, 1턴 동안 야심형 캐릭터의 공격력을 2배로 만들고, 상단 캐릭터의 필살기 턴을 1턴 단축한다",
        specialName: "찐득 지휘봉 유성",
        sailor: "상단 캐릭터의 기본 공격력이 100 상승한다",
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ]
    },
    1909:{//V2 Doflamingo :: modified
        captain: "일당에 야심형 캐릭터가 6명일 때, 야심형 캐릭터의 체력을 1.2배, 평상시에 공격력을 3.25배, 슬롯 일치 시엔 공격력을 3.9배로 만들고, [DEX][QCK] 슬롯도 [유리] 슬롯으로 취급하며, [STR] 슬롯 출현율을 대폭 감소시킨다",
        captainNotes: "#{beneficial}",
        special: "이전 턴에 일반 공격으로 적의 HP를 초과해서 준 데미지 합계치의 2배의 무 속성 데미지를 적 전체에게 준다(추가 데미지 등으로 적을 전멸시키고 다음 배틀로 이동할 시, 일반 공격으로 적의 HP를 초과해서 준 데미지 합계치는 0으로 계산)",
        specialNotes: "Overkill Damage is damage dealt over the enemy's current HP with normal attacks that killed them. For example, dealing 2,100,000 damage to an enemy with 1,000,000 HP will count as 1,100,000 Overkill Damage. This stacks for each enemy killed in the previous turn. If the enemy dies by End-Of-Turn damage, your Overkill Damage dealt last turn will be 0.",
        specialName: "천 발의 화살 플랩 스레드",
    },
    1910:{//V2 Doflamingo :: modified
        captain: "일당에 야심형 캐릭터가 6명일 때, 야심형 캐릭터의 체력을 1.2배, 평상시에 공격력을 3.25배, 슬롯 일치 시엔 공격력을 3.9배로 만들고, [DEX][QCK] 슬롯도 [유리] 슬롯으로 취급하며, [STR] 슬롯 출현율을 대폭 감소시킨다",
        captainNotes: "#{beneficial}",
        special: "이전 턴에 일반 공격으로 적의 HP를 초과해서 준 데미지 합계치의 2배의 무 속성 데미지를 적 전체에게 준다(추가 데미지 등으로 적을 전멸시키고 다음 배틀로 이동할 시, 일반 공격으로 적의 HP를 초과해서 준 데미지 합계치는 0으로 계산)",
        specialNotes: "Overkill Damage is damage dealt over the enemy's current HP with normal attacks that killed them. For example, dealing 2,100,000 damage to an enemy with 1,000,000 HP will count as 1,100,000 Overkill Damage. This stacks for each enemy killed in the previous turn. If the enemy dies by End-Of-Turn damage, your Overkill Damage dealt last turn will be 0.",
        specialName: "천 발의 화살 플랩 스레드",
        sailor: {
            "base": "None",
            "level1": "Makes [QCK] orbs \"beneficial\" for this unit",
            "level2": "Makes [DEX] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1911:{//Kimono Urouge
        captain: "Boosts ATK of Striker and Powerhouse characters by 1.5x. Boosts EXP gained by 1.25x",
        special: "Changes [RCV], [TND], [G], [BLOCK] and [BOMB] orbs into Matching orbs, recovers 7,600 HP and reduces damage received by 76% for 1 turn",
        specialName: "Prayers of Paradise",
    },
    1912:{//Kimono Urouge
        captain: "Boosts ATK of Striker and Powerhouse characters by 1.75x and their HP by 1.5x. Boosts EXP gained by 1.5x",
        special: "Changes [RCV], [TND], [G], [BLOCK] and [BOMB] orbs into Matching orbs, recovers 7,600 HP and reduces damage received by 76% for 1 turn",
        specialName: "Prayers of Paradise",
    },
    1913:{//Kimono Vivi
        captain: "Boosts ATK of Free Spirit and Cerebral characters by 1.5x. Boosts Beli gained by 1.5x",
        special: "Randomizes all non-matching orbs, recovers 2,018 HP and amplifies the effects of orbs for Cerebral and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Blossoming a New Year Celebration",
    },
    1914:{//Kimono Vivi
        captain: "Boosts ATK of Free Spirit and Cerebral characters by 1.75x and their HP by 1.5x. Boosts Beli gained by 2.5x",
        special: "Randomizes all non-matching orbs, recovers 2,018 HP and amplifies the effects of orbs for Cerebral and Free Spirit characters by 1.75x for 1 turn",
        specialName: "꽃 피는 신년의 축사",
    },
    1915: {//G4 Luffy
        captain: "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 3 PERFECTs in a row",
        special: "Randomizes all orbs, including [BLOCK] orbs, changes own orb into [QCK], deals 300x character's ATK in typeless damage to one enemy and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "Gomu Gomu no Leo Bazooka",
    },
    1916: {//G4 Luffy
        captain: {
            "base": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row",
            "level1": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row and reduce damage received by 2%",
            "level2": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row and reduce damage received by 4%",
            "level3": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 3x after scoring 4 PERFECTs in a row and reduce damage received by 4%",
            "level4": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 3.25x after scoring 4 PERFECTs in a row and reduce damage received by 4%",
            "level5": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 3.5x after scoring 4 PERFECTs in a row and reduce damage received by 4%",
            "level6": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 4x after scoring 4 PERFECTs in a row and reduce damage received by 4%",
        },
        special: "Randomizes all orbs, including [BLOCK] orbs, changes own orb into [QCK], deals 300x character's ATK in typeless damage to one enemy and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "Gomu Gomu no Leo Bazooka",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Free Spirit characters by 30",
            "level2": "Boosts base ATK, HP and RCV of Powerhouse characters by 30",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row and reduce damage received by 2%" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row and reduce damage received by 4%" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 3x after scoring 4 PERFECTs in a row and reduce damage received by 4%" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 3.25x after scoring 4 PERFECTs in a row and reduce damage received by 4%" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of Powerhouse characters by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 3.5x after scoring 4 PERFECTs in a row and reduce damage received by 4%" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 PERFECTs in a row, boosts by 4x and reduce damage received by 4% after scoring 4 PERFECTs in a row" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ]
    },
    1917: {//Reiju
        captain: "Boosts ATK of [STR] characters by 2x and reduces damage received by 10%",
        special: "Reduces Bind duration by 2 turns, boosts ATK of [STR] characters by 1.75x for 1 turn",
        specialName: "Brute Force Rescue",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1918: {//Reiju
        captain: "Boosts ATK of [STR] characters by 2.25x and reduce damage received by 15%",
        special: "Reduces Bind duration by 2 turns, boosts ATK of [STR] characters by 1.75x for 1 turn",
        specialName: "Brute Force Rescue",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1919: {//Sanji
        captain: "Recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 2 turns and switches orbs between slots twice",
        specialName: "Iron Mask of Dreams",
    },
    1920: {//Sanji
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 2 turns and switches orbs between slots twice",
        specialName: "Iron Mask of Dreams",
    },
    1921:{//6+ Zoro
        captain: "Boosts ATK of Slasher characters by 3x and their HP by 1.5x",
        special: "Deals 120x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 turn. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 turn and locks the chain multiplier at 2.5x for 1 turn instead",
        specialName: "Three Blade Style Secret Skill: Great Three Thousand Worlds",
    },
    1922:{//6+ Law
        captain: "Boosts ATK of Cerebral characters by 3x, HP by 1.25x and heals for 0.5x his RCV at the end of the turn each time you hit a PERFECT",
        special: "Reduces enemy Barrier duration by 1 turn, deals 200,000 fixed damage to all enemies and amplifies the effect of orbs for Cerebral characters by 2.25x for 1 turn",
        specialName: "Radio Knife",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker characters by 50",
            "level2": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 80%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    1923: {//Rayleigh
        captain: "Boosts ATK of Slasher and Cerebral characters by 2x",
        special: "Randomizes all non-matching orbs, boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Maelstrom at Sea",
    },
    1924: {//Rayleigh :: modified
        captain: "박식형과 참격형 캐릭터의 공격력이 2.5배가 되고, 턴 종료 시에 캐릭터의 회복력x2배의 체력을 회복한다",
        special: "일당의 속성 일치 슬롯 이외의 슬롯을 랜덤으로 바꾸고, 1턴 동안 일당의 공격력을 1.75배로 만든다",
        specialName: "격동의 대해전",
        limit: "This character has a Limit Break Tree"
    },
    1925: {//Coby
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Reduces Bind duration for one character completely, locks all orbs for 1 turn and boosts ATK of Driven characters by 1.75x for 3 turns",
        specialName: "Unshameful Fist of Justice",
    },
    1926: {//Coby
        captain: "Boosts ATK of Driven characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn and reduce damage received by 7%",
        special: "Reduces Bind duration for one character completely, locks all orbs for 1 turn and boosts ATK of Driven characters by 1.75x for 3 turns",
        specialName: "Unshameful Fist of Justice",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Driven characters by 75",
            "level2": "Makes [PSY] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Driven characters by 75" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    1927: {//Crocodile
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP, by 3.5x at max",
        captainNotes: "#{captainProportional : lower : 2 + 1.5 * (1 - (remaining HP) / (total HP)) : 2 : 3.5}",
        special: "Cuts the current HP of each enemy by 20% and boosts ATK of Cerebral characters by 2x",
        specialName: "Desert Girasole",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Cerebral characters by 50",
            "level2": "Makes [DEX] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Cerebral characters by 50" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 75" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Acquire Potential 3: Enrage" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 75",
                    "Level 2: Boosts base ATK by 100",
                    "Level 3: Boosts base ATK by 200",
                    "Level 4: Boosts base ATK by 250",
                    "Level 5: Boosts base ATK by 300"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1928: {//Bartolomeo
        captain: "Boosts ATK of Striker and Driven characters by 3x. If you don't attack with Bartolomeo, reduces damage received by 30% for that turn.",
        special: "Protects from defeat for 1 turn and boosts ATK of Striker and Driven characters and amplifies orbs of Striker and Driven characters by 1.5x for 1 turn",
        specialNotes: "#{zombie}",
        specialName: "An Oath of One's Life and Soul",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Striker characters by 60",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Striker characters by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 2%",
                    "Level 2: Reduce damage taken from [DEX] characters by 3%",
                    "Level 3: Reduce damage taken from [DEX] characters by 4%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1929: {//Enel Neo
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of [DEX] characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru 「개」",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of [DEX] characters by 2x",
    },
    1930: {//Enel Neo
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of [DEX] characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru 「개」",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of [DEX] characters by 2.25x, recovers 5x character's RCV in HP at the end of each turn",
    },
    1931: {//Sandersonia
        captain: "Boosts ATK of Free Spirit characters by 1.75x",
        special: "Adds .25x to Chain multiplier for 1 turn and boosts ATK of Fighter characters by 1.5x for 1 turn. If \"The Trio Crawling Away from the Heavens: The Eldest Daughter\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 1.75x instead.",
        specialNotes: "This special is boosted if you use Boa Hancock's [1933] special in the same turn",
        specialName: "The Trio Crawling Away from the Heavens: The Second Daughter",
        sailor: "Boosts own base ATK by 100 if this character is the 2nd in the chain to attack",
    },
    1932: {//Marigold
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Amplifies the effect of orbs for Fighter characters by 1.25x for 1 turn and boosts ATK of Fighter characters by 1.5x for 1 turn. If \"The Trio Crawling Away from the Heavens: The Second Daughter\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 1.75x instead.",
        specialNotes: "This special is boosted if you use Boa Sandersonia's [1931] special in the same turn",
        specialName: "The Trio Crawling Away from the Heavens: The Third Daughter",
        sailor: "Boosts own base ATK by 100 if this character is the 3rd in the chain to attack",
    },
    1933: {//Hancock
        captain: "Boosts ATK of Fighter characters by 1.75x and boosts ATK of Free Spirit characters by 1.5x",
        captainNotes: "The bonus is cumulative. Fighter + Free Spirit characters get a 2.625x bonus.",
        special: "Makes [DEX] orbs \"beneficial\" for Fighter characters for 1 turn and boosts ATK of Fighter characters by 1.5x for 1 turn. If \"The Trio Crawling Away from the Heavens: The Third Daughter\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 1.75x instead.",
        specialNotes: "This special is boosted if you use Boa Marigold's [1932] special in the same turn<br>#{beneficial}",
        specialName: "The Trio Crawling Away from the Heavens: The Eldest Daughter",
        sailor: "Boosts own base ATK by 100 if this character is the 1st in the chain to attack",
    },
    1934: {//Legend Franky
        captain: "Boosts ATK of all characters by 3x and their HP by 1.3x if there are 6 characters in your crew with Fighter, Slasher, Shooter or Striker classes. <br> <b>Action:</b> Franky brings the entire crew into General Franky for 1 turn, immune to Blow Away inflicted to the crew. During this turn, boosts ATK of all characters by 4x instead and reduces damage taken by 38%",
        captainNotes: "All characters on your crew must have one of the 4 classes listed, but you do not need one of each. Franky Captain Action lasts one turn and can be reactivated after a 4 turn cooldown. Only 1 Franky Captain Action can be activated at once. <br\> During transformation:<br\>If you attack with a Fighter character, deal 1.25x damage to targeted enemy<br\>If you attack with a Slasher character, deal full damage to targeted enemy, but partial damage (??%) to all enemies in the same row<br\>If you attack with a Striker character, deal 0.5x damage to all enemies on the stage<br\>If you attack with a Shooter character, deal .75x damage to targeted enemy but deal 0.3x damage to all other enemies on the stage",
        special: "Cuts the current HP of all enemies by 10%, randomizes all non-matching orbs, including [BLOCK] orbs and boosts ATK of Fighter, Slasher, Shooter and Striker characters by 2x for 1 turn",
        specialName: "Franky Cannon",
    },
    1935: {//Legend Franky
        captain: "Boosts ATK of all characters by 3x and their HP by 1.3x if there are 6 characters in your crew with Fighter, Slasher, Shooter or Striker classes. <br> <b>Action:</b> Franky brings the entire crew into General Franky for 1 turn, immune to Blow Away inflicted to the crew. During this turn, boosts ATK of all characters by 4x instead and reduces damage taken by 38%",
        captainNotes: "All characters on your crew must have one of the 4 classes listed, but you do not need one of each. Franky Captain Action lasts one turn and can be reactivated after a 4 turn cooldown. Only 1 Franky Captain Action can be activated at once. <br\> During transformation:<br\>If you attack with a Fighter character, deal 1.25x damage to targeted enemy<br\>If you attack with a Slasher character, deal full damage to targeted enemy, but partial damage (??%) to all enemies in the same row<br\>If you attack with a Striker character, deal 0.5x damage to all enemies on the stage<br\>If you attack with a Shooter character, deal .75x damage to targeted enemy but deal 0.3x damage to all other enemies on the stage",
        special: "Cuts the current HP of all enemies by 10%, randomizes all non-matching orbs, including [BLOCK] orbs and boosts ATK of Fighter, Slasher, Shooter and Striker characters by 2x for 1 turn",
        specialName: "Franky Cannon",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter, Slasher, Fighter and Striker characters by 50",
            "level2": "Makes [QCK] orbs \"beneficial\" for Shooter, Slasher, Fighter and Striker characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 2" },
            { "description": "Boosts base ATK by 2" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter, Slasher, Fighter and Striker characters by 50" },
            { "description": "Boosts base RCV by 1" },
            { "description": "Boosts base RCV by 1" },
            { "description": "Boosts base RCV by 38" },
            { "description": "Boosts base ATK by 3" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Boosts base RCV by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for Shooter, Slasher, Fighter and Striker characters" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    1936: {//Blackbeard
        captain: "Boosts ATK of [INT] characters by 1.75x",
        special: "Adds 15x character's ATK as Additional Typeless Damage for 2 turns. If you are on a Training Map, Cuts the current HP of all enemies depending on your Treasure Map Level that will ignore damage negating abilities and barriers",
        specialNotes: "Level 1-20: 10% Health Cut<br\>Level 21+: 25% Health Cut<br>#{ignoreBarrier}",
        specialName: "Sacred Flames: Unknown Fire",
    },
    1937: {//Blackbeard
        captain: "Boosts ATK of [INT] characters by 1.75x and their HP by 1.5x",
        special: "Adds 15x character's ATK as Additional Typeless Damage for 2 turns. If you are on a Training Map, Cuts the current HP of all enemies depending on your Treasure Map Level that will ignore damage negating abilities and barriers",
        specialNotes: "Level 1-20: 10% Health Cut<br\>Level 21+: 25% Health Cut<br>#{ignoreBarrier}",
        specialName: "Sacred Flames: Unknown Fire",
    },
    1938: {//Thatch
        captain: "Boosts ATK of [DEX] characters by 1.75x",
        special: "Deals 13x character's ATK in [DEX] damage to one enemy, changes adjacent orbs into Matching Orbs, if there are 4 enemies or more on the stage, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Gliding Twin Swords",
    },
    1939: {//Thatch
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.5x",
        special: "Deals 13x character's ATK in [DEX] damage to one enemy, changes adjacent orbs into Matching Orbs, if there are 4 enemies or more on the stage, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Gliding Twin Swords",
    },
    1940: {//Ace
        captain: "If there is a [STR], [QCK] and [PSY] character in your crew, boosts ATK of [STR], [QCK] and [PSY] characters by 1.75x and their HP and RCV by 1.05x",
        special: "Changes all orbs, including [BLOCK] orbs, to [STR] orbs, boosts ATK of [STR], [QCK] and [PSY] characters by 1.75x for 1 turn and makes [STR] orbs \"beneficial\" for [STR], [QCK] and [PSY] characters if your Captain is a Free Spirit character",
        specialNotes: "#{beneficial}",
        specialName: "Sacred Flames: Unknown Fire",
    },
    1941: {//Ace
        captain: {
            "base": "If there is a [STR], [QCK] and [PSY] character in your crew, boosts ATK of [STR], [QCK] and [PSY] characters by 2x and their HP and RCV by 1.1x",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "If there is a [STR], [QCK] and [PSY] character in your crew, boosts ATK of [STR], [QCK] and [PSY] characters by 3.44x if they have a [STR] orb, by 2.75x otherwise and their HP and RCV by 1.2x",
        },
        special: "Changes all orbs, including [BLOCK] orbs, to [STR] orbs, boosts ATK of [STR], [QCK] and [PSY] characters by 1.75x for 1 turn and makes [STR] orbs \"beneficial\" for [STR], [QCK] and [PSY] characters if your Captain is a Free Spirit character",
        specialNotes: "#{beneficial}",
        specialName: "Sacred Flames: Unknown Fire",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Free Spirit characters by 30",
            "level2": "Makes [PSY] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1942: {//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Changes own orb into [STR], reduces Chain Multiplier Limit and Chain Coefficient Reduction by 3 turns. If your captain is a Free Spirit Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Manly Synchronized Swimming",
    },
    1943: {//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2.5x and recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Changes own orb into [STR], reduces Chain Multiplier Limit and Chain Coefficient Reduction by 3 turns. If your captain is a Free Spirit Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Manly Synchronized Swimming",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Free Spirit characters by 50",
            "level2": "Boosts base RCV of Free Spirit characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 95" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Free Spirit characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 2: Boosts base RCV of Free Spirit characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    1944: {//Pedro
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Reduces crew's current HP by 95%, deals 50x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers, boosts the Color Affinity of Cerebral characters by 1.75x for 2 turns",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Explosive Reply",
    },
    1945: {//Pedro
        captain: "Boosts ATK of Cerebral characters by 2.5x and makes [PSY] and [INT] orbs \"beneficial\" to Cerebral characters",
        captainNotes: "#{beneficial}",
        special: "Reduces crew's current HP by 95%, deals 50x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers, boosts the Color Affinity of Cerebral characters by 1.75x for 2 turns",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Explosive Reply",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Cerebral characters by 35",
            "level2": "Makes [PSY] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Cerebral characters by 35" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 75" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1946: {//Vander Decken
        captain: "Boosts ATK of all characters by 1.75x.",
        special: "Locks orbs for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : higher : 85 * ( (remaining HP) / (total HP) )}",
        specialName: "Shooting at the Heart",
    },
    1947: {//Vander Decken
        captain: "Boosts ATK of all characters by 2x. Recovers 2x character's RCV in HP at the end of each turn.",
        special: "Locks orbs for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : higher : 85 * ( (remaining HP) / (total HP) )}",
        specialName: "Shooting at the Heart",
    },
    1948: {//Wadatsumi
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Increases damage received by 2x for 2 turns and reduces Special Cooldown of Fighter and Powerhouse characters by 2 turns",
        specialName: "Expanding Superpower",
    },
    1949: {//Wadatsumi
        captain: "Boosts ATK of Powerhouse characters by 2.25x, boosts HP of Fighter characters by 1.5x",
        special: "Increases damage received by 2x for 2 turns and reduces Special Cooldown of Fighter and Powerhouse characters by 2 turns",
        specialName: "Expanding Superpower",
    },
    1950:{//Robin
        captain: "Boosts ATK of Cerebral characters by 3.25x and their RCV by 1.5x, makes [RCV] orbs \"beneficial\" to Cerebral characters and reduce damage received by 20%",
        captainNotes: "#{beneficial}",
        special: "Reduces damage received by 100% for 1 turn. If your Captain is a Cerebral character, changes adjacent orbs into [RCV] orbs",
        specialName: "Moth Orchid",
    },
    1951:{//Robin
        captain: "Boosts ATK of Cerebral characters by 3.25x and their RCV by 1.5x, makes [RCV] orbs \"beneficial\" to Cerebral characters and reduce damage received by 20%",
        captainNotes: "#{beneficial}",
        special: "Reduces damage received by 100% for 1 turn. If your Captain is a Cerebral character, changes adjacent orbs into [RCV] orbs",
        specialName: "Moth Orchid",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Cerebral characters by 50",
            "level2": "Makes [PSY], [RCV] and [TND] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Cerebral characters by 50" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY], [RCV] and [TND] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Enrage" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 150",
                    "Level 2: Boosts base ATK by 200",
                    "Level 3: Boosts base ATK by 250",
                    "Level 4: Boosts base ATK by 300",
                    "Level 5: Boosts base ATK by 400"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1952: {//Koala
        captain: "Boosts ATK of [INT] characters by 2.5x",
        special: "Reduces Bind and Despair duration by 3 turns and changes own orb into [RCV]. If your Captain is a Cerebral character, adds .7x to Chain multiplier for 1 turn and changes bottom row orbs into matching orbs",
        specialName: "Vigorous Straight Fist",
        sailor: "If this character has a [RCV] orb and you hit a PERFECT with her, keep her [RCV] orb for the next turn",
    },
    1953: {//Koala
        captain: "Boosts ATK of [INT] characters by 2.75x",
        special: "Reduces Bind and Despair duration by 3 turns and changes own orb into [RCV]. If your Captain is a Cerebral character, adds .7x to Chain multiplier for 1 turn and changes bottom row orbs into matching orbs",
        specialName: "Vigorous Straight Fist",
        sailor: {
            "base": "If this character has a [RCV] orb and you hit a PERFECT with her, keep her [RCV] orb for the next turn",
            "level1": "Boosts base ATK, HP and RCV of Fighter and Cerebral characters by 35",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Fighter and Cerebral characters by 35" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 6 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 9 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 12 turns at the start of the fight"
                ]
            },
        ]
    },
    1954: {//Nami
        captain: "Boosts ATK of Cerebral Characters by 2x",
        special: "Cuts the current HP of all enemies by 10% and changes own orb into [RCV]. Boosts ATK of Cerebral characters by 1.75x for 1 turn. If during that turn you score 5 PERFECT hits, boosts ATK of Cerebral characters by 2.25x in the following turn.",
        specialName: "Thunder Trap",
        sailor: "If this character has a [RCV] orb and you hit a PERFECT with her, keep her [RCV] orb for the next turn",
    },
    1955: {//Nami
        captain: "Boosts ATK of Cerebral Characters by 3x if they have a matching orb, by 2x otherwise",
        special: "Cuts the current HP of all enemies by 10% and changes own orb into [RCV]. Boosts ATK of Cerebral characters by 1.75x for 1 turn. If during that turn you score 5 PERFECT hits, boosts ATK of Cerebral characters by 2.25x in the following turn.",
        specialName: "Thunder Trap",
        sailor: {
            "base": "If this character has a [RCV] orb and you hit a PERFECT with her, keep her [RCV] orb for the next turn",
            "level1": "Makes [QCK] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1956: {//Carrot
        captain: "Boosts ATK of [STR] characters by 2x and their RCV by 1.2x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and locks the chain multiplier at 2.75x for 1 turn",
        specialName: "Hopping Crash",
        sailor: "Makes [RCV] orbs \"beneficial\" for all characters",
        sailorNotes: "#{beneficial}",
    },
    1957: {//Carrot
        captain: "Boosts ATK of [STR] characters by 2.5x and their RCV by 1.25x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and locks the chain multiplier at 2.75x for 1 turn",
        specialName: "Hopping Crash",
        sailor: {
            "base": "Makes [RCV] orbs \"beneficial\" for all characters",
            "level1": "Adds 2.5x character's ATK as Additional Typeless Damage",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Adds 2.5x character's ATK as Additional Typeless Damage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
    },
    1958: {//Shirahoshi
        captain: "Reduce damage received by 15%.",
        special: "Reduces Paralysis and Silence  and ATK DOWN duration by 5 turns, recovers 7,000 HP at the end of the turn for 3 turns and changes orbs in the top row into Matching orbs",
        specialName: "An Important Confession from the Mermaid Princess",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1959: {//Shirahoshi
        captain: "Boosts ATK of all characters by 2.25x and reduce damage received by 15%.",
        special: "Reduces Paralysis and Silence  and ATK DOWN duration by 5 turns, recovers 7,000 HP at the end of the turn for 3 turns and changes orbs in the top row into Matching orbs",
        specialName: "An Important Confession from the Mermaid Princess",
        sailor: {
            "base": "Completely resists Silence on this character",
            "level1": "Changes all orbs into [RCV] orbs at the start of the fight",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Changes all orbs into [RCV] orbs at the start of the fight" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1960: {//Sanji
        captain: "Boosts ATK of [PSY] and Fighter characters by 2x",
        special: "Changes [RCV], [TND] and [BOMB] orbs into Matching orbs, reduces Special Cooldown of Powerhouse and Fighter specials by 1 turn and delays all enemies by 1 turn",
        specialName: "A Broad Smile of Life and Death",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1961: {//Sanji
        captain: "Boosts ATK of [PSY] and Fighter characters by 2.25x and their HP by 1.2x. If you use \"Tears of Attraction\" this turn, boosts their ATK by 2.925x instead.",
        captainNotes: "This effect is boosted if you use Charlotte Pudding's [1962/1963] special in the same turn",
        special: "Changes [RCV], [TND] and [BOMB] orbs into Matching orbs, reduces Special Cooldown of Powerhouse and Fighter specials by 1 turn and delays all enemies by 1 turn",
        specialName: "A Broad Smile of Life and Death",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1962: {//Pudding
        captain: "Boosts ATK of [INT] and Fighter characters by 2x",
        captainNotes: "This effect is boosted if you use Sanji's [1960/1961] special in the same turn",
        special: "Changes [G], [BLOCK] and Badly Matching orbs into Matching orbs, reduces Bind and Silence duration by 3 turns and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Tears of Attraction",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    1963: {//Pudding
        captain: "Boosts ATK of [INT] and Fighter characters by 2.25x and their HP by 1.2x. If you use \"A Broad Smile of Life and Death\" this turn, boosts their ATK by 2.925x instead.",
        captainNotes: "This effect is boosted if you use Sanji's [1960/1961] special in the same turn",
        special: "Changes [G], [BLOCK] and Badly Matching orbs into Matching orbs, reduces Bind and Silence duration by 3 turns and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Tears of Attraction",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    1964: {//Oars
        captain: "Boosts ATK of Powerhouse characters by 2.25x if HP is above ??% at the start of the turn",
        special: "Deals ??x character's ATK in Typeless damage to all enemies, delays all enemies for 1 turn and changes adjacent orbs into [RCV] orbs",
        specialName: "Gomu Gomu no Butt Stomp",
    },
    1965: {//Oars
        captain: "Boosts ATK of Powerhouse characters by 2.75x if HP is above 70% at the start of the turn",
        special: "Deals ??x character's ATK in Typeless damage to all enemies, delays all enemies for 1 turn and changes adjacent orbs into [RCV] orbs",
        specialName: "Gomu Gomu no Butt Stomp",
    },
    1966: {//Hogback
        captain: "Boosts ATK of Cerebral characters by 2.25x and boosts chances of getting [RCV] orbs",
        special: "Boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Affirmative Miracle",
    },
    1967: {//Boa Hancock
        captain: "Boosts amount of Beli received by 2x",
        captainNotes: "Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes [BLOCK], [STR], [DEX], [QCK], [INT] and [PSY] orbs on Shooter and Cerebral characters into Matching orbs. If you are on a Treasure Map, amplifies the effects of orbs for Cerebral and Shooter characters depending on your Treasure Map Level for 1 turn",
        specialName: "An Important Confession from the Snake Princess",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
    },
    1968: {//Boa Hancock
        captain: "Boosts amount of Beli received by 3x",
        captainNotes: "Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes [BLOCK], [STR], [DEX], [QCK], [INT] and [PSY] orbs on Shooter and Cerebral characters into Matching orbs. If you are on a Treasure Map, amplifies the effects of orbs for Cerebral and Shooter characters depending on your Treasure Map Level for 1 turn",
        specialName: "An Important Confession from the Snake Princess",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
    },
    1969: {//Miss Valentine
        captain: "Boosts HP of [DEX] characters by 1.5x and their RCV by 1.2x.",
        special: "Reduces Paralysis and Despair duration by 3 turns. Cuts the current HP of one enemy by 10%",
        specialName: "10,000 Kilo Guillotine - Cake Slice",
    },
    1970: {//Miss Valentine
        captain: "Boosts HP of [DEX] characters by 2x and their RCV by 1.5x.",
        special: "Reduces Paralysis and Despair duration by 3 turns. Cuts the current HP of one enemy by 10%",
        specialName: "10,000 Kilo Guillotine - Cake Slice",
    },
    1971: {//Sabo
        captain: "Boosts ATK of Cerebral characters by 1.3x and their HP and RCV by 1.05x and boosts chain by 1.1x if HP is above 70% or below 30% at the start of the turn",
        special: "If your Captain is a Cerebral character, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Cerebral characters into Matching orbs, reduces the defense of all enemies by 80% and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Blissful Selection",
    },
    1972: {//Sabo
        captain: {
            "base": "Boosts ATK of Cerebral characters by 1.5x and their HP and RCV by 1.05x and boosts chain by 1.2x if HP is above 70% or below 30% at the start of the turn",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Boosts ATK of Cerebral characters by 2.25x and their HP and RCV by 1.2x and boosts chain by 1.5x if HP is above 70% or below 30% at the start of the turn",
        },
        special: "If your Captain is a Cerebral character, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Cerebral characters into Matching orbs, reduces the defense of all enemies by 80% and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Blissful Selection",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Cerebral characters by 30",
            "level2": "Makes [DEX] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Cerebral characters by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 100",
                    "Level 2: Boosts base ATK by 150",
                    "Level 3: Boosts base ATK by 200",
                    "Level 4: Boosts base ATK by 250",
                    "Level 5: Boosts base ATK by 300"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1973: {//Hawkins
        captain: "Boosts ATK of Cerebral characters by 2.5x and makes [STR] orbs \"beneficial\" to Cerebral characters",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 10% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 2 turns",
                "cooldown": [ 14, 9 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 15% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 5 turns",
                "cooldown": [ 17, 12 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 20% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration completely",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialName: "Raging Strike",
        specialNotes: "#{stages}",
        sailor: "Boosts base ATK of Cerebral characters by 75",
    },
    1974: {//Hawkins
        captain: "Boosts ATK of Cerebral characters by 3.25x if they have a matching orb, by 2.5x otherwise and makes [STR] orbs \"beneficial\" to Cerebral characters",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 10% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 2 turns",
                "cooldown": [ 14, 9 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 15% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 5 turns",
                "cooldown": [ 17, 12 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 20% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration completely",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialName: "Raging Strike",
        specialNotes: "#{stages}",
        sailor: {
            "base": "Boosts base ATK of Cerebral characters by 75",
            "level1": "Adds 2x character's ATK as Additional Typeless Damage",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Adds 2x character's ATK as Additional Typeless Damage" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 120"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1975: {//X Drake
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn",
        special: "Deals 50x character's ATK in [QCK] damage to one enemy, changes own orb into [QCK] and locks all orbs for 1 turn. If HP above 70% then changes [RCV], [TND], [EMPTY], [BOMB] and [BLOCK] orbs into matching orbs and if HP below 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt 「개」",
        sailor: "When HP is below 30% at the start of the turn, boosts base ATK of all characters by 40",
    },
    1976: {//X Drake
        captain: "Boosts ATK of all characters by 2.5x if HP is below 30% at the start of the turn",
        special: "Deals 50x character's ATK in [QCK] damage to one enemy, changes own orb into [QCK] and locks all orbs for 1 turn. If HP above 70% then changes [RCV], [TND], [EMPTY], [BOMB] and [BLOCK] orbs into matching orbs and if HP below 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt 「개」",
        sailor: "When HP is below 30% at the start of the turn, boosts base ATK of all characters by 40",
    },
    1977: {//Rayleigh
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Free Spirit and Slasher characters by 2x",
        special: "Cuts the current HP of one enemy by 20%, reduces Bind and Silence duration by 3 turns, boosts chances of getting [DEX], [PSY] and [INT] orbs for 3 turns and makes [DEX], [PSY] and [INT] orbs \"beneficial\" to Free Spirit characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Unabated Surge",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    1978: {//Rayleigh
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Free Spirit and Slasher characters by 2.5x",
        special: "Cuts the current HP of one enemy by 20%, reduces Bind and Silence duration by 3 turns, boosts chances of getting [DEX], [PSY] and [INT] orbs for 3 turns and makes [DEX], [PSY] and [INT] orbs \"beneficial\" to Free Spirit characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Unabated Surge",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Boosts base ATK of Free Spirit characters by 35",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Free Spirit characters by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: [QCK] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
        ],
    },
    1979: {//Capone
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Reduces Special Cooldown of Shooter specials by 1 turn and changes orbs in the top row into Matching orbs",
        specialName: "Angry Threatening Command",
    },
    1980: {//Capone
        captain: "Boosts HP of Shooter characters by 1.2x and boosts ATK of Shooter characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Reduces Special Cooldown of Shooter specials by 1 turn and changes orbs in the top row into Matching orbs",
        specialName: "Angry Threatening Command",
    },
    1981: {//Bonney
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Changes [RCV] orbs into matching orbs and recovers 15x character's RCV in HP at the end of the turn for 2 turns",
        specialName: "Glutonous Meal",
    },
    1982: {//Bonney
        captain: "Boosts RCV of Fighter characters by 1.2x and boosts ATK of Fighter characters by 2.25x if HP is above ??% at the start of the turn, by 2x otherwise",
        special: "Changes [RCV] orbs into matching orbs and recovers 15x character's RCV in HP at the end of the turn for 2 turns",
        specialName: "Glutonous Meal",
    },
    1983: {//Smoker&Tashigi
        captain: {
            "character1": "Boosts ATK of [INT] and [PSY] characters by 2.5x, reduce damage received by 7% and makes [INT] and [PSY] orbs \"beneficial\" to [INT] and [PSY] characters",
            "character2": "Boosts ATK of [INT] and [PSY] characters by 2.5x and recovers 300 HP at end of each turn",
            "combined": "Boosts ATK of [INT] and [PSY] characters by 2.75x, reduce damage received by 7%, recovers 1,000 HP at end of each turn and makes [TND], [INT] and [PSY] orbs \"beneficial\" to [INT] and [PSY] characters"
        },
        captainNotes: "#{beneficial}",
        special: "Deals 5,000 fixed damage to one enemy, changes own orb into a Matching orb, reduces damage received by 50% for 1 turn, boosts ATK of [PSY] and [INT] characters by 1.5x for 1 turn and becomes Smoker & Tashigi for 2 turns",
        specialNotes: "Change Action: When Change is activated, Recovers 2x character's RCV",
        specialName: "White Slash",
        sailor: {
            "character1": "Boosts base ATK of [INT] and [PSY] characters by 50",
            "character2": "Boosts base RCV of [INT] and [PSY] characters by 30",
            "combined": "Boosts base ATK, HP and RCV of [INT] and [PSY] characters by 75"
        },
    },
    1984: {//Luffy&Ace
        captain: {
            "character1": "Boosts ATK of Free Spirit characters by 3x and their HP by 1.2x and reduce damage received by 15%",
            "character2": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK of Free Spirit characters by 3.5x if they have a matching orb, by 2.25x otherwise",
            "combined": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK of Free Spirit characters by 4.25x if they have a matching orb, by 3x otherwise and reduce damage received by 20%"
        },
        special: "Deals 75x character's ATK in typeless damage to all enemies, changes [STR], [DEX], [QCK], [INT], and [PSY] orbs on Free Spirit characters into Matching orbs, amplifies the effect of orbs by 2x for 1 turn and becomes Luffy & Ace for 3 turns",
        specialNotes: "Change Action: When Change is activated, this character removes all Despair, Paralysis, and Slot Bind on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb",
        specialName: "Brotherly Bond",
        sailor: {
            "character1": "Makes [QCK] orbs \"beneficial\" for Free Spirit characters",
            "character2": "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
            "combined": "Boosts base ATK, HP and RCV of Free Spirit characters by 150"
        },
        sailorNotes: "#{beneficial}",
    },
    1985: {//Luffy&Ace
        captain: {
            "character1": "Boosts ATK of Free Spirit characters by 3x and their HP by 1.2x and reduce damage received by 15%",
            "character2": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK of Free Spirit characters by 3.5x if they have a matching orb, by 2.25x otherwise",
            "combined": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK of Free Spirit characters by 4.25x if they have a matching orb, by 3x otherwise and reduce damage received by 20%"
        },
        special: "Deals 75x character's ATK in typeless damage to all enemies, changes [STR], [DEX], [QCK], [INT], and [PSY] orbs on Free Spirit characters into Matching orbs, amplifies the effect of orbs by 2x for 1 turn and becomes Luffy & Ace for 3 turns",
        specialNotes: "Change Action: When Change is activated, this character removes all Despair, Paralysis, and Slot Bind on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb",
        specialName: "Brotherly Bond",
        sailor: {
            "character1": "Makes [QCK] orbs \"beneficial\" for Free Spirit characters",
            "character2": "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
            "combined": "Boosts base ATK, HP and RCV of Free Spirit characters by 150",
            "level1": "Makes [TND] and [RCV] orbs \"beneficial\" for Free Spirit characters"
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] and [RCV] orbs \"beneficial\" for Free Spirit characters" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    1986: {//Marco
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.2x. Recovers 2x character's RCV in HP at the end of each turn.",
        special: [
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 3 turns, reduces damage received by 50% for 1 turn. If your crew has 3 or more [STR] characters, adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 5 turns, reduces damage received by 90% for 1 turn. If your crew has 3 or more [STR] characters, adds .75x to Chain multiplier for 1 turn",
                "cooldown": [ 20, 14 ],
            },
        ],
        specialName: "Establishing an Oath of Immortality",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
    },
    1987: {//Marco
        captain: "Boosts ATK of Fighter characters by 2.5x and their RCV by 1.3x. Recovers 3x character's RCV in HP at the end of each turn.",
        special: [
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 3 turns, reduces damage received by 50% for 1 turn. If your crew has 3 or more [STR] characters, adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 5 turns, reduces damage received by 90% for 1 turn. If your crew has 3 or more [STR] characters, adds .75x to Chain multiplier for 1 turn",
                "cooldown": [ 20, 14 ],
            },
        ],
        specialName: "Establishing an Oath of Immortality",
        sailor: {
            "base": "Boosts amount healed from [RCV] orbs by 150 each",
            "level1": "Makes [TND] and [RCV] orbs \"beneficial\" for Free Spirit characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] and [RCV] orbs \"beneficial\" for Free Spirit characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    1988: {//Oars
        captain: "Boosts ATK of Slasher characters by 2.25x and their RCV by 1.2x",
        special: "Cuts the current HP of one enemy by 10% and reduces Paralysis and Silence duration by 3 turns. If your captain is a Slasher Character, boosts ATK against delayed enemies by 1.75x for 2 turns",
        specialName: "Unfaltering Trump Card",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    1989: {//Oars
        captain: "Boosts ATK of Slasher characters by 2.5x and their RCV by 1.5x",
        special: "Cuts the current HP of one enemy by 10% and reduces Paralysis and Silence duration by 3 turns. If your captain is a Slasher Character, boosts ATK against delayed enemies by 1.75x for 2 turns",
        specialName: "Unfaltering Trump Card",
        sailor: {
            "base": "Reduces Paralysis duration by 1 turn",
            "level1": "Boosts base ATK of Slasher and Powerhouse characters by 75",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher and Powerhouse characters by 75" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
    },
    1990: {//Garp
        captain: "Boosts ATK of Free Spirit characters by 2.5x until the first hit other than PERFECT",
        special: "Delays all enemies for 2 turns. If your Captain is a [STR] or [QCK] character, adds 55x character's ATK as Additional Typeless Damage for 1 turn",
        specialName: "An Outcry of Bitterness",
        sailor: "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
        sailorNotes: "#{beneficial}",
    },
    1991: {//Garp
        captain: "Boosts ATK of Free Spirit characters by 2.75x until the first hit other than PERFECT",
        special: "Delays all enemies for 2 turns. If your Captain is a [STR] or [QCK] character, adds 55x character's ATK as Additional Typeless Damage for 1 turn",
        specialName: "An Outcry of Bitterness",
        sailor: {
            "base": "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
            "level1": "Boosts base ATK of Free Spirit characters by 75",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Free Spirit characters by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    1992: {//Coby
        captain: "Boosts ATK of Free Spirit and Fighter characters by 2.25x and reduce damage received by 10%",
        special: [
            {
                "description": "Deals 30x character's ATK in [QCK] damage to one enemy and randomizes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more [QCK] characters, boosts ATK of Free Spirit characters by 1.75x for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Deals 50x character's ATK in [QCK] damage to one enemy and randomizes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more [QCK] characters, boosts ATK of Free Spirit characters by 2x for 1 turn",
                "cooldown": [ 19, 13 ],
            },
        ],
        specialName: "Determined Counterattack",
        sailor: "Boosts base ATK of Free Spirit characters by 50",
    },
    1993: {//Coby
        captain: "Boosts ATK of Free Spirit and Fighter characters by 2.5x and reduce damage received by 15%",
        special: [
            {
                "description": "Deals 30x character's ATK in [QCK] damage to one enemy and randomizes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more [QCK] characters, boosts ATK of Free Spirit characters by 1.75x for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Deals 50x character's ATK in [QCK] damage to one enemy and randomizes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more [QCK] characters, boosts ATK of Free Spirit characters by 2x for 1 turn",
                "cooldown": [ 19, 13 ],
            },
        ],
        specialName: "Determined Counterattack",
        sailor: {
            "base": "Boosts base ATK of Free Spirit characters by 50",
            "level1": "Makes [QCK] orbs \"beneficial\" for Free Spirit characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Free Spirit characters" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    1994: {//FN Marco
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Changes adjacent orbs into [RCV] orbs, reduces Paralysis and Despair duration by 2 turns and reduces damage received by 40% for 1 turn",
        specialName: "Sharing Vigorous Inspiration",
    },
    1995: {//FN Marco
        captain: "Boosts ATK of Fighter characters by 2.25x and reduce damage received by 5%",
        special: "Changes adjacent orbs into [RCV] orbs, reduces Paralysis and Despair duration by 2 turns and reduces damage received by 40% for 1 turn",
        specialName: "Sharing Vigorous Inspiration",
    },
    1996: {//FN Vista
        captain: "Boosts ATK of Slasher characters by 1.75x",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, randomizes own non-matching orb, including [BLOCK] orbs, and delays all enemies for 1 turn",
        specialName: "Fast Revolving Strike",
    },
    1997: {//FN Vista
        captain: "Reduces cooldown of Slasher specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2.475x after scoring 3 Greats in a row, by 2.25x otherwise.",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, randomizes own non-matching orb, including [BLOCK] orbs, and delays all enemies for 1 turn",
        specialName: "Fast Revolving Strike",
    },
    1998: {//Sanji
    },
    1999: {//Zoro
    },
    2000: {//TM Sanji & Zoro
        captain: {
            "character1": "Reduces cooldown of all specials by 2 turns at the start of the fight. Boosts ATK of [PSY] characters by 2.75x and boosts ATK of [DEX] characters by 2x",
            "character2": "Reduces cooldown of all specials by 2 turns at the start of the fight. Boosts ATK of [DEX] characters by 2.75x and boosts ATK of [PSY] characters by 2x",
            "combined": "Boosts ATK of [DEX] and [PSY] characters by 3.75x and makes [PSY] and [DEX] orbs \"beneficial\" to [PSY] and [DEX] characters"
        },
        captainNotes: "#{beneficial}",
        special: "Deals 30x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, amplifies the effect of orbs on [PSY] and [DEX] characters by 2.25x for 1 turn and becomes Sanji & Zoro for 1 turn",
        specialNotes: "Change Action: When Change is activated, randomizes all non-matching orbs on [PSY] and [DEX] characters and adds .5x to Chain multiplier for 1 turn<br>#{ignoreBarrier}",
        specialName: "Armée de L'Air Power Shoot",
        sailor: {
            "character1": "Boosts base ATK of [PSY] characters by 30",
            "character2": "Boosts base ATK of [DEX] characters by 30",
            "combined": "Boosts base ATK, HP and RCV of [DEX] and [PSY] characters by 50",
            "level1": "Makes [TND] orbs \"beneficial\" for [DEX] and [PSY] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for [DEX] and [PSY] characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 20% at the start of the turn, heals for 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 25% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 35% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    2001: {//6+ [PSY] Law
        captain: "Boosts Slasher and Free Spirit character's ATK by 2.5x, by 3.5x after 3 consecutive PERFECTs, by 4x after 5 consecutive PERFECTs. Recover 1,000 HP at the end of each turn",
        specialName: "Sterben",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300",
            "level2": "Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit"
        },
        sailorNotes: "#{beneficial}",
        special: "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 100x character's ATK in [PSY] damage to one enemy, reduces Special Cooldown of all characters by 1 turn",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 85" },
            { "description": "Acquire Sailor Ability 2: Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 95" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2002: {//Story Senor Pink
        captain: "Increases damage received by 1.2x. Reduces cooldown of all specials by 2 turns at the start of the fight and boosts ATK of all characters by 2.5x.",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and deals several times character's ATK in Typeless damage to all enemies",
        specialNotes: "#{specialProportional : lower : ??? * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "The Man Standing Tall",
    },
    2003: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2004: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x. If you use \"Bullet Thread\" THIS DOFLAMINGO boosts ATK of Slasher characters by 2.75x instead for 3 turns",
        captainNotes: "Using Doflamingo's special will change his own captain boost to 2.75x. If both Doflamingo's specials are used, the total ATK boost will be 7.5625x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2005: {//Story Sugar
        captain: "Boosts ATK of [PSY] characters by 2.25x, boosts HP of Slasher characters by 1.2x and boosts RCV of Free Spirit characters by 1.2x",
        special: "Deals 40x character's ATK in [PSY] damage to all enemies, boosts chances of getting [PSY] orbs for 3 turns",
        specialName: "Little Black Bears",
    },
    2006: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds .9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
        specialName: "Closing Declaration",
    },
    2007: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds .9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: {
            "base": "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
            "level1": "Makes [PSY] orbs \"beneficial\" all characters",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Closing Declaration",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base HP by 105" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" all characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 60",
                    "Level 2: Boosts base ATK by 90",
                    "Level 3: Boosts base ATK by 120",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 5%",
                    "Level 5: Reduce damage taken from [PSY] characters by 7%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2008: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.2x",
        special: "Cuts the current HP of each enemy by 10%, reduces Special Cooldown of your top row by 2 turns and boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2009: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.5x and their HP by 1.2x",
        special: "Cuts the current HP of each enemy by 10%, reduces Special Cooldown of your top row by 2 turns and boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2010: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.2x",
        special: "Deals 50,000 fixed damage to one enemy and reduces Bind and enemy's Threshold Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2011: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Deals 50,000 fixed damage to one enemy and reduces Bind and enemy's Threshold Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2012: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2x otherwise, boosts chances of getting [RCV] orbs and reduces RCV of all characters by 80%",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP, and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN, Silence, and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2013: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2.25x otherwise, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to Free Spirit characters and reduces RCV of all characters by 80%",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP, and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN, Silence, and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Makes [RCV] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{silence}<br>#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for all characters" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    2014: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 2.75x instead and boosts ATK of all other characters by 1.2x",
        special: "Deals 100x character's ATK in [INT] damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
    },
    2015: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 100x character's ATK in [INT] damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 100",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 55" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Fighter characters by 100" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    2016: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 20x Character's ATK in [PSY] damage to all enemies and changes [BLOCK] orbs into Matching orbs. If HP is above 50% at the time the special is activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive 「개」",
    },
    2017: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2.25x and boosts HP of Striker and Slasher characters by 1.5x",
        special: "Deals 20x Character's ATK in [PSY] damage to all enemies and changes [BLOCK] orbs into Matching orbs. If HP is above 50% at the time the special is activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive 「개」",
    },
    2018: {//FN Shanks
        captain: "Boosts ATK of Free Spirit characters by 1.75x",
        special: "Reduces Bind and Despair duration by 2 turns, if the captain is a Free Spirit Character changes [BLOCK] orbs into matching orbs",
        specialName: "Treasured Trust",
    },
    2019: {//FN Shanks
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.2x at the start of the chain, by 2.6x after the 3rd PERFECT in a row",
        special: "Reduces Bind and Despair duration by 2 turns. If your Captain is a Free Spirit character, changes [BLOCK] orbs into Matching orbs",
        specialName: "Treasure Trust",
    },
    2020: {//Makino
        captain: "Boosts ATK of [PSY] and [INT] characters by 1.5x",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2021: {//Makino
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x if they have a matching orb, by 1.75x otherwise and their HP by 1.2x",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2022: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many PERFECTs scored that turn.",
        captainNotes: "End of turn damage is based on how many PERFECTs you hit this turn: 0 PERFECTs - 0x ATK; 1 PERFECT - 5x ATK; 2 PERFECTs - 13x ATK; 3 PERFECTs - 32x ATK; 4 PERFECTs - 80x ATK; 5 PERFECTs - 200x ATK; 6 PERFECTs - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
    },
    2023: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many PERFECTs scored that turn.",
        captainNotes: "End of turn damage is based on how many PERFECTs you hit this turn: 0 PERFECTs - 0x ATK; 1 PERFECT - 5x ATK; 2 PERFECTs - 13x ATK; 3 PERFECTs - 32x ATK; 4 PERFECTs - 80x ATK; 5 PERFECTs - 200x ATK; 6 PERFECTs - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of [STR] and [INT] characters by 100",
            "level2": "Makes [PSY] and [QCK] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of [STR] and [INT] characters by 100" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 35" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] and [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 5%",
                    "Level 5: Reduce damage taken from [PSY] characters by 7%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    2024: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs \"beneficial\" to [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        captainNotes: "#{beneficial}",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
    },
    2025: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs \"beneficial\" to [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        captainNotes: "#{beneficial}",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP and ATK of [QCK] and [PSY] characters by 100",
            "level2": "Makes [STR] and [INT] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP and ATK of [QCK] and [PSY] characters by 100" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [STR] and [INT] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    2026: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] by 2x for 1 turn",
        specialNotes: "#{colorAffinity : 2}",
        specialName: "Kimino Sleeve Cage: Lock",
        sailor: "Boosts base ATK of [PSY] and [QCK] characters by 50",
    },
    2027: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] by 2x for 1 turn",
        specialNotes: "#{colorAffinity : 2}",
        specialName: "Kimino Sleeve Cage: Lock",
        sailor: {
            "base": "Boosts base ATK of [PSY] and [QCK] characters by 50",
            "level1": "If this character has a [PSY] orb and you hit a PERFECT with her, keep her [PSY] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: If this character has a [PSY] orb and you hit a PERFECT with her, keep her [PSY] orb for the next turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ]
    },
    2028: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] characters by 2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orbs \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: "Makes [DEX] orbs \"beneficial\" for this character",
        sailorNotes: "#{beneficial}",
    },
    2029: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] characters by 2.5x and their HP by 1.2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orbs \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: {
            "base": "Makes [DEX] orbs \"beneficial\" for this character",
            "level1": "Makes [QCK] orbs \"beneficial\" for [PSY] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for [PSY] characters" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 25% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 35% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    2030: {//Brannew
        captain: "Boosts ATK of [STR] and [INT] characters by 2x",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to [STR] and [INT] characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Reporting on a Bizarre Incident",
        sailor: "Boosts base ATK, HP and RCV for [INT] characters by 50",
    },
    2031: {//Brannew
        captain: "Boosts ATK of [STR] and [INT] characters by 2.5x and reduces damage received by 7%",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to [STR] and [INT] characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Reporting on a Bizarre Incident",
        sailor: {
            "base": "Boosts base ATK, HP and RCV for [INT] characters by 50",
            "level1": "Boosts base ATK of Slasher characters by 30",
        },
        limit: [
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Shooter characters by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2032: {//Luffy Tankman
        captain: "Boosts ATK and HP of [PSY] characters by 0.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2033: {//Luffy Tankman
        captain: "Boosts ATK of [PSY] characters by 2.5x and their HP by 1.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2034: {//Kizaru 6+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x and boosts RCV of all characters by 1.35x. If you use \"Yasakani no Magatama: Divine Light\" boosts ATK of all characters by 3.5x instead.",
        special: [
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 6x character's RCV in HP. Deals 20 hits of random typeless damage to random enemies.",
                "cooldown": [ 9, 6 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 15x character's RCV in HP. Deals 20 hits of large random typeless damage to random enemies.",
                "cooldown": [ 15, 12 ],
            },
        ],
        specialNotes: "#{randomHits : 20}<br>#{random : ??? : ??? : for each hit on Stage 1}<br>#{random : ??? : ??? : for each hit on Stage 2}<br>#{stages}",
        specialName: "Yasakani no Magatama: Divine Light",
    },
    2035: {//Buggy 6+
        captain: "Boosts ATK of characters with cost 40 or less by 1.75x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts ATK of characters with cost 40 or less by 2x for 2 turns",
        specialName: "The Greatest Villain's Bluff",
    },
    2036: {//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: "Cuts the current HP of each enemy by 7% and boosts ATK of Fighter characters by 1.75x for a variable amount of turns",
        specialNotes: "Fighter ATK buff duration is equal to the amount of enemies on the stage at the time the special was activated",
        specialName: "Galleon Lariat",
    },
    2037: {//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.5x at the start of the chain, by 3.75x after scoring 4 PERFECTs in a row.",
        special: "Cuts the current HP of each enemy by 7% and boosts ATK of Fighter characters by 1.75x for a variable amount of turns",
        specialNotes: "Fighter ATK buff duration is equal to the amount of enemies on the stage at the time the special was activated",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 50",
            "level2": "Makes [INT] orbs \"beneficial\" for Fighter characters",
        },
        specialName: "Galleon Lariat",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Fighter characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for Fighter characters" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2038: {//Boa Hancock
        captain: "Boosts ATK of [QCK] and Free Spirit characters by 1.5x",
        captainNotes: "Attack boost stacks, so a [QCK] Free Spirit character has a 2.25x ATK",
        special: "Recovers 3,960 HP, reduces enemies ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        specialName: "Glorious Scenery",
    },
    2039: {//Boa Hancock
        captain: "Boosts ATK of [QCK] and Free Spirit characters by 1.75x",
        captainNotes: "Attack boost stacks, so a [QCK] Free Spirit character has a 3.0625x ATK",
        special: "Recovers 3,960 HP, reduces enemies ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Glorious Scenery",
    },
    2040: {//Whitebeard
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Randomizes all orbs, into either [G] or [RCV] orbs and boosts own ATK by 2.25x. If your Captain is a Fighter character, locks orbs for 1 turn.",
        sailor: {
            "base": "Makes [RCV] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
            "base2": "Boosts base ATK, HP and RCV of Fighter characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "The Gentle Breeze of the Feast",
    },
    2041: {//Whitebeard
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.25x and their HP and RCV by 1.25x",
        special: "Randomizes all orbs, into either [G] or [RCV] orbs and boosts own ATK by 2.25x. If your Captain is a Fighter character, locks orbs for 1 turn.",
        sailor: {
            "base": "Makes [RCV] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
            "base2": "Boosts base ATK, HP and RCV of Fighter characters by 40",
        },
        specialName: "The Gentle Breeze of the Feast",
    },
    2042: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit and Shooter characters by 1.75x",
        special: "If your crew has 2 or more characters of the same Type, reduces Special Cooldown of characters of that Type by 1 turn and changes adjacent orbs into Matching Orbs",
        specialNotes: "How the Cooldown Reduction works exactly is not tested.",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
        specialName: "The Afterglow of a Fight",
    },
    2043: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit and Shooter characters by 2.25x and their HP by 1.2x",
        special: "If your crew has 2 or more characters of the same Type, reduces Special Cooldown of characters of that Type by 1 turn and changes adjacent orbs into Matching Orbs",
        specialNotes: "How the Cooldown Reduction works exactly is not tested.",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
        specialName: "The Afterglow of a Fight",
    },
    2044: {//Ben Beckman
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Cerebral characters by 1.5x",
        special: "Boosts ATK of Cerebral characters by 1.5x for 1 turn and reduces Special Cooldown of Cerebral characters by 1 turn",
        specialName: "Intense Gun Strike",
    },
    2045: {//Lucky Roux
        captain: "Boosts ATK of Shooter characters by 1.75x and recovers 1x character's RCV in HP at the end of each turn",
        special: "Recovers 3x character's RCV in HP after the end of each turn for 10 turns",
        specialName: "Constantly Eating Meat",
    },
    2046: {//Yasopp
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.2x",
        special: "Deals 20x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers. If your crew has 4 or more characters of the same Type, amplifies the effect of orbs for the Dominant Type by 1.75x for 1 turn.",
        sailor: "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
        specialName: "Exquisite Aim",
    },
    2047: {//Koala
        captain: "Boosts ATK of Fighter characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Deals 20x character's ATK in [QCK] damage to all enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn and changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Fishman Karate Mid-Air Roundhouse Kick",
        sailor: "Boosts own base ATK by 250 if this character is the last in the chain to attack",
    },
    2048: {//Koala
        captain: "Boosts ATK of Fighter characters by 3.25x if they have a matching orb, by 2x otherwise",
        special: "Deals 20x character's ATK in [QCK] damage to all enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn and changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Fishman Karate Mid-Air Roundhouse Kick",
        sailor: {
            "base": "Boosts own base ATK by 250 if this character is the last in the chain to attack",
            "level1": "Makes [QCK] orbs \"beneficial\" for Fighter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Fighter characters" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
         ],
        potentialNotes: "#{enrage}"
    },
    2049: {//Moria
        captain: "Boosts ATK of Powerhouse and Fighter characters by 3x, reduces crew's current HP by ?% at the end of each turn, reduces his own ATK multiplier by ?x at the end of each turn",
        special: "Locks the chain multiplier at 3x for 1 turn and reduces Increase Damage Taken duration by 5 turns. If enemies are delayed at the time the special was activated, deals 1,000,000 fixed damage to all enemies",
        specialName: "Resurrected Nightmare Attack",
        sailor: "Makes [INT] orbs \"beneficial\" for Powerhouse characters",
        sailorNotes: "#{beneficial}",
    },
    2050: {//Moria
        captain: "Boosts ATK of Powerhouse and Fighter characters by 3.5x, reduces crew's current HP by ?% at the end of each turn, reduces his own ATK multiplier by ?x at the end of each turn",
        special: "Locks the chain multiplier at 3x for 1 turn and reduces Increase Damage Taken duration by 5 turns. If enemies are delayed at the time the special was activated, deals 1,000,000 fixed damage to all enemies",
        specialName: "Resurrected Nightmare Attack",
        sailorNotes: "#{beneficial}",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for Powerhouse characters",
            "level1": "If your Captain is a Powerhouse character, completely resists Blindness",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: If your Captain is a Powerhouse character, completely resists Blindness" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 9 turns at the start of the fight"
                ]
            },
        ]
    },
    2051: {//Pica
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2x and reduces damage received by 5%",
        special: "Deals 35x character's ATK in [QCK] damage to one enemy and boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead.",
        specialName: "Bitestone",
    },
    2052: {//Pica
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2.5x and their HP by 1.2, and reduces damage received by 10%",
        special: "Deals 35x character's ATK in [QCK] damage to one enemy and boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead.",
        specialName: "Bitestone",
    },
    2053: {//Bastille
        captain: "Boosts ATK of [INT] characters by 2.5x",
        special: "Deals 75x character's ATK in [INT] damage to all enemies",
        specialName: "Double Edge Long Blade Slash",
    },
    2054: {//Headcracker Doll
        captain: "Boosts ATK of all characters by 1.75x, reduces crew's RCV to 0 and protects from defeat as long as HP is above ??%",
        special: "If there are 3 enemies or more on the stage, deals 50,000 fixed damage to all enemies",
        specialName: "Unrelentless Physical Work",
    },
    2055: {//Kyuin
        captain: "Boosts ATK of Powerhouse and Striker characters by 2.25x",
        special: "Cuts the current HP of each enemy by 10% and recovers 10% of crew's MAX HP.",
        specialName: "Cruel Suction",
    },
    2056: {//Ichiji
        captain: "Boosts ATK of Fighter characters by 2.5x and reduces their RCV to 0",
        special: "Deals 15x character's ATK in [INT] damage to one enemy, changes top row orbs into [PSY] orbs and makes [PSY] orbs \"beneficial\" for all characters for 1 turn.",
        specialName: "Scornful Gang Up (First Son)",
        specialNotes: "#{beneficial}",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2057: {//Niji
        captain: "Boosts ATK of Fighter characters by 1.75x and their HP by 1.2x",
        special: "Deals 15x character's ATK in [DEX] damage to one enemy, changes the orbs in the middle row into [PSY] orbs and boosts ATK of characters with 15 cost or less by 1.75x for 1 turn.",
        specialName: "Scornful Gang Up (Second Son)",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2058: {//Yonji
        captain: "Boosts ATK of Fighter characters by 1.25x and their HP by 1.5x",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, changes the orbs in the bottom row into [PSY] orbs and Amplifies the effect of orbs for characters with 15 cost or less by 1.75x for 1 turn.",
        specialName: "Scornful Gang Up (Fourth Son)",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2059: {//Beckman
        captain: "Boosts ATK of Cerebral characters by 1.2x",
        special: "Reduces enemies Increased Defense duration by 3 turns, changes own orb into [STR], amplifies the effect of orbs by 1.5x for 1 turn and locks the chain multiplier depending on your Treasure Map Level for 1 turn",
        specialName: "Trial of Annihilation",
        specialNotes: "Level 1-10: 2.5x chain lock<br\>Level 11-20: 2.75x chain lock<br\>Level 21+: 3x chain lock",
    },
    2060: {//Beckman
        captain: "Boosts ATK of Cerebral characters by 1.5x and their HP by 1.2x",
        special: "Reduces enemies Increased Defense duration by 3 turns, changes own orb into [STR], amplifies the effect of orbs by 1.5x for 1 turn and locks the chain multiplier depending on your Treasure Map Level for 1 turn",
        specialName: "Trial of Annihilation",
        specialNotes: "Level 1-10: 2.5x chain lock<br\>Level 11-20: 2.75x chain lock<br\>Level 21+: 3x chain lock",
    },
    2061: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 1.2x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 4 turns and reduces damage received from [DEX] enemies by 80%",
        specialName: "Noise & Escape",
    },
    2062: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 1.5x and their HP by 1.2x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 4 turns and reduces damage received from [DEX] enemies by 80%",
        specialName: "Noise & Escape",
    },
    2063: {//Kizaru
        captain: "Boosts ATK of [DEX], [PSY] and [INT] characters by 1.5x",
        special: "Cuts the current HP of one enemy by 20%, locks all orbs for 1 turn and boosts ATK of characters with the same Type as your Captain by 1.75x for 3 turns",
        specialName: "Ama no Murakumo",
    },
    2064: {//Kizaru
        captain: {
            "base": "Boosts ATK of [DEX], [PSY] and [INT] characters by 2x",
            "level1": "Boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x",
            "level2": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x",
            "level3": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.1x",
            "level4": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.2x",
            "level5": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.3x",
            "level6": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.5x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.5x",
        },
        special: "Cuts the current HP of one enemy by 20%, locks all orbs for 1 turn and boosts ATK of characters with the same Type as your Captain by 1.75x for 3 turns",
        specialName: "Ama no Murakumo",
        sailor: {
            "base": "None",
            "level1": "Restores his own special by 3 turns when it is rewinded",
            "level2": "Makes [DEX] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{rewind : 1}<br/>#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x" },
            { "description": "Acquire Sailor Ability 1: Restores his own special by 3 turns when it is rewinded" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.1x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.2x" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for all characters" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.3x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.5x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.5x" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 25% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 35% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
         ],
    },
    2065: {//EXP Pudding
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        captainNotes: "EXP and Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes Badly Matching orbs into Matching orbs, randomizes non-matching orbs and recovers 2,000 HP",
        specialName: "Complex Feelings",
    },
    2066: {//6+ Jinbe
        captain: "Boosts ATK of Fighter characters by 3x, their HP by 1.5x and reduces damage received by 7%",
        specialName: "Shark Fist Tile Breaker: Great Earth Wave",
        special: "Deals 60x character's ATK in [INT] damage to all enemies, changes all orbs on Fighter characters into matching orbs and reduces enemy's Percent Damage Reduction and Increased Defense duration by 5 turns.",
    },
    2067: {//Tashigi
        captain: "Boosts ATK of Slasher characters by 2x at the start of the chain, by 2.5x after scoring 3 PERFECTs in a row and recovers 1.25x character's RCV in HP at the end of each turn",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes [BLOCK], [STR] and [QCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns",
        specialName: "Spinning Jump Attack",
        sailor: "Boosts base ATK, HP and RCV for Slasher characters by 50",
    },
    2068: {//Tashigi
        captain: "Boosts ATK of Slasher characters by 2.75x at the start of the chain, by 3.4375x after scoring 3 PERFECTs in a row and recovers 1.25x character's RCV in HP at the end of each turn",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes [BLOCK], [STR] and [QCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns",
        specialName: "Spinning Jump Attack",
        sailor: {
            "base": "Boosts base ATK, HP and RCV for Slasher characters by 50",
            "level1": "Makes [PSY] orbs \"beneficial\" for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for Slasher characters" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 10 turns at the start of the fight"
                ]
            },
        ]
    },
    2069: {//Neo Boa
        captain: "Boosts ATK of Free Spirit characters by 2x",
        specialName: "Slave Arrow 「개」",
        special: "Locks the chain multiplier at 2.5x for 3 turns, delays all enemies for 1 turn and changes own orb and the captain's orb into matching"
    },
    2070: {//Neo Boa
        captain: "Boosts ATK and HP of Free Spirit characters by 2x",
        specialName: "Slave Arrow 「개」",
        special: "Locks the chain multiplier at 2.5x for 3 turns, delays all enemies for 1 turn and changes own orb and the captain's orb into matching"
    },
    2071: {//Anni Chopper
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and Enrage duration by 5 turns, makes [INT], [PSY] and [DEX] orbs \"beneficial\" for all characters for 1 turn and adds .6x to Chain multiplier for 1 turn.",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight",
        specialName: "A Man's Stratagem to Victory",
    },
    2072: {//Anni Chopper
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and Enrage duration by 5 turns, makes [INT], [PSY] and [DEX] orbs \"beneficial\" for all characters for 1 turn and adds .6x to Chain multiplier for 1 turn.",
        specialName: "A Man's Stratagem to Victory",
        sailor: {
            "base": "Changes all orbs into [RCV] orbs at the start of the fight",
            "level1": "Makes [INT] orbs \"beneficial\" for Fighter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs \"beneficial\" for Fighter characters" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 2 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 4 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 5 turns at the start of the fight"
                ]
            },
        ]
    },
    2073: {//V4 Luffy
        captain: "<b>Always Active: </b>Boosts HP of all characters by 1.25x, boosts chances of getting [STR], [QCK], [PSY] orbs.<br><b>Gear 2 Captain: </b>Boosts ATK of all characters by 3x, slightly boosts chances of getting [RCV] orbs and makes [QCK] orbs \"beneficial\" to all characters<br><b>Gear 3 Captain: </b>Boosts ATK of all characters by 3.5x after 2 consecutive PERFECTs, boosts chances of getting [RCV] orbs and makes [STR] orbs \"beneficial\" to all characters<br><b>Gear 4 - Boundman Captain: </b>Boosts ATK of all characters by 4x, reduce damage received by 20%, boosts chances of getting [RCV] orbs and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters<br><b>Gear 4 - Tankman Captain: </b>Boosts own ATK by 4.25x, boosts ATK of all other characters by 4x, reduce damage received by 50% and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters<br><b>Action: </b>Based on how full Gear Power Gauge is, transforms Luffy. If Gear Power is above 50%, change between Gear 2 and Gear 3. If Gear Power is full, change into Gear 4 - Boundman. This can be used an unlimited amount of times per turn.",
        captainnotes: "In order to increase Gear Power Gauge level, you must hit a PERFECT with Luffy or consume [RCV] orbs. MAX Gear Power Gauge level is 8. Hitting a PERFECT with Luffy and consuming a [RCV] orb increases Gauge level by 1. If Luffy gets swapped out in battle, Gear Gauge Power will go to 0. While in Gear 4, Luffy will stay in that form until Gauge Power goes to 0. Attacking with any character while in Gear 4 reduces Gear Power Gauge by 3.",
        special: "Deals 150x character's ATK in Typeless damage to all enemies, boosts ATK of all characters by 2x for 1 turn, makes [RCV] and [TND] orbs \"beneficial\" for all characters for 3 turns. If Luffy is Captain or Friend/Guest Captain, transform into Gear 4",
        specialNotes: "If you use this special after consuming 10 [RCV] orbs since the start of the fight, transform into Tankman, otherwise transform into Boundman",
        specialName: "Gomu Gomu no Kong Organ",
    },
    2074: {//V4 Luffy
        captain: "<b>Always Active: </b>Boosts HP of all characters by 1.25x, boosts chances of getting [STR], [QCK], [PSY] orbs.<br><b>Gear 2 Captain: </b>Boosts ATK of all characters by 3x, slightly boosts chances of getting [RCV] orbs and makes [QCK] orbs \"beneficial\" to all characters<br><b>Gear 3 Captain: </b>Boosts ATK of all characters by 3.5x after 2 consecutive PERFECTs, boosts chances of getting [RCV] orbs and makes [STR] orbs \"beneficial\" to all characters<br><b>Gear 4 - Boundman Captain: </b>Boosts ATK of all characters by 4x, reduce damage received by 20%, boosts chances of getting [RCV] orbs and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters<br><b>Gear 4 - Tankman Captain: </b>Boosts own ATK by 4.25x, boosts ATK of all other characters by 4x, reduce damage received by 50% and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters<br><b>Action: </b>Based on how full Gear Power Gauge is, transforms Luffy. If Gear Power is above 50%, change between Gear 2 and Gear 3. If Gear Power is full, change into Gear 4 - Boundman. This can be used an unlimited amount of times per turn.",
        captainnotes: "In order to increase Gear Power Gauge level, you must hit a PERFECT with Luffy or consume [RCV] orbs. MAX Gear Power Gauge level is 8. Hitting a PERFECT with Luffy and consuming a [RCV] orb increases Gauge level by 1. If Luffy gets swapped out in battle, Gear Gauge Power will go to 0. While in Gear 4, Luffy will stay in that form until Gauge Power goes to 0. Attacking with any character while in Gear 4 reduces Gear Power Gauge by 3.",
        special: "Deals 150x character's ATK in Typeless damage to all enemies, boosts ATK of all characters by 2x for 1 turn, makes [RCV] and [TND] orbs \"beneficial\" for all characters for 3 turns. If Luffy is Captain or Friend/Guest Captain, transform into Gear 4",
        specialNotes: "If you use this special after consuming 10 [RCV] orbs since the start of the fight, transform into Tankman, otherwise transform into Boundman",
        specialName: "Gomu Gomu no Kong Organ",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Boosts base ATK, HP and RCV for this character by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV for this character by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2075: {//Legend Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [DEX] characters by 3.75x and makes [STR] and [QCK] orbs \"beneficial\" to [DEX] characters",
        special: "If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 1 turn and amplifies the effects of orbs for Free Spirit, Cerebral, Powerhouse and Driven characters by 2x for 1 turn",
        specialName: "Weather Egg: Thunderbreed Tempo",
    },
    2076: {//Legend Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [DEX] characters by 3.75x and makes [STR] and [QCK] orbs \"beneficial\" to [DEX] characters",
        special: "If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 1 turn and amplifies the effects of orbs for Free Spirit, Cerebral, Powerhouse and Driven characters by 2x for 1 turn",
        specialName: "Weather Egg: Thunderbreed Tempo",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis on all characters by 1 turn",
            "level2": "Makes [DEX] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis on all characters by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for all characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 2%",
                    "Level 2: Reduce damage taken from [QCK] characters by 3%",
                    "Level 3: Reduce damage taken from [QCK] characters by 4%",
                    "Level 4: Reduce damage taken from [QCK] characters by 5%",
                    "Level 5: Reduce damage taken from [QCK] characters by 7%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ]
    },
    2077: {//Carrot
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Reduces Paralysis and Despair duration by 4 turns, delays all enemies for 1 turn, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs into [PSY] orbs and boosts ATK against enemies with reduced defense by 1.75x for ? turns",
        specialName: "Eleclaw",
        sailor: "Completely resists Paralysis on this character",
    },
    2078: {//Carrot
        captain: "Boosts ATK of Fighter characters by 2.5x and boosts HP of Free Spirit characters by 1.2x",
        special: "Reduces Paralysis and Despair duration by 4 turns, delays all enemies for 1 turn, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs into [PSY] orbs and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Eleclaw",
        sailor: {
            "base": "Completely resists Paralysis on this character",
            "level1": "Boosts base ATK and HP of Fighter characters by 40",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Fighter characters by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2079: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x",
        special: "Deals 8 hits of of 20x character's ATK in typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
    },
    2080: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x and boosts chain multiplier by 1.5x",
        special: "Deals 8 hits of of 20x character's ATK in typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: {
            "base": "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for himself",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for himself" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2081: {//Pedro
        captain: "Boosts ATK of Slasher characters by 2.25x",
        special: "Cuts the current HP of one enemy by 10%. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 1.75x for 1 turn and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Risky Diversion",
        sailor: "Boosts base ATK of Slasher characters by 40",
    },
    2082: {//Pedro
        captain: "Boosts ATK of Slasher characters by 2.5x and reduces damage received by 7%",
        special: "Cuts the current HP of one enemy by 10%. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 1.75x for 1 turn and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Risky Diversion",
        sailor: {
            "base": "Boosts base ATK of Slasher characters by 40",
            "level1": "Makes [DEX] orbs \"beneficial\" for himself",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for himself" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2083: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Removes Poison, changes left column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2084: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.5x and their RCV by 1.2x",
        special: "Removes Poison, changes left column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2085: {//Sanji
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Recovers 3,000 HP, changes right column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and boosts ATK of [DEX], [QCK] and [INT] characters by 1.75x for 1 turn",
        specialName: "A Full Bloom Bright Smile",
    },
    2086: {//Sanji
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.5x and their HP by 1.2x",
        special: "Recovers 3,000 HP, changes right column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and boosts ATK of [DEX], [QCK] and [INT] characters by 1.75x for 1 turn",
        specialName: "A Full Bloom Bright Smile",
    },
    2087: {//Pizza Luffy
        captain: "Boosts ATK of all characters by 2x. If you use \"Gomu Gomu no Octopus Stamp: Banquet\"  boosts ATK of all characters by 2.6x instead.",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, recovers 2,000 HP and adds .5x to Chain multiplier for 1 turn.",
        specialName: "Gomu Gomu no Octopus Stamp: Banquet",
    },
    2088: {//Pizza Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 1.2x",
        special: "Changes [RCV] and [TND] orbs into Matching orbs, amplifies the effect of orbs by 1.5x for 1 turn.",
        specialName: "Kicking in Table Manners",
    },
    2089: {//Pizza Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and reduces damage received by 15%",
        special: "If HP is full at the time the special was activated, reduces Bind duration by 3 turns and boosts ATK of all characters by 1.5x for 1 turn.",
        specialName: "Intoxicating Magic",
    },
    2090: {//Pizza Franky
        captain: "Boosts ATK of [DEX] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Reduces Despair duration by 3 turns, changes adjacent orbs into [RCV] orbs and switches orbs between slots twice",
        specialName: "Cola Party",
    },
    2091: {//Pizza Usopp
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Reduces crew's ATK DOWN and Paralysis duration by 3 turns and delays all enemies for 1 turn",
        specialName: "Humble Words to Excite the Party",
    },
    2092: {//Pizza Zoro
        captain: "Boosts ATK of all characters by 2x. If you use \"One Sword Style: Yakkodori - Banquet\"  boosts ATK of all characters by 2.6x instead.",
        special: "Deals 15x character's ATK in [PSY] damage to all enemies, reduces the defense of all enemies by 50% and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "One Sword Style: Yakkodori - Banquet",
    },
    2093: {//Pizza Chopper
        captain: "Boosts ATK of Fighter and Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Removes Poison and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Overflowing Happiness",
    },
    2094: {//Pizza Brook
        captain: "Boosts ATK of Free Spirit characters by 1.75x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and reduces damage received by 60% for 1 turn",
        specialName: "An Enchanted Bliss that Pierces the Bones",
    },
    2095: {//Pizza Robin
        captain: "Boosts ATK of [INT] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Reduces Blindness duration by 3 turns, boosts chances of getting matching orbs for 3 turns and randomizes non-matching orbs including [BLOCK] orbs.",
        specialName: "Gorgeous Small Break",
    },
    2096: {//Raid Zoro
        captain: "Boosts Slasher and Driven character's ATK by 2.25x, by 2.5x after 2 consecutive PERFECTs, by 2.75x after 5 consecutive PERFECTs.",
        special: "Deals 55x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 5 turns. If HP is full at the time the special was activated, boosts the Color Affinity of Slasher and Driven characters by 2x for 1 turn, by 1.75x for 2 turns otherwise",
        specialName: "One Sword Style: Great Dragon Shock",
        specialNotes: "#{ignoreBarrier}<br>#{colorAffinity : 2}",
        sailor: "If this character has a [QCK] orb and you hit a GOOD or GREAT with him, keep his [QCK] orb for the next turn",
    },
    2097: {//Raid Zoro
        captain: "Boosts Slasher and Driven character's ATK by 2.75x and their HP by 1.2x, by 3x after 2 consecutive PERFECTs, by 3.3x after 5 consecutive PERFECTs.",
        special: "Deals 55x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 5 turns. If HP is full at the time the special was activated, boosts the Color Affinity of Slasher and Driven characters by 2x for 1 turn, by 1.75x for 2 turns otherwise",
        specialName: "One Sword Style: Great Dragon Shock",
        specialNotes: "#{ignoreBarrier}<br>#{colorAffinity : 2}",
        sailor: {
            "base": "If this character has a [QCK] orb and you hit a GOOD or GREAT with him, keep his [QCK] orb for the next turn",
            "level1": "Boosts ATK, HP and RCV of Slasher and Driven characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts ATK, HP and RCV of Slasher and Driven characters by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2098: {//Tesoro
        captain: "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, boosts ATK of all characters by 3.75x, their HP by 1.35x and boosts chances of getting Matching orbs. Boosts ATK of all characters by 4.5 after scoring 4 GREATs in a row. Scoring a PERFECT reduces ATK boost for the next attack by 30%.",
        captainNotes: "Scoring a PERFECT will reduce the ATK boost for the next character in the chain, not for the rest of the battle.",
        special: "Deals 200,000 fixed damage to all enemies, changes top and bottom row orbs into matching orbs and locks the chain multiplier at 3.25x for 1 turn.",
        specialName: "Gon Inferno",
    },
    2099: {//Tesoro
        captain: "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, boosts ATK of all characters by 3.75x, their HP by 1.35x and boosts chances of getting Matching orbs. Boosts ATK of all characters by 4.5 after scoring 4 GREATs in a row. Scoring a PERFECT reduces ATK boost for the next attack by 30%.",
        captainNotes: "Scoring a PERFECT will reduce the ATK boost for the next character in the chain, not for the rest of the battle.",
        special: "Deals 200,000 fixed damage to all enemies, changes top and bottom row orbs into matching orbs and locks the chain multiplier at 3.25x for 1 turn.",
        specialName: "Gon Inferno",
        sailor: {
            "base": "None",
            "level1": "Makes [STR], [DEX], [RCV], [TND] orbs \"beneficial\" for this unit",
            "level2": "Boosts base ATK and HP of Driven and Striker characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [DEX], [RCV], [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 2: [STR] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK and HP of Driven and Striker characters by 50" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 2%",
                    "Level 2: Reduce damage taken from [STR] characters by 3%",
                    "Level 3: Reduce damage taken from [STR] characters by 4%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2100: {//Dice
        captain: "Boosts ATK of Powerhouse characters by 1.75x and [STR] characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 2.1x ATK",
        special: "Cuts the current HP of each enemy by 15% and reduces enemy Barrier duration by 1 turn. If your captain is [STR] or [QCK], Changes own orb into [STR] and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Furious Armored Tank",
        sailor: "If this character has a [STR] orb and you hit a GOOD or GREAT with him, keep his [STR] orb for the next turn",
    },
    2101: {//Dice
        captain: "Boosts ATK of Powerhouse characters by 2.25x and [STR] characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 2.7x ATK",
        special: "Cuts the current HP of each enemy by 15% and reduces enemy Barrier duration by 1 turn. If your captain is [STR] or [QCK], Changes own orb into [STR] and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Furious Armored Tank",
        sailor: {
            "base": "If this character has a [STR] orb and you hit a GOOD or GREAT with him, keep his [STR] orb for the next turn",
            "level1": "Boosts base ATK of all characters by 40",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of all characters by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        
        ],
        potentialNotes: "#{enrage}"
    },
    2102: {//Baccarat
        captain: "Boosts ATK of all characters by 1.2x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Deal 77x character's ATK in typeless damage to all enemies and reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 3 turns. If your captain is [INT] or [QCK], Changes own orb into [INT] and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Lucky Coin of Victory",
        sailor: "If this character has a [INT] orb and you hit a GOOD or GREAT with her, keep her [INT] orb for the next turn",
    },
    2103: {//Baccarat
        captain: "Boosts ATK of all characters by 1.5x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Deal 77x character's ATK in typeless damage to all enemies and reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 3 turns. If your captain is [INT] or [QCK], Changes own orb into [INT] and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Lucky Coin of Victory",
        sailor: {
            "base": "If this character has a [INT] orb and you hit a GOOD or GREAT with her, keep her [INT] orb for the next turn",
            "level1": "Boosts base RCV of all characters by 40",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Boosts base RCV of all characters by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2104: {//Mr. Tanaka
        captain: "Boosts ATK of Free Spirit and Shooter characters by 1.75x and boosts HP of [DEX] characters by 1.2x",
        special: "Deal 40x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers and reduces enemies ATK UP, Increased Defense and Enrage duration by 3 turns. If your captain is [DEX] or [QCK], Changes own orb into [DEX] and adds 40x characters ATK as additional typeless damage for 1 turn",
        specialName: "A Tormenting Show",
        sailor: "If this character has a [DEX] orb and you hit a GOOD or GREAT with him, keep his [DEX] orb for the next turn",
    },
    2105: {//Mr. Tanaka
        captain: "Boosts ATK of Free Spirit and Shooter characters by 2.25x and boosts HP of [DEX] characters by 1.2x",
        special: "Deal 40x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers and reduces enemies ATK UP, Increased Defense and Enrage duration by 3 turns. If your captain is [DEX] or [QCK], Changes own orb into [DEX] and adds 40x characters ATK as additional typeless damage for 1 turn",
        specialName: "A Tormenting Show",
        sailor: {
            "base": "If this character has a [DEX] orb and you hit a GOOD or GREAT with him, keep his [DEX] orb for the next turn",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    2106: {//Carina
        captain: "Boosts ATK of [PSY] characters by 2.25x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, Resilience, End of Turn Damage and Percent Cut Buffs duration by 4 turns, changes adjacent orbs and [BLOCK] orbs into Matching orbs, randomizes non-matching orbs and reduces damage received by 70% for 2 turns.",
        specialName: "The Great Final Act of One's Victory",
        sailor: "If this character has a [PSY] orb and you hit a GOOD or GREAT with her, keep her [PSY] orb for the next turn",
    },
    2107: {//Carina
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [PSY] characters by 2.5x and their RCV by 1.2x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, and Resilience and End of Turn Damage/Percent Cut Buffs duration by 4 turns, changes adjacent orbs and [BLOCK] orbs into Matching orbs, randomizes non-matching orbs and reduces damage received by 70% for 2 turns.",
        specialName: "The Great Final Act of One's Victory",
        sailor: {
            "base": "If this character has a [PSY] orb and you hit a GOOD or GREAT with her, keep her [PSY] orb for the next turn",
            "level1": "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, Changes all orbs into Matching orbs at the start of the fight",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, Changes all orbs into Matching orbs at the start of the fight" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 2%",
                    "Level 2: Reduce damage taken from [INT] characters by 3%",
                    "Level 3: Reduce damage taken from [INT] characters by 4%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
        ]
    },
    2108: {//Big Mom
        captain: "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.2x and cuts the current HP of each enemy by 5% at the end of each turn. Recovers 0.5x character's RCV in HP at the end of each turn.",
        special: "Removes all positive buffs on your team, changes all orbs, including [BLOCK] orbs into [G] orbs, amplifies the effect of orbs by 3x for 1 turn, boosts ATK of all characters by 1.25x for 1 turn and boosts the Color Affinity of all characters by 1.25x for 1 turn",
        specialName: "The Harmony that Interweaves the Souls",
    },
    2109: {//Big Mom
        captain: {
            "base": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 5% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn.",
            "level1": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 6% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn.",
            "level2": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn.",
            "level3": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn.",
            "level4": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn.",
            "level5": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 2x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn.",
            "level6": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 3x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 2x character's RCV in HP at the end of each turn.",
        },
        special: "Removes all positive buffs on your team, changes all orbs, including [BLOCK] orbs into [G] orbs, amplifies the effect of orbs by 3x for 1 turn, boosts ATK of all characters by 1.25x for 1 turn and boosts the Color Affinity of all characters by 1.25x for 1 turn",
        specialName: "The Harmony that Interweaves the Souls",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for this unit",
            "level2": "Cannot be Blown Away",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 6% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn." },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn." },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn." },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn." },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Cannot be Blown Away" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 2x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn." },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 3x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 2x character's RCV in HP at the end of each turn." },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2110: {//Coliseum Kid
        captain: "Boosts ATK of Striker and Shooter characters by 2.25x and deals 3x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Deals 5 hits of random [DEX] damage to random enemies and reduces Special Cooldown of Striker and Shooter specials by 2 turns. If your Captain is a Striker or Shooter character, deals 350x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialNotes: "#{randomHits : 5}",
        specialName: "Electromagnetic Projection Sword",
        sailor: "Boosts base ATK, HP and RCV of [DEX] characters by 20",
    },
    2111: {//Coliseum Kid
        captain: "Boosts ATK of Striker and Shooter characters by 2.5x and deals 5x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Deals 5 hits of random [DEX] damage to random enemies and reduces Special Cooldown of Striker and Shooter specials by 2 turns. If your Captain is a Striker or Shooter character, deals 350x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialNotes: "#{randomHits : 5}",
        specialName: "Electromagnetic Projection Sword",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of [DEX] characters by 20",
            "level1": "Boosts base ATK of Striker characters by 30",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 30" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 11 turns at the start of the fight"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2112: {//Katakuri
        captain: "Boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 1.825x, reduce damage received by 20% and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to all characters. Has a chance to delay all enemies by 1 turn based on damage dealt in previous turn.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>Delay chance is based on damage dealt with normal attacks and does not stack with any other delay specials or effects<br><b>100,000 damage or more:</b> 20% chance to delay<br><b>500,000 damage or more:</b> 50% chance to delay<br><b>1,000,000 damage or more:</b> 100% chance to delay<br><b>2,000,000 damage or more:</b> 100% chance to delay ignoring Delay Debuff Protection",
        special: "Boosts ATK against delayed enemies by 1.75x for Fighter, Striker, Shooter, Cerebral and Powerhouse characters for 2 turns, changes [STR], [QCK], [DEX], [PSY], [INT] and [BLOCK] orbs on Fighter, Striker, Shooter, Cerebral and Powerhouse characters into Matching orbs and reduces Special Cooldown of Fighter, Striker, Shooter, Cerebral and Powerhouse specials by 1 turn",
        specialName: "Peerless Donuts: Mochi Singing Result",
    },
    2113: {//Katakuri
        captain: "Boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 1.825x, reduce damage received by 20% and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to all characters. Has a chance to delay all enemies by 1 turn based on damage dealt in previous turn.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>Delay chance is based on damage dealt with normal attacks and does not stack with any other delay specials or effects<br><b>100,000 damage or more:</b> 20% chance to delay<br><b>500,000 damage or more:</b> 50% chance to delay<br><b>1,000,000 damage or more:</b> 100% chance to delay<br><b>2,000,000 damage or more:</b> 100% chance to delay ignoring Delay Debuff Protection",
        special: "Boosts ATK against delayed enemies by 1.75x for Fighter, Striker, Shooter, Cerebral and Powerhouse characters for 2 turns, changes [STR], [QCK], [DEX], [PSY], [INT] and [BLOCK] orbs on Fighter, Striker, Shooter, Cerebral and Powerhouse characters into Matching orbs and reduces Special Cooldown of Fighter, Striker, Shooter, Cerebral and Powerhouse specials by 1 turn",
        specialName: "Peerless Donuts: Mochi Singing Result",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 50",
            "level2": "Boosts this character's attack against [QCK] characters by 2x",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts this character's attack against [QCK] characters by 2x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
            {
                "Name": "크리티컬 공격",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2114: {//Brulee
        captain: "Boosts ATK and RCV of [PSY] characters by 1.2x and cuts the current HP of each enemy by 10% at the end of each turn",
        special: [
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 3 turns",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 5 turns",
                "cooldown": [ 22, 16 ],
            },
        ],
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Brûlée has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        specialName: "Light Reflecting a Virtual Image",
        sailor: "Makes PSY orbs \"beneficial\" for Cerebral characters",
        sailorNotes: "#{beneficial}",
    },
    2115: {//Brulee
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x and cuts the current HP of each enemy by 15% at the end of each turn",
        special: [
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 3 turns",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 5 turns",
                "cooldown": [ 22, 16 ],
            },
        ],
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Brûlée has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        specialName: "Light Reflecting a Virtual Image",
        sailor: {
            "base": "Makes PSY orbs \"beneficial\" for Cerebral characters",
            "level1": "Reduces Paralysis duration by 1 turn",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "슬롯 봉쇄 내성",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    2116: {//Amande
        captain: "Boosts ATK of Slasher characters by 2.5x and reduces crew's RCV to 0",
        special: [
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 2 turns and cuts the current HP of one enemy by 20%",
                "cooldown": [ 20, 13 ],
            },
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 3 turns and cuts the current HP of one enemy by 50%",
                "cooldown": [ 37, 30 ],
            },
        ],
        specialName: "Slow Ballad",
        sailor: "Makes PSY orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2117: {//Amande
        captain: "Boosts ATK of Slasher characters by 2.75x and reduces crew's RCV to 0",
        special: [
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 2 turns and cuts the current HP of one enemy by 20%",
                "cooldown": [ 20, 13 ],
            },
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 3 turns and cuts the current HP of one enemy by 50%",
                "cooldown": [ 37, 30 ],
            },
        ],
        specialName: "Slow Ballad",
        sailor: {
            "base": "Makes PSY orbs \"beneficial\" for this unit",
            "level1": "Adds 2x character's ATK as Additional Typeless Damage",
        },
        sailorNotes: "#{beneficial} <br> #{additionalDamage : 2x}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Adds 2x character's ATK as Additional Typeless Damage" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
               "Name": "피격 시 공격력 상승",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2118: {//Bobbin
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, Increased Defense and End of Turn Heal duration by 5 turns, crew's ATK DOWN duration by 5 turns and changes adjacent orbs into Matching Orbs.",
        specialName: "Death-Inducing Lullaby",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
        limit: "This character has a limit break."
    },
    2119: {//Bobbin
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.5x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, Increased Defense and End of Turn Heal duration by 5 turns, crew's ATK DOWN duration by 5 turns and changes adjacent orbs into Matching Orbs.",
        specialName: "Death-Inducing Lullaby",
        sailor: {
            "base": "Boosts own base ATK by 350 if this character is the last in the chain to attack",
            "level1": "Reduces Silence duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2120: {//Oven
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.5x and reduces damage received by ?%",
        captainNotes: "The bonus is cumulative. Powerhouse + Fighter characters get a 2.25x bonus",
        special: "If enemies are delayed at the time the special was activated, boost ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 2x for 1 turn, boosts Fighter and Powerhouse characters by 1.75x for 3 turns otherwise.",
        specialName: "Grilled Scorch Blow",
        sailor: "Boosts this character's attack against [STR] characters by 2x",
    },
    2121: {//Oven
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.65x and reduces damage received by 7%",
        captainNotes: "The bonus is cumulative. Powerhouse + Fighter characters get a 2.7225x bonus",
        special: "If enemies are delayed at the time the special was activated, boost ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 2x for 1 turn, boosts Fighter and Powerhouse characters by 1.75x for 3 turns otherwise.",
        specialName: "Grilled Scorch Blow",
        sailor: {
            "base": "Boosts this character's attack against [STR] characters by 2x",
            "level1": "Reduces Silence duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    2122: {//Neptune
        captain: "Boosts ATK of all characters by ?x, EXP gained by ?x and recovers ?x character's RCV in HP at the end of each turn",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs by 5 turns. Reduces the defense of all enemies by ?% and amplifies the effect of orbs by 1.75x for Cerebral and Powerhouse characters for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Cerebral characters by 75",
        specialName: "Great Ocean Current of Resuscitation",
    },
    2123: {//Neptune
        captain: "Boosts ATK of all characters by 2x, EXP gained by 1.5x and recovers 5x character's RCV in HP at the end of each turn",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs by 5 turns. Reduces the defense of all enemies by ?% and amplifies the effect of orbs by 1.75x for Cerebral and Powerhouse characters for 3 turns",
        specialName: "Great Ocean Current of Resuscitation",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Cerebral characters by 50",
            "level1": "When any other character uses a special, reduces own cooldown by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: When any other character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by ? turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below ?% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below ?% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below ?% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below ?% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below ?% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    2127: {//Brulee
        captain: "Boosts RCV of Cerebral characters by 1.2x and boosts ATK of Cerebral characters by 2.75x if they have a matching orb, by 1.75x otherwise",
        special: "Reduces Bind duration by 2 turns and amplifies the effect of orbs for Cerebral characters by 1.5x and boosts ATK of Cerebral characters by 1.5x for 1 turn.",
        specialName: "The Witch's Meal",
    },
    2128: {//Randolph
        captain: "Boosts ATK of DEX characters by 2x and boosts chain multiplier by 1.2x",
        special: "Reduces Special Cooldown of your right column by 1 turn and makes [DEX] and [RCV] orbs \"beneficial\" for Slasher and Striker characters for 1 turn",
        specialName: "Cutting Lifelines",
    },
    2129: {//Noble Croc
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Boosts ATK of all characters by 1.2x for 3 turns",
        specialName: "Anticipation of Unknown Food",
    },
    2130: {//Diesel
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and changes the captain's orb into a Matching orb",
        specialName: "The Fast Runner's Emergency Report",
    },
    2131: {//Ivankov
        captain: "Boosts ATK of Cerebral characters by 1.2x",
        special: "Removes Poison and reduces Paralysis duration by 4 turns. If you are on a Treasure Map, boosts ATK of Fighter, Shooter and Cerebral characters depending on your Treasure Map Level for 1 turn",
        specialName: "Laser Treatment Fist",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2132: {//Ivankov
        captain: "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.2x",
        special: "Removes Poison and reduces Paralysis duration by 4 turns. If you are on a Treasure Map, boosts ATK of Fighter, Shooter and Cerebral characters depending on your Treasure Map Level for 1 turn",
        specialName: "Laser Treatment Fist",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2133: {//Jozu
        captain: "Boosts ATK of Powerhouse characters by 1.2x",
        special: "Reduces crew's ATK DOWN duration by 3 turns, makes [PSY] orbs \"beneficial\" for all characters for 3 turns and locks all orbs for 1 turn",
        specialName: "Destory - Charge",
    },
    2134: {//Jozu
        captain: "Boosts ATK of Powerhouse characters by 1.5x and their HP by 1.2x",
        special: "Reduces crew's ATK DOWN duration by 3 turns, makes [PSY] orbs \"beneficial\" for all characters for 3 turns and locks all orbs for 1 turn",
        specialName: "Destory - Charge",
    },
    2135: {//Mr. 1
        captain: "Boosts ATK of [QCK] characters by 1.3x",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, changes own orb into [QCK] and amplifies the effect of orbs for [QCK] characters by 1.75x for 1 turn",
        specialName: "Sparkling Daisy",
    },
    2200: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 2.5x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },
    5012: {//Doflamingo Raid v2 :: modified
        captain: "야심형과 박식형 캐릭터의 공격력을 1.5배, 남은 체력이 50% 이하일 때는 3배로 만든다",
        special: "일당의 속성 일치 슬롯 이외의 슬롯을 랜덤으로 바꾸고([BLOCK] 슬롯도 포함), 슬롯을 1턴 고정시키며, 선장이 박식형 또는 야심형일 경우, 필살기 발동 시 일당에 걸려 있는 공격력 상승 및 슬롯 영향 증폭 효과를 2턴 연장한다",
        specialName: "애슬리트",
    },
};
