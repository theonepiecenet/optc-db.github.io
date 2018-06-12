var GA_ID = "UA-120726319-1";

function typeConvert(type)
{
  var temp = "";
  switch(type){      
    case "힘" : temp = "STR";break;
    case "기술" : temp = "DEX";break;
    case "지능" : temp = "INT";break;
    case "마음" : temp = "PSY";break;
    case "속도" : temp = "QCK";break;
    default: temp = type;break;
  }
  return temp;
}

function typeReverse(type)
{
  var temp = [];
  var temp_type  = type.split(",");
  for(i=0;i<temp_type.length;i++)
  {    
    switch(temp_type[i]){
      case "STR" : temp.push("힘");break;
      case "DEX" : temp.push("기술");break;
      case "INT" : temp.push("지능");break;
      case "PSY" : temp.push("마음");break;
      case "QCK" : temp.push("속도");break;
      default: temp.push(type);break;
    }
  }
  temp = temp.join(",");
  return temp;  
}

function classConvert(cls)
{
  var temp = "";
  switch(cls) {
    default: temp = cls; break;
  }
  return temp;
}
function classReverse(cls)
{
  var temp = [];
  var temp_cls = cls.split(",");
  for(i=0;i<temp_cls.length;i++)
  {
    switch(temp_cls[i].trim()) {
      case "Fighter" : temp.push("격투");break;
      case "Shooter" : temp.push("사격");break;
      case "Free Spirit" : temp.push("자유");break;
      case "Slasher" : temp.push("참격");break;
      case "Driven" : temp.push("야심");break;
      case "Striker" : temp.push("타격");break;
      case "Cerebral" : temp.push("박식");break;
      case "Powerhouse" : temp.push("강인");break;
      case "Driven" : temp.push("야심");break;
      case "Evolver" : temp.push("진화용");break;
      case "Booster" : temp.push("강화용");break;
      default: temp.push(cls); break;    
    }
  }
  temp = temp.join(", ");
  return temp;
}


var lang = {
    0: {
        name : "몽키 D. 루피",
    },
    1: {
        name : "몽키 D. 루피 고무고무 총",
        special : "적 1명에게 캐릭터의 공격력 5배의 [힘] 데미지",
        specialName : "고무고무 펀치"
    },
    2: {
        name : "몽키 D. 루피 고무 고무 바주카",
        special: "적 1명에게 캐릭터의 공격력 7배의 [힘] 데미지",
        specialName : "고무고무 피스톨",
        captain : "[힘] 캐릭터의 공격력 1.5배"
    },
    3: {
        special: "적 1명에게 캐릭터의 공격력 15배의 [힘] 데미지",
		    specialName: "고무고무 바주카",
		    captain: "[힘] 캐릭터의 공격력 1.5배."
    }
}

var lang = [
  {
    "no": 1,
    "name": "몽키 D. 루피",
    "special": "적 1명에게 캐릭터의 공격력x5배의 STR 데미지",
    "specialName": "빙글빙글 고무 펀치"
  },
  {
    "no": 2,
    "name": "몽키 D. 루피 고무 고무 총",
    "special": "적 1명에게 캐릭터의 공격력x7배의 STR 데미지",
    "specialName": "고무고무 피스톨",
    "captain": "STR 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 3,
    "name": "몽키 D. 루피 고무 고무 바주카",
    "special": "적 1명에게 캐릭터의 공격력x15배의 STR 데미지",
    "specialName": "고무고무 바주카",
    "captain": "STR 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 4,
    "name": "몽키 D. 루피 기어 2",
    "captain": "STR 캐릭터의 공격력을 2배, 다른 속성 캐릭터의 공격력을 1.5배로 만든다.",
    "special": "적 1명에게 캐릭터 공격력x25배 STR 데미지",
    "specialName": "고무고무 트윈 JET총",
    "limit": [
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: 격분"
      },
      {
        "description": "체력강화 : 30"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: 자신이 마지막으로 공격할 때 자신의 기본 공격력이 100증가한다."
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "선원효과 추가 2: [QCK] 슬롯도 이로운 슬롯으로 만든다."
      },
      {
        "description": "잠재능력 습득 2: 회복 무효 상태 회복"
      }
    ],
    "potential": [
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
      }
    ],
    "potentialNotes": "격분은 선원이 이전 턴에 적으로부터 공격을 받을 경우 활성화 된다."
  },
  {
    "no": 5,
    "name": "롤로노아 조로",
    "special": "적 1명에게 캐릭터 공격력 7배의 DEX 데미지",
    "specialName": "도깨비 참수",
    "captain": "DEX 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 6,
    "name": "롤로노아 조로 삼천세계",
    "special": "적 전체에게 캐릭터 공격력 10배의 DEX 데미지",
    "specialName": "삼천세계",
    "captain": "DEX 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 7,
    "name": "롤로노아 조로 번뇌봉",
    "special": "적 전체에게 캐릭터 공격격 10배의 DEX 데미지",
    "specialName": "108 번뇌봉",
    "captain": "DEX 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 8,
    "name": "롤로노아 조로 아수라 일무은",
    "special": "적 전체에게 캐릭터 공격력 15배의 DEX 데미지",
    "specialName": "아수라 일무은",
    "captain": "DEX 캐릭터의 공격력이 2배가 된다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 9,
    "name": "나미",
    "special": "체력을 1000 회복한다",
    "specialName": "도둑 고양이",
    "captain": "INT 캐릭터가 주는 데미지를 20% 감소시킨다."
  },
  {
    "no": 10,
    "name": "나미 토네이도 템포",
    "special": "적 1명에게 캐릭터 공격력 15배의 INT 데미지",
    "specialName": "토네이도 템포",
    "captain": "INT 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 11,
    "name": "나미 미라쥬 템포",
    "special": "INT의 공격을 1턴 무효화시킨다",
    "specialName": "신기루 템포",
    "captain": "INT 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 12,
    "name": "나미 썬더볼트 템포",
    "special": "적 전체에게 캐릭터 공격력 15배의 INT 데미지",
    "specialName": "썬더볼트 템포",
    "captain": "INT 캐릭터의 체력과 공격이 1.5배가 된다"
  },
  {
    "no": 13,
    "name": "우솝",
    "special": "적 전체의 공격을 1턴 지연시킨다",
    "specialName": "허풍쟁이",
    "captain": "사격형 캐릭터의 공격력이 1.2배가 된다"
  },
  {
    "no": 14,
    "name": "우솝 타바스코 탄",
    "special": "적 전체의 공격을 2턴 지연시킨다",
    "specialName": "타바스코 탄",
    "captain": "PSY 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 15,
    "name": "우솝 골드 파운드",
    "special": "적 전체의 공격을 3턴 지연시킨다.",
    "specialName": "골드 파운드",
    "captain": "PSY 캐릭터의 공격력이 1.5배가 ."
  },
  {
    "no": 16,
    "name": "저격왕",
    "special": "적 전체의 공격을 3턴 지연시키고, 캐릭터의 공격15배의 PSY 데미지",
    "specialName": "화조성",
    "captain": "PSY 캐릭터의 체력과 공격이 1.5배가 된다"
  },
  {
    "no": 17,
    "name": "상디",
    "special": "캐릭터의 회복×10배의 체력을 회복한다",
    "specialName": "특제 볶음밥",
    "captain": "QCK 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 18,
    "name": "상디 정형 쇼트",
    "special": "적 전체의 방어력을 2턴 동안 반으로 줄인다",
    "specialName": "정형 쇼트",
    "captain": "QCK 캐릭터의 체력이 1.5배가 된다"
  },
  {
    "no": 19,
    "name": "요리사 상디 구운 돌 스튜",
    "special": "캐릭터의 회복×10배의 체력을 회복한다",
    "specialName": "구운 돌 스튜",
    "captain": "QCK 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 20,
    "name": "상디 디아블잠브",
    "special": "적 전체에 5000의 고정 데미지",
    "specialName": "디아블 잠브",
    "captain": "QCK 캐릭터의 공격력과 체력이 1.5배가 된다"
  },
  {
    "no": 21,
    "name": "토니토니 쵸파",
    "special": "가까이 있는 캐릭터의 슬롯을 RCV로 바꾼다",
    "specialName": "활기를 주는 응원",
    "captain": "PSY 캐릭터의 회복력이 1.2배가 된다"
  },
  {
    "no": 22,
    "name": "토니토니 쵸파 중량 강화(헤비 포인트)",
    "special": "적 1명에게 캐릭터의 공격×15배의 PSY 데미지",
    "specialName": "헤비 공",
    "captain": "PSY 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 23,
    "name": "토니토니 쵸파 두뇌 강화(브레인 포인트)",
    "special": "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다",
    "specialName": "진단",
    "captain": "INT 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 24,
    "name": "토니토니 쵸파 완력 강화(암 포인트)",
    "special": "적 전체의 방어력을 2턴 동안 반으로 줄인다",
    "specialName": "발굽 로제오",
    "captain": "STR 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 25,
    "name": "토니토니 쵸파 각력 강화(혼 포인트)",
    "special": "적 전체에 캐릭터의 공격×7배의 QCK 데미지",
    "specialName": "뿔 강화 로제오 콜로네이드",
    "captain": "QCK 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 26,
    "name": "토니토니 쵸파 모피 강화(가드 포인트)",
    "special": "받는 데미지를 3턴 동안 50％ 감소시킨다",
    "specialName": "모피강화",
    "captain": "DEX 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 27,
    "name": "히그마",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬",
    "captain": "QCK 캐릭터의 체력이 1.2배가 된다"
  },
  {
    "no": 28,
    "name": "앞바다의 괴물(누시)",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트",
    "captain": "격투형 캐릭터의 공격력이 1.2배가 된다"
  },
  {
    "no": 29,
    "name": "쇠몽둥이 알비다",
    "special": "적 1명에게 캐릭터의 공격×7배의 STR 데미지",
    "specialName": "아름다운 쇠몽둥이",
    "captain": "STR 캐릭터가 주는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 30,
    "name": "쇠몽둥이 알비다 매끈 매끈 열매",
    "special": "받는 데미지를 1턴 동안 80％ 감소시킨다",
    "specialName": "미끌미끌 슈플",
    "captain": "STR 캐릭터가 주는 데미지를 50％ 감소시킨다"
  },
  {
    "no": 31,
    "name": "코비",
    "captain": "턴 종료 후에 캐릭터의 회복×2배의 체력이 회복한다"
  },
  {
    "no": 32,
    "name": "잡일꾼 코비",
    "special": "RCV슬롯을 TND으로 바꾼다",
    "specialName": "결사의 난사",
    "captain": "턴 종료 후에 캐릭터의 회복×2배의 체력이 회복한다"
  },
  {
    "no": 33,
    "name": "헤르메포",
    "captain": "INT 캐릭터가 주는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 34,
    "name": "잡일꾼 헤르메포",
    "special": "적 전체의 방어력을 1턴 동안 0으로 만든다",
    "specialName": "적반하장의 지푸라기 인형",
    "captain": "INT 캐릭터가 주는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 35,
    "name": "도끼 손 모건",
    "special": "적 1명에게 캐릭터의 공격×5배의 STR 데미지",
    "specialName": "처형의 도끼손",
    "captain": "참격형 캐릭터의 체력이 1.2배가 된다"
  },
  {
    "no": 36,
    "name": "모디 & 리치",
    "special": "적 1명에게 캐릭터의 공격×5배의 PSY 데미지",
    "specialName": "격렬 물어뜯기",
    "captain": "PSY 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 37,
    "name": "곡예사 캐버디",
    "special": "적 1명에게 캐릭터의 공격×5배의 DEX 데미지",
    "specialName": "곡예기술 일백팽이 태풍극장",
    "captain": "DEX 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 38,
    "name": "버기",
    "special": "RCV슬롯을 INT 슬롯으로 바꾼다",
    "specialName": "동강동강 페스티벌",
    "captain": "INT 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 39,
    "name": "광대 버기",
    "special": "RCV슬롯을 INT 슬롯으로 바꾼다",
    "specialName": "동갈동갈 페스티벌",
    "captain": "INT 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 40,
    "name": "가이몬",
    "special": "가까이 있는 캐릭터의 슬롯을 RCV로 바꾼다",
    "specialName": "[고기] 슬롯 스톰",
    "captain": "사격형 캐릭터가 주는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 41,
    "name": "샴",
    "special": "RCV 슬롯을 INT슬롯으로 바꾼다",
    "specialName": "오리발 작전",
    "captain": "INT 캐릭터의 회복력이 1.2배가 된다"
  },
  {
    "no": 42,
    "name": "뿌치",
    "special": "적 전체에 캐릭터의 공격×3배의 STR 데미지",
    "specialName": "필살 고양이 밟았다",
    "captain": "STR 캐릭터의 공격력이 1.2배가 된다"
  },
  {
    "no": 43,
    "name": "원 투 쟝고 ",
    "special": "RCV슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "최면술 원 투 쟝고",
    "captain": "받는 데미지를 10％ 감소시킨다"
  },
  {
    "no": 44,
    "name": "댄싱 쟝고",
    "special": "RCV슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "댄스 천국",
    "captain": "받는 데미지를 10％ 감소시킨다"
  },
  {
    "no": 45,
    "name": "캡틴 크로",
    "special": "적 전체에 캐릭터의 공격×5배의 QCK 데미지",
    "specialName": "작살",
    "captain": "QCK 캐릭터의 공격력이 1.2배가 된다"
  },
  {
    "no": 46,
    "name": "백계의 크로",
    "special": "적 전체에 캐릭터의 공격×5배의 QCK 데미지",
    "specialName": "작살",
    "captain": "QCK 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 47,
    "name": "요삭",
    "special": "TND을 RCV로 바꾼다",
    "specialName": "연 슬롯 체인지· 고기 슬롯"
  },
  {
    "no": 48,
    "name": "조니",
    "special": "가까이 있는 캐릭터의 슬롯을 RCV로 바꾼다",
    "specialName": "고기 슬롯 스톰"
  },
  {
    "no": 49,
    "name": "철권 풀보디",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트",
    "captain": "STR 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 50,
    "name": "파티",
    "special": "적 1명에게 캐릭터의 공격×5배의 STR 데미지",
    "specialName": "식중독 포탄",
    "captain": "턴 종료 후에 캐릭터의 회복×4배의 체력이 회복한다"
  },
  {
    "no": 51,
    "name": "카르네",
    "captain": "턴 종료 후에 캐릭터의 회복×3배의 체력이 회복한다"
  },
  {
    "no": 52,
    "name": "요리장 제프",
    "special": "STR슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "요리장 드롭",
    "captain": "격투형 캐릭터의 공격력이 2.5배가 된다"
  },
  {
    "no": 53,
    "name": "깅",
    "captain": "QCK으로부터 받는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 54,
    "name": "귀신 깅",
    "special": "적 1명에게 캐릭터의 공격×7배의 QCK 데미지",
    "specialName": "귀신난무",
    "captain": "QCK으로부터 받는 데미지를 50％ 감소시킨다"
  },
  {
    "no": 55,
    "name": "파알",
    "captain": "STR으로부터 받는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 56,
    "name": "파이어 파알",
    "special": "RCV슬롯을 STR슬롯으로 바꾼다",
    "specialName": "파이어 파알 프레젠트",
    "captain": "STR으로부터 받는 데미지를 50％ 감소시킨다"
  },
  {
    "no": 57,
    "name": "수령 클리크",
    "special": "적 1명에게 캐릭터의 공격×7배의 INT 데미지",
    "specialName": "체인 해머",
    "captain": "받는 데미지를 10％ 감소시킨다"
  },
  {
    "no": 58,
    "name": "수령 클리크 맹독 가스탄 MH5",
    "special": "적 전체를 독으로 만든다",
    "specialName": "맹독 가스탄 MH5",
    "captain": "받는 데미지를 20％ 감소시킨다"
  },
  {
    "no": 59,
    "name": "네즈미",
    "special": "PSY슬롯을 INT슬롯으로 바꾼다",
    "specialName": "심 속성 슬롯 체인지·지 속성",
    "captain": "INT 캐릭터의 공격력이 1.2배가 된다"
  },
  {
    "no": 60,
    "name": "모옴",
    "special": "TND을 STR으로 바꾼다",
    "specialName": "연 슬롯 체인지·힘 슬롯",
    "captain": "STR 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 61,
    "name": "츄",
    "special": "적 전체에 캐릭터의 공격×5배의 INT 데미지",
    "specialName": "물대포",
    "captain": "사격형 캐릭터의 체력이 1.5배가 된다"
  },
  {
    "no": 62,
    "name": "크로오비",
    "special": "적 1명에게 캐릭터의 공격×7배의 STR 데미지",
    "specialName": "손바닥 올려치기",
    "captain": "격투형 캐릭터의 체력이 1.5배가 된다"
  },
  {
    "no": 63,
    "name": "하찌",
    "captain": "DEX으로부터 받는 데미지를 30％ 감소시킨다"
  },
  {
    "no": 64,
    "name": "육도류 하찌",
    "special": "적 전체에 캐릭터의 공격×10배의 DEX 데미지",
    "specialName": "문어발식 집중공격",
    "captain": "DEX으로부터 받는 데미지를 50％ 감소시킨다"
  },
  {
    "no": 65,
    "name": "아론",
    "special": "적 1명에게 캐릭터의 공격×7배의 STR 데미지",
    "specialName": "샤크 온 다트",
    "captain": "참격형 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 66,
    "name": "격분한 아론 샤크 온 회전톱날",
    "special": "적 1명에게 캐릭터의 공격×15배의 STR 데미지",
    "specialName": "샤크 온 톱니바퀴",
    "captain": "참격형 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 67,
    "name": "타시기",
    "special": "적 1명에게 캐릭터의 공격×25배의 QCK 데미지",
    "specialName": "거합베기",
    "captain": "참격형 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 68,
    "name": "타시기 해군 본부 소위",
    "special": "적 1명에게 캐릭터의 공격×25배의 QCK 데미지",
    "specialName": "거합베기",
    "captain": "참격형 캐릭터의 회복력이 2배가 된다"
  },
  {
    "no": 69,
    "name": "스모커",
    "special": "받는 데미지를 3턴 동안 50％ 감소시킨다",
    "specialName": "화이트 아웃",
    "captain": "받는 데미지를 20％ 감소시킨다"
  },
  {
    "no": 70,
    "name": "하얀사냥꾼 스모커",
    "special": "받는 데미지를 3턴 동안 50％ 감소시킨다",
    "specialName": "화이트 아웃",
    "captain": "받는 데미지를 20％ 감소시킨다"
  },
  {
    "no": 71,
    "name": "미스 웬즈데이",
    "special": "받는 데미지를 1턴 동안 50％ 감소시킨다",
    "specialName": "매혹의 향수 댄스",
    "captain": "턴 종료 후에 캐릭터의 회복x2배의 체력이 회복한다"
  },
  {
    "no": 72,
    "name": "네펠타리 비비",
    "special": "랜덤으로 슬롯을 바꾼다",
    "specialName": "돌격! 초 카루가모 부대!",
    "captain": "턴 종료 후에 캐릭터의 회복x3배의 체력이 회복한다"
  },
  {
    "no": 73,
    "name": "왕녀 비비",
    "special": "랜덤으로 슬롯을 바꾼다",
    "specialName": "돌격! 초 카루가모 부대!",
    "captain": "턴 종료 후에 캐릭터의 회복x5배의 체력이 회복한다"
  },
  {
    "no": 74,
    "name": "포트거스 D. 에이스",
    "special": "적 1명에게 캐릭터의 공격×25배의 QCK 데미지",
    "specialName": "불주먹",
    "captain": "QCK 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 75,
    "name": "포트거스 D. 에이스 경화염",
    "special": "적 전체에 캐릭터의 공격×15배의 QCK 데미지",
    "specialName": "경화염",
    "captain": "QCK 캐릭터의 공격력이 2.5배가 된다"
  },
  {
    "no": 76,
    "name": "샹크스",
    "special": "적 전체에 캐릭터의 공격×15배의 PSY 데미지",
    "specialName": "패왕색 패기",
    "captain": "PSY 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 77,
    "name": "빨강 머리 샹크스",
    "special": "적 전체에 캐릭터의 공격×15배의 PSY 데미지",
    "specialName": "패왕색 패기",
    "captain": "PSY 캐릭터의 공격력이 2.5배가 된다"
  },
  {
    "no": 78,
    "name": "빨간 도둑 펭귄"
  },
  {
    "no": 79,
    "name": "파란 도둑 펭귄"
  },
  {
    "no": 80,
    "name": "초록 도둑 펭귄"
  },
  {
    "no": 81,
    "name": "노란 도둑 펭귄"
  },
  {
    "no": 82,
    "name": "검은 도둑 펭귄"
  },
  {
    "no": 83,
    "name": "무지개 도둑 펭귄"
  },
  {
    "no": 84,
    "name": "빨간 해적 펭귄"
  },
  {
    "no": 85,
    "name": "파란 해적 펭귄"
  },
  {
    "no": 86,
    "name": "초록 해적 펭귄"
  },
  {
    "no": 87,
    "name": "노란 해적 펭귄"
  },
  {
    "no": 88,
    "name": "검은 해적 펭귄"
  },
  {
    "no": 89,
    "name": "빨간 투구소라게"
  },
  {
    "no": 90,
    "name": "파란 투구소라게"
  },
  {
    "no": 91,
    "name": "초록 투구소라게"
  },
  {
    "no": 92,
    "name": "노란 투구소라게"
  },
  {
    "no": 93,
    "name": "검은 투구소라게"
  },
  {
    "no": 94,
    "name": "무지개 투구소라게"
  },
  {
    "no": 95,
    "name": "빨간 갑옷 게"
  },
  {
    "no": 96,
    "name": "파란 갑옷 게"
  },
  {
    "no": 97,
    "name": "초록 갑옷 게"
  },
  {
    "no": 98,
    "name": "노란 갑옷 게"
  },
  {
    "no": 99,
    "name": "검은 갑옷 게"
  },
  {
    "no": 100,
    "name": "빨간 줄무늬 파수룡"
  },
  {
    "no": 101,
    "name": "파란 줄무늬 파수룡"
  },
  {
    "no": 102,
    "name": "초록 줄무늬 파수룡"
  },
  {
    "no": 103,
    "name": "노란 줄무늬 파수룡"
  },
  {
    "no": 104,
    "name": "검은 줄무늬 파수룡"
  },
  {
    "no": 105,
    "name": "빨간 보물 거북"
  },
  {
    "no": 106,
    "name": "파란 보물 거북"
  },
  {
    "no": 107,
    "name": "초록 보물 거북"
  },
  {
    "no": 108,
    "name": "노란 보물 거북"
  },
  {
    "no": 109,
    "name": "검은 보물 거북"
  },
  {
    "no": 110,
    "name": "빨간 영주 거북"
  },
  {
    "no": 111,
    "name": "파란 영주 거북"
  },
  {
    "no": 112,
    "name": "초록 영주 거북"
  },
  {
    "no": 113,
    "name": "노란 영주 거북"
  },
  {
    "no": 114,
    "name": "검은 영주 거북"
  },
  {
    "no": 115,
    "name": "아기 해마"
  },
  {
    "no": 116,
    "name": "해마 왕자"
  },
  {
    "no": 117,
    "name": "해마왕"
  },
  {
    "no": 118,
    "name": "해마신"
  },
  {
    "no": 119,
    "name": "칼잡이 산적",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 120,
    "name": "피스톨 산적",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 121,
    "name": "격투부대 잡일꾼 레드 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 122,
    "name": "격투부대 잡일꾼 블루 파이어릿",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 123,
    "name": "격투부대 잡일꾼 그린 파이어릿",
    "special": "STR슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "힘 슬롯 체인지·기 슬롯"
  },
  {
    "no": 124,
    "name": "격투부대 잡일꾼 옐로 파이어릿",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 125,
    "name": "격투부대 잡일꾼 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 126,
    "name": "참격부대 잡일꾼 레드 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 127,
    "name": "참격부대 잡일꾼 블루 파이어릿",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 128,
    "name": "참격부대 잡일꾼 그린 파이어릿",
    "special": "QCK슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "속 슬롯 체인지·기 슬롯"
  },
  {
    "no": 129,
    "name": "참격부대 잡일꾼 옐로 파이어릿",
    "special": "INT슬롯을 PSY슬롯으로 바꾼다",
    "specialName": "지 슬롯 체인지·심 슬롯"
  },
  {
    "no": 130,
    "name": "참격부대 잡일꾼 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 131,
    "name": "돌격부대 잡일꾼 레드 파이어릿",
    "special": "RCV슬롯을 STR슬롯으로 바꾼다",
    "specialName": "고기슬롯 체인지·힘 슬롯"
  },
  {
    "no": 132,
    "name": "돌격부대 잡일꾼 블루 파이어릿",
    "special": "DEX슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[속]"
  },
  {
    "no": 133,
    "name": "돌격부대 잡일꾼 그린 파이어릿",
    "special": "QCK슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[기]"
  },
  {
    "no": 134,
    "name": "돌격부대 잡일꾼 옐로 파이어릿",
    "special": "QCK슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[고기]"
  },
  {
    "no": 135,
    "name": "돌격부대 잡일꾼 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스파이럴"
  },
  {
    "no": 136,
    "name": "저격부대 잡일꾼 레드 파이어릿",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 137,
    "name": "저격부대 잡일꾼 블루 파이어릿",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 138,
    "name": "저격부대 잡일꾼 그린 파이어릿",
    "special": "DEX슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[고기]"
  },
  {
    "no": 139,
    "name": "저격부대 잡일꾼 옐로 파이어릿",
    "special": "PSY슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[심]슬롯 체인지·[고기]"
  },
  {
    "no": 140,
    "name": "저격부대 잡일꾼 블랙 파이어릿",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 141,
    "name": "포격수 잡일꾼",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 142,
    "name": "격투부대 대원 레드 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 143,
    "name": "격투부대 대원 블루 파이어릿",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 144,
    "name": "격투부대 대원 그린 파이어릿",
    "special": "STR슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "[힘]슬롯 체인지·[기]"
  },
  {
    "no": 145,
    "name": "격투부대 대원 옐로 파이어릿",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 146,
    "name": "격투부대 대원 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 147,
    "name": "참격부대 대원 레드 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 148,
    "name": "참격부대 대원 블루 파이어릿",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 149,
    "name": "참격부대 대원 그린 파이어릿",
    "special": "QCK슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[기]"
  },
  {
    "no": 150,
    "name": "참격부대 대원 옐로 파이어릿",
    "special": "INT슬롯을 PSY슬롯으로 바꾼다",
    "specialName": "[지]슬롯 체인지·[심]"
  },
  {
    "no": 151,
    "name": "참격부대 대원 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 152,
    "name": "돌격부대 대원 레드 파이어릿",
    "special": "RCV슬롯을 STR슬롯으로 바꾼다",
    "specialName": "[고기]슬롯 체인지·[힘]"
  },
  {
    "no": 153,
    "name": "돌격부대 대원 블루 파이어릿",
    "special": "DEX슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[속]"
  },
  {
    "no": 154,
    "name": "돌격부대 대원 그린 파이어릿",
    "special": "QCK슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[기]"
  },
  {
    "no": 155,
    "name": "돌격부대 대원 옐로 파이어릿",
    "special": "QCK슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[고기]"
  },
  {
    "no": 156,
    "name": "돌격부대 대원 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스파이럴"
  },
  {
    "no": 157,
    "name": "저격부대 대원 레드 파이어릿",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 158,
    "name": "저격부대 대원 블루 파이어릿",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 159,
    "name": "저격부대 대원 그린 파이어릿",
    "special": "DEX슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[고기]"
  },
  {
    "no": 160,
    "name": "저격부대 대원 옐로 파이어릿",
    "special": "PSY슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[심]슬롯 체인지·[고기]"
  },
  {
    "no": 161,
    "name": "저격부대 대원 블랙 파이어릿",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 162,
    "name": "명포격수",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 163,
    "name": "보디가드, ‘선글라스'",
    "special": "DEX슬롯을 TND으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[연]"
  },
  {
    "no": 164,
    "name": "보디가드 '수염'",
    "special": "QCK슬롯을 TND으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[연]"
  },
  {
    "no": 165,
    "name": "너클 건달 크로네코 해적단",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 166,
    "name": "사브르 건달 크로네코 해적단",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 167,
    "name": "언월도 건달 크로네코 해적단",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 168,
    "name": "피스톨 건달 크로네코 해적단",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 169,
    "name": "바주카 건달 크로네코 해적단",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 170,
    "name": "격투부대 대장",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 171,
    "name": "참격부대 대장",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 172,
    "name": "돌격부대 대장",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 173,
    "name": "저격부대 대장",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 174,
    "name": "명유격수",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 175,
    "name": "공수도 어인 아론 일당",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 176,
    "name": "검술 어인 아론 일당",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 177,
    "name": "창술 어인 아론 일당",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스파이럴"
  },
  {
    "no": 178,
    "name": "사격술 어인 아론 일당",
    "special": "적 1명에게 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 179,
    "name": "너클 삼등병 해군",
    "special": "QCK슬롯을 STR슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[힘]"
  },
  {
    "no": 180,
    "name": "사브르 삼등병 해군",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 181,
    "name": "언월도 삼등병 해군",
    "special": "STR슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "[힘]슬롯 체인지·[속]"
  },
  {
    "no": 182,
    "name": "피스톨 삼등병 해군",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 183,
    "name": "바주카 삼등병 해군",
    "special": "RCV슬롯을 INT슬롯으로 바꾼다",
    "specialName": "[고기]슬롯 체인지·[지]"
  },
  {
    "no": 184,
    "name": "너클 일등병 해군",
    "special": "QCK슬롯을 STR슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[힘]"
  },
  {
    "no": 185,
    "name": "사브르 일등병 해군",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 186,
    "name": "언월도 일등병 해군",
    "special": "STR슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "[힘]슬롯 체인지·[속]"
  },
  {
    "no": 187,
    "name": "피스톨 일등병 해군",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 188,
    "name": "바주카 일등병 해군",
    "special": "RCV슬롯을 INT슬롯으로 바꾼다",
    "specialName": "[고기]슬롯 체인지·[지]"
  },
  {
    "no": 189,
    "name": "빨간 원로 거북"
  },
  {
    "no": 190,
    "name": "파란 원로 거북"
  },
  {
    "no": 191,
    "name": "초록 원로 거북"
  },
  {
    "no": 192,
    "name": "노란 원로 거북"
  },
  {
    "no": 193,
    "name": "검은 원로 거북"
  },
  {
    "no": 194,
    "name": "너클 소위 해군본부",
    "special": "QCK슬롯을 STR슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[힘]",
    "captain": "STR 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 195,
    "name": "사브르 소위 해군본부",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링",
    "captain": "DEX 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 196,
    "name": "언월도 소위 해군본부",
    "special": "STR슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "[힘]슬롯 체인지·[속]",
    "captain": "QCK 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 197,
    "name": "피스톨 소위 해군본부",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링",
    "captain": "PSY 캐릭터가 주는 데미지를 20％ 감소시킨다"
  },
  {
    "no": 198,
    "name": "바주카 소위 해군본부",
    "special": "RCV슬롯을 INT슬롯으로 바꾼다",
    "specialName": "[고기]슬롯 체인지·[지]",
    "captain": "사격형 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 199,
    "name": "Mr. 5 노즈 팬시 캐논",
    "special": "적 1명에게 캐릭터의 공격×15배의 STR 데미지",
    "specialName": "노즈 팬시 캐논",
    "captain": "STR 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 200,
    "name": "Mr. 5 브리즈 브레스 붐",
    "special": "적 1명에게 캐릭터의 공격×20배의 STR 데미지",
    "specialName": "브리즈 브레스 봄",
    "captain": "STR 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 201,
    "name": "미스 발렌타인",
    "captain": "격투형 캐릭터의 체력이 1.5배가 된다"
  },
  {
    "no": 202,
    "name": "미스 발렌타인 1만 킬로 길로틴",
    "special": "RCV슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "1만 킬로 길로틴",
    "captain": "격투형 캐릭터의 체력이 2배가 된다"
  },
  {
    "no": 203,
    "name": "Mr. 3",
    "captain": "INT 캐릭터가 주는 데미지를 10％ 감소시킨다"
  },
  {
    "no": 204,
    "name": "Mr. 3 특대 캔들 서비스 세트",
    "special": "적 전체의 공격을 1턴 지연시킨다",
    "specialName": "특대 캔들 서비스 세트",
    "captain": "INT 캐릭터가 주는 데미지를 10％ 감소시킨다"
  },
  {
    "no": 205,
    "name": "미스 골든위크",
    "captain": "DEX 캐릭터의 체력과 회복력이 1.2배가 된다"
  },
  {
    "no": 206,
    "name": "미스 골든위크 컬러즈 트랩 온화함의 초록",
    "special": "적 전체의 방어력을 2턴 동안 반으로 줄인다",
    "specialName": "컬러즈 트랩 온화함의 초록",
    "captain": "DEX 캐릭터의 체력과 회복력이 1.2배가 된다"
  },
  {
    "no": 207,
    "name": "Mr. 2 봉쿠레",
    "captain": "PSY 캐릭터가 주는 데미지를 10％ 감소시킨다"
  },
  {
    "no": 208,
    "name": "Mr. 2 봉쿠레 폭격 백조 아라베스크",
    "special": "RCV슬롯을 PSY으로 바꾼다",
    "specialName": "폭격백조 아라베스크",
    "captain": "PSY 캐릭터가 주는 데미지를 20％ 감소시킨다"
  },
  {
    "no": 209,
    "name": "미스 올선데이 바로크 워크스 부사장",
    "special": "1턴 동안 INT의 공격이 1.5배가 된다",
    "specialName": "16송이의 꽃",
    "captain": "INT 캐릭터의 회복력이 1.5배가 된다"
  },
  {
    "no": 210,
    "name": "니코 로빈",
    "special": "1턴 동안 INT의 공격이 2배가 된다",
    "specialName": "시엔 플루르",
    "captain": "INT 캐릭터의 회복력이 2배가 된다"
  },
  {
    "no": 211,
    "name": "Mr. 9",
    "captain": "타격 타입 캐릭터의 공격력을 1.2배로 만든다."
  },
  {
    "no": 212,
    "name": "Mr. 9 열혈 배트",
    "special": "적 1명에게 캐릭터의 공격X5배의 QCK 데미지",
    "specialName": "열혈 배트",
    "captain": "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 213,
    "name": "라분",
    "special": "적 전체에 캐릭터의 공격×20배의 [STR] 대미지",
    "specialName": "탄식의 박치기",
    "captain": "체력이 일정수준(50%) 이상이면 공격을 받아도 쓰러지지 않는다."
  },
  {
    "no": 214,
    "name": "라분 (루피 낙서)",
    "special": "적 전체에 캐릭터의 공격×20배의 [STR] 대미지",
    "specialName": "탄식의 박치기",
    "captain": "체력이 일정수준(50%) 이상이면 공격을 받아도 쓰러지지 않는다."
  },
  {
    "no": 215,
    "name": "대왕오징어",
    "special": "적 전체를 중독",
    "specialName": "갱 포트리스",
    "captain": "타격 유형 캐릭터의 체력을 1.5배로 만든다."
  },
  {
    "no": 216,
    "name": "몽키 D. 루피 고무고무 풍선",
    "special": "3턴간 받는 데미지를 50% 감소시킨다",
    "specialName": "고무고무 풍선",
    "captain": "받는 데미지를 20% 감소시킨다"
  },
  {
    "no": 217,
    "name": "몽키 D. 루피 기어 3",
    "special": "적 전체에 캐릭터의 공격×15배의 STR 데미지",
    "specialName": "고무고무 거인의 라이플",
    "captain": "3연속 PERFECT 시 이후의 캐릭터 공격력이 3.5배"
  },
  {
    "no": 218,
    "name": "롤로노아 조로 늑대 칼부림",
    "special": "STR의 공격을 1턴간 무효화한다",
    "specialName": "늑대 칼부림",
    "captain": "공격 시작 전에 체력이 가득 차 있으면 받는 데미지가 큰 폭(80%)으로 감소"
  },
  {
    "no": 219,
    "name": "롤로노아 조로 사자의 노래",
    "special": "적 1명에게 캐릭터의 공격×25배의 DEX 데미지",
    "specialName": "사자의 노래",
    "captain": "공격 시작 전에 체력이 가득 차 있으면 받는 데미지가 큰 폭(80%)으로 감소"
  },
  {
    "no": 220,
    "name": "나미 파인 템포",
    "special": "PSY 슬롯을 INT 슬롯으로 변환한다",
    "specialName": "파인 템포",
    "captain": "INT 캐릭터의 공격을 2배로 만든다"
  },
  {
    "no": 221,
    "name": "나미 행복펀치",
    "special": "PSY 슬롯을 INT 슬롯으로 변환한다",
    "specialName": "행복 펀치",
    "captain": "INT 캐릭터의 공격을 2.5배로 만든다"
  },
  {
    "no": 222,
    "name": "우솝 우솝 해머",
    "special": "1턴간 PSY의 공격이 1.5배가 된다",
    "specialName": "우솝 해머",
    "captain": "PSY 캐릭터의 공격을 1.2배로 만든다",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 223,
    "name": "우솝 임팩트",
    "special": "1턴간 PSY의 공격이 2배가 된다",
    "specialName": "임팩트",
    "captain": "PSY 캐릭터의 공격력이 1.5배가 된다"
  },
  {
    "no": 224,
    "name": "Mr. 프린스 양고기 샷",
    "special": "적 1명에게 캐릭터의 공격×15배의 QCK 데미지",
    "specialName": "양고기 샷",
    "captain": "2연속 PERFECT 시 이후의 캐릭터 공격력이 2배"
  },
  {
    "no": 225,
    "name": "Mr. 프린스 송아지 샷",
    "special": "적 1명에게 캐릭터의 공격×20배의 QCK 데미지",
    "specialName": "송아지 샷",
    "captain": "2연속 PERFECT 시 이후의 캐릭터 공격력이 2.5배"
  },
  {
    "no": 226,
    "name": "쥬라큘 미호크",
    "special": "적 전체의 HP를 30% 줄인다",
    "specialName": "흑도·선박 베기",
    "captain": "참격형 캐릭터의 공격력이 ×2배가 된다."
  },
  {
    "no": 227,
    "name": "매의눈 미호크",
    "special": "적 전체의 HP를 30% 줄인다",
    "specialName": "흑도·선박 베기",
    "captain": "참격형 캐릭터의 공격력이 ×2.5배가 된다",
    "limit": [
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: [RCV],[TND]도 이로운 슬롯으로 만든다."
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "새로운 선장 효과 습득: 참격 캐릭터의 공격력을 2.5배로 만들고 체력을 1.3배로 만든다."
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 228,
    "name": "탈옥범 모건",
    "special": "봉인 상태를 2턴 회복",
    "specialName": "탈옥의 도끼손",
    "captain": "참격 유형 캐릭터의 체력을 1.5배로 만든다."
  },
  {
    "no": 229,
    "name": "배신의 쟝고",
    "special": "[INT] 슬롯을 [PSY] 슬롯으로 변환",
    "specialName": "배신의 춤",
    "captain": "받는 대미지를 10％ 감소시킨다"
  },
  {
    "no": 230,
    "name": "양철권 풀보디",
    "special": "적 1명에게 200의 고정 대미지",
    "specialName": "W 하이퍼 스트레이트",
    "captain": "[STR] 캐릭터의 공격을 1.5배로 만든다."
  },
  {
    "no": 231,
    "name": "히나",
    "special": "일당 전원의 슬롯을 고정한다 (1턴)",
    "specialName": "겹날개 감옥",
    "captain": "[QCK] 캐릭터의 공격을 2배로 만든다."
  },
  {
    "no": 232,
    "name": "검은 감옥의 히나",
    "special": "일당 전원의 슬롯을 고정한다 (1턴)",
    "specialName": "겹날개 감옥",
    "captain": "[QCK] 캐릭터의 공격을 2배로 만든다."
  },
  {
    "no": 233,
    "name": "Mr. 8",
    "captain": "[PSY] 캐릭터의 체력을 1.5배로 만든다."
  },
  {
    "no": 234,
    "name": "Mr. 8 이가람 파파",
    "special": "모든 적에게 캐릭터 공격력에 5배의 [PSY] 데미지",
    "specialName": "이가람 파파",
    "captain": "[PSY] 캐릭터의 체력을 2배로 만든다."
  },
  {
    "no": 235,
    "name": "미스 먼데이",
    "captain": "격투 타입 캐릭터의 공격력을 1.2배로 만든다."
  },
  {
    "no": 236,
    "name": "미스 먼데이 괴력 주먹",
    "special": "적 1명에게 캐릭터 공격력에 20배의 [STR] 데미지",
    "specialName": "괴력 너클",
    "captain": "격투 타입 캐릭터의 공격력을 1.2배로 만든다."
  },
  {
    "no": 237,
    "name": "너클 밀리언즈 바로크 워크스",
    "special": "QCK슬롯을 STR슬롯으로 바꾼다.",
    "specialName": "[속]슬롯 체인지·[힘]"
  },
  {
    "no": 238,
    "name": "사브르 밀리언즈 바로크 워크스",
    "special": "TND 슬롯을 DEX슬롯으로 바꾼다.",
    "specialName": "[연]슬롯 체인지·[기]"
  },
  {
    "no": 239,
    "name": "언월도 밀리언즈 바로크 워크스",
    "special": "TND 슬롯을 QCK슬롯으로 바꾼다.",
    "specialName": "[연]슬롯 체인지·[속]"
  },
  {
    "no": 240,
    "name": "피스톨 밀리언즈 바로크 워크스",
    "special": "STR 슬롯을 PSY슬롯으로 바꾼다.",
    "specialName": "[힘]슬롯 체인지·[심]"
  },
  {
    "no": 241,
    "name": "바주카 밀리언즈 바로크 워크스",
    "special": "QCK슬롯을 INT슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[지]"
  },
  {
    "no": 242,
    "name": "너클 빌리언즈 바로크 워크스",
    "special": "DEX슬롯을 STR슬롯으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[힘]"
  },
  {
    "no": 243,
    "name": "사브르 빌리언즈 바로크 워크스",
    "special": "TND 슬롯을 DEX슬롯으로 바꾼다.",
    "specialName": "[연]슬롯 체인지·[기]"
  },
  {
    "no": 244,
    "name": "언월도 빌리언즈 바로크 워크스",
    "special": "TND 슬롯을 QCK슬롯으로 바꾼다.",
    "specialName": "[연]슬롯 체인지·[속]"
  },
  {
    "no": 245,
    "name": "피스톨 빌리언즈 바로크 워크스",
    "special": "STR 슬롯을 PSY슬롯으로 바꾼다.",
    "specialName": "[힘]슬롯 체인지·[심]"
  },
  {
    "no": 246,
    "name": "바주카 빌리언즈 바로크 워크스",
    "special": "QCK슬롯을 INT슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[지]"
  },
  {
    "no": 247,
    "name": "쵸파맨",
    "special": "체력을 1224 회복하며 상당히 귀엽다.",
    "specialName": "큔 스파크",
    "captain": "받는 데미지를 10% 줄인다"
  },
  {
    "no": 248,
    "name": "토니토니 쵸파 폭주 전",
    "special": "적 1명에게 랜덤으로 힘 속성 데미지",
    "specialName": "폭주",
    "specialNotes": "랜덤 데미지 : 2,000 ~ 200,000",
    "captain": "STR 캐릭터의 체력을 대폭(60%) 줄이고 공격력이 2.5배가 된다."
  },
  {
    "no": 249,
    "name": "토니토니 쵸파 폭주 후",
    "special": "적 1명에게 랜덤으로 힘 속성 데미지",
    "specialName": "폭주",
    "specialNotes": "랜덤 데미지 : 2,000 ~ 200,000",
    "captain": "STR 캐릭터의 체력을 대폭(60%) 줄이고 공격력이 3배가 된다."
  },
  {
    "no": 250,
    "name": "마르코",
    "special": "체력을 모두 회복한다",
    "specialName": "전생의 창염",
    "captain": "공격 시작 전에 체력이 가득 차 있으면 PSY 캐릭터의 공격력이 3배가 된다."
  },
  {
    "no": 251,
    "name": "불사조 마르코",
    "special": "체력을 모두 회복한다",
    "specialName": "전생의 창염",
    "captain": "격 시작 전에 체력이 가득 차 있으면 PSY 캐릭터의 공격력이 3배가 된다."
  },
  {
    "no": 252,
    "name": "조즈",
    "special": "DEX의 공격이 무효가 된다 (1턴)",
    "specialName": "브릴리언트 펑크",
    "captain": "QCK 캐릭터의 공격력과 체력이 2배가 된다"
  },
  {
    "no": 253,
    "name": "다이아몬드 조즈",
    "special": "DEX의 공격이 무효가 된다 (1턴)",
    "specialName": "브릴리언트 펑크",
    "captain": "QCK 캐릭터의 공격력과 체력이 2배가 된다"
  },
  {
    "no": 254,
    "name": "비스타",
    "special": "적 전체에게 고정 데미지 5000",
    "specialName": "로즈 론도",
    "specialNotes": "#{fixed}",
    "captain": "INT 캐릭터의 공격력과 체력이 2배가 된다"
  },
  {
    "no": 255,
    "name": "화검 비스타",
    "special": "적 전체에게 고정 데미지 5000",
    "specialName": "로즈 론도",
    "specialNotes": "#{fixed}",
    "captain": "INT 캐릭터의 공격력과 체력이 2배가 된다"
  },
  {
    "no": 256,
    "name": "이조",
    "special": "STR, QCK슬롯이DEX 슬롯으로 바뀐다.",
    "specialName": "화려한 쌍권총",
    "captain": "DEX 캐릭터의 공격력과 회복력이 2배가 된다"
  },
  {
    "no": 257,
    "name": "권총 이조",
    "special": "STR, QCK슬롯이DEX 슬롯으로 바뀐다.",
    "specialName": "화려한 쌍권총",
    "captain": "DEX 캐릭터의 공격력과 회복력이 2배가 된다",
    "limit": [
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: [DEX] 캐릭터의 공격력,체력,회복력을 50 상승시킨다."
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "체력 상승 : 150"
      },
      {
        "description": "새로운 선장 효과 습득: DEX 캐릭터의 공격력과 회복력을 2배로 만들고, 사격 캐릭터의 공격력을 1.2배로 만든다."
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "공격력 상승 : 60"
      },
      {
        "description": "선원효과 추가 2: 사격 캐릭터의 공격력을 50 상승시킨다."
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "limitnotes": "선장효과는 중첩됩니다. 그래서 [DEX] 사격 캐릭터는 공격력이 2.4배가 됩니다.",
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 258,
    "name": "블라멩코",
    "special": "DEX, QCK 슬롯이STR 슬롯으로 바뀐다.",
    "specialName": "포켓 대망치",
    "captain": "STR 캐릭터의 공격력과 회복력이 2배가 된다"
  },
  {
    "no": 259,
    "name": "대망치 블라멩코",
    "special": "DEX, QCK 슬롯이STR 슬롯으로 바뀐다.",
    "specialName": "포켓 대망치",
    "captain": "STR 캐릭터의 공격력과 회복력이 2배가 된다",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 260,
    "name": "에드워드 뉴게이트",
    "special": "적 전체의 HP를 30% 줄인다",
    "specialName": "해진",
    "captain": "체력이 얼마 남지 않게 되면(30%이하), 일당의 공격력이 3배가 된다"
  },
  {
    "no": 261,
    "name": "흰수염",
    "special": "적 전체의 HP를 30% 줄인다",
    "specialName": "해진",
    "captain": "체력이 얼마 남지 않게 되면(30%이하), 일당의 공격력이 3배가 된다",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 262,
    "name": "특훈 코비",
    "captain": "턴 종료 후 캐릭터의 회복력 x2배의 체력을 회복 시킨다."
  },
  {
    "no": 263,
    "name": "상사 코비",
    "special": "2턴동안 슬롯의 영향을 1.5배 증폭시킨다.",
    "specialName": "체",
    "captain": "격투타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 264,
    "name": "특훈 헤르메포",
    "captain": "[INT] 캐릭터에게 받는 데미지를 30% 감소한다."
  },
  {
    "no": 265,
    "name": "중사 헤르메포",
    "special": "봉인 상태를 3턴 감소시킨다.",
    "specialName": "단련 쿠크리",
    "captain": "참격캐릭터의 체력과 공격력을 1.5배로 만든다."
  },
  {
    "no": 266,
    "name": "무지개 해적 펭귄"
  },
  {
    "no": 267,
    "name": "무지개 줄무늬 파수룡",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔",
    "captain": "일당의 공격력이 1.5배가 된다"
  },
  {
    "no": 268,
    "name": "하얀 사냥꾼 스모커, 빌로어 바이크",
    "special": "받는 데미지를 3턴 동안 50% 감소시킨다.",
    "specialName": "화이트 아웃",
    "captain": "받는 데미지를 25% 감소시킨다."
  },
  {
    "no": 269,
    "name": "격투대 무장대원 레드 파이어릿",
    "pecial": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 270,
    "name": "격투대 무장대원 블루 파이어릿",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 271,
    "name": "격투대 무장대원 그린 파이어릿",
    "special": "STR슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "힘 슬롯 체인지·기 슬롯"
  },
  {
    "no": 272,
    "name": "격투대 무장대원 옐로 파이어릿",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 273,
    "name": "격투대 무장대원 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트"
  },
  {
    "no": 274,
    "name": "참격대 무장대원 레드 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 275,
    "name": "참격대 무장대원 블루 파이어릿",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 276,
    "name": "참격대 무장대원 그린 파이어릿",
    "special": "QCK슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "속 슬롯 체인지·기 슬롯"
  },
  {
    "no": 277,
    "name": "참격대 무장대원 옐로 파이어릿",
    "special": "INT슬롯을 PSY슬롯으로 바꾼다",
    "specialName": "지 슬롯 체인지·심 슬롯"
  },
  {
    "no": 278,
    "name": "참격대 무장대원 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 슬래쉬"
  },
  {
    "no": 279,
    "name": "돌격대 무장대원 레드 파이어릿",
    "special": "RCV슬롯을 STR슬롯으로 바꾼다",
    "specialName": "고기슬롯 체인지·힘 슬롯"
  },
  {
    "no": 280,
    "name": "돌격대 무장대원 블루 파이어릿",
    "special": "DEX슬롯을 QCK슬롯으로 바꾼다",
    "specialName": "[기]]슬롯 체인지·[속]"
  },
  {
    "no": 281,
    "name": "돌격대 무장대원 그린 파이어릿",
    "special": "QCK슬롯을 DEX슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[기]"
  },
  {
    "no": 282,
    "name": "돌격대 무장대원 옐로 파이어릿",
    "special": "QCK슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[속]슬롯 체인지·[고기]"
  },
  {
    "no": 283,
    "name": "돌격대 무장대원 블랙 파이어릿",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스파이럴"
  },
  {
    "no": 284,
    "name": "저격대 무장대원 레드 파이어릿",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 285,
    "name": "저격대 무장대원 블루 파이어릿",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 286,
    "name": "저격대 무장대원 그린 파이어릿",
    "special": "DEX슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[기]슬롯 체인지·[고기]"
  },
  {
    "no": 287,
    "name": "저격대 무장대원 옐로 파이어릿",
    "special": "PSY슬롯을 RCV슬롯으로 바꾼다",
    "specialName": "[심]슬롯 체인지·[고기]"
  },
  {
    "no": 288,
    "name": "저격대 무장대원 블랙 파이어릿",
    "special": "적 전체에 공격×5배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 샷"
  },
  {
    "no": 289,
    "name": "포격수 숙련자",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 290,
    "name": "Mr.13&미스 프라이데이13일의 금요일（언럭키즈）",
    "special": "적 1명에게 캐릭터 공격력의 25배의 INT 데미지",
    "specialName": "심판의 폭탄",
    "captain": "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 291,
    "name": "도리",
    "special": "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다.",
    "specialName": "고기 슬롯 스톰",
    "captain": "[INT] 캐릭터에게 받는 데미지를 50% 감소한다."
  },
  {
    "no": 292,
    "name": "브로기",
    "special": "가까이 있는 캐릭터의 슬롯을 [RCV]로 바꾼다.",
    "specialName": "고기 슬롯 스톰",
    "captain": "[PSY] 캐릭터에게 받는 데미지를 50% 감소한다."
  },
  {
    "no": 293,
    "name": "트리케라톱스",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드",
    "captain": "[QCK] 캐릭터의 체력을 2배로 만든다."
  },
  {
    "no": 294,
    "name": "렉스",
    "special": "적 1명에게 공격×10배의 캐릭터 속성 데미지",
    "specialName": "하이퍼 스트레이트",
    "captain": "[STR] 캐릭터의 체력을 2배로 만든다."
  },
  {
    "no": 295,
    "name": "브론드 사우르스",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔",
    "captain": "[DEX] 캐릭터의 체력을 2배로 만든다."
  },
  {
    "no": 296,
    "name": "츠루",
    "special": "체력 2,000 회복, 랜덤으로 모든 슬롯을 변경시킨다.",
    "specialName": "클렌징 워시",
    "captain": "사격타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 297,
    "name": "대참모 츠루",
    "special": "체력 2,000 회복, 랜덤으로 모든 슬롯을 변경시킨다.",
    "specialName": "클렌징 워시",
    "captain": "사격타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 298,
    "name": "모몬가",
    "special": "적 한명에게 캐릭터 공격력에 25배의 [PSY] 데미지",
    "specialName": "문워크",
    "captain": "[PSY] 캐릭터의 체력을 2배로 만든다."
  },
  {
    "no": 299,
    "name": "오니구모",
    "special": "적 전체의 HP를 10% 줄인다",
    "specialName": "8도류 오니구모",
    "captain": "[DEX] 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 300,
    "name": "빨간 갑옷 바닷가재"
  },
  {
    "no": 301,
    "name": "파란 갑옷 바닷가재"
  },
  {
    "no": 302,
    "name": "초록 갑옷 바닷가재"
  },
  {
    "no": 303,
    "name": "노란 갑옷 바닷가재"
  },
  {
    "no": 304,
    "name": "검은 갑옷 바닷가재"
  },
  {
    "no": 305,
    "name": "몽키 D. 가프",
    "special": "모든 슬롯을 [PSY] 혹은 [RCV]로 변환시킨다.",
    "specialName": "주먹 유성우",
    "captain": "[PSY] 캐릭터의 체력과 공격력을 1.5배로 만든다."
  },
  {
    "no": 306,
    "name": "주먹의 가프",
    "special": "모든 슬롯을 [PSY] 혹은 [RCV]로 변환시킨다.",
    "specialName": "주먹 유성우",
    "captain": "[PSY] 캐릭터의 체력과 공격력을 2배로 만든다."
  },
  {
    "no": 307,
    "name": "트라팔가 로",
    "special": "[DEX] 이외의 슬롯을 [DEX], [RCV],[TND] 으로 변환한다.",
    "specialName": "ROOM - 샘블즈",
    "captain": "DEX 캐릭터의 공격력을 2.5배로 만든다."
  },
  {
    "no": 308,
    "name": "트라팔가 로 ROOM",
    "special": "[DEX] 이외의 슬롯을 [DEX], [RCV],[TND] 으로 변환한다.",
    "specialName": "ROOM - 샘블즈",
    "captain": "DEX 캐릭터의 공격력을 2.5배로 만든다."
  },
  {
    "no": 309,
    "name": "바질 호킨스",
    "special": "적 전체의 HP를 10% 줄이고, 방어력을 반으로 줄인다 (3턴)",
    "specialName": "항마의 상",
    "captain": "일당의 회복력을 큰 폭으로 낮추고(90%감소), 받는 피해를 40% 줄인다."
  },
  {
    "no": 310,
    "name": "마술사 바질 호킨스",
    "special": "적 전체의 HP를 10% 줄이고, 방어력을 반으로 줄인다 (3턴)",
    "specialName": "항마의 상",
    "captain": "일당의 회복력을 큰 폭으로 낮추고(90%감소), 받는 피해를 40% 줄인다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 311,
    "name": "킬러",
    "special": "HP가 1이 되는 대신 적 1명에게 슈퍼 데미지 (공격력 x100)",
    "specialName": "살육무인",
    "captain": "3연속으로 GOOD 이전 판정을 받으면 이후 캐릭터의 공격력이 3.5배",
    "sailor": "When HP is below x%, boosts ATK of Cerebral Characters by 50"
  },
  {
    "no": 312,
    "name": "살인무인 킬러",
    "special": "HP가 1이 되는 대신 적 1명에게 슈퍼 데미지 (공격력 x100)",
    "specialName": "살육무인",
    "captain": "3연속으로 GOOD 이전 판정을 받으면 이후 캐릭터의 공격력이 3.5배",
    "sailor": "When HP is below x%, boosts ATK of Cerebral Characters by 50"
  },
  {
    "no": 313,
    "name": "우루지",
    "special": "타격형 캐릭터의 공격이1.5배 (1턴), 1명에게 PSY 데미지(25배) ",
    "specialName": "인과응보",
    "captain": "타격 타입 캐릭터의 공격력을 2배, 체력을 1.5배로 만든다."
  },
  {
    "no": 314,
    "name": "괴승 우루지",
    "special": "타격형 캐릭터의 공격이1.5배 (1턴), 1명에게 PSY 데미지(25배) ",
    "specialName": "인과응보",
    "captain": "타격 타입 캐릭터의 공격력을 2배, 체력을 1.5배로 만든다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 315,
    "name": "베포",
    "special": "슬롯 [PSY],[INT] 을 [STR] 으로, [DEX],[QCK]을 [EMPTY]으로 변환",
    "specialName": "아이 아이, 캡틴!",
    "captain": "격투 타입 캐릭터의 능력치를 1.5배로 만든다.",
    "sailor": "Reduces numbess for 2 turns for himself"
  },
  {
    "no": 316,
    "name": "무투가 베포",
    "special": "슬롯 [PSY],[INT] 을 [STR] 으로, [DEX],[QCK]을 [EMPTY]으로 변환",
    "specialName": "아이 아이, 캡틴!",
    "captain": "격투 타입 캐릭터의 능력치를 1.5배로 만든다.",
    "sailor": "Reduces numbess for 2 turns for himself"
  },
  {
    "no": 317,
    "name": "칼리파",
    "special": "모든 슬롯을 [DEX] 혹은 [STR]로 변환시킨다., 모든 적에게 랜덤으로 [DEX] 데미지",
    "specialName": "미인 비서의 직업",
    "specialNotes": "랜덤 데미지 1 ~ 15,000",
    "captain": "턴 종료후 HP 500 회복, 적으로부터 받는 데미지 10% 감소",
    "sailor": "Boosts HP of Powerhouse Units by 100"
  },
  {
    "no": 318,
    "name": "미인비서 칼리파",
    "special": "모든 슬롯을 [DEX] 혹은 [STR]로 변환시킨다., 모든 적에게 랜덤으로 [DEX] 데미지",
    "specialName": "미인 비서의 직업",
    "specialNotes": "랜덤 데미지 1 ~ 15,000",
    "captain": "턴 종료후 HP 1,000 회복, 적으로부터 받는 데미지 15% 감소"
  },
  {
    "no": 319,
    "name": "파울리",
    "special": "일당 전원의 슬롯을 고정한다 (1턴)",
    "specialName": "벌칙, 외줄낚시",
    "captain": "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 320,
    "name": "파울리 1번도크 의장 마스트 직장",
    "special": "일당 전원의 슬롯을 고정한다 (1턴)",
    "specialName": "벌칙, 외줄낚시",
    "captain": "타격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 321,
    "name": "로브 루치",
    "special": "적 1명에게 캐릭터 공격력에 25배의 [QCK] 데미지.",
    "specialName": "과묵한 연격",
    "captain": "[QCK] 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 322,
    "name": "로브 루치 1번도크 톱질 나무못 직장",
    "special": "적 1명에게 캐릭터 공격력에 25배의 [QCK] 데미지.",
    "specialName": "과묵한 연격",
    "captain": "[QCK] 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 323,
    "name": "카쿠",
    "special": "2턴동안 슬롯의 영향을 1.5배 증폭시킨다.",
    "specialName": "산 바람",
    "captain": "[QCK] 캐릭터의 체력과 회복력을 1.5배로 만든다."
  },
  {
    "no": 324,
    "name": "카쿠 1번도크 목수 직장",
    "special": "2턴동안 슬롯의 영향을 1.5배 증폭시킨다.",
    "specialName": "산 바람",
    "captain": "[QCK] 캐릭터의 체력과 회복력을 1.5배로 만든다."
  },
  {
    "no": 325,
    "name": "루루",
    "special": "[TND] 슬롯을 [RCV] 슬롯으로, [RCV] 슬롯을 [QCK] 슬롯으로 변환",
    "specialName": "작열하는 장인 정신"
  },
  {
    "no": 326,
    "name": "와포루",
    "special": "모든 슬롯을 비우고, 적 1명에게 캐릭터 공격력에 25배의 [STR] 데미지.",
    "specialName": "우걱우걱 '벨로 대포'",
    "captain": "턴 종료 후 캐릭터 회복력에 10배의 체력을 회복시킨다."
  },
  {
    "no": 327,
    "name": "와포루 하우스",
    "special": "모든 슬롯을 비우고, 적 1명에게 캐릭터 공격력에 25배의 [STR] 데미지.",
    "specialName": "우걱우걱 '벨로 대포'",
    "captain": "턴 종료 후 캐릭터 회복력에 10배의 체력을 회복시킨다."
  },
  {
    "no": 328,
    "name": "도르돈",
    "special": "적 전체에게 캐릭터 공격력에 20배의 [QCK] 데미지.",
    "specialName": "바이올린 돌격",
    "captain": "전투가 시작될때 체력이 30% 이하면 일당의 회복력이 5배가 된다."
  },
  {
    "no": 329,
    "name": "도르돈 들소（바이슨）",
    "special": "적 전체에게 캐릭터 공격력에 20배의 [QCK] 데미지.",
    "specialName": "바이올린 돌격",
    "captain": "전투가 시작될때 체력이 30% 이하면 일당의 회복력이 5배가 된다."
  },
  {
    "no": 330,
    "name": "체스"
  },
  {
    "no": 331,
    "name": "쿠로 마리모"
  },
  {
    "no": 332,
    "name": "체스 마리모",
    "special": "[STR]슬롯을 [RCV] 슬롯으로, [RCV] 슬롯을 [DEX] 슬롯으로 변환.",
    "specialName": "눈 가르기 풀",
    "captain": "타격 타입 캐릭터의 체력, 회복력, 공격력을 1.2배로 만든다."
  },
  {
    "no": 333,
    "name": "Dr.쿠레하",
    "special": "체력을 랜덤량 회복한다.",
    "specialName": "닥터 스톱",
    "captain": "[PSY] 캐릭터의 회복력과 공격력을 1.5배로 만든다."
  },
  {
    "no": 334,
    "name": "라팡",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 335,
    "name": "라팡 성체",
    "special": "캐릭터의 회복×5배의 체력을 회복한다",
    "specialName": "라이트 힐링"
  },
  {
    "no": 336,
    "name": "프랑키",
    "special": "슬롯을 슈퍼! 자유롭게 2번 바꾸자!",
    "specialName": "프랑키 켄타우로스",
    "captain": "전투 시작시 체력이 50% 이상이면 받는 데미지 10% 감소시킨다. 또한 [PSY] 캐릭터 공격력을 2배로 만들고 다른 속성 캐릭터의 공격력을 20% 감소 시킨다."
  },
  {
    "no": 337,
    "name": "해체전문 프랑키",
    "special": "슬롯을 슈퍼! 자유롭게 2번 바꾸자!",
    "specialName": "프랑키 켄타우로스",
    "captain": "전투 시작시 체력이 50% 이상이면 받는 데미지 10% 감소시킨다. 또한 [PSY] 캐릭터 공격력을 2.5배로 만들고 다른 속성 캐릭터의 공격력을 20% 감소 시킨다."
  },
  {
    "no": 338,
    "name": "키위",
    "special": "[QCK] 슬롯을 [PSY] 슬롯으로 변환시킨다.",
    "specialName": "삼각 머리"
  },
  {
    "no": 339,
    "name": "모즈",
    "special": "[INT] 슬롯을 [TND] 슬롯으로 변환시킨다.",
    "specialName": "사각 머리"
  },
  {
    "no": 340,
    "name": "크라켄 스루메",
    "special": "모든 슬롯을 [STR] 혹은 [QCK]로 변환시킨다., 모든 적에게 랜덤으로 [STR] 데미지.",
    "specialName": "크라켄 촉수 크러쉬",
    "specialNotes": "랜덤 데미지 1 ~ 15,000",
    "captain": "타격 타입의 캐릭터 공격력을 2배로 만든다."
  },
  {
    "no": 341,
    "name": "크라켄 북극의 괴물",
    "special": "모든 슬롯을 [STR] 혹은 [QCK]로 변환시킨다., 모든 적에게 랜덤으로 [STR] 데미지.",
    "specialName": "크라켄 촉수 크러쉬",
    "specialNotes": "랜덤 데미지 1 ~ 15,000",
    "captain": "타격 타입의 캐릭터 공격력을 2배로 만든다."
  },
  {
    "no": 342,
    "name": "빨간 파워스돼지"
  },
  {
    "no": 343,
    "name": "파란 파워스돼지"
  },
  {
    "no": 344,
    "name": "초록 파워스돼지"
  },
  {
    "no": 345,
    "name": "노란 파워스돼지"
  },
  {
    "no": 346,
    "name": "검은 파워스돼지"
  },
  {
    "no": 347,
    "name": "루비 파워스돼지"
  },
  {
    "no": 348,
    "name": "사파이어 파워스돼지"
  },
  {
    "no": 349,
    "name": "에메랄드 파워스돼지"
  },
  {
    "no": 350,
    "name": "토파즈 파워스돼지"
  },
  {
    "no": 351,
    "name": "자수정 파워스돼지"
  },
  {
    "no": 352,
    "name": "제파",
    "special": "2턴 동안 사격 타입의 캐릭터 공격력을 1.75배로 만든다.",
    "specialName": "스매쉬 버스터",
    "captain": "사격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 353,
    "name": "제파 NEO해군 총사",
    "special": "2턴 동안 사격 타입의 캐릭터 공격력을 1.75배로 만든다.",
    "specialName": "스매쉬 버스터",
    "captain": "사격 타입 캐릭터의 공격력을 2.5배로 만든다.",
    "limit": [
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: B사격 캐릭터의 공격력, 체력, 회복력을 20 상승시킨다."
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "새로운 선장 효과 습득: 사격 캐릭터의 공격력을 2.5배 상승시키고, 체력을 1.2배 상승시킨다. 그리고 매턴 체력 300을 회복한다."
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
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
      }
    ]
  },
  {
    "no": 354,
    "name": "아인",
    "special": "'봉인'과 '선장 효과 무효' 상태를 3턴 줄인다.",
    "specialName": "쌍검 난무"
  },
  {
    "no": 355,
    "name": "아인 NEO해군 중장",
    "special": "'봉인'과 '선장 효과 무효' 상태를 3턴 줄인다.",
    "specialName": "쌍검 난무"
  },
  {
    "no": 356,
    "name": "유스타스 키드",
    "special": "자신의 슬롯을 [STR]으로 변경하고 적 전체에 공격X7배의 데미지",
    "specialNotes": "인게임 설명이 잘못되어있음, 이 필살기는 7배의 데미지가 아님.",
    "specialName": "강철 자성체의 팔",
    "captain": "타격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 357,
    "name": "캡틴 키드",
    "special": "자신의 슬롯을 [STR]으로 변경하고 적 전체에 공격X7배의 데미지",
    "specialNotes": "인게임 설명이 잘못되어있음, 이 필살기는 7배의 데미지가 아님.",
    "specialName": "강철 자성체의 팔",
    "captain": "타격 타입 캐릭터의 공격력을 2.5배로 만든다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 358,
    "name": "스크래치멘 아푸",
    "special": "[TND],[RCV]슬롯을 [DEX]슬롯으로 변환 적 전체에 랜덤의 [DEX]데미지.",
    "specialName": "스크래치 바디",
    "specialNotes": "랜덤 데미지 범위는 5,000 ~ 20,000 사이",
    "captain": "전투가 시작되기전 체력이 가득 차 있으면 [DEX] 캐릭터의 공격력이 2.5배가 된다."
  },
  {
    "no": 359,
    "name": "바다천둥 스크래치멘 아푸",
    "special": "[TND],[RCV]슬롯을 [DEX]슬롯으로 변환 적 전체에 랜덤의 [DEX]데미지.",
    "specialName": "스크래치 바디",
    "specialNotes": "랜덤 데미지 범위는 5,000 ~ 20,000 사이",
    "captain": "전투가 시작되기전 체력이 가득 차 있으면 [DEX] 캐릭터의 공격력이 3배가 된다.",
    "limit": [
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 100"
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "선원효과 추가 1: [DEX]캐릭터의 공격력, 체력, 회복력이 30 상승한다."
      },
      {
        "description": "체력 상승 : 150"
      },
      {
        "description": "선원효과 추가 2: 사격 캐릭터의 공격력을 50 상승시킨다."
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "새로운 선장 효과 습득: 전투 시작시 체력이 가득 차 있으면 [DEX]캐릭터의 공격력이 3배 상승하고, 그렇지 않으면 2배 상승한다."
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
          "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
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
      }
    ]
  },
  {
    "no": 360,
    "name": "X 드레이크",
    "special": "적 전체에 공격력 X10배의 [INT] 데미지,체력이 50% 이상 일때 1턴 동안 공격을 받아도 쓰러지지 않는다.",
    "specialName": "동물 고대 종의 힘",
    "captain": "전투가 시작될때 체력이 30%이하면 [INT]캐릭터의 공격력을 3배로 만든다.",
    "sailor": "강인 캐릭터의 체력을 100 상승시킨다."
  },
  {
    "no": 361,
    "name": "붉은깃발 X 드레이크",
    "special": "적 전체에 공격력 X10배의 [INT] 데미지,체력이 50% 이상 일때 1턴 동안 공격을 받아도 쓰러지지 않는다.",
    "specialName": "동물 고대 종의 힘",
    "captain": "전투가 시작될때 체력이 30%이하면 [INT]캐릭터의 공격력을 3배로 만든다.",
    "sailor": "강인 캐릭터의 체력을 100 상승시킨다."
  },
  {
    "no": 362,
    "name": "쥬얼리 보니",
    "sspecial": "2턴 동안 [RCV] 사용 시 회복량이 1번째에 1.5배, 2연속 2배, 3연속이후 2.5배 가 된다.",
    "specialName": "대식가",
    "captain": "[PSY] 캐릭터의 공격력과 회복을 2배로 만든다."
  },
  {
    "no": 363,
    "name": "대식가 쥬얼리 보니",
    "special": "2턴 동안 [RCV] 사용 시 회복량이 1번째에 1.5배, 2연속 2배, 3연속이후 2.5배 가 된다.",
    "specialName": "대식가",
    "captain": "[PSY] 캐릭터의 공격력과 회복을 2배로 만든다."
  },
  {
    "no": 364,
    "name": "카포네 벳지",
    "special": "[STR],[DEX] 슬롯을 [QCK]슬롯으로 바꾼다.",
    "specialName": "갱 포트리스",
    "captain": "[QCK] 캐릭터의 공격력과 회복을 2배로 만든다.",
    "sailor": "모든 캐릭터의 회복력을 10 상승시킨다."
  },
  {
    "no": 365,
    "name": "카포네 갱 벳지",
    "special": "[STR],[DEX] 슬롯을 [QCK]슬롯으로 바꾼다.",
    "specialName": "갱 포트리스",
    "captain": "[QCK] 캐릭터의 공격력과 회복을 2배로 만든다.",
    "sailor": "모든 캐릭터의 회복력을 10 상승시킨다."
  },
  {
    "no": 366,
    "name": "실버즈 레일리",
    "special": "적 전체에 공격x20배의 INT 데미지, 봉쇄 상태를 5턴 회복",
    "specialName": "명왕의 패기",
    "captain": "체인 계수 증가량 4배로 상승"
  },
  {
    "no": 367,
    "name": "명왕 레일리",
    "special": "적 전체에 공격x20배의 INT 데미지, 봉쇄 상태를 5턴 회복",
    "specialName": "명왕의 패기",
    "captain": "체인 계수 증가량 4배로 상승"
  },
  {
    "no": 368,
    "name": "거인 참격대 레드 파이어릿",
    "special": "1턴 동안 [DEX] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [기]"
  },
  {
    "no": 369,
    "name": "거인 사격대 블루 파이어릿",
    "special": "1턴 동안 [STR] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [힘]"
  },
  {
    "no": 370,
    "name": "거인 여전사 그린 파이어릿",
    "special": "1턴 동안 [QCK] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [속]"
  },
  {
    "no": 371,
    "name": "거인 격투대 옐로 파이어릿",
    "special": "1턴 동안 [INT] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [지]"
  },
  {
    "no": 372,
    "name": "거인 돌격대 블랙 파이어릿",
    "special": "1턴 동안 [PSY] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [심]"
  },
  {
    "no": 373,
    "name": "거인 참격근위대 레드 파이어릿",
    "special": "1턴 동안 [DEX] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [기]",
    "captain": "참격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 374,
    "name": "거인 사격근위대 블루 파이어릿",
    "special": "1턴 동안 [STR] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [힘]",
    "captain": "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 375,
    "name": "거인 여전사근위대 그린 파이어릿",
    "special": "1턴 동안 [QCK] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [속]",
    "captain": "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 376,
    "name": "거인 격투근위대 옐로 파이어릿",
    "special": "1턴 동안 [INT] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [지]",
    "captain": "격투 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 377,
    "name": "거은 돌격근위대 블랙 파이어릿",
    "special": "1턴 동안 [PSY] 캐릭터에게 받는 데미지를 50% 감소시킨다.",
    "specialName": "크리스탈 실드 [심]",
    "captain": "타격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 378,
    "name": "바다 고양이",
    "special": "캐릭터 회복력의 3배 만큼 체력을 회복시킨다.",
    "specialName": "빠른 회복",
    "captain": "모든 캐릭터의 회복력을 1.5배로 만든다."
  },
  {
    "no": 379,
    "name": "쿵푸 듀공",
    "special": "'중독'상태를 제거한다.",
    "specialName": "회복의 듀공 쿵푸 주먹"
  },
  {
    "no": 380,
    "name": "쿵푸 듀공 형제제자",
    "special": "'중독'상태를 제거한다.",
    "specialName": "회복의 듀공 쿵푸 주먹",
    "captain": "[STR] 캐릭터의 회복력과 공격력을 1.5배로 만든다."
  },
  {
    "no": 381,
    "name": "바나나 악어",
    "special": "받는 데미지를 1턴 동안 20％ 감소시킨다",
    "specialName": "아이언 실드"
  },
  {
    "no": 382,
    "name": "모래 도마뱀",
    "special": "적 전체의 방어력을 1턴 동안 반으로 줄인다",
    "specialName": "실드 크래셔"
  },
  {
    "no": 383,
    "name": "Mr.0 바로크워크스 사장",
    "special": "적 1명을 강력하게 중독시킨다.",
    "specialNotes": "맹독은 턴 종료시 캐릭터 공격력에 5배의 고정데미지를 입힌다.",
    "specialName": "독침",
    "captain": "받는 데미지를 10% 감소 시키고 [INT] 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 384,
    "name": "크로커다일",
    "special": "적 1명을 강력하게 중독시킨다.",
    "specialNotes": "맹독은 턴 종료시 캐릭터 공격력에 5배의 고정데미지를 입힌다.",
    "specialName": "독침",
    "captain": "받는 데미지를 10% 감소 시키고 [INT] 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 385,
    "name": "호그백",
    "special": "1턴 동안 받는 데미지를 50% 감소 시키고, 타격 타입 캐릭터의 공격력을 1.25배로 만든다.",
    "specialName": "좀비 인형 수술",
    "captain": "[INT] 캐릭터의 공격을 2배로 만든다."
  },
  {
    "no": 386,
    "name": "닥터 호그백",
    "special": "1턴 동안 받는 데미지를 50% 감소 시키고, 타격 타입 캐릭터의 공격력을 1.25배로 만든다.",
    "specialName": "좀비 인형 수술",
    "captain": "[INT] 캐릭터의 공격을 2배로 만든다."
  },
  {
    "no": 387,
    "name": "신도리짱",
    "special": "모든 슬롯을 [PSY] 혹은 [INT]로 변환시킨다., 모든 적에게 랜덤으로 [INT] 데미지.",
    "specialName": "사각 접시 칼",
    "specialNotes": "랜덤 데미지 1~10,000",
    "captain": "[PSY] 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 388,
    "name": "빅토리아 신도리",
    "special": "모든 슬롯을 [PSY] 혹은 [INT]로 변환시킨다., 모든 적에게 랜덤으로 [INT] 데미지.",
    "specialName": "사각 접시 칼",
    "specialNotes": "랜덤 데미지 1~10,000",
    "captain": "[PSY] 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 389,
    "name": "엠포리오 이완코프",
    "special": "자신의 슬롯을 [QCK] 으로 바꾸고 다른 슬롯을 [RCV], [STR], [DEX] 또는 [QCK] 슬롯으로 변환 시킨다.",
    "specialName": "헬 윙크",
    "captain": "[DEX] -> [INT] -> [QCK] 캐릭터 순서로 GOOD 이상 연계하면 공격력이 2.25배로 증가한다."
  },
  {
    "no": 390,
    "name": "엠포리오 이완코프 뉴하프왕국 여왕【영구결번】",
    "special": "자신의 슬롯을 [QCK] 으로 바꾸고 다른 슬롯을 [RCV], [STR], [DEX] 또는 [QCK] 슬롯으로 변환 시킨다.",
    "specialName": "헬 윙크",
    "captain": "[DEX] -> [INT] -> [QCK] 캐릭터 순서로 GOOD 이상 연계하면 공격력이 2.75배로 증가한다."
  },
  {
    "no": 391,
    "name": "페로나",
    "special": "1턴 동안 받는 데미지를 90% 감소 시키고, 모든 적의 방어력을 80% 감소시킨다 그리고 턴이 종료되면 1,000의 고정데미지를 입힌다.",
    "specialName": "네가티브 할로우",
    "captain": "[DEX] 캐릭터의 회복력을 1.5배로 만든다"
  },
  {
    "no": 392,
    "name": "페로나 고스트 프린세스",
    "special": "1턴 동안 받는 데미지를 90% 감소 시키고, 모든 적의 방어력을 80% 감소시킨다 그리고 턴이 종료되면 1,000의 고정데미지를 입힌다.",
    "specialName": "네가티브 할로우",
    "captain": "[DEX] 캐릭터의 회복력을 2배로 만든다"
  },
  {
    "no": 393,
    "name": "쿠마시",
    "special": "적 한명에게 캐릭터 공격력에 35배의 [STR] 데미지.",
    "specialName": "쿠마시 너클"
  },
  {
    "no": 394,
    "name": "개 펭귄",
    "special": "모든 적에게 500의 고정 데미지",
    "specialName": "'사랑'이라 불리는 토네이도"
  },
  {
    "no": 395,
    "name": "미스 메리크리스마스 두더지인간",
    "special": "주위 캐릭터의 슬롯을 비우고, 1턴 동안 슬롯의 영향을 1.25배 증폭시킨다.",
    "specialName": "두더지 바나나",
    "captain": "[QCK] 캐릭터의 회복력과 공격력을 1.2배로 만든다."
  },
  {
    "no": 396,
    "name": "미스 메리크리스마스",
    "special": "주위 캐릭터의 슬롯을 비우고, 1턴 동안 슬롯의 영향을 1.25배 증폭시킨다.",
    "specialName": "두더지 바나나",
    "captain": "[QCK] 캐릭터의 회복력과 공격력을 1.2배로 만든다."
  },
  {
    "no": 397,
    "name": "Mr.4",
    "special": "50%확률로 [EMPTY]을 [STR]슬롯으로 채우고, 모든 적에게 캐릭터 공격력에 15배의 데미지를 입힌다.",
    "specialName": "4톤짜리 배트",
    "captain": "5연속 PERFECT 이후 캐릭터의 공격력이 3배가 된다."
  },
  {
    "no": 398,
    "name": "Mr.4 견총 랏슈",
    "special": "50%확률로 [EMPTY]을 [STR]슬롯으로 채우고, 모든 적에게 캐릭터 공격력에 15배의 데미지를 입힌다.",
    "specialName": "4톤짜리 배트",
    "captain": "5연속 PERFECT 이후 캐릭터의 공격력이 4배가 된다."
  },
  {
    "no": 399,
    "name": "미스 더블핑거",
    "special": "1턴 동안 [DEX] 캐릭터의 공격력을 1.5배로 만든다.",
    "specialName": "가시 가시 도핑",
    "captain": "타격 타입 캐릭터의 체력을 1.5배로 만든다."
  },
  {
    "no": 400,
    "name": "미스 더블핑거 가시인간",
    "special": "1턴 동안 [DEX] 캐릭터의 공격력을 1.5배로 만든다.",
    "specialName": "가시 가시 도핑",
    "captain": "타격 타입 캐릭터의 체력을 2배로 만든다."
  },
  {
    "no": 401,
    "name": "Mr.1",
    "special": "1턴 동안 받는 데미지를 50% 감소시키고, 참격 타입 캐릭터의 공격력을 1.25배로 만든다.",
    "specialName": "아이언 가드",
    "captain": "받는 데미지를 10% 감소시키고, 참격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 402,
    "name": "Mr.1 전신칼날인간",
    "special": "1턴 동안 받는 데미지를 50% 감소시키고, 참격 타입 캐릭터의 공격력을 1.25배로 만든다.",
    "specialName": "아이언 가드",
    "captain": "받는 데미지를 10% 감소시키고, 참격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 403,
    "name": "레베카",
    "special": "모든 적에게 일당의 체력이 적을 수록 큰 [QCK] 데미지를 입힌다.",
    "specialName": "배수진 검무",
    "captain": "남은 체력이 적을 때, 받는 데미지 50% 감소 시키고 캐릭터의 회복력을 3배로 만든다."
  },
  {
    "no": 404,
    "name": "압살롬",
    "special": "2턴 동안 받는 데미지를 50% 감소 시키고 캐릭터의 회복력을 2배로 만든다.",
    "specialName": "투명투명 열매",
    "captain": "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 405,
    "name": "묘지의 압살롬",
    "special": "2턴 동안 받는 데미지를 50% 감소 시키고 캐릭터의 회복력을 2배로 만든다.",
    "specialName": "투명투명 열매",
    "captain": "사격 타입 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 406,
    "name": "장군좀비",
    "special": "일당의 체력을 1로 감소 시키고, 적 전체에게 고정 데미지 1,000을 입힌다, 1턴동안 모든 캐릭터의 공격력을 1.2배로 만든다.",
    "specialName": "고대 전사들의 전투기술"
  },
  {
    "no": 407,
    "name": "바람의 지고로",
    "special": "랜덤으로 모든 슬롯을 바꾸고, 전 전체에게 캐릭터 공격력에 7배의 [DEX]데미지",
    "specialName": "좀비류 36번뇌봉"
  },
  {
    "no": 408,
    "name": "Sir 크로커다일 왕의 부하 칠무해",
    "special": "자신의 슬롯을 [INT]슬롯으로 변환 하고 나머지 캐릭터의 슬롯을 랜덤으로 바꾼다.,적 전체에게 캐릭터 공격력에 15배의 [INT]데미지",
    "specialName": "그라운드 데스",
    "captain": "받는 데미지를 20%줄이고, 참격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 409,
    "name": "징베",
    "special": "자신의 슬롯을 [QCK]슬롯으로 변환하고 적 한명에게 캐릭터 공격력에 13배의 [QCK]데미지.",
    "specialName": "해류 한판 엎어치기",
    "captain": "격투 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 410,
    "name": "징베 왕의 부하 칠무해",
    "special": "자신의 슬롯을 [QCK]슬롯으로 변환하고 적 한명에게 캐릭터 공격력에 13배의 [QCK]데미지.",
    "specialName": "해류 한판 엎어치기",
    "captain": "격투 타입 캐릭터의 공격력을 2.5배로 만든다."
  },
  {
    "no": 411,
    "name": "바솔로뮤 쿠마",
    "special": "자신과 인접한 캐릭터의 슬롯을 [STR]으로 변환시키고, 적 전체에게 1,000의 고정 데미지",
    "specialName": "곰의 충격",
    "captain": "[STR] 캐릭터의 체력과 공격력을 2배로 만든다."
  },
  {
    "no": 412,
    "name": "바솔로뮤 쿠마 왕의 부하 칠무해",
    "special": "자신과 인접한 캐릭터의 슬롯을 [STR]으로 변환시키고, 적 전체에게 1,000의 고정 데미지",
    "specialName": "곰의 충격",
    "captain": "[STR] 캐릭터의 체력과 공격력을 2배로 만든다."
  },
  {
    "no": 413,
    "name": "겟코 모리아",
    "special": "[STR],[DEX]슬롯을 [INT]슬롯으로 변환",
    "specialName": "그림자",
    "captain": "전투가 시작될때 체력이 가득 차 있으면 [INT] 캐릭터의 공격력을 2.5배로 만든다. "
  },
  {
    "no": 414,
    "name": "겟코 모리아 왕의 부하 칠무해",
    "special": "[STR],[DEX]슬롯을 [INT]슬롯으로 변환",
    "specialName": "그림자",
    "captain": "전투가 시작될때 체력이 가득 차 있으면 [INT] 캐릭터의 공격력을 3배로 만든다. "
  },
  {
    "no": 415,
    "name": "보아 행콕",
    "special": "캐릭터 회복력에 15배만큼 체력을 회복한다. 적의 공격을 1턴 늦춘다.",
    "specialName": "메로메로 멜로우",
    "captain": "전투가 시작될때 체력이 70% 이상이면, [QCK],[PSY]캐릭터의 공격력을 2.75배로, 회복력을 1.5배로 만든다."
  },
  {
    "no": 416,
    "name": "보아 행콕 왕의 부하 칠무해",
    "special": "캐릭터 회복력에 15배만큼 체력을 회복한다. 적의 공격을 1턴 늦춘다.",
    "specialName": "메로메로 멜로우",
    "captain": "전투가 시작될때 체력이 70% 이상이면, [QCK],[PSY]캐릭터의 공격력을 2.75배로, 회복력을 1.5배로 만든다."
  },
  {
    "no": 417,
    "name": "돈키호테 도플라밍고",
    "special": "슬롯을 2회 자유롭게 변경하고, 1턴 동안 슬롯의 영향을 2배로 증폭시킨다.",
    "specialName": "채찍실(오버 히트)",
    "captain": "참격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 418,
    "name": "돈키호테 도플라밍고 왕의 부하 칠무해",
    "special": "슬롯을 2회 자유롭게 변경하고, 1턴 동안 슬롯의 영향을 2배로 증폭시킨다.",
    "specialName": "채찍실(오버 히트)",
    "captain": "참격 타입 캐릭터의 체력과 공격력을 2배로 만든다."
  },
  {
    "no": 419,
    "name": "상디 파라즈 쇼트 “폭풍”",
    "special": "2턴 동안 적 전체의 방어력을 50% 감소시킨다., 모든 슬롯을 랜덤으로 바꾼다.",
    "specialName": "파라즈 쇼트 : 스톰",
    "captain": "[QCK] 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 420,
    "name": "몽키 D. 루피 고무고무 바주카“패”",
    "special": "선장 효과 무효 상태를 3 턴 회복하고 적 1 체에 캐릭터 공격력 × 15 배의 STR대미지",
    "specialName": "고무고무 바주카 ‘하’",
    "captain": "STR캐릭터의 능력치가 1.5 배가 된다."
  },
  {
    "no": 421,
    "name": "롤로노아조로 삼 천 세 계“참”",
    "special": "봉인 상태를 2 턴 회복 적 전체에 캐릭터 공격력 × 10 배의 DEX대미지",
    "specialName": "삼.천.세.계: 일무은 ‘참’",
    "captain": "DEX캐릭터의 능력치가 1.5 배가 된다"
  },
  {
    "no": 422,
    "name": "나미 신기루＝텐포“천”",
    "special": "INT의 공격을 1 턴 무효화하고 체력을 랜덤 량 회복",
    "specialName": "미라쥬 템포: 하늘",
    "captain": "INT캐릭터의 능력치가 1.5 배가 된다"
  },
  {
    "no": 423,
    "name": "브룩",
    "special": "체력을 4,343 회복 적 전체의 방어력을 2 턴 동안 반감",
    "specialName": "자장가 프랑",
    "captain": "체력이 많이 남아 있으면 공격을 받아도 쓰러지지 않는다."
  },
  {
    "no": 424,
    "name": "콧노래 브룩",
    "special": "체력을 4,343 회복 적 전체의 방어력을 2 턴 동안 반감",
    "specialName": "자장가 프랑",
    "captain": "체력이 많이 남아있는 경우 일당의 공격력이 1.5 배가 된다, 공격을 받아도 쓰러지지 않는다"
  },
  {
    "no": 425,
    "name": "류마",
    "special": "적 전체에 무작위의 PSY대미지",
    "specialName": "명검 슈스이 콧노래 삼백보",
    "captain": "참격 타입 캐릭터의 공격력과 체력이 1.5 배가 된다"
  },
  {
    "no": 426,
    "name": "마시라",
    "special": "5턴 동안 STR 공격력을 1.05배 상승시킨다.",
    "specialName": "선체 헌터 브레스",
    "captain": "STR캐릭터의 체력이 2 배가 된다"
  },
  {
    "no": 427,
    "name": "쇼죠",
    "special": "봉인상태와 선장 효과 무효 상태를 2 턴 회복",
    "specialName": "음파 ‘파괴의 외침’",
    "captain": "DEX캐릭터의 체력이 2 배가 된다"
  },
  {
    "no": 428,
    "name": "몽블랑 크리켓",
    "special": "받는 대미지를 2 턴 동안 50% 감소",
    "specialName": "최종 보스 – 심해 다이브의 꿈",
    "captain": "PSY캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 429,
    "name": "사우스버드와 숲의주민",
    "special": "적 전체에 캐릭터 공격력 × 7 배의 DEX타격을 주고, 1 턴 동안 방어력을 반감",
    "specialName": "사우스 버드의 겁없는 미소"
  },
  {
    "no": 430,
    "name": "베라미",
    "special": "1 턴 동안 일당 전원 슬롯의 영향 확대(1.5배)",
    "specialName": "스프링 하네토",
    "captain": "DEX캐릭터의 공격력이 1.5 배가 된다."
  },
  {
    "no": 431,
    "name": "하이에나 베라미",
    "special": "1 턴 동안 일당 전원 슬롯의 영향 확대(1.5배)",
    "specialName": "스프링 하네토",
    "captain": "DEX캐릭터의 공격력이 1.5 배가 된다."
  },
  {
    "no": 432,
    "name": "사키스",
    "special": "적 1기에 캐릭터 공격력 × 20배 QCK대미지",
    "specialName": "빅 춉"
  },
  {
    "no": 433,
    "name": "엘리자베스",
    "special": "봉인상태 선장 효과 무효 상태를 1 턴 회복",
    "specialName": "뉴 커머의 유혹",
    "captain": "QCK → STR → DEX의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
  },
  {
    "no": 434,
    "name": "캐롤라인",
    "special": "3 턴 동안 일당 전원 슬롯의 영향을 조금 확대(1.25배)",
    "specialName": "뉴 커머 권법 처녀의 각성",
    "captain": "PSY → INT → INT의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
  },
  {
    "no": 435,
    "name": "상디 카마바카왕국 전통 결투스타일",
    "special": "[RCV], [STR], [DEX] 슬롯을 [STR], [QCK] 임의로 교체",
    "specialName": "가련한 처녀의 꽃",
    "captain": "INT → PSY → QCK의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
  },
  {
    "no": 436,
    "name": "상디 캔디짱",
    "special": "[RCV], [STR], [DEX] 슬롯을 [STR], [QCK] 임의로 교체",
    "specialName": "가련한 처녀의 꽃",
    "captain": "INT → PSY → QCK의 캐릭터 순서로 Good 이상의 공격 이후 캐릭터의 공격이 2 배가된다."
  },
  {
    "no": 437,
    "name": "페로나 스윗트",
    "special": "체력을 조금 회복하고 1 턴 동안받는 대미지를 80% 감소, 턴 당 1,000의 독대미지",
    "specialName": "네거티브 호로 ‘스위트’",
    "captain": "남은 체력이 적을 때, DEX캐릭터의 회복력이 3 배가 된다"
  },
  {
    "no": 438,
    "name": "페로나 스윗트 고스트 프린세스",
    "special": "체력을 조금 회복하고 1 턴 동안받는 대미지를 80% 감소, 턴 당 1,000의 독대미지",
    "specialName": "네거티브 호로 ‘스위트’",
    "captain": "남은 체력이 적을 때, DEX캐릭터의 회복력이 5 배가 된다"
  },
  {
    "no": 439,
    "name": "네펠타리 비비 러브",
    "special": "인접한 슬롯을 [RCV] 슬롯으로 변환하고 다른 슬롯을 랜덤으로 교체",
    "specialName": "돌격! 초 카루가모 부대! ‘러브’",
    "captain": "턴 종료 후에 캐릭터의 회복 x5 배의 체력을 회복한다"
  },
  {
    "no": 440,
    "name": "왕녀 비비 러브",
    "special": "인접한 슬롯을 [RCV] 슬롯으로 변환하고 다른 슬롯을 랜덤으로 교체",
    "specialName": "돌격! 초 카루가모 부대! ‘러브’",
    "captain": "턴 종료 후에 캐릭터의 회복 x7 배의 체력을 회복한다"
  },
  {
    "no": 441,
    "name": "카우보이&버본Jr"
  },
  {
    "no": 442,
    "name": "스톰프&이완x"
  },
  {
    "no": 443,
    "name": "켄타로스&히코이치"
  },
  {
    "no": 444,
    "name": "카루",
    "captain": "체력 일정 이상일 때 진화, 강화 타입 캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 445,
    "name": "카루 대장과 초카루부대",
    "special": "모든 슬롯을 [STR][DEX][QCK][PSY][INT] 슬롯으로 무작위 교체한다, 슬롯을 3 회 자유롭게 이동",
    "specialName": "\t응원! 초 카루가모 부대!",
    "captain": "체력 일정 이상일 때 진화, 강화 타입 캐릭터의 공격력이 2.5 배가 된다"
  },
  {
    "no": 446,
    "name": "마샬 Ｄ 티치",
    "special": "적 전체에 이전 턴에받은 대미지 × 10 배의 무 속성대미지",
    "specialName": "Black Hole",
    "captain": "받는 대미지가 2 배가 되지만, STR캐릭터의 공격력이 2 배 체력이 1.5 배가 된다"
  },
  {
    "no": 447,
    "name": "검은 수염",
    "special": "적 전체에 이전 턴에받은 대미지 × 10 배의 무 속성대미지",
    "specialName": "Black Hole",
    "captain": "받는 대미지가 2 배가 되지만, STR캐릭터의 공격력이 2.5 배 체력이 2.25 배가 된다",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: [STR]캐릭터의 체력 +120"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 448,
    "name": "삿치",
    "special": "3턴 동안 [QCK] 슬롯 출현율이 크게 상승한다.",
    "specialName": "해적왕이 이끄는 검",
    "captain": "공격 시작 전 체력이 꽉 차있으면 [QCK] 캐릭터 공격력을 3배로 만든다"
  },
  {
    "no": 449,
    "name": "쌍검의 삿치",
    "special": "3턴 동안 [QCK] 슬롯 출현율이 크게 상승한다.",
    "specialName": "해적왕이 이끄는 검",
    "captain": "공격 시작 전 체력이 꽉 차있으면 [QCK] 캐릭터 공격력을 3배로 만든다."
  },
  {
    "no": 450,
    "name": "나무르",
    "special": "1턴 동안 격투타입 캐릭터의 공격력을 1.5배로 만들고, 적 한명에게 캐릭터 공격력의 25배 [DEX] 데미지를 입힌다.",
    "specialName": "넘버 에이트의 일격",
    "captain": "격투 타입 캐릭터의 공격력을 2배로, 체력은 1.5배로 만든다.",
    "sailor": "격투 캐릭터의 공격력을 20 상승시킨다."
  },
  {
    "no": 451,
    "name": "일격의 나무르",
    "special": "1턴 동안 격투타입 캐릭터의 공격력을 1.5배로 만들고, 적 한명에게 캐릭터 공격력의 25배 [DEX] 데미지를 입힌다.",
    "specialName": "넘버 에이트의 일격",
    "captain": "격투 타입 캐릭터의 공격력을 2배로, 체력은 1.5배로 만든다.",
    "sailor": "격투 캐릭터의 공격력을 20 상승시킨다."
  },
  {
    "no": 452,
    "name": "라쿠요",
    "special": "선장과 자신의 슬롯을 [PSY] 으로 변환",
    "specialName": "드레드 모닝 스타",
    "captain": "전투가 시작 될 때 필살기를 3턴 줄이고, 타격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 453,
    "name": "모닝스타 라쿠요",
    "special": "선장과 자신의 슬롯을 [PSY] 으로 변환",
    "specialName": "드레드 모닝 스타",
    "captain": "전투가 시작 될 때 필살기를 3턴 줄이고, 타격 타입 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 454,
    "name": "포사",
    "special": "1턴 동안 [STR] 캐릭터의 공격력을 1.5배로 만들고, 적 전체에게 캐릭터 공격력의 15배 [STR] 데미지를 입힌다.",
    "specialName": "남자다운 화염도",
    "captain": "[STR] 캐릭터의 공격력을 2배로 만들고,[STR] 필살기의 데미지를 2배로 만든다."
  },
  {
    "no": 455,
    "name": "화염도의 포사",
    "special": "1턴 동안 [STR] 캐릭터의 공격력을 1.5배로 만들고, 적 전체에게 캐릭터 공격력의 15배 [STR] 데미지를 입힌다.",
    "specialName": "남자다운 화염도",
    "captain": "[STR] 캐릭터의 공격력을 2배로 만들고,[STR] 필살기의 데미지를 2배로 만든다."
  },
  {
    "no": 456,
    "name": "크리엘",
    "special": "중간 줄 슬롯을 [STR] 이나 [DEX] 으로 바꾸고, 아랫 줄 슬롯을 [PSY] 이나 [INT] 으로 바꾼다, 이후 슬롯을 1회 변경 할수있다.",
    "specialName": "더블 캐논",
    "captain": "사격 타입 캐릭터의 공격력을 2배로 만들고 회복력을 1.5배로 만든다",
    "sailor": "[PSY] 슬롯도 이로운 슬롯으로 만든다."
  },
  {
    "no": 457,
    "name": "중화기를 쓰는 크리엘",
    "special": "중간 줄 슬롯을 [STR] 이나 [DEX] 으로 바꾸고, 아랫 줄 슬롯을 [PSY] 이나 [INT] 으로 바꾼다, 이후 슬롯을 1회 변경 할수있다.",
    "specialName": "더블 캐논",
    "captain": "사격 타입 캐릭터의 공격력을 2배로 만들고 회복력을 1.5배로 만든다",
    "sailor": "[PSY] 슬롯도 이로운 슬롯으로 만든다."
  },
  {
    "no": 458,
    "name": "센고쿠",
    "special": "적 전체에게 랜덤의 [PSY] 데미지를 입히고, 1턴 동안 모든 캐릭터의 공격력을 1.5배로 만든다.",
    "specialName": "부처의 충격파",
    "captain": "전투가 시작될때 필살기를 2턴 줄이고, 코스트가 20이하인 캐릭터의 공격력을 3배로 만든다."
  },
  {
    "no": 459,
    "name": "부처님 센고쿠",
    "special": "적 전체에게 랜덤의 [PSY] 데미지를 입히고, 1턴 동안 모든 캐릭터의 공격력을 1.5배로 만든다.",
    "specialName": "부처의 충격파",
    "captain": "전투가 시작될때 필살기를 2턴 줄이고, 코스트가 20이하인 캐릭터와 '부처님 센코쿠'의 공격력을 3배로 만든다."
  },
  {
    "no": 460,
    "name": "범죄자 갤디노 Mr.3",
    "special": "턴 종료 후 체력을 조금 회복하고 적 전체 공격을 1 턴 지연",
    "specialName": "'대형 촛불 서비스 세트'",
    "captain": "받는 대미지를 10% 감소"
  },
  {
    "no": 461,
    "name": "탈주자 팬섬Mr.2 봉쿠레",
    "special": "자신의 슬롯을 [DEX]으로 바꾸고 다른 캐릭터의 슬롯을 무작위로 변경한다. 2 턴 동안 격투 타입 캐릭터 공격력을 1.25 배 상승시킨다.",
    "specialName": "탈주 춤 '백조 아라베스크'",
    "captain": "격투 타입 캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 462,
    "name": "탈옥명인 팬섬 Mr.2 봉쿠레",
    "special": "자신의 슬롯을 [DEX]으로 바꾸고 다른 캐릭터의 슬롯을 무작위로 변경한다. 2 턴 동안 격투 타입 캐릭터 공격력을 1.25 배 상승시킨다.",
    "specialName": "탈주 춤 '백조 아라베스크'",
    "captain": "격투 타입 캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 463,
    "name": "사토리",
    "special": "모든 슬롯을 비우고 적 1기에 PSY의 큰 대미지",
    "specialName": "깜짝 구슬 드래곤",
    "captain": "PSY캐릭터의 체력이 2 배가 된다"
  },
  {
    "no": 464,
    "name": "슈라",
    "special": "적 전체에 캐릭터 공격력 × 20배의 INT대미지",
    "specialName": "삼장조 후자의 불무리",
    "captain": "타격 타입 캐릭터의 공격력과 체력이 1.5 배가 된다"
  },
  {
    "no": 465,
    "name": "게다츠",
    "special": "적 1기에 캐릭터 공격력 × 20배 QCK대미지를 주고 2 턴 동안 슬롯의 영향이 조금 커진다",
    "specialName": "제트 펀치",
    "captain": "이하 적중을 4회 하면 캐릭터의 공격력이 3배가 된다."
  },
  {
    "no": 466,
    "name": "브라함",
    "special": "적 전체 공격을 1 턴 지연",
    "specialName": "쌍권총의 플래시 건",
    "captain": "사격 타입 캐릭터의 공격력과 체력이 1.5 배가 된다"
  },
  {
    "no": 467,
    "name": "야마",
    "special": "[RCV] 슬롯을 [STR] 슬롯으로 변환",
    "specialName": "복부 만점",
    "captain": "STR캐릭터의 공격력과 체력이 1.5 배가 된다"
  },
  {
    "no": 468,
    "name": "옐로 화이트 베레모 부대 대원 스카이피아 신대",
    "special": "1 턴 동안 일당의 회복력을 1.5 배로 한다",
    "specialName": "힐링 파워"
  },
  {
    "no": 469,
    "name": "블랙 화이트 베레모 부대 대원 스카이피아 신대",
    "special": "슬롯을 1 회 자유롭게 이동",
    "specialName": "퀵 체인지"
  },
  {
    "no": 470,
    "name": "옐로 화이트 베레모 부대 대장 스카이피아 신대",
    "special": "PSY캐릭터의 회복력이 1.5 배가 된다",
    "specialName": "힐링파워",
    "captain": "1 턴 동안 일당의 회복력을 1.5 배로 한다"
  },
  {
    "no": 471,
    "name": "블랙 화이트 베레모 부대 대장 스카이피아 신대",
    "special": "슬롯을 1 회 자유롭게 이동",
    "specialName": "퀵 체인지"
  },
  {
    "no": 472,
    "name": "레드 신근위대 대원 스카이피아 신병",
    "special": "적 1기에 캐릭터 공격력 × 20배의 STR대미지",
    "specialName": "밀키 파워 액스"
  },
  {
    "no": 473,
    "name": "블루 신근위대 대원 스카이피아 신병r",
    "special": "적 1기에 캐릭터 공격력 × 10배의 QCK대미지",
    "specialName": "밀키 속도 액스"
  },
  {
    "no": 474,
    "name": "그린 신근위대 대원 스카이피아 신병r",
    "special": "적 전체에 캐릭터 공격력 × 5 배의 캐릭터의 DEX타격을 주고, '봉인'상태를 1 턴 회복",
    "specialName": "밀키 기술 액스"
  },
  {
    "no": 475,
    "name": "옐로 신근위대 대원 스카이피아 신병",
    "special": "적 전체에 캐릭터 공격력 × 5 배의 캐릭터의 PSY타격을 주고, 체력을 500 회복",
    "specialName": "밀키 마인드 액스"
  },
  {
    "no": 476,
    "name": "블랙 신근위대 대원 스카이피아 신병",
    "special": "적 1기에 1,000의 고정 대미지",
    "specialName": "밀키 인텔리전스 액스"
  },
  {
    "no": 477,
    "name": "레드 돌격대 대원 스카이피아 신병",
    "special": "[DEX] 슬롯을 [STR] 슬롯으로 변환",
    "specialName": "[기] 슬롯 체인지 [힘]"
  },
  {
    "no": 478,
    "name": "블룩 돌격대 대원 스카이피아 신병",
    "special": "[PSY] 슬롯을 [QCK] 슬롯으로 변환",
    "specialName": "[심] 슬롯 체인지 [속]"
  },
  {
    "no": 479,
    "name": "그린 돌격대 대원 스카이피아 신병",
    "special": "[INT] 슬롯을 [DEX] 슬롯으로 변환",
    "specialName": "[지] 슬롯 체인지 [기]"
  },
  {
    "no": 480,
    "name": "옐로 돌격대 대원 스카이피아 신병",
    "special": " [TND]을 [PSY] 슬롯으로 변환",
    "specialName": "[연] 슬롯 체인지 [힘]"
  },
  {
    "no": 481,
    "name": "블랙 돌격대 대원 스카이피아 신병",
    "special": "[DEX] 슬롯을 [INT] 슬롯으로 변환",
    "specialName": "[기] 슬롯 체인지 [지]"
  },
  {
    "no": 482,
    "name": "레드 돌격대 엘리트 스카이피아 신병",
    "special": "[DEX] 슬롯을 [STR] 슬롯으로 변환",
    "specialName": "[기] 슬롯 체인지 [힘]",
    "captain": "타격 타입 캐릭터의 체력이 1.5 배가 된다"
  },
  {
    "no": 483,
    "name": "블루 돌격대 엘리트 스카이피아 신병",
    "special": "[PSY] 슬롯을 [QCK] 슬롯으로 변환",
    "specialName": "[심] 슬롯 체인지 [속]",
    "captain": "QCK캐릭터의 공격력과 회복력이 1.2 배가 된다"
  },
  {
    "no": 484,
    "name": "그린 돌격대 엘리트 스카이피아 신병",
    "special": "[INT] 슬롯을 [DEX] 슬롯으로 변환",
    "specialName": "[지] 슬롯 체인지 [기]",
    "captain": "받는 대미지를 10% 감소한다."
  },
  {
    "no": 485,
    "name": "옐로 돌격대 엘리트 스카이피아 신병",
    "special": "[TND]을 [PSY] 슬롯으로 변환",
    "specialName": "[연] 슬롯 체인지 [심]",
    "captain": "PSY 캐릭터의 체력과 회복력을 1.2배로 만든다."
  },
  {
    "no": 486,
    "name": "블랙 돌격대 엘리트 스카이피아 신병",
    "special": "[DEX] 슬롯을 [INT] 슬롯으로 변환",
    "specialName": "[기] 슬롯 체인지 [지]",
    "captain": "타격 캐릭터의 공격력을 1.5배로 만든다."
  },
  {
    "no": 487,
    "name": "레드 유목대 대원 샨디아의 전사",
    "special": "1 턴 동안 STR의 공격이 1.2 배가 된다",
    "specialName": "어택 부스트 [힘]"
  },
  {
    "no": 488,
    "name": "블루 유목대 대원 샨디아의 전사",
    "special": "1 턴 동안 QCK의 공격이 1.2 배가 된다.",
    "specialName": "어택 부스트 [속]"
  },
  {
    "no": 489,
    "name": "그린 유목대 대원 샨디아의 전사",
    "special": "1 턴 동안 DEX의 공격이 1.2 배가 된다.",
    "specialName": "어택 부스트 [기]"
  },
  {
    "no": 490,
    "name": "레드 유목대 달인 샨디아의 전사",
    "special": "1 턴 동안 STR의 공격이 1.2 배가 된다",
    "specialName": "어택 부스트 [힘]",
    "captain": "타격 캐릭터의 공격력과 체력이 1.2배가 된다."
  },
  {
    "no": 491,
    "name": "블루 유목대 달인 샨디아의 전사",
    "special": "1 턴 동안 QCK의 공격이 1.2 배가 된다.",
    "specialName": "어택 부스트 [속]",
    "captain": "타격 캐릭터의 회복력이 1.5배가 된다."
  },
  {
    "no": 492,
    "name": "그린 유목대 달인 샨디아의 전사r",
    "special": "1 턴 동안 DEX의 공격이 1.2 배가 된다.",
    "specialName": "어택 부스트 [기]",
    "captain": "DEX 캐릭터의 공격력이 1.2배가 된다."
  },
  {
    "no": 493,
    "name": "옐로 수렵대 대원 샨디아의 전사",
    "special": "캐릭터 회복력 × 7 배의 체력을 회복한다",
    "specialName": "미들 힐링"
  },
  {
    "no": 494,
    "name": "블랙 수렵대 대원 샨디아의 전사",
    "special": "적 전체에 캐릭터 공격력 × 3 배의 INT타격을 주고, 독 상태로 만든다",
    "specialName": "포이즌 어택"
  },
  {
    "no": 495,
    "name": "옐로 수렵대 달인 샨디아의 전사",
    "special": "캐릭터 회복력 × 7 배의 체력을 회복한다",
    "specialName": "미들 힐링",
    "captain": "턴 종료시에 체력이 500 회복"
  },
  {
    "no": 496,
    "name": "블랙 수렵대 달인 샨디아의 전사",
    "special": "적 전체에 캐릭터 공격력 × 3 배의 INT타격을 주고, 독 상태로 만든다",
    "specialName": "포이즌 어택",
    "captain": "사격 캐릭터의 공격력이 1.5배가 된다."
  },
  {
    "no": 497,
    "name": "포트거스 Ｄ 에이스 코르보산 악동 3형제",
    "special": "봉인상태를 4 턴 회복하고 적 1 체에 캐릭터 공격력 × 3 배 QCK대미지",
    "specialName": "제멋대로 악동 킥",
    "captain": "QCK 캐릭터의 공격력이 1.5 배가 된다"
  },
  {
    "no": 498,
    "name": "포트거스 Ｄ 에이스 코르보산 악동 3형제\"형제술잔\"",
    "special": "봉인상태를 4 턴 회복하고 적 1 체에 캐릭터 공격력 × 3 배 QCK대미지",
    "specialName": "제멋대로 악동 킥",
    "captain": "QCK캐릭터의 공격력과 체력이 1.5 배가 된다"
  },
  {
    "no": 499,
    "name": "벨메일",
    "special": "적 전체 공격을 1 턴 지연",
    "specialName": "여자는 배짱!",
    "captain": "사격 타입 캐릭터의 회복력이 1.5 배가 된다"
  },
  {
    "no": 500,
    "name": "벨메일 마리와 노지코의 양모",
    "special": "적 전체 공격을 1 턴 지연",
    "specialName": "여자는 배짱!",
    "captain": "사격 타입 캐릭터의 회복력이 2 배가 된다"
  },
  {
    "no": 501,
    "name": "카야",
    "special": "4 턴 동안 턴 종료시에 체력을 캐릭터 회복력 × 5 배 회복",
    "specialName": "의학 공부 중",
    "captain": "PSY 캐릭터의 능력치가 1.2 배가 된다"
  },
  {
    "no": 502,
    "name": "카야 시롭마을의 아가씨",
    "special": "4 턴 동안 턴 종료시에 체력을 캐릭터 회복력 × 5 배 회복",
    "specialName": "의학 공부 중",
    "captain": "PSY 캐릭터의 능력치가 1.5 배가 된다"
  },
  {
    "no": 503,
    "name": "호토리&코토리",
    "special": "적 전체에게 INT 데미지를 주고, 1턴 동안 다양한 효과가 발동한다.",
    "specialName": "깜짝 다이얼 일루젼",
    "captain": "INT캐릭터의 체력이 1.5배가 된다."
  },
  {
    "no": 504,
    "name": "호토리&코토리 스카이피아 부신병장",
    "special": "적 전체에게 INT 데미지를 주고, 1턴 동안 다양한 효과가 발동한다.",
    "specialName": "깜짝 다이얼 일루젼",
    "captain": "INT캐릭터의 체력이 2배가 된다."
  },
  {
    "no": 505,
    "name": "페루",
    "special": "3 턴 동안 QCK의 공격이 1.25 배가된다",
    "specialName": "날으는 발톱",
    "captain": "체력이 일정 이상인 경우, 공격을 받아도 쓰러지지 않는다"
  },
  {
    "no": 506,
    "name": "페루 아르바나 수호진 팔콘",
    "special": "3 턴 동안 QCK의 공격이 1.25 배가된다",
    "specialName": "날으는 발톱",
    "captain": "체력이 적어도 일정 이상인 경우, 공격을 받아도 쓰러지지 않는다"
  },
  {
    "no": 507,
    "name": "챠카",
    "special": "적 1 기에 캐릭터 공격력 × 25 배의 STR 대미지",
    "specialName": "울부짖는 이빨",
    "captain": "STR 캐릭터의 공격력과 체력이 1.2 배가 된다"
  },
  {
    "no": 508,
    "name": "차카 아르바나 수호진 자칼",
    "special": "적 1 기에 캐릭터 공격력 × 25 배의 STR 대미지",
    "specialName": "울부짖는 이빨",
    "captain": "STR 캐릭터의 공격력과 체력이 1.5 배가 된다"
  },
  {
    "no": 509,
    "name": "최강 죄수 크로커다일 Mr.0 바로크워크스 전 사장",
    "special": "적 전체를 중독시키고, 타격 타입 캐릭터 공격력을 1 턴 1.5 배",
    "specialName": "냉혹하고 비정한 책략 ‘독침’",
    "captain": "타격 타입 캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 510,
    "name": "최강 죄수 크로커다일 전 왕의 부하 칠무해",
    "special": "적 전체를 중독시키고, 타격 타입 캐릭터 공격력을 1 턴 1.5 배",
    "specialName": "냉혹하고 비정한 책략 ‘독침’",
    "captain": "받는 대미지를 10% 감소시키고, 타격 타입 캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 511,
    "name": "복역수 다즈 보네스 Mr.1",
    "special": "2 턴 동안받는 대미지를 30% 감소하고, 참격 타입 캐릭터 공격력의 1.25 배",
    "specialName": "잔혹함 참격: 참인",
    "captain": "참격 타입 캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 512,
    "name": "사보 코르보산 악동 3형제",
    "special": "3 턴 동안 PSY슬롯의 출현율이 크게 오르고, INT슬롯의 출현율이 낮아진다.",
    "specialName": "제멋대로 악동 스트라이크",
    "captain": "체력이 일정 이상인 경우, 공격을 받아도 쓰러지지 않는다"
  },
  {
    "no": 513,
    "name": "사보 코르보산 악동 3형제 \"형제술잔\"",
    "special": "3 턴 동안 PSY슬롯의 출현율이 크게 오르고, INT슬롯의 출현율이 낮아진다.",
    "specialName": "제멋대로 악동 스트라이크",
    "captain": "체력이 일정 이상이면 PSY캐릭터의 공격력이 1.5 배가 되고 공격을 받아도 쓰러지지 않는다."
  },
  {
    "no": 514,
    "name": "니코 로빈 트로피컬",
    "special": "1 턴 동안 적 전체의 방어력을 반감시키고, INT캐릭터 공격력이 1.5 배가된다",
    "specialName": "상하의 백화요란",
    "captain": "INT캐릭터의 공격력이 2 배가 된다"
  },
  {
    "no": 515,
    "name": "헤라클레슨",
    "special": "왼쪽 슬롯을 [INT], [PSY], [RCV], 오른쪽 슬롯을 [STR], [DEX], [QCK]로 순서대로 변환한다. 슬롯을 자유롭게 3회 움직일 수 있다.",
    "specialName": "팝 그린",
    "captain": "사격 타입 캐릭터의 능력치가 1.5 배가 된다."
  },
  {
    "no": 516,
    "name": "헤라클레슨 숲의 용사",
    "special": "왼쪽 슬롯을 [INT], [PSY], [RCV], 오른 슬롯을 [STR], [DEX], [QCK]로 순서대로 변환한다. 슬롯을 자유롭게 3회 움직일 수 있다.",
    "specialName": "팝 그린",
    "captain": "사격 타입 캐릭터의 능력치가 1.5 배가 되고, 턴 종료시 체력이 조금 회복된다."
  },
  {
    "no": 517,
    "name": "우소픈",
    "special": "[RCV]슬롯을 [EMPTY]으로 변환하고, 일당의 공격력이 2턴 동안 조금 증가한다.",
    "specialName": "폭식! 에너지 충전",
    "captain": "PSY캐릭터의 체력이 1.5 배가 된다"
  },
  {
    "no": 518,
    "name": "우소픈 헤라클레슨의 제자",
    "special": "[RCV]슬롯을 [EMPTY]으로 변환하고, 일당의 공격력이 2턴 동안 조금 증가한다.",
    "specialName": "폭식! 에너지 충전",
    "captain": "PSY캐릭터의 체력이 2배가 되고,[RCV]슬롯 출현율이 조금 증가한다."
  },
  {
    "no": 519,
    "name": "몽키 D. 루피, 메르비유의 모험자",
    "special": "일당의 체력을 크게 줄여 적 전체 고정 큰 대미지를 주고, 1 턴 동안 STR의 공격을 2배로 만든다.",
    "specialName": "고무고무 거인의 천둥 도끼",
    "captain": "STR 캐릭터의 공격력을 2배로 만든다."
  },
  {
    "no": 520,
    "name": "몽키 D. 루피, 특공의 밀짚모자 일당",
    "special": "일당의 체력을 크게 줄여 적 전체 고정 큰 대미지를 주고, 1 턴 동안 STR의 공격을 2배로 만든다.",
    "specialName": "고무고무 거인의 천둥 도끼",
    "captain": "STR 캐릭터의 공격력을 2.5배로 만든다."
  },
  {
    "no": 521,
    "name": "상디 메르비유의 모험자",
    "special": "적 전체에 아군의 체력이 적을수록 큰 INT대미지",
    "specialName": "디아블잠브 - 야수 고기 슛",
    "captain": "체력이 가득 차 있을 때 상대로 부터 받는 대미지를 크게 감소",
    "sailor": "본인의 저림 상태를 3턴 감소 시킨다."
  },
  {
    "no": 522,
    "name": "상디 특공의 밀짚모자 일당",
    "special": "적 전체에 아군의 체력이 적을수록 큰 INT대미지",
    "specialName": "디아블잠브 - 야수 고기 슛",
    "captain": "체력이 가득 차 있을 때 상대로 부터 받는 대미지를 크게 감소",
    "sailor": "본인의 저림 상태를 3턴 감소 시킨다."
  },
  {
    "no": 523,
    "name": "나미 메르비유의 모험자",
    "special": "슬롯을 랜덤으로 교체, 1 턴 동안 체력이 일정 이상일 때 공격을 받아도 쓰러지지 않는다",
    "specialName": "빌리 방전 ‘비리비리비리!’",
    "captain": "타격 타입 캐릭터의 공격력과 회복력이 1.5 배가 된다",
    "sailor": "[DEX]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 524,
    "name": "나미와 뇌조비리",
    "special": "슬롯을 랜덤으로 교체, 1 턴 동안 체력이 일정 이상일 때 공격을 받아도 쓰러지지 않는다",
    "specialName": "빌리 방전 ‘비리비리비리!’",
    "captain": "타격 타입 캐릭터의 공격력이 2배가 되고 회복력이 1.5 배가 된다",
    "sailor": "[DEX]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 525,
    "name": "브룩 메르비유의 모험자r",
    "special": "적 전체에 무작위의 PSY의 타격을 주고, 랜덤으로 슬롯을 교체",
    "specialName": "콧노래 삼보 오니가르기",
    "captain": "PSY캐릭터의 공격력이 2 배가 된다",
    "sailor": "PSY캐릭터의 회복력이 15 증가"
  },
  {
    "no": 526,
    "name": "브룩 특공의 밀짚모자 일당",
    "special": "적 전체에 무작위의 PSY의 타격을 주고, 랜덤으로 슬롯을 교체",
    "specialName": "콧노래 삼보 오니가르기",
    "captain": "PSY캐릭터의 공격력이 2 배가 되고, INT 적 에게 받는 데미지가 30% 감소한다.",
    "sailor": "PSY캐릭터의 회복력이 15 증가"
  },
  {
    "no": 527,
    "name": "쵸파 메르비유의 모험자",
    "special": "독 · 맹독 상태를 회복하고 캐릭터 회복력 × 15 배의 체력을 회복",
    "specialName": "헌신의 치유 ‘무사해서 다행이야’",
    "captain": "DEX캐릭터의 공격력과 회복력이 1.5 배가 된다",
    "sailor": "남은 체력이 적을 때 (30%) 자신의 회복력이 50 증가"
  },
  {
    "no": 528,
    "name": "쵸파 특공의 밀짚모자 일당",
    "special": "독 · 맹독 상태를 회복하고 캐릭터 회복력 × 15 배의 체력을 회복",
    "specialName": "헌신의 치유 ‘무사해서 다행이야’",
    "captain": "DEX캐릭터의 공격력과 회복력이 2 배가 된다",
    "sailor": "남은 체력이 적을 때 (30%) 자신의 회복력이 50 증가"
  },
  {
    "no": 529,
    "name": "샹크스 흑의의 빨강 머리",
    "special": "적 전체에 캐릭터 공격력 × 35 배의 PSY대미지를 준 후 2 턴 동안 적의 방어력을 0으로한다",
    "specialName": "패왕색 패기: 황제",
    "captain": "[PSY]슬롯 출현율 상승!, 공격 시작 전에 체력이 많을수록 PSY의 공격이 커진다"
  },
  {
    "no": 530,
    "name": "샹크스 흑의의 사황",
    "special": "적 전체에 캐릭터 공격력 × 35 배의 PSY대미지를 준 후 2 턴 동안 적의 방어력을 0으로한다",
    "specialName": "패왕색 패기: 황제",
    "captain": "[PSY]슬롯 출현율 상승!, 공격 시작 전에 체력이 많을수록 PSY의 공격이 커진다"
  },
  {
    "no": 531,
    "name": "니코 로빈 벚꽃 눈보라",
    "special": "받는 대미지를 4 턴 동안 30% 감소",
    "specialName": "스무송이 꽃 금송화: 벚꽃",
    "captain": "STR DEX QCK 캐릭터에게 받는 데미지 30% 감소"
  },
  {
    "no": 532,
    "name": "니코 로빈 벚꽃 만개",
    "special": "받는 대미지를 4 턴 동안 30% 감소",
    "specialName": "스무송이 꽃 금송화: 벚꽃",
    "captain": "STR DEX QCK 캐릭터에게 받는 데미지 30% 감소"
  },
  {
    "no": 533,
    "name": "브룩 체리 헤드",
    "special": "1 턴 동안 슬롯의 영향을 크게 하고 적 1기에 20 배 QCK대미지",
    "specialName": "비연 본나반 : 벚꽃",
    "captain": "QCK캐릭터의 공격력이 2 배가 된다."
  },
  {
    "no": 534,
    "name": "브룩 벚꽃 음색",
    "special": "1 턴 동안 슬롯의 영향을 크게 하고 적 1기에 20 배 QCK 대미지",
    "specialName": "비연 본나반 : 벚꽃",
    "captain": "QCK캐릭터의 공격력이 2 배가 된다."
  },
  {
    "no": 535,
    "name": "나미 벚꽃 구름",
    "special": "2 턴 동안받는 대미지를 반감하고, 회복력은 2 배로 한다",
    "specialName": "미라쥬 템포 환상의 요정: 벚꽃",
    "captain": "DEX캐릭터의 회복력이 1.5 배가 된다"
  },
  {
    "no": 536,
    "name": "나미 벚꽃 날씨",
    "special": "2 턴 동안받는 대미지를 반감하고, 회복력은 2 배로 한다",
    "specialName": "미라쥬 템포 환상의 요정: 벚꽃",
    "captain": "DEX캐릭터의 회복력이 2 배가 된다"
  },
  {
    "no": 537,
    "name": "도미노",
    "special": "봉인· 선장 효과 무효 상태를 1 턴 회복하고 슬롯을 1 턴 고정한다.",
    "specialName": "해루석 수갑",
    "captain": "체인 계수 증가량이 2 배가 된다"
  },
  {
    "no": 538,
    "name": "도미노 임펠타운 부간수장",
    "special": "봉인· 선장 효과 무효 상태를 1 턴 회복하고 슬롯을 1 턴 고정한다.",
    "specialName": "해루석 수갑",
    "captain": "체인 계수 증가량이 2 배가 되고 턴 종료 후 체력이 조금 회복된다."
  },
  {
    "no": 539,
    "name": "미노리노케로스",
    "special": "Changes own orb into [STR], deals 25x character's ATK in STR damage to one enemy",
    "specialName": "Bashful Prison Beast's Metal Rod"
  },
  {
    "no": 540,
    "name": "바실리스",
    "special": "Boosts chances of getting [DEX] orbs for 2 턴",
    "specialName": "Deadly Glare"
  },
  {
    "no": 541,
    "name": "오움",
    "special": "Greatly reduces chances of getting [PSY], [INT], [TND] and [RCV] slots for 5 턴",
    "specialName": "White Thorn Deathmatch",
    "captain": "Boosts ATK of STR characters by 2.5x 전투 시작 시 체력이 50% 미만이면"
  },
  {
    "no": 542,
    "name": "노라 이무기",
    "special": "Boosts RCV of all characters by 2x for 1 턴",
    "specialName": "Roar of the Ruler of the Sky",
    "captain": "Boosts HP of all characters by 1.5x"
  },
  {
    "no": 543,
    "name": "와이퍼",
    "special": "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
    "specialName": "Reject",
    "captain": "Boosts ATK and HP of Shooter characters by 1.5x, reduces crew's RCV to 0"
  },
  {
    "no": 544,
    "name": "와이퍼 대전사 카루가루의 자손",
    "special": "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
    "specialName": "Reject",
    "captain": "Boosts ATK of Shooter characters by 2.25x and their HP by 1.5x, reduces crew's RCV to 0"
  },
  {
    "no": 545,
    "name": "에넬",
    "special": "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 턴",
    "specialName": "60,000,000 Volt Jamboule",
    "captain": "Boosts ATK of PSY characters by 2x"
  },
  {
    "no": 546,
    "name": "갓 에넬",
    "special": "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 턴",
    "specialName": "60,000,000 Volt Jamboule",
    "captain": "Boosts ATK of PSY characters by 2x, reduces damage received by 20%"
  },
  {
    "no": 547,
    "name": "몽키 D. 루피 코르보산 악동 3형제",
    "special": "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 턴",
    "specialName": "Crazy Punk Kid Punch",
    "captain": "Boosts chances of getting [RCV] orbs"
  },
  {
    "no": 548,
    "name": "몽키 D. 루피 코르보산 악동 3형제 \"형제술잔\"",
    "special": "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 턴",
    "specialName": "Crazy Punk Kid Punch",
    "captain": "Boosts chances of getting [RCV] orbs, boosts ATK of all characters by 1.2x"
  },
  {
    "no": 549,
    "name": "사디짱",
    "special": "Boosts ATK against enemies with reduced defense by 1.3x for 3 턴",
    "specialName": "Arousal Manifesto - Red Demon Whip",
    "captain": "Boosts ATK by 2x after scoring 3 Perfects in a row"
  },
  {
    "no": 550,
    "name": "사디짱 임펠타운 옥졸장",
    "special": "Boosts ATK against enemies with reduced defense by 1.3x for 3 턴",
    "specialName": "Arousal Manifesto - Red Demon Whip",
    "captain": "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
  },
  {
    "no": 551,
    "name": "미노코알라",
    "special": "Reduces damage received by 50% for 1 턴, deals 15x character's ATK in STR damage to one enemy",
    "specialName": "Uncompromising Prison Beast's Morning Star"
  },
  {
    "no": 552,
    "name": "만티코어",
    "special": "Reduces the defense of all enemies by 100% for 1 턴",
    "specialName": "Cursed Shout"
  },
  {
    "no": 553,
    "name": "롤로노아 조로 메리비유의 모험자",
    "special": "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
    "specialName": "Ashura Ugui",
    "captain": "Boosts ATK of DEX characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Boosts base ATK of Slasher characters by 20"
  },
  {
    "no": 554,
    "name": "롤로노아 조로 특공의 밀짚모자 일당",
    "special": "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
    "specialName": "Ashura Ugui",
    "captain": "Boosts ATK of DEX characters by 3x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Boosts base ATK of Slasher characters by 20"
  },
  {
    "no": 555,
    "name": "우솝 메리비유의 모험자",
    "special": "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
    "specialName": "Heavenly Dragon Star",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "sailor": "Boosts base RCV of Shooter characters by 10"
  },
  {
    "no": 556,
    "name": "우솝 특공의 밀짚모자 일당",
    "special": "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
    "specialName": "Heavenly Dragon Star",
    "captain": "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
    "sailor": "Boosts base RCV of Shooter characters by 10",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 120"
      },
      {
        "description": "선원효과 추가 1: 사격 캐릭터의 공격력을 50 상승시킨다."
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 557,
    "name": "니코 로빈 메리비유의 모험자",
    "special": "Boosts chances of getting [INT] orbs for 3 턴",
    "specialName": "Ochenta Fleur - Cuatro Manus Shock",
    "captain": "Boosts ATK and RCV of INT characters by 1.5x",
    "sailor": "Reduces Blindness duration by 3 턴"
  },
  {
    "no": 558,
    "name": "니코 로빈 특공의밀짚모자 일당",
    "special": "Boosts chances of getting [INT] orbs for 3 턴",
    "specialName": "Ochenta Fleur - Cuatro Manus Shock",
    "captain": "Boosts ATK and RCV of INT characters by 2x",
    "sailor": "Reduces Blindness duration by 3 턴"
  },
  {
    "no": 559,
    "name": "프랑키 메리비유의 모험자",
    "special": "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
    "specialName": "Roar! Zarley Davison",
    "captain": "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
    "sailor": "Boosts base ATK of Shooter characters by 20"
  },
  {
    "no": 560,
    "name": "프랑키 특공의 밀짚모자 일당",
    "special": "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
    "specialName": "Roar! Zarley Davison",
    "captain": "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
    "sailor": "Boosts base ATK of Shooter characters by 20"
  },
  {
    "no": 561,
    "name": "포트거스 D. 에이스 흑의의 화권",
    "special": "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 턴",
    "specialName": "Great Flame Commandment: Flame Emperor",
    "captain": "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 2x otherwise"
  },
  {
    "no": 562,
    "name": "포트거스 D. 에이스 흑의의 흰수염해적단 2번대 대장",
    "special": "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 턴",
    "specialName": "Great Flame Commandment: Flame Emperor",
    "captain": "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 2x otherwise"
  },
  {
    "no": 563,
    "name": "포르체",
    "special": "Deal 3x character's ATK in PSY damage to one enemy, changes [INT] orbs into [RCV] orbs",
    "specialName": "Cutie Baton"
  },
  {
    "no": 564,
    "name": "카포티",
    "special": "Reduces Bind duration by 2 턴",
    "specialName": "Sea Surface Split"
  },
  {
    "no": 565,
    "name": "햄버그",
    "special": "Deals 5,000 fixed damage to one enemy",
    "specialName": "Hamburger Hammer"
  },
  {
    "no": 566,
    "name": "피클스",
    "special": "Empties all slots with [BLOCK] orbs",
    "specialName": "Wipeout Tackle"
  },
  {
    "no": 567,
    "name": "빅팡",
    "special": "Reduces Bind and Despair duration by 1 턴, deals 15x the character's ATK as STR damage to all enemies",
    "specialName": "Mudfish Coaster"
  },
  {
    "no": 568,
    "name": "폭시",
    "special": "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴, switches orbs between slots twice",
    "specialName": "Slow Slow Beam",
    "captain": "Boosts ATK, HP and RCV of all characters by 1.25x"
  },
  {
    "no": 569,
    "name": "은여우 폭시",
    "special": "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴, switches orbs between slots twice",
    "specialName": "Slow Slow Beam",
    "captain": "Boosts ATK, HP and RCV of all characters by 1.5x, reduces cooldown of all specials by 1 턴 at the start of the fight"
  },
  {
    "no": 570,
    "name": "몽키 D. 루피 데비백 파이트 아푸로",
    "special": "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
    "specialName": "Gum-Gum Flail",
    "captain": "Boosts ATK of STR and Fighter characters by 1.5x"
  },
  {
    "no": 571,
    "name": "몽키 D. 루피 데비백 파이트 전투",
    "special": "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
    "specialName": "Gum-Gum Flail",
    "captain": "Boosts ATK of STR and Fighter characters by 1.5x, reduces cooldown of all specials by 1 턴 at the start of the fight"
  },
  {
    "no": 572,
    "name": "우솝 데비백 파이트 세컨드",
    "special": "Boosts ATK of Fighter characters by 2x for 1 턴, binds himself for 15 턴",
    "specialName": "Roar of Mettle",
    "captain": "Boosts ATK of Fighter characters by 2.5x if HP is above 99% at the start of the 턴"
  },
  {
    "no": 573,
    "name": "토니토니 쵸파 데비백 파이트 마스크",
    "special": "Reduces Despair duration by 2 턴, recovers 10x character's RCV in HP",
    "specialName": "Manly Support",
    "captain": "Boosts RCV of all characters by 1.2x"
  },
  {
    "no": 574,
    "name": "아오키지",
    "special": "Boosts ATK of Striker characters by 1.75x for 2 턴, locks all orbs for 2 턴",
    "specialName": "Ice Block - Pheasant Beak",
    "captain": "Boosts ATK of Striker characters by 2x"
  },
  {
    "no": 575,
    "name": "아오키지　빙결인간",
    "special": "Boosts ATK of Striker characters by 1.75x for 2 턴, locks all orbs for 2 턴",
    "specialName": "Ice Block - Pheasant Beak",
    "captain": "Boosts ATK and HP of Striker characters by 2x",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 576,
    "name": "나미의 티 타임",
    "special": "Changes [PSY] orbs into [INT] orbs, boosts RCV of all characters by 1.5x for 1 턴",
    "specialName": "Fine Tempo - Tea Time Show",
    "captain": "Boosts ATK of all characters by 1.5x, boosts RCV of all characters by 1.2x"
  },
  {
    "no": 577,
    "name": "몽키 D. 루피 항해의 기록 밀짚모자일당",
    "special": "Deals random typeless damage to all enemies, changes own orb into [STR]",
    "specialName": "Gum-Gum Jet Gatling",
    "captain": "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
  },
  {
    "no": 578,
    "name": "몽키 D. 루피 항해의꿈「해적왕」",
    "special": "Deals random typeless damage to all enemies, changes own orb into [STR]",
    "specialName": "Gum-Gum Jet Gatling",
    "captain": "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
  },
  {
    "no": 579,
    "name": "롤로노아 조로 항해의 기록 밀짚모자일당",
    "special": "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
    "specialName": "Dragon Twister",
    "captain": "Boosts ATK of QCK and DEX characters by 1.5x"
  },
  {
    "no": 580,
    "name": "롤로노아 조로 항해의꿈「대검호」",
    "special": "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
    "specialName": "Dragon Twister",
    "captain": "Boosts ATK of QCK and DEX characters by 2x"
  },
  {
    "no": 581,
    "name": "겐보우",
    "special": "Cuts the current HP of each enemy by 7%",
    "specialName": "High-Caliber Bazooka",
    "captain": "Boosts ATK of STR characters by 1.5x"
  },
  {
    "no": 582,
    "name": "카마키리",
    "special": "Deals 10x character's ATK in QCK damage to one enemy, boosts ATK of QCK characters by 1.5x for 1 턴",
    "specialName": "Burn Blade",
    "captain": "Boosts ATK and HP of Striker characters by 1.5x"
  },
  {
    "no": 583,
    "name": "라키",
    "special": "Changes own orb into [INT] and the captain's orb into [DEX], boosts RCV of Shooter characters by 300 for 3 턴",
    "specialName": "Disrupting Fire",
    "captain": "Boosts ATK and RCV of Shooter characters by 1.5x"
  },
  {
    "no": 584,
    "name": "아이사",
    "special": "Reduces damage received from PSY enemies by 100% for 1 턴",
    "specialName": "Mantra",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight, reduces ATK, HP and RCV of all characters by 90%"
  },
  {
    "no": 585,
    "name": "노지코",
    "special": "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
    "specialName": "The Bond Bellmere Left Us",
    "captain": "Boosts RCV of PSY characters by 1.5x"
  },
  {
    "no": 586,
    "name": "노지코 나미의 의자매",
    "special": "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
    "specialName": "The Bond Bellmere Left Us",
    "captain": "Boosts HP and RCV of PSY characters by 1.5x"
  },
  {
    "no": 587,
    "name": "크로커스",
    "special": "Removes Poison, reduces Bind and Despair duration by 2 턴",
    "specialName": "Merciful Painkiller",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 588,
    "name": "크로커스 쌍둥이언덕의 등대지기",
    "special": "Removes Poison, reduces Bind and Despair duration by 2 턴",
    "specialName": "Merciful Painkiller",
    "captain": "Recovers 5x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 589,
    "name": "코자",
    "special": "Boosts ATK of Slasher characters by 1.5x for 1 턴",
    "specialName": "Flag of the Rebellion",
    "captain": "Boosts ATK of all characters by 1.5x, reduces HP and RCV of all characters by 80%"
  },
  {
    "no": 590,
    "name": "코자 반란군 리더",
    "special": "Boosts ATK of Slasher characters by 1.5x for 1 턴",
    "specialName": "Flag of the Rebellion",
    "captain": "Boosts ATK of all characters by 2x, reduces HP and RCV of all characters by 80%"
  },
  {
    "no": 591,
    "name": "붉은 용궁 거북이 공주"
  },
  {
    "no": 592,
    "name": "푸른 용궁 거북이 공주"
  },
  {
    "no": 593,
    "name": "비취 용궁 거북이 공주"
  },
  {
    "no": 594,
    "name": "호박 용궁 거북이 공주"
  },
  {
    "no": 595,
    "name": "칠흑 용궁 거북이 공주"
  },
  {
    "no": 596,
    "name": "토니토니 쵸파 항해의 기록 밀짚모자 일당",
    "special": "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 턴",
    "specialName": "Rozeo Michelli",
    "captain": "Boosts ATK of STR characters by 1.5x, recovers 500 HP at the end of each 턴"
  },
  {
    "no": 597,
    "name": "토니토니 쵸파 항해의동경「위대한 의사」",
    "special": "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 턴",
    "specialName": "Rozeo Michelli",
    "captain": "Boosts ATK of STR characters by 1.75x, recovers 750 HP at the end of each 턴"
  },
  {
    "no": 598,
    "name": "버기 해적견습생",
    "special": "Changes own orb into [INT], switches orbs between slots once",
    "specialName": "Split Split Cannon",
    "captain": "Boosts ATK of characters with fewer than 3 stars by 2.5x"
  },
  {
    "no": 599,
    "name": "버기 로저 해적단",
    "special": "Changes own orb into [INT], switches orbs between slots once",
    "specialName": "Split Split Cannon",
    "captain": "Boosts ATK of characters with fewer than 3 stars by 3x"
  },
  {
    "no": 600,
    "name": "샹크스 해적견습생",
    "special": "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 턴",
    "specialName": "Sword Draw - Single Flash",
    "captain": "Boosts ATK of PSY characters by 1.5x"
  },
  {
    "no": 601,
    "name": "샹크스 로저해적단",
    "special": "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 턴",
    "specialName": "Sword Draw - Single Flash",
    "captain": "Boosts ATK of PSY characters by 2x"
  },
  {
    "no": 602,
    "name": "에넬 2억볼트 뇌신",
    "special": "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 턴",
    "specialName": "200,000,000 Volt Amaru",
    "specialNotes": "#{fixed}",
    "captain": "Boosts ATK of QCK characters by 2x"
  },
  {
    "no": 603,
    "name": "에넬 천둥인간 2억볼트 뇌신",
    "special": "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 턴",
    "specialName": "200,000,000 Volt Amaru",
    "specialNotes": "#{fixed}",
    "captain": "Boosts ATK of QCK characters by 2.25x, recovers 5x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 604,
    "name": "상디 항해의 기록 밀짚모자 일당",
    "special": "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
    "specialName": "Diable Jambe: Extra Hachis Hash",
    "captain": "Boosts ATK of Fighter characters by 2x"
  },
  {
    "no": 605,
    "name": "상디 항해의 꿈「올 블루」",
    "special": "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
    "specialName": "Diable Jambe: Extra Hachis Hash",
    "captain": "Boosts ATK of Fighter characters by 2x, reduces damage received by 20%"
  },
  {
    "no": 606,
    "name": "해적 제프",
    "special": "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
    "specialName": "Red Leg Kick",
    "captain": "Boosts ATK of Fighter characters by 2x if HP is above 50% at the start of the 턴"
  },
  {
    "no": 607,
    "name": "붉은발의 제프 요리 해적단 선장",
    "special": "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
    "specialName": "Red Leg Kick",
    "captain": "Boosts ATK of Fighter characters by 2.5x if HP is above 50% at the start of the 턴"
  },
  {
    "no": 608,
    "name": "불량배 파티",
    "special": "For 1 턴, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
    "specialName": "Wicked Strength"
  },
  {
    "no": 609,
    "name": "불량배 카포네",
    "special": "Changes the captain's orb into [RCV] and randomizes every other orb",
    "specialName": "Wicked Spirit"
  },
  {
    "no": 610,
    "name": "하이킹 베어",
    "special": "Changes [TND] orbs into [RCV] orbs",
    "specialName": "[TND] Slot Change [RCV]"
  },
  {
    "no": 611,
    "name": "프린프린",
    "special": "Changes adjacent orbs into [RCV] orbs",
    "specialName": "[RCV] Slot Storm"
  },
  {
    "no": 612,
    "name": "브룩 항해의 기록 밀짚모자 일당",
    "special": "Boosts ATK and RCV of all characters by 45 for 1 턴, reduces damage received by 45% for 1 턴",
    "specialName": "45-Degree Joy",
    "captain": "Boosts ATK of Slasher characters by 1.5x"
  },
  {
    "no": 613,
    "name": "브룩 항해의 꿈「약속의 재회」",
    "special": "Boosts ATK and RCV of all characters by 45 for 1 턴, reduces damage received by 45% for 1 턴",
    "specialName": "45-Degree Joy",
    "captain": "Boosts ATK, HP and RCV of Slasher characters by 1.5x"
  },
  {
    "no": 614,
    "name": "잠바이",
    "special": "Reduces the defense of all enemies by 50% for 1 턴, deals 10x character's ATK in PSY damage to all enemies",
    "specialName": "Demolisher Chop",
    "captain": "Boosts ATK of characters with cost 20 or less by 2.25x 전투 시작 시 체력이 30% 미만이면"
  },
  {
    "no": 615,
    "name": "괴력 디스토이어 도끼",
    "special": "Deals random STR damage to one enemy",
    "specialName": "Demolisher Axe"
  },
  {
    "no": 616,
    "name": "괴력의 디스토이어 창",
    "special": "Changes the captain's orb into STR",
    "specialName": "Demolisher Spear"
  },
  {
    "no": 617,
    "name": "괴력의 디스토이어 대포",
    "special": "Boosts ATK of Shooter characters by 1.2x for 1 턴",
    "specialName": "Demolisher Cannon"
  },
  {
    "no": 618,
    "name": "너클 불량배 레드 현상금 사냥꾼",
    "special": "Deals 20x character's ATK in STR damage to one enemy",
    "specialName": "Mach Punch"
  },
  {
    "no": 619,
    "name": "너클 불량배 그린 현상금 사냥꾼",
    "special": "Cuts the current HP of each enemy by 5%",
    "specialName": "Slight Break"
  },
  {
    "no": 620,
    "name": "카타나 불량배 블루 현상금 사냥꾼",
    "special": "Changes [INT] orbs into [QCK] orbs",
    "specialName": "[INT] Slot Change [QCK]"
  },
  {
    "no": 621,
    "name": "카타나 불량배 레드 현상금 사냥꾼",
    "special": "Changes [INT] orbs into [STR] orbs",
    "specialName": "[INT] Slot Change [STR]"
  },
  {
    "no": 622,
    "name": "피스톨 불량배 그린 현상금 사냥꾼",
    "special": "Boosts RCV of all characters by 100 for 3 턴",
    "specialName": "Patch Job"
  },
  {
    "no": 623,
    "name": "피스톨 불량배 옐로 현상금 사냥꾼",
    "special": "Recovers 3x character's RCV in HP at the end of each 턴 for 5 턴",
    "specialName": "Auto Repair"
  },
  {
    "no": 624,
    "name": "곤봉 불량배 옐로 현상금 사냥꾼",
    "special": "Slightly boosts chances of getting [PSY] orbs for 3 턴",
    "specialName": "Slot Rate Up [PSY]"
  },
  {
    "no": 625,
    "name": "곤봉 불량배 블랙 현상금 사냥꾼",
    "special": "Slightly boosts chances of getting [INT] orbs for 3 턴",
    "specialName": "Slot Rate Up [INT]"
  },
  {
    "no": 626,
    "name": "게틀링 불량배 블랙 현상금 사냥꾼",
    "special": "Deals 13x character's ATK in character's type damage to all enemies",
    "specialName": "Hyper Burst"
  },
  {
    "no": 627,
    "name": "게틀링 불량배 블루 현상금 사냥꾼",
    "special": "Randomizes all orbs",
    "specialName": "Slot Shuffle"
  },
  {
    "no": 628,
    "name": "타일스톤",
    "special": "Deals 15,000 fixed damage to one enemy",
    "specialName": "Keel Crusher",
    "specialNotes": "#{fixed}"
  },
  {
    "no": 629,
    "name": "프랑키, 프랑키 패밀리 우두머리",
    "special": "Empties all slots including those with [BLOCK] orbs, deals random INT damage to all enemies",
    "specialName": "Master Nail",
    "captain": "Boosts ATK of characters with 3 or fewer stars by 2x"
  },
  {
    "no": 630,
    "name": "카쿠 사이퍼폴No.9",
    "special": "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
    "specialName": "Tempest Kick: Slaughter",
    "specialNotes": "#{random : 5,000 : 15,000}",
    "captain": "Boosts ATK of Slasher characters by 1.5x"
  },
  {
    "no": 631,
    "name": "카쿠 육식 사이퍼폴No.9",
    "special": "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
    "specialName": "Tempest Kick: Slaughter",
    "specialNotes": "#{random : 5,000 : 15,000}",
    "captain": "Boosts ATK of Slasher characters by 2x"
  },
  {
    "no": 632,
    "name": "로브 루치 사이퍼폴No.9",
    "special": "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 턴",
    "specialName": "Finger Pistol: Yellow Lotus",
    "captain": "Boosts ATK of Fighter characters by 1.5x",
    "specialNotes": "#{random : 2,000 : 20,000}"
  },
  {
    "no": 633,
    "name": "로브 루치 육식 사이퍼폴No.9",
    "special": "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 턴",
    "specialName": "Finger Pistol: Yellow Lotus",
    "captain": "Boosts ATK of Fighter characters by 2x",
    "specialNotes": "#{random : 2,000 : 20,000}"
  },
  {
    "no": 634,
    "name": "케이미",
    "special": "Boosts chances of getting [QCK] and [PSY] orbs for 3 턴, boosts ATK of QCK and PSY characters by 1.2x for 3 턴",
    "specialName": "Guiding Mermaid Voice",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.25x"
  },
  {
    "no": 635,
    "name": "케이미 타코야끼 점원",
    "special": "Boosts chances of getting [QCK] and [PSY] orbs for 3 턴, boosts ATK of QCK and PSY characters by 1.2x for 3 턴",
    "specialName": "Guiding Mermaid Voice",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.5x"
  },
  {
    "no": 636,
    "name": "파파구",
    "special": "Binds himself for 3 턴, reduces damage received by 50% for 3 턴, recovers 3.5x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Wretched Ballade",
    "captain": "Boosts ATK of characters with cost 2 or less by 3x"
  },
  {
    "no": 637,
    "name": "핫짱 타코야끼 주인",
    "special": "Cuts the current HP of each enemy by 8%, boosts ATK against enemies with increased defense by 1.3x for 1 턴",
    "specialName": "Hachi Ink Jet",
    "captain": "Recovers 618 HP at the end of each 턴, boosts ATK of Slasher characters by 1.5x"
  },
  {
    "no": 638,
    "name": "도마",
    "special": "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 턴",
    "specialName": "Bohemian Reverse Slash",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Slasher characters by 2x",
    "sailor": "Restores his own special by 1 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 1}"
  },
  {
    "no": 639,
    "name": "유기사 도마",
    "special": "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 턴",
    "specialName": "Bohemian Reverse Slash",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of Slasher characters by 2x",
    "sailor": "Restores his own special by 1 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 1}"
  },
  {
    "no": 640,
    "name": "디칼반 형제",
    "special": "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
    "specialNotes": "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
    "specialName": "Pirate Brothers: Twin Strike",
    "captain": "Boosts ATK of Fighter characters by 2x, deals 2x character's ATK in DEX damage to all enemies at the end of each 턴",
    "sailor": "When HP is below 30% at the start of the 턴, boosts ATK of Fighter characters by 100"
  },
  {
    "no": 641,
    "name": "굴레의 디칼반 형제",
    "special": "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
    "specialNotes": "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
    "specialName": "Pirate Brothers: Twin Strike",
    "captain": "Boosts ATK of Fighter characters by 2.25x, deals 2x character's ATK in DEX damage to all enemies at the end of each 턴",
    "sailor": "When HP is below 30% at the start of the 턴, boosts ATK of Fighter characters by 100"
  },
  {
    "no": 642,
    "name": "스쿼드",
    "special": "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
    "specialNotes": "#{fixed} #{orb : 1.75x}",
    "specialName": "Raging Greatsword",
    "captain": "Boosts ATK of PSY characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Recovers 2 턴 of Paralysis on self"
  },
  {
    "no": 643,
    "name": "대와거미 스쿼드",
    "special": "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
    "specialNotes": "#{fixed} #{orb : 1.75x}",
    "specialName": "Raging Greatsword",
    "captain": "Boosts ATK of PSY characters by 3x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Recovers 2 턴 of Paralysis on self",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 644,
    "name": "화이티 베이",
    "special": "Reduces Bind and Despair duration by 2 턴, boosts ATK against delayed enemies by 1.2x for 3 턴",
    "specialName": "Witch's Icebreaker",
    "captain": "Boosts ATK of INT characters by 2x",
    "sailor": "Boosts base ATK and RCV of INT characters by 20"
  },
  {
    "no": 645,
    "name": "얼음의 마녀 화이티 베이",
    "special": "Reduces Bind and Despair duration by 2 턴, boosts ATK against delayed enemies by 1.2x for 3 턴",
    "specialName": "Witch's Icebreaker",
    "captain": "Boosts ATK of INT characters by 2.5x",
    "sailor": "Boosts base ATK and RCV of INT characters by 20"
  },
  {
    "no": 646,
    "name": "리틀오즈Jr.",
    "special": "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 턴",
    "specialName": "Vanguard Breaker",
    "captain": "Boosts ATK of Shooter characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Boosts base HP of STR characters by 30"
  },
  {
    "no": 647,
    "name": "맹공의 리틀오즈Jr.",
    "special": "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 턴",
    "specialName": "Vanguard Breaker",
    "captain": "Boosts ATK of Shooter characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Boosts base HP of STR characters by 30"
  },
  {
    "no": 648,
    "name": "마르코 흰수염 해적단 1번대 대장",
    "special": "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 턴",
    "specialNotes": "#{orb : 1.5x}",
    "specialName": "Blue Flame Kick",
    "captain": "Reduces damage received by 30% if HP is above 70% at the start of the 턴, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the 턴"
  },
  {
    "no": 649,
    "name": "불사조 마르코 흰수염 해적단 1번대 대장",
    "special": "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 턴",
    "specialNotes": "#{orb : 1.5x}",
    "specialName": "Blue Flame Kick",
    "captain": "Reduces damage received by 30% if HP is above 70% at the start of the 턴, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the 턴"
  },
  {
    "no": 650,
    "name": "나미 항해의 기록 밀짚모자 일당",
    "special": "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 턴",
    "specialNotes": "#{fixed} #{orb : 1.5x}",
    "specialName": "Thunder Lance Tempo",
    "captain": "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
  },
  {
    "no": 651,
    "name": "나미 항해의꿈「세계지도」",
    "special": "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 턴",
    "specialNotes": "#{fixed} #{orb : 1.5x}",
    "specialName": "Thunder Lance Tempo",
    "captain": "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
  },
  {
    "no": 652,
    "name": "철가면 듀발",
    "special": "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 턴",
    "specialName": "Heart-Smashing Horn",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of DEX characters by 2x if they have matching orbs"
  },
  {
    "no": 653,
    "name": "듀발 날치라이더즈 리더",
    "special": "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 턴",
    "specialName": "Heart-Smashing Horn",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of DEX characters by 2.25x if they have matching orbs"
  },
  {
    "no": 654,
    "name": "듀발 장미빛인생 라이더즈 리더",
    "special": "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 턴",
    "specialName": "Heart-Smashing Horn",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of DEX characters by 2.75x if they have matching orbs"
  },
  {
    "no": 655,
    "name": "해적 아론",
    "special": "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 턴",
    "specialNotes": "#{orb : 1.25x}",
    "specialName": "Tooth Gum",
    "captain": "Boosts ATK of STR characters by 1.5x"
  },
  {
    "no": 656,
    "name": "아론 태양의 해적단",
    "special": "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 턴",
    "specialNotes": "#{orb : 1.25x}",
    "specialName": "Tooth Gum",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of STR characters by 2x"
  },
  {
    "no": 657,
    "name": "쿠로오비 태양의해적단",
    "special": "Randomly changes [INT] and [PSY] orbs into either [STR] or [EMPTY] orbs",
    "specialName": "Forearm Sledge",
    "captain": "Boosts ATK of Fighter characters by 1.5x"
  },
  {
    "no": 658,
    "name": "츄 태양의 해적단",
    "special": "Randomly changes all orbs into either [INT] or [PSY] orbs",
    "specialName": "Lipowertzer",
    "captain": "Boosts ATK of Shooter characters by 1.5x"
  },
  {
    "no": 659,
    "name": "몽키 D. 루피 튜브",
    "special": "Reduces Bind and Despair duration by 2 턴, reduces damage received by 50% for 2 턴",
    "specialName": "Gum-Gum Balloon Swim",
    "captain": "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
  },
  {
    "no": 660,
    "name": "우솝 항해의 기록 밀짚모자일당",
    "special": "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴",
    "specialName": "Atlas Comet",
    "captain": "Boosts ATK of Shooter characters by 2x"
  },
  {
    "no": 661,
    "name": "우솝 항해의 꿈「용감한 바다의전사」",
    "special": "Delays all enemies for 2 턴, reduces the defense of all enemies by 50% for 2 턴",
    "specialName": "Atlas Comet",
    "captain": "Boosts ATK of Shooter characters by 2x, reduces cooldown of all specials by 1 턴 at the start of the fight"
  },
  {
    "no": 662,
    "name": "나미 바캉스",
    "special": "Deals 13x character's ATK in PSY damage to one enemy, randomizes all orbs other than [PSY]",
    "specialName": "Tornado Tempo - Beach Side",
    "captain": "Boosts ATK of PSY characters by 2x"
  },
  {
    "no": 663,
    "name": "네페타리 비비 아라바스타 왕국 왕녀",
    "special": "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each 턴 for 5 턴",
    "specialNotes": "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
    "specialName": "Vivi's Important Security Guard",
    "captain": "Recovers 2x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 664,
    "name": "네페타리 비비 모래모래단 부리더",
    "special": "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each 턴 for 5 턴",
    "specialNotes": "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
    "specialName": "Vivi's Important Security Guard",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 665,
    "name": "코자 아라바스타 주민",
    "special": "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 턴",
    "specialName": "Let's Go! Suna Suna Clan!!",
    "captain": "Boosts ATK of all characters by 1.2x, reduces HP and RCV of all characters by 80%"
  },
  {
    "no": 666,
    "name": "코자 모래모래단 리더",
    "special": "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 턴",
    "specialName": "Let's Go! Suna Suna Clan!!",
    "captain": "Boosts ATK of all characters by 1.75x, reduces HP and RCV of all characters by 80%"
  },
  {
    "no": 667,
    "name": "네페타리 코브라 아라바스타 왕국 왕",
    "special": "Protects from defeat as long as HP is above 50% for 1 턴",
    "specialName": "King's Chopper",
    "specialNotes": "#{zombie}",
    "captain": "Reduces damage received by 10%, boosts ATK of all characters by 1.5x"
  },
  {
    "no": 668,
    "name": "사보",
    "special": "Boosts ATK of Free Spirit characters by 1.5x for 1 턴. If during that 턴 every unit scores a Perfect hit, boosts ATK of Free Spirit characters by 2x in the following 턴.",
    "specialName": "Dragon's Claw",
    "captain": "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
  },
  {
    "no": 669,
    "name": "사보 혁명군",
    "special": "Boosts ATK of Free Spirit characters by 1.5x for 1 턴. If during that 턴 every unit scores a Perfect hit, boosts ATK of Free Spirit characters by 2x in the following 턴.",
    "specialName": "Dragon's Claw",
    "captain": "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
  },
  {
    "no": 670,
    "name": "코알라",
    "special": "Boosts ATK of Fighter characters by 1.75x for 1 턴",
    "specialName": "Fishman Karate! True Fist Thrust of the Revolutionaries",
    "captain": "Boosts ATK of Fighter characters by 2x"
  },
  {
    "no": 671,
    "name": "코알라 혁명군",
    "special": "Boosts ATK of Fighter characters by 1.75x for 1 턴",
    "specialName": "Fishman Karate! True Fist Thrust of the Revolutionaries",
    "captain": "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.5x"
  },
  {
    "no": 672,
    "name": "핵",
    "special": "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
    "specialName": "Four Thousand Tile True Punch",
    "captain": "Boosts ATK of Fighter characters by 2x"
  },
  {
    "no": 673,
    "name": "핵 혁명군",
    "special": "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
    "specialName": "Four Thousand Tile True Punch",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of Fighter characters by 2x"
  },
  {
    "no": 674,
    "name": "엠포리오 이완코프 뉴카마권법 사범",
    "special": "Removes Poison, reduces damage received by 50% for 2 턴, recovers 13x character's RCV in HP at the end of each 턴 for 2 턴",
    "specialName": "Emporio Healing Hormone",
    "captain": "Boosts ATK of Free Spirit characters by 2x"
  },
  {
    "no": 675,
    "name": "엠포리오 이완코프 혁명군",
    "special": "Removes Poison, reduces damage received by 50% for 2 턴, recovers 13x character's RCV in HP at the end of each 턴 for 2 턴",
    "specialName": "Emporio Healing Hormone",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x"
  },
  {
    "no": 676,
    "name": "이나즈마",
    "special": "Reduces any damage received above 5,000 HP by 97% for 3 턴",
    "specialNotes": "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
    "specialName": "KEEP OUT",
    "captain": "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each 턴"
  },
  {
    "no": 677,
    "name": "이나즈마 혁명군",
    "special": "Reduces any damage received above 5,000 HP by 97% for 3 턴",
    "specialNotes": "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
    "specialName": "KEEP OUT",
    "captain": "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each 턴"
  },
  {
    "no": 678,
    "name": "니코 로빈 항해의 기록: 밀짚모자 일당",
    "special": "Reduces damage received by 50% for 1 턴, locks all orbs for 1 턴",
    "specialName": "Cien Fleur Spider Net",
    "captain": "Boosts ATK and RCV of PSY characters by 1.2x, boosts chances of getting [PSY] orbs"
  },
  {
    "no": 679,
    "name": "니코 로빈 항해의 꿈: 공백의 역사의 해명",
    "special": "Reduces damage received by 50% for 1 턴, locks all orbs for 1 턴",
    "specialName": "Cien Fleur Spider Net",
    "captain": "Boosts ATK and RCV of PSY characters by 1.5x, boosts chances of getting [PSY] orbs"
  },
  {
    "no": 680,
    "name": "아이스크림 좋아하는 나미",
    "special": "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 턴",
    "specialName": "Midsummer Relax Time"
  },
  {
    "no": 681,
    "name": "아이스크림 좋아하는 나미 레몬 아이스크림",
    "special": "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 턴",
    "specialName": "Midsummer Relax Time",
    "captain": "Boosts ATK and RCV of Striker characters by 1.5x"
  },
  {
    "no": 682,
    "name": "아이스크림 좋아하는 로빈",
    "special": "Recovers a random amount of HP, reduces damage received by 50% for 2 턴",
    "specialName": "Transcendental Serenity Healing"
  },
  {
    "no": 683,
    "name": "아이스크림 좋아하는 로빈 쵸코 아이스크림",
    "special": "Recovers a random amount of HP, reduces damage received by 50% for 2 턴",
    "specialName": "Transcendental Serenity Healing",
    "captain": "Boosts ATK and RCV of Fighter characters by 1.5x"
  },
  {
    "no": 684,
    "name": "아이스크림 좋아하는 페로나",
    "special": "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 턴",
    "specialName": "Romantic Ghost"
  },
  {
    "no": 685,
    "name": "아이스크림 좋아하는 페로나 딸기 아이스크림",
    "special": "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 턴",
    "specialName": "Romantic Ghost",
    "captain": "Boosts ATK and RCV of Shooter characters by 1.5x"
  },
  {
    "no": 686,
    "name": "비비의 휴식",
    "special": "Delays all enemies for 1 턴, recovers 3x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Captivating Perfume Dance - Relaxation",
    "captain": "Boosts ATK and RCV of Slasher characters by 1.5x"
  },
  {
    "no": 687,
    "name": "카르가라",
    "special": "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 턴",
    "specialName": "First Spear of the Battle",
    "captain": "Boosts ATK of Free Spirit characters by 1.5x"
  },
  {
    "no": 688,
    "name": "카르가라 샨디아의 대전사",
    "special": "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 턴",
    "specialName": "First Spear of the Battle",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Free Spirit characters by 2x"
  },
  {
    "no": 689,
    "name": "몽블랑 노랜드",
    "special": "Amplifies the effect of orbs by 1.5x for 2 턴",
    "specialNotes": "#{orb : 1.5x}",
    "specialName": "Botanist's Great Discovery",
    "captain": "Boosts ATK and RCV of Slasher characters by 1.2x"
  },
  {
    "no": 690,
    "name": "몽블랑 노랜드 루브니르 왕국 탐함선 제독",
    "special": "Amplifies the effect of orbs by 1.5x for 2 턴",
    "specialNotes": "#{orb : 1.5x}",
    "specialName": "Botanist's Great Discovery",
    "captain": "Boosts ATK and RCV of Slasher characters by 1.5x"
  },
  {
    "no": 691,
    "name": "언월도 하사 해군본부",
    "special": "Changes [PSY] orbs into [DEX] orbs",
    "specialName": "[PSY] Slot Change [DEX]"
  },
  {
    "no": 692,
    "name": "피스톨 하사 해군본부",
    "special": "Changes [PSY] orbs into [QCK] orbs",
    "specialName": "[PSY] Slot Change [QCK]"
  },
  {
    "no": 693,
    "name": "사브르 하사 해군본부",
    "special": "Changes [DEX] orbs into [PSY] orbs",
    "specialName": "[DEX] Slot Change [PSY]"
  },
  {
    "no": 694,
    "name": "바주카 하사 해군본부",
    "special": "Deals 13x character's ATK in character's type damage to all enemies",
    "specialName": "Hyper Burst"
  },
  {
    "no": 695,
    "name": "너클 하사 해군본부",
    "special": "Cuts the current HP of each enemy by 5%",
    "specialName": "Slight Break"
  },
  {
    "no": 696,
    "name": "언월도 소령 해군본부",
    "special": "Changes [PSY] orbs into [DEX] orbs",
    "specialName": "[PSY] Slot Change [DEX]",
    "captain": "Boosts ATK of Striker characters by 1.75x"
  },
  {
    "no": 697,
    "name": "피스톨 소령 해군본부",
    "special": "Changes [PSY] orbs into [QCK] orbs",
    "specialName": "[PSY] Slot Change [QCK]",
    "captain": "Boosts ATK of Shooter characters by 1.75x"
  },
  {
    "no": 698,
    "name": "사브르 소령 해군본부",
    "special": "Changes [DEX] orbs into [PSY] orbs",
    "specialName": "[DEX] Slot Change [PSY]",
    "captain": "Boosts ATK of Slasher characters by 1.75x"
  },
  {
    "no": 699,
    "name": "바주카 소령 해군본부",
    "special": "Deals 13x character's ATK in character's type damage to all enemies",
    "specialName": "Hyper Burst",
    "captain": "Boosts ATK of Shooter characters by 500, reduces damage received by 10%"
  },
  {
    "no": 700,
    "name": "너클 소령 해군본부",
    "special": "Cuts the current HP of each enemy by 5%",
    "specialName": "Slight Break",
    "captain": "Boosts ATK of Fighter characters by 1.75x"
  },
  {
    "no": 701,
    "name": "오이모",
    "special": "Deals 15x character's ATK in PSY damage to all enemies, changes own orb into [PSY]",
    "specialName": "Oimo Press",
    "captain": "Boosts HP of PSY characters by 2.25x"
  },
  {
    "no": 702,
    "name": "카아시",
    "special": "Seals himself for 5 턴, reduces damage received by 30% for 5 턴",
    "specialName": "Kashi Swing",
    "captain": "Boosts HP of INT characters by 2.25x"
  },
  {
    "no": 703,
    "name": "법의 수호견 부대",
    "special": "Deals 5x character's ATK in QCK damage to all enemies",
    "specialName": "Arm Claw of the Watchdog"
  },
  {
    "no": 704,
    "name": "유죄 배심원",
    "special": "Deals 9x character's ATK in STR damage to all enemies, reduces the defense of all enemies by 50% for 1 턴",
    "specialName": "Companion's Guilt"
  },
  {
    "no": 705,
    "name": "삼두 바스카빌",
    "special": "Randomly changes [PSY], [INT], [TND], [RCV] and [EMPTY] orbs into [STR], [DEX] or [QCK] orbs",
    "specialName": "Guilty Verdict - \"Slow Death Penalty\"",
    "captain": "Boosts ATK and HP of STR characters, DEX characters and QCK characters by 1.25x"
  },
  {
    "no": 706,
    "name": "블루노 사이퍼 폴 No.9",
    "special": "Changes own orb and the captain's orb into [STR]",
    "specialName": "Air Door",
    "captain": "Boosts ATK of STR characters by 1.5x"
  },
  {
    "no": 707,
    "name": "블루노 육식 사이퍼 폴 No.9",
    "special": "Changes own orb and the captain's orb into [STR]",
    "specialName": "Air Door",
    "captain": "Boosts ATK and HP of STR characters by 1.5x"
  },
  {
    "no": 708,
    "name": "니코 로빈 악마의 자식",
    "special": "Reduces Bind and Despair duration by 3 턴",
    "specialName": "Cien Fleur - Wing",
    "captain": "Boosts ATK and RCV of PSY characters by 1.2x"
  },
  {
    "no": 709,
    "name": "니코 로빈 밀짚모자 일당",
    "special": "Reduces Bind and Despair duration by 3 턴",
    "specialName": "Cien Fleur - Wing",
    "captain": "Boosts ATK and RCV of PSY characters by 1.5x"
  },
  {
    "no": 710,
    "name": "프랑키 항해의 기록: 밀짚모자 일당",
    "special": "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 턴, deals 15x character's ATK in PSY damage to all enemies",
    "specialName": "Coup de Vent",
    "captain": "Boosts ATK of Shooter characters by 1.5x"
  },
  {
    "no": 711,
    "name": "프랑키 항해의 꿈: 바다의 끝을 여행한 배",
    "special": "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 턴, deals 15x character's ATK in PSY damage to all enemies",
    "specialName": "Coup de Vent",
    "captain": "Boosts ATK of Shooter characters by 2x"
  },
  {
    "no": 712,
    "name": "간폴",
    "special": "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 턴",
    "specialNotes": "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
    "specialName": "Sky Knight's Javelin",
    "captain": "Boosts ATK of Striker characters by 2x if HP is above 50% at the start of the 턴"
  },
  {
    "no": 713,
    "name": "간폴 하늘의 기사",
    "special": "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 턴",
    "specialNotes": "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
    "specialName": "Sky Knight's Javelin",
    "captain": "Boosts ATK of Striker characters by 2.5x if HP is above 50% at the start of the 턴"
  },
  {
    "no": 714,
    "name": "피에르",
    "special": "Randomizes slots with [STR], [QCK], [INT] or [PSY] orbs",
    "specialName": "Pegasus' Neigh"
  },
  {
    "no": 715,
    "name": "코니스",
    "special": "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 턴, seals herself for 3 턴",
    "specialName": "Angel's Harp - Healing",
    "captain": "Boosts RCV of all characters by 2x 전투 시작 시 체력이 30% 미만이면"
  },
  {
    "no": 716,
    "name": "코니스 스카이피아의 소녀",
    "special": "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 턴, seals herself for 3 턴",
    "specialName": "Angel's Harp - Healing",
    "captain": "Boosts RCV of all characters by 5x 전투 시작 시 체력이 30% 미만이면"
  },
  {
    "no": 717,
    "name": "쥬라큘 미호크 왕의 부하 칠무해",
    "special": "Deals 50% of the damage dealt in the previous 턴 as typeless damage to all enemies",
    "specialNotes": "The special only includes the damage inflicted through normal attacks.",
    "specialName": "Black Sword - Lightning Slash",
    "captain": "Boosts ATK of Slasher characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain",
    "captainNotes": "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a Perfect hit by 2.75x. This bonus is applied only to Slasher characters."
  },
  {
    "no": 718,
    "name": "쥬라큘 미호크 세계 최강의 검사",
    "special": "Deals 50% of the damage dealt in the previous 턴 as typeless damage to all enemies",
    "specialNotes": "The special only includes the damage inflicted through normal attacks.",
    "specialName": "Black Sword - Lightning Slash",
    "captain": "Boosts ATK of Slasher characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain",
    "captainNotes": "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a Perfect hit by 2.75x. This bonus is applied only to Slasher characters."
  },
  {
    "no": 719,
    "name": "Sir 크로커다일 자연계 왕의 부하 칠무해",
    "special": "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
    "specialName": "Sables: Pesado",
    "captain": "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
  },
  {
    "no": 720,
    "name": "Sir 크로커다일 자연계 원 왕의 부하 칠무해",
    "special": "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
    "specialName": "Sables: Pesado",
    "captain": "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
  },
  {
    "no": 721,
    "name": "제리",
    "special": "Randomizes all orbs, including [BLOCK] orbs",
    "specialName": "Screw Drop Kick",
    "captain": "Boosts ATK of Fighter characters by 1.5x if HP is is above 99% at the start of the 턴"
  },
  {
    "no": 722,
    "name": "제리 사이퍼 폴 No.6",
    "special": "Randomizes all orbs, including [BLOCK] orbs",
    "specialName": "Screw Drop Kick",
    "captain": "Boosts ATK of Fighter characters by 2x if HP is is above 99% at the start of the 턴"
  },
  {
    "no": 723,
    "name": "T본",
    "special": "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 턴",
    "specialName": "Right Angle Flying Bird: Bone Phoenix",
    "captain": "Boosts ATK of Slasher characters by 1.5x, recovers 1.2x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 724,
    "name": "선박 절단기 T본 해군대령",
    "special": "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 턴",
    "specialName": "Right Angle Flying Bird: Bone Phoenix",
    "captain": "Boosts ATK of Slasher characters by 1.75x, recovers 1.5x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 725,
    "name": "네펠타리 비비 항해의 기록: 알라바스타 왕국 왕녀",
    "special": "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
    "specialName": "Peacock String Slasher",
    "captain": "Recovers 1,000 HP at the end of each 턴"
  },
  {
    "no": 726,
    "name": "네펠타리 비비 항해의 꿈: 해적 여왕",
    "special": "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
    "specialName": "Peacock String Slasher",
    "captain": "Recovers 2,000 HP at the end of each 턴"
  },
  {
    "no": 727,
    "name": "몽키 D. 루피 고무 고무 총난타",
    "special": "Deals 10x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 턴",
    "specialName": "Gum-Gum Gatling",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Free Spirit and Fighter characters by 1.75x"
  },
  {
    "no": 728,
    "name": "칼리파 사이퍼 폴 No.9",
    "special": "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Sheep Cloud Relaxing Bubbles",
    "captain": "Boosts ATK and RCV of DEX characters by 1.2x, slightly boosts chances of getting [DEX] orbs"
  },
  {
    "no": 729,
    "name": "칼리파 육식 사이퍼 폴 No.9",
    "special": "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Sheep Cloud Relaxing Bubbles",
    "captain": "Boosts ATK and RCV of DEX characters by 1.2x, boosts chances of getting [DEX] orbs"
  },
  {
    "no": 730,
    "name": "제브라 사이퍼 폴l No.9",
    "special": "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 턴",
    "specialName": "Rankyaku - Lupus Fall",
    "captain": "Boosts ATK and HP of INT characters by 1.2x, deals 9 HP as fixed damage to all enemies at the end of each 턴",
    "captainNotes": "#{fixed}"
  },
  {
    "no": 731,
    "name": "제브라 육식 사이퍼 폴 No.9",
    "special": "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 턴",
    "specialName": "Rankyaku - Lupus Fall",
    "captain": "Boosts ATK and HP of INT characters by 1.5x, deals 9 HP as fixed damage to all enemies at the end of each 턴",
    "captainNotes": "#{fixed}"
  },
  {
    "no": 732,
    "name": "후쿠로 사이퍼 폴 No.9",
    "special": "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 턴",
    "specialName": "Tekkai Dama",
    "captain": "Boosts ATK of STR characters by 1.5x, reduces damage received by 10%"
  },
  {
    "no": 733,
    "name": "후쿠로 육식 사이퍼 폴 No.9",
    "special": "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 턴",
    "specialName": "Tekkai Dama",
    "captain": "Boosts ATK of STR characters by 1.5x, reduces damage received by 20%"
  },
  {
    "no": 734,
    "name": "쿠마도리 사이퍼 폴 No.9",
    "special": "For 1 턴, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
    "specialName": "Life Re턴 - Digestion, Absorption",
    "captain": "Boosts ATK and RCV of PSY characters by 1.2x"
  },
  {
    "no": 735,
    "name": "쿠마도리 육식 사이퍼 폴l No.9",
    "special": "For 1 턴, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
    "specialName": "Life Re턴 - Digestion, Absorption",
    "captain": "Boosts ATK and RCV of PSY characters by 1.5x"
  },
  {
    "no": 736,
    "name": "카쿠 수인 소소 열매 모델 기린",
    "special": "Deals 20x character's ATK in STR damage to all enemies, changes [QCK] orbs into [STR] orbs",
    "specialName": "Fierce Smash",
    "captain": "Boosts ATK of Slasher characters by 2.5x if HP is above 50% at the start of the 턴"
  },
  {
    "no": 737,
    "name": "루치 수인 고양고양 열매 모델 레오파드",
    "special": "Changes [RCV] orbs into [QCK] orbs, changes adjacent orbs into [QCK] orbs",
    "specialName": "Shigan - Bachi",
    "captain": "Boosts ATK of Fighter characters by 2.75x 전투 시작 시 체력이 30% 미만이면"
  },
  {
    "no": 738,
    "name": "스팬담",
    "special": "Deals 200x character's ATK in INT damage to one enemy",
    "specialName": "Ivory Rush",
    "captain": "Boosts ATK of characters with cost 21 or more by 2x"
  },
  {
    "no": 739,
    "name": "프랑키 밀짚모자 일당",
    "special": "Reduces Bind duration by 5 턴, randomizes all orbs",
    "specialName": "Coup de Boo",
    "captain": "Boosts ATK of Free Spirit characters by 2x"
  },
  {
    "no": 740,
    "name": "네로",
    "special": "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 턴",
    "specialName": "Rankyaku - Sen",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight"
  },
  {
    "no": 741,
    "name": "네로 사이퍼 폴 No.9",
    "special": "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 턴",
    "specialName": "Rankyaku - Sen",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight"
  },
  {
    "no": 742,
    "name": "완제",
    "special": "Amplifies the effect of orbs by 1.25x for 2 턴, reduces the defense of all enemies by 80% for 2 턴",
    "specialNotes": "#{orb : 1.25x}",
    "specialName": "Ramen Beam",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.2x"
  },
  {
    "no": 743,
    "name": "완제 사이퍼 폴 No.7",
    "special": "Amplifies the effect of orbs by 1.25x for 2 턴, reduces the defense of all enemies by 80% for 2 턴",
    "specialNotes": "#{orb : 1.25x}",
    "specialName": "Ramen Beam",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.5x"
  },
  {
    "no": 744,
    "name": "포트거스 D. 에이스 항해의 기록: 흰수염 해적단",
    "special": "Reduces damage received by 50% for 3 턴",
    "specialName": "Flame Fence",
    "captain": "Boosts ATK of Free Spirit characters by 2x"
  },
  {
    "no": 745,
    "name": "포트거스 D. 에이스 항해의 꿈: 해적의 높은 곳",
    "special": "Reduces damage received by 50% for 3 턴",
    "specialName": "Flame Fence",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x"
  },
  {
    "no": 746,
    "name": "메가로와 시라호시 공주",
    "special": "Deals 10x character's ATK in QCK damage to all enemies, protects from defeat as long as HP is above 50% for 1 턴",
    "specialName": "Megalo Assault!",
    "specialNotes": "#{zombie}",
    "captain": "Protects from defeat as long as HP is above 30%",
    "captainNotes": "#{zombie}"
  },
  {
    "no": 747,
    "name": "로브 루치 어둠의 정의의 CP9",
    "special": "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 턴",
    "specialName": "Rokuougan",
    "captain": "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
  },
  {
    "no": 748,
    "name": "로브 루치 역대 최강의 CP9",
    "special": "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 턴",
    "specialName": "Rokuougan",
    "captain": "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
  },
  {
    "no": 749,
    "name": "카쿠 어둠의 정의의 CP9",
    "special": "Deals random DEX damage to all enemies, randomizes all orbs",
    "specialName": "Tempest Kick: Sky Slicer",
    "specialNotes": "#{random : 10,000 : 90,000}",
    "captain": "Boosts ATK of DEX characters by 1.5x, boosts damage of DEX specials by 1.5x",
    "captainNotes": "#{noFixedPerc}"
  },
  {
    "no": 750,
    "name": "카쿠 역대 최강의 CP9",
    "special": "Deals random DEX damage to all enemies, randomizes all orbs",
    "specialName": "Tempest Kick: Sky Slicer",
    "specialNotes": "#{random : 10,000 : 90,000}",
    "captain": "Boosts ATK of DEX characters by 2x, boosts damage of DEX specials by 2x",
    "captainNotes": "#{noFixedPerc}"
  },
  {
    "no": 751,
    "name": "칼리파 어둠의 정의의 CP9",
    "special": "Reduces damage received in the next 턴 by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
    "specialName": "Sheep Cloud Tidal Wave",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.5x"
  },
  {
    "no": 752,
    "name": "칼리파 역대 최강의 CP9",
    "special": "Reduces damage received in the next 턴 by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
    "specialName": "Sheep Cloud Tidal Wave",
    "captain": "Boosts ATK of Cerebral characters by 2.25x and their RCV by 1.5x"
  },
  {
    "no": 753,
    "name": "제브라 어둠의 정의의 CP9",
    "special": "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
    "specialNotes": "#{orb : 1.75x}",
    "specialName": "Moonlight Ten Finger Pistol",
    "captain": "Boosts ATK of Powerhouse characters by 2x"
  },
  {
    "no": 754,
    "name": "제브라 역대 최강의 CP9",
    "special": "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 턴",
    "specialNotes": "#{orb : 1.75x}",
    "specialName": "Moonlight Ten Finger Pistol",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x"
  },
  {
    "no": 755,
    "name": "블루노 어둠의 정의의 CP9",
    "special": "1턴 동안 받는 데미지를 50% 감소하고, 강인 타입 캐릭터의 공격력을 1.75배 상승",
    "specialName": "「철괴」 - 륜",
    "captain": "INT 캐릭터의 공격을 1.5배로 하고, PSY 캐릭터로 부터 받는 데미지를 20%감소한다."
  },
  {
    "no": 756,
    "name": "블루노 역대 최강의 CP9",
    "special": "1턴 동안 받는 데미지를 50% 감소하고, 강인 타입 캐릭터의 공격력을 1.75배 상승",
    "specialName": "「철괴」 - 륜",
    "captain": "INT 캐릭터의 공격을 2배로 하고, PSY 캐릭터로 부터 받는 데미지를 30%감소한다."
  },
  {
    "no": 757,
    "name": "후쿠로 어둠의 정의의 CP9",
    "special": "[DEX][QCK] 슬롯을 [PSY] 슬롯으로 변환",
    "specialName": "「수엄」오의 후쿠로강타 ",
    "captain": "PSY 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 758,
    "name": "후쿠로 역대 최강의 CP9",
    "special": "[DEX][QCK] 슬롯을 [PSY] 슬롯으로 변환",
    "specialName": "「수엄」오의 후쿠로강타 ",
    "captain": "PSY 캐릭터의 공격을 2배로하고, 턴 종료시 이 캐릭터의 회복력 X3배의 체력을 회복한다."
  },
  {
    "no": 759,
    "name": "쿠마도리 어둠의 정의의 CP9",
    "special": "슬롯을 3회 자유롭게 이동하고, 일당의 슬롯을 1턴 고정",
    "specialName": "「생명귀환」 - 사자지건",
    "captain": "체력이 30%이하일때 STR 캐릭터의 공격이 2.5배가 된다."
  },
  {
    "no": 760,
    "name": "쿠마도리 역대 최강의 CP9",
    "special": "슬롯을 3회 자유롭게 이동하고, 일당의 슬롯을 1턴 고정",
    "specialName": "「생명귀환」 - 사자지건",
    "captain": "체력이 30%이하일때 STR 캐릭터의 공격이 3배가 된다."
  },
  {
    "no": 761,
    "name": "몽키 D. 루피 할로윈 몬스터",
    "special": "적 1명에게 캐릭터의 공격 X15배의 DEX 데미지를 주고, 1턴동안 모든 속성 캐릭터의 공격을 1.2배 상승한다.",
    "specialName": "고무고무 피스톨 「몬스터」",
    "captain": "격투 타입 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 762,
    "name": "우솝 거짓말쟁이 늑대",
    "special": "1턴동안 PSY 캐릭터의 공격을 1.75배 상승",
    "specialName": "임팩트 비스트",
    "captain": "PSY 캐릭터의 공격과 회복이 1.5배가 된다."
  },
  {
    "no": 763,
    "name": "프랑키 프랑켄슈타인",
    "special": "자신의 슬롯을 [STR]으로 변환하고, 슬롯을 1회 자유롭게 이동",
    "specialName": "변체 프랑키 켄타우로스「프랑켄」",
    "captain": "STR 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 764,
    "name": "나미 호박 등불",
    "special": "체력을 3,000 회복",
    "specialName": "도둑 고양이 「트릭」",
    "captain": "타격 타입 캐릭터의 공격과 회복이 1.5배가 된다."
  },
  {
    "no": 765,
    "name": "토니토니 쵸파 리틀 뱀파이어",
    "special": "선장 효과 무효 상태를 3턴 회복",
    "specialName": "진단 「매직」",
    "captain": "턴 종료시 이 캐릭터의 회복력 X2배의 체력을 회복한다."
  },
  {
    "no": 766,
    "name": "롤로노아 조로 잭 더 리퍼",
    "special": "적 전체에 캐릭터의 공격 X7배의 QCK 데미지를 주고, 1턴간 적 공격을 지연시킨다.",
    "specialName": "3도류 108번뇌하는 봉황「사신」",
    "captain": "QCK 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 767,
    "name": "니코 로빈 섹시 데빌",
    "special": {
      "japan": "상단 슬롯을 [DEX]으로 변환하고, 블라인드 상태를 회복한다.",
      "global": "산단 슬롯을 [DEX]으로 변환하고,선장 효과 무효화를 1턴 회복한다."
    },
    "specialName": "옥호스 플루르 「스릴러」",
    "captain": "DEX 캐릭터의 공격과 회복이 1.5배가 된다."
  },
  {
    "no": 768,
    "name": "상디 유령 기사",
    "special": "이 캐릭터의 회복 X15배의 체력을 회복하고, [TND]슬롯을 [RCV]슬롯으로 변환",
    "specialName": "온돌 스튜 「파티」",
    "captain": "PSY 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 769,
    "name": "브룩 겁 많은 해골",
    "special": "체력을 4343회복하고, 적 전체에 독 공격",
    "specialNotes": "#{poison}",
    "specialName": "자장가 「공포」",
    "captain": "INT 캐릭터의 공격과 회복이 1.5배가 된다."
  },
  {
    "no": 770,
    "name": "달마시안 해군본부 중장",
    "special": "적 1체에 캐릭터의 공격 X15배 STR 데미지를 주고, 공격 지연 상태의 적에게 주는 데미지가 1.3배 증가",
    "specialName": "일점집중 「지건」",
    "captain": "모험 시작시 일당의 필살 턴을 2턴 단축하고, STR 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 771,
    "name": "모몬가 해군본부 중장",
    "special": "적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 1턴간 박식 타입 캐릭터의 공격이 1.75배 상승",
    "specialName": "공중보법 「월보」",
    "captain": "박식 타입 캐릭터의 공격이 2.5배가 된다."
  },
  {
    "no": 772,
    "name": "오니구모 해군본부 중장",
    "special": "적 전체의 체력을 10% 줄이고, [PSY],[INT] 슬롯을 [DEX] 으로 변환",
    "specialName": "8도류「맹장연격」",
    "captain": "참격 타입 캐릭터의 공격을 2배로 하고, QCK 캐릭터로 부터 받는 데미지를 20% 감소한다."
  },
  {
    "no": 773,
    "name": "슈",
    "special": "1턴간 3,000을 넘는 데미지를 80% 감소시킨다.",
    "specialNotes": "정확한 데미지 공식: 3000 + ((총 데미지) - 3000) * 0.2",
    "specialName": "녹 녹 열매",
    "captain": "받는 데미지를 20% 감소한다."
  },
  {
    "no": 774,
    "name": "베리굿",
    "special": "[TND], [RCV], [EMPTY], [BLOCK],[BOMB] 슬롯을 [STR], [DEX], [QCK], [PSY], [INT] 슬롯으로 변환하고, 슬롯을 3회 자유롭게 이동",
    "specialName": "베리베리 열매",
    "captain": "자유 타입 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 775,
    "name": "스트로베리 해군본부 중장",
    "special": "적 1체에 일당 체력이 적을수록 PSY 큰 데미지",
    "specialName": "분노의 박치기",
    "captain": "박식 타입 캐릭터의 공격과 체력을 1.5배가 된다."
  },
  {
    "no": 776,
    "name": "럭키 루",
    "specialName": "활기넘치는 럭키샷!!",
    "special": "체력을 5,000 회복하고, 적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 자신은 3턴간 봉인",
    "captain": "PSY 캐릭터의 공격과 회복이 1.25배가 된다."
  },
  {
    "no": 777,
    "name": "럭키 루 빨강 머리 해적단",
    "special": "체력을 5,000 회복하고, 적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 자신은 3턴간 봉인",
    "specialName": "활기넘치는 럭키샷!!",
    "captain": "PSY 캐릭터의 공격과 회복이 1.75배가 된다."
  },
  {
    "no": 778,
    "name": "레베카 수인 검투사",
    "special": "적 1체에 일당 체력이 적을수록 QCK 큰 데미지를 주고, 자신의 슬롯을 [QCK] 변환",
    "specialName": "무패의 검기",
    "captain": "받는 데미지를 20% 감소한다."
  },
  {
    "no": 779,
    "name": "레베카 콜로세움 전속 검투사",
    "special": "적 1체에 일당 체력이 적을수록 QCK 큰 데미지를 주고, 자신의 슬롯을 [QCK] 변환",
    "specialName": "무패의 검기",
    "captain": "받는 데미지를 25% 감소한다."
  },
  {
    "no": 780,
    "name": "우루지 파계승 해적단 선장",
    "special": "1턴간 자신의 공격력을 남은 체력에 따라 상승",
    "specialNotes": "남은체력이 50%이상일때: 1.5배, 20%이상 50%미만일때: 1.75배, 20%미만일때: 2배",
    "specialName": "계명의 귀신화",
    "captain": "남은 체력이 30%이하일때 일당의 공격이 2배가 된다."
  },
  {
    "no": 781,
    "name": "괴승 우루지 파계승 해적단 선장",
    "special": "1턴간 자신의 공격력을 남은 체력에 따라 상승",
    "specialNotes": "남은체력이 50%이상일때: 1.5배, 20%이상 50%미만일때: 1.75배, 20%미만일때: 2배",
    "specialName": "계명의 귀신화",
    "captain": "남은 체력이 30%이하일때 일당의 공격이 2.5배가 된다."
  },
  {
    "no": 782,
    "name": "타시기: 정의의 꽃",
    "special": "적 전체 공격을 1턴 지연시키고, 체력을 랜덤으로 소량 회복",
    "specialName": "화조풍월 미소",
    "captain": "참격 타입 캐릭터의 회복이 1.5배가 된다."
  },
  {
    "no": 783,
    "name": "타시기 해군본부 소위: 정의의 꽃",
    "special": "적 전체 공격을 1턴 지연시키고, 체력을 랜덤으로 소량 회복",
    "specialName": "화조풍월 미소",
    "captain": "참격 타입 캐릭터의 공격이 2배, 회복이 1.5배가 된다."
  },
  {
    "no": 784,
    "name": "겐씨",
    "special": "선장 효과 무효화 상태를 2턴 회복, 블라인드를 완전히 회복",
    "specialName": "칠칠맞은 딸을 꾸짖다"
  },
  {
    "no": 785,
    "name": "겐조 코코야시 마을의 주재",
    "special": "선장 효과 무효화 상태를 2턴 회복, 블라인드를 완전히 회복",
    "specialName": "칠칠맞은 딸을 꾸짖다",
    "captain": "받는 데미지를 20% 감소한다."
  },
  {
    "no": 786,
    "name": "Dr. 히루루크",
    "special": "자신을 10턴 봉인하고, 적 전체 공격을 1턴 지연시키고, 4턴동안 받는 데미지를 반감",
    "specialName": "결사의 각오!「오픈 마인드」"
  },
  {
    "no": 787,
    "name": "Dr. 히루루크 돌팔이 의사",
    "special": "자신을 10턴 봉인하고, 적 전체 공격을 1턴 지연시키고, 4턴동안 받는 데미지를 반감",
    "specialName": "결사의 각오!「오픈 마인드」",
    "captain": "받는 데미지를 반감하지만, 턴 종료시 일당의 체력을 10%감소한다."
  },
  {
    "no": 788,
    "name": "쿠이나",
    "special": "필살기 발동 턴에 일당 전원 Perfect 공격 성공시 다음턴에 참격 타입의 공격이 1.75배 상승",
    "specialName": "소녀검사의 진검승부"
  },
  {
    "no": 789,
    "name": "쿠이나 시모츠키 마을의 소녀 검사",
    "special": "필살기 발동 턴에 일당 전원 Perfect 공격 성공시 다음턴에 참격 타입의 공격이 1.75배 상승",
    "specialName": "소녀검사의 진검승부",
    "captain": "참격 타입 캐릭터의 공격이 1.5배가 된다."
  },
  {
    "no": 790,
    "name": "양파 & 피망 & 당근",
    "special": "적 1체에 캐릭터의 공격 X3배 QCK 데미지를 주고, 3턴간 STR, DEX, QCK 캐릭터의 공격을 1.2배 상승",
    "specialName": "출동!! 우솝 해적단"
  },
  {
    "no": 791,
    "name": "양파 & 피망 & 당근 우솝 해적단",
    "special": "적 1체에 캐릭터의 공격 X3배 QCK 데미지를 주고, 3턴간 STR, DEX, QCK 캐릭터의 공격을 1.2배 상승",
    "specialName": "출동!! 우솝 해적단",
    "captain": "STR, DEX, QCK 캐릭터의 체력,공격,회복이 1.25배가 된다."
  },
  {
    "no": 792,
    "name": "아이스버그",
    "special": "랜덤으로 [STR], [QCK], [DEX], [PSY], [INT]으로 변환하고, 2회 슬롯을 자유롭게 이동하고, 1턴 슬롯 고정",
    "specialName": "솜씨좋은 장인을 통솔하는 열정"
  },
  {
    "no": 793,
    "name": "아이스버그 W7 시장 & 갈레라 컴퍼니 사장",
    "special": "랜덤으로 [STR], [QCK], [DEX], [PSY], [INT]으로 변환하고, 2회 슬롯을 자유롭게 이동하고, 1턴 슬롯 고정",
    "specialName": "솜씨좋은 장인을 통솔하는 열정",
    "captain": "박식 타입 캐릭터의 공격과 회복이 1.5배가 된다."
  },
  {
    "no": 794,
    "name": "몽키 D. 루피 희망의 별",
    "special": "적 전체의 임의의 대상에 10회 무작위INT 데미지를 주고, 적 공격을 1턴 지연",
    "specialName": "고무고무 폭풍우",
    "captain": "강인타입 캐릭터의 공격을 3배가 되지만 턴 경과마다 체력이 10% 감소, 공격이 0.1배 감소한다.",
    "captainNotes": "처음 던전 입장시 3배, 첫턴 경과시 2.9배, 두번째턴 2.8배 최소 1배까지 감소."
  },
  {
    "no": 795,
    "name": "나이트메어 루피 희망의 별",
    "special": "적 전체의 임의의 대상에 10회 무작위INT 데미지를 주고, 적 공격을 1턴 지연",
    "specialName": "고무고무 폭풍우",
    "captain": "강인타입 캐릭터의 공격을 3.5배가 되지만 턴 경과마다 체력이 10% 감소, 공격이 0.1배 감소한다.",
    "captainNotes": "처음 던전 입장시 3배, 첫턴 경과시 2.9배, 두번째턴 2.8배 최소 1배까지 감소."
  },
  {
    "no": 796,
    "name": "브리드",
    "special": "3턴간 자슬롯 출현율이 약간 상승하고 자신의 공격력이 1턴간 1.75배 상승",
    "specialName": "페토페토 열매, 최강의 힘",
    "captain": "박식 타입 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 797,
    "name": "브리드 페트페트 열매 능력자",
    "special": "3턴간 자슬롯 출현율이 약간 상승하고 자신의 공격력이 1턴간 1.75배 상승",
    "specialName": "페토페토 열매, 최강의 힘",
    "captain": "박식 타입 캐릭터와 강인 타입 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 798,
    "name": "쿵푸 듀공 해수 해적단",
    "special": "독, 맹독 상태를 회복하고, 이 턴에 일당 전원 Perfect 공격이 성공하면 다음 턴에 격투 타입 캐릭터의 공격이 1.75배 상승",
    "specialName": "듀공 오의! 흑 지느러미 권",
    "captain": "3연속 Perfect 이후 일당의 공격력이 2.5배가 된다."
  },
  {
    "no": 799,
    "name": "씨 라판 해수 해적단",
    "special": "슬롯을 랜덤으로 교체하고, 캐릭터의 회복 X9배 체력을 회복",
    "specialName": "해수 힐링"
  },
  {
    "no": 800,
    "name": "문어 복서 해수 해적단",
    "special": "모든 슬롯을 [STR], [DEX], [QCK] 으로 변환",
    "specialName": "옥토퍼스 텐타클 블로"
  },
  {
    "no": 801,
    "name": "Mr. 2 봉쿠레 항해의 기록: B.W.",
    "special": "[STR], [QCK], [DEX], [INT], [BOMB], [BLOCK] 슬롯을 [STR], [QCK], [DEX], [PSY], [INT] 슬롯으로 랜덤 교체, [TND], [RCV] 슬롯을 [PSY] 으로 교체",
    "specialName": "흉내흉내 몽타주",
    "captain": "PSY 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 802,
    "name": "Mr. 2 봉쿠레 항해의 삶: 오카마의 길",
    "special": "[STR], [QCK], [DEX], [INT], [BOMB], [BLOCK] 슬롯을 [STR], [QCK], [DEX], [PSY], [INT] 슬롯으로 랜덤 교체, [TND], [RCV] 슬롯을 [PSY] 으로 교체",
    "specialName": "흉내흉내 몽타주",
    "captain": "PSY 캐릭터의 공격이 2.5배가 된다."
  },
  {
    "no": 803,
    "name": "히나 해군본부 대령",
    "special": "적 전체의 임의의 대상에 8회 DEX 랜덤 데미지를 주고, 3턴간 일당의 공격이 1.1배 상승",
    "specialName": "흑창의 진「총 공격!」",
    "captain": "DEX 캐릭터의 공격과 회복이 1.2배가 된다."
  },
  {
    "no": 804,
    "name": "검은 감옥 히나 해군본부 대령",
    "special": "적 전체의 임의의 대상에 8회 DEX 랜덤 데미지를 주고, 3턴간 일당의 공격이 1.1배 상승",
    "specialName": "흑창의 진「총 공격!」",
    "captain": "DEX 캐릭터의 공격과 회복이 1.5배가 되고, 턴 종료시 캐릭터 공격 X1배의 DEX 데미지를 추가로 준다."
  },
  {
    "no": 805,
    "name": "스모커 해군본부 대령",
    "special": "체력을 20% 줄이고, 감소 값의 X10배의 INT 데미지를 주고, 1턴동안 슬롯 영향을 1.75배 확대",
    "specialName": "화이트 바인",
    "captain": "타격 타입 캐릭터의 공격이 2배가 된다."
  },
  {
    "no": 806,
    "name": "하얀 사냥꾼 스모커 해군본부 대령",
    "special": "체력을 20% 줄이고, 감소 값의 X10배의 INT 데미지를 주고, 1턴동안 슬롯 영향을 1.75배 확대",
    "specialName": "화이트 바인",
    "captain": "타격 타입 캐릭터의 공격이 2배가 되고, 남은 체력이 적을수록 받는 데미지를 최대 30%까지 감소한다."
  },
  {
    "no": 807,
    "name": "순백의 천사 나미 웨딩",
    "captain": "박식 타입 캐릭터의 공격과 회복이 1.5가 된다.",
    "specialName": "썬더 챠지「풍속계」",
    "special": "적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 3턴간 방어력 다운된 적에게 주는 데미지가 1.3배 상승"
  },
  {
    "no": 808,
    "name": "순백의 여신 나미 웨딩",
    "captain": "박식 유형 캐릭터의 공격과 회복이 1.5배이 되고, 턴 종료시 체력을 캐릭터의 회복 X2배 회복한다.",
    "specialName": "썬더 챠지「풍속계」",
    "special": "적 1체에 캐릭터의 공격 X15배 PSY 데미지를 주고, 3턴간 방어력 다운된 적에게 주는 데미지가 1.3배 상승"
  },
  {
    "no": 809,
    "name": "로라 스릴러바크의 신부",
    "captain": "강인 타입 캐릭터의 공격과 회복이 1.5배가 된다.",
    "specialName": "로라 어택 찬스",
    "special": "1턴간 적 전체의 방어력을 80% 감소하고, 슬롯 영향을 1.5배 확대"
  },
  {
    "no": 810,
    "name": "구혼의 로라 스릴러바크의 신부",
    "captain": "강인 타입 캐릭터의 공격이 2배, 회복이 1.5배가 되고, 턴 종료시 체력이 10%씩 감소한다.",
    "specialName": "로라 어택 찬스",
    "special": "1턴간 적 전체의 방어력을 80% 감소하고, 슬롯 영향을 1.5배 확대"
  },
  {
    "no": 811,
    "name": "리스키 형제",
    "specialName": "엉뚱한 선물",
    "special": "자신의 슬롯을 DEX 변환하고, 슬롯을 1회 자유롭게 이동"
  },
  {
    "no": 812,
    "name": "케르베로스",
    "specialName": "지옥의 울음소리",
    "special": "1턴동안 적 전체의 방어력을 격감"
  },
  {
    "no": 813,
    "name": "타라란",
    "specialName": "끈적끈적 거미줄",
    "special": "적 전체 공격을 1턴 지연시키고, 1턴동안 슬롯 영향을 1.25배 상승"
  },
  {
    "no": 814,
    "name": "깔개곰",
    "specialName": "카펫 스크래치",
    "special": "적 1체에 캐릭터의 공격 X13배 DEX 데미지를 주고, 선장슬롯 [TND]로 변환"
  },
  {
    "no": 815,
    "name": "겟코 모리아 스릴러바크의 주인",
    "captain": "STR > INT > DEX 캐릭터 순서로 GOOD 이상의 공격이후 일당의 공격력이 2.5배가 된다.",
    "specialName": "브릭 배트",
    "special": "적 전체의 임의의 대상에 10회 5000 고정데미지를 준다."
  },
  {
    "no": 816,
    "name": "겟코 모리아 스릴러바크의 지배자",
    "captain": "STR > INT > DEX 캐릭터 순서로 GOOD 이상의 공격이후 일당의 공격력이 2.75배가 된다.",
    "specialName": "브릭 배트",
    "special": "적 전체의 임의의 대상에 10회 5000 고정데미지를 준다."
  },
  {
    "no": 817,
    "name": "병사 좀비 힘자랑의 그림자",
    "specialName": "[심] 슬롯 체인지[힘]",
    "special": "[PSY] 슬롯을 [STR] 슬롯으로 변환"
  },
  {
    "no": 818,
    "name": "병사 좀비 민첩한 그림자",
    "specialName": "퀵 체인지",
    "special": "슬롯을 1회 자유롭게 이동"
  },
  {
    "no": 819,
    "name": "병사 좀비 흉계의 그림자",
    "specialName": "하이퍼 버스트",
    "special": "적 전체에 캐릭터의 공격 X13배 [DEX] 데미지를 준다."
  },
  {
    "no": 820,
    "name": "병사 좀비 증오의 그림자",
    "specialName": "[연] 슬롯 체인지[지]",
    "special": "[TND]슬롯을 [INT]슬롯으로 변환"
  },
  {
    "no": 821,
    "name": "병사 좀비 자존심의 그림자",
    "specialName": "슬롯 셔플",
    "special": "랜덤으로 슬롯을 교체"
  },
  {
    "no": 822,
    "name": "교묘한 동물 좀비",
    "specialName": "힐링 업",
    "special": "3턴간 일당의 회복력을 +100증가"
  },
  {
    "no": 823,
    "name": "영리한 동물 좀비",
    "specialName": "슬롯 레이트 업[INT]",
    "special": "3턴간 [INT] 슬롯 출현율을 약간 상승"
  },
  {
    "no": 824,
    "name": "다정한 동물 좀비",
    "specialName": "오토 리페어",
    "special": "5턴동안 턴 종료시 캐릭터의 회복 X3배 체력을 회복"
  },
  {
    "no": 825,
    "name": "장군 좀비 괴력의 그림자",
    "captain": "STR 캐릭터의 공격과 체력이 1.5배가 된다.",
    "specialName": "고대기사의 에너지",
    "special": "1턴동안 STR 캐릭터의 공격을 +200 상승"
  },
  {
    "no": 826,
    "name": "장군 좀비 기기의 그림자",
    "captain": "DEX 캐릭터의 공격과 체력이 1.5배가 된다.",
    "specialName": "고대기사의 약점",
    "special": "적 전체 공격을 1턴 지연시키고, 2턴간 일당의 공격을 80% 감소"
  },
  {
    "no": 827,
    "name": "장군 좀비 질속의 그림자",
    "captain": "QCK 캐릭터의 공격과 체력이 1.5배가 된다.",
    "specialName": "고대기사의 해독",
    "special": "999턴간 독, 맹독 상태의 적에게 주는 데미지가 1.05배가 된다."
  },
  {
    "no": 828,
    "name": "트라팔가 로, 흰마을의 소년",
    "specialName": "기습 찌르기",
    "special": "적 1체에 캐릭터의 공격 X3배 [PSY] 데미지를 주고, 필살 발동시 체력이 20% 이하일때 참격, 야심 타입의 공격을 1.75배 상승",
    "captain": "체력이 50%이상일때, 공격을 받아도 죽지 않는다."
  },
  {
    "no": 829,
    "name": "트라팔가 로, 운명에 구해진 소년",
    "specialName": "기습 찌르기",
    "special": "적 1체에 캐릭터의 공격 X3배 [PSY] 데미지를 주고, 필살 발동시 체력이 20% 이하일때 참격, 야심 타입의 공격을 1.75배 상승",
    "captain": "체력이 50%이상일때, 일정 이상 공격을 받아도 죽지 않는다."
  },
  {
    "no": 830,
    "name": "바질 호킨스 호킨스 해적단 선장",
    "captain": "박식타입과 타격타입의 공격이 1.75배가 되고, 턴 종료시 적으로부터 받은 데미지의 2배를 DEX 데미지를 준다",
    "specialName": "천명의 단죄",
    "special": "상단 슬롯을 [STR], 중단 슬롯을 [DEX], 하단 슬롯을 [QCK] 으로 변환"
  },
  {
    "no": 831,
    "name": "마술사 바질 호킨스 호킨스 해적단 선장",
    "captain": "박식타입과 타격타입의 공격이 2배가 되고, 턴 종료시 적으로부터 받은 데미지의 5배를 DEX 데미지를 준다",
    "specialName": "천명의 단죄",
    "special": "상단 슬롯을 [STR], 중단 슬롯을 [DEX], 하단 슬롯을 [QCK] 으로 변환"
  },
  {
    "no": 832,
    "name": "와이퍼 샨디아의 전사",
    "captain": "체력이 적을수록 자유 타입 캐릭터의 공격이 최대 2.5배가 되고, 턴 종료시 현재 체력의 10%씩 감소한다.",
    "specialName": "번 바주카",
    "special": "1턴간 자유 타입 캐릭터의 공격이 1.5배 상승하고, 캐릭터의 공격 X15배 STR 데미지"
  },
  {
    "no": 833,
    "name": "전쟁귀신 와이퍼 샨디아의 전사",
    "captain": "체력이 적을수록 자유 타입 캐릭터의 공격이 최대 2.75배가 되고, 턴 종료시 현재 체력의 10%씩 감소한다.",
    "specialName": "번 바주카",
    "special": "1턴간 자유 타입 캐릭터의 공격이 1.5배 상승하고, 캐릭터의 공격 X15배 STR 데미지"
  },
  {
    "no": 834,
    "name": "Mr. 7 & 미스 파더즈 데이",
    "captain": "사격 타입 캐릭터의 공격과 회복이 1.5배가 된다.",
    "specialName": "노란총과 개굴개굴총",
    "special": "자신의 슬롯을 [QCK]으로 선장의 슬롯을 [PSY]으로 교체한다."
  },
  {
    "no": 835,
    "name": "폭군 바솔로뮤 쿠마",
    "captain": "박식 타입 캐릭터의 공격과 체력이 2배가 된다.",
    "specialName": "밀쳐내기 압력포",
    "special": "[RCV], [TND], [EMPTY], [BLOCK], [BOMB] 슬롯을 자슬롯으로 변환하고, 1턴동안 슬롯 영향을 1.75배 상승"
  },
  {
    "no": 836,
    "name": "폭군 바솔로뮤 쿠마 정부의 인간병기",
    "captain": "박식 타입 캐릭터의 공격과 체력이 2배가 되고, 적으로부터 받은 데미지의 5배를 턴 종료시 적 전체에 STR 데미지를 준다.",
    "specialName": "밀쳐내기 압력포",
    "special": "[RCV], [TND], [EMPTY], [BLOCK], [BOMB] 슬롯을 자슬롯으로 변환하고, 1턴동안 슬롯 영향을 1.75배 상승"
  },
  {
    "no": 837,
    "name": "시저 크라운",
    "captain": "야심 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "가스 로브",
    "special": "적 전체에 독 공격을 하고, 2턴간 야심 타입 캐릭터의 공격이 1.75배 상승"
  },
  {
    "no": 838,
    "name": "마스터 시저",
    "captain": "야심 타입 캐릭터의 공격이 2.5배가 된다.",
    "specialName": "가스 로브",
    "special": "적 전체에 독 공격을 하고, 2턴간 야심 타입 캐릭터의 공격이 1.75배 상승"
  },
  {
    "no": 839,
    "name": "베르고",
    "captain": "타격 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "귀죽 (귀신대나무)",
    "special": "자신의 슬롯을 [INT]으로 변환하고, 1턴간 자신의 공격을 2배 상승하고, 적 1체에 캐릭터의 공격 X15배의 INT 데미지"
  },
  {
    "no": 840,
    "name": "베르고 돈키호테 해적단",
    "captain": "타격 타입 캐릭터의 공격이 2.5배가 된다.",
    "specialName": "귀죽 (귀신대나무)",
    "special": "자신의 슬롯을 [INT]으로 변환하고, 1턴간 자신의 공격을 2배 상승하고, 적 1체에 캐릭터의 공격 X15배의 INT 데미지"
  },
  {
    "no": 841,
    "name": "모네",
    "captain": "턴 종료시 체력을 캐릭터의 회복 X3배 회복하고, 전 전체에 캐릭터의 공격 X3배의 PSY 데미지를 준다.",
    "specialName": "눈 토끼",
    "special": "적 전체 공격을 1턴간 지연시키고, 2턴간 공격 지연중인 적에게 주는 데미지가 1.25배 증가"
  },
  {
    "no": 842,
    "name": "모네 돈키호테 해적단",
    "captain": "턴 종료시 체력을 캐릭터의 회복 X5배 회복하고, 전 전체에 캐릭터의 공격 X53배의 PSY 데미지를 준다.",
    "specialName": "눈 토끼",
    "special": "적 전체 공격을 1턴간 지연시키고, 2턴간 공격 지연중인 적에게 주는 데미지가 1.25배 증가"
  },
  {
    "no": 843,
    "name": "베이비 5",
    "captain": "참격, 타격 타입 캐릭터의 공격이 1.5배가 된다.",
    "specialName": "무기변모 「미사일 소녀」",
    "special": "적 전체에 캐릭터의 공격 X15배 STR 데미지를 주고, 1턴간 사격 타입 캐릭터의 공격을 1.5배 상승. 필살기 사용 턴에 일당 전원 Perfect 공격 성공시 다음턴에 사격, 참격, 타격 타입 캐릭터의 공격을 1.5배 상승"
  },
  {
    "no": 844,
    "name": "베이비 5 돈키호테 해적단",
    "captain": "참격, 타격 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "무기변모 「미사일 소녀」",
    "special": "적 전체에 캐릭터의 공격 X15배 STR 데미지를 주고, 1턴간 사격 타입 캐릭터의 공격을 1.5배 상승. 필살기 사용 턴에 일당 전원 Perfect 공격 성공시 다음턴에 사격, 참격, 타격 타입 캐릭터의 공격을 1.5배 상승"
  },
  {
    "no": 845,
    "name": "버팔로",
    "captain": "콤보수가 11이상 시점에서 1.5배, 22이상 시점에서 2.5배 공격력이 상승한다.",
    "specialName": "돌풍 「마타사부로 (又三郎)」",
    "special": "자신의 슬롯을 [QCK] 으로 변환하고, 다른 슬롯을 랜덤으로 변환"
  },
  {
    "no": 846,
    "name": "버팔로 돈키호테 해적단",
    "captain": "콤보수가 11이상 시점에서 1.5배, 22이상 시점에서 2.5배, 30이상 시점에서 2.75배, 40이상 시점에서 3.5배 공격력이 상승한다.",
    "specialName": "돌풍 「마타사부로 (又三郎)」",
    "special": "자신의 슬롯을 [QCK] 으로 변환하고, 다른 슬롯을 랜덤으로 변환",
    "limit": [
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "선원효과 추가 1: 모든 캐릭터의 공격력을 30 상승시킨다."
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "공격력 상승 : 100"
      },
      {
        "description": "선원효과 추가 2: [DEX] 캐릭터에 대항하여 공격력이 2배 상승한다."
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 847,
    "name": "톰 톰즈 워커스",
    "captain": "체력이 30% 이하일때 일당의 공격이 1.5배가 된다.",
    "specialName": "튼튼한 선박「진수 (進水)」",
    "special": "선장 효과 무효화 상태를 5차례 회복하고, 3턴간 일당의 공격을 1.05배 상승, 슬롯 영향 1.15배 확대, 데미지 10%감소, 턴 종료시 캐릭터의 회복 X2배 체력을 회복한다."
  },
  {
    "no": 848,
    "name": "전설의 조선공 톰 톰즈 워커스",
    "captain": "체력이 30% 이하일때 일당의 공격이 2배가 된다.",
    "specialName": "튼튼한 선박「진수 (進水)」",
    "special": "선장 효과 무효화 상태를 5차례 회복하고, 3턴간 일당의 공격을 1.05배 상승, 슬롯 영향 1.15배 확대, 데미지 10%감소, 턴 종료시 캐릭터의 회복 X2배 체력을 회복한다."
  },
  {
    "no": 849,
    "name": "커티 프람 톰즈 워커스",
    "captain": "사격 타입 캐릭터의 공격이 1.75배가 된다.",
    "specialName": "배틀 프랑키 9호",
    "special": "적 전체 랜덤 대상에게 5회 랜덤 STR 데미지를 주고, 2턴간 적 전체의 방어력을 50%감소"
  },
  {
    "no": 850,
    "name": "아이스버그 톰즈 워커스",
    "captain": "타격 타입과 박식 타입 캐릭터의 공격이 1.5배가 된다.",
    "specialName": "열혈장인의 일류 어시스트",
    "special": "슬롯을 오른쪽 상단 [DEX], 오른쪽 중단 [STR], 오른쪽 하단 [QCK] 으로 변환하고, 자신은 3턴간 봉인된다."
  },
  {
    "no": 851,
    "name": "브리키의 와포루",
    "captain": "야심 타입 캐릭터의 공격이 1.5배가 된다.",
    "specialName": "설국명물『설화장(雪化粧)』",
    "special": "적 1체에 캐릭터의 공격 X20배 속성 데미지를 주고, 슬롯을 1턴 고정한다."
  },
  {
    "no": 852,
    "name": "날씬한 와포루",
    "captain": "야심 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "설국명물『설화장(雪化粧)』",
    "special": "적 1체에 캐릭터의 공격 X20배 속성 데미지를 주고, 슬롯을 1턴 고정한다."
  },
  {
    "no": 853,
    "name": "롭슨",
    "specialName": "롭슨 『진심모드』",
    "special": "필살기 발동 턴에 일당 전원 Perfect 공격 성공시 다음턴에 3턴동안 강인 타입, 격투 타입 캐릭터의 공격을 1.2배 상승한다."
  },
  {
    "no": 854,
    "name": "쵸파의 눈놀이",
    "captain": "DEX 캐릭터의 공격이 1.5배가 되고, 받는 데미지가 10% 감소된다.",
    "specialName": "모피 강화『겨울 코트』",
    "special": "3턴간 받는 데미지를 50% 감소하고, [DEX] 슬롯 출현율이 약간 상승한다."
  },
  {
    "no": 855,
    "name": "트라팔가 로 성야의 신사",
    "captain": "참격 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "샴블즈 『세레모니』",
    "special": "선장의 슬롯을 [RCV]슬롯으로 변환하고, 캐릭터의 회복 X15배의 체력을 회복한다."
  },
  {
    "no": 856,
    "name": "트라팔가 로 성야의 귀공자",
    "captain": "참격 타입 캐릭터의 공격이 2.5배가 된다.",
    "specialName": "샴블즈 『세레모니』",
    "special": "선장의 슬롯을 [RCV]슬롯으로 변환하고, 캐릭터의 회복 X15배의 체력을 회복한다."
  },
  {
    "no": 857,
    "name": "쥬얼리 보니 식탐 많은 욕심쟁이 산타",
    "captain": "PSY 캐릭터의 공격이 2배가 된다.",
    "specialName": "보니의 진수성찬 타임",
    "special": "인접한 슬롯을 [RCV]슬롯으로 변환하고, 1턴간 PSY 캐릭터의 회복을 1.5배 상승"
  },
  {
    "no": 858,
    "name": "쥬얼리 보니 식탐 많은 이기적인 산타",
    "captain": "PSY 캐릭터의 공격과 회복이 2배가 된다.",
    "specialName": "보니의 진수성찬 타임",
    "special": "인접한 슬롯을 [RCV]슬롯으로 변환하고, 1턴간 PSY 캐릭터의 회복을 1.5배 상승"
  },
  {
    "no": 859,
    "name": "코비 해군본부 상사",
    "captain": "야심 타입 캐릭터의 공격이 1.5배가 되고, 체력이 적을때 받는 데미지를 최대 10%감소한다.",
    "specialName": "목숨을 건 중재",
    "special": "인접한 슬롯을 [RCV]슬롯으로 변환하고 필살기 발동시 체력이 50% 이상일때 일정 이상 공격을 받아도 죽지 않는다."
  },
  {
    "no": 860,
    "name": "전화의 용사 코비 해군본부 상사",
    "captain": "야심 타입 캐릭터의 공격이 2배가 되고, 체력이 적을때 받는 데미지를 최대 30%감소한다.",
    "specialName": "목숨을 건 중재",
    "special": "인접한 슬롯을 [RCV]슬롯으로 변환하고 필살기 발동시 체력이 50% 이상일때 일정 이상 공격을 받아도 죽지 않는다."
  },
  {
    "no": 861,
    "name": "레이디 알비다 아름다운 미녀",
    "specialName": "매혹의 아름다운 쇠방망이",
    "special": "적 1체에 캐릭터의 공격 X13배 QCK 데미지를 주고, 1턴간 받는 데미지를 75% 감소하고, 슬롯 영향을 1.5배 확대",
    "captain": "받는 데미지를 10% 감소한다."
  },
  {
    "no": 862,
    "name": "레이디 알비다 절세의 미녀",
    "captain": "QCK 캐릭터의 공격이 2배가 되고, 받는 데미지를 10% 감소한다.",
    "specialName": "매혹의 아름다운 쇠방망이",
    "special": "적 1체에 캐릭터의 공격 X13배 QCK 데미지를 주고, 1턴간 받는 데미지를 75% 감소하고, 슬롯 영향을 1.5배 확대"
  },
  {
    "no": 863,
    "name": "은세계의 나미",
    "captain": "QCK 캐릭터의 공격이 1.75배가 되고, 턴 종료시 캐릭터의 회복 X2배 만큼 체력을 회복한다.",
    "specialName": "스노우 크리스탈 크리마 택트",
    "special": "2턴간 적 전체의 방어력을 50%감소하고, 적 전체의 공격을 10% 감소시킨다."
  },
  {
    "no": 864,
    "name": "보아 행콕 구사 해적단 선장",
    "captain": "자유 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "슬레이브 에로우",
    "special": "2턴간 체인계수를 2.5배로 고정시키고, 적 전체 공격을 1턴간 지연시킨다."
  },
  {
    "no": 865,
    "name": "여제 보아 행콕 구사 해적단 선장",
    "captain": "자유 타입 캐릭터의 공격과 체력이 2배가 된다.",
    "specialName": "슬레이브 에로우",
    "special": "2턴간 체인계수를 2.5배로 고정시키고, 적 전체 공격을 1턴간 지연시킨다."
  },
  {
    "no": 866,
    "name": "니코 로빈 백화요란 윙: 화사",
    "captain": "박식 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "시엔 플루르 윙 『화(華)』",
    "special": "2턴간 참격, 박식 타입 캐릭터의 공격을 1.3배 상승하고, 봉인 상태를 2턴 회복"
  },
  {
    "no": 867,
    "name": "우솝 타바스코 성: 사격",
    "captain": "콤보 수가 12이상 시점에서 일당의 공격이 1.5배가 된다.",
    "specialName": "타바스코 별 『격(撃)』",
    "special": "적 전체 공격을 2턴간 지연시키고, 적 전체에 캐릭터의 공격 X9배 DEX 데미지를 준다."
  },
  {
    "no": 868,
    "name": "토니토니 쵸파 헤비 공: 짐승",
    "captain": "일당의 공격이 1.2배가 되고,턴 종료후 체력을 1000회복한다.",
    "specialName": "중량 강화 헤비 공『수(獣)』",
    "special": "적 1체에 캐릭터의 공격 X15배 STR 데미지를 주고, 봉인 상태를 3턴 회복"
  },
  {
    "no": 869,
    "name": "돈키호테 도플라밍고 돈키호테 해적단",
    "captain": "Perfect 이외의 공격을 할때까지 야심 타입 캐릭터의 공격이 3배가 된다.",
    "specialName": "블랙 나이트",
    "special": "인접한 캐릭터의 슬롯을 자슬롯으로 변환하고, 1턴간 슬롯 영향을 2배 확대"
  },
  {
    "no": 870,
    "name": "천야차 도플라밍고",
    "captain": "Perfect 이외의 공격을 할때까지 야심 타입 캐릭터의 공격이 3배가 된다.",
    "specialName": "블랙 나이트",
    "special": "인접한 캐릭터의 슬롯을 자슬롯으로 변환하고, 1턴간 슬롯 영향을 2배 확대"
  },
  {
    "no": 871,
    "name": "슈가",
    "captain": "QCK 캐릭터의 공격과 회복이 1.5배가 된다.",
    "specialName": "하비하비 열매",
    "special": "체력이 20%이하 인 적 전체를 전투불능으로 만든다.",
    "specialNotes": "이 능력은 적의 방어력을 무시하고, 적 체력을 0으로 만든다."
  },
  {
    "no": 872,
    "name": "슈가 돈키호테 해적단",
    "captain": "QCK 캐릭터의 공격과 회복이 2배가 된다.",
    "specialName": "하비하비 열매",
    "special": "체력이 20%이하 인 적 전체를 전투불능으로 만든다.",
    "specialNotes": "이 능력은 적의 방어력을 무시하고, 적 체력을 0으로 만든다."
  },
  {
    "no": 873,
    "name": "세뇨르 핑크",
    "captain": "체력이 30% 이하일때 격투 타입 캐릭터의 공격이 2.5배가 된다.",
    "specialName": "냥냥 수윔(Swim)",
    "special": [
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
    ]
  },
  {
    "no": 874,
    "name": "세뇨르 핑크 돈키호테 해적단",
    "captain": "체력이 30% 이하일때 격투 타입 캐릭터의 공격이 3배가 된다.",
    "specialName": "냥냥 수윔(Swim)",
    "special": [
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
    ]
  },
  {
    "no": 875,
    "name": "트레볼",
    "captain": "박식, 야심 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "찐득찐득 런처",
    "special": "선장의 슬롯을 자슬롯으로 변환하고, 1턴간 슬롯을 고정하고, 캐릭터의 공격 X13배 INT 데미지를 준다."
  },
  {
    "no": 876,
    "name": "트레볼 돈키호테 해적단",
    "captain": "박식, 야심 타입 캐릭터의 공격이 2.25배가 되고, 박식과 야심타입 캐릭터는 [TND], [RCV] 슬롯을 유리한 슬롯으로 취급한다.",
    "captainNotes": "유리한 슬롯은 자슬롯과 같은 슬롯효과이다.",
    "specialName": "찐득찐득 런처",
    "special": "선장의 슬롯을 자슬롯으로 변환하고, 1턴간 슬롯을 고정하고, 캐릭터의 공격 X13배 INT 데미지를 준다."
  },
  {
    "no": 877,
    "name": "조라",
    "captain": "모험에서 모은 적립 베리가 2배가 된다.",
    "specialName": "헤븐즈 도 아트(Heaven's Do Art)",
    "special": "2턴간 적이 가하는 2000을 넘는 부분의 데미지를 88%감소",
    "specialNotes": "정확한 데미지 공식: 2000 + ((총 데미지) - 2000) * 0.12"
  },
  {
    "no": 878,
    "name": "조라 돈키호테 해적단",
    "captain": "일당의 공격이 1.5배가 되고, 모험에서 모은 적립 베리가 2배가 된다.",
    "specialName": "헤븐즈 도 아트(Heaven's Do Art)",
    "special": "2턴간 적이 가하는 2000을 넘는 부분의 데미지를 88%감소",
    "specialNotes": "정확한 데미지 공식: 2000 + ((총 데미지) - 2000) * 0.12"
  },
  {
    "no": 879,
    "name": "라오G",
    "captain": "모험을 시작할때 필살턴을 2턴 단축하고, 격투 타입 캐릭터의 공격이 1.75배가 된다.",
    "specialName": "전투보권 만귀해소(戦闘保拳 満鬼解焼)",
    "special": "[BLOCK] 슬롯 포함한 모든슬롯을 [G]슬롯으로 변환하고, 적 전체에 랜덤 무속성 큰 데미지를 준다."
  },
  {
    "no": 880,
    "name": "라오G 돈키호테 해적단",
    "captain": "모험을 시작할때 필살턴을 3턴 단축하고, 격투 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "전투보권 만귀해소(戦闘保拳 満鬼解焼)",
    "special": "[BLOCK] 슬롯 포함한 모든슬롯을 [G]슬롯으로 변환하고, 적 전체에 랜덤 무속성 큰 데미지를 준다."
  },
  {
    "no": 881,
    "name": "스크래치맨 아푸 온에어 해적단",
    "captain": "Good > Great > Perfect 순서로 공격이후 사격과 자유 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "싸우는 음악『투쟁의 체킷아웃(check it out)』",
    "special": "2턴간 받는 데미지가 2배, 회복력이 90%감소 되지만, 사격과 자유 타입 캐릭터의 공격력이 1턴간 1.75배 상승한다."
  },
  {
    "no": 882,
    "name": "바닷천둥 스크래치맨 아푸 온에어 해적단",
    "captain": "Good > Great > Perfect 순서로 공격이후 사격과 자유 타입 캐릭터의 공격이 3배가 된다.",
    "specialName": "싸우는 음악『투쟁의 체킷아웃(check it out)』",
    "special": "2턴간 받는 데미지가 2배, 회복력이 90%감소 되지만, 사격과 자유 타입 캐릭터의 공격력이 1턴간 1.75배 상승한다."
  },
  {
    "no": 883,
    "name": "도리 거병 해적단",
    "captain": "강인 타입 캐릭터의 공격과 체력이 1.25배가 된다.",
    "specialName": "패국",
    "special": "적 전체에 캐릭터의 공격 X20배 INT 데미지를 주고, 1턴간 강인 타입 캐릭터의 공격이 1.5배 상승, 동일턴에 이미 \"패국\"스킬이 발동되어 있을경우 공격이 2배 상승"
  },
  {
    "no": 884,
    "name": "푸른 귀신 도리",
    "captain": "강인 타입 캐릭터의 공격과 체력이 1.5배가 된다.",
    "specialName": "패국",
    "special": "적 전체에 캐릭터의 공격 X20배 INT 데미지를 주고, 1턴간 강인 타입 캐릭터의 공격이 1.5배 상승, 동일턴에 이미 \"패국\"스킬이 발동되어 있을경우 공격이 2배 상승"
  },
  {
    "no": 885,
    "name": "징베 상어의 무인",
    "captain": "격투 타입 캐릭터의 공격이 2배가되고 받는 데미지가 10% 감소된다.",
    "specialName": "당초 기와 정권 『태양』",
    "special": "적 전체의 체력을 10% 줄이고, 스킬 발동시 일당의 체력이 30% 이하일때 격투 타입 캐릭터의 공격이 1.5배 상승"
  },
  {
    "no": 886,
    "name": "Mr. 1 이스트 블루의 검객",
    "captain": "모험 시작시 필살 턴을 1턴 줄이고, 참격 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "스파클링 데이지",
    "special": "적 전체에 캐릭터의 공격 X15배 STR 데미지를 주고, 필살 발동시 일당의 체력이 30% 이하일때 참격 타입 캐릭터의 공격이 1.5배 상승"
  },
  {
    "no": 887,
    "name": "버기, 화끈한 가부키",
    "captain": "야심 타입 캐릭터의 공격이 1.5배가 되고, 모험에서 모은 적립 베리가 1.2배가 된다.",
    "specialName": "특제 버기 탄",
    "special": "1턴간 적 전체의 방어력을 80%감소시키고, 적 전체에 캐릭터의 공격 X15배 QCK 데미지를 준다."
  },
  {
    "no": 888,
    "name": "호로 호로 고스트",
    "specialName": "네거티브 고스트",
    "special": "3턴간 적 전체의 공격을 10% 줄인다.",
    "specialNotes": "필살기에는 적용되지 않는다."
  },
  {
    "no": 889,
    "name": "페로나 스릴러바크의 괴인",
    "captain": "DEX 캐릭터의 공격과 회복이 1.2배가 된다.",
    "specialName": "고스트 랩",
    "special": "[STR] 슬롯을 [DEX] 으로 변환하고, 적 전체에 캐릭터의 공격 X10배 DEX 데미지를 준다."
  },
  {
    "no": 890,
    "name": "페로나 거대한 고스트 프린세스",
    "captain": "DEX 캐릭터의 공격과 회복이 1.5배가 된다.",
    "specialName": "고스트 랩",
    "special": "[STR] 슬롯을 [DEX] 으로 변환하고, 적 전체에 캐릭터의 공격 X10배 DEX 데미지를 준다."
  },
  {
    "no": 891,
    "name": "닥터 호그백 스릴러바크의 괴인",
    "captain": "강인 타입 캐릭터의 공격과 체력이 1.75배가 된다.",
    "specialName": "사자의 소생",
    "special": "1턴간 받는 데미지를 50% 감소하고, 강인 타입 캐릭터의 공격이 1.5배 상승"
  },
  {
    "no": 892,
    "name": "묘지의 압살롬 스릴러바크의 괴인",
    "captain": "체인 계수 증가량이 2배가 된다.",
    "specialName": "죽음의 손",
    "special": "슬롯을 3회 자유롭게 이동"
  },
  {
    "no": 893,
    "name": "오즈 특별 좀비",
    "captain": "3연속 Perfect 이후 강인 타입 캐릭터의 공격이 3배가 된다.",
    "specialName": "오즈 볼",
    "special": "1턴동안 받는 데미지를 50% 감소하고, 적 전체에 캐릭터의 공격 X30배 STR 데미지를 준다."
  },
  {
    "no": 894,
    "name": "겟코 모리아 쉐도우즈 아스가르드",
    "captain": "Good > Great > Perfect 순서로 공격이후 야심 타입 캐릭터의 공격이 3배가 된다.",
    "specialName": "브릭 배트 『그림자 상자』",
    "special": "일당 전원의 [INT] 슬롯을 소비하고, 적 1체에 소비한 슬롯 갯수에 따라서 INT 데미지를 준다.",
    "specialNotes": "[INT] 슬롯 데미지 계산: 슬롯 1개 X10배, 2개 X15배, 3개 X20배, 4개 X50배, 5개 X100배, 6개 X200배 만큼 데미지를 준다."
  },
  {
    "no": 895,
    "name": "브룩 신사다운 해골",
    "captain": "참격 타입 캐릭터의 공격이 1.5배가 된다.",
    "specialName": "최후의 대 합창 『빙크스의 술』",
    "special": "3턴간 턴 종료시 캐릭터의 회복 X6배 체력을 회복한다."
  },
  {
    "no": 896,
    "name": "브룩 밀짚모자 일당",
    "captain": "참격 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "최후의 대 합창 『빙크스의 술』",
    "special": "3턴간 턴 종료시 캐릭터의 회복 X6배 체력을 회복한다."
  },
  {
    "no": 897,
    "name": "Sir 크로커다일 모래의 무장",
    "captain": "박식과 야심 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "침식윤회",
    "special": "자신의 슬롯을 [STR]으로 변환하고, 다른 슬롯은 랜덤으로 변환하고, 적 전체 체력을 10% 감소"
  },
  {
    "no": 898,
    "name": "Mr. 3 고식한 악사",
    "captain": "타격, 박식 타입 캐릭터의 공격이 1.5배가 된다.",
    "specialName": "챔프 파이트 『밭 갈기』",
    "special": "적 전체에 캐릭터의 공격 X10배의 QCK 데미지를 주고, 인접 슬롯을 [G] 슬롯으로 변환"
  },
  {
    "no": 899,
    "name": "Mr. 2 봉쿠레 애매모호한 사무라이",
    "captain": "격투, 자유 타입 캐릭터의 공격이 1.75배, 회복이 1.25배가 된다.",
    "specialName": "우정의 찬가 『오카마의 길』",
    "special": "선장 효과 무효화 상태를 5턴 회복하고, 캐릭터의 회복 X10배 체력을 회복한다."
  },
  {
    "no": 900,
    "name": "프레쉬 프랑키 건강제일",
    "captain": "공격 시작 전에 체력이 가득 차 있으면 사격 타입 캐릭터의 공격이 2배가 된다.",
    "specialName": "프랑키 파괴 포",
    "special": "적 전체의 랜덤 대상에 2000 고정데미지를 6회 주고, 사격과 자유 타입 캐릭터의 역슬롯을 [G] 슬롯으로 변환",
    "specialNotes": "이 슬롯은 오직 사격과 자유 타입 슬롯만 변환되고, 다른 타입 슬롯에는 영향이 없다. #{gOrbs}"
  },
  {
    "no": 901,
    "name": "철인 프랑키",
    "captain": "Boosts ATK of Shooter characters by 2.75x if HP is above 99% at the start of the 턴",
    "specialName": "Franky Destroy Gun",
    "special": "Deals 6 hits of 2,000 fixed damage to random enemies and for Shooter and Free Spirit characters, randomly changes Badly Matching orbs into [G] orbs or Matching orbs",
    "specialNotes": "The orb shuffle only applies to Shooter and Free Spirit characters, other classes are unaffected. #{gOrbs}"
  },
  {
    "no": 902,
    "name": "브로기 거병 해적단",
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.25x",
    "specialName": "Hakoku Sovereignity",
    "special": "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 턴. If \"Hakoku Sovereignity\" is used again in the same 턴 the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
  },
  {
    "no": 903,
    "name": "붉은 귀신 브로기",
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.5x",
    "specialName": "Hakoku Sovereignity",
    "special": "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 턴. If \"Hakoku Sovereignity\" is used again in the same 턴 the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
  },
  {
    "no": 904,
    "name": "요코즈나",
    "captain": "Protects from defeat as long as HP is above 50%",
    "specialName": "Yokozuna Slap!",
    "special": "Deals 20x character's ATK in STR damage to one enemy, delays all enemies for 1 턴"
  },
  {
    "no": 905,
    "name": "롤로노아 조로 어두우르가나 섬을 떠도는 검사",
    "captain": "Boosts ATK of Slasher characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
    "specialName": "Two Gorilla Cut",
    "special": [
      {
        "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 턴",
        "cooldown": [
          17,
          11
        ]
      },
      {
        "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 턴",
        "cooldown": [
          21,
          15
        ]
      },
      {
        "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 턴",
        "cooldown": [
          24,
          18
        ]
      }
    ]
  },
  {
    "no": 906,
    "name": "롤로노아 조로 세계 최강의 검사의 제자",
    "captain": "Boosts ATK of Slasher characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
    "specialName": "Two Gorilla Cut",
    "special": [
      {
        "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 턴",
        "cooldown": [
          17,
          11
        ]
      },
      {
        "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 턴",
        "cooldown": [
          21,
          15
        ]
      },
      {
        "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 턴",
        "cooldown": [
          24,
          18
        ]
      }
    ]
  },
  {
    "no": 907,
    "name": "니코 로빈 데칼라 울프의 수감자",
    "specialName": "Cien Fleur: Big Tree",
    "special": "Delays all enemies for 1 턴, locks all orbs for 1 턴, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.5x 전투 시작 시 체력이 30% 미만이면"
  },
  {
    "no": 908,
    "name": "니코 로빈 혁명의 등불",
    "specialName": "Cien Fleur: Big Tree",
    "special": "Delays all enemies for 1 턴, locks all orbs for 1 턴, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
    "captain": "Boosts ATK of Cerebral characters by 2.5x and their RCV by 1.75x 전투 시작 시 체력이 30% 미만이면"
  },
  {
    "no": 909,
    "name": "토니토니 쵸파 토리노 왕국의 평화의 다리",
    "captain": "Boosts ATK and RCV of PSY characters by 1.5x",
    "specialName": "Hero of Justice! Chopper Mask!!",
    "special": "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 턴"
  },
  {
    "no": 910,
    "name": "쵸파 마스크 세계 평화를 지키는 히어로",
    "specialName": "Hero of Justice! Chopper Mask!!",
    "special": "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 턴",
    "captain": "Boosts ATK of PSY characters by 2x, their RCV by 1.5x, makes INT orbs \"beneficial\" to PSY characters"
  },
  {
    "no": 911,
    "name": "상디 카마밧카 왕국의 도망자",
    "specialName": "Diable Jambe: Premier Hachis",
    "special": [
      {
        "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 턴",
        "cooldown": [
          15,
          8
        ]
      },
      {
        "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 턴",
        "cooldown": [
          25,
          18
        ]
      }
    ],
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.5x"
  },
  {
    "no": 912,
    "name": "상디 남자를 건 사랑의 요리인",
    "specialName": "Diable Jambe: Premier Hachis",
    "special": [
      {
        "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 턴",
        "cooldown": [
          15,
          8
        ]
      },
      {
        "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 턴",
        "cooldown": [
          25,
          18
        ]
      }
    ],
    "captain": "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x. Recovers 2x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 913,
    "name": "브룩 배고파 섬의 악마왕",
    "captain": "Boosts ATK of QCK characters by 2.5x if they have a matching orb",
    "specialName": "Black Magic Summoning: Advent of the Demon Lord Satan",
    "special": "Seals himself for 1 턴, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
  },
  {
    "no": 914,
    "name": "브룩 본 to be Wild!!!",
    "captain": "Boosts ATK of QCK characters by 3x if they have a matching orb, by 1.2x otherwise",
    "specialName": "Black Magic Summoning: Advent of the Demon Lord Satan",
    "special": "Seals himself for 1 턴, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
  },
  {
    "no": 915,
    "name": "니코 로빈 오하라의 신부",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.2x",
    "specialName": "Feeling of Mutual Love",
    "special": "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 턴"
  },
  {
    "no": 916,
    "name": "화사한 재녀 로빈 웨딩",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.75x",
    "specialName": "Feeling of Mutual Love",
    "special": "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 턴"
  },
  {
    "no": 917,
    "name": "마가렛",
    "captain": "Boosts ATK of Shooter characters by 1.5x",
    "specialName": "Kuja's Haki Arrow",
    "special": "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 턴, changes [RCV] orbs on Shooter characters into matching orbs",
    "specialNotes": "The orb shuffle only applies to Shooter characters, other classes are unaffected."
  },
  {
    "no": 918,
    "name": "마가렛 호국의 전사",
    "captain": "Boosts ATK of Shooter characters by 1.75x, recovers a small amount of health at the end of each 턴",
    "specialName": "Kuja's Haki Arrow",
    "special": "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 턴, changes [RCV] orbs on Shooter characters into matching orbs",
    "specialNotes": "The orb shuffle only applies to Shooter characters, other classes are unaffected."
  },
  {
    "no": 919,
    "name": "아펠란드라",
    "specialName": "Spike of the Warrior Defending Her Country",
    "special": "Reduces damage received from STR enemies by 50% for 2 턴"
  },
  {
    "no": 920,
    "name": "스위트피",
    "specialName": "Snake Bow of the Warrior Defending Her Country",
    "special": "Changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [TND] orbs"
  },
  {
    "no": 921,
    "name": "보아 행콕 여인 섬의 신부",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.2x",
    "specialName": "Pure and Beautiful Shyness",
    "special": "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 턴"
  },
  {
    "no": 922,
    "name": "사랑에 사는 여제 행콕 웨딩",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.75x",
    "specialName": "Pure and Beautiful Shyness",
    "special": "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 턴"
  },
  {
    "no": 923,
    "name": "사우스 블루의 캡틴 키드",
    "captain": "Boosts ATK of Driven Characters by 2.5x 전투 시작 시 체력이 30% 미만이면, 2x otherwise",
    "specialName": "Repel: Weapons Reflect",
    "special": "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
    "specialNotes": "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
  },
  {
    "no": 924,
    "name": "캡틴 키드 키드 해적단 선장",
    "captain": "Boosts ATK of Driven Characters by 2.75x 전투 시작 시 체력이 30% 미만이면, 2x otherwise",
    "specialName": "Repel: Weapons Reflect",
    "special": "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
    "specialNotes": "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
  },
  {
    "no": 925,
    "name": "옥졸장 사디짱",
    "captain": "Boosts ATK of Powerhouse characters by 2x",
    "specialName": "Let's go, Jailer Beasts!",
    "special": "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 턴"
  },
  {
    "no": 926,
    "name": "옥졸장 사디짱 옥졸수의 지휘관",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x",
    "specialName": "Let's go, Jailer Beasts!",
    "special": "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 턴"
  },
  {
    "no": 927,
    "name": "도베르만 해군본부 중장",
    "captain": "Boosts ATK and HP of Driven characters by 1.5x",
    "specialName": "Unwavering Hammer of Justice",
    "special": "Increases damage received by 1.5x and boosts ATK of Slasher and Driven characters by 1.2x for 3 턴"
  },
  {
    "no": 928,
    "name": "한냐발",
    "captain": "Boosts ATK of Driven characters by 1.75x while above 30% HP and boosts ATK of Striker characters by 1.75x while below 30% HP",
    "special": "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴",
    "specialName": "Hell Wisdom Rush"
  },
  {
    "no": 929,
    "name": "한냐발 임펠다운 부서장",
    "captain": "Boosts ATK of Driven characters by 2.25x while above 30% HP and boosts ATK of Striker characters by 2.25x while below 30% HP",
    "special": "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴",
    "specialName": "Hell Wisdom Rush"
  },
  {
    "no": 930,
    "name": "사루데스",
    "captain": "Boosts chain multiplier by 2x",
    "specialName": "Blugori Manipulation Song",
    "special": "Changes orbs in left column to [DEX], then [QCK], then [INT]. Locks himself for 3 턴."
  },
  {
    "no": 931,
    "name": "블고리",
    "specialName": "Large Axe of Punishment",
    "special": "Deals 13x ATK to 1 enemy in [DEX] Damage. 턴 [BLOCK] orbs into [RCV] orbs"
  },
  {
    "no": 932,
    "name": "피카",
    "captain": "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
    "specialName": "Rock Domination Wall",
    "special": [
      {
        "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
        "cooldown": [
          25,
          11
        ]
      },
      {
        "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
        "cooldown": [
          31,
          17
        ]
      }
    ]
  },
  {
    "no": 933,
    "name": "피카 돈키호테 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
    "specialName": "Rock Domination Wall",
    "special": [
      {
        "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
        "cooldown": [
          25,
          11
        ]
      },
      {
        "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
        "cooldown": [
          31,
          17
        ]
      }
    ]
  },
  {
    "no": 934,
    "name": "해협의 징베",
    "captain": "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
    "specialName": "Fishman Karate!! Shark Fist Tile Breaker",
    "special": "Makes Perfects harder to hit for 1 턴. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into Matching"
  },
  {
    "no": 935,
    "name": "해협의 징베 전 왕의 부하 질무해",
    "captain": "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
    "specialName": "Fishman Karate!! Shark Fist Tile Breaker",
    "special": "Makes Perfects harder to hit for 1 턴. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into matching"
  },
  {
    "no": 936,
    "name": "몽키 D. 루피 정상전쟁의 생환자",
    "captain": "Boosts Chain Multiplier by 3x",
    "specialName": "Gum-Gum Giant Jet Shell",
    "special": "Deals 20x ATK as [QCK] damage, and makes Perfects easier to hit for 3 턴"
  },
  {
    "no": 937,
    "name": "몽키 D. 루피 동료와 맹세『３Ｄ２Ｙ』",
    "captain": "Boosts Chain Multiplier by 3.5x and boosts HP by 1.25x",
    "specialName": "Gum-Gum Giant Jet Shell",
    "special": "Deals 20x ATK as [QCK] damage, and makes Perfects easier to hit for 3 턴"
  },
  {
    "no": 938,
    "name": "나미 기후의 과학의 탐구자",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Cerebral characters by 1.5x",
    "specialName": "Cyclone Burst",
    "special": "Reduces Bind duration for one character completely. For Striker and Cerebral characters, changes Badly Matching orbs into Matching orbs"
  },
  {
    "no": 939,
    "name": "나미 하늘섬 웨더리아의 도둑고양이",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of Cerebral characters by 2x",
    "specialName": "Cyclone Burst",
    "special": "Reduces Bind duration for one character completely. For Striker and Cerebral characters, changes Badly Matching orbs into Matching orbs"
  },
  {
    "no": 940,
    "name": "우솝 보잉열도의 대식한",
    "captain": "Boosts ATK and HP of [DEX] characters by 1.5x",
    "specialName": "Sure Kill! Exploding Star!!",
    "special": "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 턴"
  },
  {
    "no": 941,
    "name": "우솝 노상강도 숲의 과감한 전사",
    "captain": "Boosts ATK of [DEX] characters by 1.75x and their HP by 2.25x",
    "specialName": "Sure Kill! Exploding Star!!",
    "special": "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 턴"
  },
  {
    "no": 942,
    "name": "프랑키, 메카 애니멀과 싸우는 사이보그",
    "captain": "Boosts ATK and HP of [STR] characters by 1.5x",
    "specialName": "Future Country's Big Incident: The Nightmare of Baldimore",
    "special": "Reduces damage received from [QCK] enemies by 100% for 1 턴"
  },
  {
    "no": 943,
    "name": "철인(사이보그)프랑키 발지모어의 영수",
    "captain": "Boosts ATK of [STR] characters by 2.25x and their HP by 1.75x",
    "specialName": "Future Country's Big Incident: The Nightmare of Baldimore",
    "special": "Reduces damage received from [QCK] enemies by 100% for 1 턴"
  },
  {
    "no": 944,
    "name": "페로나 원한의 소용돌이 고성의 신부",
    "captain": "Boosts ATK and RCV of Driven characters by 1.2x",
    "specialName": "Spiritual Bouquet",
    "special": "Boosts ATK and RCV of Driven characters by 1.5x for 1 턴"
  },
  {
    "no": 945,
    "name": "팬시 프린세스 페로나 웨딩",
    "captain": "Boosts ATK and RCV of Driven characters by 1.75x",
    "specialName": "Spiritual Bouquet",
    "special": "Boosts ATK and RCV of Driven characters by 1.5x for 1 턴"
  },
  {
    "no": 946,
    "name": "라쿠요 흰수염 해적단 7번대 대장",
    "specialName": "Lock-on Iron Ball",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Striker characters by 1.75x",
    "special": "Change Friend Captain and changes own orb into [INT]"
  },
  {
    "no": 947,
    "name": "포사 흰수염 해적단 15번대 대장",
    "captain": "Boosts ATK of [INT] characters by 1.5x, Boosts damage of [INT] specials by 1.5x",
    "specialName": "Flame Flash",
    "special": "[STR] and [INT] characters gain 1.3x ATK for 1 턴. Deals 10x character's ATK in [INT] damage to all enemies"
  },
  {
    "no": 948,
    "name": "크리엘 흰수염 해적단 10번대 대장",
    "captain": "Boosts ATK of Shooter characters by 1.5x and their RCV by 1.2x",
    "specialName": "Twin Cannons",
    "special": "Randomly changes all orbs to either [STR] or [INT]. Deals random [STR] damage"
  },
  {
    "no": 949,
    "name": "삿치 흰수염 해적단 4번대 대장",
    "captain": "Boosts ATK of Slasher characters by 2x, recovers 2x character's RCV in HP at the end of each 턴",
    "specialName": "Ties with Ace",
    "special": "Reduces Silence duration by 3 턴, and recovers 4,000 HP"
  },
  {
    "no": 950,
    "name": "화권의 에이스",
    "captain": "Boosts ATK of Fighter and Free Spirit characters by 2.5x after scoring 3 Perfects in a row",
    "specialName": "Flame Commandment: Fire Pillar",
    "special": "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 턴. Reduces damage received by 50% for 1 턴."
  },
  {
    "no": 951,
    "name": "화권의 에이스 흰수염 해적단 2번대 대장",
    "captain": "Boosts ATK of Fighter and Free Spirit characters by 2.75x after scoring 3 Perfects in a row",
    "specialName": "Flame Commandment: Fire Pillar",
    "special": "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 턴. Reduces damage received by 50% for 1 턴."
  },
  {
    "no": 952,
    "name": "벤 베크만",
    "captain": "Boosts ATK and HP of Shooter and Striker characters by 1.2x",
    "specialName": "Life-saving Gunstock Blow",
    "special": "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
  },
  {
    "no": 953,
    "name": "벤 베크만 빨강 머리 해적단",
    "captain": "Boosts ATK and HP of Shooter and Striker characters by 1.5x",
    "specialName": "Life-saving Gunstock Blow",
    "special": "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
  },
  {
    "no": 954,
    "name": "갸로",
    "captain": "Boosts ATK and HP of [QCK] characters by 1.5x",
    "specialName": "Goldfish Fencing! I'll Dye the Sea Red with Your Blood",
    "special": "Reduces the defense of all enemies by 80% for 2 턴"
  },
  {
    "no": 955,
    "name": "마쿠로",
    "captain": "Boosts ATK and HP of [PSY] characters by 1.5x",
    "specialName": "Get Rich Quick Scheme! We're All Gonna Be Rich",
    "special": "Boosts ATK against enemies with reduced defense by 1.2x for 2 턴"
  },
  {
    "no": 956,
    "name": "탕스이",
    "captain": "Boosts ATK and HP of [INT] characters by 1.5x",
    "specialName": "Fishman karate! I'll Finish You",
    "special": "Boosts ATK of Powerhouse characters by 1.2x for 2 턴"
  },
  {
    "no": 957,
    "name": "재빠른 건맨, 파란 보디가드",
    "specialName": "First Aid",
    "special": "Recover 2,000 HP"
  },
  {
    "no": 958,
    "name": "계략의 건맨, 검은 보디가드",
    "specialName": "Bind Purge",
    "special": "Reduces Bind duration by 2 턴"
  },
  {
    "no": 959,
    "name": "파인 건맨, 초록 보디가드",
    "specialName": "Captain Soul Recovery",
    "special": "Reduces Despair duration by 2 턴"
  },
  {
    "no": 960,
    "name": "스위프트 건맨, 파란 보디가드",
    "specialName": "Slot Color Shuffle",
    "special": "Randomly changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs"
  },
  {
    "no": 961,
    "name": "스트롱 건맨, 빨간 보디가드",
    "specialName": "Slot Power Light",
    "special": "Amplifies the effect of orbs by 1.25x for 1 턴"
  },
  {
    "no": 962,
    "name": "강력한 건맨, 노란 보디가드",
    "specialName": "Captain Slot Change RCV",
    "special": "Changes captain's orb into [RCV]"
  },
  {
    "no": 963,
    "name": "차를로스 성",
    "captain": "Boosts ATK of characters with cost between 50 and 55 by 2x",
    "specialName": "Saint Charloss' Stroll",
    "special": "Reduces the defense of all enemies by 100% for 1 턴 and randomizes all orbs"
  },
  {
    "no": 964,
    "name": "로즈워드 성",
    "captain": "Boosts ATK, HP, and RCV of characters with cost between 50 and 55 by 1.5x",
    "specialName": "Wrath of the Creator Bloodline",
    "special": "Boosts ATK of all characters by 1.1x for 1 턴. If \"Wrath of the Creator Bloodline\" is used again in the same 턴 the special is activated in, boosts ATK of all characters by 1.5x instead."
  },
  {
    "no": 965,
    "name": "샤를리아 궁",
    "captain": "Boosts ATK of characters with cost between 50 and 55 by 1.5x, recovers 500 HP at the end of each 턴",
    "specialName": "Wrath of the Creator Bloodline",
    "special": "Boosts ATK of all characters by 1.1x for 1 턴. If \"Wrath of the Creator Bloodline\" is used again in the same 턴 the special is activated in, boosts ATK of all characters by 1.5x instead."
  },
  {
    "no": 966,
    "name": "슈퍼루키 유스타스 키드",
    "captain": "Boosts ATK of Driven characters by 2.25x",
    "specialName": "Repel",
    "special": "Empties slots with [QCK] orbs, deals [QCK] damage based on number of [QCK] slots emptied to all enemies",
    "specialNotes": "The exact multiplier used is chosen based on the number of [QCK] orbs consumed: 0 orbs - Can't activate; 1 orb - 14x ATK; 2 orbs - 21x ATK; 3 orbs - 35x ATK; 4 orbs - 49x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
  },
  {
    "no": 967,
    "name": "슈퍼루키 트라팔가 로",
    "captain": "Boosts ATK of Free Spirit characters by 2.25x",
    "specialName": "Surgeon of Death's First Aid Surgery",
    "special": "Recovers 20x character's RCV in HP. Switches orbs between slots twice"
  },
  {
    "no": 968,
    "name": "파시피스타 PX-1",
    "specialName": "High Heat Ray Laser",
    "special": "Deals 25x ATK to one enemy. Changes own orb into matching orb"
  },
  {
    "no": 969,
    "name": "파시피스타 PX-2",
    "specialName": "High Heat Ray Laser",
    "special": "Deals 25x ATK to one enemy. Changes own orb into matching orb"
  },
  {
    "no": 970,
    "name": "파시피스타 PX-3",
    "specialName": "High Heat Ray Laser",
    "special": "Deals 25x ATK to one enemy. Changes own orb into matching orb"
  },
  {
    "no": 971,
    "name": "파시피스타 PX-4",
    "specialName": "High Heat Ray Laser",
    "special": "Deals 25x ATK to one enemy. Changes own orb into matching orb"
  },
  {
    "no": 972,
    "name": "파시피스타 PX-5",
    "specialName": "High Heat Ray Laser",
    "special": "Deals 25x ATK to one enemy. Changes own orb into matching orb"
  },
  {
    "no": 973,
    "name": "센토마루",
    "captain": "Boosts ATK of Powerhouse characters by 2x if HP is above 99% at the start of the 턴",
    "specialName": "Ironclad Thrust: Dwarf Guard of the World",
    "special": "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
  },
  {
    "no": 974,
    "name": "센토마루, 해군본부 과학 부대 대장",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the 턴",
    "specialName": "Ironclad Thrust: Dwarf Guard of the World",
    "special": "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
  },
  {
    "no": 975,
    "name": "스모커, 야생의 고독한 늑대",
    "captain": "Reduces damage received by 10%",
    "specialName": "A Threat That Puts Adults to Shame",
    "special": "Boosts ATK of Striker and Driven characters by 1.3x for 1 턴. Protects from defeat as long as HP is above 50% for 1 턴"
  },
  {
    "no": 976,
    "name": "스모커, 고독한 늑대",
    "captain": "Boosts ATK of Driven characters by 2x. Reduces damage received by 10%",
    "specialName": "A Threat That Puts Adults to Shame",
    "special": "Boosts ATK of Striker and Driven characters by 1.3x for 1 턴. Protects from defeat as long as HP is above 50% for 1 턴"
  },
  {
    "no": 977,
    "name": "키자루",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "specialName": "Yata no Kagami (Sacred Mirror)",
    "special": [
      {
        "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 턴",
        "cooldown": [
          19,
          5
        ]
      },
      {
        "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 턴. Adds .5x to Chain multiplier for 2 턴",
        "cooldown": [
          25,
          11
        ]
      }
    ],
    "specialNotes": "#{stages}"
  },
  {
    "no": 978,
    "name": "키자루, 번쩍번쩍열매",
    "captain": "Reduces cooldown of Shooter specials by 2 턴 at the start of the fight, boosts ATK of Shooter characters by 2.25x and boosts HP of Shooter characters by 1.5x",
    "specialName": "Yata no Kagami (Sacred Mirror)",
    "special": [
      {
        "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 턴",
        "cooldown": [
          19,
          5
        ]
      },
      {
        "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 턴. Adds .5x to Chain multiplier for 2 턴",
        "cooldown": [
          25,
          11
        ]
      }
    ],
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "선원효과 추가 1: Boosts ATK, HP and RCV of Shooter characters by 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "새로운 선장 효과 습득: Reduces cooldown of Shooter specials by 3 턴 at the start of the fight, boosts ATK of Shooter characters by 2.35x and boosts HP of Shooter characters by 1.5x"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 979,
    "name": "이조, 흰수염 16번대 대장",
    "captain": "Boosts ATK of [PSY] and [DEX] characters by 1.75x and their RCV by 1.2x",
    "specialName": "Flintlock Barrage",
    "special": "Randomly changes all orbs into either [PSY] or [DEX] orbs, deals random PSY damage to all enemies"
  },
  {
    "no": 980,
    "name": "블라멩코, 흰수염 6번대 대장",
    "captain": "Boosts ATK of [DEX] and [STR] characters by 1.75x and their RCV by 1.2x",
    "specialName": "Hidden King Mallet",
    "special": "Randomizes all orbs and changes own orb into [DEX]"
  },
  {
    "no": 981,
    "name": "나무르, 흰수염 8번대 대장",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 2x and sharply reduces their RCV",
    "specialName": "Martial Art Diving Fist",
    "special": "Boosts own ATK by 1.75x for 1 턴 and deals 800 fixed damage to one enemy"
  },
  {
    "no": 982,
    "name": "비스타, 흰수염 5번대 대장",
    "captain": "Boosts ATK of Slasher characters by 2x",
    "specialName": "Flower Sword Straight Cut",
    "special": "Deals 25x character's ATK to one enemy, changes bottom row orbs into matching orbs"
  },
  {
    "no": 983,
    "name": "화검의 비스타, 흰수염 5번대 대장",
    "captain": "Boosts ATK of Slasher characters by 2.25x, makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters",
    "specialName": "Flower Sword Straight Cut",
    "special": "Deals 25x character's ATK to one enemy, changes bottom row orbs into matching orbs"
  },
  {
    "no": 984,
    "name": "파울리 갈리라컴퍼니 1번 도크장",
    "captain": "Boosts ATK of Striker characters by 2.25x",
    "specialName": "Shrouds and Rattling Knot",
    "special": "Delays all enemies for 1 턴 and locks all orbs for 1 턴"
  },
  {
    "no": 985,
    "name": "데마로 블랙 & 쇼콜라, 짝퉁 밀짚모자 해적단",
    "captainNotes": "Acts as a Daimyo Turtle and thus gives 15k EXP"
  },
  {
    "no": 986,
    "name": "코코아 & 야생여우, 짝퉁 밀짚모자 해적단",
    "captainNotes": "Acts as a Daimyo Turtle and thus gives 15k EXP"
  },
  {
    "no": 987,
    "name": "만자로 & 드립,짝퉁 밀짚모자 해적단",
    "captainNotes": "Acts as a Daimyo Turtle and thus gives 15k EXP"
  },
  {
    "no": 988,
    "name": "마운블루틴 & 투르코 , 짝퉁 밀짚모자 해적단",
    "captainNotes": "Acts as a Daimyo Turtle and thus gives 15k EXP"
  },
  {
    "no": 989,
    "name": "짝퉁 밀짚모자",
    "captain": "Boosts ATK of characters with cost above 20 and below 30 by 2.5x, but reduces the HP of every character by 90%",
    "special": "Changes the orbs in the left column into [G], [QCK] and [DEX], the orbs in the right column into [STR], [PSY] and [INT]",
    "specialName": "Bluff Piracy"
  },
  {
    "no": 990,
    "name": "마하바이스",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x if HP is above 99% at the start of the 턴",
    "specialName": "10,000 Ton Vise of Hell",
    "special": "Changes [RCV] orbs into matching orbs"
  },
  {
    "no": 991,
    "name": "마하바이스,돈키호테 해적단",
    "captain": "Boosts ATK of Free Spirit characters by 2.75x if HP is above 99% at the start of the 턴",
    "specialName": "10,000 Ton Vise of Hell",
    "special": "Changes [RCV] orbs into matching orbs"
  },
  {
    "no": 992,
    "name": "글라디우스",
    "captain": "Boosts ATK of [QCK] characters by 2x",
    "special": "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
    "specialName": "Punc Rock Fest"
  },
  {
    "no": 993,
    "name": "글라디우스, 돈키호테 해적단",
    "captain": "Boosts ATK of [QCK] characters by 2.5x",
    "special": "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
    "specialName": "Punc Rock Fest",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "새로운 선장 효과 습득: Boosts ATK of [QCK] characters by 2.75x"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "선원효과 추가 1: Boosts HP, RCV, and ATK of [QCK] characters by 30"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 994,
    "name": "바이올렛",
    "captain": "Boosts amount of Beli received by 2x",
    "special": [
      {
        "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 턴. Displays the status of all enemies.",
        "cooldown": [
          13,
          7
        ]
      },
      {
        "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 턴. Displays the status of all enemies.",
        "cooldown": [
          20,
          14
        ]
      }
    ],
    "specialName": "Peeping Mind",
    "specialNotes": "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on 턴', and 'Effect after Death'<br>#{stages}",
    "sailor": "Restores her own special by 1 턴 when it is rewinded"
  },
  {
    "no": 995,
    "name": "바이올렛, 돈키호테 해적단",
    "captain": "Boosts amount of Beli received by 3x",
    "special": [
      {
        "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 턴. Displays the status of all enemies.",
        "cooldown": [
          13,
          7
        ]
      },
      {
        "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 턴. Displays the status of all enemies.",
        "cooldown": [
          20,
          14
        ]
      }
    ],
    "specialName": "Peeping Mind",
    "specialNotes": "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on 턴', and 'Effect after Death'<br>#{stages}",
    "sailor": "Restores her own special by 1 턴 when it is rewinded"
  },
  {
    "no": 996,
    "name": "델린저",
    "captain": "Boosts ATK of Powerhouse characters by 2x",
    "special": [
      {
        "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
        "cooldown": [
          11,
          5
        ]
      },
      {
        "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
        "cooldown": [
          20,
          14
        ]
      }
    ],
    "specialName": "Decapitation High Heel"
  },
  {
    "no": 997,
    "name": "델린저, 돈키호테 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x, makes [TND] and [RCV] orbs \"beneficial\" to Powerhouse characters",
    "special": [
      {
        "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
        "cooldown": [
          11,
          5
        ]
      },
      {
        "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
        "cooldown": [
          20,
          14
        ]
      }
    ],
    "specialName": "Decapitation High Heel"
  },
  {
    "no": 998,
    "name": "디아만테",
    "captain": "Boosts ATK of Driven characters by 2x and reduces cooldown of all specials by 1 턴 at the start of the fight",
    "specialName": "Hira Release: Death Enjambre",
    "special": "Delays all enemies for 2 턴, deals 50x character's ATK as typeless damage to all enemies at the end of the 턴 for 5 턴"
  },
  {
    "no": 999,
    "name": "디아만테, 돈키호테 해적단",
    "captain": "Boosts ATK of Driven characters by 2.25x and reduces cooldown of all specials by 2 턴 at the start of the fight",
    "specialName": "Hira Release: Death Enjambre",
    "special": "Delays all enemies for 2 턴, deals 50x character's ATK as typeless damage to all enemies at the end of the 턴 for 5 턴",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1000,
    "name": "코라손, 돈키호테 해적단",
    "captain": "Boosts ATK of all characters proportionally to the crew's current HP. Heals for 1.5x his RCV at the end of the 턴 each time you hit a Good. Heals for .5x his RCV at the end of the 턴 each time you hit a Great",
    "special": "Recovers 25x character's RCV in HP. Reduces Bind and Despair duration by 3 턴",
    "specialName": "Love Sacrifice"
  },
  {
    "no": 1001,
    "name": "돈키호테 로시난테",
    "captain": "공격시작 전 남은 체력이 많을수록 일당의 공격력이 높아지며 턴 종료 시, GREAT 1회당 캐릭터의 회복력x0.5배, GOOD 1회당 캐릭터의 회복력x1.5배의 체력을 회복한다.",
    "special": "캐릭터의 회복력x25배의 체력을 회복하고, 봉쇄ㆍ선장효과 무효 상태를 3턴 회복한다",
    "specialName": "사랑의 새크리파이스"
  },
  {
    "no": 1002,
    "name": "베포 하트 해적단",
    "captain": "Boosts ATK of Fighter characters by 1.5x",
    "special": "Reduces Paralysis duration by 3 턴 and deals 7x ATK as [STR] damage to one enemy",
    "specialName": "Bepo's Ultimate Fist!!"
  },
  {
    "no": 1003,
    "name": "무투가 베포 하트 해적단",
    "captain": "Boosts ATK of Fighter characters by 2x",
    "special": "Reduces Paralysis duration by 3 턴 and deals 7x ATK as [STR] damage to one enemy",
    "specialName": "Bepo's Ultimate Fist!!"
  },
  {
    "no": 1004,
    "name": "샤치&펭귄 하트 해적단",
    "captain": "Boosts RCV of all characters by 1.5x",
    "specialName": "Hilarious Combination",
    "special": "Changes the orbs in the left column into [RCV] orbs"
  },
  {
    "no": 1005,
    "name": "쟘바루",
    "captain": "Boosts ATK of Powerhouse characters by 1.5x",
    "specialName": "Rush to Freedom",
    "special": "Boosts own ATK by 1.75x for 1 턴"
  },
  {
    "no": 1006,
    "name": "쟘바루 하트 해적단",
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.5x",
    "specialName": "Rush to Freedom",
    "special": "Boosts own ATK by 1.75x for 1 턴"
  },
  {
    "no": 1007,
    "name": "모네 겨울벚꽃",
    "captain": "Boosts ATK of Cerebral and Free Spirit characters by 1.5x",
    "specialName": "Cherry Blossom Storm: Spring Pattern",
    "special": "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
  },
  {
    "no": 1008,
    "name": "모네 큰겨울벚꽃",
    "captain": "Boosts ATK of Cerebral and Free Spirit characters by 2x. Recovers 3x character's RCV in HP at the end of each 턴",
    "specialName": "Cherry Blossom Storm: Spring Pattern",
    "special": "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
  },
  {
    "no": 1009,
    "name": "인연 BOOST 루피",
    "special": "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
    "specialName": "Gum-Gum Flail",
    "captain": "Boosts ATK of [STR] and Fighter characters by 1.5x, reduces cooldown of all specials by 1 턴 at the start of the fight"
  },
  {
    "no": 1010,
    "name": "바토라 백작",
    "captain": "Boosts ATK of Driven characters by 1.5x",
    "special": "Boosts own ATK by 1.3x for 5 턴, reduces damage received by 20% for 5 턴, deals 13x character's ATK as [INT] damage to one enemy",
    "specialName": "Evil Beast's Horn Pierce"
  },
  {
    "no": 1011,
    "name": "바토라 백작(왕이될 힘)",
    "captain": "Boosts ATK of Driven characters by 1.75x, and boosts ATK of Powerhouse characters by 1.5x",
    "special": "Boosts own ATK by 1.3x for 5 턴, reduces damage received by 20% for 5 턴, deals 13x character's ATK as [INT] damage to one enemy",
    "specialName": "Evil Beast's Horn Pierce"
  },
  {
    "no": 1012,
    "name": "뱀 총수",
    "specialName": "Phantom Snake Sword",
    "special": "Changes the orbs in the left column into [RCV], [QCK] and [DEX], binds himself for 2 턴"
  },
  {
    "no": 1013,
    "name": "핫도그 장군",
    "specialName": "Binding Iron Chain",
    "special": "Boosts ATK against delayed enemies by 1.2x for 1 턴"
  },
  {
    "no": 1014,
    "name": "토니토니 쵸파 동물의왕",
    "special": "Binds himself for 1 턴 and makes Perfects easier to hit for 2 턴",
    "specialName": "Scapegoat Substitute",
    "captain": "Boosts ATK of Powerhouse characters by 2x, and Recovers 2x character's RCV in HP at the end of each 턴"
  },
  {
    "no": 1015,
    "name": "카포네 뱃지 파이어탱크 해적단 선장",
    "captain": "Boosts ATK of [INT] characters by 2.75x if they have a matching orb",
    "special": "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 턴. If during that 턴 every unit scores a Perfect hit, boosts ATK of [INT] characters by 1.5x for the next 2 턴",
    "specialName": "Hollow Eye Killing Shot"
  },
  {
    "no": 1016,
    "name": "카포네 ”갱”뱃지 파이어탱크 해적단 선장",
    "captain": "Boosts ATK of [INT] characters by 3x if they have a matching orb, by 1.5x otherwise",
    "special": "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 턴. If during that 턴 every unit scores a Perfect hit, boosts ATK of [INT] characters by 1.5x for the next 2 턴",
    "specialName": "Hollow Eye Killing Shot"
  },
  {
    "no": 1017,
    "name": "갈색수염",
    "captain": "Boosts HP of Slasher characters by 1.5x",
    "special": "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 턴",
    "specialName": "Ravaging Cutlass Dance"
  },
  {
    "no": 1018,
    "name": "갈색수염 악어캔타우르스",
    "captain": "Boosts ATK of Slasher characters by 1.5x and their HP by 2x",
    "special": "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 턴",
    "specialName": "Ravaging Cutlass Dance"
  },
  {
    "no": 1019,
    "name": "피플 루루 갈레라 컴퍼니 1번도크 직장",
    "captain": "Reduces damage received from [QCK] enemies by 50%",
    "special": "Switches orbs between slots 2 times and deals 2000 fixed damage to one enemy",
    "specialName": "Blacksmithing Measurement: Double Slash"
  },
  {
    "no": 1020,
    "name": "슈가 미자쿠라",
    "captain": "Boosts ATK and RCV of Shooter and Cerebral characters by 1.5x.",
    "specialName": "Sweet Fruit Trap",
    "special": "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
  },
  {
    "no": 1021,
    "name": "슈가 사쿠란보",
    "captain": "Boosts ATK and RCV of Shooter and Cerebral characters by 1.75x.",
    "specialName": "Sweet Fruit Trap",
    "special": "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
  },
  {
    "no": 1022,
    "name": "몽키 D. 루피 해적왕의 궤적",
    "captain": "Boosts ATK of all characters by 2x and boosts amount of Beli received by 1.2x",
    "special": "Deals 13x character's ATK as [PSY] damage to all enemies. Changes [BOMB], [EMPTY], and [TND] orbs to [PSY]",
    "specialName": "Gum-Gum Gigant Rifle: New Star"
  },
  {
    "no": 1023,
    "name": "포트거스 D. 에이스 해적왕을 향한 꿈 ",
    "captain": "Boosts ATK of Free Spirit characters by 2.25x",
    "special": "Deals 13x characters ATK in INT damage to all enemies, boosts atk of Free Spirit characters by 1.75x for one 턴.",
    "specialName": "Flame Mirror: Dawn"
  },
  {
    "no": 1024,
    "name": "수령 칭자오",
    "captain": "Boosts ATK of Powerhouse characters by 2x",
    "special": "Amplifies the effect of orbs for 2 턴, the exact multiplier changes depending on the current HP at the time the special was activated. ",
    "specialName": "Eight-Impact Fist! Blow of Resentment"
  },
  {
    "no": 1025,
    "name": "수령 칭자오 꽃의나라의 갱",
    "captain": "Boosts ATK of Powerhouse characters by 2x and boosts the HP of Striker characters by 2x",
    "special": "Amplifies the effect of orbs for 2 턴, the exact multiplier changes depending on the current HP at the time the special was activated. ",
    "specialName": "Eight-Impact Fist! Blow of Resentment",
    "limit": [
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: Boosts ATK and HP of Powerhouse and Striker characters by 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "새로운 선장 효과 습득: Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Powerhouse characters by 2.25x and boosts the HP of Striker characters by 2x"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1026,
    "name": "블루기리",
    "captain": "Boosts ATK and RCV of Fighter characters by 1.5x",
    "specialName": "Shooting Moon",
    "special": "Changes Captain orb into Matching orb, and switches orbs between slots three times"
  },
  {
    "no": 1027,
    "name": "블루기리 각공도격투가 ",
    "captain": "Boosts ATK and RCV of Fighter characters by 2x",
    "specialName": "Shooting Moon",
    "special": "Changes Captain orb into Matching orb, and switches orbs between slots three times"
  },
  {
    "no": 1028,
    "name": "보디 펑크&켈리 펑크",
    "captain": "Boosts ATK of all characters by 2.5x after the 21st hit in the chain",
    "specialName": "Rah-Rah-Rah Rampage",
    "special": "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 턴."
  },
  {
    "no": 1029,
    "name": "펑크형제 모가로왕국의 킬러",
    "captain": "Boosts ATK of all characters by 2.5x after the 21st hit in the chain and by 3.5x after the 36th hit",
    "specialName": "Rah-Rah-Rah Rampage",
    "special": "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 턴."
  },
  {
    "no": 1030,
    "name": "하이루딘",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the 턴",
    "specialName": "Hero's Gungnir",
    "special": "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 턴."
  },
  {
    "no": 1031,
    "name": "하이루딘 해적용병",
    "captain": "Boosts ATK of Powerhouse characters by 2.75x if HP is above 99% at the start of the 턴",
    "specialName": "Hero's Gungnir",
    "special": "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 턴."
  },
  {
    "no": 1032,
    "name": "압둘라&제트",
    "captain": "Boosts ATK of Striker and Slasher characters by 1.5x and reduces cooldown of Slasher and Striker characters by 1 턴 at the start of the fight",
    "special": "Reduces Special Cooldown of Slasher and Striker specials by 1 턴. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
    "specialName": "Surprise Pincer Attack"
  },
  {
    "no": 1033,
    "name": "압둘라&제트 전현상금 사냥꾼",
    "captain": "Boosts ATK of Striker and Slasher characters by 2.25x and reduces cooldown of Slasher and Striker characters by 2 턴 at the start of the fight",
    "special": "Reduces Special Cooldown of Slasher and Striker specials by 1 턴. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
    "specialName": "Surprise Pincer Attack",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: Boosts ATK and HP of Slasher and Striker characters by 50"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "선원효과 추가 2: Restores his own special by 1 턴 when it is rewinded"
      },
      {
        "description": "잠재능력 습득 #: Critical Hit"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 40",
          "Level 3: 공격력 상승 : 60",
          "Level 4: 공격력 상승 : 80",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 2: If you hit a perfect with this character, there is a 25% chance to deal 5% of this character's attack in extra damage",
          "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
          "Level 4: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
          "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
        ]
      }
    ],
    "potentialNotes": "Enrage is activated when your crew took damage from your enemies in the previous 턴"
  },
  {
    "no": 1034,
    "name": "바르톨로메오",
    "captain": "일당 편성에서 타격형 캐릭터가 많을수록 타격형 캐릭터의 공격력이 상승하고, 자신이 공격하지 않은 턴에 받는 데미지가 30% 줄어든다.",
    "captainNotes": "공격력 상승은 타격형 캐릭터가 1명일때 1.25배, 2명일때 1.5배, 3명일때 1.75배, 4명일때 2배, 5명일때 2.5배, 6명일때 2.75배 상승한다.",
    "special": "적 1명에게 남은 체력이 적을수록 큰 무속성 데미지를 주고, 1턴 동안 공격을 받아도 쓰러지지 않는다. (쓰러지지 않는 효과는 여러 번 발동하지 않음)",
    "specialName": "오마주 신권 배리어배리어 총"
  },
  {
    "no": 1035,
    "name": "식인 바르톨로메오",
    "captain": "일당 편성에서 타격형 캐릭터가 많을수록 타격형 캐릭터의 공격력이 상승하고, 자신이 공격하지 않은 턴에 받는 데미지가 30% 줄어든다.",
    "captainNotes": "공격력 상승은 타격형 캐릭터가 1명일때 1.25배, 2명일때 1.5배, 3명일때 1.75배, 4명일때 2배, 5명일때 2.5배, 6명일때 2.75배 상승한다.",
    "special": "적 1명에게 남은 체력이 적을수록 큰 무속성 데미지를 주고, 1턴 동안 공격을 받아도 쓰러지지 않는다. (쓰러지지 않는 효과는 여러 번 발동하지 않음)",
    "specialName": "오마주 신권 배리어배리어 총",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1036,
    "name": "엔포리오 이완코프 비밀 화원의 여왕",
    "captain": "Boosts ATK of Free Spirit characters by 2x after scoring 3 Perfects in a row",
    "special": "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
    "specialName": "Kenpo: Kick Thrust Drop"
  },
  {
    "no": 1037,
    "name": "엔포리오 이완코프 기적을 일으키는 화원의 여왕",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x after scoring 3 Perfects in a row",
    "special": "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
    "specialName": "Kenpo: Kick Thrust Drop"
  },
  {
    "no": 1038,
    "name": "이나즈마 비밀 화원의 소녀",
    "captain": "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.2x",
    "special": "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
    "specialName": "Great Scissors"
  },
  {
    "no": 1039,
    "name": "이나즈마 변혁을 획책하는 소녀",
    "captain": "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.5x",
    "special": "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
    "specialName": "Great Scissors"
  },
  {
    "no": 1040,
    "name": "조즈 흰수염 해적단 3번대 대장",
    "captain": "Boosts ATK and HP of [STR] characters by 1.5x",
    "special": "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
    "specialName": "Ice Throw"
  },
  {
    "no": 1041,
    "name": "다이아몬드 조즈 흰수염 해적단 3번대 대장",
    "captain": "Boosts ATK and HP of [STR] characters by 2x",
    "special": "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
    "specialName": "Ice Throw"
  },
  {
    "no": 1042,
    "name": "킬러 키드 해적단",
    "captain": "Boosts ATK of Striker and Slasher characters by 2x, reduces crew's RCV to 0.",
    "special": "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
    "specialName": "Hitting Size"
  },
  {
    "no": 1043,
    "name": "\"살인무인\"킬러 키드 해적단",
    "captain": "Boosts ATK of Striker and Slasher characters by 2.75x if they have a matching Orb, by 2x otherwise, reduces crew's RCV to 0.",
    "special": "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
    "specialName": "Hitting Size"
  },
  {
    "no": 1044,
    "name": "트라팔가 로 최악의세대",
    "captain": "Boosts ATK of Slasher and Free Spirit characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row and by 4x after the 5th Perfect in a row.",
    "specialName": "Gamma Knife",
    "special": [
      {
        "description": "Makes Damage and Health Cutting Specials of Slasher and Free Spirit characters bypass all defensive Buffs, deals 20x character's ATK in fixed PSY damage to one enemy.",
        "cooldown": [
          18,
          13
        ]
      },
      {
        "description": "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 50x character's ATK in fixed PSY damage to one enemy.",
        "cooldown": [
          25,
          20
        ]
      }
    ]
  },
  {
    "no": 1045,
    "name": "트라팔가 로 왕의 부하 칠무해",
    "captain": "Boosts ATK of Slasher and Free Spirit characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row and by 4x after the 5th Perfect in a row.",
    "specialName": "Gamma Knife",
    "special": [
      {
        "description": "Makes Damage and Health Cutting Specials of Slasher and Free Spirit characters bypass all defensive Buffs, deals 20x character's ATK in fixed PSY damage to one enemy.",
        "cooldown": [
          18,
          13
        ]
      },
      {
        "description": "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 50x character's ATK in fixed PSY damage to one enemy.",
        "cooldown": [
          25,
          20
        ]
      }
    ]
  },
  {
    "no": 1046,
    "name": "사보 용의 손톱",
    "captain": "Boosts ATK of Free Spirit characters by 2.75x following a chain of Good > Great > Perfect hits",
    "specialName": "Dragon Claw Fist: Dragon's Breath",
    "special": "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 턴"
  },
  {
    "no": 1047,
    "name": "사보 혁명군 참모총장",
    "captain": "Boosts ATK of Free Spirit characters by 3.5x following a chain of Good > Great > Perfect hits",
    "specialName": "Dragon Claw Fist: Dragon's Breath",
    "special": "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 턴"
  },
  {
    "no": 1048,
    "name": "니코 올비아",
    "captain": "Boosts ATK and RCV of [PSY] characters by 1.2x",
    "special": "Reduces Paralysis duration by 3 턴 and Recovers 4x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Mother's Wish to Fight The World"
  },
  {
    "no": 1049,
    "name": "니코 올비아 오하라의 고고학자",
    "captain": "Boosts ATK and RCV of [PSY] characters by 1.5x, when HP is low the ATK multiplier becomes 2.25x",
    "special": "Reduces Paralysis duration by 3 턴 and Recovers 4x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Mother's Wish to Fight The World"
  },
  {
    "no": 1050,
    "name": "하그왈 D. 사우로",
    "captain": "Boosts ATK of [PSY] characters by 1.5x",
    "special": "Reduces Bind duration by 4 턴, and Reduces damage received by 50% for 2 턴",
    "specialName": "Dereshishishi Towards Hope"
  },
  {
    "no": 1051,
    "name": "하그왈 D. 사우로 해군본부 중장",
    "captain": "Boosts ATK of [PSY] characters by 2x",
    "special": "Reduces Bind duration by 4 턴, and Reduces damage received by 50% for 2 턴",
    "specialName": "Dereshishishi Towards Hope"
  },
  {
    "no": 1052,
    "name": "니코 로빈 오하라의 소녀",
    "captain": "Recovers 1,000 HP at the end of each 턴",
    "special": "Reduces Silence duration by 2 턴",
    "specialName": "Knowledge the World is Afraid of"
  },
  {
    "no": 1053,
    "name": "히나 우아한 명예 학생",
    "captain": "Boosts RCV of Cerebral characters by 1.5x",
    "special": "Reduces Paralysis and Despair duration by 3 턴, removes Blindness",
    "specialName": "Precocious Provocation"
  },
  {
    "no": 1054,
    "name": "히나 공손한 명예 학생",
    "captain": "Boosts RCV of Cerebral characters by 2x",
    "special": "Reduces Paralysis and Despair duration by 3 턴, removes Blindness",
    "specialName": "Precocious Provocation"
  },
  {
    "no": 1055,
    "name": "보아 선더소니아",
    "special": "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 턴 ",
    "specialName": "Snake Press"
  },
  {
    "no": 1056,
    "name": "보아 선더소니아 쿠자 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2x and their RCV by 1.25x",
    "special": "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 턴 ",
    "specialName": "Snake Press"
  },
  {
    "no": 1057,
    "name": "보아 마리골드",
    "special": "Strongly Poisons one enemy",
    "specialName": "Deadly Poisonous Corrosive Liquid"
  },
  {
    "no": 1058,
    "name": "보아 마리골드 쿠자 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2x and their HP by 1.25x",
    "special": "Strongly Poisons one enemy",
    "specialName": "Deadly Poisonous Corrosive Liquid"
  },
  {
    "no": 1059,
    "name": "마가렛 여전사",
    "captain": "Boosts ATK and RCV of Shooter characters by 1.2x",
    "special": "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Strong Bow of Rejection"
  },
  {
    "no": 1060,
    "name": "마가렛 쿠자의 전사",
    "captain": "Boosts ATK and RCV of Shooter characters by 1.5x",
    "special": "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Strong Bow of Rejection"
  },
  {
    "no": 1061,
    "name": "키쿄우",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "special": "Locks the chain multiplier at 2x for 2 턴",
    "specialName": "Instructions to the Warriors"
  },
  {
    "no": 1062,
    "name": "글로리오사",
    "captain": "Boosts ATK of Cerebral characters by 2x and Recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Recovers 13x character's RCV in HP",
    "specialName": "Timeless Art of Self-Defense"
  },
  {
    "no": 1063,
    "name": "파괴의 여사수 쿠자의 전사",
    "captain": "Boosts ATK and HP of Shooter characters by 1.2x",
    "special": "Boosts ATK of Shooter characters by 1.3x for 1 턴",
    "specialName": "Shooting Power Light"
  },
  {
    "no": 1064,
    "name": "모략의 여사수 쿠자의 전사",
    "captain": "Boosts ATK and HP of [INT] characters by 1.2x",
    "special": "Recovers 3x character's RCV in HP at the end of each 턴 for 5 턴",
    "specialName": "Auto Repair"
  },
  {
    "no": 1065,
    "name": "영리한 여검사 쿠자의 전사",
    "captain": "Boosts ATK of Slasher characters by 1.5x",
    "special": "Amplifies the effect of orbs by 1.25x for 1 턴",
    "specialName": "Slot Power Light"
  },
  {
    "no": 1066,
    "name": "명랑한 여검사 쿠자의 전사",
    "captain": "Boosts ATK and HP of [PSY] characters by 1.2x",
    "special": "Adds .1x to Chain multiplier for 1 턴",
    "specialName": "Chain Plus Light"
  },
  {
    "no": 1067,
    "name": "숙련 여격투 쿠자의 전사",
    "captain": "Boosts ATK of Fighter characters by 1.5x",
    "special": "Boosts own ATK by 1.5x for 1 턴",
    "specialName": "Attack Boost Light"
  },
  {
    "no": 1068,
    "name": "민첩 여격투 쿠자의 전사",
    "captain": "Boosts chain multiplier by 1.5x",
    "special": "Changes captain's orb into [QCK]",
    "specialName": "Captain Slot Change QCK"
  },
  {
    "no": 1069,
    "name": "슈라이야",
    "captain": "Boosts ATK of Driven characters by 1.5x",
    "special": "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
    "specialName": "Fighting Method of the Pirate Executioner"
  },
  {
    "no": 1070,
    "name": "슈라이야 해적 사형집행자",
    "captain": "Boosts ATK of Driven characters by 2.25x",
    "special": "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
    "specialName": "Fighting Method of the Pirate Executioner"
  },
  {
    "no": 1071,
    "name": "가스파데",
    "captain": "Boosts ATK of characters with cost 20 or less by 1.5x",
    "special": "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 턴.",
    "specialName": "Emerald Porcupine Robe"
  },
  {
    "no": 1072,
    "name": "가스파데 가스파데 해적단",
    "captain": "Boosts ATK of characters with cost 20 or less by 2x and boosts the HP of Powerhouse characters by 1.2x",
    "special": "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 턴.",
    "specialName": "Emerald Porcupine Robe"
  },
  {
    "no": 1073,
    "name": "리돌스",
    "captain": "Boosts ATK of Slasher characters by 1.5x",
    "special": "Deals 5x ATK in [QCK] damage to all enemies and randomizes all orbs",
    "specialName": "Drilling Hooks"
  },
  {
    "no": 1074,
    "name": "리키",
    "captain": "Boosts ATK of [INT] characters by 2x",
    "special": "Changes [QCK] and [PSY] orbs into [INT] orbs.",
    "specialName": "Tenacious Sword of Destruction"
  },
  {
    "no": 1075,
    "name": "리키 수수께끼의 검투사",
    "captain": "Boosts ATK and HP of [INT] characters by 2x",
    "special": "Changes [QCK] and [PSY] orbs into [INT] orbs.",
    "specialName": "Tenacious Sword of Destruction"
  },
  {
    "no": 1076,
    "name": "레오",
    "captain": "Boosts ATK of Striker and Free Spirit characters by 1.75x",
    "special": [
      {
        "description": "Delays all enemies for 1 턴. Locks all orbs for 1 턴. Cuts the current HP of all enemies by 10%",
        "cooldown": [
          16,
          12
        ]
      },
      {
        "description": "Delays all enemies for 1 턴. Locks all orbs for 1 턴. Cuts the current HP of all enemies by 20%",
        "cooldown": [
          20,
          16
        ]
      }
    ],
    "specialName": "Haute Couture: Patchwork"
  },
  {
    "no": 1077,
    "name": "레오 톤타타족 전사장",
    "captain": "Boosts ATK of Striker and Free Spirit characters by 2.25x and their RCV by 1.5x",
    "special": [
      {
        "description": "Delays all enemies for 1 턴. Locks all orbs for 1 턴. Cuts the current HP of all enemies by 10%",
        "cooldown": [
          16,
          12
        ]
      },
      {
        "description": "Delays all enemies for 1 턴. Locks all orbs for 1 턴. Cuts the current HP of all enemies by 20%",
        "cooldown": [
          20,
          16
        ]
      }
    ],
    "specialName": "Haute Couture: Patchwork",
    "limit": [
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "회복력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: Boosts ATK of Striker characters by 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "새로운 선장 효과 습득: Boosts ATK of Striker and Free Spirit characters by 2.45x and their RCV by 1.5x"
      },
      {
        "description": "선원효과 추가 2: Boosts this character's attack against DEX characters by 2x"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 5: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1078,
    "name": "맨셸리 왕녀",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴",
    "special": [
      {
        "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 턴",
        "cooldown": [
          14,
          8
        ]
      },
      {
        "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
        "cooldown": [
          19,
          13
        ]
      },
      {
        "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
        "cooldown": [
          24,
          18
        ]
      }
    ],
    "specialName": "Chiyupopo"
  },
  {
    "no": 1079,
    "name": "맨셸리 톤타타족 왕녀",
    "captain": "Recovers 4x character's RCV in HP at the end of each 턴",
    "special": [
      {
        "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 턴",
        "cooldown": [
          14,
          8
        ]
      },
      {
        "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
        "cooldown": [
          19,
          13
        ]
      },
      {
        "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down, and Blindness",
        "cooldown": [
          24,
          18
        ]
      }
    ],
    "specialName": "Chiyupopo",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1080,
    "name": "퀴로스",
    "captain": "Boosts ATK of characters with cost 20 or less by 2.5x",
    "special": "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 턴",
    "specialName": "Trueno Bastardo"
  },
  {
    "no": 1081,
    "name": "퀴로스 전 리쿠왕군 군대장",
    "captain": "Boosts ATK of characters with cost 30 or less by 2.5x",
    "special": "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 턴",
    "specialName": "Trueno Bastardo"
  },
  {
    "no": 1082,
    "name": "돈 사이",
    "captain": "Boosts ATK of Striker and Fighter characters by 1.2x",
    "special": "Deals 20x ATK in [STR] damage to all enemies. For 2 턴, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
    "specialName": "Drill Dragon: Drill Nail"
  },
  {
    "no": 1083,
    "name": "칭자오 패밀리의 돈 사이",
    "captain": "Boosts ATK of Striker and Fighter characters by 1.5x at the start of the chain, and by 3x after the 3rd Perfect in a row",
    "special": "Deals 20x ATK in [STR] damage to all enemies. For 2 턴, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
    "specialName": "Drill Dragon: Drill Nail",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: Restores his own special by 2 턴 when it is rewinded"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "공격력 상승 : 100"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "선원효과 추가 2: Makes [QCK] orbs \"beneficial\" for this unit"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: If you hit a perfect with this character, there is a 5% chance to deal 5% of this character's attack in extra damage",
          "Level 2: If you hit a perfect with this character, there is a 5% chance to deal 7% of this character's attack in extra damage",
          "Level 3: If you hit a perfect with this character, there is a 5% chance to deal 10% of this character's attack in extra damage",
          "Level 4: If you hit a perfect with this character, there is a 10% chance to deal 10% of this character's attack in extra damage",
          "Level 5: If you hit a perfect with this character, there is a 15% chance to deal 15% of this character's attack in extra damage"
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1084,
    "name": "후지토라",
    "captain": "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
    "special": "Cuts the current HP of each enemy by 20%. At the end of the 턴, cuts the current HP of each enemy by 20% for 3 턴",
    "specialName": "Gravito: Heavens Fall"
  },
  {
    "no": 1085,
    "name": "후지토라 해군 제독",
    "captain": "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
    "special": "Cuts the current HP of each enemy by 20%. At the end of the 턴, cuts the current HP of each enemy by 20% for 3 턴",
    "specialName": "Gravito: Heavens Fall",
    "limit": [
      {
        "description": "체력 상승 : 25"
      },
      {
        "description": "체력 상승 : 25"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "선원효과 추가 1: Cannot be Blown Away"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "잠재능력 습득 2: Critical Hit"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "선원효과 추가 2: Boosts ATK, HP and RCV of Powerhouse and Driven characters by 50"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "Reduce base Special Cooldown by 1"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "잠재능력 습득 3: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 40",
          "Level 3: 공격력 상승 : 60",
          "Level 4: 공격력 상승 : 80",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
          "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
          "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
          "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: Reduces Slot Bind duration by 3 턴 on this character",
          "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 3: Reduces Slot Bind duration by 7 턴 on this character",
          "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다.",
          "Level 5: Reduces Slot Bind completely on this character"
        ]
      }
    ]
  },
  {
    "no": 1086,
    "name": "므슈르",
    "captain": "Boosts ATK and RCV of Driven characters by 1.5x",
    "special": "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 턴",
    "specialName": "Lot Stiffen"
  },
  {
    "no": 1087,
    "name": "므슈르, 포자포자 열매",
    "captain": "Boosts ATK of Driven characters by 2x and their RCV by 1.5x",
    "special": "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 턴",
    "specialName": "Lot Stiffen"
  },
  {
    "no": 1088,
    "name": "사가",
    "captain": "Boosts ATK of Slasher characters by 2x",
    "special": "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴.",
    "specialName": "Seven Stars Sword of Darkness"
  },
  {
    "no": 1089,
    "name": "사가, 저주받은 요검",
    "captain": "Boosts ATK of Slasher characters by 2x and boosts HP of Driven characters by 1.75x",
    "special": "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴.",
    "specialName": "Seven Stars Sword of Darkness"
  },
  {
    "no": 1090,
    "name": "X 드레이크, 드레이크 해적단 선장",
    "captain": "Boosts ATK of all characters by 2x 전투 시작 시 체력이 30% 미만이면",
    "special": "Deals 25x ATK in [PSY] damage to one enemy. If HP < 30% then changes adjacent orbs into matching orbs",
    "specialName": "Double Edge of Revolt"
  },
  {
    "no": 1091,
    "name": "붉은깃발 X 드레이크, 드레이크 해적단 선장",
    "captain": "Boosts ATK of all characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
    "special": "Deals 25x ATK in [PSY] damage to one enemy. If HP < 30% then changes adjacent orbs into matching orbs",
    "specialName": "Double Edge of Revolt"
  },
  {
    "no": 1092,
    "name": "레베카, 파라솔 리듬",
    "captain": "Boosts RCV of all characters depending on the current Health.",
    "special": "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
    "specialName": "Present After the Rain"
  },
  {
    "no": 1093,
    "name": "레베카, 무지개 멜로디",
    "captain": "Boosts RCV of all characters depending on the current Health.",
    "special": "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
    "specialName": "Present After the Rain"
  },
  {
    "no": 1094,
    "name": "Dr. 인디고",
    "captain": "Boosts ATK of Cerebral characters by 2x.",
    "special": "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 턴.",
    "specialName": "Mass Juggling"
  },
  {
    "no": 1095,
    "name": "Dr. 인디고 금 사자 해적단",
    "captain": "Boosts ATK of Cerebral characters by 2x.",
    "special": "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 턴.",
    "specialName": "Mass Juggling"
  },
  {
    "no": 1096,
    "name": "스칼렛 대장",
    "captain": "Boosts ATK of Powerhouse characters by 3x after the 5th Perfect in a row.",
    "special": "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 턴.",
    "specialName": "Crash Drumming"
  },
  {
    "no": 1097,
    "name": "스칼렛 대장 금 사자 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 3.5x after the 5th Perfect in a row.",
    "special": "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 턴.",
    "specialName": "Crash Drumming"
  },
  {
    "no": 1098,
    "name": "뇌조 비리",
    "captain": "Boosts chain multiplier by 2x",
    "special": "Randomizes all orbs including [BLOCK] orbs and switches orbs between slots once.",
    "specialName": "Mutation-Induced Thunder"
  },
  {
    "no": 1099,
    "name": "코비, 빗속의 부사관",
    "captain": "Boosts ATK of Fighter characters by 2x",
    "special": "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 턴",
    "specialName": "\"To the End of the Clouds\""
  },
  {
    "no": 1100,
    "name": "코비, 이슬에 반짝이는 부사관",
    "captain": "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.2x",
    "special": "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 턴",
    "specialName": "\"To the End of the Clouds\""
  },
  {
    "no": 1101,
    "name": "검은 팔 제파",
    "captain": "PERFECT 외의 공격을 할때까지 모든 캐릭터의 공격력을 2.25배로 만들고, 턴이 경과 할때마다 체력이(10%씩) 감소된다.",
    "special": "일당의 남은 체력을 80% 감소시키며 적 1기에 감소한 값의 10배에 해당하는 무속성 데미지를 주고, STR, INT의 공격력을 1턴 동안 1.75배로 한다.",
    "specialName": "검은팔의 마지막 충격"
  },
  {
    "no": 1102,
    "name": "검은 팔 제파, 전 해군 대장",
    "captain": "PERFECT 외의 공격을 할때까지 모든 캐릭터의 공격력을 2.25배로 만들고, 턴이 경과 할때마다 체력이(10%씩) 감소된다.",
    "special": "일당의 남은 체력을 80% 감소시키며 적 1기에 감소한 값의 10배에 해당하는 무속성 데미지를 주고, STR, INT의 공격력을 1턴 동안 1.75배로 한다.",
    "specialName": "검은팔의 마지막 충격"
  },
  {
    "no": 1103,
    "name": "아인 네오해군",
    "captain": "박식 캐릭터의 공격력과 회복력이 1.5배가 된다.",
    "special": [
      {
        "description": "최대 체력의 12%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
        "cooldown": [
          21,
          11
        ]
      },
      {
        "description": "최대 체력의 24%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
        "cooldown": [
          24,
          14
        ]
      },
      {
        "description": "최대 체력의 36%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
        "cooldown": [
          27,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "뒤로 뒤로 열매"
  },
  {
    "no": 1104,
    "name": "아인 제파의 마지막 제자",
    "captain": "박식 캐릭터의 공격력과 회복력이 1.75배가 된다.",
    "special": [
      {
        "description": "최대 체력의 12%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
        "cooldown": [
          21,
          11
        ]
      },
      {
        "description": "최대 체력의 24%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
        "cooldown": [
          24,
          14
        ]
      },
      {
        "description": "최대 체력의 36%를 회복하고,[BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 교체한다.",
        "cooldown": [
          27,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "뒤로 뒤로 열매"
  },
  {
    "no": 1105,
    "name": "빈즈 네오해군",
    "captain": "타격, 자유 캐릭터의 공격력을 1.5배로 하고, 턴 종료시 캐릭터 공격력x2배의 추가 데미지를 입힌다.",
    "special": "적 전체의 공격을 1턴 지연시키고, 2턴 동안 체인 계수 +0.2를 추가한다. 2턴간 PERFECT 타이밍이 쉬워진다.",
    "specialName": "모사모사 댄스"
  },
  {
    "no": 1106,
    "name": "빈즈 제파의 마지막 제자",
    "captain": "타격, 자유 캐릭터의 공격력을 2배로 하고, 턴 종료시 캐릭터 공격력x2배의 추가 데미지를 입힌다.",
    "special": "적 전체의 공격을 1턴 지연시키고, 2턴 동안 체인 계수 +0.2를 추가한다. 2턴간 PERFECT 타이밍이 쉬워진다.",
    "specialName": "모사모사 댄스"
  },
  {
    "no": 1107,
    "name": "금사자 시키",
    "captain": "야심 캐릭터의 공격력과 체력이 1.5배가 된다.",
    "special": "적 전체에 캐릭터 공격력x30배 무속성 데미지를 주고, 야심 타입의 [BLOCK],[G],[BOMB] 슬롯을 각자 특성 슬롯으로 변환시켜준다. 1턴간 야심 캐릭터의 공격력이 1.75배가 된다.",
    "specialName": "사자 떨어트리기 궁궐의 회오리"
  },
  {
    "no": 1108,
    "name": "금사자 시키, 금사자 해적단",
    "captain": "야심 캐릭터의 공격력과 체력이 2배가 된다.",
    "special": "적 전체에 캐릭터 공격력x30배 무속성 데미지를 주고, 야심 타입의 [BLOCK],[G],[BOMB] 슬롯을 각자 특성 슬롯으로 변환시켜준다. 1턴간 야심 캐릭터의 공격력이 1.75배가 된다.",
    "specialName": "사자 떨어트리기 궁궐의 회오리"
  },
  {
    "no": 1109,
    "name": "나미, 어려진 항해사",
    "captain": "획득 베리가 1.5배가 된다.",
    "special": "PSY 캐릭터의 [BLOCK]슬롯을 PSY슬롯으로 변환",
    "specialName": "도둑고양이의 잠입 수사"
  },
  {
    "no": 1110,
    "name": "나미, 술집의 장난스런 아이돌",
    "captain": "획득 베리가 1.5배가 되고, PSY 캐릭터의 공격력과 회복력이 1.25배 증가한다.",
    "special": "PSY 캐릭터의 [BLOCK]슬롯을 PSY슬롯으로 변환",
    "specialName": "도둑고양이의 잠입 수사"
  },
  {
    "no": 1111,
    "name": "니코 로빈, 어려진 고고학자",
    "captain": "박식 캐릭터의 공격력과 회복력이 1.25배로 증가한다.",
    "special": "3턴 동안 슬롯의 영향이 1.25배증가하고 턴 종료시 캐릭터 회복력의 x8배 만큼 회복한다. ",
    "specialName": "작은 악마에 초대의 춤"
  },
  {
    "no": 1112,
    "name": "니코 로빈, 술집의 가련한 춤추는 소녀",
    "captain": "박식 캐릭터의 공격력과 회복력이 1.5배로 증가한다.",
    "special": "3턴 동안 슬롯의 영향이 1.25배증가하고 턴 종료시 캐릭터 회복력의 x8배 만큼 회복한다. ",
    "specialName": "작은 악마에 초대의 춤"
  },
  {
    "no": 1113,
    "name": "쵸파, 어려진 선의",
    "captain": "INT 캐릭터의 공격력이 2배가 된다.",
    "special": "1턴 동안 모든 캐릭터의 공격력이 1.2배가 된다.",
    "specialName": "작은 괴물의 분노 : \"전쟁이야!!!\""
  },
  {
    "no": 1114,
    "name": "몽키 D. 루피, 꿈을 좇는 모험가",
    "special": "일당의 남은 체력을 99% 감소시켜 적 전체에 공격력의 x25배의 고정 데미지를 주고, 1턴 동안 STR의 공격력을 2배 증가시킨다.",
    "specialName": "고무고무 거인의 도끼",
    "specialNotes": "#{fixed}",
    "captain": "STR 캐릭터의 공격력이 2배가 된다."
  },
  {
    "no": 1115,
    "name": "몽키 D. 루피, 신념에 사는 밀집모자 일당",
    "special": "일당의 남은 체력을 99% 감소시켜 적 전체에 공격력의 x25배의 고정 데미지를 주고, 1턴 동안 STR의 공격력을 2배 증가시킨다.",
    "specialName": "고무고무 거인의 도끼",
    "specialNotes": "#{fixed}",
    "captain": "STR 캐릭터의 공격력이 2.5배가 된다."
  },
  {
    "no": 1116,
    "name": "상디, 꿈을 좇는 모험가",
    "special": "적 전체에 파티의 체력이 적을수록 큰 INT 데미지를 준다.",
    "specialName": "디아블 잠브 : 분쇄",
    "captain": "체력이 가득 차 있을때 받는 데미지를 크게(80%) 감소한다.",
    "sailor": "자신의 저림 상태를 3턴 줄여준다."
  },
  {
    "no": 1117,
    "name": "상디, 신념에 사는 밀집모자 일당",
    "special": "적 전체에 파티의 체력이 적을수록 큰 INT 데미지를 준다.",
    "specialName": "디아블 잠브 : 분쇄",
    "captain": "체력이 가득 차 있을때 받는 데미지를 크게(80%) 감소한다.",
    "sailor": "자신의 저림 상태를 3턴 줄여준다."
  },
  {
    "no": 1118,
    "name": "나미, 꿈을 좇는 모험가",
    "special": "슬롯을 랜덤으로 교체한다, 1턴 동안 체력이 일정 이상(50%)일 때 공격을 받아도 쓰러지지 않는다.",
    "specialName": "1만 캐럿의 미소",
    "specialNotes": "#{zombie}",
    "captain": "타격 캐릭터의 공격력과 회복력을 1.5배 상승시킨다.",
    "sailor": "DEX 슬롯을 이로운 슬롯으로 만든다."
  },
  {
    "no": 1119,
    "name": "나미, 신념에 사는 밀집모자 일당",
    "special": "슬롯을 랜덤으로 교체한다, 1턴 동안 체력이 일정 이상(50%)일 때 공격을 받아도 쓰러지지 않는다.",
    "specialName": "1만 캐럿의 미소",
    "specialNotes": "#{zombie}",
    "captain": "타격 캐릭터의 공격력을 2배 상승시키고, 회복력을 1.5배 상승시킨다.",
    "sailor": "DEX 슬롯을 이로운 슬롯으로 만든다."
  },
  {
    "no": 1120,
    "name": "몽키 D. 루피, 끝나지 않는 꿈의 항적 밀집모자 일당",
    "special": "적 전체에게 무 속성의 랜덤 데미지를 주고, 자신의 슬롯을 STR으로 변환한다.",
    "specialName": "고무고무 JET 개틀링",
    "specialNotes": "랜덤 데미지 : 70,00 ~ 200,000",
    "captain": "Good > Great > Perfect 순으로 공격 이후 캐릭터의 공격력이 4배 상승한다."
  },
  {
    "no": 1121,
    "name": "몽키 D. 루피, 대해적시대의 맹세: \"해적왕\"",
    "special": "적 전체에게 무 속성의 랜덤 데미지를 주고, 자신의 슬롯을 STR으로 변환한다.",
    "specialName": "고무고무 JET 개틀링",
    "specialNotes": "랜덤 데미지 : 70,00 ~ 200,000",
    "captain": "Good > Great > Perfect 순으로 공격 이후 캐릭터의 공격력이 4배 상승한다."
  },
  {
    "no": 1122,
    "name": "캐번디시",
    "captain": "STR,DEX,QCK 캐릭터의 공격력을 2.5배, 자신의 공격력을 3배로 만든다.",
    "special": "적 전체에 무 속성x15배의 큰 데미지를 주고 일당에게 걸려있는 유리한 효과를 모두 없애며, 2턴 동안 자신에게만 여러 가지 유리한 효과가 발동된다.<br>*유리한 효과 : 자기 자신 특성 슬롯 + 자기 자신 슬롯 고정, 자신 공격력 강화 2.25배, 자신 슬롯 강화 1.4배",
    "specialName": "휘몰아치는 롬멜의 칼바람"
  },
  {
    "no": 1123,
    "name": "백마의 캐번디시",
    "captain": "STR,DEX,QCK 캐릭터의 공격력을 2.5배, 자신의 공격력을 4배로 만든다.",
    "special": "적 전체에 무 속성x15배의 큰 데미지를 주고 일당에게 걸려있는 유리한 효과를 모두 없애며, 2턴 동안 자신에게만 여러 가지 유리한 효과가 발동된다.<br>*유리한 효과 : 자기 자신 특성 슬롯 + 자기 자신 슬롯 고정, 자신 공격력 강화 2.25배, 자신 슬롯 강화 1.5배",
    "specialName": "휘몰아치는 롬멜의 칼바람"
  },
  {
    "no": 1124,
    "name": "슐레이만",
    "captain": "참격 캐릭터의 공격력을 3배로 상승시키고, 턴 경과마다 공격력이 x0.1배씩 감소한다.",
    "special": "적 전체에게 캐릭터 공격력의 x13배의 PST데미지를 주고, 자신과 선장의 슬롯을 자신의 속성으로 변환 한다.",
    "specialName": "게으른 단죄"
  },
  {
    "no": 1125,
    "name": "참수가 슐레이만",
    "captain": "참격 캐릭터의 공격력을 3.5배로 상승시키고, 턴 경과마다 공격력이 x0.1배씩 감소한다.",
    "special": "적 전체에게 캐릭터 공격력의 x13배의 PST데미지를 주고, 자신과 선장의 슬롯을 자신의 속성으로 변환 한다.",
    "specialName": "게으른 단죄"
  },
  {
    "no": 1126,
    "name": "올럼버스",
    "captain": "DEX 캐릭터의 공격력과 체력을 1.5배로 상승시킨다.",
    "special": "[BLOCK] 슬롯을 삭제하고, 적 전체에 삭제한 방해 슬롯의 수에 따라 커지는 무 속성 데미지를 준다. 동시에 [EMPTY]을 자신의 속성 슬롯으로 변환한다.",
    "specialNotes": "[BLOCK] 슬롯 갯수에 따른 무 속성 데미지량 : 0 슬롯 - 효과 없음; 1 슬롯 - 20배 상승; 2 슬롯 - 40배 상승; 3 슬롯 - 100배 상승; 4 슬롯 - 200배 상승; 5 슬롯 - 300배 상승; 6 슬롯 - 500배 상승.",
    "specialName": "제독 킬러 볼링"
  },
  {
    "no": 1127,
    "name": "살육지배자 올럼버스",
    "captain": "DEX 캐릭터의 공격력을 2.25배로 상승시키고, 체력을 1.5배로 상승시킨다.",
    "special": "[BLOCK] 슬롯을 삭제하고, 적 전체에 삭제한 방해 슬롯의 수에 따라 커지는 무 속성 데미지를 준다. 동시에 [EMPTY]을 자신의 속성 슬롯으로 변환한다.",
    "specialNotes": "[BLOCK] 슬롯 갯수에 따른 무 속성 데미지량 : 0 슬롯 - 효과 없음; 1 슬롯 - 20배 상승; 2 슬롯 - 40배 상승; 3 슬롯 - 100배 상승; 4 슬롯 - 200배 상승; 5 슬롯 - 300배 상승; 6 슬롯 - 500배 상승.",
    "specialName": "제독 킬러 볼링"
  },
  {
    "no": 1128,
    "name": "다가마",
    "captain": "전투 시작시 필살기를 1턴 단축하고, 모든 캐릭터의 공격력을 1.75배로 상승시킨다.",
    "special": "저림 · 선장 효과 무효 상태를 5 차례 회복하고 적 1 기의 HP를 10 % 감소시킨다.",
    "specialName": "군사의 참격"
  },
  {
    "no": 1129,
    "name": "다가마, 프로던스 왕국 군사",
    "captain": "전투 시작시 필살기를 2턴 단축하고, 모든 캐릭터의 공격력을 2배로 상승시킨다.",
    "special": "저림 · 선장 효과 무효 상태를 5 차례 회복하고 적 1 기의 HP를 10 % 감소시킨다.",
    "specialName": "군사의 참격"
  },
  {
    "no": 1130,
    "name": "엘리자벨로 2세",
    "captain": "격투와 강인 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
    "special": [
      {
        "description": "모든 적에게 캐릭터 공격력의 x7배의 무 속성 데미지를 준다.",
        "cooldown": [
          12,
          6
        ]
      },
      {
        "description": "모든 적에게 캐릭터 공격력의 x15배의 무 속성 데미지를 준다.",
        "cooldown": [
          20,
          14
        ]
      },
      {
        "description": "모든 적에게 캐릭터 공격력의 x25배의 무 속성 데미지를 준다.",
        "cooldown": [
          26,
          20
        ]
      }
    ],
    "specialName": "킹 펀치"
  },
  {
    "no": 1131,
    "name": "엘리자벨로 2세, 프로던스왕국 국왕",
    "captain": "격투와 강인 캐릭터의 공격력을 1.5배 상승시키고, 체력을 2배 상승시킨다.",
    "special": [
      {
        "description": "모든 적에게 캐릭터 공격력의 x7배의 무 속성 데미지를 준다.",
        "cooldown": [
          12,
          6
        ]
      },
      {
        "description": "모든 적에게 캐릭터 공격력의 x15배의 무 속성 데미지를 준다.",
        "cooldown": [
          20,
          14
        ]
      },
      {
        "description": "모든 적에게 캐릭터 공격력의 x25배의 무 속성 데미지를 준다.",
        "cooldown": [
          26,
          20
        ]
      }
    ],
    "specialName": "킹 펀치"
  },
  {
    "no": 1132,
    "name": "이데오",
    "captain": "격투 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
    "special": [
      {
        "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.5배 상승시킨다.",
        "cooldown": [
          18,
          12
        ]
      },
      {
        "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.75배 상승시킨다.",
        "cooldown": [
          23,
          17
        ]
      }
    ],
    "specialName": "파괴포"
  },
  {
    "no": 1133,
    "name": "이데오, 파괴포",
    "captain": "격투 캐릭터의 공격력을 2.25배 상승시키고, 체력을 1.5배 상승시킨다. 턴 종료후 캐릭터 회복력의 2배만큼 체력을 회복한다.",
    "special": [
      {
        "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.5배 상승시킨다.",
        "cooldown": [
          18,
          12
        ]
      },
      {
        "description": "모든 적에게 QCK 데미지를 주고, 1턴 동안 격투 캐릭터의 공격력을 1.75배 상승시킨다.",
        "cooldown": [
          23,
          17
        ]
      }
    ],
    "specialName": "파괴포"
  },
  {
    "no": 1134,
    "name": "타시기, 무모한 검도소녀",
    "captain": "타격과 참격 캐릭터의 공격력과 회복력을 1.2배 상승시킨다.",
    "special": "INT 캐릭터의 필살기를 1턴 감소시킨다.",
    "specialName": "양보할 수 없는 탐구"
  },
  {
    "no": 1135,
    "name": "타시기, 꿈꾸는 검도소녀",
    "captain": "타격과 참격 캐릭터의 공격력과 회복력을 1.5배 상승시킨다.",
    "special": "INT 캐릭터의 필살기를 1턴 감소시킨다.",
    "specialName": "양보할 수 없는 탐구"
  },
  {
    "no": 1136,
    "name": "후쿠로, 세계 정부 직하 암약 첩보기관 CP9",
    "captain": "QCK 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
    "special": "QCK 캐릭터의 TND,RCV슬롯을 QCK슬롯으로 변환한다.",
    "specialName": "야수- 오의: '올빼미' 야습"
  },
  {
    "no": 1137,
    "name": "재브라, 세계 정부 직하 암약 첩보기관 CP9",
    "captain": "강인 캐릭터의 공격력을 2.25배 상승시킨다.",
    "special": "적 1기에 캐릭터 공격력 x13배의 STR 데미지를 주고, 2턴 동안 자유 캐릭터의 슬롯 영향을 1.5배 증가시킨다.",
    "specialName": "치명적인 박격포 - 야습"
  },
  {
    "no": 1138,
    "name": "블루노, 세계 정부 직하 암약 첩보기관 CP9",
    "captain": "받는 데미지가 25% 감소한다.",
    "special": "받는 데미지가 60% 감소하고, 1턴 동안 강인, 격투 캐릭터의 공격력이 1.3배 상승한다.",
    "specialName": "철괴 : 고리야습",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1139,
    "name": "쿠마도리, 세계 정부 직하 암약 첩보기관 CP9",
    "captain": "타격 캐릭터의 공격력과 회복력을 1.5배 상승시킨다.",
    "special": "[BLOCK] 슬롯을 포함한 모든 슬롯을 STR DEX QCK PSY INT 슬롯으로 랜덤 변환한다.",
    "specialName": "생명귀환 : 사자지건"
  },
  {
    "no": 1140,
    "name": "겟코 모리아, 마의 삼각지대의 주인",
    "captain": "야심 캐릭터의 공격력을 2배 상승시킨다.",
    "special": "자신의 슬롯을 DEX으로 변환하고, 적 1기에 30만의 고정 데미지를 준다.",
    "specialName": "뿔도마뱀"
  },
  {
    "no": 1141,
    "name": "겟코 모리아, 마의 삼각지대의 지배자",
    "captain": "야심 캐릭터의 공격력을 2.25배 상승시키고, 턴 종료후 캐릭터 회복력 x3배의 체력을 회복한다.",
    "special": "자신의 슬롯을 DEX으로 변환하고, 적 1기에 30만의 고정 데미지를 준다.",
    "specialName": "뿔도마뱀"
  },
  {
    "no": 1142,
    "name": "폭시, 도너츠 레이스의 방해꾼",
    "captain": "자유 캐릭터의 공격력을 1.5배 상승시킨다.",
    "special": "랜덤의 적에게 STR 데미지를 15회 주고, 적 전체의 공격을 1턴 지연시킨다.",
    "specialName": "고릴라 펀치 : 골든 스트라이크"
  },
  {
    "no": 1143,
    "name": "폭시, 컴뱃 비겁자",
    "captain": "자유 캐릭터의 공격력을 2배 상승시키고, 전투 시작 시 자유 캐릭터의 필살기를 2턴 감소시킨다.",
    "special": "랜덤의 적에게 STR 데미지를 15회 주고, 적 전체의 공격을 1턴 지연시킨다.",
    "specialName": "고릴라 펀치 : 골든 스트라이크"
  },
  {
    "no": 1144,
    "name": "포르체, 꽃의 치어리더",
    "captain": "PSY 캐릭터의 공격력을 1.75배 상승시킨다.",
    "special": "적 전체에게 캐릭터 공격력 x5배의 PSY데미지를 주고, 캐릭터 회복력 x15배의 체력을 회복한다.",
    "specialName": "큐티 바톤: 꽃 수리검"
  },
  {
    "no": 1145,
    "name": "포르체, 큐티 바톤의 사용자",
    "captain": "PSY 캐릭터의 공격력을 1.75배 상승시키고, 회복력을 1.5배 상승시킨다.",
    "special": "적 전체에게 캐릭터 공격력 x5배의 PSY데미지를 주고, 캐릭터 회복력 x15배의 체력을 회복한다.",
    "specialName": "큐티 바톤: 꽃 수리검"
  },
  {
    "no": 1146,
    "name": "빨간 제복 간수",
    "specialName": "봉인 제거",
    "special": "봉인 상태 2턴 감소"
  },
  {
    "no": 1147,
    "name": "초록 제복 간수",
    "special": "캐릭터 회복력 x7배의 체력을 회복한다.",
    "specialName": "M적당한 회복"
  },
  {
    "no": 1148,
    "name": "파란 제복 간수",
    "specialName": "저림 회복 - Light",
    "special": "저림 상태 1턴 감소"
  },
  {
    "no": 1149,
    "name": "검은 옥졸",
    "special": "적 전체에게 캐릭터 공격력 x3배의 INT 데미지를 주고, 중독 시킨다.",
    "specialNotes": "#{poison}",
    "specialName": "독 공격"
  },
  {
    "no": 1150,
    "name": "노란 옥졸",
    "special": "선장의 슬롯을 자기 슬롯으로 변환시킨다.",
    "specialName": "선장 슬롯 변환"
  },
  {
    "no": 1151,
    "name": "미노타우르",
    "special": "Cuts the current HP of one enemy by 10%",
    "specialName": "Tough Jailer Beast: Spiked Club"
  },
  {
    "no": 1152,
    "name": "미노제브라",
    "special": "Deals 3 hits of 7x character's ATK in [INT] damage to random enemies.",
    "specialName": "Shy Jailer Beast: Spiked Mace"
  },
  {
    "no": 1153,
    "name": "스핑크스",
    "special": "Reduces the defense of all enemies by 100% and boosts ATK of Powerhouse characters by 1.25x for 1 턴",
    "specialName": "Demon Lord's Roar"
  },
  {
    "no": 1154,
    "name": "살데스 옥졸장",
    "captain": "Boosts ATK of Powerhouse characters by 2x and their HP by 1.3x",
    "special": "Reduces crew's current HP by 30%. Boosts ATK of Powerhouse characters by 1.5x",
    "specialName": "Leader of the Jailers"
  },
  {
    "no": 1155,
    "name": "군대 울프",
    "special": "Deals 7x character's ATK in QCK damage to all enemies",
    "specialName": "Monsterous Appetite"
  },
  {
    "no": 1156,
    "name": "한니발 부서장",
    "captain": "Boosts ATK of Driven characters by 1.2x if HP is above 50% at the start of the 턴",
    "special": "Removes Poison. Protects from defeat as long as HP is above 50% for 1 턴",
    "specialName": "Abyss Road"
  },
  {
    "no": 1157,
    "name": "한니발 부서장, 해저 감옥 임펠다운",
    "captain": "Boosts ATK of Driven and Striker characters by 1.75x and protects from defeat as long as HP is above 50% at the start of the 턴",
    "special": "Removes Poison. Protects from defeat as long as HP is above 50% for 1 턴",
    "specialName": "Abyss Road"
  },
  {
    "no": 1158,
    "name": "마젤란 서장",
    "captain": "Boosts ATK of Shooter, Striker, and Powerhouse characters by 1.75x",
    "special": "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy, and Poisons all other enemies.",
    "specialNotes": "Strong Poison deals 5x character's ATK in fixed damage at the end of each 턴. Regular Poison deals .5x character's ATK in fixed damage at the end of each 턴.",
    "specialName": "Poison Puffer Fish"
  },
  {
    "no": 1159,
    "name": "마젤란 서장, 해저 감옥 임펠다운",
    "captain": "Boosts ATK of Shooter, Striker, and Powerhouse characters by 2.25x",
    "special": "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy, and Poisons all other enemies.",
    "specialNotes": "Strong Poison deals 5x character's ATK in fixed damage at the end of each 턴. Regular Poison deals .5x character's ATK in fixed damage at the end of each 턴.",
    "specialName": "Poison Puffer Fish"
  },
  {
    "no": 1160,
    "name": "코알라, 해변의 천사",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.5x",
    "special": "Reduces Bind, Despair, and Silence duration by 3 턴, and recovers 2,000 HP",
    "specialName": "Open Sun"
  },
  {
    "no": 1161,
    "name": "코알라, 낙원의 여신",
    "captain": "Boosts ATK of Free Spirit characters by 2x and their RCV by 1.5x",
    "special": "Reduces Bind, Despair, and Silence duration by 3 턴, and recovers 2,000 HP",
    "specialName": "Open Sun"
  },
  {
    "no": 1162,
    "name": "길드 테조로",
    "captain": "Boosts ATK of [PSY] characters by 1.75x and boosts amount of Beli received by 1.5x",
    "special": "Deals large [PSY] damage to all enemies, and if HP is above 50%, changes all orbs to [PSY] orbs",
    "specialName": "Gold-Gold Fruit"
  },
  {
    "no": 1163,
    "name": "길드 테조로, 황금선의 카지노 왕",
    "captain": "Boosts ATK of PSY characters by 1.75x. Also boosts ATK of Driven and Cerebral characters by 1.5x. Boosts amount of Beli received by 2x",
    "special": "Deals large [PSY] damage to all enemies, and if HP is above 50%, changes all orbs to [PSY] orbs",
    "specialName": "Gold-Gold Fruit"
  },
  {
    "no": 1164,
    "name": "카리나",
    "captain": "Boosts RCV of all characters by 1.2x",
    "special": "Boosts RCV by 1.5x for 1 턴 and amplifies the effects of orbs by 1.5x for 1 턴",
    "specialName": "Sexy Diva"
  },
  {
    "no": 1165,
    "name": "카리나, 황금선의 디바",
    "captain": "Boosts RCV of all characters by 1.5x",
    "special": "Boosts RCV by 1.5x for 1 턴 and amplifies the effects of orbs by 1.5x for 1 턴",
    "specialName": "Sexy Diva"
  },
  {
    "no": 1166,
    "name": "바카라",
    "captain": "Gives chance of duplicating a drop upon completion of the island.",
    "special": "Boosts chance of matching orbs and reduces the ATK of enemies for 1 턴",
    "specialName": "Lucky-Lucky Fruit"
  },
  {
    "no": 1167,
    "name": "바카라, 황금선의 지배인",
    "captain": "Boosts ATK of all characters by 1.2x. Gives chance of duplicating a drop upon completion of the island.",
    "special": "Boosts chance of matching orbs and reduces the ATK of enemies for 1 턴",
    "specialName": "Lucky-Lucky Fruit"
  },
  {
    "no": 1168,
    "name": "다이스",
    "captain": "Boosts ATK of [STR] characters by 2x 전투 시작 시 체력이 30% 미만이면",
    "special": "Boosts ATK of [STR] characters by a variable factor for 1 턴",
    "specialName": "Trump Card Dealer"
  },
  {
    "no": 1169,
    "name": "다이스, 황금선의 딜러",
    "captain": "Boosts ATK of [STR] characters proportionally to the crew's current HP",
    "special": "Boosts ATK of [STR] characters by a variable factor for 1 턴",
    "specialName": "Trump Card Dealer"
  },
  {
    "no": 1170,
    "name": "Mr. 타나카",
    "captain": "Boosts ATK of [QCK] characters by 1.5x",
    "special": "Reduces Bind duration by 3 턴 and swaps Badly Matching, [BLOCK], and [BOMB] orbs to [EMPTY]",
    "specialName": "Escape-Escape Fruit"
  },
  {
    "no": 1171,
    "name": "Mr. 타나카, 황금선의 경비담당",
    "captain": "Boosts ATK of [QCK] characters by 2x",
    "special": "Reduces Bind duration by 3 턴 and swaps Badly Matching, [BLOCK], and [BOMB] orbs to [EMPTY]",
    "specialName": "Escape-Escape Fruit"
  },
  {
    "no": 1172,
    "name": "브룩, 꿈을 좇는 모험가",
    "special": "Deals random PSY damage to all enemies, randomizes all orbs",
    "specialName": "Three-Verse Humming: Arrow-Notch Slash",
    "captain": "Boosts ATK of PSY characters by 2x",
    "sailor": "Boosts base base RCV of PSY characters by 15"
  },
  {
    "no": 1173,
    "name": "브룩, 신념에 사는 밀집모자 일당",
    "special": "Deals random PSY damage to all enemies, randomizes all orbs",
    "specialName": "Three-Verse Humming: Arrow-Notch Slash",
    "captain": "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
    "sailor": "Boosts base RCV of PSY characters by 15"
  },
  {
    "no": 1174,
    "name": "조로, 꿈을 좇는 모험가",
    "special": "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
    "specialName": "Ashura Ugui",
    "captain": "Boosts ATK of DEX characters by 2.75x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Boosts base ATK of Slasher characters by 20"
  },
  {
    "no": 1175,
    "name": "조로, 신념에 사는 밀집모자 일당",
    "special": "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
    "specialName": "Ashura Ugui",
    "captain": "Boosts ATK of DEX characters by 3x 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Boosts base ATK of Slasher characters by 20"
  },
  {
    "no": 1176,
    "name": "쵸파, 꿈을 좇는 모험가",
    "special": "Removes Poison, recovers 15x character's RCV in HP",
    "specialName": "Devoted Healing - \"I'm Glad You are Safe\"",
    "captain": "Boosts ATK and RCV of DEX characters by 1.5x",
    "sailor": "When HP is below 30% at the start of the 턴, boosts own RCV by 50"
  },
  {
    "no": 1177,
    "name": "쵸파, 신념에 사는 밀집모자 일당",
    "special": "Removes Poison, recovers 15x character's RCV in HP",
    "specialName": "Devoted Healing - \"I'm Glad You are Safe\"",
    "captain": "Boosts ATK and RCV of DEX characters by 2x",
    "sailor": "When HP is below 30% at the start of the 턴, boosts own RCV by 50"
  },
  {
    "no": 1178,
    "name": "오즈",
    "captain": "Boosts ATK of [STR] characters by 2x if HP is above 99% at the start of the 턴. Reduces damage received by 50%",
    "special": "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
    "specialName": "Not Rubber Gum-Gum Jet Gatling"
  },
  {
    "no": 1179,
    "name": "마인 오즈",
    "captain": "Boosts ATK of [STR] characters by 2.75x if HP is above 99% at the start of the 턴. Reduces damage received by 50%",
    "special": "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
    "specialName": "Not Rubber Gum-Gum Jet Gatling"
  },
  {
    "no": 1180,
    "name": "무지개 갑옷 게"
  },
  {
    "no": 1181,
    "name": "블렌하임",
    "captain": "Boosts ATK of [DEX] characters by 2.5x",
    "special": "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 턴",
    "specialName": "Anger of the Ki Sword",
    "sailor": "Makes [STR] orbs \"beneficial\" for this unit"
  },
  {
    "no": 1182,
    "name": "커틀러스의 블렌하임",
    "captain": "Boosts ATK of [DEX] characters by 2.5x",
    "special": "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 턴",
    "specialName": "Anger of the Ki Sword",
    "sailor": "Makes [STR] orbs \"beneficial\" for this unit"
  },
  {
    "no": 1183,
    "name": "킹듀",
    "captain": "Boosts ATK of [PSY] characters by 2.5x",
    "special": "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
    "specialName": "Brass Knuckle Destruction",
    "sailor": "If HP is above 99% at the start of the 턴, boosts ATK of [PSY] characters by 75"
  },
  {
    "no": 1184,
    "name": "쌍권건틀렛의 킹듀",
    "captain": "Boosts ATK of [PSY] characters by 2.5x",
    "special": "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
    "specialName": "Brass Knuckle Destruction",
    "sailor": "If HP is above 99% at the start of the 턴, boosts ATK of [PSY] characters by 75"
  },
  {
    "no": 1185,
    "name": "하루타",
    "captain": "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
    "special": [
      {
        "description": "Deals 4x character's ATK in [INT] damage to all enemies. Changes own orb into [INT].",
        "cooldown": [
          8,
          3
        ]
      },
      {
        "description": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT]. Reduces Special Cooldown of Slasher and Cerebral characters by 1 턴",
        "cooldown": [
          17,
          12
        ]
      }
    ],
    "specialName": "Extreme Speed - One Sword Style, Ten Slashes",
    "sailor": "Restores his own special by 1 턴 when it is rewinded"
  },
  {
    "no": 1186,
    "name": "질풍의 소검사 하루타",
    "captain": "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
    "special": [
      {
        "description": "Deals 4x character's ATK in [INT] damage to all enemies. Changes own orb into [INT].",
        "cooldown": [
          8,
          3
        ]
      },
      {
        "description": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT]. Reduces Special Cooldown of Slasher and Cerebral characters by 1 턴",
        "cooldown": [
          17,
          12
        ]
      }
    ],
    "specialName": "Extreme Speed - One Sword Style, Ten Slashes",
    "sailor": "Restores his own special by 1 턴 when it is rewinded"
  },
  {
    "no": 1187,
    "name": "아트모스",
    "captain": "Boosts ATK of [STR] characters by 2.5x",
    "special": "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 턴",
    "specialName": "Advancing Continuous Sword Attack",
    "sailor": "Boosts base ATK, HP, and RCV of all characters by 20"
  },
  {
    "no": 1188,
    "name": "물소 아트모스",
    "captain": "Boosts ATK of [STR] characters by 2.5x",
    "special": "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 턴",
    "specialName": "Advancing Continuous Sword Attack",
    "sailor": "Boosts base ATK, HP, and RCV of all characters by 20"
  },
  {
    "no": 1189,
    "name": "스피드 질",
    "captain": "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
    "special": "Reduces enemy Barrier duration by 1 턴",
    "specialName": "Break Bullet",
    "sailor": "Boosts base ATK of [QCK] characters by 40"
  },
  {
    "no": 1190,
    "name": "실드 랜스 스피드 질",
    "captain": "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
    "special": "Reduces enemy Barrier duration by 1 턴",
    "specialName": "Break Bullet",
    "sailor": "Boosts base ATK of [QCK] characters by 40",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1191,
    "name": "아오키지, 해군 본부 최고 전력",
    "captain": "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
    "special": "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 턴",
    "specialName": "Ice Age"
  },
  {
    "no": 1192,
    "name": "쿠잔",
    "captain": "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
    "special": "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 턴",
    "specialName": "Ice Age"
  },
  {
    "no": 1193,
    "name": "보아 행콕, 물가에 멈춰 선 여제",
    "captain": "Boosts ATK of Free Spirit characters by 2x",
    "special": "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 턴",
    "specialName": "Sweet Style Petrification"
  },
  {
    "no": 1194,
    "name": "보아 행콕, 사랑에 빠진 소녀",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x",
    "special": "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 턴",
    "specialName": "Sweet Style Petrification"
  },
  {
    "no": 1195,
    "name": "간 폴, 선대 \"신\"",
    "captain": "Boosts ATK of Striker characters by 1.75x. Recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 턴",
    "specialName": "Split Air Hole"
  },
  {
    "no": 1196,
    "name": "간 폴, 스카이피아의 신",
    "captain": "Boosts ATK of Striker characters by 2x. Recovers 5x character's RCV in HP at the end of each 턴",
    "special": "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 턴",
    "specialName": "Split Air Hole",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1197,
    "name": "스카이브리더 오움r",
    "captain": "Boosts ATK of Cerebral and Powerhouse characters by 2.5x if they have a matching orb, by 1x otherwise, reduces crew's RCV to 0",
    "special": "For Cerebral and Powerhouse characters, changes all orbs including [BLOCK] orbs to Badly Matching. Deals [INT] damage to all enemies",
    "specialName": "Investigator of Sorrow"
  },
  {
    "no": 1198,
    "name": "쥬얼리 보니, 빛나는 사파이어",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.5x",
    "special": "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
    "specialName": "Appetite Or Sex Appeal - Has it Switched Yet!?"
  },
  {
    "no": 1199,
    "name": "쥬얼리 보니, 펄 화이트의 반짝임",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.5x",
    "special": "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
    "specialName": "Appetite Or Sex Appeal - Has it Switched Yet!?"
  },
  {
    "no": 1200,
    "name": "바이올렛, 도발의 바캉스",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.5x",
    "special": "Reduces Silence duration by 2 턴. If your HP is below 30%, changes top row into Matching Orbs",
    "specialName": "Passionate Look, 'I'm a Bad Guy...'",
    "specialNotes": "#{silence}",
    "sailor": "Reduces Silence duration against this unit by 2 턴",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1201,
    "name": "바이올렛, 홍조의 바캉스",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.5x",
    "special": "Reduces Silence duration by 2 턴. If your HP is below 30%, changes top row into Matching Orbs",
    "specialName": "Passionate Look, 'I'm a Bad Guy...'",
    "specialNotes": "#{silence}",
    "sailor": "Reduces Silence duration against this unit by 2 턴",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1202,
    "name": "요키",
    "captain": "Boosts ATK of Free Spirit characters by 1.5x",
    "specialName": "Session of Pirates",
    "special": "Changes [PSY] orbs on Free Spirit characters into matching orbs"
  },
  {
    "no": 1203,
    "name": "캘리코 요키",
    "captain": "Boosts ATK of Free Spirit characters by 2.25x",
    "specialName": "Session of Pirates",
    "special": "Changes [PSY] orbs on Free Spirit characters into matching orbs"
  },
  {
    "no": 1204,
    "name": "브룩, 룸바 해적단",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.2x",
    "specialName": "Awakening Tune Power",
    "special": "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
  },
  {
    "no": 1205,
    "name": "브룩, \"음악가 검사\" 룸바해적단",
    "captain": "Boosts ATK and RCV of Free Spirit characters by 1.5x",
    "specialName": "Awakening Tune Power",
    "special": "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
  },
  {
    "no": 1206,
    "name": "라분, 룸바 해적단",
    "captain": "Boosts HP by 1.3x",
    "specialName": "Chorus echoing in the sea",
    "special": "Protects from defeat as long as HP is above 50%",
    "specialNotes": "#{zombie}"
  },
  {
    "no": 1207,
    "name": "니코 로빈, 꿈을 좇는 모험가",
    "special": "Boosts chances of getting [INT] orbs for 3 턴",
    "specialName": "Ochenta Fleur - Cuatro Manus Shock",
    "captain": "Boosts ATK and RCV of INT characters by 1.5x",
    "sailor": "Reduces Blindness duration by 3 턴"
  },
  {
    "no": 1208,
    "name": "니코 로빈, 신념에 사는 밀집모자 일당",
    "special": "Boosts chances of getting [INT] orbs for 3 턴",
    "specialName": "Ochenta Fleur - Cuatro Manus Shock",
    "captain": "Boosts ATK and RCV of INT characters by 2x",
    "sailor": "Reduces Blindness duration by 3 턴"
  },
  {
    "no": 1209,
    "name": "우솝, 꿈을 좇는 모험가",
    "special": "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
    "specialName": "Heavenly Dragon Star",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "sailor": "Boosts base RCV of Shooter characters by 10"
  },
  {
    "no": 1210,
    "name": "우솝, 신념에 사는 밀집모자 일당",
    "special": "Delays all enemies for 3 턴, cuts the current HP of each enemy by 10%",
    "specialName": "Heavenly Dragon Star",
    "captain": "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
    "sailor": "Boosts base RCV of Shooter characters by 10",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 120"
      },
      {
        "description": "선원효과 추가 1: 사격 캐릭터의 공격력을 50 상승시킨다."
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 1211,
    "name": "프랑키, 꿈을 좇는 모험가",
    "special": "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
    "specialNotes": "#{orb : 1.5x}",
    "specialName": "Roar! Zarley Davison",
    "captain": "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
    "sailor": "Boosts base ATK of Shooter characters by 20"
  },
  {
    "no": 1212,
    "name": "프랑키, 신념에 사는 밀집모자 일당",
    "special": "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 턴",
    "specialNotes": "#{orb : 1.5x}",
    "specialName": "Roar! Zarley Davison",
    "captain": "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each 턴",
    "sailor": "Boosts base ATK of Shooter characters by 20"
  },
  {
    "no": 1213,
    "name": "베이비5, 돌핀 플로트",
    "captain": "Boosts ATK of Slasher characters by 1.5x, the HP of Striker characters by 1.2x, and the RCV of Shooter characters by 1.2x",
    "specialName": "Exciting Transfiguration",
    "special": "Recovers 10x character's RCV in HP. For 4 턴, makes [BOMB] orbs \"beneficial\"",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
  },
  {
    "no": 1214,
    "name": "베이비5, 돌핀 라이더",
    "captain": "Boosts ATK of Slasher characters by 2x, the HP of Striker characters by 1.25x, and the RCV of Shooter characters by 1.25x",
    "specialName": "Exciting Transfiguration",
    "special": "Recovers 10x character's RCV in HP. For 4 턴, makes [BOMB] orbs \"beneficial\"",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
  },
  {
    "no": 1215,
    "name": "가이람, 월드 해적단",
    "captain": "Boosts ATK by 2.5x following a chain of [QCK] > [PSY] > [DEX] attacks no lower than Good",
    "special": "Deals 5 hits of 2,000 fixed damage to random enemies and reduces any damage received above 5,000 HP by 80% for 1 턴",
    "specialNotes": "#{randomHits : 5}",
    "specialName": "Totem Cube"
  },
  {
    "no": 1216,
    "name": "세바스찬, 월드 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2x and reduces damage received based on current HP by up to 20%",
    "captainNotes": "The lower the HP, the larger the damage reduction. At 50% HP you take 10% reduced damage",
    "special": "Reduces damage received by 50% for 1 턴, and changes own orb into [QCK]",
    "specialName": "Camouflage Air"
  },
  {
    "no": 1217,
    "name": "나이팅, 월드 해적단",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.5x",
    "special": "Reduces Paralysis and Bind duration by 2 턴. Deal 10x her ATK in [PSY] damage to one enemy",
    "specialName": "Catepillar Soul Shot"
  },
  {
    "no": 1218,
    "name": "보아 행콕, 아마존 릴리 여제",
    "captain": "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
    "special": "Locks all orbs for 1 턴. If HP is below 30%, changes own orb and the captain's orb into matching. ",
    "specialName": "Everybody Confusing Fragrance"
  },
  {
    "no": 1219,
    "name": "반디 월드",
    "captain": "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 16 times to a maximum of 3x.",
    "captainNotes": "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
    "special": [
      {
        "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 턴",
        "cooldown": [
          22,
          6
        ]
      },
      {
        "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
        "cooldown": [
          28,
          12
        ]
      },
      {
        "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 턴",
        "cooldown": [
          34,
          18
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "More More, 10 Times \"Iron Hammer\""
  },
  {
    "no": 1220,
    "name": "반디 월드, 월드 해적단 선장",
    "captain": "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 10 times to a maximum of 3.25x.",
    "captainNotes": "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
    "special": [
      {
        "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 턴",
        "cooldown": [
          22,
          6
        ]
      },
      {
        "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
        "cooldown": [
          28,
          12
        ]
      },
      {
        "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 턴",
        "cooldown": [
          34,
          18
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "More More, 10 Times \"Iron Hammer\"",
    "limit": [
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "선원효과 추가 1: Boosts own ATK by 100 if this character is the last in the chain to attack"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
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
      }
    ],
    "potentialNotes": "Enrage is activated when your crew took damage from your enemies in the previous 턴"
  },
  {
    "no": 1221,
    "name": "오즈 Jr.",
    "captain": "Boosts ATK of Slasher characters by 1.75x and the HP of Powerhouse characters by 1.2x",
    "special": "Deals 25x character's ATK in [STR] damage to one enemy. For 1 턴, makes [STR] orb \"beneficial\" for all characters",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
    "specialName": "Blood of the Devil Warrior"
  },
  {
    "no": 1222,
    "name": "오즈 Jr. 흰수염 해적단 산하",
    "captain": "Boosts ATK of Slasher characters by 2x and the HP of Powerhouse characters by 1.75x",
    "special": "Deals 25x character's ATK in [STR] damage to one enemy. For 1 턴, makes [STR] orb \"beneficial\" for all characters",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
    "specialName": "Blood of the Devil Warrior"
  },
  {
    "no": 1223,
    "name": "바스티유",
    "captain": "Boosts ATK of [INT] characters by 2x",
    "special": "Deals 25x character's ATK in [INT] damage to all enemies",
    "specialName": "Shark Knife - Flash"
  },
  {
    "no": 1224,
    "name": "야마카지",
    "captain": "Boosts ATK of Slasher characters by 2x",
    "special": "Reduces damage received by 60% for 1 턴",
    "specialName": "Appreciation For The Great Men"
  },
  {
    "no": 1225,
    "name": "히나, 검은 감옥 부대",
    "captain": "Boosts ATK and RCV of [INT] characters by 1.5x",
    "special": "Delays all enemies for 1 턴, and locks own orb for 1 턴",
    "specialName": "Binding Iron Tablet"
  },
  {
    "no": 1226,
    "name": "스모커, 해군 본부 준장",
    "captain": "Boosts ATK of Driven characters by 2x",
    "special": "Cuts the current HP of one enemy by 10% and changes own orb into [PSY]",
    "specialName": "Seastone Truncheon"
  },
  {
    "no": 1227,
    "name": "쥬라큘 미호크, 매의 눈",
    "captain": "Reduces cooldown of Slasher specials by 2 턴 at the start of the fight. Boosts ATK of Slasher characters by 2.25x",
    "special": "Deals 100,000 fixed damage to one enemy, and boosts own ATK by 1.75x for 1 턴 ",
    "specialName": "Black Blade - Slashing Burial Drop"
  },
  {
    "no": 1228,
    "name": "키자루, 해군 본부 대장",
    "captain": "Boosts ATK of Shooter characters by 2.5x",
    "special": "For Shooter characters, changes [BLOCK] orbs into Matching, and deals large [DEX] damage to all enemies",
    "specialName": "The Cave of the Sun Goddess"
  },
  {
    "no": 1229,
    "name": "센토마루, 해군 본부 장교",
    "captain": "Boosts ATK of Powerhouse characters by 2x, and his OWN ATK by 2x.",
    "special": [
      {
        "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
        "cooldown": [
          11,
          4
        ]
      },
      {
        "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
        "cooldown": [
          15,
          8
        ]
      },
      {
        "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 턴",
        "cooldown": [
          22,
          15
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "sailor": "Cannot be Blown Away (Such as Raid Boss Kuma)",
    "specialName": "Leg-Locked Heave-Ho"
  },
  {
    "no": 1230,
    "name": "도끼의 센토마루, 해군 본부 장교",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x, but boost his OWN ATK by 2.75x. Reduces damage received by 10%",
    "special": [
      {
        "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
        "cooldown": [
          11,
          4
        ]
      },
      {
        "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 턴",
        "cooldown": [
          15,
          8
        ]
      },
      {
        "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 턴",
        "cooldown": [
          22,
          15
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "sailor": "Cannot be Blown Away (Such as Raid Boss Kuma)",
    "specialName": "Leg-Locked Heave-Ho"
  },
  {
    "no": 1231,
    "name": "스모커, 해군 GL 제 5지부",
    "captain": "Boosts ATK of Striker and Driven characters by 1.75x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.25x",
    "captainNotes": "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.1875x",
    "special": "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 턴",
    "specialNotes": "This is the same type of ability as raid boss Shiki's swap.",
    "specialName": "Armed - White Launcher",
    "sailor": "Boosts base ATK of Striker characters by 50"
  },
  {
    "no": 1232,
    "name": "스모커, 해군 GL 제 5지부 [G-5] 중장",
    "captain": "Boosts ATK of Striker and Driven characters by 2.25x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.3x",
    "captainNotes": "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.925x",
    "special": "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 턴",
    "specialNotes": "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
    "specialName": "Armed - White Launcher",
    "sailor": "Boosts base ATK of Striker characters by 50"
  },
  {
    "no": 1233,
    "name": "타시기, 해군 GL 제 5지부",
    "captain": "Boosts ATK of Slasher and Cerebral characters by 1.5x, and their RCV by 1.2x",
    "captainNotes": "Attack boost stacks, so a Slasher Cerebral unit has 2.25x ATK",
    "special": "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 턴",
    "specialNotes": "#{colorAffinity : 1.5}",
    "specialName": "Cutting Drizzle",
    "sailor": "Boosts base RCV of Slasher characters by 30"
  },
  {
    "no": 1234,
    "name": "타시기, 해군 GL 제 5지부 [G-5] 대령 ",
    "captain": "Boosts ATK of Slasher and Cerebral characters by 1.6x, and their RCV by 1.3x",
    "captainNotes": "Attack boost stacks, so a Slasher Cerebral unit has 2.56x ATK",
    "special": "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 턴",
    "specialNotes": "#{colorAffinity : 1.5}",
    "specialName": "Cutting Drizzle",
    "sailor": "Boosts base RCV of Slasher characters by 30"
  },
  {
    "no": 1235,
    "name": "메이너드, 해군 본부 중장",
    "captain": "Boosts ATK of [PSY] characters by 1.75x, deals 3x character's ATK to all enemies at the end of each 턴",
    "special": "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 턴",
    "specialNotes": "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
    "specialName": "Sword of Silence",
    "sailor": "Reduces Blindness duration for 3 턴"
  },
  {
    "no": 1236,
    "name": "추격의 메이너드, 해군 본부 중장",
    "captain": "Boosts ATK of [PSY] characters by 2x, deals 5x character's ATK to all enemies at the end of each 턴",
    "special": "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 턴",
    "specialNotes": "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
    "specialName": "Sword of Silence",
    "sailor": "Reduces Blindness duration for 3 턴"
  },
  {
    "no": 1237,
    "name": "바스티유, 해군 본부 중장",
    "captain": "Boosts ATK of all characters by 2x after the 15th hit in the chain",
    "special": "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 턴.",
    "specialName": "Shark Cutter - Flash",
    "sailor": "Makes [QCK] orbs \"beneficial\" for this unit"
  },
  {
    "no": 1238,
    "name": "\"상어 베기\" 바스티유, 해군 본부 중장",
    "captain": "Boosts ATK of all characters by 2x after the 15th hit in the chain and by 3x after the 30th hit",
    "special": "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 턴.",
    "specialName": "Shark Cutter - Flash",
    "sailor": "Makes [QCK] orbs \"beneficial\" for this unit"
  },
  {
    "no": 1239,
    "name": "키자루, 해군 본부 최고 전력",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of all characters by 2x, and boosts RCV of all characters by 1.3x. If you use \"Yasakani no Magatama\" boosts ATK of all characters by 3x instead.",
    "specialName": "Yasakani no Magatama",
    "special": [
      {
        "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Deals 10 hits of small random typeless damage to random enemies.",
        "cooldown": [
          6,
          3
        ]
      },
      {
        "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 5x character's RCV in HP. Deals 10 hits of random typeless damage to random enemies.",
        "cooldown": [
          12,
          9
        ]
      },
      {
        "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 10x character's RCV in HP. Deals 10 hits of large random typeless damage to random enemies.",
        "cooldown": [
          20,
          17
        ]
      }
    ],
    "specialNotes": "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}"
  },
  {
    "no": 1240,
    "name": "보르살리노",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of all characters by 2x, and boosts RCV of all characters by 1.3x. If you use \"Yasakani no Magatama\" boosts ATK of all characters by 3x instead.",
    "specialName": "Yasakani no Magatama",
    "special": [
      {
        "description": "For Shooter and Slasher characters,randomizes all non-matching orbs. Deals 10 hits of small random typeless damage to random enemies.",
        "cooldown": [
          6,
          3
        ]
      },
      {
        "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 5x character's RCV in HP. Deals 10 hits of random typeless damage to random enemies.",
        "cooldown": [
          12,
          9
        ]
      },
      {
        "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 10x character's RCV in HP. Deals 10 hits of large random typeless damage to random enemies.",
        "cooldown": [
          20,
          17
        ]
      }
    ],
    "specialNotes": "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}"
  },
  {
    "no": 1241,
    "name": "코알라, 어인공수도 사범 대리",
    "captain": "Boosts chain multiplier by 1.5x. Recovers 1x character's RCV in HP at the end of each 턴",
    "special": "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 턴",
    "specialNotes": "#{additionalDamage : 15x}",
    "specialName": "Fishman Karate, Midair Upwards Kick"
  },
  {
    "no": 1242,
    "name": "코알라, 혁명군 어인공수도 사범 대리",
    "captain": "Boosts chain multiplier by 2x. Recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 턴",
    "specialNotes": "#{additionalDamage : 15x}",
    "specialName": "Fishman Karate, Midair Upwards Kick"
  },
  {
    "no": 1243,
    "name": "핵, 어인공수도 사범",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
    "captainNotes": "Effect stacks, so Fighter/Powerhouse characters get 1.69x ATK",
    "special": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
    "specialName": "Fishman karate, KO blow",
    "specialNotes": "#{gOrbs}"
  },
  {
    "no": 1244,
    "name": "핵, 혁명군 어인공수도 사범",
    "captain": "Boosts ATK of Fighter characters by 1.75x and the ATK of Powerhouse characters by 1.3x",
    "captainNotes": "Effect stacks, so Fighter/Powerhouse characters get 2.275x ATK",
    "special": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
    "specialName": "Fishman karate, KO blow",
    "specialNotes": "#{gOrbs}"
  },
  {
    "no": 1245,
    "name": "몽키 D. 루피, 마린포드에서 날뛰는 '밀집모자'",
    "captain": "Boosts ATK of Fighter characters by 1.75x. If HP is below 10%, boosts ATK of Fighter characters by 3x instead.",
    "special": "Deals random [QCK] damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 턴. If \"Firefly Light, Fiery Doll\" is used again in the same 턴 the special is activated in, boosts ATK of Fighter characters by 2x instead.",
    "specialName": "Gomu Gomu no Stamp Gatling",
    "specialNotes": "Firefly Light, Fiery Doll is Event Ace's special ability."
  },
  {
    "no": 1246,
    "name": "포트거스 D. 에이스, 처형대의 '불주먹'",
    "captain": "Boosts ATK of Fighter characters by 1.2x",
    "special": "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 턴. If \"Gomu Gomu no Stamp Gatling\" is used again in the same 턴 the special is activated in, boosts ATK of Fighter characters by 2x instead.",
    "specialName": "Firefly Light, Fiery Doll"
  },
  {
    "no": 1247,
    "name": "포트거스 D. 에이스, 마린포드에서 날뛰는 '불주먹'",
    "captain": "Boosts HP of Fighter characters by 1.2x and their ATK by 2.75x if they have a matching orb, by 2x otherwise",
    "special": "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies, and boosts ATK of Fighter characters by 1.3x for 1 턴. If \"Gomu Gomu no Stamp Gatling\" is used again in the same 턴 the special is activated in, boosts ATK of Fighter characters by 2x instead.",
    "specialName": "Firefly Light, Fiery Doll"
  },
  {
    "no": 1248,
    "name": "마르코, 가을바람에 펄럭이는 옷깃",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
    "captainNotes": "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 1.69x",
    "special": "Recovers 3,000 HP and reduces damage received by 50% for 1 턴",
    "specialName": "Shining Daylight - Dayflower"
  },
  {
    "no": 1249,
    "name": "마르코, 취기에 흐트러진 옷차림",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.6x",
    "captainNotes": "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 2.56x",
    "special": "Recovers 3,000 HP and reduces damage received by 50% for 1 턴",
    "specialName": "Shining Daylight - Dayflower"
  },
  {
    "no": 1250,
    "name": "마르코, 흰수염 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 1.5x and Recovers a variable amount of character's RCV in HP at the end of each 턴 depending on how many Powerhouse characters are on your team",
    "captainNotes": "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 3.5x RCV",
    "special": [
      {
        "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
        "cooldown": [
          21,
          6
        ]
      },
      {
        "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
        "cooldown": [
          24,
          9
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Burning Vanguard"
  },
  {
    "no": 1251,
    "name": "마르코, 부활의 불꽃 흰수염 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2x and Recovers a variable amount of character's RCV in HP at the end of each 턴 depending on how many Powerhouse characters are on your team",
    "captainNotes": "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 2.5x RCV",
    "special": [
      {
        "description": "Randomizes all orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
        "cooldown": [
          21,
          6
        ]
      },
      {
        "description": "Randomizes non-matching orbs, and boosts ATK of Powerhouse characters by 1.5x for 1 턴",
        "cooldown": [
          24,
          9
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Burning Vanguard"
  },
  {
    "no": 1252,
    "name": "유검사 도마, 흰수염 해적단 산하",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of [INT] characters by 2x",
    "special": "Changes adjacent orbs into [INT] orbs. Deals 20x character's ATK in [INT] damage to all enemies.",
    "specialName": "Reversed Twin Blades - Surprise Thrust",
    "sailor": "Reduces own Silence by 1 턴",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1253,
    "name": "스카이라이더 슈라",
    "captain": "Boosts ATK of [DEX] characters by 2.25x if HP is above 99% at the start of the 턴",
    "special": "Makes Perfects harder to hit for 1 턴. If during that 턴 every unit scores a Perfect hit, boosts ATK of [DEX] characters by 1.75x in the following 턴.",
    "specialName": "Angry Instigator"
  },
  {
    "no": 1254,
    "name": "거대 소용돌이 거미 스쿼드, 흰수염 해적단 산하",
    "captain": "Boosts ATK of Striker characters by 2.5x until the first hit other than Perfect. Reduce crew's current HP by 5% at the end of each 턴.",
    "special": "Deals 10x character's ATK in fixed damage to one enemy, reduces crews current HP by 30% and reduces enemies defense by 80% for one 턴",
    "specialName": "Sword Attack Without Hesitation",
    "sailor": "Reduces his own Numbness by 1 턴"
  },
  {
    "no": 1255,
    "name": "굴레의 디칼반 형제, 흰수염 해적단 산하",
    "captain": "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2x after the 16th hit, by 2.5x after the 22nd hit",
    "special": "For 1 턴, makes Perfects slightly easier to hit and amplifies the effect of orbs by 1.5x",
    "sailor": "When HP is below 30% at the start of the 턴, boost base ATK of Fighter characters by 40",
    "specialName": "Large Fleet Commander"
  },
  {
    "no": 1256,
    "name": "'얼음 마녀' 화이티 베이, 흰수염 해적단 산하",
    "captain": "Boosts ATK of Slasher and Driven characters by 2x and reduces their RCV by 90%",
    "special": "For Slasher and Driven characters, randomizes non-matching orbs, boosts Atk against enemies with increased defense by 1.3x for 1 턴",
    "sailor": "Boosts base ATK and RCV of Driven characters by 10",
    "specialName": "Icebreaker Breakthrough Force"
  },
  {
    "no": 1257,
    "name": "에드워드 뉴게이트, 해적왕의 라이벌",
    "captain": "Boosts ATK of all characters by 2x 전투 시작 시 체력이 50% 미만이면",
    "special": [
      {
        "description": "Cuts the current HP of each enemy by 10%",
        "cooldown": [
          23,
          11
        ]
      },
      {
        "description": "Cuts the current HP of each enemy by 20%",
        "cooldown": [
          28,
          16
        ]
      },
      {
        "description": "Cuts the current HP of each enemy by 40%",
        "cooldown": [
          36,
          24
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Earth Shattering Fist"
  },
  {
    "no": 1258,
    "name": "에드워드 뉴게이트, 대해적 흰수염",
    "captain": "Boosts ATK of all characters by 2.5x 전투 시작 시 체력이 50% 미만이면",
    "special": [
      {
        "description": "Cuts the current HP of each enemy by 10%",
        "cooldown": [
          23,
          11
        ]
      },
      {
        "description": "Cuts the current HP of each enemy by 20%",
        "cooldown": [
          28,
          16
        ]
      },
      {
        "description": "Cuts the current HP of each enemy by 40%",
        "cooldown": [
          36,
          24
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Earth Shattering Fist"
  },
  {
    "no": 1259,
    "name": "돈키호테 도플라밍고, '북쪽 바다'의 해적",
    "captain": "Boosts ATK of Driven characters by 2.5x",
    "special": "Deals 25x character's ATK in typeless damage to all enemies. For 3 턴, makes [STR], [DEX], [QCK], [PSY], and [INT] orbs \"beneficial\" for Driven characters",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
    "specialName": "Five Color Strings (Goshikito)"
  },
  {
    "no": 1260,
    "name": "돈키호테 도플라밍고, '북쪽 바다'의 어둠",
    "captain": "Reduces cooldown of Driven specials by 1 턴 at the start of the fight. Boosts ATK of Driven characters by 2.5x",
    "special": "Deals 25x character's ATK in typeless damage to all enemies. For 3 턴, makes [STR], [DEX], [QCK], [PSY], and [INT] orbs \"beneficial\" for Driven characters",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
    "specialName": "Five Color Strings (Goshikito)"
  },
  {
    "no": 1261,
    "name": "세뇨르 핑크, '북쪽 바다'의 해적",
    "captain": "Boosts ATK of Free Spirit characters by 1.5x. Heals for .75x his RCV at the end of the 턴 each time you hit a Perfect.",
    "special": "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 턴",
    "specialNotes": "#{colorAffinity : 1.5}",
    "specialName": "Blood and Gunpowder of the Underground Family"
  },
  {
    "no": 1262,
    "name": "세뇨르 핑크, '북쪽 바다'의 어둠",
    "captain": "Boosts ATK of Free Spirit characters by 1.75x. Heals for .75x his RCV at the end of the 턴 each time you hit a Perfect.",
    "special": "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 턴",
    "specialNotes": "#{colorAffinity : 1.5}",
    "specialName": "Blood and Gunpowder of the Underground Family"
  },
  {
    "no": 1263,
    "name": "베르고, '북쪽 바다'의 해적",
    "captain": "Boosts ATK of characters with cost 20 or less by 2.5x",
    "special": "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 턴",
    "specialName": "Iron Leg Sanctions"
  },
  {
    "no": 1264,
    "name": "베르고, '북쪽 바다'의 어둠",
    "captain": "Boosts ATK of characters with cost 30 or less by 2.5x",
    "special": "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 턴",
    "specialName": "Iron Leg Sanctions"
  },
  {
    "no": 1265,
    "name": "에이스, Wasting Time Until Twilight",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "special": "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 턴",
    "specialName": "Looking to the Full Moon"
  },
  {
    "no": 1266,
    "name": "에이스, Face Glowing in the Moonlight",
    "captain": "Boosts ATK of Shooter characters by 2.5x",
    "special": "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 턴",
    "specialName": "Looking to the Full Moon"
  },
  {
    "no": 1267,
    "name": "마샬 D. 티치, 검은수염 해적단 선장",
    "captain": "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter, and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
    "captainNotes": "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
    "special": "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
    "specialNotes": "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
    "specialName": "World Shaking Impact"
  },
  {
    "no": 1268,
    "name": "검은수염, 검은수염 해적단 선장",
    "captain": "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter, and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
    "captainNotes": "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
    "special": "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
    "specialNotes": "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
    "specialName": "World Shaking Impact"
  },
  {
    "no": 1269,
    "name": "라피트",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴. Deals 3x character's ATK in [DEX] damage to all enemies at the end of each 턴.",
    "special": "Reduces Bind and Despair duration by 2 턴. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 턴",
    "specialNotes": "Ex. A STR character with a QCK orb will still deal regular damage",
    "sailor": "Boosts base ATK of all characters by 100 if your captain is a Driven character",
    "specialName": "Horrifying Suggestion"
  },
  {
    "no": 1270,
    "name": "'귀신 보안관' 라피트",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴. Deals 7x character's ATK in [DEX] damage to all enemies at the end of each 턴.",
    "special": "Reduces Bind and Despair duration by 2 턴. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 턴",
    "specialNotes": "Ex. A STR character with a QCK orb will still deal regular damage",
    "sailor": "Boosts base ATK of all characters by 100 if your captain is a Driven character",
    "specialName": "Horrifying Suggestion"
  },
  {
    "no": 1271,
    "name": "반 오거",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "special": "Changes orbs in the top row into Matching orbs. For Shooter characters, amplifies the effect of orbs by 1.75x for 1 턴",
    "sailor": "Reduces Blindness duration by 5 턴",
    "specialName": "Other Side of Fate"
  },
  {
    "no": 1272,
    "name": "'음월' 반 오거",
    "captain": "Reduces cooldown of Shooter specials by 1 턴 at the start of the fight. Boosts ATK of Shooter characters by 2.5x.",
    "special": "Changes orbs in the top row into Matching orbs. For Shooter characters, amplifies the effect of orbs by 1.75x for 1 턴",
    "sailor": "Reduces Blindness duration by 5 턴",
    "specialName": "Other Side of Fate",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "선원효과 추가 1: Boosts base ATK of Shooter characters by 60"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
          "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
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
      }
    ]
  },
  {
    "no": 1273,
    "name": "지저스 바제스",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 1.2",
    "captainNotes": "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK and 1.44x HP",
    "special": "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 턴",
    "sailor": "Boosts base HP of all characters by 75",
    "specialName": "Champion of the Wild Roar"
  },
  {
    "no": 1274,
    "name": "'챔피언' 지저스 바제스",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.6x and their HP by 1.2x",
    "captainNotes": "Boosts stack, so a Fighter/Powerhouse character gets 2.56x ATK and 1.44x HP",
    "special": "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 턴",
    "sailor": "Boosts base HP of all characters by 75",
    "specialName": "Champion of the Wild Roar"
  },
  {
    "no": 1275,
    "name": "시류",
    "captain": "Boosts ATK and HP of Slasher characters by 1.5x",
    "special": "For each enemy, has a small chance to instantly defeat that enemy.",
    "specialNotes": "#{instantKill : 25%}",
    "sailor": "Completely resists Silence on this character",
    "sailorNotes": "#{silence}",
    "specialName": "Handling Hell"
  },
  {
    "no": 1276,
    "name": "비의 시류",
    "captain": "Boosts ATK and HP of Slasher characters by 2x",
    "special": "For each enemy, has a small chance to instantly defeat that enemy.",
    "specialNotes": "#{instantKill : 25%}",
    "sailor": "Completely resists Silence on this character",
    "sailorNotes": "#{silence}",
    "specialName": "Handling Hell"
  },
  {
    "no": 1277,
    "name": "도크 Q",
    "captain": "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.25x if HP is above 99% at the start of the 턴",
    "special": "Reduces crew's current HP by 10%. Changes [BLOCK], [TND], and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
    "sailor": "Boosts amount healed from [RCV] orbs by 150 each",
    "specialName": "Reaping of Desperate Lives"
  },
  {
    "no": 1278,
    "name": "'사신' 도크 Q",
    "captain": "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.75x if HP is above 99% at the start of the 턴",
    "special": "Reduces crew's current HP by 10%. Changes [BLOCK], [TND], and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
    "sailor": "Boosts amount healed from [RCV] orbs by 150 each",
    "specialName": "Reaping of Desperate Lives",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1279,
    "name": "존 자이언트",
    "captain": "Boosts ATK and HP of Slasher characters by 1.5x",
    "special": "Reduces damage received in the next 턴 by 50% if the special is activated with less than 50% health remaining",
    "specialName": "Manifesto to the Weak"
  },
  {
    "no": 1280,
    "name": "아오키지, 해군 본부 대장",
    "captain": "Boosts ATK of [PSY] characters by 2.5x",
    "special": "Deals 10,000 fixed damage to all enemies and locks all orbs for 1 턴",
    "specialName": "Ice Chunks - Trident"
  },
  {
    "no": 1281,
    "name": "가프, 해군 본부 중장",
    "captain": "Boosts ATK of Fighter characters by 2.25x and reduces damage received by 10%",
    "special": "Deals 25x character's ATK in [STR] damage to one enemy that will ignore damage negating abilities and barriers.",
    "specialNotes": "#{ignoreBarrier}",
    "specialName": "Fist of Love - Falling Fortress"
  },
  {
    "no": 1282,
    "name": "센고쿠, 해군 본부 원수",
    "captain": "Boosts ATK of Cerebral characters by 2.5x",
    "special": "Reduces cooldown of all specials by 1 턴. Boosts ATK of all characters by 1.2x and amplifies the effect of orbs by 1.2x for 1 턴",
    "specialName": "Encircling Wall around Marineford Bay"
  },
  {
    "no": 1283,
    "name": "아카이누, 해군 본부 대장",
    "captain": "Boosts ATK of Driven characters by 2.5x",
    "special": "Deals 35x character's ATK in [INT] damage to one enemy. Boosts ATK of Driven characters by 1.5x for 1 턴",
    "specialName": "Dark Dog"
  },
  {
    "no": 1284,
    "name": "몽키 D. 루피, 야생의 해적",
    "captain": "Boosts ATK of Striker characters by 1.5x and their HP by 1.2x",
    "special": "Reduces Bind and Silence duration by 3 턴. Randomizes non-matching orbs including [BLOCK] orbs",
    "specialNotes": "#{silence}",
    "sailor": "Reduces Silence duration against this character by 3 턴",
    "sailorNotes": "#{silence}",
    "specialName": "Wild Hunt"
  },
  {
    "no": 1285,
    "name": "몽키 D. 루피, 대지의 개척자",
    "captain": "Boosts ATK of Striker characters by 1.5x and their HP by 1.25x. Boosts ATK of Striker characters by 3.375x after scoring 3 Perfects in a row.",
    "special": "Reduces Bind and Silence duration by 3 턴. Randomizes non-matching orbs including [BLOCK] orbs",
    "specialNotes": "#{silence}",
    "sailor": "Reduces Silence duration against this character by 3 턴",
    "sailorNotes": "#{silence}",
    "specialName": "Wild Hunt"
  },
  {
    "no": 1286,
    "name": "베이비 5, 스파이더 마일즈의 소녀",
    "captain": "Boosts ATK and RCV of [PSY] characters by 1.3x",
    "special": "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
    "specialName": "Handgun Legs"
  },
  {
    "no": 1287,
    "name": "베이비 5, 돈키호테 패밀리의 일원",
    "captain": "Boosts ATK and RCV of [PSY] characters by 1.5x",
    "special": "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 턴",
    "specialName": "Handgun Legs"
  },
  {
    "no": 1288,
    "name": "트라팔가 로, 스파이더 마일즈의 소년",
    "captain": "Boosts ATK of Driven characters by 2.5x, reduces crew's current HP by 10% at the end of each 턴, reduces his own ATK multiplier by 0.1x at the end of each 턴",
    "captainNotes": "His ATK multiplier will be 2.5x on the first 턴, 2.4x on the second, 2.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
    "special": "Reduces Special Cooldown of Driven specials by 1 턴. If during that 턴 every unit scores a Perfect hit, reduces Special Cooldown of Driven specials by 1 턴.",
    "specialName": "Outcome of Sparta"
  },
  {
    "no": 1289,
    "name": "트라팔가 로, 돈키호테 패밀리의 일원",
    "captain": "Boosts ATK of Driven characters by 2.75x, reduces crew's current HP by 10% at the end of each 턴, reduces his own ATK multiplier by 0.1x at the end of each 턴",
    "captainNotes": "His ATK multiplier will be 2.75x on the first 턴, 2.65x on the second, 2.55x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
    "special": "Reduces Special Cooldown of Driven specials by 1 턴. If during that 턴 every unit scores a Perfect hit, reduces Special Cooldown of Driven specials by 1 턴.",
    "specialName": "Outcome of Sparta"
  },
  {
    "no": 1290,
    "name": "버팔로, 돈키호테 패밀리의 일원",
    "captain": "Recovers 500 HP at the end of each 턴",
    "special": "Changes own orb into [INT], and Captain orb into [BOMB]",
    "specialName": "Rude Prank"
  },
  {
    "no": 1291,
    "name": "라오G,지옹권 고수",
    "captain": "Boosts ATK of Driven characters by 1.75x",
    "special": "Changes [PSY], [INT], [RCV], and [TND] orbs into [G] orbs. Locks orbs for 1 턴. If during that 턴 every unit scores a Perfect hit, changes [G] orbs into Matching Orbs",
    "specialName": "Lower Back Pain Stance - The Eyes of Blight Impact"
  },
  {
    "no": 1292,
    "name": "라오G, 디아만테군 간부",
    "captain": "Boosts ATK of Driven characters by 2.5x if they have a matching orb, by 2x otherwise",
    "special": "Changes [PSY], [INT], [RCV], and [TND] orbs into [G] orbs. Locks orbs for 1 턴. If during that 턴 every unit scores a Perfect hit, changes [G] orbs into Matching Orbs",
    "specialName": "Lower Back Pain Stance - The Eyes of Blight Impact"
  },
  {
    "no": 1293,
    "name": "보아 샌더소니아, 쿠자의 전사",
    "captain": "Boosts ATK of Fighter characters by 1.75x, deals 2 times the damage received in the previous 턴 in [PSY] damage to all enemies at the end of each 턴",
    "special": [
      {
        "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by 40%",
        "cooldown": [
          21,
          11
        ]
      },
      {
        "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by a variable factor.",
        "cooldown": [
          26,
          16
        ]
      }
    ],
    "specialNotes": "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
    "specialName": "Snake Dance"
  },
  {
    "no": 1294,
    "name": "보아 샌더소니아, 고르곤 세 자매의 차녀",
    "captain": "Boosts ATK of Powerhouse characters by 2x, deals 4 times the damage received in the previous 턴 in [PSY] damage to all enemies at the end of each 턴",
    "special": [
      {
        "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by 40%",
        "cooldown": [
          21,
          11
        ]
      },
      {
        "description": "Changes Captain orb into Matching, and reduces damage received from [PSY] enemies by a variable factor.",
        "cooldown": [
          26,
          16
        ]
      }
    ],
    "specialNotes": "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
    "specialName": "Snake Dance"
  },
  {
    "no": 1295,
    "name": "칼리파, 글래머러스 미이라",
    "captain": "Boosts ATK and RCV of [STR] characters by 1.5x",
    "special": "Reduces Paralysis duration by 3 턴, removes Poison, and reduces the defense of all enemies by 100% for 1 턴",
    "specialName": "Mysterious Hour of the Dark Night"
  },
  {
    "no": 1296,
    "name": "칼리파, 글래머러스 미이라 할로윈 나이트 - 마스커레이드",
    "captain": "Boosts ATK of [STR] characters by 2x and their RCV by 1.5x",
    "special": "Reduces Paralysis duration by 3 턴, removes Poison, and reduces the defense of all enemies by 100% for 1 턴",
    "specialName": "Mysterious Hour of the Dark Night"
  },
  {
    "no": 1297,
    "name": "아카이누",
    "captain": "Boosts ATK by 2.5x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
    "special": "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 턴",
    "specialNotes": "#{colorAffinity : 1.75}",
    "specialName": "Great Eruption"
  },
  {
    "no": 1298,
    "name": "아카이누, 마그마 인간",
    "captain": "Boosts ATK by 3x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
    "special": "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 턴",
    "specialNotes": "#{colorAffinity : 1.75}",
    "specialName": "Great Eruption"
  },
  {
    "no": 1299,
    "name": "레베카, 러블리 몬스터 캣",
    "captain": "Boosts ATK and RCV of [INT] characters by 1.2x",
    "special": "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 턴",
    "specialName": "Driving Away Evil Spirits of Sin - Cat Pose"
  },
  {
    "no": 1300,
    "name": "레베카, 러블리 못스터 캣 할로윈 나이트 - 마스커레이드",
    "captain": "Boosts ATK and RCV of [INT] characters by 1.5x",
    "special": "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 턴",
    "specialName": "Driving Away Evil Spirits of Sin - Cat Pose"
  },
  {
    "no": 1301,
    "name": "수감자 버기",
    "captain": "Boosts ATK of Slasher characters by 1.75x",
    "special": "Reduces crew's HP to 1, empties all slots, and deals 30x character's ATK in [QCK] damage to all enemies",
    "specialName": "Special Muggy Ball"
  },
  {
    "no": 1302,
    "name": "수감자 광대 버기, 탈옥 동맹",
    "captain": "Boosts ATK of Slasher characters by 1.75x and boosts ATK of Driven characters by 1.5x",
    "captainNotes": "The bonus is cumulative. Slasher Driven characters get a 2.625x bonus.",
    "special": "Reduces crew's HP to 1, empties all slots, and deals 30x character's ATK in [QCK] damage to all enemies",
    "specialName": "Special Muggy Ball"
  },
  {
    "no": 1303,
    "name": "탈옥수 갤디노",
    "captain": "Boosts ATK of Cerebral characters by 1.5x. If you don't attack with Mr. 3, reduces damage received by 10% for that 턴.",
    "special": "Reduces damage received by 60% for 2 턴",
    "specialName": "Extra Large Candle Wall"
  },
  {
    "no": 1304,
    "name": "탈옥수 갤디노, 탈옥연합",
    "captain": "Boosts ATK of Cerebral characters by 2x. If you don't attack with Mr. 3, reduces damage received by 10% for that 턴.",
    "special": "Reduces damage received by 60% for 2 턴",
    "specialName": "Extra Large Candle Wall"
  },
  {
    "no": 1305,
    "name": "슈가, 리틀 서큐버스",
    "captain": "Boosts ATK of Cerebral characters by 1.3x and recovers 500 HP at the end of each 턴",
    "special": "Changes Badly Matching, [BLOCK], and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 턴",
    "specialName": "Aggressive 'Trick-Or-Treat'"
  },
  {
    "no": 1306,
    "name": "슈가, 리틀 서큐버스 할로윈 나이트 - 마스커레이드",
    "captain": "Boosts ATK of Cerebral characters by 1.75x and recovers 1,000 HP at the end of each 턴",
    "special": "Changes Badly Matching, [BLOCK], and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 턴",
    "specialName": "Aggressive 'Trick-Or-Treat'"
  },
  {
    "no": 1307,
    "name": "바르톨로메오, 풀 문 울프",
    "captain": "Boosts ATK of Driven characters by 1.75x. If you don't attack with Bartolomeo, reduces damage received by 10% for that 턴.",
    "special": "Reduces damage received by 50% for 1 턴. If during that 턴 every unit scores a Perfect hit, reduces damage received by 80% in the following 턴",
    "specialName": "Vulgar Provocation"
  },
  {
    "no": 1308,
    "name": "바르톨로메오, 풀 문 울프 할로윈 나이트 - 마스커레이드",
    "captain": "Boosts ATK of Driven characters by 2x. If you don't attack with Bartolomeo, reduces damage received by 20% for that 턴.",
    "special": "Reduces damage received by 50% for 1 턴. If during that 턴 every unit scores a Perfect hit, reduces damage received by 80% in the following 턴",
    "specialName": "Vulgar Provocation"
  },
  {
    "no": 1309,
    "name": "킨에몬",
    "captain": "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each 턴",
    "special": "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 턴 and if HP is above 70%, changes adjacent orbs into Matching Orbs",
    "specialName": "Poof"
  },
  {
    "no": 1310,
    "name": "여우불의 킨에몬",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 턴 and if HP is above 70%, changes adjacent orbs into Matching Orbs",
    "specialName": "Poof"
  },
  {
    "no": 1311,
    "name": "보아 마리골드, 쿠자의 전사",
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.5x",
    "special": "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 턴",
    "specialNotes": "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
    "specialName": "King Cobra Machetes"
  },
  {
    "no": 1312,
    "name": "보아 마리골드, 고르곤 세 자매의 삼녀",
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.75x",
    "special": "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 턴",
    "specialNotes": "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
    "specialName": "King Cobra Machetes"
  },
  {
    "no": 1313,
    "name": "아카이누, 해군본부 최고전력",
    "captain": "일당의 공격력을 2.25배로 만들고, STR슬롯이 나온 캐릭터의 공격력은 1.75배 더 상승하며, STR슬롯 출현율이 상승한다.",
    "special": "적 전체에 무 속성(x125배) 초월데미지를 주고, STR슬롯 외의 다른 슬롯을 랜덤으로 바꾸며, 코스트 50이상인 캐릭터의 공격력을 2턴동안 1.75배로 만든다.",
    "specialName": "유성화산"
  },
  {
    "no": 1314,
    "name": "사카즈키",
    "captain": "일당의 공격력을 2.25배로 만들고, STR슬롯이 나온 캐릭터의 공격력은 1.76배 더 상승하며, STR슬롯 출현율이 상승한다.",
    "special": "적 전체에 무 속성(x125배) 초월데미지를 주고, STR슬롯 외의 다른 슬롯을 랜덤으로 바꾸며, 코스트 50이상인 캐릭터의 공격력을 2턴동안 1.76배로 만든다.",
    "specialName": "유성화산",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: 자신이 QCK에게 입히는 통상 공격 데미지 2배 증가한다."
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "잠재능력 소켓슬롯 추가 : 1"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 3: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: 만약 PERFECT를 적중하면, 20% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
          "Level 2: 만약 PERFECT를 적중하면, 30% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
          "Level 3: 만약 PERFECT를 적중하면, 40% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
          "Level 4: 만약 PERFECT를 적중하면, 50% 확률로 캐릭터 공격력의 5%에 해당하는 추가데미지를 입힌다.",
          "Level 5: 만약 PERFECT를 적중하면, 50% 확률로 캐릭터 공격력의 10%에 해당하는 추가데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 40",
          "Level 3: 공격력 상승 : 60",
          "Level 4: 공격력 상승 : 80",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 7턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태가 무효화된다."
        ]
      }
    ]
  },
  {
    "no": 1315,
    "name": "해군 상사 코비, 위대한 항로 해병",
    "captain": "Boosts ATK of all characters by 2x after the 2nd Perfect in a row and by 3x after the 5th Perfect in a row.",
    "special": [
      {
        "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 1 턴. Recovers 3x character's RCV in HP",
        "cooldown": [
          15,
          9
        ]
      },
      {
        "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 3 턴. Recovers 6x character's RCV in HP",
        "cooldown": [
          20,
          14
        ]
      },
      {
        "description": "If HP is below 3,000 when the special is activated, removes No Healing debuff. Recovers 13x character's RCV in HP",
        "cooldown": [
          24,
          18
        ]
      }
    ],
    "specialNotes": "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
    "sailor": "Reduces Blindness duration by 5 턴",
    "specialName": "Echoing Cry of the Soul"
  },
  {
    "no": 1316,
    "name": "해군 상사 코비, 해군 영웅의 제자",
    "captain": "Boosts ATK of all characters by 2.5x after the 2nd Perfect in a row and by 3.5x after the 5th Perfect in a row.",
    "special": [
      {
        "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 1 턴. Recovers 3x character's RCV in HP",
        "cooldown": [
          15,
          9
        ]
      },
      {
        "description": "If HP is below 3,000 when the special is activated, reduces No Healing debuff by 3 턴. Recovers 6x character's RCV in HP",
        "cooldown": [
          20,
          14
        ]
      },
      {
        "description": "If HP is below 3,000 when the special is activated, removes No Healing debuff. Recovers 13x character's RCV in HP",
        "cooldown": [
          24,
          18
        ]
      }
    ],
    "specialNotes": "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
    "sailor": "Reduces Blindness duration by 5 턴",
    "specialName": "Echoing Cry of the Soul"
  },
  {
    "no": 1317,
    "name": "몽키 D. 가프, 해군본부 중장",
    "captain": "Boosts ATK of [STR] and [PSY] characters by 2x",
    "special": "Deals 30x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 턴. Reduces the defense of all enemies by 80% for 1 턴.",
    "specialNotes": "#{ignoreBarrier}",
    "sailor": "Boosts base HP of all characters by 75",
    "specialName": "Super Large Iron Ball"
  },
  {
    "no": 1318,
    "name": "'주먹의 가프', 해군본부 중장",
    "captain": "Boosts ATK of [STR] and [PSY] characters by 2.5x",
    "special": "Deals 30x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 턴. Reduces the defense of all enemies by 80% for 1 턴.",
    "specialNotes": "#{ignoreBarrier}",
    "sailor": "Boosts base HP of all characters by 75",
    "specialName": "Super Large Iron Ball"
  },
  {
    "no": 1319,
    "name": "츠루, 해군본부 중장",
    "captain": "Heals for 1x her RCV at the end of the 턴 each time you hit a Good. Heals for .1x her RCV at the end of the 턴 each time you hit a Perfect",
    "special": "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 턴",
    "specialNotes": "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
    "sailor": "Reduces Paralysis duration by 1 턴",
    "specialName": "A Decree of the Veteran"
  },
  {
    "no": 1320,
    "name": "'대참모'츠루, 해군본부 준장",
    "captain": "Heals for 1.5x her RCV at the end of the 턴 each time you hit a Good. Heals for .1x her RCV at the end of the 턴 each time you hit a Perfect",
    "special": "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 턴",
    "specialNotes": "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
    "sailor": "Reduces Paralysis duration by 1 턴",
    "specialName": "A Decree of the Veteran",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "Reduce base Special Cooldown by 1"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "공격력 상승 : 60"
      },
      {
        "description": "선원효과 추가 1: Reduces Blindness duration by 3 턴"
      },
      {
        "description": "새로운 선장 효과 습득: Boosts ATK of all characters by 1.2x, heals for 1.5x her RCV at the end of the 턴 each time you hit a Good. Heals for .3x her RCV at the end of the 턴 each time you hit a Perfect"
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
          "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
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
      }
    ]
  },
  {
    "no": 1321,
    "name": "모몬가, 괴물 베기의 명장",
    "captain": "Boosts ATK of Cerebral and Slasher characters by 2.25x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT], and [PSY] character on your crew.",
    "special": "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 턴",
    "specialName": "Front Line Dissection",
    "sailor": "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character"
  },
  {
    "no": 1322,
    "name": "해군본부 중장 모몬가, 괴물 베기의 명장",
    "captain": "Boosts ATK of Cerebral and Slasher characters by 2.5x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT], and [PSY] character on your crew.",
    "special": "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 턴",
    "specialName": "Front Line Dissection",
    "sailor": "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character"
  },
  {
    "no": 1323,
    "name": "오니구모, 팔도류의 검사",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Slasher and Driven characters by 1.3x",
    "captainNotes": "The bonus is cumulative. Slasher + Driven characters get a 1.69x bonus.",
    "special": "Randomize [RCV], [TND], and [BLOCK] orbs. Makes [STR], [DEX], and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 턴",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
    "specialName": "Onigumo of Dismantling Swordsmanship",
    "sailor": "Reduces Paralysis for 5 턴 for himself"
  },
  {
    "no": 1324,
    "name": "해군본부 중장 오니구모, 팔도류의 검사",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Slasher and Driven characters by 1.6x",
    "captainNotes": "The bonus is cumulative. Slasher + Driven characters get a 2.56x bonus.",
    "special": "Randomize [RCV], [TND], and [BLOCK] orbs. Makes [STR], [DEX], and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 턴",
    "specialNotes": "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
    "specialName": "Onigumo of Dismantling Swordsmanship",
    "sailor": "Reduces Paralysis for 5 턴 for himself"
  },
  {
    "no": 1325,
    "name": "코라손, 로얄 뱀파이어",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴",
    "special": "If HP is above 99%, changes [STR], [DEX], and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
    "specialName": "Amulet Flame"
  },
  {
    "no": 1326,
    "name": "코라손, 로얄 뱀파이어 할로윈 나이트 - 마스커레이드",
    "captain": "Boosts ATK by 1.3x and recovers 4x character's RCV in HP at the end of each 턴",
    "special": "If HP is above 99%, changes [STR], [DEX], and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
    "specialName": "Amulet Flame"
  },
  {
    "no": 1327,
    "name": "레오, 톤타타족 톤타군단",
    "captain": "Boosts ATK of characters with cost 20 or less by 2x",
    "special": [
      {
        "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
        "cooldown": [
          11,
          4
        ]
      },
      {
        "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
        "cooldown": [
          19,
          12
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Tail Hammer"
  },
  {
    "no": 1328,
    "name": "전사 레오, 톤타타족 톤타군단",
    "captain": "Boosts ATK of characters with cost 20 or less by 2.5x",
    "special": [
      {
        "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
        "cooldown": [
          11,
          4
        ]
      },
      {
        "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
        "cooldown": [
          19,
          12
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Tail Hammer"
  },
  {
    "no": 1329,
    "name": "위카",
    "captain": "Reduces cooldown of Fighter and Free Spirit specials by 1 턴 at the start of the fight. Gives chance of duplicating a drop upon completion of the island.",
    "captainNotes": "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
    "special": [
      {
        "description": "Deals 6 fixed damage to all enemies. Randomizes orbs of upper row characters",
        "cooldown": [
          9,
          3
        ]
      },
      {
        "description": "Deals 15 fixed damage to all enemies. Recovers 3x character's RCV in HP",
        "cooldown": [
          11,
          5
        ]
      },
      {
        "description": "Deals 300 fixed damage to all enemies. Boosts the Color Affinity of Fighter and Free Spirit characters by 1.25x",
        "cooldown": [
          16,
          10
        ]
      }
    ],
    "specialName": "The Work of Fairies",
    "specialNotes": "#{colorAffinity : 1.25}<br>#{stages}"
  },
  {
    "no": 1330,
    "name": "간초",
    "captain": "Boosts ATK of Striker characters by 1.5x and recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Switches orbs between slots twice. Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 턴",
    "specialName": "Tonta Knowledge"
  },
  {
    "no": 1331,
    "name": "맨셸리, 톤타족장의 딸",
    "captain": "Recovers 2x character's RCV in HP at the end of each 턴",
    "special": [
      {
        "description": "Reduces Bind duration for one character by 4 턴. Recovers 7x character's RCV in HP.",
        "cooldown": [
          18,
          11
        ]
      },
      {
        "description": "Reduces Bind duration for one character by 7 턴. Recovers 15x character's RCV in HP.",
        "cooldown": [
          24,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Tears of Healing"
  },
  {
    "no": 1332,
    "name": "맨셸리, 톤타타 왕국의 공주",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴",
    "special": [
      {
        "description": "Reduces Bind duration for one character by 4 턴. Recovers 7x character's RCV in HP.",
        "cooldown": [
          18,
          11
        ]
      },
      {
        "description": "Reduces Bind duration for one character by 7 턴. Recovers 15x character's RCV in HP.",
        "cooldown": [
          24,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Tears of Healing"
  },
  {
    "no": 1333,
    "name": "카부",
    "captain": "Boosts ATK of [STR] and Powerhouse characters by 1.4x",
    "captainNotes": "The bonus is cumulative. [STR] Powerhouse characters get a 1.96x bonus.",
    "special": "Slightly boosts chances of getting [STR] orbs and boosts own ATK by 1.2x for 2 턴",
    "specialName": "Yellow Kabu Squad"
  },
  {
    "no": 1334,
    "name": "비안",
    "captain": "Boosts ATK of [DEX] and Free Spirit characters by 1.4x",
    "captainNotes": "The bonus is cumulative. [DEX] Free Spirit characters get a 1.96x bonus.",
    "special": "Poisons all enemies and randomizes all orbs",
    "specialName": "Pink Bee Squad"
  },
  {
    "no": 1335,
    "name": "사보, 귀한 아가씨와의 일막",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight. Boosts ATK of Free Spirit characters by 1.5x.",
    "special": "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 턴",
    "specialName": "Gentleman's Welcome"
  },
  {
    "no": 1336,
    "name": "사보, 극장의 괴인",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight. Boosts ATK of Free Spirit characters by 2x.",
    "special": "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 턴",
    "specialName": "Gentleman's Welcome"
  },
  {
    "no": 1337,
    "name": "칸주로",
    "captain": "타격, 자유 캐릭터의 공격력이 2배가 된다.",
    "special": "타격, 자유 캐릭터의 STR,QCK,DEX,PSY,INT을 자신의 속성 슬롯으로 만들고, 그 외 [RCV],[TND], [EMPTY], [G], [BOMB] 슬롯은 불리한 속성 슬롯으로 변환한다.",
    "specialName": "가부키의 필치"
  },
  {
    "no": 1338,
    "name": "소나기 칸주로",
    "captain": "타격, 자유 캐릭터의 공격력이 2.25배가 되고 받는 대미지가 10% 감소한다.",
    "special": "타격, 자유 캐릭터의 STR,QCK,DEX,PSY,INT을 자신의 속성 슬롯으로 만들고, 그 외 [RCV],[TND], [EMPTY], [G], [BOMB] 슬롯은 불리한 속성 슬롯으로 변환한다.",
    "specialName": "가부키의 필치"
  },
  {
    "no": 1339,
    "name": "토니토니 쵸파 점프력 강화(점핑 포인트)",
    "captain": "Boosts ATK of [DEX] characters by 2.25x",
    "special": [
      {
        "description": "Reduces Paralysis duration by 1 턴. Adds .2x to Chain multiplier for 1 턴",
        "cooldown": [
          18,
          8
        ]
      },
      {
        "description": "Reduces Paralysis duration by 2 턴. Adds .3x to Chain multiplier for 1 턴",
        "cooldown": [
          23,
          13
        ]
      },
      {
        "description": "Reduces Paralysis duration by 2 턴. Adds .5x to Chain multiplier for 1 턴",
        "cooldown": [
          25,
          15
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Flight Power Strengthening - Jump Point"
  },
  {
    "no": 1340,
    "name": "게다츠, 스카이피아 신관",
    "captain": "Boosts ATK of [QCK] characters by 1.5x",
    "special": "Delays all enemies for 1 턴. Cuts the current HP of all enemies by 10%",
    "specialName": "Swamp Cloud Burger"
  },
  {
    "no": 1341,
    "name": "'하늘 반장' 게다츠, 스카이피아 신관",
    "captain": "Boosts ATK of [QCK] characters by 1.75x. After scoring 3 hits below Good in a row, boosts ATK of [QCK] characters by 2.625x instead.",
    "special": "Delays all enemies for 1 턴. Cuts the current HP of all enemies by 10%",
    "specialName": "Swamp Cloud Burger"
  },
  {
    "no": 1342,
    "name": "칼리 다단",
    "captain": "Boosts HP of [PSY] characters by 1.75x",
    "special": "Reduces Silence duration by 2 턴",
    "specialNotes": "#{silence}",
    "specialName": "Rogue Threat"
  },
  {
    "no": 1343,
    "name": "포르쉐미",
    "captain": "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2x.",
    "special": "Deals 13x character's Atk in [DEX] damage to one enemy, and boosts ATK against enemies with reduced defense by 1.3x for 1 턴",
    "specialName": "Spiked Glove of Punishment"
  },
  {
    "no": 1344,
    "name": "블루잼",
    "captain": "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2.25x.",
    "special": "Deals 20x character's ATK in [STR] damage to all enemies, and boosts ATK of Driven characters by 1.3x for 1 턴",
    "specialName": "Bullet Purge"
  },
  {
    "no": 1345,
    "name": "징베, 어인해적단 선장",
    "captain": "Boosts ATK of Fighter characters by 2.5x",
    "special": "Reduces Despair duration by 5 턴. Reduces Special Cooldown of your top row by 1 턴",
    "specialName": "Gathering Strength for a Counter Attack"
  },
  {
    "no": 1346,
    "name": "헤라클레슨, 노상강도의 숲의 수완가 선생",
    "captain": "Boosts ATK, HP and RCV of Shooter and Cerebral characters by 1.5x",
    "special": "Randomizes all orbs, including [BLOCK] orbs, switches orbs between slots 3 times",
    "specialName": "Survival Techniques of the Hungry Baron"
  },
  {
    "no": 1347,
    "name": "토리노 왕국의 괴조",
    "special": "Change own orb into [PSY], and deals 25x character's attack in [PSY] damage to one enemy",
    "specialName": "Tsubami Behemoth"
  },
  {
    "no": 1348,
    "name": "휴먼 드릴",
    "special": "Boosts ATK of all characters by 1.2x for 2 턴 and amplifies the effect of orbs by 1.2x for 2 턴",
    "specialName": "Imitation Tactics"
  },
  {
    "no": 1349,
    "name": "하레다스",
    "captain": "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.75x",
    "special": "Empty all slots including [BLOCK] orbs, and boosts ATK of Cerebral characters by 1.2x for 1 턴",
    "specialName": "Gust 'Wind Knot'"
  },
  {
    "no": 1350,
    "name": "테나, 게나 왕국의 수장족",
    "special": "Switches orbs between slots 3 times",
    "specialName": "Longarm Tribe of Tehna Gehna"
  },
  {
    "no": 1351,
    "name": "데킬라울프의 경비병",
    "special": "Reduces the defense of all by 50% and delays all enemies for 1 턴",
    "specialName": "Covering Fire"
  },
  {
    "no": 1352,
    "name": "이반코프, 킹 오브 뉴카마",
    "captain": "Boosts ATK of Fighter characters by 2x at the start of the chain, boosts Atk of Fighter characters by 3.5x after the 5th Perfect in a row",
    "special": "Following the activation of the special, if every unit scores a Perfect hit, reduces damage received by 90% in the following 턴",
    "specialName": "Rolling Beauty"
  },
  {
    "no": 1353,
    "name": "레일리, 해적왕의 선원",
    "captain": "Boosts ATK of Cerebral characters by 2.5x",
    "special": "Deals 50,000 Fixed damage to one enemy, adds 0.5 to Chain multiplier for 1 턴",
    "specialName": "Guidence to Control Haki"
  },
  {
    "no": 1354,
    "name": "실버즈 레일리 잠들지 않는 거리의 마스터",
    "captain": "Boosts chain multiplier by 2x, recovers 1.5x character's RCV in HP at the end of each 턴",
    "special": "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Straight Stimultaion",
    "specialNotes": "#{orb : 1.5x}"
  },
  {
    "no": 1355,
    "name": "실버즈 레일리 라임 라이트에 빛나는 명왕",
    "captain": "Boosts chain multiplier by 3x, recovers 1.5x character's RCV in HP at the end of each 턴",
    "special": "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Straight Stimultaion",
    "specialNotes": "#{orb : 1.5x}"
  },
  {
    "no": 1356,
    "name": "페콤즈",
    "captain": "Boosts ATK of Powerhouse characters by 1.5x",
    "special": "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes Perfects easier to hit for 1 턴.",
    "specialName": "Serious Threat",
    "specialNotes": "Increases timing window to hit a Perfect. (Animation remains the same)"
  },
  {
    "no": 1357,
    "name": "페콤즈, 빅 맘 해적단",
    "captain": "Boosts ATK, HP and RCV of Powerhouse characters by 1.5x",
    "special": "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes Perfects easier to hit for 1 턴.",
    "specialName": "Serious Threat",
    "specialNotes": "Increases timing window to hit a Perfect. (Animation remains the same)"
  },
  {
    "no": 1358,
    "name": "타마고 남작",
    "captain": "Boosts ATK of Cerebral characters by 1.5x and the HP of Striker characters by 1.5x",
    "special": "Boosts RCV of all characters by 1.75x and delays all enemies by 1 턴.",
    "specialName": "The Long Legged Gentleman's Resolution"
  },
  {
    "no": 1359,
    "name": "B타마고 남작, 빅 맘 해적단",
    "captain": "Boosts ATK of Cerebral characters by 1.75x and the HP of Striker characters by 1.75x",
    "special": "Boosts RCV of all characters by 1.75x and delays all enemies by 1 턴.",
    "specialName": "The Long Legged Gentleman's Resolution"
  },
  {
    "no": 1360,
    "name": "루피의 겨울섬모험",
    "captain": "Boosts ATK characters with cost 30 or less by 2x and their HP by 1.2x",
    "special": "Changes own orb into [QCK], deals 15x character's ATK in [QCK] damage to one enemy",
    "specialName": "Gum-Gum Twin Jet Pistol: Snowflake"
  },
  {
    "no": 1361,
    "name": "롤로노아 조로, 집결하는 밀짚모자 일당",
    "captain": "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last 턴, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
    "captainNotes": "You only need to kill at least 1 character in the last 턴 to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
    "special": "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 턴. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 턴 instead",
    "specialName": "Three Blade Style Secret Skill: Crossroad of Six Paths"
  },
  {
    "no": 1362,
    "name": "롤로노아 조로, 신생 밀짚모자 일당",
    "captain": "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last 턴, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
    "captainNotes": "You only need to kill at least 1 character in the last 턴 to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
    "special": "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 턴. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 턴 instead",
    "specialName": "Three Blade Style Secret Skill: Crossroad of Six Paths"
  },
  {
    "no": 1363,
    "name": "프랑키, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of [PSY] characters by 2x, reduces damage received by 10%",
    "special": "Deals 25x character's ATK in [PSY] damage to all enemies, amplifies the effect of orbs for [PSY] characters by 2x for 1 턴",
    "specialNotes": "#{orb : 2x}",
    "sailor": "Boosts base HP of [PSY] characters by 100",
    "specialName": "Franky Fireball"
  },
  {
    "no": 1364,
    "name": "프랑키, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of [PSY] characters by 2.5x, reduces damage received by 10%",
    "special": "Deals 25x character's ATK in [PSY] damage to all enemies, amplifies the effect of orbs for [PSY] characters by 2x for 1 턴",
    "specialNotes": "#{orb : 2x}",
    "sailor": "Boosts base HP of [PSY] characters by 100",
    "specialName": "Franky Fireball"
  },
  {
    "no": 1365,
    "name": "나미, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.5x",
    "special": [
      {
        "description": "Reduces Paralysis and Silence duration by 1 턴. Delays all enemies for 1 턴",
        "cooldown": [
          13,
          8
        ]
      },
      {
        "description": "Reduces Paralysis and Silence duration by 2 턴. Delays all enemies for 1 턴",
        "cooldown": [
          15,
          10
        ]
      },
      {
        "description": "Reduces Paralysis and Silence duration by 5 턴. Delays all enemies for 2 턴",
        "cooldown": [
          18,
          13
        ]
      }
    ],
    "sailorNotes": "#{silence}",
    "sailor": "Completely resists Silence on this character",
    "specialNotes": "#{silence}<br>#{stages}",
    "specialName": "Black Ball - Thundercloud Rod"
  },
  {
    "no": 1366,
    "name": "나미, 신생 밀짚모자 일당",
    "captain": "Boosts RCV of Cerebral characters by 1.5x and their ATK by 2.75x if they have a matching orb, by 1.5x otherwise",
    "special": [
      {
        "description": "Reduces Paralysis and Silence duration by 1 턴. Delays all enemies for 1 턴",
        "cooldown": [
          13,
          8
        ]
      },
      {
        "description": "Reduces Paralysis and Silence duration by 2 턴. Delays all enemies for 1 턴",
        "cooldown": [
          15,
          10
        ]
      },
      {
        "description": "Reduces Paralysis and Silence duration by 5 턴. Delays all enemies for 2 턴",
        "cooldown": [
          18,
          13
        ]
      }
    ],
    "sailorNotes": "#{silence}<br>#{stages}",
    "sailor": "Completely resists Silence on this character",
    "specialNotes": "#{silence}",
    "specialName": "Black Ball - Thundercloud Rod"
  },
  {
    "no": 1367,
    "name": "상디, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of [STR] characters by 2x",
    "special": [
      {
        "description": "Reduces damage received by 50% and amplifies the effect of orbs by 1.5x for 1 턴.",
        "cooldown": [
          11,
          6
        ]
      },
      {
        "description": "Reduces damage received by 70% and amplifies the effect of orbs by 1.75x for 1 턴.",
        "cooldown": [
          20,
          15
        ]
      }
    ],
    "specialNotes": "#{orb : 1.75x}<br>#{stages}",
    "sailor": "Boosts base ATK, HP and RCV of all characters by 50",
    "specialName": "Sky Walk"
  },
  {
    "no": 1368,
    "name": "상디, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of [STR] characters by 2.5x, by 3x 전투 시작 시 체력이 30% 미만이면",
    "special": [
      {
        "description": "Reduces damage received by 50% and amplifies the effect of orbs by 1.5x for 1 턴.",
        "cooldown": [
          11,
          6
        ]
      },
      {
        "description": "Reduces damage received by 70% and amplifies the effect of orbs by 1.75x for 1 턴.",
        "cooldown": [
          20,
          15
        ]
      }
    ],
    "specialNotes": "#{orb : 1.75x}<br>#{stages}",
    "sailor": "Boosts base ATK, HP and RCV of all characters by 50",
    "specialName": "Sky Walk"
  },
  {
    "no": 1369,
    "name": "토니토니 쵸파, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of [QCK] characters by 1.5x and their HP and RCV by 1.2x",
    "special": "Changes [DEX] and [RCV] on [QCK] characters into [QCK], cuts the current HP of one enemy by 15%",
    "sailor": "Makes [STR] orbs \"beneficial\" for this unit",
    "specialName": "Kakuho: Elf"
  },
  {
    "no": 1370,
    "name": "토니토니 쵸파, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of [QCK] characters by 2x and their HP and RCV by 1.2x",
    "special": "Changes [DEX] and [RCV] on [QCK] characters into [QCK], cuts the current HP of one enemy by 15%",
    "sailor": "Makes [STR] orbs \"beneficial\" for this unit",
    "specialName": "Kakuho: Elf"
  },
  {
    "no": 1371,
    "name": "롤로노아 조로, 야생의 해적",
    "captain": "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.25x after the 2nd Perfect in a row and by 2.5x after the 4th Perfect in a row.",
    "special": "Reduces Despair duration by 3 턴. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 턴",
    "sailor": "Restores his own special by 2 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 2}",
    "specialName": "Wild Plan"
  },
  {
    "no": 1372,
    "name": "롤로노아 조로, 대지의 개척자",
    "captain": "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.5x after the 2nd Perfect in a row and by 3x after the 4th Perfect in a row.",
    "special": "Reduces Despair duration by 3 턴. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 턴",
    "sailor": "Restores his own special by 2 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 2}",
    "specialName": "Wild Plan"
  },
  {
    "no": 1373,
    "name": "마젤란",
    "captain": "Boosts ATK of INT characters by 1.5x and their HP by 1.2x, deals 5 times the damage received in the previous 턴 in [INT] damage to all enemies at the end of each 턴",
    "special": [
      {
        "description": "Poisons all enemies and delays all enemies for 1 턴.",
        "cooldown": [
          25,
          10
        ]
      },
      {
        "description": "Inflicts Toxic to all enemies and delays all enemies for 1 턴.",
        "cooldown": [
          31,
          16
        ]
      }
    ],
    "specialName": "Poison Dragon",
    "specialNotes": "Toxic starts at 0.5x character's attack and increases by 3x at the end of every 턴 until 1,500,000 damage per 턴.<br>#{stages}"
  },
  {
    "no": 1374,
    "name": "마젤란, 감옥 서장",
    "captain": "Boosts ATK of INT characters by 2.25x and their HP by 1.5x, deals 5 times the damage received in the previous 턴 in [INT] damage to all enemies at the end of each 턴",
    "special": [
      {
        "description": "Poisons all enemies and delays all enemies for 1 턴.",
        "cooldown": [
          25,
          10
        ]
      },
      {
        "description": "Inflicts Toxic to all enemies and delays all enemies for 1 턴.",
        "cooldown": [
          31,
          16
        ]
      }
    ],
    "specialName": "Poison Dragon",
    "specialNotes": "Toxic starts at 0.5x character's attack and increases by 3x at the end of every 턴 until 1,500,000 damage per 턴.<br>#{stages}"
  },
  {
    "no": 1375,
    "name": "델린저, 투어의 혈통을 이끄는 반어인",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x, reduces crew's HP by 50%, Increases damage received by 2x",
    "special": "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 턴, amplifies the effect of Dellinger's orb by 1.5x for 1 턴, and changes own orb to [QCK].",
    "specialNotes": "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
    "specialName": "Deadly Fangs of Rage"
  },
  {
    "no": 1376,
    "name": "델린저, 디아만테군 전투원",
    "captain": "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's HP by 20%, Increases damage received by 2x",
    "special": "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 턴, amplifies the effect of Dellinger's orb by 1.5x for 1 턴, and changes own orb to [QCK].",
    "specialNotes": "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
    "specialName": "Deadly Fangs of Rage"
  },
  {
    "no": 1377,
    "name": "마가렛, 아마존 릴리의 궁수",
    "captain": "Boosts ATK and RCV of Slasher and Shooter characters by 1.3x",
    "special": "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 턴",
    "sailor": "Boosts amount healed from [RCV] orbs by 125 each",
    "specialName": "Sincere Devotion"
  },
  {
    "no": 1378,
    "name": "마가렛, 쿠자 해적단의 야망",
    "captain": "Boosts ATK and RCV of Slasher and Shooter characters by 1.75x",
    "special": "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 턴",
    "sailor": "Boosts amount healed from [RCV] orbs by 125 each",
    "specialName": "Sincere Devotion"
  },
  {
    "no": 1379,
    "name": "샹크스, 빨강 머리 해적단의 선장",
    "captain": "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2x",
    "special": "Reduces Paralysis duration by 3 턴. For Cerebral and Free Spirit characters, amplifies the effects of orbs by 2x for 1 턴. Makes [RCV] and [TND] orbs \"beneficial\" to Cerebral and Free Spirit characters for 1 턴.",
    "specialName": "A Decision Made over Sake",
    "specialNotes": "#{orb : 2x}"
  },
  {
    "no": 1380,
    "name": "'빨강 머리' 샹크스, 빨강 머리 해적단의 선장",
    "captain": "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2.5x",
    "special": "Reduces Paralysis duration by 3 턴. For Cerebral and Free Spirit characters, amplifies the effects of orbs by 2x for 1 턴. Makes [RCV] and [TND] orbs \"beneficial\" to Cerebral and Free Spirit characters for 1 턴.",
    "specialName": "A Decision Made over Sake",
    "specialNotes": "#{orb : 2x}"
  },
  {
    "no": 1381,
    "name": "타시기, 고요한 밤의 별",
    "captain": "Boosts ATK and RCV of Slasher and Cerebral characters by 1.2x",
    "special": "Reduces Silence duration by 1 턴, and recovers 12,240 HP",
    "specialNotes": "#{silence}",
    "specialName": "Strawberry Smile"
  },
  {
    "no": 1382,
    "name": "타시기, 거룩한 밤의 주인공",
    "captain": "Boosts ATK and RCV of Slasher and Cerebral characters by 1.75x",
    "special": "Reduces Silence duration by 1 턴, and recovers 12,240 HP",
    "specialNotes": "#{silence}",
    "specialName": "Strawberry Smile"
  },
  {
    "no": 1383,
    "name": "장난감 병정",
    "captain": "Boosts ATK of Striker characters by 2x. Increases damage received by 1.5x",
    "special": "Reduces Paralysis, Bind, Despair, and Silence duration by 1 턴. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
    "specialNotes": "#{silence}",
    "specialName": "Angry Extermination of Bugs"
  },
  {
    "no": 1384,
    "name": "장난감 병정, 번개병",
    "captain": "Boosts ATK of Striker characters by 2.5x. Increases damage received by 1.5x",
    "special": "Reduces Paralysis, Bind, Despair, and Silence duration by 1 턴. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
    "specialNotes": "#{silence}",
    "specialName": "Angry Extermination of Bugs"
  },
  {
    "no": 1385,
    "name": "레베카, 사랑남은 옛 왕가의 피",
    "captain": "Reduces damage received by 20%",
    "special": "Removes blindness",
    "specialName": "Mother's Promise"
  },
  {
    "no": 1386,
    "name": "레베카, 표적이 되는 옛 왕가의 피",
    "captain": "Reduces damage received by 25%",
    "special": "Removes blindness",
    "specialName": "Mother's Promise"
  },
  {
    "no": 1387,
    "name": "몽키 D. 루피, 고무고무 엘리펀트 건",
    "captain": "일당의 공격력을 2.25배, 체력을 1.25배, 4연속 PERFECT를 달성하면 이후 캐릭터의 공격력이 1.25배 더 상승한다.",
    "special": "적 전체에게 공격력x40배의 STR데미지를 주고, 공격을 1턴 지연시킨다.",
    "specialName": "고무고무 : 엘레펀트 건",
    "limit": [
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 강화 : 30"
      },
      {
        "description": "회복력 강화 : 20"
      },
      {
        "description": "잠재능력 습득 1: 격분"
      },
      {
        "description": "체력강화 : 30"
      },
      {
        "description": "회복력 강화 : 30"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 강화 : 40"
      },
      {
        "description": "체력 강화 : 50"
      },
      {
        "description": "선원효과 추가 1: 자신이 마지막으로 공격할 때 자신의 기본 공격력이 100증가한다."
      },
      {
        "description": "체력강화 : 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "선원효과 추가 2: [QCK] 슬롯도 이로운 슬롯으로 만든다."
      },
      {
        "description": "잠재능력 습득 2: 회복 무효 상태 회복"
      }
    ],
    "potential": [
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
      }
    ]
  },
  {
    "no": 1388,
    "name": "롤로노아 조로, 액홍조: 얏코우도리",
    "captain": "Boosts ATK of [DEX] characters by 2.5x",
    "special": "Cuts the current HP of each enemy by 10%. Reduces special cooldown of [DEX] specials by 1 턴.",
    "specialName": "Ittoriyu: Unfortunate Port Bird",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1389,
    "name": "나미, 웨더 에그: 썬더 브리드 템포",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, Boosts ATK of [INT] characters by 2x and their RCV by 1.5x.",
    "special": "Deals 20x character's ATK in [INT] damage to all enemies. Amplifies the effect of orbs for [INT] characters by 1.75x for 1 턴",
    "specialName": "Weather Egg: Thunder Breed Tempo",
    "specialNotes": "#{orb : 1.75x}"
  },
  {
    "no": 1390,
    "name": "광대 버기, 버기 해적단 선장",
    "captain": "Boosts ATK of characters with cost 40 or less by 1.5x and boosts the HP and ATK of characters with cost 41 or greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
    "captainNotes": "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
    "special": "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 턴",
    "specialName": "Chop-Chop Clown Car"
  },
  {
    "no": 1391,
    "name": "캡틴 버기",
    "captain": "Boosts ATK of characters with cost 40 or less by 1.5x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
    "captainNotes": "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
    "special": "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 턴",
    "specialName": "Chop-Chop Clown Car"
  },
  {
    "no": 1392,
    "name": "센토마루, 샤본디 제도의 벽",
    "captain": "Boosts ATK of Striker characters by 2x and boosts the HP of [PSY] characters by 1.25x",
    "captainNotes": "A character with both classes will get both boosts",
    "special": "Deals 25x character's ATK in [PSY] damage to all enemies. If during that 턴 every unit scores a Perfect hit, boosts ATK of [PSY] characters by 1.75x in the following 턴.",
    "specialName": "Large Cutting Axe"
  },
  {
    "no": 1393,
    "name": "데마로 블랙",
    "captain": "Boosts ATK of characters with cost 30 or less by 2x",
    "special": "Boosts ATK of all characters by 1.1x, slightly boosts chances of getting matching orbs and amplifies the effect of orbs by 1.1x for 7 턴",
    "specialName": "Three Forked Tongue"
  },
  {
    "no": 1394,
    "name": "베이비 5, 신의 앞에서 나들이 옷",
    "captain": "Boosts ATK of [STR] and [QCK] characters by 1.5x and their RCV by 1.1x",
    "special": "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 턴",
    "specialName": "Nation's Ambition"
  },
  {
    "no": 1395,
    "name": "베이비 5, 어색한 기모노",
    "captain": "Boosts ATK of [STR] and [QCK] characters by 2.25x and their RCV by 1.2x",
    "special": "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 턴",
    "specialName": "Nation's Ambition"
  },
  {
    "no": 1396,
    "name": "타시기 샴블즈",
    "captain": "Boosts ATK of Driven characters by 1.75x and the HP of Striker Characters by 1.25x",
    "special": "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 턴",
    "specialName": "Surprise Jitte Onslaught",
    "specialNotes": "#{randomHits : 7}"
  },
  {
    "no": 1397,
    "name": "타시기 샴블즈, 7척 짓테",
    "captain": "Boosts ATK of Driven characters by 2x and the HP of Striker Characters by 1.5x",
    "special": "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 턴",
    "specialName": "Surprise Jitte Onslaught",
    "specialNotes": "#{randomHits : 7}"
  },
  {
    "no": 1398,
    "name": "스모커 샴블즈",
    "captain": "Boosts ATK of Slasher and Cerebral characters by 1.5x",
    "special": "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 턴",
    "specialName": "Out-of-Control White Smoke"
  },
  {
    "no": 1399,
    "name": "스모커 샴블즈, 가을비",
    "captain": "Boosts ATK of Slasher and Cerebral characters by 1.5x, reduces damage received by 15%",
    "special": "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 턴",
    "specialName": "Out-of-Control White Smoke"
  },
  {
    "no": 1400,
    "name": "글라디우스, 파열 인간",
    "captain": "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.3x",
    "captainNotes": "The bonus is cumulative. Shooter Driven characters get a 2.275x bonus.",
    "special": [
      {
        "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 턴 and boosts the Color Affinity of Shooter characters by 1.5x for 1 턴",
        "cooldown": [
          26,
          11
        ]
      },
      {
        "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 턴 and boosts the Color Affinity of Shooter characters by 1.75x for 1 턴",
        "cooldown": [
          33,
          18
        ]
      }
    ],
    "specialName": "Stonewall Punk",
    "specialNotes": "#{colorAffinity : 1.75}<br>#{stages}"
  },
  {
    "no": 1401,
    "name": "글라디우스, 피카군 간부",
    "captain": "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.5x",
    "captainNotes": "The bonus is cumulative. Shooter Driven characters get a 2.625x bonus.",
    "special": [
      {
        "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 턴 and boosts the Color Affinity of Shooter characters by 1.5x for 1 턴",
        "cooldown": [
          26,
          11
        ]
      },
      {
        "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 턴 and boosts the Color Affinity of Shooter characters by 1.75x for 1 턴",
        "cooldown": [
          33,
          18
        ]
      }
    ],
    "specialName": "Stonewall Punk",
    "specialNotes": "#{colorAffinity : 1.75}<br>#{stages}",
    "limit": [
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: "
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "필살기 턴 단축 : 2턴"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
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
      }
    ],
    "potentialNotes": "Enrage is activated when your crew took damage from your enemies in the previous 턴"
  },
  {
    "no": 1402,
    "name": "도르돈, 드럼섬 민간 호위 단장",
    "captain": "Boosts ATK of [PSY] and [QCK] characters by 2x",
    "special": [
      {
        "description": "Deals 3x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.3x for 1 턴",
        "cooldown": [
          14,
          4
        ]
      },
      {
        "description": "Deals 13x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 턴",
        "cooldown": [
          18,
          8
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Offense Battle Axe"
  },
  {
    "no": 1403,
    "name": "몽키 D. 루피, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 턴.",
    "captainNotes": "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
    "special": [
      {
        "description": "Deals 25x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 턴",
        "cooldown": [
          13,
          8
        ]
      },
      {
        "description": "Deals 60x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" for 3 턴",
        "cooldown": [
          18,
          13
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Gomu Gomu no Red Hawk"
  },
  {
    "no": 1404,
    "name": "몽키 D. 루피, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 턴.",
    "captainNotes": "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
    "special": [
      {
        "description": "Deals 25x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 턴",
        "cooldown": [
          13,
          8
        ]
      },
      {
        "description": "Deals 60x character's ATK in [QCK] damage to one enemy, and makes [QCK], [DEX], and [PSY] orbs \"beneficial\" for 3 턴",
        "cooldown": [
          18,
          13
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Gomu Gomu no Red Hawk"
  },
  {
    "no": 1405,
    "name": "우솝, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of Shooter characters by 1.75x, and their RCV by 1.25x",
    "special": "Deals 10 hits of 2,000 fixed damage to random enemies, and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 턴",
    "specialNotes": "#{randomHits : 10}",
    "specialName": "Assault Meteor Shower",
    "sailor": "When HP is below 30% at the start of the 턴, boosts ATK and RCV of Shooter characters by 100"
  },
  {
    "no": 1406,
    "name": "우솝, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of Shooter characters by 2.25x, and their RCV by 1.5x",
    "special": "Deals 10 hits of 2,000 fixed damage to random enemies, and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 턴",
    "specialNotes": "#{randomHits : 10}",
    "specialName": "Assault Meteor Shower",
    "sailor": "When HP is below 30% at the start of the 턴, boosts ATK and RCV of Shooter characters by 100"
  },
  {
    "no": 1407,
    "name": "니코 로빈, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of [DEX] and [PSY] characters by 1.75x and their RCV by 1.25x",
    "special": "Reduces Despair duration by 3 턴 and boosts ATK of [DEX] and [PSY] characters by 2x for 1 턴",
    "specialName": "Mil Fleur: Gigantesco Mano Stomp",
    "sailor": "Reduces Blindness duration by 3 턴"
  },
  {
    "no": 1408,
    "name": "니코 로빈, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of [DEX] and [PSY] characters by 2.25x and their RCV by 1.5x",
    "special": "Reduces Despair duration by 3 턴 and boosts ATK of [DEX] and [PSY] characters by 2x for 1 턴",
    "specialName": "Mil Fleur: Gigantesco Mano Stomp",
    "sailor": "Reduces Blindness duration by 3 턴"
  },
  {
    "no": 1409,
    "name": "브룩, 집결하는 밀짚모자 일당",
    "captain": "Protects from defeat as long as HP is above 50%",
    "captainNotes": "#{zombie}",
    "special": "Delays all enemies by 1 턴, and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 턴",
    "specialName": "Soul's Murder Soul: Soul Solid",
    "sailor": "Completely resists Paralysis on this character"
  },
  {
    "no": 1410,
    "name": "브룩, 신생 밀짚모자 일당",
    "captain": "Boosts chain multiplier by 2.5x. Protects from defeat as long as HP is above 50%",
    "captainNotes": "#{zombie}",
    "special": "Delays all enemies by 1 턴, and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 턴",
    "specialName": "Soul's Murder Soul: Soul Solid",
    "sailor": "Completely resists Paralysis on this character"
  },
  {
    "no": 1411,
    "name": "토니토니 쵸파: 워크 포인트, 집결하는 밀짚모자 일당",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x, reduces crew's RCV to 0",
    "special": "Reduce enemies Damage Reduction and Increased Defense duration by 3 턴 and deals 60x character's ATK in typeless damage to all enemies",
    "specialNotes": "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have, and Increased Defense is the blue shiled buff enemies have",
    "specialName": "Carving Hoof Palm: Coconut",
    "sailor": "If Chopper has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next 턴"
  },
  {
    "no": 1412,
    "name": "토니토니 쵸파: 몬스터 포인트, 신생 밀짚모자 일당",
    "captain": "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's RCV to 0",
    "special": "Reduce enemies Damage Reduction and Increased Defense duration by 3 턴 and deals 60x character's ATK in typeless damage to all enemies",
    "specialNotes": "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have, and Increased Defense is the blue shield buff enemies have",
    "specialName": "Carving Hoof Palm: Coconut",
    "sailor": "If Chopper has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next 턴"
  },
  {
    "no": 1413,
    "name": "흰수염: 사황",
    "captain": "Boosts ATK of all characters by 3x 전투 시작 시 체력이 30% 미만이면, 1.75x otherwise and boosts the HP of all characters by 1.2x",
    "special": "Cuts the current HP of each enemy by 30%, reduces special cooldown of all non-Captain specials by 1 턴, and randomizes non-matching orbs including [BLOCK] orbs.",
    "specialName": "Emperor's Pride"
  },
  {
    "no": 1414,
    "name": "상디, 요리를 만들고 휴식 중",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x",
    "special": "Changes own orb into [INT] and reduces Special Cooldown of Powerhouse characters by 1 턴.",
    "specialName": "Are you ready?",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1415,
    "name": "센고쿠, 지장",
    "captain": "Boosts ATK of characters with cost 30 or less by 1.5x",
    "special": "Reduces Special Cooldown of all characters with cost 30 or less by 1 턴 and boosts ATK of characters with cost 30 or less by 1.5x for 1 턴",
    "specialName": "Unshakeable Resolution of the Wise Master"
  },
  {
    "no": 1416,
    "name": "부처님 센고쿠, 지장",
    "captain": "Boosts ATK of characters with cost 30 or less by 2.25x and their HP by 1.2x",
    "special": "Reduces Special Cooldown of all characters with cost 30 or less by 1 턴 and boosts ATK of characters with cost 30 or less by 1.5x for 1 턴",
    "specialName": "Unshakeable Resolution of the Wise Master"
  },
  {
    "no": 1417,
    "name": "론즈",
    "captain": "Boosts ATK and HP of [STR] characters by 1.5x",
    "special": "Cuts the current HP of all enemies by 10%, changes [BLOCK] orbs into [STR] orbs for Slasher characters",
    "specialName": "Raid Battle-Axe: One Flash"
  },
  {
    "no": 1418,
    "name": "카이젤수염",
    "captain": "Boosts ATK and RCV of INT characters by 1.5x",
    "special": "Reduces any damage received above 5,000 HP by 99% for 1 턴",
    "specialName": "Defence of the Command Line"
  },
  {
    "no": 1419,
    "name": "로브 루치, 몬츠키하카마의 손짓",
    "captain": "Boosts ATK of Powerhouse characters by 2x, reduce damage received by 10%",
    "special": "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 턴",
    "specialName": "Demonic Style"
  },
  {
    "no": 1420,
    "name": "로브 루치, 하부타에의 타짐",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x, reduce damage received by 10%",
    "special": "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 턴",
    "specialName": "Demonic Style"
  },
  {
    "no": 1421,
    "name": "디아만테, 펄럭이는 깃발 인간",
    "captain": "Boosts ATK of Driven characters by 2x",
    "special": "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 턴, 1.5x otherwise",
    "specialName": "Half Moon Glaive"
  },
  {
    "no": 1422,
    "name": "디아만테, 돈키호테 패밀리 간부",
    "captain": "Boosts ATK of Driven characters by 2.25x and boosts HP of Striker and Slasher characters by 1.5x",
    "special": "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 턴, 1.5x otherwise",
    "specialName": "Half Moon Glaive"
  },
  {
    "no": 1423,
    "name": "T-본, 해군본부 대령",
    "captain": "Boosts ATK of the whole crew by 1.75x and recovers 918 HP at end of each 턴,",
    "special": "If HP is below 500, reduces damage received by 99% for 1 턴",
    "specialName": "For the Sake of Justice"
  },
  {
    "no": 1424,
    "name": "깅, 해적 함대 전투 '총대장'",
    "captain": "Boosts ATK of Striker characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : higher : 1 + 1.25 * (remaining HP) / (total HP) : 2.25 : 1}",
    "special": "Deals 500 fixed damage to all enemies and reduces Special Cooldown of Striker characters by 1 턴.",
    "specialName": "General Commander's Fight"
  },
  {
    "no": 1425,
    "name": "돈 사이, 팔보수군",
    "captain": "Boosts ATK of Fighter and Striker characters by 1.75x",
    "special": "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 턴",
    "specialName": "Military Leg Heel"
  },
  {
    "no": 1426,
    "name": "돈 사이, 팔보수군의 13대 두목",
    "captain": "Boosts ATK of Fighter and Striker characters by 2x and their HP by 1.25x",
    "special": "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 턴",
    "specialName": "Military Leg Heel"
  },
  {
    "no": 1427,
    "name": "부, 팔보수군",
    "captain": "Boosts ATK of QCK characters by 2x",
    "special": "Deals 15x character's ATK in QCK damage to one enemy that will ignore damage negating abilities and barriers.",
    "specialNotes": "#{ignoreBarrier}",
    "specialName": "Unblockable Eight Fists"
  },
  {
    "no": 1428,
    "name": "쟝 안고",
    "captain": "Boosts amount of Beli received by 1.5x, and gives chance of duplicating a drop upon completion of the island",
    "captainNotes": "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
    "special": "If the enemy is delayed at the time the special is activated, reduces Special Cooldown of all characters by 1 턴 and boosts own attack by 1.75x for 1 턴",
    "specialName": "Looting the Losers"
  },
  {
    "no": 1429,
    "name": "맨셸리, 2월의 진심",
    "captain": "Boosts the RCV of Striker and Free Spirit characters by 1.5x",
    "special": "Reduces Bind, Despair, and Paralysis duration by 3 턴 and recovers 2000 HP at the end of each 턴 for 3 턴",
    "specialName": "Boy's Unknown Taste of Hard Work"
  },
  {
    "no": 1430,
    "name": "맨셸리, 3월의 용기",
    "captain": "Boosts the RCV of Striker and Free Spirit characters by 2x",
    "special": "Reduces Bind, Despair, and Paralysis duration by 3 턴 and recovers 2000 HP at the end of each 턴 for 3 턴",
    "specialName": "Boy's Unknown Taste of Hard Work"
  },
  {
    "no": 1431,
    "name": "프랑키 장군",
    "captain": "Boosts ATK of all characters by 2x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew, and boosts their HP by 1.2x if there's a Fighter, Slasher, Shooter, Driven, Free Spirit, and Powerhouse character in your crew",
    "special": "Deals 100x character's ATK in typeless damage to all enemies, remove enemies' ATK Up, Enrage, End of 턴 Damage/Percent Cut, and End of 턴 Heal Buffs, and boosts ATK of all characters by 1.5x for 1 턴",
    "specialName": "General Cannon"
  },
  {
    "no": 1432,
    "name": "프랑키 장군, 철의 해적(아이언 파이레츠)",
    "captain": "Boosts ATK of all characters by 2.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew, and boosts their HP by 1.5x if there's a Fighter, Slasher, Shooter, Driven, Free Spirit, and Powerhouse character in your crew",
    "special": "Deals 100x character's ATK in typeless damage to all enemies, remove enemies' ATK Up, Enrage, End of 턴 Damage/Percent Cut, and End of 턴 Heal Buffs, and boosts ATK of all characters by 1.5x for 1 턴",
    "specialName": "General Cannon"
  },
  {
    "no": 1433,
    "name": "호디 존스, 신 어인 해적단 선장",
    "captain": "Reduces cooldown of Powerhouse specials by 1 턴 at the start of the fight, reduces crew's current HP by 10% at the end of each 턴, and boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
    "captainNotes": "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x, and with 1 the boost is 1.1x.",
    "special": [
      {
        "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 턴, reduces damage received by 60% for 1 턴",
        "cooldown": [
          12,
          7
        ]
      },
      {
        "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 턴, reduces damage received by 90% for 1 턴",
        "cooldown": [
          22,
          17
        ]
      }
    ],
    "specialNotes": "#{ignoreBarrier}<br>#{stages}",
    "specialName": "Water Bullets"
  },
  {
    "no": 1434,
    "name": "호디 존스, 어인구역의 망령",
    "captain": "Reduces cooldown of Powerhouse specials by 1 턴 at the start of the fight, reduces crew's current HP by 10% at the end of each 턴, and boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
    "captainNotes": "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x, and with 1 the boost is 1.1x.",
    "special": [
      {
        "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 턴, reduces damage received by 60% for 1 턴",
        "cooldown": [
          12,
          7
        ]
      },
      {
        "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 턴, reduces damage received by 90% for 1 턴",
        "cooldown": [
          22,
          17
        ]
      }
    ],
    "specialNotes": "#{ignoreBarrier}<br>#{stages}",
    "specialName": "Water Bullets"
  },
  {
    "no": 1435,
    "name": "효조, 신 어인 해적단",
    "captain": "Boosts ATK of Slasher characters by 2x and HP of Powerhouse characters by 1.2x",
    "special": "Makes Perfects harder to hit for 1 턴, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 턴, recovers 20% of crew's MAX HP.",
    "specialName": "Staggering Slash",
    "specialNotes": "Decreases timing window to hit a Perfect. (Animation remains the same)",
    "sailor": "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew"
  },
  {
    "no": 1436,
    "name": "효조, 어인구역의 망령",
    "captain": "Boosts ATK of Slasher characters by 2.5x and HP of Powerhouse characters by 1.25x",
    "special": "Makes Perfects harder to hit for 1 턴, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 턴, recovers 20% of crew's MAX HP.",
    "specialName": "Staggering Slash",
    "specialNotes": "Decreases timing window to hit a Perfect. (Animation remains the same)",
    "sailor": "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew"
  },
  {
    "no": 1437,
    "name": "이카로스 뭇히, 신 어인 해적단",
    "captain": "Boosts ATK of Powerhouse and Striker characters by 1.3x",
    "captainNotes": "The bonus is cumulative. Powerhouse + Striker characters get a 1.69x bonus.",
    "special": "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 턴",
    "specialName": "Squid Spear",
    "sailor": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew"
  },
  {
    "no": 1438,
    "name": "이카로스 뭇히, 어인구역의 망령",
    "captain": "Boosts ATK of Powerhouse and Striker characters by 1.6x",
    "captainNotes": "The bonus is cumulative. Powerhouse + Striker characters get a 2.56x bonus.",
    "special": "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 턴",
    "specialName": "Squid Spear",
    "sailor": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew"
  },
  {
    "no": 1439,
    "name": "다루마, 신 어인 해적단",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.2x",
    "special": "Reduces Paralysis and Silence duration by 2 턴, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 턴",
    "specialNotes": "#{silence}",
    "specialName": "Fire Daruma Cutter",
    "sailor": "Completely resists Silence on this character",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1440,
    "name": "다루마, 어인구역의 망령",
    "captain": "Reduces cooldown of all specials by 4 턴 at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.5x",
    "special": "Reduces Paralysis and Silence duration by 2 턴, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 턴",
    "specialNotes": "#{silence}",
    "specialName": "Fire Daruma Cutter",
    "sailor": "Completely resists Silence on this character",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1441,
    "name": "제오, 신 어인 해적단",
    "captain": "Boosts ATK of [INT] characters by 1.5x, and reduces damage received by 10%",
    "special": "Makes Perfects easier to hit, locks all orbs, and locks the chain multiplier at 2.5x for 1 턴",
    "specialNotes": "Increases timing window to hit a Perfect. (Animation remains the same)",
    "specialName": "Flail Hidden From God",
    "sailor": "Completely resists Blindness if your Captain is a Powerhouse character"
  },
  {
    "no": 1442,
    "name": "제오, 어인구역의 망령",
    "captain": "Boosts ATK of [INT] characters by 2.25x and reduces damage received by 20%",
    "special": "Makes Perfects easier to hit, locks all orbs, and locks the chain multiplier at 2.5x for 1 턴",
    "specialNotes": "Increases timing window to hit a Perfect. (Animation remains the same)",
    "specialName": "Flail Hidden From God",
    "sailor": "Completely resists Blindness if your Captain is a Powerhouse character"
  },
  {
    "no": 1443,
    "name": "도슨, 신 어인 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2.75x following a chain of Good > Great > Perfect hits",
    "special": "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Papara Hammer",
    "sailor": "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew"
  },
  {
    "no": 1444,
    "name": "도슨, 어인구역의 망령",
    "captain": "Boosts ATK of Powerhouse characters by 3.25x following a chain of Good > Great > Perfect hits",
    "special": "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Papara Hammer",
    "sailor": "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew"
  },
  {
    "no": 1445,
    "name": "보아 행콕: 뱀 공주",
    "captain": "Boosts ATK of [QCK] and [PSY] characters proportionally to the crew's current HP. If HP is below 50%, Boosts RCV of [QCK] and [PSY] units by 1.5x.",
    "special": "Boosts ATK and RCV of [QCK] and [PSY] characters by 1.75x for 1 턴, and delays all enemies for 1 턴. Changes your Captain orb to [RCV]. If HP is above 50%, changes left column into Matching orbs.",
    "specialName": "Perfume Femur",
    "captainNotes": "#{captainProportional : higher : 2.25 + 0.5 * (remaining HP) / (total HP) : 2.75 : 2.25}"
  },
  {
    "no": 1446,
    "name": "우솝, '플라타너스' 수리검",
    "captain": "Boosts ATK of Shooter characters by 2x and RCV of Shooter characters by 1.25x.",
    "special": "Deals random PSY damage to all enemies and delays enemies by 3 턴.",
    "specialName": "Green Star: Platanus Shuriken"
  },
  {
    "no": 1447,
    "name": "상디, 그릴 샷",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x and reduces damage take by 10%.",
    "special": [
      {
        "description": "Deals 5,000 fixed damage to all enemies and boosts own ATK by 1.2x for 1 턴.",
        "cooldown": [
          15,
          10
        ]
      },
      {
        "description": "Deals 50,000 fixed damage to all enemies and boosts own ATK by 1.5x for 1 턴.",
        "cooldown": [
          20,
          15
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Grill Shot"
  },
  {
    "no": 1448,
    "name": "토니토니 쵸파, 헤비 공",
    "captain": "Boosts ATK of Fighter characters by 2.5x.",
    "special": "Deals PSY damage according to HP. Changes [BLOCK] orbs on Fighter characters into matching.",
    "specialNotes": "The exact damage is proportional to the crew's remaining HP and is higher the higher the HP is. The formula used is ???? * (current HP) / (total HP)",
    "specialName": "Weight Gain: Heavy Gong"
  },
  {
    "no": 1449,
    "name": "바이올렛, 춤추는 아가씨",
    "captain": "Boosts ATK of Cerebral characters by 1.5x. Heals for .3x character's RCV at the end of the 턴 each time you hit a Great.",
    "special": "Reduces the defense of all enemies by 50% for 1 턴, and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
    "specialName": "Clairvoyance"
  },
  {
    "no": 1450,
    "name": "바이올렛, 쫓기는 여자",
    "captain": "Boosts ATK of Cerebral characters by 1.75x. Heals for .5x character's RCV at the end of the 턴 each time you hit a Great.",
    "special": "Reduces the defense of all enemies by 50% for 1 턴, and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
    "specialName": "Clairvoyance"
  },
  {
    "no": 1451,
    "name": "상디, 연인 거리의 변장한 남자",
    "captain": "Boosts ATK of [DEX] characters by 2.25x if they have a matching orb, by 1.5x otherwise. Slightly boosts chances of getting [DEX] orbs",
    "special": "Deals 15x character's ATK in DEX damage to one enemy, and boosts chances of getting DEX orbs for 2 턴",
    "specialName": "Diable Jambe: Love Shot"
  },
  {
    "no": 1452,
    "name": "상디, 이웃 마을까지 호위",
    "captain": "Boosts ATK of [DEX] characters by 2.5x if they have a matching orb, by 2x otherwise. Slightly boosts chances of getting [DEX] orbs",
    "special": "Deals 15x character's ATK in DEX damage to one enemy, and boosts chances of getting DEX orbs for 2 턴",
    "specialName": "Diable Jambe: Love Shot"
  },
  {
    "no": 1453,
    "name": "마가렛, 13일의 두근거림",
    "captain": "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.5x",
    "special": "Changes all orbs depending on the current HP",
    "specialNotes": "<br> HP>70%: Top row to [QCK], middle row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
    "specialName": "Doki Doki Heart"
  },
  {
    "no": 1454,
    "name": "마가렛, 14일의 기념일",
    "captain": "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x and their RCV by 1.5x",
    "special": "Changes all orbs depending on the current HP",
    "specialNotes": "<br> HP>70%: Top row to [QCK], middle row to [DEX], bottom row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
    "specialName": "Doki Doki Heart"
  },
  {
    "no": 1455,
    "name": "수령 칭자오, 팔보수군",
    "captain": "Boosts ATK of Driven characters by 2.5x until the first hit other than Perfect and recovers 120 HP at end of each 턴",
    "special": [
      {
        "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 턴",
        "cooldown": [
          25,
          10
        ]
      },
      {
        "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 턴",
        "cooldown": [
          30,
          15
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Legend told to the Grandchild"
  },
  {
    "no": 1456,
    "name": "수령 칭자오, 전 팔보수군의 12대 두목",
    "captain": "Boosts ATK of Powerhouse characters by 2.75x until the first hit other than Perfect and recovers 120 HP at end of each 턴",
    "special": [
      {
        "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 턴",
        "cooldown": [
          25,
          10
        ]
      },
      {
        "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 턴",
        "cooldown": [
          30,
          15
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Legend told to the Grandchild"
  },
  {
    "no": 1457,
    "name": "클래하들 집사",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of [QCK] and [INT] characters by 1.75x",
    "special": "Reduces Bind and Despair duration by 2 턴, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
    "specialName": "Pussyfoot Maneuver"
  },
  {
    "no": 1458,
    "name": "백계의 크로 해적",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of [QCK] and [INT] characters by 2x",
    "special": "Reduces Bind and Despair duration by 2 턴, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
    "specialName": "Pussyfoot Maneuver"
  },
  {
    "no": 1459,
    "name": "미스 발렌타인, 킬로킬로 열매의 능력자",
    "captain": "Boosts ATK by 1.75x following a chain of Good > Good > Great > Perfect hits",
    "special": "Binds self for 2 턴, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 턴.",
    "specialName": "Crescendo Stone"
  },
  {
    "no": 1460,
    "name": "미스 발렌타인, 바로크 워크스 오피서 에이전트",
    "captain": "Boosts ATK by 2.14x following a chain of Good > Good > Great > Perfect hits",
    "special": "Binds self for 2 턴, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 턴.",
    "specialName": "Crescendo Stone"
  },
  {
    "no": 1461,
    "name": "조로, 혹한 훈련",
    "captain": "Boosts ATK of [QCK] characters by 2x at the start of the chain, by 2.6x after the 3rd Perfect in a row.",
    "special": "Deals 11x character's ATK in [QCK] damage to one enemy, boosts ATK of [QCK] characters by 1.5x for 1 턴",
    "specialName": "Demoltion: Ice Crush"
  },
  {
    "no": 1462,
    "name": "루피의 브레이크 타임",
    "captain": "Boosts chain multiplier by 2x",
    "special": "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20%, and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 턴",
    "sailor": "Reduces Paralysis for 2 턴 for himself",
    "specialName": "Gum-Gum Gigant Axe - Sweets"
  },
  {
    "no": 1463,
    "name": "루피의 티 파티",
    "captain": "Boosts chain multiplier by 2.5x, recovers 1.5x character's RCV in HP at the end of each 턴",
    "special": "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20%, and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 턴",
    "sailor": "Reduces Paralysis for 2 턴 for himself",
    "specialName": "Gum-Gum Gigant Axe - Sweets"
  },
  {
    "no": 1464,
    "name": "쵸파의 브레이크 타임",
    "captain": "Protects from defeat as long as HP is above 50%",
    "captainNotes": "#{zombie}",
    "special": "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 턴",
    "sailor": "Boosts amount healed from [RCV] orbs by 100 each",
    "specialName": "Devoted Healing - \"Instant Recovery\""
  },
  {
    "no": 1465,
    "name": "쵸파의 티 파티",
    "captain": "Boosts ATK and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
    "captainNotes": "#{zombie}",
    "special": "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 턴",
    "sailor": "Boosts amount healed from [RCV] orbs by 100 each",
    "specialName": "Devoted Healing - \"Instant Recovery\""
  },
  {
    "no": 1466,
    "name": "캐번디시, 하얀 날의 잘생긴 남자",
    "captain": "Boosts ATK of [QCK] and [PSY] characters by 2x",
    "special": "Reduces the defense of all enemies by 100% for 1 턴 and changes own orb into [PSY] and friend captain's orb into [STR]",
    "specialName": "Rosy Pleasure"
  },
  {
    "no": 1467,
    "name": "캐번디시, 하얀 날의 백일몽",
    "captain": "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.3x",
    "special": "Reduces the defense of all enemies by 100% for 1 턴 and changes own orb into [PSY] and friend captain's orb into [STR]",
    "specialName": "Rosy Pleasure"
  },
  {
    "no": 1468,
    "name": "센토마루, 해군",
    "captain": "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
    "captainNotes": "Captain ability stacks, so a [STR] Powerhouse character benefits from both parts",
    "special": "Delays all enemies for 1 턴. Changes own orb into Matching orb",
    "specialName": "Warning of the New World"
  },
  {
    "no": 1469,
    "name": "도끼의 센토마루, 해군",
    "captain": "Boosts ATK of [STR] characters by 2x and the HP of Powerhouse characters by 1.25x",
    "captainNotes": "Captain ability stacks, so a [STR] Powerhouse character benefits from both parts",
    "special": "Delays all enemies for 1 턴. Changes own orb into Matching orb",
    "specialName": "Warning of the New World"
  },
  {
    "no": 1470,
    "name": "립 '서비스' 두티",
    "captain": "Boosts ATK of Slasher and Powerhouse characters by 1.5x, but boost his OWN ATK by 3x",
    "captainNotes": "Captain ability does not stack with itself (Will not boost another Doughty by 3x)",
    "special": "Deals 8x character's ATK as [STR] damage to one enemy. Changes captain orb into [RCV]",
    "specialName": "Meat Grinder Blade"
  },
  {
    "no": 1471,
    "name": "'깊은 상처' 알비온",
    "captain": "Boosts ATK of Slasher and Driven characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : lower : 1 + 1 * (1 - (remaining HP) / (total HP)) : 1 : 2}",
    "special": "Reduces crew's HP by 90%, deals 1x the removed HP as damage to all enemies.",
    "specialName": "Deep Claw Stab"
  },
  {
    "no": 1472,
    "name": "시라호시 공주",
    "captain": "Boosts ATK of all characters by 2.25x, but boosts her OWN attack by 1.125x, recovers 5x character's RCV in HP at the end of each 턴 and if you don't attack with her, reduces damage received by 10% for that 턴.",
    "special": [
      {
        "description": "Changes adjacent orbs, including [BLOCK] orbs, into [RAINBOW] orbs, recovers 9x character's RCV in HP.",
        "cooldown": [
          13,
          9
        ]
      },
      {
        "description": "Changes all orbs, including [BLOCK] orbs, into [RAINBOW] orbs, recovers 100x character's RCV in HP.",
        "cooldown": [
          22,
          18
        ]
      }
    ],
    "specialNotes": "Rainbow orbs are the beneficial form of [BLOCK] orbs. They can not be shuffled by you or your opponent. They count as beneficial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
    "sailor": "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
    "specialName": "Tears of Courage"
  },
  {
    "no": 1473,
    "name": "시라호시 공주, 용궁 왕국 공주",
    "captain": "Boosts ATK of all characters by 2.25x, but boosts her OWN attack by 1.125x, recovers 5x character's RCV in HP at the end of each 턴 and if you don't attack with her, reduces damage received by 10% for that 턴.",
    "special": [
      {
        "description": "Changes adjacent orbs, including [BLOCK] orbs into [RAINBOW] orbs, recovers 9x character's RCV in HP.",
        "cooldown": [
          13,
          9
        ]
      },
      {
        "description": "Changes all orbs, including [BLOCK] orbs into [RAINBOW] orbs, recovers 100x character's RCV in HP.",
        "cooldown": [
          22,
          18
        ]
      }
    ],
    "specialNotes": "Rainbow orbs are the benefittial form of [BLOCK] orbs. They can not be shuffled or swapped by you or your opponent. They count as benefittial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
    "sailor": "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
    "specialName": "Tears of Courage"
  },
  {
    "no": 1474,
    "name": "넵튠",
    "captain": "일당의 공격력을 2.25배로 만들고, 획득하는 해적 EXP가 1.4배가 된다.(획득 해적 EXP증가 효과는 뫃머 도중 선장이 된 경우에는 발휘 되지 않음)",
    "special": "일당의 슬롯을 1턴 고정하며, 최대 HP가 가장 높은 적의 HP가 50% 이상일 때는 적 전체의 HP를 20% 줄이고, HP가 50% 미만일 때는 적 전체에 공격력x139배의 무 속성 데미지를 준다.",
    "sailor": "PSY,INT과 TND도 이로운 슬롯으로 취급한다..",
    "specialName": "머맨 컴배트 울트라 마린"
  },
  {
    "no": 1475,
    "name": "넵튠, 용궁 왕국 국왕",
    "captain": "일당의 공격력을 2.25배로 만들고, 획득하는 해적 EXP가 1.5배가 된다.(획득 해적 EXP증가 효과는 뫃머 도중 선장이 된 경우에는 발휘 되지 않음)",
    "special": "일당의 슬롯을 1턴 고정하며, 최대 HP가 가장 높은 적의 HP가 50% 이상일 때는 적 전체의 HP를 20% 줄이고, HP가 50% 미만일 때는 적 전체에 공격력x140배의 무 속성 데미지를 준다.",
    "sailor": "PSY,INT과 TND도 이로운 슬롯으로 취급한다..",
    "specialName": "머맨 컴배트 울트라 마린"
  },
  {
    "no": 1476,
    "name": "후카보시",
    "captain": "Boosts ATK of Striker characters by 2x",
    "special": "Delays all enemies by 1 턴, and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 턴",
    "sailor": "Boosts base HP, RCV and ATK of all characters by 50",
    "specialName": "Merman Gujutsu - Spear of the Ages"
  },
  {
    "no": 1477,
    "name": "후카보시, 용궁 왕국 왕자",
    "captain": "Boosts ATK of Striker characters by 2.5x and boosts HP of Powerhouse characters by 1.25x",
    "captainNotes": "This effect does stack for characters that have both classes, so Striker/Powerhouse characters will have 2.5x ATK and 1.25x HP",
    "special": "Delays all enemies by 1 턴, and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 턴",
    "sailor": "Boosts base HP, RCV and ATK of all characters by 50",
    "specialName": "Merman Gujutsu - Spear of the Ages"
  },
  {
    "no": 1478,
    "name": "카리브, 카리브 해적단 선장",
    "captain": "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 1.75x after the 22nd hit, by 2x after the 33th hit, by 3x after the 44th hit",
    "special": "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 턴",
    "specialNotes": "#{randomHits : 15}",
    "sailor": "Completely resists Paralysis on this character",
    "specialName": "Swamp-Swamp Gatling Gun"
  },
  {
    "no": 1479,
    "name": "적은 머리 카리브, 카리브 해적단 선장",
    "captain": "Boosts ATK of all characters by 1.75x after the 11th hit in the chain, by 2.5x after the 22nd hit, by 2.75x after the 33th hit, by 3.5x after the 44th hit",
    "special": "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 턴",
    "specialNotes": "#{randomHits : 15}",
    "sailor": "Completely resists Paralysis on this character",
    "specialName": "Swamp-Swamp Gatling Gun",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : "
      },
      {
        "description": "선원효과 추가 #: "
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "회복력 상승 : 40"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
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
      }
    ],
    "potentialNotes": "Enrage is activated when your crew took damage from your enemies in the previous 턴"
  },
  {
    "no": 1480,
    "name": "반더 덱켄 IX, 유령선의 주인",
    "captain": "Boosts ATK by 2.5x after scoring 2 Perfects in a row",
    "special": "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 턴",
    "specialNotes": "#{ignoreBarrier}<br>#{silence}",
    "sailor": "Restores his own special by 1 턴 when it is rewinded and reduces Silence for 3 턴 for himself",
    "sailorNotes": "#{rewind : 1}<br>#{silence}",
    "specialName": "Stalking Rose Axe"
  },
  {
    "no": 1481,
    "name": "박더 덱켄 IX, 플라잉 해적단 선장",
    "captain": "Boosts ATK by 2.5x after the 2nd Perfect in a row and by 3.5x after the 5th Perfect in a row.",
    "special": "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 턴",
    "specialNotes": "#{ignoreBarrier}<br>#{silence}",
    "sailor": "Restores his own special by 1 턴 when it is rewinded and reduces Silence for 3 턴 for himself",
    "sailorNotes": "#{rewind : 1}<br>#{silence}",
    "specialName": "Stalking Rose Axe"
  },
  {
    "no": 1482,
    "name": "마담 셜리",
    "captain": "Boosts ATK of INT characters by 2x and their RCV by 1.2x",
    "special": "Randomizes all non-matching orbs, switches orbs between slots twice, and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
    "sailor": "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
    "specialName": "Foretold Catastrophe"
  },
  {
    "no": 1483,
    "name": "마담 셜리, 점술가",
    "captain": "Boosts ATK of INT characters by 2.5x and their RCV by 1.2x",
    "special": "Randomizes all non-matching orbs, switches orbs between slots twice, and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
    "sailor": "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
    "specialName": "Foretold Catastrophe"
  },
  {
    "no": 1484,
    "name": "상디, 야생의 해적",
    "captain": "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
    "special": "Locks the chain multiplier at 2.5x for 1 턴, reduces Bind duration by 5 턴",
    "sailor": "Changes all orbs into [RCV] orbs at the start of the fight.",
    "specialName": "Wild Shot"
  },
  {
    "no": 1485,
    "name": "상디, 대지의 개척자",
    "captain": "Boosts HP and RCV of all characters by 1.2x and boosts ATK by 3.25x after scoring 3 Perfects in a row",
    "special": "Locks the chain multiplier at 2.5x for 1 턴, reduces Bind duration by 5 턴",
    "sailor": "Changes all orbs into [RCV] orbs at the start of the fight.",
    "specialName": "Wild Shot"
  },
  {
    "no": 1486,
    "name": "이데오, XXX급 복서",
    "captain": "Boosts ATK of Fighter characters by 2.5x if they have a matching orb.",
    "special": "Increases damage received by 2x for 2 턴, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 턴",
    "specialNotes": "#{orb : 2x}",
    "specialName": "Destruction Cannon: Hidden Bullet"
  },
  {
    "no": 1487,
    "name": "파괴포 이데오, XXX급 복서",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of Fighter characters by 3x if they have a matching orb.",
    "special": "Increases damage received by 2x for 2 턴, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 턴",
    "specialNotes": "#{orb : 2x}",
    "specialName": "Destruction Cannon: Hidden Bullet"
  },
  {
    "no": 1488,
    "name": "수령 클리크, 클리크 해적 함대 '제독'",
    "captain": "Boosts ATK of Driven characters by 1.5x, reduces damage received by 20%",
    "special": "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
    "specialName": "Great Battle Spear"
  },
  {
    "no": 1489,
    "name": "수령 클리크, 이스트 블루의 패자",
    "captain": "Boosts ATK of Driven characters by 2x, reduces damage received by 20%",
    "special": "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
    "specialName": "Great Battle Spear"
  },
  {
    "no": 1490,
    "name": "Mr. 5, 폭탄 인간",
    "captain": "Boosts ATK by 1.75x following a chain of Good > Good > Great hits",
    "special": "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 턴, and reduces the defense of all enemies by 50% for one 턴.",
    "specialName": "Explosion Blocking Escape"
  },
  {
    "no": 1491,
    "name": "Mr. 5, 바로크 워크스 오피서 에이전트",
    "captain": "Boosts ATK by 2x following a chain of Good > Good > Great hits",
    "special": "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 턴, and reduces the defense of all enemies by 50% for one 턴.",
    "specialName": "Explosion Blocking Escape"
  },
  {
    "no": 1492,
    "name": "사보, 이글이글 열매의 능력자",
    "captain": "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters by 2.75x",
    "captainNotes": "HP and RCV boost are not known yet, but are assumed to be for anyone and is a 1.2x boost for both in the calculator.",
    "special": [
      {
        "description": "Boosts ATK of Free Spirit characters by 1.5x for 1 턴. If during that 턴 you score 5 Perfect hits, boosts ATK of Free Spirit characters by 2x in the following 턴.",
        "cooldown": [
          18,
          12
        ]
      },
      {
        "description": "Boosts ATK of Free Spirit characters by 1.75x for 1 턴. If during that 턴 you score 4 Perfect hits, boosts ATK of Free Spirit characters by 2x in the following 턴.",
        "cooldown": [
          23,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Reborn - Fire"
  },
  {
    "no": 1493,
    "name": "난폭한 가시 곤봉 부대, 어인 거리의 무법자",
    "captain": "Boosts ATK of [STR] characters by 1.5x",
    "special": "Deals 5 hits of random typeless damage to random enemies",
    "specialNotes": "#{randomHits : 5}",
    "specialName": "Random Light Blows"
  },
  {
    "no": 1494,
    "name": "빠른 가시 곤봉 부대, 어인 거리의 무법자",
    "captain": "Boosts ATK of [QCK] characters by 1.5x",
    "special": "Locks captain's orb for 1 턴",
    "specialName": "Captain Slot Hold: Light"
  },
  {
    "no": 1495,
    "name": "유능한 가시 곤봉 부대, 어인 거리의 무법자",
    "captain": "Boosts ATK of [DEX] characters by 1.5x",
    "special": "Reduces Silence duration by 1 턴",
    "specialNotes": "#{silence}",
    "specialName": "Special Seal Recovery: Light"
  },
  {
    "no": 1496,
    "name": "일발필중의 포격무대, 어인 거리의 무법자",
    "captain": "Boosts ATK of Powerhouse characters by 1.5x",
    "special": "Reduces Despair duration by 2 턴",
    "specialName": "Captain Soul Recovery"
  },
  {
    "no": 1497,
    "name": "일발입혼의 포격부대, 어인 거리의 무법자",
    "captain": "Boosts ATK of Shooter characters by 1.5x",
    "special": "Boosts own ATK by 1.5x for 1 턴",
    "specialName": "Light Attack Boost"
  },
  {
    "no": 1498,
    "name": "붉은 암모나이트, 튼튼한 경비대",
    "captain": "Boosts ATK, HP and RCV of [STR] characters by 1.2x",
    "special": "Changes Captain's orb into [STR]",
    "specialName": "Captain Slot Change - [STR]"
  },
  {
    "no": 1499,
    "name": "푸른 암모나이트, 민첩한 경비대",
    "captain": "Boosts ATK, HP and RCV of [QCK] characters by 1.2x",
    "special": "Changes Captain's [BLOCK] orbs into Matching orbs",
    "specialName": "Captain [BLOCK] Slot Change - Matching"
  },
  {
    "no": 1500,
    "name": "녹색 암모나이트, 영리한 경비대",
    "captain": "Boosts ATK, HP and RCV of [DEX] characters by 1.2x",
    "special": "Recovers 2000 HP",
    "specialName": "First Aid"
  },
  {
    "no": 1501,
    "name": "카리브",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of characters with cost 15 or less by 2x",
    "special": "Reduces crew's current HP by 50%, boosts ATK of all characters by 1.3x for 1 턴",
    "specialName": "Conviction of God's Will"
  },
  {
    "no": 1502,
    "name": "코리브",
    "captain": "Reduces damage received from [PSY] and [INT] enemies by 30%",
    "special": "For Driven characters, randomizes non-matching orbs",
    "specialName": "Confession Burial"
  },
  {
    "no": 1503,
    "name": "하몬드",
    "captain": "Boosts ATK of Powerhouse characters proportionally to the crew's current HP",
    "captainNotes": "#{captainProportional : lower : ??? + ??? * (1 - (remaining HP) / (total HP)) : ??? : 2.25}",
    "special": "Changes own orb into [QCK] and changes adjacent orbs into [EMPTY] orbs",
    "specialName": "Absurd Invitation"
  },
  {
    "no": 1504,
    "name": "반더 덱켄 IX",
    "captain": "Boosts ATK of Driven characters by 2x. After scoring 3 Perfects in a row, boosts ATK of Driven characters by 2.4x instead.",
    "special": "Changes the orbs in the middle row into [EMPTY] orbs and deals 20x character's ATK as [DEX] damage to all enemies at the end of the 턴 for 2 턴",
    "specialName": "Inescapable Pursuit"
  },
  {
    "no": 1505,
    "name": "호디 존스",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Powerhouse characters by 2.25x 전투 시작 시 체력이 30% 미만이면",
    "special": "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes Perfects harder to hit for 1 턴, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 턴.",
    "specialName": "Shark Arrows"
  },
  {
    "no": 1506,
    "name": "호디 존스, 각성",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of Powerhouse characters by 2.5x 전투 시작 시 체력이 30% 미만이면, 2.25x otherwise",
    "special": "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes Perfects harder to hit for 1 턴, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 턴.",
    "specialName": "Shark Arrows"
  },
  {
    "no": 1507,
    "name": "상디의 브레이크 타임",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
    "captainNotes": "Boosts stack, so a Fighter/Powerhouse character gets 1.69x ATK",
    "special": "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 턴",
    "sailor": "Boosts base ATK of all characters by 15",
    "specialName": "Diable Jambe - Concassé Baked"
  },
  {
    "no": 1508,
    "name": "상디의 티 파티",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.5x. Recovers 2x character's RCV in HP at the end of each 턴",
    "captainNotes": "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK",
    "special": "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 턴",
    "sailor": "Boosts base ATK of all characters by 15",
    "specialName": "Diable Jambe - Concassé Baked"
  },
  {
    "no": 1509,
    "name": "할타, 흰수염 해적단 12번대 대장",
    "captain": "Reduces cooldown of Slasher and Cerebral specials by 1 턴 at the start of the fight. Boosts ATK of [INT] characters by 2x.",
    "special": "Deals 12x character's ATK in INT damage to one enemy and reduces damage received from PSY enemies by 80%.",
    "specialName": "Honorable Blade",
    "sailor": "Reduces Silence duration against this unit by 2 턴",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1510,
    "name": "스피드 질, 흰수염 해적단 14번대 대장",
    "captain": "Boosts ATK of Driven and Striker characters by 2x",
    "special": "Deals 12,500 fixed damage to one enemy",
    "specialName": "Acceleration Lance",
    "sailor": "When HP is above 70% at the start of the 턴, boosts ATK of Striker characters by 20"
  },
  {
    "no": 1511,
    "name": "아트모스, 흰수염 해적단 13번대 대장",
    "captain": "Boosts ATK of PSY characters by 2x",
    "special": "Reduces Despair duration by 3 턴, boosts own ATK by 1.5x for 1 턴",
    "specialName": "Buffalo Roar",
    "sailor": "Boosts base ATK of Powerhouse characters by 20 if your captain is a Powerhouse character"
  },
  {
    "no": 1512,
    "name": "킹 듀, 흰수염 해적단 11번대 대장",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 2x",
    "special": "Removes Poison, boosts ATK of Powerhouse characters by 1.5x for 1 턴 if HP is below 30% when the special is activated",
    "specialName": "Enlightened Spirit",
    "sailor": "Makes [RCV] orbs \"beneficial\" for this unit if your captain is a Powerhouse character"
  },
  {
    "no": 1513,
    "name": "상디, 봄맞이 에스코트",
    "captain": "Boosts ATK of Fighter characters by 1.75x and RCV of Powerhouse characters by 1.2x",
    "special": "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 턴",
    "specialName": "Unfamiliar Escort"
  },
  {
    "no": 1514,
    "name": "상디, 기념일의 수제케이크",
    "captain": "Boosts ATK of Fighter characters by 2.5x and RCV of Powerhouse characters by 1.2x",
    "special": "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 턴",
    "specialName": "Unfamiliar Escort"
  },
  {
    "no": 1515,
    "name": "브룩의 브레이크 타임",
    "captain": "Boosts ATK of [STR] and [QCK] characters by 1.5x",
    "special": "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 턴",
    "specialName": "Three-Verse Humming: Arrow-Notch Slash - Hail",
    "sailor": "Makes [RCV] orbs \"beneficial\" for this unit"
  },
  {
    "no": 1516,
    "name": "브룩의 티 파티",
    "captain": "Boosts ATK of [STR] and [QCK] characters by 2x, recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 턴",
    "specialName": "Three-Verse Humming: Arrow-Notch Slash - Hail",
    "sailor": "Makes [RCV] orbs \"beneficial\" for this unit"
  },
  {
    "no": 1517,
    "name": "하이에나 베라미, 전 베라미 해적단 선장",
    "captain": "Boosts ATK of Driven characters by 2x",
    "special": "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 턴 and amplifies the effect of orbs by 1.75x for 1 턴",
    "specialName": "Spring Hopper - Bullet"
  },
  {
    "no": 1518,
    "name": "하이에나 베라미, 드레스로자의 흉탄",
    "captain": "Boosts ATK of Driven characters by 2.5x",
    "special": "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 턴 and amplifies the effect of orbs by 1.75x for 1 턴",
    "specialName": "Spring Hopper - Bullet"
  },
  {
    "no": 1519,
    "name": "컬리 다단, 코르보산 산적",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight. Boosts ATK of Slasher characters by 1.5x",
    "special": "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
    "specialName": "Break by the Fireplace"
  },
  {
    "no": 1520,
    "name": "컬리 다단, 다단 일당 두목",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight. Boosts ATK of Slasher characters by 2x",
    "special": "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
    "specialName": "Break by the Fireplace"
  },
  {
    "no": 1521,
    "name": "도구라",
    "captain": "Boosts ATK of [QCK] and Slasher characters by 1.2x",
    "captainNotes": "The bonus is cumulative. [QCK] Slasher characters get a 1.44x bonus.",
    "special": "Reduces Despair duration by 1 턴, recovers 1000 HP at the end of each 턴 for 2 턴",
    "specialName": "Affectionate Circumstances"
  },
  {
    "no": 1522,
    "name": "포트거스 D. 에이스, 숨겨진 악마의 자식",
    "captain": "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.2x",
    "special": "Removes blindness, boosts own ATK by 1.75x for 1 턴",
    "specialName": "Demon's Temper"
  },
  {
    "no": 1523,
    "name": "토니토니 쵸파, 플라스크 안의 커다란 꿈",
    "captain": "Boosts ATK of [PSY] characters by 1.75x and recovers 1,000 HP at end of each 턴",
    "special": "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
    "specialName": "The Life Risked for the 'Sakura' Miracle",
    "sailor": "Boosts amount healed from [RCV] orbs by 124 each"
  },
  {
    "no": 1524,
    "name": "토니토니 쵸파, 겨울섬에서 보는 봄의 경치",
    "captain": "Boosts ATK of [PSY] characters by 2.25x and recovers 1,224 HP at end of each 턴",
    "special": "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
    "specialName": "The Life Risked for the 'Sakura' Miracle",
    "sailor": "Boosts amount healed from [RCV] orbs by 124 each"
  },
  {
    "no": 1525,
    "name": "참수가 슐레이만, 해전 A급 전범",
    "captain": "Boosts ATK of Slasher characters by 3.25x, reduces his own ATK multiplier by 0.0625x at the end of each 턴 until it is 2x",
    "special": "Deals 3 hits of random typeless damage to random enemies, delays all enemies for 1 턴, boosts ATK against delayed enemies by 1.3x for 2 턴",
    "specialNotes": "#{randomHits : 3}<br>#{random : 50,000 : 150,000 : per hit}",
    "specialName": "Sorrowful Execution"
  },
  {
    "no": 1526,
    "name": "아론, 아론 해적단 선장",
    "captain": "Boosts ATK of [INT] characters by 1.75x",
    "special": [
      {
        "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.5x for 1 턴",
        "cooldown": [
          16,
          7
        ]
      },
      {
        "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.75x for 1 턴",
        "cooldown": [
          21,
          12
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Just 'Water Play'"
  },
  {
    "no": 1527,
    "name": "톱날의 아론, 아론 해적단 선장",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight. Boosts ATK of [INT] characters by 2x",
    "special": [
      {
        "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.5x for 1 턴",
        "cooldown": [
          16,
          7
        ]
      },
      {
        "description": "Reduces Special Cooldown of your top row by 1 턴, boosts ATK of the characters in the top row by 1.75x for 1 턴",
        "cooldown": [
          21,
          12
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Just 'Water Play'"
  },
  {
    "no": 1528,
    "name": "블렌하임, 흰수염 해적단 9번대 대장",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x",
    "special": "Reduces Despair duration by 2 턴, makes STR, DEX, and QCK orbs \"beneficial\" to Powerhouse characters for 1 턴 전투 시작 시 체력이 30% 미만이면",
    "sailor": "Makes [TND] orbs \"beneficial\" for this unit",
    "specialName": "Australian Army Aid Blade"
  },
  {
    "no": 1529,
    "name": "캐번디시, 아름다운 해적단 선장",
    "captain": "Boosts ATK of all characters by 1.5x, but boosts his OWN attack by 3x",
    "special": "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 턴, 2x otherwise",
    "sailor": "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
    "specialName": "Blue Bird Sword"
  },
  {
    "no": 1530,
    "name": "백마의 캐번디시, 아름다운 해적단 선장",
    "captain": "Boosts ATK of all characters by 1.75x, but boosts his OWN attack by 3.5x",
    "special": "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 턴, 2x otherwise",
    "sailor": "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
    "specialName": "Blue Bird Sword"
  },
  {
    "no": 1531,
    "name": "우소랜드",
    "captain": "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x 전투 시작 시 체력이 30% 미만이면. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to all characters.",
    "special": [
      {
        "description": "Delays all enemies for 3 턴",
        "cooldown": [
          13,
          10
        ]
      },
      {
        "description": "Delays all enemies for 4 턴, adds 0.2x to Chain multiplier for 4 턴",
        "cooldown": [
          18,
          15
        ]
      },
      {
        "description": "Delays all enemies for 5 턴, adds 0.3x to Chain multiplier for 4 턴",
        "cooldown": [
          24,
          21
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "sailor": "Completely resists Blindness",
    "specialName": "Long-Range Attack: Bagworm"
  },
  {
    "no": 1532,
    "name": "갓 우솝",
    "captain": "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x 전투 시작 시 체력이 30% 미만이면. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to all characters.",
    "special": [
      {
        "description": "Delays all enemies for 3 턴",
        "cooldown": [
          13,
          10
        ]
      },
      {
        "description": "Delays all enemies for 4 턴, adds 0.2x to Chain multiplier for 4 턴",
        "cooldown": [
          18,
          15
        ]
      },
      {
        "description": "Delays all enemies for 5 턴, adds 0.3x to Chain multiplier for 4 턴",
        "cooldown": [
          24,
          21
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "sailor": "Completely resists Blindness",
    "specialName": "Long-Range Attack: Bagworm",
    "limit": [
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Reduce No Healing duration"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "선원효과 추가 1: Boosts base HP of Shooter characters by 100"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 2: Critical Hit"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "잠재능력 습득 3: Barrier Penetration"
      }
    ],
    "potential": [
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
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
          "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
          "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
          "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
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
      }
    ]
  },
  {
    "no": 1533,
    "name": "레일리, 밀짚모자 일당의 협력자",
    "captain": "Boosts ATK of [QCK] characters by 2x and their HP by 1.2x at the start of the chain, by 2.5x after the 4th Perfect in a row.",
    "special": "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
    "sailor": "Makes [STR], [INT], and [DEX] orbs \"beneficial\" for this unit",
    "specialName": "The Teacher's Final Ordeal"
  },
  {
    "no": 1534,
    "name": "레일리, 밀짚모자 일당의 공범자",
    "captain": "Boosts ATK of [QCK] characters by 2.5x and their HP by 1.2x at the start of the chain, by 3x after the 4th Perfect in a row.",
    "special": "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
    "sailor": "Makes [STR], [INT], and [DEX] orbs \"beneficial\" for this unit",
    "specialName": "The Teacher's Final Ordeal"
  },
  {
    "no": 1535,
    "name": "듀발, 밀짚모자 일당의 협력자",
    "captain": "Reduces cooldown of all specials by 1 턴 at the start of the fight, boosts ATK of [PSY] characters by 2.5x if they have matching orbs",
    "special": "Reduces damage received by 50% for 1 턴, boosts ATK of PSY characters by 1.75x for 1 턴",
    "sailor": "Makes [INT] orbs \"beneficial\" for [PSY] characters",
    "specialName": "Prideful Memories"
  },
  {
    "no": 1536,
    "name": "듀발, 밀짚모자 일당의 공범자",
    "captain": "Reduces cooldown of all specials by 3 턴 at the start of the fight, boosts ATK of [PSY] characters by 3x if they have matching orbs",
    "special": "Reduces damage received by 50% for 1 턴, boosts ATK of PSY characters by 1.75x for 1 턴",
    "sailor": "Makes [INT] orbs \"beneficial\" for [PSY] characters",
    "specialName": "Prideful Memories"
  },
  {
    "no": 1537,
    "name": "헤라클레슨, 밀짚모자 일당의 협력자",
    "captain": "Boosts ATK of [STR] characters by 2x and boosts HP of Shooter and Striker characters by 1.2x",
    "special": "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
    "sailor": "Boosts base HP of STR characters by 150",
    "specialName": "Greenstone Threat"
  },
  {
    "no": 1538,
    "name": "헤라클레슨, 밀짚모자 일당의 공범자",
    "captain": "Boosts ATK of [STR] characters by 2.5x and boosts HP of Shooter and Striker characters by 1.25x",
    "special": "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
    "sailor": "Boosts base HP of STR characters by 150",
    "specialName": "Greenstone Threat"
  },
  {
    "no": 1539,
    "name": "페로나, 밀짚모자 일당의 협력자",
    "captain": "Boosts ATK and RCV of characters with cost 20 or less by 1.5x",
    "special": "Reduces damage received by 90% for 1 턴, reduces the defense of all enemies by 90% for 1 턴, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 턴",
    "sailor": "Boosts base ATK of INT characters by 50",
    "specialName": "Negative Hollow: You're All Rotten Imbeciles"
  },
  {
    "no": 1540,
    "name": "페로나, 밀짚모자 일당의 공범자",
    "captain": "Boosts ATK of characters with cost 30 or less by 2.25x and their RCV by 1.5x",
    "special": "Reduces damage received by 90% for 1 턴, reduces the defense of all enemies by 90% for 1 턴, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 턴",
    "sailor": "Boosts base ATK of INT characters by 50",
    "specialName": "Negative Hollow: You're All Rotten Imbeciles"
  },
  {
    "no": 1541,
    "name": "엘리자베스, 밀짚모자 일당의 협력자",
    "captain": "Boosts ATK by 2x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
    "special": "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier, and reduces the defense of all enemies by 100% for 1 턴",
    "sailor": "Restores her own special by 2 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 1}",
    "specialName": "Soft and Gentle Fluffy Kisses"
  },
  {
    "no": 1542,
    "name": "엘리자베스, 밀짚모자 일당의 공범자",
    "captain": "Boosts RCV and HP by 1.2x, boosts ATK by 2.5x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
    "special": "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier, and reduces the defense of all enemies by 100% for 1 턴",
    "sailor": "Restores her own special by 2 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 1}",
    "specialName": "Soft and Gentle Fluffy Kisses"
  },
  {
    "no": 1543,
    "name": "캡틴 우솝, 사나이 우솝의 대모험 ~제 2장~",
    "captain": "Boosts ATK of Shooter characters by 1.5x if HP is below 50% or by 1.75x 전투 시작 시 체력이 30% 미만이면. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV], and [TND] orbs \"beneficial\" to Shooter characters. At the beginning of each Stage, increases the Attack Timer of all enemies by 1 턴",
    "captainNotes": "The Attack Timer increase is NOT a delay, so the enemies can still be delayed. Attack Timer increase ignores Debuff Prevention barriers",
    "special": "Cuts the current HP of each enemy by 10%. If enemies have Delay Prevention, ignores it and Delays all enemies for 1 턴. Otherwise, Delays all enemies for 3 턴",
    "sailor": "Completely resists Blindness",
    "specialName": "Green Star, Impact Wolf",
    "limit": [
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Reduce No Healing duration"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "선원효과 추가 1: Boosts base HP of Shooter characters by 100"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 2: Critical Hit"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "잠재능력 습득 3: Barrier Penetration"
      }
    ],
    "potential": [
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
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
          "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
          "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
          "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
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
      }
    ]
  },
  {
    "no": 1544,
    "name": "코알라, 연분홍빛 만남",
    "captain": "Boosts ATK of Fighter characters by 1.75x and heals for .3x her RCV at the end of the 턴 each time you hit a Perfect",
    "special": "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 턴",
    "specialName": "Bean Paste under the Petal Snow"
  },
  {
    "no": 1545,
    "name": "코알라, 연분홍빛 입가",
    "captain": "Boosts ATK of Fighter characters by 2.25x and heals for .5x her RCV at the end of the 턴 each time you hit a Perfect",
    "special": "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 턴",
    "specialName": "Bean Paste under the Petal Snow"
  },
  {
    "no": 1546,
    "name": "소울 킹",
    "captain": "Boosts ATK of [QCK] characters by 1.5x and boosts HP of Free Spirit characters by 1.2x",
    "special": "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 턴",
    "specialName": "Dawn of A Big Star"
  },
  {
    "no": 1547,
    "name": "'소울 킹' 브룩 해적",
    "captain": "Boosts ATK of [QCK] characters by 2x and boosts HP of Free Spirit characters by 1.3x",
    "special": "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 턴",
    "specialName": "Dawn of A Big Star"
  },
  {
    "no": 1548,
    "name": "테나, 게나 왕국의 수장족 '소울 킹' 매니저",
    "captain": "Boosts ATK of Driven characters by 1.5x",
    "special": "Delays all enemies for 1 턴. Adds .2x to Chain multiplier for 1 턴",
    "specialName": "Former Thief's Box Office"
  },
  {
    "no": 1549,
    "name": "니코 로빈, 밀 플루르: 캄포 데 프로레슬",
    "captain": "Boosts ATK of [PSY] characters by 2.25x and recovers 3x character's RCV in HP at the end of each 턴",
    "special": "Reduces Bind, Despair and Silence duration by 3 턴, and reduces Special Cooldown of all characters by 1 턴",
    "specialName": "Mil Fluer: Campo de Flores",
    "specialNotes": "#{silence}"
  },
  {
    "no": 1550,
    "name": "프랑키, 프랑키~~~ 로켓 런처~~~~",
    "captain": "Boosts ATK of [INT] characters by 2.5x, reduces damage received by 10%",
    "special": "Deals 35x character's ATK in [INT] damage to all enemies. Changes [TND] and [RCV] orbs on Shooter and Free Spirit characters into Matching Orbs.",
    "specialName": "Franky's Rocket Launcher"
  },
  {
    "no": 1551,
    "name": "브룩, 스치는 노래: 눈보라 베기",
    "captain": "Boosts ATK of Free Spirit characters by 2.5x and recovers 430 HP at end of each 턴",
    "special": "Delays all enemies for 1 턴 and locks all orbs for 1 턴",
    "specialName": "Song of Scratches: Blizzard Slash"
  },
  {
    "no": 1552,
    "name": "하이루딘, '새 시대'의 엘바프 전사",
    "captain": "Boosts ATK of characters with 40 cost by 2.5x",
    "special": "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 턴",
    "specialName": "Thunder Giant"
  },
  {
    "no": 1553,
    "name": "해적 용병 하이루딘, '새 시대'의 엘바프 전사",
    "captain": "Boosts ATK of characters with 40 cost by 2.75x",
    "special": "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 턴",
    "specialName": "Thunder Giant"
  },
  {
    "no": 1554,
    "name": "류마, 사무라이 장군 좀비",
    "captain": "Boosts ATK of [DEX] characters by 2x",
    "special": "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 턴",
    "specialName": "Pure Body and Soul"
  },
  {
    "no": 1555,
    "name": "검호 류마, 사무라이 장군 좀비",
    "captain": "Boosts ATK of [DEX] characters by 2.25x, recovers 2x character's RCV in HP at the end of each 턴",
    "special": "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 턴",
    "specialName": "Pure Body and Soul"
  },
  {
    "no": 1556,
    "name": "와다츠미",
    "captain": "Boosts HP of STR characters by 2x",
    "special": "If the HP of the enemy with the highest HP percentage is above 3,000,000 HP, boosts own ATK by 2x for 1 턴",
    "specialName": "Sailboat Sinking Fist"
  },
  {
    "no": 1557,
    "name": "제오",
    "captain": "Boosts ATK of Striker characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
    "special": "Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 턴",
    "specialName": "Super Sole Headbutt"
  },
  {
    "no": 1558,
    "name": "이카로스",
    "captain": "Boosts ATK of Shooter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
    "special": "Cuts the current HP of each enemy by 15%",
    "specialName": "Stamping Press"
  },
  {
    "no": 1559,
    "name": "효조",
    "captain": "Boosts ATK of Slasher characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
    "special": "Reduces crew's HP by 50%, deals 55x ATK in Typeless damage to all enemies",
    "specialName": "Disorderly Drunken Frenzy Killing"
  },
  {
    "no": 1560,
    "name": "다루마",
    "captain": "Boosts ATK of Fighter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
    "special": "Empties all slots including those with [BLOCK] orbs",
    "specialName": "Daruma Drop"
  },
  {
    "no": 1561,
    "name": "도슨",
    "captain": "Boosts ATK of [INT] characters by 3x, reduces own ATK multiplier by 0.1x at the end of each 턴, reduces crew's current HP by 10% at the end of each 턴",
    "special": "Boosts ATK of Striker characters by 1.5x for 1 턴, deals 25x character's ATK in [INT] damage to one enemy",
    "specialName": "Explosive Nail Hammer"
  },
  {
    "no": 1562,
    "name": "호디 존스, 폭주",
    "captain": "Boosts ATK of Powerhouse characters by 3.5x, reduces own ATK multiplier by 0.1x at the end of each 턴 until it is 1.5x, reduces crew's current HP by 10% at the end of each 턴",
    "special": "Deals 60x character's ATK in [QCK] damage to one enemy, increases damage received by 2x for 2 턴, boosts ATK of Powerhouse characters by 1.75x for 1 턴",
    "specialName": "Drugs From Heaven"
  },
  {
    "no": 1563,
    "name": "'싸우는 왕' 엘리자베로 2세",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 1.75x at the start of the chain and by 2.1875x after the 5th Perfect in a row",
    "special": [
      {
        "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
        "cooldown": [
          17,
          9
        ]
      },
      {
        "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 턴",
        "cooldown": [
          24,
          16
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Battle Royale Rush",
    "sailor": "Boosts own base ATK by 350 if this character is the last in the chain to attack"
  },
  {
    "no": 1564,
    "name": "'싸우는 왕' 엘리자베로 2세, 프로덴스 왕국",
    "captain": "Boosts ATK of Fighter and Powerhouse characters by 2x at the start of the chain and by 3x after the 5th Perfect in a row",
    "special": [
      {
        "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
        "cooldown": [
          17,
          9
        ]
      },
      {
        "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 턴",
        "cooldown": [
          24,
          16
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Battle Royale Rush",
    "sailor": "Boosts own base ATK by 350 if this character is the last in the chain to attack"
  },
  {
    "no": 1565,
    "name": "참모 다가마",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of all characters by 1.75x",
    "special": "Reduces Special Cooldown of all characters by 1 턴 and reduces crew's current HP by 10%",
    "specialName": "War of Mislead Order"
  },
  {
    "no": 1566,
    "name": "참모 다가마, 프로덴스 왕국",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of all characters by 2x",
    "special": "Reduces Special Cooldown of all characters by 1 턴 and reduces crew's current HP by 10%",
    "specialName": "War of Mislead Order"
  },
  {
    "no": 1567,
    "name": "보아 행콕, 소녀 전사",
    "captain": "Boosts ATK and RCV of [QCK] characters by 1.5x",
    "special": "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 턴",
    "specialName": "The Princess' Principle"
  },
  {
    "no": 1568,
    "name": "보아 행콕, 공주님의 편린",
    "captain": "Boosts ATK and RCV of [QCK] characters by 2x",
    "special": "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 턴",
    "specialName": "The Princess' Principle"
  },
  {
    "no": 1569,
    "name": "트라팔가 로, 밀집모자 • 하트해적단 동맹",
    "captain": "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli recieved by 1.2x",
    "special": "Randomizes all non-matching orbs, including [BLOCK] orbs and switches orbs between slots three times",
    "specialName": "ROOM Shambles・Junction"
  },
  {
    "no": 1570,
    "name": "이누아라시",
    "captain": "전투 시작 시 체력이 30% 미만이면 박식 캐릭터의 공격력이 2.75배, 체인 계수가 1.5배가 되고, 박식 캐릭터의 공격력이 2.5배가 된다.",
    "special": "일당의 체력을 크게 줄이고 적 1기에 힘 속성 특대 대미지, 1턴 동안 탭 타이밍 보너스로 필살기 사용 캐릭터의 공격력 80배의 무속성 대미지를 가산한다",
    "specialNotes": "#{additionalDamage : 80x}",
    "specialName": "빛나는 왕의 검"
  },
  {
    "no": 1571,
    "name": "'낮의 왕' 이누아라시",
    "captain": "전투 시작 시 체력이 30% 미만이면 박식 캐릭터의 공격력이 2.75배, 체인 계수가 1.5배가 되고, 박식 캐릭터의 공격력이 2.5배가 된다.",
    "special": "일당의 체력을 크게 줄이고 적 1기에 힘 속성 특대 대미지, 1턴 동안 탭 타이밍 보너스로 필살기 사용 캐릭터의 공격력 80배의 무속성 대미지를 가산한다",
    "specialNotes": "#{additionalDamage : 80x}",
    "specialName": "빛나는 왕의 검"
  },
  {
    "no": 1572,
    "name": "완다",
    "captain": "Boosts ATK of Cerebral characters by 2x, and their RCV by 1.2x",
    "special": "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 턴",
    "sailor": "Reduces Paralysis duration by 1 턴",
    "specialName": "Ruler's Aide Flight"
  },
  {
    "no": 1573,
    "name": "왕의 새 완다",
    "captain": "Boosts ATK of Cerebral characters by 2.5x, and their RCV by 1.2x",
    "special": "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 턴",
    "sailor": "Reduces Paralysis duration by 1 턴",
    "specialName": "Ruler's Aide Flight"
  },
  {
    "no": 1574,
    "name": "시칠리안",
    "captain": "Boosts ATK of [INT] characters by 2.25x",
    "special": "Delays all enemies for 1 턴, deals 25x character's ATK [INT] damage to all enemies, and changes [STR], [DEX], [QCK], [INT], or [PSY] orbs on Cerebral characters into Matching orbs.",
    "sailor": "When HP is below 30% at the start of the 턴, boosts own ATK by 200",
    "specialName": "Dash - Dive - Destroy"
  },
  {
    "no": 1575,
    "name": "전력의 시칠리안",
    "captain": "Boosts ATK of [INT] characters by 2.5x and their HP by 1.25x",
    "special": "Delays all enemies for 1 턴, deals 25x character's ATK [INT] damage to all enemies, and changes [STR], [DEX], [QCK], [INT], or [PSY] orbs on Cerebral characters into Matching orbs.",
    "sailor": "When HP is below 30% at the start of the 턴, boosts own ATK by 200",
    "specialName": "Dash - Dive - Destroy"
  },
  {
    "no": 1576,
    "name": "킨에몬, 와노국의 사무라이",
    "captain": "Boosts ATK by 2.5x following a chain of Good > Great > Perfect hits",
    "special": "Deals 60x character's ATK in typeless damage to all enemies, and changes all orbs on all characters into Kinemon's orb.",
    "specialNotes": "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
    "sailor": "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
    "specialName": "Flaming Flash"
  },
  {
    "no": 1577,
    "name": "여우불 킨에몬, 와노국의 사무라이",
    "captain": "Recovers 3x character's RCV in HP at the end of each 턴. Boosts ATK by 3.5x following a chain of Good > Great > Perfect hits",
    "special": "Deals 60x character's ATK in typeless damage to all enemies, and changes all orbs on all characters into Kinemon's orb.",
    "specialNotes": "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
    "sailor": "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
    "specialName": "Flaming Flash"
  },
  {
    "no": 1578,
    "name": "모모노스케",
    "captain": "Protects from defeat as long as HP is above 50%",
    "special": [
      {
        "description": "Adds .2x to Chain multiplier for 1 턴",
        "cooldown": [
          8,
          3
        ]
      },
      {
        "description": "Switches orbs between slots once, and adds .3x to Chain multiplier for 1 턴",
        "cooldown": [
          11,
          6
        ]
      },
      {
        "description": "Switches orbs between slots once, and adds .5x to Chain multiplier for 1 턴",
        "cooldown": [
          14,
          9
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "sailor": "Makes [STR], [QCK], [DEX], and [INT] orbs \"beneficial\" for this unit",
    "specialName": "Miraculous Flying Dragon"
  },
  {
    "no": 1579,
    "name": "모모노스케, 와노국의 아이",
    "captain": "Boosts ATK, HP and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
    "special": [
      {
        "description": "Adds .2x to Chain multiplier for 1 턴",
        "cooldown": [
          8,
          3
        ]
      },
      {
        "description": "Switches orbs between slots once, and adds .3x to Chain multiplier for 1 턴",
        "cooldown": [
          11,
          6
        ]
      },
      {
        "description": "Switches orbs between slots once, and adds .5x to Chain multiplier for 1 턴",
        "cooldown": [
          14,
          9
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "sailor": "Makes [STR], [QCK], [DEX], and [INT] orbs \"beneficial\" for this unit",
    "specialName": "Miraculous Flying Dragon"
  },
  {
    "no": 1580,
    "name": "트라팔가 로, 펑크 해저드의 체류자",
    "captain": "Boosts ATK of Free Spirit characters by 1.5x and boosts RCV of DEX characters by 1.2x",
    "special": "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "ROOM Tact"
  },
  {
    "no": 1581,
    "name": "트라팔가 로, 두 명째 구한 신",
    "captain": "Boosts ATK of Free Spirit characters by 2x and boosts RCV of DEX characters by 1.5x",
    "special": "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "ROOM Tact"
  },
  {
    "no": 1582,
    "name": "모네, 눈눈 열매의 설녀",
    "captain": "Boosts ATK and RCV of Cerebral characters by 1.2x",
    "special": "Recovers 10x character's RCV in HP. Boosts ATK and RCV of Cerebral characters by 1.5x for 1 턴",
    "specialName": "Observing within the Snow Storm"
  },
  {
    "no": 1583,
    "name": "올럼버스, 욘타마리아 대선단 제독",
    "captain": "Boosts ATK of Striker characters by 2x",
    "special": "Locks all orbs for 1 턴. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 턴, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 턴",
    "specialName": "Admiral Hug"
  },
  {
    "no": 1584,
    "name": "살육지배자 올럼버스, 욘타마리아 대선단 제독",
    "captain": "Boosts ATK of Striker characters by 3x 전투 시작 시 체력이 30% 미만이면, by 2.5x otherwise",
    "special": "Locks all orbs for 1 턴. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 턴, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 턴",
    "specialName": "Admiral Hug",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1585,
    "name": "헤르메포, 해군 중사",
    "captain": "Boosts ATK and RCV of Slasher and Driven characters by 1.5x",
    "special": "If HP is below 5,000 when the special is activated, boosts ATK of Driven and Slasher characters by 1.75x for 1 턴 and recovers 10x character's RCV in HP",
    "specialName": "Firey Morale"
  },
  {
    "no": 1586,
    "name": "용사의 전우 헤르메포, 해군 중사",
    "captain": "Boosts ATK of Slasher and Driven characters by 2x and their RCV by 1.5x",
    "special": "If HP is below 5,000 when the special is activated, boosts ATK of Driven and Slasher characters by 1.75x for 1 턴 and recovers 10x character's RCV in HP",
    "specialName": "Firey Morale"
  },
  {
    "no": 1587,
    "name": "상디, 빈스모크가의 삼남",
    "captain": "Boosts ATK of all characters by 2.5x and their HP by 1.3x <br> <b>Action:</b> Sanji Sky Walks into the air for 1 턴, preventing all debuffs to himself. This does not remove the his own Captain boost while he is unable to attack. (Including, but not limited to, Bind, Despair, and Silence) Next 턴, boosts own ATK by 6.25x instead",
    "captainNotes": "Multiple Sanjis can Sky Walk at the same time. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost, and will stack with other boosts",
    "special": "Deals 100,000 fixed damage to all enemies. Changes [BLOCK], [TND], adjacent orbs, and own orb into Matching orbs. Boosts own attack by 2x for 1 턴",
    "sailor": "Makes [RCV] orbs \"beneficial\" for all characters",
    "specialName": "Hell Memories"
  },
  {
    "no": 1588,
    "name": "상디, 제르마 왕국의 프린스",
    "captain": "Boosts ATK of all characters by 2.5x and their HP by 1.3x <br> <b>Action:</b> Sanji Sky Walks into the air for 1 턴, preventing all debuffs to himself. This does not remove the his own Captain boost while he is unable to attack. (Including, but not limited to, Bind, Despair, and Silence) Next 턴, boosts own ATK by 6.25x instead",
    "captainNotes": "Multiple Sanjis can Sky Walk at the same time. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost, and will stack with other boosts",
    "special": "Deals 100,000 fixed damage to all enemies. Changes [BLOCK], [TND], adjacent orbs, and own orb into Matching orbs. Boosts own attack by 2x for 1 턴",
    "sailor": "Makes [RCV] orbs \"beneficial\" for all characters",
    "specialName": "Hell Memories"
  },
  {
    "no": 1589,
    "name": "샹크스, Celebrate the Long Cruise",
    "captain": "Boosts Chain Multiplier by 3x",
    "special": "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
    "specialName": "Sharing a Cup Filled with Emotions"
  },
  {
    "no": 1590,
    "name": "빨강 머리 샹크스, Celebrate the Long Cruise",
    "captain": "Boosts Chain Multiplier by 3.5x, Boosts HP and RCV of all characters by 1.2x",
    "special": "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
    "specialName": "Sharing a Cup Filled with Emotions"
  },
  {
    "no": 1591,
    "name": "보아 행콕, Celebrate the Long Cruise",
    "captain": "Boosts ATK and RCV of Fighter and Free Spirit characters by 1.5x",
    "special": "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 턴",
    "specialName": "Immoral Gaze"
  },
  {
    "no": 1592,
    "name": "'여제' 보아 행콕, Celebrate the Long Cruise",
    "captain": "Boosts ATK of Fighter and Free Spirit characters by 2.25x and their RCV by 1.75x",
    "special": "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 턴",
    "specialName": "Immoral Gaze"
  },
  {
    "no": 1593,
    "name": "몽키 D. 루피, 기어 4 - 바운드맨",
    "captain": "격투 캐릭터의 공격력을 2.5배로 상승시키고, 만약 \"킹콩 건\"을 사용하면, 3턴 동안 선장효과인 격투 캐릭터의 공격력 증가가 4배로 상승하며, 3턴 동안 받는 데미지가 56% 감소한다.",
    "special": [
      {
        "description": "적 1기에 캐릭터 공격력 100배의 무속성 데미지를 주고, 1턴 동안 격투 캐릭터의 [STR], [DEX], [PSY], [INT], [TND], [RCV] 슬롯을 이로운 슬롯으로 취급한다. 3턴 후 7턴 동안 캐릭터 봉쇄, 선장효과 무효가 발생한다.",
        "cooldown": [
          13,
          8
        ]
      },
      {
        "description": "적 1기에 캐릭터 공격력 200배의 무속성 데미지를 주고, 3턴 동안 격투,자유 캐릭터의 [STR], [DEX], [PSY], [INT], [TND], [RCV] 슬롯을 이로운 슬롯으로 취급한다. 3턴 후 7턴 동안 캐릭터 봉쇄, 선장효과 무효가 발생한다.",
        "cooldown": [
          18,
          13
        ]
      }
    ],
    "sailor": "이 캐릭터는 저림효과에 완전히 면역된다.",
    "specialName": "킹콩 건"
  },
  {
    "no": 1594,
    "name": "후지토라, 해군본부 최고전력",
    "captain": "Cuts the current HP of each enemy by 10% at the end of each 턴",
    "special": "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 턴",
    "specialNotes": "#{ignoreBarrier}",
    "specialName": "Gravity Blade: Fierce Tiger"
  },
  {
    "no": 1595,
    "name": "중력검 후지토라, 해군본부 최고전력",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.2x, cuts the current HP of each enemy by 10% at the end of each 턴",
    "special": "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 턴",
    "specialNotes": "#{ignoreBarrier}",
    "specialName": "Gravity Blade: Fierce Tiger"
  },
  {
    "no": 1596,
    "name": "시라호시",
    "captain": "Boosts ATK and RCV of [INT] characters by 1.5x",
    "special": "Reduces Bind, Despair and Paralysis duration by 2 턴, reduces damage received by 70% for 1 턴",
    "specialName": "Great Dinner Buffet"
  },
  {
    "no": 1597,
    "name": "용궁 왕국 공주 시라호시",
    "captain": "Boosts ATK and RCV of [INT] characters by 1.75x",
    "special": "Reduces Bind, Despair and Paralysis duration by 2 턴, reduces damage received by 70% for 1 턴",
    "specialName": "Great Dinner Buffet"
  },
  {
    "no": 1598,
    "name": "류보시",
    "captain": "Boosts HP of Powerhouse characters by 1.5x",
    "special": "Boosts ATK of all characters by 1.2x and recovers 5x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialName": "Musical Scale"
  },
  {
    "no": 1599,
    "name": "만보시",
    "captain": "Boosts ATK of Powerhouse characters by 1.75x",
    "special": "Reduces the defense of all enemies by 50% for 1 턴. Changes own orb into [QCK]",
    "specialName": "Happy Dance"
  },
  {
    "no": 1600,
    "name": "몽키 D. 루피, 밀짚모자 • 하트 해적단 동맹",
    "captain": "Boosts ATK of [PSY] and [INT] characters by 2.5x",
    "special": "Deals 20x character's ATK in [PSY] damage to one enemy, locks orbs for 1 턴, and amplifies the effect of orbs on [PSY] and [INT] characters by 1.75x for 1 턴",
    "specialName": "Right Leg Armament: Gum-Gum Battle Axe"
  },
  {
    "no": 1601,
    "name": "시류, 검은 수염 해적단",
    "captain": "Boosts ATK of Slasher characters by 2x",
    "special": "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 턴,",
    "specialName": "Blood Stained 'Iron Wall'",
    "sailor": "Boosts own base ATK by 100 if this character is the last in the chain to attack"
  },
  {
    "no": 1602,
    "name": "비의 시류, 검은 수염 해적단",
    "captain": "Boosts ATK of Slasher characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row",
    "special": "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 턴,",
    "specialName": "Blood Stained 'Iron Wall'",
    "sailor": "Boosts own base ATK by 100 if this character is the last in the chain to attack"
  },
  {
    "no": 1603,
    "name": "뇌경 맥가이",
    "captain": "Boosts ATK of [STR] characters by 2.25x and their RCV by 1.25x",
    "special": "Delays all enemies for 2 턴",
    "specialName": "Numb Crosscut"
  },
  {
    "no": 1604,
    "name": "포트거스 D. 에이스, 루피의 '형'",
    "captain": "Boosts ATK of [STR] characters by 1.5x",
    "special": "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
    "specialName": "Fist of the Demon's Child 'Fire'"
  },
  {
    "no": 1605,
    "name": "포트거스 D. 에이스, 흰수염의 '아들'",
    "captain": "Boosts ATK of [STR] characters by 2x and recovers 500 HP at end of each 턴",
    "special": "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
    "specialName": "Fist of the Demon's Child 'Fire'"
  },
  {
    "no": 1606,
    "name": "라피트, 검은 수염 해적단",
    "captain": "Boosts ATK and RCV of [PSY] characters by 1.75x",
    "special": "Randomly shuffles non-matching orbs on Shooter characters, reduces enemies defense by 50% for 1 턴 and delays all enemies for 1 턴",
    "specialName": "Deprivation of Self-Consciousness"
  },
  {
    "no": 1607,
    "name": "반 오거, 검은 수염 해적단",
    "captain": "Boosts ATK of Shooters by 2x",
    "special": "Deals 10x character's ATK in [DEX] damage to one enemy, locks orbs for 1 턴, and boosts ATK of Shooter characters by 1.5x for 1 턴",
    "specialName": "Painless Bullet"
  },
  {
    "no": 1608,
    "name": "도크 Q, 검은 수염 해적단",
    "captain": "Boosts ATK and RCV of [INT] characters by 1.5x",
    "special": "For each enemy, has an extremely small chance to instantly defeat that enemy.",
    "specialNotes": "#{instantKill : <1%}",
    "specialName": "Vile Fruit"
  },
  {
    "no": 1609,
    "name": "갓 에넬, 끝나지 않은 꿈의 천적",
    "captain": "Reduces HP of all characters by 20%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last 턴.",
    "captainNotes": "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous 턴> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.",
    "special": "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
    "specialNotes": "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP, and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
    "specialName": "Heavy Thunder"
  },
  {
    "no": 1610,
    "name": "갓 에넬, 대해적 시대의 사투 [끝없는 대지]",
    "captain": "Reduces HP of all characters by 20%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last 턴.",
    "captainNotes": "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous 턴> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.",
    "special": "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
    "specialNotes": "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP, and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
    "specialName": "Heavy Thunder"
  },
  {
    "no": 1611,
    "name": "바르톨로뮤 쿠마, 끝나지 않는 꿈의 천적",
    "captain": "Boosts ATK of Shooter characters by 1.75x and their HP by 1.2x",
    "special": "Reduces the duration of Bind and Despair by 7 턴. Recovers 20% of crew's MAX HP, and has low chance to eliminate all enemies",
    "specialNotes": "#{instantKill : 10%}",
    "specialName": "Paw Paw Fruit: Scatter and Fly Away",
    "sailor": "If Kuma has a [PSY] orb, and you hit a Perfect with him, keep his [PSY] orb for the next 턴"
  },
  {
    "no": 1612,
    "name": "바르톨로뮤 쿠마, 대해적 시대의 사투 [일당 말살]",
    "captain": "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x",
    "special": "Reduces the duration of Bind and Despair by 7 턴. Recovers 20% of crew's MAX HP, and has low chance to eliminate all enemies",
    "specialNotes": "#{instantKill : 10%}",
    "specialName": "Paw Paw Fruit: Scatter and Fly Away",
    "sailor": "If Kuma has a [PSY] orb, and you hit a Perfect with him, keep his [PSY] orb for the next 턴"
  },
  {
    "no": 1613,
    "name": "로브 루치, 끝나지 않은 꿈의 천적",
    "captain": "Boosts ATK of Fighter characters by 2.25x",
    "special": "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 턴",
    "specialName": "4000 Power Level Technique: Tempest Kick",
    "sailor": "Adds 2x character's ATK as Additional Typeless Damage",
    "sailorNotes": "#{additionalDamage : 2x}"
  },
  {
    "no": 1614,
    "name": "로브 루치, 대해적 시대의 사투 [어둠의 정의]",
    "captain": "Boosts ATK of Fighter characters by 2.5x and their HP by 1.25x",
    "special": "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 턴",
    "specialName": "4000 Power Level Technique: Tempest Kick",
    "sailor": "Adds 2x character's ATK as Additional Typeless Damage",
    "sailorNotes": "#{additionalDamage : 2x}"
  },
  {
    "no": 1615,
    "name": "Mr.0, 끝나지 않은 꿈의 천적",
    "captain": "Boosts ATK of Striker characters by 2x",
    "special": "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 턴 and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 턴",
    "specialName": "Desert Spada",
    "sailor": "Restores his own special by 2 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 2}"
  },
  {
    "no": 1616,
    "name": "Mr.0, 대해적 시대의 사투 [이상향]",
    "captain": "Boosts ATK of Striker characters by 2.5x and recovers 1.5x character's RCV in HP at the end of each 턴",
    "special": "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 턴 and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 턴",
    "specialName": "Desert Spada",
    "sailor": "Restores his own special by 2 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 2}"
  },
  {
    "no": 1617,
    "name": "겟코 모리아, 끝나지 않은 꿈의 천적",
    "captain": "Boosts ATK of [STR], [INT], and [DEX] characters by 2x",
    "special": "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 턴",
    "specialName": "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
    "sailor": "When any other character uses a special, reduces own cooldown by 1 턴"
  },
  {
    "no": 1618,
    "name": "겟코 모리아, 대해적 시대의 사투 [최강의 부하]",
    "captain": "Boosts ATK of [STR], [INT], and [DEX] characters by 2.5x",
    "special": "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 턴",
    "specialName": "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
    "sailor": "When any other character uses a special, reduces own cooldown by 1 턴"
  },
  {
    "no": 1619,
    "name": "'명왕' 실버즈 레일리, 해적왕의 오른팔",
    "captain": "Boosts chain multiplier by 4x and boosts HP and RCV of all characters by 1.2x",
    "special": "Reduces Bind, Despair, and Paralysis duration by 7 턴, delays all enemies for 1 턴, and makes Perfects easier to hit for 1 턴",
    "specialName": "Netherworld Conqueror"
  },
  {
    "no": 1620,
    "name": "유스타스 키드, 끝나지 않는 꿈의 항로 - 키드 해적단",
    "captain": "Boosts ATK of Strikers characters by 2.5x 전투 시작 시 체력이 30% 미만이면",
    "special": "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 턴",
    "specialName": "Double Steel Magnetic Arm"
  },
  {
    "no": 1621,
    "name": "유스타스 키드, 대해적 시대의 서약 '해적왕",
    "captain": "Boosts ATK of Striker characters by 3x 전투 시작 시 체력이 30% 미만이면, by 2.5x otherwise and boosts HP of Striker characters by 1.2x",
    "special": "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 턴",
    "specialName": "Double Steel Magnetic Arm",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "선원효과 추가 #: Boosts base ATK of Striker characters by 75"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "선원효과 추가 #: Boosts base HP of Driven characters by 75"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 30",
          "Level 3: 공격력 상승 : 40",
          "Level 4: 공격력 상승 : 50",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1622,
    "name": "돈키호테 도플라밍고 [개]",
    "special": "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 턴",
    "specialNotes": "#{orb : 2x}",
    "specialName": "Overheat [Neo]",
    "captain": "Boosts ATK of Slasher characters by 2x"
  },
  {
    "no": 1623,
    "name": "돈키호테 도플라밍고 [개], 왕의 부하 칠무해",
    "special": "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 턴",
    "specialNotes": "#{orb : 2x}",
    "specialName": "Overheat [Neo]",
    "captain": "Boosts ATK and HP of Slasher characters by 2x"
  },
  {
    "no": 1624,
    "name": "효조, 어인해적의 해결사",
    "captain": "Boosts ATK of Slasher characters by 1.5x and boosts HP of Powerhouse characters by 1.25x",
    "special": "Randomizes all orbs, cuts the current HP of all enemies by 10%, and Poisons all enemies.",
    "specialName": "Flexible Six Swords"
  },
  {
    "no": 1625,
    "name": "다루마, 심해의 어인해적",
    "captain": "Boosts ATK of Powerhouse and Fighter characters by 1.75x",
    "special": "Randomizes all orbs, including [BLOCK] orbs, and reduces damage received by 50% for 1 턴.",
    "specialName": "Arching Fangs"
  },
  {
    "no": 1626,
    "name": "도슨, 심해의 어인해적",
    "captain": "Boosts ATK of Powerhouse characters by 2.5x following a chain of Good > Great > Perfect hits",
    "special": "Deals 20x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 턴",
    "specialName": "The Calm Before The Storm"
  },
  {
    "no": 1627,
    "name": "마하바이스, 초체중인간",
    "captain": "Boosts ATK Free Spirit characters by 2x",
    "special": [
      {
        "description": "Reduces Chain Multiplier Limit duration by 1 턴 and boosts the Color Affinity of Striker characters by 1.25x for 1 턴",
        "cooldown": [
          23,
          9
        ]
      },
      {
        "description": "Reduces Chain Multiplier Limit duration by 3 턴 and boosts the Color Affinity of Striker characters by 1.5x for 1 턴",
        "cooldown": [
          27,
          13
        ]
      },
      {
        "description": "Reduces Chain Multiplier Limit duration by 5 턴 and boosts the Color Affinity of Striker characters by 1.75x for 1 턴",
        "cooldown": [
          31,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Thousand Ton Destruction"
  },
  {
    "no": 1628,
    "name": "마하바이스, 디아만테군 간부",
    "captain": "Boosts ATK Free Spirit and Striker characters by 2.25x and their RCV by 1.5x",
    "special": [
      {
        "description": "Reduces Chain Multiplier Limit duration by 1 턴 and boosts the Color Affinity of Striker characters by 1.25x for 1 턴",
        "cooldown": [
          23,
          9
        ]
      },
      {
        "description": "Reduces Chain Multiplier Limit duration by 3 턴 and boosts the Color Affinity of Striker characters by 1.5x for 1 턴",
        "cooldown": [
          27,
          13
        ]
      },
      {
        "description": "Reduces Chain Multiplier Limit duration by 5 턴 and boosts the Color Affinity of Striker characters by 1.75x for 1 턴",
        "cooldown": [
          31,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}",
    "specialName": "Thousand Ton Destruction"
  },
  {
    "no": 1629,
    "name": "이카로스 뭇히, 심해의 어인해적",
    "captain": "Boosts ATK and HP of Striker characters by 1.5x",
    "special": "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
    "specialName": "The Spear that Penetrated the Undersea Mountain"
  },
  {
    "no": 1630,
    "name": "이카로스 뭇히, 반역의 어인해적",
    "captain": "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
    "special": "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
    "specialName": "The Spear that Penetrated the Undersea Mountain"
  },
  {
    "no": 1631,
    "name": "피셔 타이거",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x",
    "special": "Boosts ATK of Powerhouse characters by 1.75x for 3 턴",
    "specialName": "Rebellion against the \"Prohibition\" - Taboo",
    "sailor": "When any other Powerhouse character uses a special, reduces own cooldown by 1 턴"
  },
  {
    "no": 1632,
    "name": "피셔 타이거, 태양 해적단 선장",
    "captain": "Boosts ATK of Powerhouse characters by 2.75x",
    "special": "Boosts ATK of Powerhouse characters by 1.75x for 3 턴",
    "specialName": "Rebellion against the \"Prohibition\" - Taboo",
    "sailor": "When any other Powerhouse character uses a special, reduces own cooldown by 1 턴",
    "limit": [
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "선원효과 추가 #: "
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 30",
          "Level 3: 공격력 상승 : 40",
          "Level 4: 공격력 상승 : 50",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1633,
    "name": "Dragon, 펑크 해저드 서식",
    "captain": "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
    "special": "Deals 15x character's ATK in [STR] damage to all enemies and amplifies the effect of orbs by 1.25x for 1 턴",
    "specialName": "Flame Breath"
  },
  {
    "no": 1634,
    "name": "락&스카치",
    "captain": "Boosts HP of [INT] characters by 2x",
    "special": "Reduces damage received by 50% for 1 턴",
    "specialName": "COOL Ambush"
  },
  {
    "no": 1635,
    "name": "갈색 수염, 펑크 해저드 순회부대 보스",
    "captain": "Boosts OWN ATK by 1.5x and the ATK of Cerebral characters by 2x",
    "special": "Cuts the HP of all enemies by 20% and binds himself for 5 턴",
    "specialName": "Crocodile Thrust"
  },
  {
    "no": 1636,
    "name": "시저 크라운, 전 정부의 과학자",
    "captain": "Boosts ATK of Cerebral characters by 2x",
    "special": "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴 and changes [BOMB] orbs into matching orbs",
    "specialName": "Gastanet"
  },
  {
    "no": 1637,
    "name": "마스터 시저 크라운, 전 정부의 과학자",
    "captain": "Boosts ATK of Cerebral characters by 2.25x and reduces damage received by 15%",
    "special": "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 턴 and changes [BOMB] orbs into matching orbs",
    "specialName": "Gastanet"
  },
  {
    "no": 1638,
    "name": "펑크 해저드 가스 마스크 순회병 [힘]",
    "special": "Boosts chances of getting [RCV] orbs for 2 턴",
    "specialName": "Meat for Meat"
  },
  {
    "no": 1639,
    "name": "펑크 해저드 가스 마스크 순회병 [속]",
    "special": "Reduces Paralysis duration by 1 턴",
    "specialName": "Shock Recovery: Light"
  },
  {
    "no": 1640,
    "name": "펑크 해저드 가스 마스크 순회병 [기]",
    "special": "For 1 턴, makes STR orb \"beneficial\" for Shooter characters",
    "specialName": "Shooter Beneficial Slot: STR"
  },
  {
    "no": 1641,
    "name": "펑크 해저드 가스 마스크 순회병 [지]",
    "special": "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.2x for 1 턴",
    "specialName": "Rising Damage: Poison"
  },
  {
    "no": 1642,
    "name": "펑크 해저드 가스 마스크 순회병 [심]",
    "special": "Deals 3x character's ATK in typeless damage to all enemies, Poisons all enemies",
    "specialNotes": "#{poison}",
    "specialName": "Poison Attack"
  },
  {
    "no": 1643,
    "name": "강한 다리의 켄타우로스, 펑크 해저드 순회부대 대원",
    "captain": "Reduces cooldown of Slasher specials by 2 턴 at the start of the fight",
    "special": "Boosts ATK of Slasher characters for 1 턴",
    "specialName": "Attack Boost: Slasher"
  },
  {
    "no": 1644,
    "name": "빠른 발의 켄타우로스, 펑크 해저드 순회부대 대원",
    "captain": "Boosts ATK of [QCK] characters by 2x, reduces crew's current HP by ???% at the end of each 턴",
    "special": "Reduces Silence duration by 1 턴",
    "specialNotes": "#{silence}",
    "specialName": "Special Seal Recovery: Light"
  },
  {
    "no": 1645,
    "name": "발 기술의 켄타우로스, 펑크 해저드 순회부대 대원",
    "captain": "Boosts ATK of [DEX] characters by 1.5x and Slasher characters by 1.3x",
    "captainNotes": "The bonus is cumulative. [DEX] Slasher characters get a 1.95x bonus.",
    "special": "Deals 5 hits of random typeless damage to random enemies",
    "specialNotes": "#{randomHits : 5}",
    "specialName": "Random Light Blows"
  },
  {
    "no": 1646,
    "name": "피카 [개]",
    "captain": "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
    "specialName": "Rock Domination Wall [Neo]",
    "special": [
      {
        "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
        "cooldown": [
          20,
          11
        ]
      },
      {
        "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
        "cooldown": [
          26,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}"
  },
  {
    "no": 1647,
    "name": "피카 [개], 돈키호테 해적단",
    "captain": "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
    "specialName": "Rock Domination Wall [Neo]",
    "special": [
      {
        "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
        "cooldown": [
          20,
          11
        ]
      },
      {
        "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
        "cooldown": [
          26,
          17
        ]
      }
    ],
    "specialNotes": "#{stages}"
  },
  {
    "no": 1648,
    "name": "조라, 아트-아트 인간",
    "captain": "Boosts ATK of all characters by 1.2x. Boosts ATK by 2.4x after scoring 4 Perfects in a row",
    "special": "Reduces damage received by 90% for 1 턴 and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
    "specialName": "Sprouting with Beautiful Passion"
  },
  {
    "no": 1649,
    "name": "조라, 트레볼군",
    "captain": "Boosts ATK of all characters by 1.2x. Boosts ATK by 3x after scoring 4 Perfects in a row",
    "special": "Reduces damage received by 90% for 1 턴 and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
    "specialName": "Sprouting with Beautiful Passion"
  },
  {
    "no": 1650,
    "name": "브룩, 사이키델릭 아트",
    "captain": "Boosts RCV of [DEX] characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise.",
    "special": "Changes [BLOCK], [TND], [EMPTY], and [BOMB] orbs into [DEX] orbs and amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Eyes Blinded by True Beauty"
  },
  {
    "no": 1651,
    "name": "네코마무시",
    "captain": "Boosts HP of Striker characters by 1.25x and boosts ATK by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
    "special": "Deals 60x character's ATK in [PSY] damage to one enemy and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Striker characters for 1 턴",
    "specialName": "Daybreak Ruler's Spear"
  },
  {
    "no": 1652,
    "name": "'밤의 왕' 네코마무시",
    "captain": "타격 타입 캐릭터의 체력이 1.25 배, [STR], [QCK], [DEX], [INT], [PSY] 슬롯과 [RAINBOW] 슬롯일 경우 타격 타입 캐릭터의 공격력이 3.75 배가된다.",
    "special": "적 1기에게 [PSY] 속성 대미지를 주고 1턴 동안 타격 타입 캐릭터의 [STR], [QCK], [DEX], [INT], [PSY] 슬롯이 유리한 슬롯으로 취급된다.",
    "specialName": "새벽의 왕의 창",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1653,
    "name": "페드로",
    "captain": "Boosts ATK of [INT] characters by 2x",
    "special": "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 턴",
    "sailor": "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
    "specialName": "Charge Drive"
  },
  {
    "no": 1654,
    "name": "나무위의 페드로",
    "captain": "Reduces cooldown of all specials by 2 턴 at the start of the fight, boosts ATK of [INT] characters by 2.5x",
    "special": "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 턴",
    "sailor": "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
    "specialName": "Charge Drive"
  },
  {
    "no": 1655,
    "name": "캐럿",
    "captain": "Boosts ATK and RCV of [QCK] characters by 1.5x",
    "special": "Boosts ATK of QCK characters by 2x for 1 턴",
    "sailor": "Boosts base ATK and RCV of [QCK] characters by 75",
    "specialName": "Electric Fist"
  },
  {
    "no": 1656,
    "name": "왕의 새 캐럿",
    "captain": "Boosts ATK of [QCK] characters by 2.25x and their RCV by 1.5x",
    "special": "Boosts ATK of QCK characters by 2x for 1 턴",
    "sailor": "Boosts base ATK and RCV of [QCK] characters by 75",
    "specialName": "Electric Fist"
  },
  {
    "no": 1657,
    "name": "칸주로, 와노국의 사무라이",
    "captain": "타격, 자유 캐릭터의 공격력이 2배가 된다",
    "special": "봉인과 선장효과 무효 상태를 5턴 회복하고 선장이 타격 타입이라면 1턴 동안 체인 계수가 2.75배로 고정된다.",
    "sailor": "선장이 타격 타입이라면, 자신의 [DEX]슬롯이 유리 슬롯 취급",
    "specialName": "용오름"
  },
  {
    "no": 1658,
    "name": "소나기 칸주로, 와노국의 사무라이",
    "captain": "타격, 자유 캐릭터의 공격력이 2.5배가 된다",
    "special": "봉인과 선장효과 무효 상태를 5턴 회복하고 선장이 타격 타입이라면 1턴 동안 체인 계수가 2.75배로 고정된다.",
    "sailor": "선장이 타격 타입이라면, 자신의 [DEX]슬롯이 유리 슬롯 취급",
    "specialName": "용오름"
  },
  {
    "no": 1659,
    "name": "라이조",
    "captain": "Boosts ATK of Shooter characters by 2x",
    "special": "Reduces Paralysis and Silence duration by 3 턴, switches orbs between slots 3 times",
    "sailorNotes": "#{silence}",
    "sailor": "Completely resists Silence on this character",
    "specialNotes": "#{silence}",
    "specialName": "Ninja Arts - Bunshin no Jutsu"
  },
  {
    "no": 1660,
    "name": "안개의 라이조",
    "captain": "Boosts ATK of Shooter characters by 2.5x and makes [TND] and [RCV] orbs \"beneficial\" to Shooter characters",
    "special": "Reduces Paralysis and Silence duration by 3 턴, switches orbs between slots 3 times",
    "sailorNotes": "#{silence}",
    "sailor": "Completely resists Silence on this character",
    "specialNotes": "#{silence}",
    "specialName": "Ninja Arts - Bunshin no Jutsu"
  },
  {
    "no": 1661,
    "name": "코라손, 지우고 싶은 비구름",
    "captain": "Boosts ATK of [PSY], [QCK], and [DEX] characters by 2x and recovers 300 HP at end of each 턴",
    "special": [
      {
        "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
        "cooldown": [
          6,
          6
        ]
      },
      {
        "description": "Locks the chain multiplier at 2.5x for 1 턴 and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
        "cooldown": [
          10,
          10
        ]
      }
    ],
    "specialName": "The Sun under the Rain"
  },
  {
    "no": 1662,
    "name": "코라손, 사라질 빗소리",
    "captain": "Boosts ATK of [PSY], [QCK], and [DEX] characters by 2.5x and recovers 500 HP at end of each 턴",
    "special": [
      {
        "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
        "cooldown": [
          6,
          6
        ]
      },
      {
        "description": "Locks the chain multiplier at 2.5x for 1 턴 and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 턴.",
        "cooldown": [
          10,
          10
        ]
      }
    ],
    "specialName": "The Sun under the Rain"
  },
  {
    "no": 1663,
    "name": "역대최강 CP9 로브 루치, \"생명귀환\"",
    "special": "Deals 75x character's ATK in typeless damage to one enemy, greatly boosts chances of getting matching orbs for 3 턴",
    "specialName": "Six Powers Supreme: Six King Gun",
    "captain": "Boosts ATK of Powerhouse characters by 3.5x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
  },
  {
    "no": 1664,
    "name": "아오키지, \"일기토\"의 상대",
    "captain": "Boosts ATK of Shooter characters by 2.5x",
    "special": "Locks all orbs for 1 턴. If during that 턴, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 턴 in the following 턴.",
    "specialName": "Ice Saber"
  },
  {
    "no": 1665,
    "name": "아오키지, \"일기토\"의 승자",
    "captain": "Boosts ATK of Shooter characters by 2.5x and boosts ATK of Shooters by 3.25x after scoring 3 PERFECTS in a row",
    "special": "Locks all orbs for 1 턴. If during that 턴, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 턴 in the following 턴.",
    "specialName": "Ice Saber",
    "limit": [
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 1: Reduce No Healing duration"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: Boosts base HP of Shooter characters by 50"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "선원효과 추가 2: 사격 캐릭터의 공격력을 50 상승시킨다."
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
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
      }
    ]
  },
  {
    "no": 1666,
    "name": "퀴로스, 무패의 검투사",
    "captain": "Boosts ATK of Striker characters by 2x",
    "special": "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 턴",
    "specialName": "Trueno Bastardo"
  },
  {
    "no": 1667,
    "name": "퀴로스, 리쿠왕군 군대장",
    "captain": "Boosts HP of Striker characters by 1.2x and boosts ATK of Striker characters by 2.75x 전투 시작 시 체력이 30% 미만이면, 2.25x otherwise",
    "special": "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 턴",
    "specialName": "Trueno Bastardo"
  },
  {
    "no": 1668,
    "name": "아오키지 [개]",
    "special": "Boosts ATK of Striker characters by 1.75x for 2 턴, locks all orbs for 2 턴",
    "specialName": "Ice Block - Pheasant Beak [Neo]",
    "captain": "Boosts ATK of Striker characters by 2x"
  },
  {
    "no": 1669,
    "name": "아오키지 [개], 빙결인간",
    "special": "Boosts ATK of Striker characters by 1.75x for 2 턴, locks all orbs for 2 턴",
    "specialName": "Ice Block - Pheasant Beak [Neo]",
    "captain": "Boosts ATK and HP of Striker characters by 2x"
  },
  {
    "no": 1670,
    "name": "마담 셜리, 인어 카페 점장",
    "captain": "Boosts ATK of [DEX] characters by 1.75x and their RCV by 1.2x",
    "special": "Randomizes all non-matching orbs, switches orbs between slots two times, and delays all enemies for 1 턴",
    "specialName": "A Warning to the Fool"
  },
  {
    "no": 1671,
    "name": "케이미, 인어 카페",
    "captain": "Boosts RCV of Free Spirit characters by 1.5x",
    "special": "Recovers 15% of crew's MAX HP and amplifies the effect of orbs by 1.5x for 1 턴",
    "specialName": "Cheerfulness that Shines in the Deep Sea"
  },
  {
    "no": 1672,
    "name": "파파구, \"크리미널 브랜드사\"의 사장겸 초인기 셀럽 디자이너",
    "captain": "Boosts ATK and HP of Powerhouse characters by 1.5x",
    "special": "Binds himself for 2 턴 and reduces Despair and Silence duration by 3 턴",
    "specialName": "A Starfish Reaching for His Beliefs"
  },
  {
    "no": 1673,
    "name": "페로나, 어두운 해변의 공주",
    "captain": "Boosts ATK of all characters by 1.75x and boosts EXP gained by 1.2x",
    "special": "Reduces damage received by 70% for 1 턴, reduces the defense of all enemies by 90% for 1 턴 and reduces Silence duration by 2 턴.",
    "specialNotes": "#{silence}",
    "sailor": "Completely resists Silence on this character",
    "sailorNotes": "#{silence}",
    "specialName": "Romantic Princess"
  },
  {
    "no": 1674,
    "name": "페로나,대담한 수영복 공주",
    "captain": "Boosts ATK of all characters by 2.25x and boosts EXP gained by 1.5x",
    "special": "Reduces damage received by 70% for 1 턴, reduces the defense of all enemies by 90% for 1 턴 and reduces Silence duration by 2 턴.",
    "specialNotes": "#{silence}",
    "sailor": "Completely resists Silence on this character",
    "sailorNotes": "#{silence}",
    "specialName": "Romantic Princess"
  },
  {
    "no": 1675,
    "name": "롤로노아 조로, 종이우산 검사",
    "captain": "Boosts chain multiplier by 2x",
    "special": "Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 턴",
    "sailor": "Reduces Blindness duration by 1 턴",
    "specialName": "Great Swordsman Under the Umbrella"
  },
  {
    "no": 1676,
    "name": "롤로노아 조로, 비에 젖은 검사",
    "captain": "Boosts chain multiplier by 3.25 and reduce damage received by 10%",
    "special": "Boosts ATK of Slasher and Driven characters by 1.5x for 1 턴. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 턴",
    "sailor": "Reduces Blindness duration by 1 턴",
    "specialName": "Great Swordsman Under the Umbrella"
  },
  {
    "no": 1677,
    "name": "트라팔가 로, 끝나지 않는 꿈의 항적 하트 해적단",
    "captain": "Boosts ATK of Slasher characters by 2.5x",
    "special": "Boosts the Color Affinity of Slasher by 1.5x for 1 턴, changes middle row orbs into matching orbs and switches orbs between slots three times",
    "specialName": "ROOM: Kikoku"
  },
  {
    "no": 1678,
    "name": "트라팔가 로, 대해적 시대의 서약 '자유'",
    "captain": "Boosts ATK of Slasher characters by 2.5x at the start of the chain, by 3.25x after the 3rd Perfect in a row",
    "special": "Boosts the Color Affinity of Slasher by 1.5x for 1 턴, changes middle row orbs into matching orbs and switches orbs between slots three times",
    "specialName": "ROOM: Kikoku",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 35"
      },
      {
        "description": "회복력 상승 : 35"
      },
      {
        "description": "선원효과 추가 1: Completely resists Silence on this character"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 85"
      },
      {
        "description": "선원효과 추가 2: Reduces Paralysis duration by 1 턴"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 1679,
    "name": "쥬라큘 미호크 [개]",
    "special": "Cuts the current HP of each enemy by 30%",
    "specialName": "Black Blade Ship Cutter [Neo]",
    "captain": "Boosts ATK of Slasher characters by 2x"
  },
  {
    "no": 1680,
    "name": "매의눈 미호크 [개]",
    "special": "Cuts the current HP of each enemy by 30%",
    "specialName": "Black Blade Ship Cutter [Neo]",
    "captain": "Boosts ATK of Slasher characters by 2.5x"
  },
  {
    "no": 1681,
    "name": "몽키 D. 루피, Celebrate 20th Anniversary Cruise",
    "captain": "Boosts ATK of characters with cost 30 or less by 2.5x",
    "special": "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 턴.",
    "specialName": "Gomu Gomu no Tako Stamp",
    "sailor": "Boosts base HP and ATK of all characters by 56"
  },
  {
    "no": 1682,
    "name": "몽키 D. 루피, 20th Anniversary Memorial Treasure",
    "captain": "Boosts HP of characters with cost 30 or less by 1.3x and boosts ATK of characters with cost 30 or less by 2.5x at the start of the chain, 3.5x after the 3rd Perfect in a row",
    "special": "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 턴.",
    "specialName": "Gomu Gomu no Tako Stamp",
    "sailor": "Boosts base HP and ATK of all characters by 56"
  },
  {
    "no": 1683,
    "name": "니코 로빈, Celebrate 20th Anniversary Cruise",
    "captain": "Boosts ATK of Cerebral characters by 2x, and their RCV by 1.3x",
    "special": "Binds self for 1 턴, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 턴",
    "specialName": "Mil Fleur: Gigantesco Mano",
    "specialNotes": "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - ???x ATK; 2 orbs - ???x ATK; 3 orbs - ???x ATK; 4 orbs - ???x ATK; 5 orbs - ???x ATK; 6 orbs - ???x ATK.",
    "sailor": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character"
  },
  {
    "no": 1684,
    "name": "니코 로빈, 20th Anniversary Memorial Treasure",
    "captain": "Boosts ATK of Cerebral characters by 2.5x, and their RCV by 1.3x",
    "special": "Binds self for 1 턴, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 턴",
    "specialName": "Mil Fleur: Gigantesco Mano",
    "specialNotes": "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - ???x ATK; 2 orbs - ???x ATK; 3 orbs - ???x ATK; 4 orbs - ???x ATK; 5 orbs - ???x ATK; 6 orbs - ???x ATK.",
    "sailor": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character"
  },
  {
    "no": 1685,
    "name": "우솝, Celebrate 20th Anniversary Cruise",
    "captain": "Boosts ATK of Shooter characters by 2.75x following a chain of Good > Great > Perfect hits",
    "special": "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 턴",
    "specialName": "Green Star: Bamboo Javelin-Grove",
    "sailor": "Reduces Silence duration on this character by 4 턴",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1686,
    "name": "우솝, 20th Anniversary Memorial Treasure",
    "captain": "Boosts ATK of Shooter characters by 3.25x following a chain of Good > Great > Perfect hits",
    "special": "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 턴",
    "specialName": "Green Star: Bamboo Javelin-Grove",
    "sailor": "Reduces Silence duration on this character by 4 턴",
    "sailorNotes": "#{silence}"
  },
  {
    "no": 1687,
    "name": "프랑키, Celebrate 20th Anniversary Cruise",
    "captain": "Boosts ATK of Fighter characters by 2x and reduce damage received by 10%",
    "special": "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies, and reduces the defense of all enemies by 100% for 2 턴",
    "specialNotes": "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
    "specialName": "Franky Iron BOXING",
    "sailor": "Restores his own special by 3 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 3}"
  },
  {
    "no": 1688,
    "name": "프랑키, 20th Anniversary Memorial Treasure",
    "captain": "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 15%",
    "special": "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies, and reduces the defense of all enemies by 100% for 2 턴",
    "specialNotes": "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
    "specialName": "Franky Iron BOXING",
    "sailor": "Restores his own special by 3 턴 when it is rewinded",
    "sailorNotes": "#{rewind : 3}"
  },
  {
    "no": 1689,
    "name": "유스타스 키드, 사우스 블루 출신의 초신성",
    "captain": "Boosts ATK of all characters by 1.5x at the start of the chain, by 2.25x following a chain of STR > DEX > INT attacks no lower than Good",
    "special": "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 턴",
    "specialName": "Iron Giant Palm Slam"
  },
  {
    "no": 1690,
    "name": "캡틴 키드, 사우스 블루 출신의 초신성",
    "captain": "Boosts ATK of all characters by 2x at the start of the chain, by 3x following a chain of STR > DEX > INT attacks no lower than Good",
    "special": "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 턴",
    "specialName": "Iron Giant Palm Slam"
  },
  {
    "no": 1691,
    "name": "히트",
    "captain": "Boosts ATK of Shooter characters by 1.75x",
    "special": "Boosts ATK against enemies with reduced defense by 1.3x for 1 턴, changes the captain's [STR], [DEX], [QCK], [INT], or [PSY] orbs into Matching orbs.",
    "specialName": "Aim and Burn"
  },
  {
    "no": 1692,
    "name": "와이어",
    "captain": "Boosts HP of Driven characters by 1.5x",
    "special": "Adds .3x to Chain multiplier, and reduces the defense of all enemies by 50% for 1 턴",
    "specialName": "Three Wind Tunnels"
  },
  {
    "no": 1693,
    "name": "이누아라시, 모코모공국",
    "captain": "Boosts ATK of [PSY] characters by 2x",
    "special": "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 턴, amplifies the effect of own orb by 1.75x for 1 턴 and changes own orb to [PSY].",
    "specialNotes": "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
    "specialName": "King's Lightning Burial"
  },
  {
    "no": 1694,
    "name": "'낮의 왕' 이누아라시, 모코모공국",
    "captain": "Boosts ATK of [PSY] characters by 2.75x",
    "special": "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 턴, amplifies the effect of own orb by 1.75x for 1 턴 and changes own orb to [PSY].",
    "specialNotes": "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
    "specialName": "King's Lightning Burial"
  },
  {
    "no": 1695,
    "name": "귀죽의 베르고",
    "captain": "Boosts ATK of Striker characters by 2x",
    "special": "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 턴 and reduces damage received by 50% for 1 턴",
    "specialName": "The Darkest Demon"
  },
  {
    "no": 1696,
    "name": "귀죽의 베르고, 돈키호테 패밀리 최고간부",
    "captain": "Boosts ATK of Striker characters by 2.5x and reduces damage received by 10%",
    "special": "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 턴 and reduces damage received by 50% for 1 턴",
    "specialName": "The Darkest Demon"
  },
  {
    "no": 1697,
    "name": "마젤란, 감옥의 통치자",
    "captain": "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each 턴",
    "special": "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialNotes": "Toxic starts at 50x character's attack and increases by 2x at the end of every 턴 until 2,000,000 damage per 턴.",
    "specialName": "Venom Cloud",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1698,
    "name": "마젤란, 지옥의 지배자",
    "captain": "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY], and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each 턴",
    "special": "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each 턴 for 3 턴",
    "specialNotes": "Toxic starts at 50x character's attack and increases by 2x at the end of every 턴 until 2,000,000 damage per 턴.",
    "specialName": "Venom Cloud",
    "limit": [
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "선원효과 추가 1: Cannot be blown away"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 45"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "잠재능력 습득 3: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 5: 전투 시작 시 체력이 30% 미만이면, heals for 3x this character's RCV at the end of the 턴 each time you hit a Perfect"
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
      }
    ]
  },
  {
    "no": 1699,
    "name": "징베, '무한 지옥'의 죄수",
    "captain": "격투 캐릭터의 공격력을 2배, 체력을 1.2배 증가시킨다.",
    "special": "체인 계수 증가량 저하, 체인 계수 고정 상태를 3턴 회복하고 2턴 동안 체인 계수가 +0.3이 된다.",
    "specialName": "온화한 초음파",
    "sailor": "격투 캐릭터의 기본 공격력을 +75"
  },
  {
    "no": 1700,
    "name": "징베, '지옥'의 칠무해",
    "captain": "격투 캐릭터의 공격력을 2.5배, 체력을 1.3배 증가시킨다.",
    "special": "체인 계수 증가량 저하, 체인 계수 고정 상태를 3턴 회복하고 2턴 동안 체인 계수가 +0.3이 된다.",
    "specialName": "온화한 초음파",
    "sailor": "격투 캐릭터의 기본 공격력을 +75",
    "limit": [
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "선원효과 추가 #: "
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1701,
    "name": "엠포리오 이완코프, '뉴카마 랜드'의 죄수",
    "captain": "자유 캐릭터의 공격력을 2배 증가시킨다.",
    "special": [
      {
        "description": "모든 슬롯을 랜덤으로 변환",
        "cooldown": [
          9,
          4
        ]
      },
      {
        "description": "[BLOCK]슬롯을 자속성 슬롯으로 변환",
        "cooldown": [
          12,
          7
        ]
      },
      {
        "description": "[BLOCK]슬롯을 포함한 불리한 슬롯을 자속성 슬롯으로 변환",
        "cooldown": [
          15,
          10
        ]
      }
    ],
    "specialName": "잔털정리권",
    "sailor": "이 캐릭터는 마비효과 면역"
  },
  {
    "no": 1702,
    "name": "엠포리오 이완코프, '지옥'의 혁명가",
    "captain": "자유 캐릭터의 공격력을 2.5배 증가시키고 캐릭터 회복력 2배의 체력을 회복한다.",
    "special": [
      {
        "description": "모든 슬롯을 랜덤으로 변환",
        "cooldown": [
          9,
          4
        ]
      },
      {
        "description": "[BLOCK]슬롯을 자속성 슬롯으로 변환",
        "cooldown": [
          12,
          7
        ]
      },
      {
        "description": "[BLOCK]슬롯을 포함한 불리한 슬롯을 자속성 슬롯으로 변환",
        "cooldown": [
          15,
          10
        ]
      }
    ],
    "specialName": "잔털정리권",
    "sailor": "이 캐릭터는 마비효과 면역",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: 자유 캐릭터가 필살기를 사용하면 이 캐릭터의 필살기가 1턴 감소한다."
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 30% 확률로 공격력의 7% 추가 데미지를 입힌다."
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
      }
    ]
  },
  {
    "no": 1703,
    "name": "한냐발, 지배자의 심복",
    "captain": "INT캐릭터의 공격력이 2배 증가한다.",
    "special": "2턴 동안 받는 대미지를 50% 감소시키고, 2턴 동안 독에 중독된 적에게 주는 대미지가 1.75배가 된다.",
    "specialName": "초열지옥차",
    "sailor": "선장이 타격 캐릭터면 [STR][QCK][DEX][PSY][INT]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1704,
    "name": "한냐발, 지금은 지배자의 심복",
    "captain": "INT캐릭터의 공격력이 2.5배 증가하고 턴 종료 시 캐릭터 회복력 2배의 체력을 회복한다.",
    "special": "2턴 동안 받는 대미지를 50% 감소시키고, 2턴 동안 독에 중독된 적에게 주는 대미지가 1.75배가 된다.",
    "specialName": "초열지옥차",
    "sailor": "선장이 타격 캐릭터면 [STR][QCK][DEX][PSY][INT]슬롯도 이로운 슬롯으로 취급한다.",
    "limit": [
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: 선장이 야심 캐릭터면 [RCV],[TND]도 이로운 슬롯으로 만든다. "
      },
      {
        "description": "체력 상승 : 200"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 5% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다.",
          "Level 2: 전투 시작 시 체력이 5% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1.25배 만큼 체력을 회복한다",
          "Level 3: 전투 시작 시 체력이 5% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1.5배 만큼 체력을 회복한다",
          "Level 4: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1.5배 만큼 체력을 회복한다",
          "Level 5: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1.5배 만큼 체력을 회복한다"
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1705,
    "name": "Mr. 2 봉쿠레, '기아 지옥'의 죄수",
    "captain": "STR캐릭터의 공격력이 2배 증가한다.",
    "special": "일당에 걸려있는 모든 유리한 효과를 제거한다. 필살기 발동 시 체력이 50% 이상이면 1턴 동안 공격을 받아도 쓰러지지 않는다.",
    "specialName": "지옥에 남기는 말",
    "sailor": "캐릭터의 기본 공격력, 체력, 회복력을 +50"
  },
  {
    "no": 1706,
    "name": "Mr. 2 봉쿠레, '지옥'의 친구",
    "captain": "STR캐릭터의 공격력이 2.5배 증가하고, Perfect 3회 적중 시 STR캐릭터의 공격력이 3.125배가 된다.",
    "special": "일당에 걸려있는 모든 유리한 효과를 제거한다. 필살기 발동 시 체력이 50% 이상이면 1턴 동안 공격을 받아도 쓰러지지 않는다.",
    "specialName": "지옥에 남기는 말",
    "sailor": "캐릭터의 기본 공격력, 체력, 회복력을 +50",
    "limit": [
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 130"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: 필살기 턴 되감기가 2턴 회복된다."
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 #: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 0.5배 만큼 체력을 회복한다.",
          "Level 5: 전투 시작 시 체력이 50% 미만이면, 턴 종료시 Perfect 적중 할때마다 캐릭터 회복력의 1배 만큼 체력을 회복한다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1707,
    "name": "빨강 머리 샹크스, 사황",
    "captain": "PSY캐릭터의 공격력을 2.75배, 체력을 1.3배 증가시킨다. 일당의 체력이 많을 수록 PSY슬롯 출현율이 상승한다.",
    "special": "1턴 동안 적 전체의 방어력을 0으로 만들고 적 1기에 캐릭터 공격력 75배의 무속성 대미지를 준다. 모든 슬롯을 PSY슬롯으로 변환한다.",
    "specialName": "하늘을 가르는 외팔의 남자"
  },
  {
    "no": 1708,
    "name": "나미, 한여름의 콩닥콩닥",
    "captain": "턴 종료 시 캐릭터 회복력 3배의 체력을 회복한다",
    "special": "타격, 박식 캐릭터의 필살기 턴이 1턴 감소하고 마비 상태가 2턴 회복된다. 자속성 슬롯 이외의 슬롯을 랜덤으로 변환한다.",
    "specialName": "도둑고양이의 아이컨택",
    "sailor": "[TND]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1709,
    "name": "나미, 한여럼의 두근두근",
    "captain": "모든 캐릭터의 공격력이 1.5배 증가하고 턴 종료 시 캐릭터 회복력 4배의 체력을 회복한다",
    "special": "타격, 박식 캐릭터의 필살기 턴이 1턴 감소하고 마비 상태가 2턴 회복된다. 자속성 슬롯 이외의 슬롯을 랜덤으로 변환한다.",
    "specialName": "도둑고양이의 아이컨택",
    "sailor": "[TND]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1710,
    "name": "니코 로빈, 건강한 미모",
    "captain": "박식 캐릭터의 공격력, 회복력이 1.2배 증가한다.",
    "special": "1턴 동안 박식 캐릭터의 슬롯 영향력이 1.75배 증가하고 2턴 동안 받는 대미지가 30% 감소한다.",
    "specialName": "사랑스러운 어른의 매력",
    "sailor": "블라인드 상태가 2턴 회복된다."
  },
  {
    "no": 1711,
    "name": "니코 로빈, 문화의 상징",
    "captain": "박식 캐릭터의 회복력이 1.2배, 공격력이 1.5배 증가한다. 슬롯 일치 시 공격력이 3배 증가한다.",
    "special": "1턴 동안 박식 캐릭터의 슬롯 영향력이 1.75배 증가하고 2턴 동안 받는 대미지가 30% 감소한다.",
    "specialName": "사랑스러운 어른의 매력",
    "sailor": "블라인드 상태가 2턴 회복된다."
  },
  {
    "no": 1712,
    "name": "아카이누, 정상전쟁의 화문",
    "captain": "야심 캐릭터의 공격력이 2.5배 증가한다.",
    "special": "적 전체에게 캐릭터 공격력 50배의 무속성 대미지를 주고 1턴 동안 야심 캐릭터의 슬롯 영향력을 2배로 증가시킨다.",
    "specialName": "견교홍련"
  },
  {
    "no": 1713,
    "name": "아카이누, 정상전쟁의 업화",
    "captain": "야심 캐릭터의 공격력이 2.5배 증가한다, 이전 턴에 적을 격파했으면 일당의 공격 배율이 상승한다 (최대 3턴, 공격력 3.25배)",
    "special": "적 전체에게 캐릭터 공격력 50배의 무속성 대미지를 주고 1턴 동안 야심 캐릭터의 슬롯 영향력을 2배로 증가시킨다.",
    "specialName": "견교홍련",
    "limit": [
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "선원효과 추가 1: "
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "선원효과 추가 2: "
      },
      {
        "description": "잠재능력 습득 #: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 30",
          "Level 3: 공격력 상승 : 40",
          "Level 4: 공격력 상승 : 50",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1714,
    "name": "모네, 빙설의 화신",
    "captain": "INT캐릭터의 공격력이 2배 증가하고 턴 종료 시 캐릭터 회복력 2배의 체력을 회복한다.",
    "special": "적 전체에게 캐릭터 공격력 10배의 INT대미지를 주고 일당의 슬롯을 [TND][BOMB][RCV]슬롯으로 랜덤 변환한다.",
    "specialName": "강렬한 눈보라"
  },
  {
    "no": 1715,
    "name": "베르고, 해군 G-5 기지장",
    "captain": "타격 캐릭터의 공격력이 2배 증가한다. 만약 슬롯 일치시 공격력이 2.5배 증가한다.",
    "special": "자신의 슬롯을 [QCK]으로 변환하고 1턴 동안 모든 슬롯을 고정",
    "specialName": "입막음의 몰살자"
  },
  {
    "no": 1716,
    "name": "시저 크라운, 죽음의 나라의 왕",
    "captain": "일당의 체력을 50% 감소시키고 야심 캐릭터의 공격력을 1.2배 증가한다. 턴이 경과할수록 공격력이 0.1배씩 증가한다. (최대 3배)",
    "special": "적 전체의 공격이 1턴 지연되고 야심 캐릭터의 [EMPTY]슬롯이 자속성 슬롯으로 변환한다. 필살기 발동시 체력이 30% 이하이면 야심 캐릭터의 공격력이 1.75배 증가한다.",
    "specialName": "살육 GAS"
  },
  {
    "no": 1717,
    "name": "베가펑크의 드래곤(소형)",
    "captain": "모험 시작 시 사격 캐릭터의 필살기 턴이 2턴 감소한다.",
    "special": "적 전체에게 캐릭터 공격력 3배의 QCK대미지를 준다.",
    "specialName": "높은 기동성의 파이어볼 폭발"
  },
  {
    "no": 1718,
    "name": "버팔로, 돈키호테 해적단의 전투원",
    "captain": "Pefect를 적중 할 때까지 야심 캐릭터의 공격력이 2.5배 증가한다.",
    "special": "5턴 동안 야심 캐릭터의 공격력이 1.25배 증가한다.",
    "specialName": "소용돌이 치는 선회"
  },
  {
    "no": 1719,
    "name": "베이비 5, 돈키호테 해적단 메이드겸 암살자",
    "captain": "[PSY]캐릭터 공격력이 2배 증가한다. 만약 슬롯 일치시 PSY캐릭터는 INT슬롯도 이로운 슬롯으로 취급한다.",
    "special": "인접한 슬롯이 [G]슬롯으로 변환",
    "specialName": "환영 같은 \"무기변이\""
  },
  {
    "no": 1720,
    "name": "징베, 용궁 왕국 넵튠군 병사",
    "captain": "격투 캐릭터의 공격력이 2.5배 증가한다.",
    "special": "선장이 타격 캐릭터면 인접한 슬롯을 자속성 슬롯으로 변환하고 1턴 동안 체인 계수가 2.5배로 고정된다.",
    "specialName": "두목의 조용한 분노"
  },
  {
    "no": 1721,
    "name": "'대장' 징베, 용궁 왕국 넵튠군 병사",
    "captain": "격투 캐릭터의 체력을 1.4배 공격력을 2.5배 증가한다. 슬롯 일치시 공격력이 2.75배 증가한다.",
    "special": "선장이 타격 캐릭터면 인접한 슬롯을 자속성 슬롯으로 변환하고 1턴 동안 체인 계수가 2.5배로 고정된다.",
    "specialName": "두목의 조용한 분노",
    "limit": [
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: [STR][DEX]슬롯을 이로운 슬롯으로 취급한다."
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 30",
          "Level 3: 공격력 상승 : 40",
          "Level 4: 공격력 상승 : 50",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1722,
    "name": "해신 넵튠",
    "captain": "타격 캐릭터의 공격력이 2배 증가한다.",
    "special": "적 1기에 20,000의 고정 대미지를 주고 필살기 발동시 남은 체력이 30% 이하 일때 자신의 슬롯을 INT로 변환하고 타격 캐릭터의 공격력이 1.5배 증가한다.",
    "specialName": "해신의 일격"
  },
  {
    "no": 1723,
    "name": "해신 넵튠, 용궁 왕국 국왕",
    "captain": "타격 캐릭터의 공격력이 2배, 회복력이 1.2배 증가한다.",
    "special": "적 1기에 20,000의 고정 대미지를 주고 필살기 발동시 남은 체력이 30% 이하 일때 자신의 슬롯을 INT로 변환하고 타격 캐릭터의 공격력이 1.5배 증가한다.",
    "specialName": "해신의 일격"
  },
  {
    "no": 1724,
    "name": "후카보시, 넵튠가 삼형제 중 장남",
    "captain": "강인 캐릭터의 공격력이 1.5배 증가한다.",
    "special": "일당의 체력을 50% 감소시키고 1턴 동안 캐릭터 공격력 25배의 무속성 데미지를 추가한다.",
    "specialName": "태양의 희망"
  },
  {
    "no": 1725,
    "name": "후카보시, 왕국군 삼강",
    "captain": "강인 캐릭터의 자속성 슬롯 출현율이 약간 상승하고 공격력이 1.5배 증가한다.",
    "special": "일당의 체력을 50% 감소시키고 1턴 동안 캐릭터 공격력 25배의 무속성 데미지를 추가한다.",
    "specialName": "태양의 희망"
  },
  {
    "no": 1726,
    "name": "사보 [개], 용의 발톱",
    "captain": "Good > Great > Perfect 순으로 적중시 자유 캐릭터의 공격력이 2.75배 증가한다.",
    "specialName": "용조권: 용의 숨결 [Neo]",
    "special": "적 전체에게 무속성 랜덤 대미지를 주고 2턴 동안 캐릭터의 공격력 55배의 무속성 추가 데미지를 준다."
  },
  {
    "no": 1727,
    "name": "사보 [개],혁명군 참모총장",
    "captain": "Good > Great > Perfect 순으로 적중시 자유 캐릭터의 공격력이 3.5배 증가한다.",
    "specialName": "용조권: 용의 숨결 [Neo]",
    "special": "적 전체에게 무속성 랜덤 대미지를 주고 2턴 동안 캐릭터의 공격력 55배의 무속성 추가 데미지를 준다."
  },
  {
    "no": 1728,
    "name": "타시기, 해변의 대령",
    "captain": "[STR][DEX][QCK]캐릭터의 공격력을 2배 증가시킨다.",
    "special": "[BLOCK]슬롯을 포함한 모든 슬롯을 [STR][DEX][QCK]슬롯으로 랜덤 변환하고 적 전체에 걸려있는 공격력 증가 상태를 완전히 해제, 체력을 2,000회복",
    "sailor": "[STR][DEX][QCK]캐릭터의 기본 공격력, 체력, 회복력을 +30",
    "specialName": "파괴적인 물뿌리기"
  },
  {
    "no": 1729,
    "name": "타시기, 바캉스의 대령짱",
    "captain": "[STR][DEX][QCK]캐릭터의 공격력을 2.25배,체력을 1.25배 증가시키고 턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다.",
    "special": "[BLOCK]슬롯을 포함한 모든 슬롯을 [STR][DEX][QCK]슬롯으로 랜덤 변환하고 적 전체에 걸려있는 공격력 증가 상태를 완전히 해제, 체력을 2,000회복",
    "sailor": "[STR][DEX][QCK]캐릭터의 기본 공격력, 체력, 회복력을 +30",
    "specialName": "파괴적인 물뿌리기"
  },
  {
    "no": 1730,
    "name": "네펠타리 비비, 눈부신 순백",
    "captain": "모든 캐릭터의 공격력이 2배 증가한다.",
    "special": "모든 캐릭터의 필살기를 2턴 감소하고, 마비 상태를 3턴 회복, 받는 대미지를 2턴간 60% 감소시킨다.",
    "sailor": "자신의 필살기 턴 되감기를 3턴 회복한다.",
    "specialName": "내리쬐는 오아시스"
  },
  {
    "no": 1731,
    "name": "네펠타리 비비, 매혹의 투명함",
    "captain": "모든 캐릭터의 공격력이 2배 증가하고 획득한 베리가 2.5배가 된다.",
    "special": "모든 캐릭터의 필살기를 2턴 감소하고, 마비 상태를 3턴 회복, 받는 대미지를 2턴간 60% 감소시킨다.",
    "sailor": "자신의 필살기 턴 되감기를 3턴 회복한다.",
    "specialName": "내리쬐는 오아시스"
  },
  {
    "no": 1732,
    "name": "네코마무시, 고래의 숲의 수호자",
    "captain": "STR캐릭터 공격력이 2배, 타격, 강인 캐릭터의 체력이 1.1배 증가한다.",
    "special": "적 1기에 캐릭터 공격력 50배의 베리어 무시효과 무속성 대미지를 주고 적이 상태 이상 무효일 때 방해 슬롯을 포함한 전체 슬롯이 자속성 슬롯으로 변환하고 1턴 동안 타격, 강인 캐릭터의 공격력이 1.75배가 된다.",
    "specialName": "맹공의 수호신"
  },
  {
    "no": 1733,
    "name": "'밤의 왕' 네코마무시, 고래의 숲의 수호자",
    "captain": "STR캐릭터 공격력이 2.5배, 타격, 강인 캐릭터의 체력이 1.25배 증가한다.",
    "special": "적 1기에 캐릭터 공격력 50배의 베리어 무시효과 무속성 대미지를 주고 적이 상태 이상 무효일 때 방해 슬롯을 포함한 전체 슬롯이 자속성 슬롯으로 변환하고 1턴 동안 타격, 강인 캐릭터의 공격력이 1.75배가 된다.",
    "specialName": "맹공의 수호신"
  },
  {
    "no": 1734,
    "name": "슈가, 하비하비 열매의 능력자",
    "captain": "박식, 격투 캐릭터의 공격력이 1.5배 증가하고 턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다.",
    "special": "슬롯을 오른쪽 하단은 STR, 왼쪽 하단은 INT로 변환하고 슬롯을 2회 자유롭게 이동.",
    "specialName": "장난감의 백병전"
  },
  {
    "no": 1735,
    "name": "슈가, 트레볼군 특별간부",
    "captain": "박식, 격투 캐릭터의 공격력이 1.75배 증가하고 턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다.",
    "special": "슬롯을 오른쪽 하단은 STR, 왼쪽 하단은 INT로 변환하고 슬롯을 2회 자유롭게 이동.",
    "specialName": "장난감의 백병전"
  },
  {
    "no": 1736,
    "name": "트레볼, 끈적끈적 열매의 능력자",
    "captain": "INT캐릭터의 공격력을 2.25배 증가시키고 받는 데미지를 10% 감소시킨다.",
    "special": "적 전체의 공격을 1턴 지연시키고 2턴 동안 턴 종료 시 캐릭터 공격력 20배의 INT대미지를 준다.",
    "specialName": "끈적 끈적 연소 폭발"
  },
  {
    "no": 1737,
    "name": "트레볼, 돈키호테 패밀리 간부",
    "captain": "INT캐릭터의 공격력을 2.25배, 체력을 1.2배 증가시키고 받는 데미지를 10% 감소시킨다.",
    "special": "적 전체의 공격을 1턴 지연시키고 2턴 동안 턴 종료 시 캐릭터 공격력 20배의 INT대미지를 준다.",
    "specialName": "끈적 끈적 연소 폭발"
  },
  {
    "no": 1738,
    "name": "하이에나 베라미 [개], 전 베라미 해적단 선장",
    "captain": "야심 캐릭터의 공격력을 2배 증가시킨다.",
    "special": "적 1기의 체력을 10% 감소하고 1턴 동안 [PSY][INT]슬롯도 이로운 슬롯으로 취급, 슬롯 영향력을 1.75배 증가시킨다. ",
    "specialName": "스프링 호퍼 - 흉탄 [Neo]"
  },
  {
    "no": 1739,
    "name": "하이에나 베라미 [개], 드레스 로자의 흉탄",
    "captain": "야심 캐릭터의 공격력을 2.5배 증가시킨다.",
    "special": "적 1기의 체력을 10% 감소하고 1턴 동안 [PSY][INT]슬롯도 이로운 슬롯으로 취급, 슬롯 영향력을 1.75배 증가시킨다. ",
    "specialName": "스프링 호퍼 - 흉탄 [Neo]"
  },
  {
    "no": 1740,
    "name": "보아 선더소니아, 밀짚모자 일당의 협력자",
    "captain": "타격, 강인캐릭터의 공격력이 2배, DEX캐릭터의 체력이 1.1배 증가한다.",
    "special": "모든 슬롯을 DEX슬롯으로 변환하고 2턴 동안 적 전체의 방어력을 격감, 2턴 동안 타격과 강인캐릭터의 공격력이 1.75배가 된다",
    "sailor": "[STR}슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "뱀머리를 한 팔두사"
  },
  {
    "no": 1741,
    "name": "보아 선더소니아, 밀짚모자 일당의 공범자",
    "captain": "타격, 강인캐릭터의 공격력이 2.5배, DEX캐릭터의 체력이 1.3배 증가한다.",
    "special": "모든 슬롯을 DEX슬롯으로 변환하고 2턴 동안 적 전체의 방어력을 격감, 2턴 동안 타격과 강인캐릭터의 공격력이 1.75배가 된다",
    "sailor": "[STR}슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "뱀머리를 한 팔두사",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: 이 캐릭터의 공격력은 [STR]캐릭터를 상대로 2배 증가한다."
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
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
      }
    ]
  },
  {
    "no": 1742,
    "name": "보아 마리골드, 밀짚모자 일당의 협력자",
    "captain": "타격, 강인 캐릭터의 공격력이 2배, [STR]캐릭터의 체력이 1.1배 증가한다.",
    "special": "DEX, QCK 슬롯을 자속성 슬롯으로 변환하고 2턴 동안 방어력이 다운된 적에게 주는 대미지가 1.75배가 되며, 1턴 동안 받는 대미지가 60% 감소한다",
    "sailor": "DEX슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "뱀 머리를 한 살라맨더"
  },
  {
    "no": 1743,
    "name": "보아 마리골드, 밀짚모자 일당의 공범자",
    "captain": "타격, 강인 캐릭터의 공격력이 2.5배, [STR]캐릭터의 체력이 1.3배 증가한다.",
    "special": "DEX, QCK 슬롯을 자속성 슬롯으로 변환하고 2턴 동안 방어력이 다운된 적에게 주는 대미지가 1.75배가 되며, 1턴 동안 받는 대미지가 60% 감소한다",
    "sailor": "DEX슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "뱀 머리를 한 살라맨더",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: [DEX] 캐릭터에 대항하여 공격력이 2배 상승한다."
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Reduce No Healing duration"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
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
      }
    ]
  },
  {
    "no": 1744,
    "name": "마가렛, 밀짚모자 일당의 협력자",
    "captain": "사격 캐릭터의 공격력이 2배 증가한다.",
    "special": "적 1기의 체력을 7% 감소하고 3턴 동안 사격 캐릭터의 슬롯 영향이 매우 커진다 (1.75배)",
    "sailor": "사격 캐릭터의 기본 공격력, 체력, 회복력을 +30",
    "specialName": "방어자의 스페이드 모양 화살"
  },
  {
    "no": 1745,
    "name": "마가렛, 밀짚모자 일당의 공범자",
    "captain": "사격 캐릭터의 공격력이 2배가 되고 턴 종료 후 캐릭터의 회복력 2배의 체력을 회복한다",
    "special": "적 1기의 체력을 7% 감소하고 3턴 동안 사격 캐릭터의 슬롯 영향이 매우 커진다 (1.75배)",
    "sailor": "사격 캐릭터의 기본 공격력, 체력, 회복력을 +30",
    "specialName": "방어자의 스페이드 모양 화살",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Reduce No Healing duration"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: Reduces Blindness duration by 3 턴"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Barrier Penetration"
      }
    ],
    "potential": [
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
      }
    ]
  },
  {
    "no": 1746,
    "name": "보아 행콕, 밀짚모자 일당의 협력자",
    "captain": "앞 캐릭터의 공격 타이밍에 따라 이후의 사격형 캐릭터의 공격력이 최소 2.5배, 최대 3.25배가 되며, RCV 슬롯과 TND의 출현율이 대폭 감소하지만, 턴 종료 시 체력을 999 회복한다.",
    "special": "무작위의 적에게 고정 데미지 20,000을 6회 주고, 공격을 1턴 지연시키며, 1턴 동안 사격 캐릭터의 모든 속성슬롯을 이로운 슬롯으로 취급한다.",
    "specialName": "총 키스"
  },
  {
    "no": 1747,
    "name": "보아 행콕, 밀짚모자 일당의 공범자",
    "captain": "앞 캐릭터의 공격 타이밍에 따라 이후의 사격형 캐릭터의 공격력이 최소 2.5배, 최대 3.25배가 되며, RCV 슬롯과 TND의 출현율이 대폭 감소하지만, 턴 종료 시 체력을 1,000 회복한다.",
    "special": "무작위의 적에게 고정 데미지 20,000을 6회 주고, 공격을 1턴 지연시키며, 2턴 동안 사격 캐릭터의 모든 속성슬롯을 이로운 슬롯으로 취급한다.",
    "specialName": "총 키스",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 개방 1: Pinch Healing"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "선원효과 개방 1: 선장이 자유 캐릭터라면, 이 유닛의 모든 슬롯이 이로운 슬롯으로 취급된다."
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "잠재능력 개방 2: Barrier Penetration"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 80"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "잠재능력 개방 3: 회복 무효 상태 회복"
      }
    ],
    "potential": [
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
      }
    ]
  },
  {
    "no": 1748,
    "name": "베포, 밀짚모자 일당의 협력자",
    "captain": "QCK 캐릭터의 공격력과 체력을 1.5배 상승시킨다.",
    "special": "적의 일정 이상 데미지 격감 상태를 5차례 줄이고, 적 1기의 체력을 15% 감소시킨다.",
    "sailor": "자신이 PERFECT 공격에 성공하면 다음 턴에도 자신의 [QCK] 속성 슬롯이 유지된다",
    "specialName": "베어 러시 아웃"
  },
  {
    "no": 1749,
    "name": "베포, 밀짚모자 일당의 공범자",
    "captain": "모험을 시작할 때 필살 턴을 2턴 단축하고, QCK 캐릭터의 공격력과 체력이 2배가 된다.",
    "special": "적의 일정 이상 데미지 격감 상태를 5차례 줄이고, 적 1기의 체력을 15% 감소시킨다.",
    "sailor": "자신이 PERFECT 공격에 성공하면 다음 턴에도 자신의 [QCK] 속성 슬롯이 유지된다",
    "specialName": "베어 러시 아웃",
    "limit": [
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: [DEX]슬롯도 이로운 슬롯으로 취급한다."
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1750,
    "name": "'죽음의 외과의' 트라팔가 로, '조커'를 노리는 '하트'",
    "captain": "타격 캐릭터의 공격력을 3배로 만들고, 턴 종료 시에 PERFECT 1회당 캐릭터의 회복력x0.4배의 체력을 회복한다.",
    "special": [
      {
        "description": "적 1명에게 고정 데미지 50,000을 주고, 1턴 동안 타격 캐릭터의 슬롯 영향을 상당히(x1.75) 증폭시킨다.",
        "cooldown": [
          15,
          10
        ]
      },
      {
        "description": "적 1명에게 고정 데미지 300,000을 주고, 1턴 동안 타격 캐릭터의 슬롯 영향을 엄청나게(x2.24) 증폭시킨다.",
        "cooldown": [
          20,
          15
        ]
      }
    ],
    "specialName": "인젝션 샷"
  },
  {
    "no": 1751,
    "name": "'왕의 부하 칠무해' 트라팔가 로, '조커'를 노리는 '하트'",
    "captain": "타격 캐릭터의 공격력을 3배로 만들고, 턴 종료 시에 PERFECT 1회당 캐릭터의 회복력x0.5배의 체력을 회복한다.",
    "special": [
      {
        "description": "적 1명에게 고정 데미지 50,000을 주고, 1턴 동안 타격 캐릭터의 슬롯 영향을 상당히(x1.75) 증폭시킨다.",
        "cooldown": [
          15,
          10
        ]
      },
      {
        "description": "적 1명에게 고정 데미지 300,000을 주고, 1턴 동안 타격 캐릭터의 슬롯 영향을 엄청나게(x2.24) 증폭시킨다.",
        "cooldown": [
          20,
          15
        ]
      }
    ],
    "specialName": "인젝션 샷",
    "limit": [
      {
        "description": "선원효과 개방 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 개방 1: Pinch Healing"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "선원효과 개방 1: 타격 캐릭터의 기본 공격력 50 증가"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "잠재능력 개방 2: Reduce No Healing Duration"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "선원효과 개방 2: RCV슬롯과 TND슬롯도 이로운 슬롯으로 취급한다."
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "잠재능력 개방 3: Barrier Penetration"
      }
    ],
    "potential": [
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
      }
    ]
  },
  {
    "no": 1752,
    "name": "롤로노아 조로, Celebrate 20th Anniversary Cruise",
    "captain": "30코스트 이하의 캐릭터의 공격력을 2.5배로 증가시킨다.",
    "special": "적 1기에게 INT의 큰 데미지를 주고, 1턴 동안 코스트 30 이하 캐릭터의 공격력이 1.75배, 자신이 선장, 친구 선장, 조력자 선장일 때, 이 턴에서 PERFECT를 4회 성공하면 다음 턴에 코스트 30 이하 캐릭터의 공격력이 2배가 된다.",
    "sailor": "참격 캐릭터의 기본 공격력을 +50",
    "specialName": "삼도류: 극 호랑이 사냥"
  },
  {
    "no": 1753,
    "name": "롤로노아 조로, 20th Anniversary Memorial Treasure",
    "captain": "B코스트 30 이하의 캐릭터의 공격력을 2.5배, 체력을 1.3배, PERFECT 3회 연속 이후 일당의 공격력이 추가로 1.4배 증가한다.",
    "special": "적 1기에게 지능 속성의 큰 데미지를 주고, 1턴 동안 코스트 30 이하 캐릭터의 공격력이 1.75배, 자신이 선장, 친구 선장, 조력자 선장일 때, 이 턴에서 PERFECT를 4회 성공하면 다음 턴에 코스트 30 이하 캐릭터의 공격력이 2배가 된다.",
    "sailor": "참격 캐릭터의 기본 공격력을 +50",
    "specialName": "삼도류: 극 호랑이 사냥"
  },
  {
    "no": 1754,
    "name": "상디, Celebrate 20th Anniversary Cruise",
    "captain": "격투, 참격 캐릭터의 공격력이 2배로 증가한다.",
    "special": "적 1기의 체력을 15% 감소시키고 모든 독 상태를 회복, 1턴 동안 일당의 슬롯 영향을 상당히 확대한다.",
    "sailor": "모든 캐릭터의 기본 공격력, 체력, 회복력을 +40",
    "specialName": "디아블 잠브: 목살 스트라이크"
  },
  {
    "no": 1755,
    "name": "상디, 20th Anniversary Memorial Treasure",
    "captain": "격투, 참격 캐릭터의 공격력이 2.5배 체력이 1.2배 증가한다.",
    "special": "적 1기의 체력을 15% 감소시키고 모든 독 상태를 회복, 1턴 동안 일당의 슬롯 영향을 상당히 확대한다.",
    "sailor": "모든 캐릭터의 기본 공격력, 체력, 회복력을 +40",
    "specialName": "디아블 잠브: 목살 스트라이크"
  },
  {
    "no": 1756,
    "name": "나미, Celebrate 20th Anniversary Cruise",
    "captain": "턴 종료 후 캐릭터 회복력 2배의 체력을 회복한다.",
    "special": "1턴 동안 받은 데미지를 80% 감소시키고, 적의 일정 이상 데미지 격감과 공격력 증가 상태를 3턴 감소시킨다.",
    "sailor": "[DEX]슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "돌풍 소드"
  },
  {
    "no": 1757,
    "name": "나미, 20th Anniversary Memorial Treasure",
    "captain": "턴 종료 후 캐릭터 회복력 5배의 체력을 회복한다.",
    "special": "1턴 동안 받은 데미지를 80% 감소시키고, 적의 일정 이상 데미지 격감과 공격력 증가 상태를 3턴 감소시킨다.",
    "sailor": "[DEX]슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "돌풍 소드"
  },
  {
    "no": 1758,
    "name": "브룩, Celebrate 20th Anniversary Cruise",
    "captain": "자유 캐릭터의 공격력을 2배, 체력을 1.1배 증가시킨다.",
    "special": "적 전체의 공격을 1턴 지연시키고, 봉인 · 선장효과 무효와 저림 상태를 1턴 회복한다.",
    "sailor": "[RCV]슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "파티 음악: 퀸트 티어스 판타지아"
  },
  {
    "no": 1759,
    "name": "브룩, 20th Anniversary Memorial Treasure",
    "ccaptain": "자유 캐릭터의 공격력을 2.5배, 체력을 1.2배 증가시킨다.",
    "special": "적 전체의 공격을 1턴 지연시키고, 봉인 · 선장효과 무효와 저림 상태를 1턴 회복한다.",
    "sailor": "[RCV]슬롯도 이로운 슬롯으로 취급한다.",
    "specialName": "파티 음악: 퀸트 티어스 판타지아"
  },
  {
    "no": 1760,
    "name": "토니토니 쵸파, Celebrate 20th Anniversary Cruise",
    "captain": "[DEX][INT]캐릭터의 공격력을 2배로 증가시킨다.",
    "special": "일당의 슬롯을 오른쪽에서 [INT][PSY][DEX], 왼쪽에서 [INT][RCV][DEX]로 변환한다.",
    "sailor": "자신의 필살기 봉인 상태와 필살기 턴 되감기를 2 턴 회복",
    "specialName": "지혜의 괴물"
  },
  {
    "no": 1761,
    "name": "토니토니 쵸파, 20th Anniversary Memorial Treasure",
    "captain": "[DEX][INT]캐릭터의 공격력을 2.5배로 증가시킨다.",
    "special": "일당의 슬롯을 오른쪽에서 [INT][PSY][DEX], 왼쪽에서 [INT][RCV][DEX]로 변환한다.",
    "sailor": "자신의 필살기 봉인 상태와 필살기 턴 되감기를 2 턴 회복",
    "specialName": "지혜의 괴물"
  },
  {
    "no": 1762,
    "name": "로브 루치, 세계정부의 괴물",
    "captain": "강인 타입 캐릭터의 공격력이 2.5배, 체력이 1.2배, 회복력이 반감되고 같은 턴에 퍼펙트를 연속으로 성공하면 같은 타입 캐릭터의 공격력이 1.1배씩 상승한다 (최대 4.026배)",
    "special": "2턴 동안 적 전체의 방어력을 격감, 적 전체에 무속성 특대 대미지를 입히고 강인 타입 캐릭터의 모든 슬롯을 자속성 슬롯으로 변환, 최대 체력의 20%의 체력을 회복한다",
    "specialName": "지건: 「화발」"
  },
  {
    "no": 1763,
    "name": "수인 루치, 세계정부의 괴물",
    "captain": "강인 타입 캐릭터의 공격력이 2.5배, 체력이 1.2배, 회복력이 반감되고 같은 턴에 퍼펙트를 연속으로 성공하면 같은 타입 캐릭터의 공격력이 1.1배씩 상승한다 (최대 4.026배)",
    "special": "2턴 동안 적 전체의 방어력을 격감, 적 전체에 무속성 특대 대미지를 입히고 강인 타입 캐릭터의 모든 슬롯을 자속성 슬롯으로 변환, 최대 체력의 20%의 체력을 회복한다",
    "specialName": "지건: 「화발」",
    "limit": [
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Pinch Healing"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "선원효과 추가 1: 강인 캐릭터의 기본 공격 +50"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "체력 상승 : 70"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "선원효과 추가 2: [RCV],[TND]도 이로운 슬롯으로 만든다."
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "잠재능력 습득 3: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Pinch Healing",
        "description": [
          "Level 1: 전투 시작 시 체력이 10% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 2: 전투 시작 시 체력이 15% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 3: 전투 시작 시 체력이 20% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 4: 전투 시작 시 체력이 30% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect",
          "Level 5: 전투 시작 시 체력이 50% 미만이면, heals for 2x this character's RCV at the end of the 턴 each time you hit a Perfect"
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 7턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 완전히 무효화시킨다."
        ]
      }
    ]
  },
  {
    "no": 1764,
    "name": "쿠잔, 전 해군본부 최고전력",
    "captain": "일당의 공격력이 2.25배, 체력이 1.25배가 되고 이전 턴에 적을 1기라도 격파하면 공격 배율이 상승 (최대 5차례, 공격력 3.5배)",
    "special": "필살기 발동시 일당의 공격력 상승, 슬롯 영향 강화 효과를 1턴 연장하고 1턴 동안 체인을 2.5배로 고정하며, 적 전체에 100,000의 전체 방어 효과를 무시한 고정 대미지를 준다",
    "specialName": "결단한 남자의 빙격"
  },
  {
    "no": 1765,
    "name": "족장족 블루 길리",
    "captain": "격투 타입 캐릭터의 공격력이 1.5배가 된다",
    "special": "적 전체의 랜덤 대상에게 캐릭터 공격력x5배의 무속성 대미지를 10회 주고 1턴 동안 적 전체의 방어력을 반감, 자속성 이외 [BLOCK]슬롯 포함한 모든 슬롯을 랜덤 변환",
    "specialName": "각공도 연속차기"
  },
  {
    "no": 1766,
    "name": "족장족 블루 길리, 각공도 격투가",
    "captain": "격투 타입 캐릭터의 공격력이 1.5배가 되고 체인 계수 증가량이 1.5배가 된다",
    "special": "적 전체의 랜덤 대상에게 캐릭터 공격력x5배의 무속성 대미지를 10회 주고 1턴 동안 적 전체의 방어력을 반감, 자속성 이외 [BLOCK]슬롯 포함한 모든 슬롯을 랜덤 변환",
    "specialName": "각공도 연속차기"
  },
  {
    "no": 1767,
    "name": "암살자 펑크형제",
    "captain": "격투 타입 캐릭터의 공격력이 1.75배가 된다",
    "special": "적 전체의 공격을 1턴 지연시키고 이 턴에서 일당 전원이 Great공격에 성공하면 다음 턴에 격투 타입 캐릭터의 공격력이 1.5배가 된다",
    "specialName": "자비없는 기습"
  },
  {
    "no": 1768,
    "name": "압룰라&제트, 흉악범죄자",
    "captain": "참격과 타격 타입 캐릭터의 공격력이 1.5배가 된다",
    "special": "2턴 동안 턴 종료시에 적 전체의 체력을 10% 감소한다",
    "specialName": "지독한 추격"
  },
  {
    "no": 1769,
    "name": "벤 베크만, 빨강 머리 해적단 부선장",
    "captain": "박식 타입 캐릭터의 공격력이 2.5배가 된다.",
    "special": "적 전체의 공격을 1턴 지연시키고 선장이 박식 타입일 경우 1턴 동안 지연 중의 적에게 주는 대미지가 1.5배가 되며, 인접 슬롯이 자속성 슬롯을 변환한다",
    "specialName": "억제의 총구"
  },
  {
    "no": 1770,
    "name": "벤 베크만, '사황' 빨강 머리의 오른팔",
    "captain": "박식 타입 캐릭터의 공격력이 2.5배, 체력이 1.2배가 되며, Good > Great > Perfect 판정 이후 같은 타입 캐릭터의 공격력이 3.25배가 된다",
    "special": "적 전체의 공격을 1턴 지연시키고 선장이 박식 타입일 경우 1턴 동안 지연 중의 적에게 주는 대미지가 1.5배가 되며, 인접 슬롯이 자속성 슬롯을 변환한다",
    "specialName": "억제의 총구",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: 봉인상태가 3 턴 감소한다."
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 2: 캐릭터 공격력의 2배의 무속성 데미지 추가"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 50",
          "Level 3: 공격력 상승 : 80",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1771,
    "name": "폭군 바르톨로뮤 쿠마 [개]",
    "captain": "박식 타입 캐릭터의 공격력과 체력이 2 배가 된다",
    "specialName": "밀쳐내기 압력포 [Neo]",
    "special": "[RCV][TND][EMPTY][BLOCK][BOMB]슬롯을 자속성 슬롯으로 변환하고, 1 턴 동안 슬롯의 영향이 1.75배가 된다"
  },
  {
    "no": 1772,
    "name": "폭군 바르톨로뮤 쿠마 [개], 정부의 인간 병기",
    "captain": "박식 타입 캐릭터의 공격력과 체력이 2 배가 되고 적으로부터받은 INT대미지의 5 배를 턴 종료시 적 전체에 준다",
    "specialName": "밀쳐내기 압력포 [Neo]",
    "special": "[RCV][TND][EMPTY][BLOCK][BOMB]슬롯을 자속성 슬롯으로 변환하고, 1 턴 동안 슬롯의 영향이 1.75배가 된다"
  },
  {
    "no": 1773,
    "name": "'사무라이' 킨에몬",
    "captain": "자유 타입 캐릭터의 공격력이 2배, 체력이 1.2배가 되며, 받는 대미지를 10% 감소한다",
    "special": "적 1기에게 공격력 20배의 INT대미지를 주고 1턴 동안 자유 타입 캐릭터의 슬롯 영향을 상당히 증폭시킨다 (1.5배)",
    "specialName": "여우불류 붉은 빛의 도선",
    "sailor": "자유 타입 캐릭터의 기본 공격력이 +25"
  },
  {
    "no": 1774,
    "name": "'사무라이' 여우불의 킨에몬",
    "captain": "자유 타입 캐릭터의 공격력이 2.25배, 체력이 1.25배가 되며, 받는 대미지를 15% 감소한다",
    "special": "적 1기에게 공격력 20배의 INT대미지를 주고 1턴 동안 자유 타입 캐릭터의 슬롯 영향을 상당히 증폭시킨다 (1.75배)",
    "specialName": "여우불류 붉은 빛의 도선",
    "sailor": "자유 타입 캐릭터의 기본 공격력이 +25"
  },
  {
    "no": 1775,
    "name": "'사무라이' 모모노스케",
    "captain": "QCK캐릭터의 공격력이 1.5배가 되고 QCK슬롯 출현율이 상승한다",
    "special": "1턴 동안 받는 대미지를 50% 감소시키고 일당의 슬롯을 2회 자유 이동한다",
    "specialName": "용이 머무는 아이"
  },
  {
    "no": 1776,
    "name": "'용' 모모노스케",
    "captain": "QCK캐릭터의 공격력이 1.75배가 되고 QCK슬롯 출현율이 상승한다",
    "special": "1턴 동안 받는 대미지를 50% 감소시키고 일당의 슬롯을 2회 자유 이동한다",
    "specialName": "용이 머무는 아이"
  },
  {
    "no": 1777,
    "name": "키자루, 성지로부터의 사자",
    "captain": "자유 타입 캐릭터의 공격력이 2.5배가 된다",
    "special": "모든 방어 효과를 무시하고 적 1기에 캐릭터 공격력 50배의 무속성 대미지를 주며, 자유 타입 캐릭터의 [BLOCK], STR, INT슬롯을 자속성 슬롯으로 변환, 3턴 동안 체인 계수가 +0.2",
    "specialName": "파마의 빛 화살"
  },
  {
    "no": 1778,
    "name": "키자루, 성지로부터의 광림",
    "captain": "자유 타입 캐릭터의 공격력이 2.5배, 체력이 1.2배가 되며, 턴 종료시에 캐릭터 회복력 1.5배의 체력을 회복한다",
    "special": "모든 방어 효과를 무시하고 적 1기에 캐릭터 공격력 50배의 무속성 대미지를 주며, 자유 타입 캐릭터의 [BLOCK], STR, INT슬롯을 자속성 슬롯으로 변환, 3턴 동안 체인 계수가 +0.2",
    "specialName": "파마의 빛 화살",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "선원효과 추가 1: [DEX]슬롯도 이로운 슬롯으로 취급"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 2: 사격, 자유 타입 캐릭터의 모든 스텟을 +50"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 20% 확률로 공격력의 10% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1779,
    "name": "키자루 [개]",
    "captain": "사격 타입 캐릭터의 공격력이 2 배가 된다",
    "specialName": "팔치경「Neo」",
    "special": [
      {
        "description": "자신의 슬롯을 [DEX]으로 변환한다. 사격과 격투 타입 캐릭터의 필살턴을 1턴 단축한다",
        "cooldown": [
          14,
          5
        ]
      },
      {
        "description": "자신의 슬롯을 [DEX]으로 변환한다. 사격과 격투 타입 캐릭터의 필살턴을 1턴 단축한다. 2 턴 동안 체인 계수가 +0.5된다",
        "cooldown": [
          20,
          11
        ]
      }
    ]
  },
  {
    "no": 1780,
    "name": "키자루 [개], 빛의 인간",
    "captain": "사격 타입 캐릭터의 필살기 턴을 2 단축, 사격 타입 캐릭터의 공격력이 2.25 배, 체력이 1.5 배가 된다",
    "specialName": "팔치경「Neo」",
    "special": [
      {
        "description": "자신의 슬롯을 [DEX]으로 변환한다. 사격과 격투 타입 캐릭터의 필살턴을 1턴 단축한다",
        "cooldown": [
          14,
          5
        ]
      },
      {
        "description": "자신의 슬롯을 [DEX]으로 변환한다. 사격과 격투 타입 캐릭터의 필살턴을 1턴 단축한다. 2 턴 동안 체인 계수가 +0.5된다",
        "cooldown": [
          20,
          11
        ]
      }
    ]
  },
  {
    "no": 1781,
    "name": "투어",
    "captain": "강인 타입 캐릭터의 공격력이 1.75배가 되고 강인 타입 캐릭터는 [TND],[RCV]슬롯을 유리한 슬롯으로 취급한다",
    "special": "적 전체에 캐릭터 공격력 5배의 STR대미지를 주고 자신의 슬롯을 힘으로 변환, 1턴 동안 자신의 공격력이 1.3배가 된다",
    "specialName": "꿰뚫는 쌍각"
  },
  {
    "no": 1782,
    "name": "수령 칭자오, 칭자오 패밀리",
    "captain": "QCK캐릭터의 공격력이 2.25배가 되고 필살기로 주는 QCK대미지가 1.75배가 된다",
    "special": "적 전체의 공격을 2턴 지연시키고 적 1기에게 캐릭터 공격력 25배의 QCK대미지를 준다",
    "specialName": "무두(武頭)"
  },
  {
    "no": 1783,
    "name": "하이루딘, 거인용병",
    "captain": "강인 타입 캐릭터의 공격력과 체력이 1.5배가 된다",
    "special": "일당 전원의 슬롯을 1턴 고정하고 Pefect 공격 4회 적중 시 다음 턴에 일당의 슬롯 영향을 확대 (1.5배)",
    "specialName": "전투거인의 철권"
  },
  {
    "no": 1784,
    "name": "후지토라, 해군본부 대장",
    "captain": "모험을 시작할 때 일당의 필살턴을 2턴 단축하고 ★4 이하 캐릭터의 공격력이 2.5배가 된다",
    "special": "적 전체에 랜덤 INT대미지를 주고 일당의 필살턴을 1턴 단축, 1턴 동안 모든 속성 캐릭터의 공격력이 1.5배가 된다",
    "specialName": "부동의 틈"
  },
  {
    "no": 1785,
    "name": "스파르탄",
    "captain": "턴 종료 후 캐릭터 회복력 3배의 체력을 회복한다",
    "special": "체력을 3000회복, 1턴 동안 일당의 슬롯 영향이 조금 확대 (1.25배)",
    "specialName": "들끓는 투기"
  },
  {
    "no": 1786,
    "name": "돈키호테 해적단 구성원, 격투부대 하급병사",
    "special": "1턴 동안 사격 타입 캐릭터는 [QCK]슬롯이 유리한 속성으로 취급된다",
    "specialName": "사격 타입 유리 슬롯: [QCK]"
  },
  {
    "no": 1787,
    "name": "돈키호테 해적단 구성원, 격투부대 특공병사",
    "special": "일당의 체력을 50% 중리고 적 1기에게 감소값 5배의 무속성 대미지를 준다",
    "specialName": "리스키 어택"
  },
  {
    "no": 1788,
    "name": "돈키호테 해적단 구성원, 격투부대 특수병사",
    "special": "1턴 동안 사격 타입 캐릭터의 공격력이 1.2배가 된다",
    "specialName": "공격 부스팅: 사격"
  },
  {
    "no": 1789,
    "name": "돈키호테 해적단 구성원, 격투부대 정찰병사",
    "special": "2턴 동안 [RCV]슬롯의 출현율이 약간 상승한다",
    "specialName": "미트 위드 미트"
  },
  {
    "no": 1790,
    "name": "돈키호테 해적단 구성원, 격투부대 첩보병사",
    "special": "3턴 동안 턴 종료시에 캐릭터 회복력 3배의 체력을 회복한다",
    "specialName": "오토 라이트 힐링"
  },
  {
    "no": 1791,
    "name": "루시, 코리다 콜로세움 C블록의 미스터리 검투사",
    "captain": "Pefect 3회 연속 적중 시 [STR][DEX][QCK]의 공격력이 2.5배가 된다.",
    "special": "모든 방어 효과를 무시하고 적 1 기의 HP를 20 % 줄이고 상단 슬롯을 [STR] , 중단을 [QCK] 하단을 [DEX] 로 변환, 1 턴 동안 슬롯의 영향이 1.75배 증가",
    "sailor": "선장이 [STR]이라면, 자신이 [STR] 속성에 미치는 통상 공격에 의한 데미지가 1.5배가 된다",
    "specialName": "고무고무 호크 라이플"
  },
  {
    "no": 1792,
    "name": "루시, 코리다 콜로세움 C블록의 풍운아",
    "captain": "[STR][DEX][QCK]캐릭터의 회복력이 1.2배가 되고 Pefect 3회 연속 적중 시 [STR][DEX][QCK]의 공격력이 3.25배가 된다.",
    "special": "모든 방어 효과를 무시하고 적 1 기의 HP를 20 % 줄이고 상단 슬롯을 [STR] , 중단을 [QCK] 하단을 [DEX] 로 변환, 1 턴 동안 슬롯의 영향이 1.75배 증가",
    "sailor": "선장이 [STR]이라면, 자신이 [STR] 속성에 미치는 통상 공격에 의한 데미지가 1.5배가 된다",
    "specialName": "고무고무 호크 라이플",
    "limit": [
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "선원효과 추가 1:선장이 [STR] 속성이라면 [DEX][QCK] 속성의 공격과 체력이 +75 "
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: 이 캐릭터가 Perfect 적중 시, 20% 확률로 캐릭터 대미지의 3%만큼 추가데미지를 입힌다.",
          "Level 2: 이 캐릭터가 Perfect 적중 시, 30% 확률로 캐릭터 대미지의 5%만큼 추가데미지를 입힌다.",
          "Level 3: 이 캐릭터가 Perfect 적중 시, 30% 확률로 캐릭터 대미지의 5%만큼 추가데미지를 입힌다.",
          "Level 4: 이 캐릭터가 Perfect 적중 시, 50% 확률로 캐릭터 대미지의 5%만큼 추가데미지를 입힌다.",
          "Level 5: 이 캐릭터가 Perfect 적중 시, 50% 확률로 캐릭터 대미지의 7%만큼 추가데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 60",
          "Level 3: 공격력 상승 : 90",
          "Level 4: 공격력 상승 : 120",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1793,
    "name": "루시, 코리다 콜로세움 최종 라운드의 풍운아",
    "captain": " 일당에 [STR][DEX][QCK]이 있을 때 [STR][DEX][QCK]은 공격력이 2.75배, 체력이 1.3배, [DEX][QCK]슬롯도 유리한 슬롯 취급, [STR]슬롯 출현률 격감, 일당에 [PSY][INT]이 없을 때는 [STR][DEX][QCK]의 공격력이 1.35배 증가 (공격력이 2.75 배가되는 효과와 중복 가능)",
    "special": "1 턴 동안 [STR][DEX][QCK]의 공격력이 1.75 배가 된다. 같은 턴에 Perfect 공격 4 회 성공으로 다음 턴에[STR][DEX][QCK]의 공격력이 2배가된다.",
    "specialName": "용의 발톱 : 파동 상쇄"
  },
  {
    "no": 1794,
    "name": "루시, 코리다 콜로세움 우승자",
    "captain": " 일당에 [STR][DEX][QCK]이 있을 때 [STR][DEX][QCK]은 공격력이 2.75배, 체력이 1.3배, [DEX][QCK]슬롯도 유리한 슬롯 취급, [STR]슬롯 출현률 격감, 일당에 [PSY][INT]이 없을 때는 [STR][DEX][QCK]의 공격력이 1.35배 증가 (공격력이 2.75 배가되는 효과와 중복 가능)",
    "special": "1 턴 동안 [STR][DEX][QCK]의 공격력이 1.75 배가 된다. 같은 턴에 Perfect 공격 4 회 성공으로 다음 턴에[STR][DEX][QCK]의 공격력이 2배가된다.",
    "specialName": "용의 발톱 : 파동 상쇄",
    "limit": [
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 5"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 5"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "선원효과 추가 1: 자신에게 발동된 필살 턴 되감기를 2턴 회복한다."
      },
      {
        "description": "체력 상승 : 35"
      },
      {
        "description": "체력 상승 : 45"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 15"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 15"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      },
      {
        "description": "공격력 상승 : 25"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "체력 상승 : 75"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 35"
      },
      {
        "description": "체력 상승 : 85"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 25"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 35"
      },
      {
        "description": "선원효과 추가 2: [STR][DEX][QCK]캐릭터의 기초 스텟을 +50"
      },
      {
        "description": "체력 상승 : 100"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "잠재능력 습득 3: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: 이 캐릭터가 Perfect 적중 시, 20% 확률로 캐릭터 대미지의 3%만큼 추가데미지를 입힌다.",
          "Level 2: 이 캐릭터가 Perfect 적중 시, 30% 확률로 캐릭터 대미지의 5%만큼 추가데미지를 입힌다.",
          "Level 3: 이 캐릭터가 Perfect 적중 시, 30% 확률로 캐릭터 대미지의 5%만큼 추가데미지를 입힌다.",
          "Level 4: 이 캐릭터가 Perfect 적중 시, 50% 확률로 캐릭터 대미지의 5%만큼 추가데미지를 입힌다.",
          "Level 5: 이 캐릭터가 Perfect 적중 시, 50% 확률로 캐릭터 대미지의 10%만큼 추가데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 60",
          "Level 2: 공격력 상승 : 90",
          "Level 3: 공격력 상승 : 120",
          "Level 4: 공격력 상승 : 150",
          "Level 5: 공격력 상승 : 200"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 3턴 감소시킨다",
          "Level 2: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 7턴 감소시킨다",
          "Level 4: 캐릭터의 봉인상태를 10턴 감소시킨다",
          "Level 5: 캐릭터의 봉인상태를 무효화 시킨다"
        ]
      }
    ]
  },
  {
    "no": 1795,
    "name": "Mr. 디아만테,코리다 콜로세움의 영웅",
    "captain": "참격과 야심 타입 캐릭터의 공격력이 2배가 된다",
    "special": "적 전체의 공격을 2턴 지연시키고 적에게 걸려있는 방어력 증가, 대미지 감소 상태(일정 대미지 이상 격감 제외)를 3턴 줄이고 오른쪽 열의 속성 슬롯을 자속성 슬롯을 변환한다",
    "sailor": "자신이 STR캐릭터에게 주는 대미지가 1.1배가 된다",
    "specialName": "Snake Sword"
  },
  {
    "no": 1796,
    "name": "디아만테, 드레스로자 현 국왕의 패밀리",
    "captain": "참격과 야심 타입 캐릭터의 공격력이 2.5배가 된다",
    "special": "적 전체의 공격을 2턴 지연시키고 적에게 걸려있는 방어력 증가, 대미지 감소 상태(일정 대미지 이상 격감 제외)를 3턴 줄이고 오른쪽 열의 속성 슬롯을 자속성 슬롯을 변환한다",
    "sailor": "자신이 STR캐릭터에게 주는 대미지가 1.1배가 된다",
    "specialName": "뱀의 검d",
    "limit": [
      {
        "description": "공격력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Barrier Penetration"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: 캐릭터의 침묵상태가 3 턴 감소한다"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
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
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1797,
    "name": "지저스 바제스, 코리다 콜로세움 A블록의 '챔피언'",
    "captain": "격투 타입 캐릭터의 공격력이 2.25배가 된다",
    "special": [
      {
        "description": "적 전체의 체력을 10% 감소",
        "cooldown": [
          15,
          9
        ]
      },
      {
        "description": "적 전체의 체력을 20% 감소",
        "cooldown": [
          18,
          12
        ]
      },
      {
        "description": "적 전체의 체력을 20% 감소, 2턴 동안 지연상태의 적에게 주는 대미지가 1.5배가 된다",
        "cooldown": [
          21,
          15
        ]
      }
    ],
    "sailor": "[STR][DEX][QCK]캐릭터는 기본 능력치가 +75가 된다",
    "specialName": "파동 엘보"
  },
  {
    "no": 1798,
    "name": "지저스 바제스, 새장 속의 암약자",
    "captain": "격투 타입 캐릭터의 공격력이 2.5배가 되고 야심과 강인 타입 캐릭터의 체력이 1.25배가 된다",
    "special": [
      {
        "description": "적 전체의 체력을 10% 감소",
        "cooldown": [
          15,
          9
        ]
      },
      {
        "description": "적 전체의 체력을 20% 감소",
        "cooldown": [
          18,
          12
        ]
      },
      {
        "description": "적 전체의 체력을 20% 감소, 2턴 동안 지연상태의 적에게 주는 대미지가 1.5배가 된다",
        "cooldown": [
          21,
          15
        ]
      }
    ],
    "sailor": "[STR][DEX][QCK]캐릭터는 기본 능력치가 +75가 된다",
    "specialName": "파동 엘보",
    "limit": [
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "잠재능력 습득 1: Critical Hit"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "선원효과 추가 1: 캐릭터의 침묵상태가 3 턴 감소한다."
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "체력 상승 : 90"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Enrage"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: Perfect 적중 시, 10% 확률로 공격력의 3% 추가 데미지를 입힌다.",
          "Level 2: Perfect 적중 시, 10% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 3: Perfect 적중 시, 15% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 4: Perfect 적중 시, 20% 확률로 공격력의 5% 추가 데미지를 입힌다.",
          "Level 5: Perfect 적중 시, 40% 확률로 공격력의 7% 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 30",
          "Level 2: 공격력 상승 : 50",
          "Level 3: 공격력 상승 : 70",
          "Level 4: 공격력 상승 : 100",
          "Level 5: 공격력 상승 : 150"
        ]
      }
    ]
  },
  {
    "no": 1799,
    "name": "캐번디시, 코리다 콜로세움 D블록의 '백마'",
    "captain": "[STR][DEX][QCK]캐릭터의 공격력이 2.25배가 된다.",
    "special": "[BLOCK]슬롯을 자속성 슬롯으로 변환하고 슬롯을 1턴 고정, 2턴 동안 방어력 다운 상태의 적에게 주는 대미지가 1.75배가 된다",
    "sailor": "자신은 PSY,INT 슬롯도 유리한 슬롯으로 취급한다",
    "specialName": "미검: 라운드 테이블"
  },
  {
    "no": 1800,
    "name": "캐번디시, 새장 안의 반역자",
    "captain": "[STR][DEX][QCK]캐릭터의 공격력이 2.5배, 회복력이 1.2배가 된다.",
    "special": "[BLOCK]슬롯을 자속성 슬롯으로 변환하고 슬롯을 1턴 고정, 2턴 동안 방어력 다운 상태의 적에게 주는 대미지가 1.75배가 된다",
    "sailor": "자신은 PSY,INT 슬롯도 유리한 슬롯으로 취급한다",
    "specialName": "미검: 라운드 테이블",
    "limit": [
      {
        "description": "회복력 상승 : 10"
      },
      {
        "description": "회복력 상승 : 20"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "잠재능력 습득 1: Reduce No Healing duration"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: [STR][DEX][QCK]캐릭터의 공격력,체력,회복력을 50 상승시킨다."
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
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
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1801,
    "name": "바르톨로메오, 코리다 콜로세움 B블록의 '식인종'",
    "captain": "STR,DEX,QCK캐릭터의 공격력이 2배가 되고 자신이 공격하지 않은 턴에는 받는 대미지가 10% 감소",
    "special": "2턴 동안 적 전체의 방어력을 격감하고 적 전체에게 캐릭터 공격력 30배의 QCK대미지를 주며, 1턴 동안 받는 대미지를 80% 감소시킨다",
    "sailor": "자신의 마비상태를 3턴 회복한다",
    "specialName": "Barrier Bulls"
  },
  {
    "no": 1802,
    "name": "바르톨로메오, 새장 안의 반역자",
    "captain": "STR,DEX,QCK캐릭터의 공격력이 2.5배가 되고 자신이 공격하지 않은 턴에는 받는 대미지가 15% 감소",
    "special": "2턴 동안 적 전체의 방어력을 격감하고 적 전체에게 캐릭터 공격력 30배의 QCK대미지를 주며, 1턴 동안 받는 대미지를 80% 감소시킨다",
    "sailor": "자신의 마비상태를 3턴 회복한다",
    "specialName": "B배리어 불스",
    "limit": [
      {
        "description": "체력 상승 : 10"
      },
      {
        "description": "체력 상승 : 15"
      },
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Reduce No Healing duration"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: [STR][DEX][QCK]캐릭터의 공격력,체력,회복력을 50 상승시킨다."
      },
      {
        "description": "체력 상승 : 60"
      },
      {
        "description": "회복력 상승 : 60"
      },
      {
        "description": "공격력 상승 : 50"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
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
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 5턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 10턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1803,
    "name": "롤로노아 조로, 이스트 블루의 해적",
    "captain": "참격 캐릭터의 공격력을 2배 증가시킨다.",
    "special": "적 1기에 캐릭터 공격력 13배의 DEX 데미지를 주고, 적에 걸린 턴종료 데미지 감소를 완전 제거한다. [BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 변환한다.",
    "specialName": "더 강해지기 위해.. 삼도류 오의- 삼천세계"
  },
  {
    "no": 1804,
    "name": "롤로노아 조로, 이스트 블루의 검사",
    "captain": "참격 캐릭터의 공격력을 2.25배 증가시키고 체력을 1.3배 증가시킨다.",
    "special": "적 1기에 캐릭터 공격력 13배의 DEX 데미지를 주고, 적에 걸린 턴종료 데미지 감소를 완전 제거한다. [BLOCK]슬롯을 포함한 모든 슬롯을 랜덤으로 변환한다.",
    "specialName": "더 강해지기 위해.. 삼도류 오의- 삼천세계"
  },
  {
    "no": 1805,
    "name": "광대 버기, 누구도 벨 수 없는 뎅강뎅강 인간",
    "captain": "30코스트 이하의 캐릭터 공격력이 1.5배증가하고 체력이 1.2배 증가한다.",
    "special": "1턴 동안 적 전체의 방어력을 100% 감소시키고 STR 적에게 받는 데미지를 80% 감소한다. 슬롯 영향이 1.5배 증가한다.",
    "specialName": "세계를 유혹하는 가장 흉악한 쇼"
  },
  {
    "no": 1806,
    "name": "캡틴 버기, 누구도 벨 수 없는 뎅강뎅강 인간",
    "captain": "30코스트 이하의 캐릭터 공격력이 2.25배증가하고 체력이 1.2배 증가한다.",
    "special": "1턴 동안 적 전체의 방어력을 100% 감소시키고 STR 적에게 받는 데미지를 80% 감소한다. 슬롯 영향이 1.5배 증가한다.",
    "specialName": "세계를 유혹하는 가장 흉악한 쇼"
  },
  {
    "no": 1807,
    "name": "쥬라큘 미호크, 세계의 정점에 서있는 최강검사",
    "captain": "'흑도 • 극한의 검'을 사용한 턴은 베는 참격 캐릭터의 공격력이 1.35배가 된다",
    "special": "적 전체에게 캐릭터 공격력 100배의 무속성 데미지를 입히고, 선장이 참격 캐릭터면 1턴 동안 체인계수가 2.75배로 고정된다. 참격 캐릭터의 슬롯 영향이 2배 증가한다.",
    "specialName": "흑도 • 극한의 검"
  },
  {
    "no": 1808,
    "name": "매의눈 미호크, 세계의 정점에 서있는 최강검사",
    "captain": "참격 캐릭터의 공격력이 2.5배 체력이 1.3배로 증가하고 '흑도 • 극한의 검'을 사용한 턴은 베는 참격 캐릭터의 공격력이 1.4배가 증가된다.(한계돌파)",
    "special": "적 전체에게 캐릭터 공격력 100배의 무속성 데미지를 입히고, 선장이 참격 캐릭터면 1턴 동안 체인계수가 2.75배로 고정된다. 참격 캐릭터의 슬롯 영향이 2배 증가한다.",
    "specialName": "흑도 • 극한의 검",
    "limit": [
      {
        "description": "소켓 슬롯 1 추가"
      },
      {
        "description": "기본 공격력 +10"
      },
      {
        "description": "기본 체력 +30"
      },
      {
        "description": "기본 회복력 +5"
      },
      {
        "description": "잠재능력 개방 1: Critical Hit"
      },
      {
        "description": "새로운 선장효과 개방: "
      },
      {
        "description": "선원효과 개방 1: 참격 캐릭터의 기본 공격력 +50"
      },
      {
        "description": "기본 공격력 +15"
      },
      {
        "description": "기본 체력 +40"
      },
      {
        "description": "기본 회복력 +10"
      },
      {
        "description": "새로운 현장효과 개방: 참격 캐릭터의 공격력이 1.4배, 체력이 1.1배 증가한다. 만약 필살기 흑도 • 극한의 검을 사용하면 1턴간 참격 캐릭터의 공격력이 1.89배 증가한다."
      },
      {
        "description": "소켓슬롯 1 추가"
      },
      {
        "description": "필살기 턴 감소 1 턴"
      },
      {
        "description": "기본 공격력 +20"
      },
      {
        "description": "기본 체력 +50"
      },
      {
        "description": "기본 회복력 +15"
      },
      {
        "description": "새로운 선장효과 개방: "
      },
      {
        "description": "필살기 턴 감소 2 턴"
      },
      {
        "description": "기본 공격력 +25"
      },
      {
        "description": "기본 체력 +60"
      },
      {
        "description": "기본 회복력 +20"
      },
      {
        "description": "필살기 턴 감소 3 턴"
      },
      {
        "description": "소켓슬롯 1 추가"
      },
      {
        "description": "기본 공격력 +30"
      },
      {
        "description": "기본 체력 +65"
      },
      {
        "description": "필살기 턴 감소 4 턴"
      },
      {
        "description": "새로운 선장효과 개방: "
      },
      {
        "description": "기본 공격력 +35"
      },
      {
        "description": "기본 체력 +70"
      },
      {
        "description": "선원효과 개방 2: [QCK]슬롯도 이로운 슬롯으로 취급"
      },
      {
        "description": "기본 공격력 +40"
      },
      {
        "description": "기본 체력 +75"
      },
      {
        "description": "기본 회복력 +30"
      },
      {
        "description": "필살기 턴 감소 5 턴"
      },
      {
        "description": "소켓슬롯 1 추가"
      },
      {
        "description": "새로운 선장효과 개방: "
      },
      {
        "description": "기본 공격력 +50"
      },
      {
        "description": "기본 체력 +80"
      },
      {
        "description": "새로운 선장효과 개방: 참격 캐릭터의 공격력을 2.5배, 체력을 1.3배로 만들고, 만약 필살기 흑도 • 극한의 검을 사용하면 1턴 동안 참격 캐릭터의 공격력이 3.5배로 증가한다."
      },
      {
        "description": "잠재능력 개방 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Critical Hit",
        "description": [
          "Level 1: 만약 이 캐릭터가 Perfect를 적중하면 10% 확률로 캐릭터 공격력의 3%의 추가 데미지를 입힌다.",
          "Level 2: 만약 이 캐릭터가 Perfect를 적중하면 15% 확률로 캐릭터 공격력의 5%의 추가 데미지를 입힌다.",
          "Level 3: 만약 이 캐릭터가 Perfect를 적중하면 20% 확률로 캐릭터 공격력의 5%의 추가 데미지를 입힌다.",
          "Level 4: 만약 이 캐릭터가 Perfect를 적중하면 25% 확률로 캐릭터 공격력의 5%의 추가 데미지를 입힌다.",
          "Level 5: 만약 이 캐릭터가 Perfect를 적중하면 50% 확률로 캐릭터 공격력의 7%의 추가 데미지를 입힌다."
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터 봉쇄 상태가 1턴 회복된다.",
          "Level 2: 캐릭터 봉쇄 상태가 2턴 회복된다.",
          "Level 3: 캐릭터 봉쇄 상태가 3턴 회복된다.",
          "Level 4: 캐릭터 봉쇄 상태가 5턴 회복된다.",
          "Level 5: 캐릭터 봉쇄 상태가 10턴 회복된다."
        ]
      }
    ]
  },
  {
    "no": 1809,
    "name": "완다, 모코모 공국",
    "captain": "2연속 Perfect 판정을 받은 후 공격력이 2.25배로 상승한다.",
    "special": "봉쇄/저림 효과가 2턴 감소하고, 선장이 참격 캐릭터라면 1턴 동안 Perfect 적중이 쉬워진다.",
    "sailor": "저림 효과가 1턴 감소한다.",
    "specialName": "초특급 짐승이 다니는 길"
  },
  {
    "no": 1810,
    "name": "왕의 새 완다, 모코모 공국",
    "captain": "2연속 Perfect 판정을 받은 후 공격력이 2.25배로 상승한다.",
    "special": "봉쇄/저림 효과가 2턴 감소하고, 선장이 참격 캐릭터라면 1턴 동안 Perfect 적중이 쉬워진다.",
    "sailor": "저림 효과가 1턴 감소한다.",
    "specialName": "초특급 짐승이 다니는 길"
  },
  {
    "no": 1811,
    "name": "캐럿, 모코모 공국",
    "captain": "전투 시작 시 모든 필살기의 턴이 1턴 감소하고, 격투 캐릭터의 공격력이 2배로 상승한다.",
    "special": "선장의 필살기 턴이 2턴 감소하고, 1턴 동안 격투 캐릭터의 공격력이 1.5배로 상승한다.",
    "specialName": "토끼 밍크 에어 스텝"
  },
  {
    "no": 1812,
    "name": "왕의 새 캐럿, 모코모 공국"
  },
  {
    "no": 1813,
    "name": "코알라, 혁명군의 비밀 요원",
    "captain": "일당의 공격력이 2.25배가 되고 획득 베리와 해적 경험치가 1.2배가 된다 (획득 베리와 해적 경험치 증가 효과는 모험 도중에 선장이 되는 경우에는 발동하지 않습니다)",
    "special": "선장의 슬롯을 자속성 슬롯으로 변환하고 1턴 동안 선장의 공격력이 1.5배가 된다",
    "specialName": "혁명군의 분노"
  },
  {
    "no": 1814,
    "name": "빈스모크 상디",
    "captain": "Perfect 이외의 공격을 할때까지 강인 타입 캐릭터의 공격력이 2.5배, 턴 종료시 체력을 300 회복한다",
    "specialName": "볼살 슛",
    "special": "적 1기에 공격력 150배의 무속성 대미지를 주고 1턴 동안 강입 타입 캐릭터의 공격력이 2배가 된다"
  },
  {
    "no": 1815,
    "name": "빈스모크 상디, 제르마 왕국",
    "captain": "Perfect 이외의 공격을 할때까지 강인 타입 캐릭터의 공격력이 2.75배, 턴 종료시 체력을 300 회복한다",
    "specialName": "볼살 슛",
    "special": "적 1기에 공격력 150배의 무속성 대미지를 주고 1턴 동안 강입 타입 캐릭터의 공격력이 2배가 된다",
    "limit": [
      {
        "description": "체력 상승 : 20"
      },
      {
        "description": "체력 상승 : 30"
      },
      {
        "description": "공격력 상승 : 20"
      },
      {
        "description": "잠재능력 습득 1: Enrage"
      },
      {
        "description": "체력 상승 : 40"
      },
      {
        "description": "체력 상승 : 45"
      },
      {
        "description": "공격력 상승 : 30"
      },
      {
        "description": "회복력 상승 : 30"
      },
      {
        "description": "필살기 턴 단축 : 1턴"
      },
      {
        "description": "회복력 상승 : 50"
      },
      {
        "description": "소켓 슬롯 1개 추가"
      },
      {
        "description": "체력 상승 : 50"
      },
      {
        "description": "공격력 상승 : 40"
      },
      {
        "description": "선원효과 추가 1: 모든 캐릭터가 [RCV]슬롯을 \"이로운\" 슬롯으로 취급"
      },
      {
        "description": "잠재능력 습득 2: Slot Bind Self-reduction"
      }
    ],
    "potential": [
      {
        "Name": "Enrage",
        "description": [
          "Level 1: 공격력 상승 : 20",
          "Level 2: 공격력 상승 : 30",
          "Level 3: 공격력 상승 : 40",
          "Level 4: 공격력 상승 : 50",
          "Level 5: 공격력 상승 : 100"
        ]
      },
      {
        "Name": "Slot Bind Self-reduction",
        "description": [
          "Level 1: 캐릭터의 봉인상태를 1턴 감소시킨다.",
          "Level 2: 캐릭터의 봉인상태를 2턴 감소시킨다.",
          "Level 3: 캐릭터의 봉인상태를 3턴 감소시킨다.",
          "Level 4: 캐릭터의 봉인상태를 4턴 감소시킨다.",
          "Level 5: 캐릭터의 봉인상태를 5턴 감소시킨다."
        ]
      }
    ]
  },
  {
    "no": 1816,
    "name": "포트거스 D. 에이스, 태양은 어둠을 파괴한다",
    "special": "일당의 체력을 40% 줄이고 전체에 감소 값 × 15 배의 무 속성대미지, 1턴 동안 사격 타입 캐릭터의 공격력이 2배가 된다",
    "specialName": "대염계: 염제 • 화륜",
    "captain": "사격 타입 캐릭터의 공격력이 2.25배, 체력이 1.5배가 되고 슬롯 일치 시에는 공격력이 3.25배가 된다"
  },
  {
    "no": 1817,
    "name": "리쿠 왕",
    "captain": "3연속 Great 판정을 받으면 공격력이 2배 상승한다.",
    "special": "적 1기의 체력을 7% 감소시키고 1턴 동안 선원들의 공격력이 1.2배 증가한다(선장 제외).",
    "specialName": "신의 검",
    "sailor": "필살기 턴 되감기를 1턴 회복한다."
  },
  {
    "no": 1818,
    "name": "리쿠 드루드 3세",
    "captain": "모든 캐릭터의 공격력이 1.5배 상승하고, 체력이 1.2배 상승한다. 3연속 Great 판정을 받으면 공격력이 2.5배 상승한다.",
    "special": "적 1기의 체력을 7% 감소시키고 1턴 동안 선원들의 공격력이 1.2배 증가한다(선장 제외).",
    "specialName": "신의 검",
    "sailor": "필살기 턴 되감기를 1턴 회복한다."
  },
  {
    "no": 1819,
    "name": "탱크 레판토",
    "captain": "강인, 타격 캐릭터의 공격력이 1.75배 상승한다.",
    "special": "1턴 동안 자신의 공격력이 1.75배 상승한다.",
    "specialName": "수치스러운 은둔 활동"
  },
  {
    "no": 1820,
    "name": "스칼렛",
    "captain": "[PSY]캐릭터의 체력과 회복력이 1.5배 상승한다.",
    "special": "1턴간 슬롯을 잠그고, 캐릭터 회복력 5배의 체력을 회복한다.",
    "specialName": "국경을 넘는 사랑"
  },
  {
    "no": 1821,
    "name": "상디, 무대의상 해적",
    "captain": "모든 캐릭터의 공격력이 1.5배 상승하고, 턴 종료시 캐릭터 회복력의 x1배 만큼 체력을 보충한다.",
    "special": [
      {
        "description": "캐릭터 회복력의 x4배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
        "cooldown": [
          8,
          8
        ]
      },
      {
        "description": "캐릭터 회복력의 x10배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
        "cooldown": [
          14,
          14
        ]
      }
    ],
    "specialName": "스위트 데코레이션",
    "sailor": "[RCV]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1822,
    "name": "상디, 왕자의 무대의상",
    "captain": "모든 캐릭터의 공격력이 2배 상승하고, 턴 종료시 캐릭터 회복력의 x2배 만큼 체력을 보충한다.",
    "special": [
      {
        "description": "캐릭터 회복력의 x4배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
        "cooldown": [
          8,
          8
        ]
      },
      {
        "description": "캐릭터 회복력의 x10배 만큼 체력을 보충하고, 1턴 동안 받는 데미지를 반감한다. [BLOCK]를 포함 모든 슬롯을 [STR],[DEX],[QCK],[RCV] 슬롯으로 랜덤 교체한다.",
        "cooldown": [
          14,
          14
        ]
      }
    ],
    "specialName": "스위트 데코레이션",
    "sailor": "[RCV]슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1823,
    "name": "반디 월드",
    "captain": "사격 캐릭터의 공격력이 2.2배 상승하고 Perfect를 연속으로 터치할수록 사격 캐릭터읙 오격력이 1.1배씩 상승한다.(최대 약 3.543배)",
    "special": [
      {
        "description": "적 1기에 100,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
        "cooldown": [
          14,
          10
        ]
      },
      {
        "description": "적 1기에 300,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
        "cooldown": [
          18,
          14
        ]
      },
      {
        "description": "적 1기에 500,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제, 적 전체 HP바에 걸려있는 베리어 1턴 감소",
        "cooldown": [
          22,
          18
        ]
      }
    ],
    "specialName": "모아 모아: 100배 포"
  },
  {
    "no": 1824,
    "name": "반디 월드, .진화형",
    "captain": "사격 캐릭터의 공격력이 2.2배 상승하고 Perfect를 연속으로 터치할수록 사격 캐릭터읙 오격력이 1.1배씩 상승한다.(최대 약 3.543배)",
    "special": [
      {
        "description": "적 1기에 100,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
        "cooldown": [
          14,
          10
        ]
      },
      {
        "description": "적 1기에 300,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제",
        "cooldown": [
          18,
          14
        ]
      },
      {
        "description": "적 1기에 500,000의 고정데미지, 일당에게 걸려있는 공격다운 상태 해제, 적 전체 HP바에 걸려있는 베리어 1턴 감소",
        "cooldown": [
          22,
          18
        ]
      }
    ],
    "specialName": "모아 모아: 100배 포",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1825,
    "name": "아카이누 [개]",
    "captain": "[INT] > [INT] > [INT]캐릭터가 연속 체인으로 Good 판정 이상 받으면 공격력이 2.5배 상승한다. ",
    "special": "적 전체에 캐릭터 공격력 50배의 [INT]데미지를 주고, [INT]캐릭터의 슬롯을 [INT]으로 변경한다,1턴 동안 [INT]캐릭터의 슬롯 영향을 1.75배 증가시킨다.",
    "specialName": "거대한 분출[Neo]"
  },
  {
    "no": 1826,
    "name": "아카이누 [개], 마그마 인간",
    "captain": "[INT] > [INT] > [INT]캐릭터가 연속 체인으로 Good 판정 이상 받으면 공격력이 3배 상승한다. ",
    "special": "적 전체에 캐릭터 공격력 50배의 [INT]데미지를 주고, [INT]캐릭터의 슬롯을 [INT]으로 변경한다,1턴 동안 [INT]캐릭터의 슬롯 영향을 1.75배 증가시킨다.",
    "specialName": "거대한 분출[Neo]"
  },
  {
    "no": 1827,
    "name": "시칠리안, 모코모 공국"
  },
  {
    "no": 1828,
    "name": "풀 파워 시칠리안, 모코모 공국"
  },
  {
    "no": 1829,
    "name": "시저",
    "captain": "박식, 야심 캐릭터의 공격력이 2배 증가한다.",
    "special": "적 전체에게 공격력 45배의 무속성 대미지를 주고, 2턴 동안 박식, 야심 캐릭터의 슬롯 영향을 1.75배 증가시킨다. 적 전체를 중독시킨다.",
    "spcialName": "인화성 : 미옥 가스"
  },
  {
    "no": 1830,
    "name": "마스터 시저, 대기의 지배자",
    "captain": "박식, 야심 캐릭터의 공격력이 2.5배 증가한다.",
    "special": "적 전체에게 공격력 45배의 무속성 대미지를 주고, 2턴 동안 박식, 야심 캐릭터의 슬롯 영향을 1.75배 증가시킨다. 적 전체를 중독시킨다.",
    "spcialName": "인화성 : 미옥 가스",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1831,
    "name": "빈스모크 저지",
    "captain": "PSY슬롯 출연율이 상승하고 받는 대미지가 15% 감소한다, 모든 캐릭터의 체력이 1.25배 증가하고 만약 일당에 [STR][DEX][QCK][PSY][INT]이 모두 있다면 모든 캐릭터의 공격력이 2.25배 증가한다. 슬롯 일치 시 3.9배로 증가한다.",
    "special": "봉인상태가 7턴회복, 1턴 동안 일당의 슬롯 영향 2배 증가, 선장(친구포함)의 경우 1턴 동안 [PSY]슬롯 출현확률이 약간 상승하고 [BLOCK]슬롯을 포함 모든 슬롯을 랜덤으로 변환한다.",
    "specialName": "뎅기 크랙"
  },
  {
    "no": 1832,
    "name": "빈스모크 저지, 제르마 66 과학 전투 군대",
    "captain": "PSY슬롯 출연율이 상승하고 받는 대미지가 15% 감소한다, 모든 캐릭터의 체력이 1.25배 증가하고 만약 일당에 [STR][DEX][QCK][PSY][INT]이 모두 있다면 모든 캐릭터의 공격력이 2.25배 증가한다. 슬롯 일치 시 3.9배로 증가한다.",
    "special": "봉인상태가 7턴회복, 1턴 동안 일당의 슬롯 영향 2배 증가, 선장(친구포함)의 경우 1턴 동안 [PSY]슬롯 출현확률이 약간 상승하고 [BLOCK]슬롯을 포함 모든 슬롯을 랜덤으로 변환한다.",
    "specialName": "뎅기 크랙",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1833,
    "name": "빈스모크 레이쥬",
    "captain": "[INT]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 회복력이 1.1배 증가한다.(효과 중복가능)",
    "special": "선장이 INT 또는 PSY 캐릭터인 경우 체력을 7,000회복, 중독 제거, 마비, 선장 효과 무효, 필살기 봉인상태를 3턴 회복한다. 선장이 강인 캐릭터면 2턴간 받는 대미지를 80% 감소시킨다.",
    "specialName": "위험한 회복",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1834,
    "name": "빈스모크 레이쥬, 제르마 66 과학 전투 군대",
    "captain": "[INT]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 회복력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 INT 또는 PSY 캐릭터인 경우 체력을 7,000회복, 중독 제거, 마비, 선장 효과 무효, 필살기 봉인상태를 3턴 회복한다. 선장이 강인 캐릭터면 2턴간 받는 대미지를 80% 감소시킨다.",
    "specialName": "위험한 회복",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1835,
    "name": "빈스모크 이치디",
    "captain": "[STR]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 STR 또는 PSY 캐릭터인 경우, 2턴 동안 체인 계수를 2.5배로 고정하고 선장이 강인 캐릭터인 경우 2턴 동안 적의 공격을 지연 시킨다.",
    "specialName": "마제스틱 임팩트",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1836,
    "name": "빈스모크 이치디, 제르마 66 과학 전투 군대",
    "captain": "[STR]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 STR 또는 PSY 캐릭터인 경우, 2턴 동안 체인 계수를 2.5배로 고정하고 선장이 강인 캐릭터인 경우 2턴 동안 적의 공격을 지연 시킨다.",
    "specialName": "마제스틱 임팩트",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1837,
    "name": "빈스모크 니디",
    "captain": "[QCK]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 QCK 또는 PSY 캐릭터인 경우, 2턴 동안 모든 캐릭터의 공격력이 1.75배로 증가, 선장이 강인 캐릭터인 경우 1턴 동안 모든 슬롯을 고정한다.",
    "specialName": "블리츠 니들",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1838,
    "name": "빈스모크 니디, 제르마 66 과학 전투 군대",
    "captain": "[QCK]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 QCK 또는 PSY 캐릭터인 경우, 2턴 동안 모든 캐릭터의 공격력이 1.75배로 증가, 선장이 강인 캐릭터인 경우 1턴 동안 모든 슬롯을 고정한다.",
    "specialName": "블리츠 니들",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다.",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1839,
    "name": "빈스모크 욘디",
    "captain": "[DEX]캐릭터의 공격력이 1.75배 증가, 강인 캐릭터의 공격력이 1.2배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 DEX 또는 PSY 캐릭터인 경우 1턴 동안 지연 중인 적에게 공격력 1.75배로 증가, 선장이 강인 캐릭터인 경우 2턴 동안 캐릭터 공격력 40배의 무속성 대미지를 추가한다.",
    "specialName": "버스트 엔드 킥",
    "sailor": "PSY슬롯도 이로운 슬롯으로 취급한다."
  },
  {
    "no": 1840,
    "name": "빈스모크 욘디, 제르마 66 과학 전투 군대",
    "captain": "[DEX]캐릭터의 공격력이 2.25배 증가, 강인 캐릭터의 공격력이 1.3배 증가하고 체력이 1.2배 증가한다.(효과 중복가능)",
    "special": "선장이 DEX 또는 PSY 캐릭터인 경우 1턴 동안 지연 중인 적에게 공격력 1.75배로 증가, 선장이 강인 캐릭터인 경우 2턴 동안 캐릭터 공격력 40배의 무속성 대미지를 추가한다.",
    "specialName": "버스트 엔드 킥",
    "limit": "한계돌파 추가예정"
  },
  {
    "no": 1841,
    
  },
  {
    "no": 1842,
    
  },
  {
    "no": 1843,
    
  },
  {
    "no": 1844,
    
  },
  {
    "no": 1845,
    
  },
  {
    "no": 1846,
    
  },
  {
    "no": 1847,
    "name": "부처님 센고쿠",
    "captain": "모험 시작 시 필살기 턴이 2턴 감소, 29코스트 이하 캐릭터의 공격력이 3.25배, 체력이 1.2배 증가하고 54코스트 캐릭터의 공격력이 3배로 증가한다.",
    "special": "적 전체에게 INT의 랜덤 대미지를 주고, 1턴 동안 공격력이 1.5배 증가한다. 29코스트 이하 캐릭터의 슬롯을 자속성 슬롯으로 변환."
  },
  {
    "no": 1848,
  },
  {
    "no": 1849,
    
  },
  {
    "no": 1850,
    
  },
  {
    "no": 1851,
    
  },
  {
    "no": 1852,
    
  },
  {
    "no": 1853,
    
  },
  {
    "no": 1854,
    
  },
  {
    "no": 1855,
    
  },
  {
    "no": 1856,
    
  },
  {
    "no": 1857,
    
  },
  {
    "no": 1858,
    
  },
  {
    "no": 1859,
    
  },
  {
    "no": 1860,
    
  },
  {
    "no": 1861,
    
  },
  {
    "no": 1862,
    
  },
  {
    "no": 1863,
    
  },
  {
    "no": 1864,
    
  },
  {
    "no": 1865,
    
  },
  {
    "no": 1866,
    
  },
  {
    "no": 1867,
    
  },
  {
    "no": 1868,
    
  },
  {
    "no": 1869,
    
  },
  {
    "no": 1870,
    
  },
  {
    "no": 1871,
    
  },
  {
    "no": 1872,
    
  },
  {
    "no": 1873,
    
  },
  {
    "no": 1874,
    
  },
  {
    "no": 1875,
    
  },
  {
    "no": 1876,
    
  },
  {
    "no": 1877,
    
  },
  {
    "no": 1878,
    
  },
  {
    "no": 1879,
    
  },
  {
    "no": 1880,
    
  },
  {
    "no": 1881,
    
  },
  {
    "no": 1882,
    
  },
  {
    "no": 1883,
    
  },
  {
    "no": 1884,
    
  },
  {
    "no": 1885,
    
  },
  {
    "no": 1886,
    
  },
  {
    "no": 1887,
    
  },
  {
    "no": 1888,
    
  },
  {
    "no": 1889,
    
  },
  {
    "no": 1890,
    
  },
  {
    "no": 1891,
    
  },
  {
    "no": 1892,
    
  },
  {
    "no": 1893,
    
  },
  {
    "no": 1894,
    
  },
  {
    "no": 1895,
    
  },
  {
    "no": 1896,
    
  },
  {
    "no": 1897,
    
  },
  {
    "no": 1898,
    
  },
  {
    "no": 1899,
    
  },
  {
    "no": 1900,
    
  },
  {
    "no": 1901,
    
  },
  {
    "no": 1902,
    
  },
  {
    "no": 1903,
    
  },
  {
    "no": 1904,
    
  },
  {
    "no": 1905,
    
  },
  {
    "no": 1906,
    
  },
  {
    "no": 1907,
    
  },
  {
    "no": 1908,
    
  },
  {
    "no": 1909,
    
  },
  {
    "no": 1910,
    
  },
  {
    "no": 1911,
    
  },
  {
    "no": 1912,
    
  },
  {
    "no": 1913,
    
  },
  {
    "no": 1914,
    
  },
  {
    "no": 1915,
    
  },
  {
    "no": 1916,
    
  },
  {
    "no": 1917,
    
  },
  {
    "no": 1918,
    
  },
  {
    "no": 1919,
    
  },
  {
    "no": 1920,
    
  },
  {
    "no": 1921,
    
  },
  {
    "no": 1922,
    
  },
  {
    "no": 1923,
    
  },
  {
    "no": 1924,
    
  },
  {
    "no": 1925,
    
  },
  {
    "no": 1926,
    
  },
  {
    "no": 1927,
    
  },
  {
    "no": 1928,
    
  },
  {
    "no": 1929,
    
  },
  {
    "no": 1930,
    
  },
  {
    "no": 1931,
    
  },
  {
    "no": 1932,
    
  },
  {
    "no": 1933,
    
  },
  {
    "no": 1934,
    
  },
  {
    "no": 1935,
    
  },
  {
    "no": 1936,
    
  },
  {
    "no": 1937,
    
  },
  {
    "no": 1938,
    
  },
  {
    "no": 1939,
    
  },
  {
    "no": 1940,
    
  },
  {
    "no": 1941,
    
  },
  {
    "no": 1942,
    
  },
  {
    "no": 1943,
    
  },
  {
    "no": 1944,
    
  },
  {
    "no": 1945,
    
  },
  {
    "no": 1946,
    
  },
  {
    "no": 1947,
    
  },
  {
    "no": 1948,
    
  },
  {
    "no": 1949,
    
  },
  {
    "no": 1950,
    
  },
  {
    "no": 1951,
    
  },
  {
    "no": 1952,
    
  },
  {
    "no": 1953,
    
  },
  {
    "no": 1954,
    
  },
  {
    "no": 1955,
    
  },
  {
    "no": 1956,
    
  },
  {
    "no": 1957,
    
  },
  {
    "no": 1958,
    
  },
  {
    "no": 1959,
    
  },
  {
    "no": 1960,
    
  },
  {
    "no": 1961,
    
  },
  {
    "no": 1962,
    
  },
  {
    "no": 1963,
    
  },
  {
    "no": 1964,
    
  },
  {
    "no": 1965,
    
  },
  {
    "no": 1966,
    
  },
  {
    "no": 1967,
    
  },
  {
    "no": 1968,
    
  },
  {
    "no": 1969,
    
  },
  {
    "no": 1970,
    
  },
  {
    "no": 1971,
    
  },
  {
    "no": 1972,
    
  },
  {
    "no": 1973,
    
  },
  {
    "no": 1974,
    
  },
  {
    "no": 1975,
    
  },
  {
    "no": 1976,
    
  },
  {
    "no": 1977,
    
  },
  {
    "no": 1978,
    
  },
  {
    "no": 1979,
    
  },
  {
    "no": 1980,
    
  },
  {
    "no": 1981,
    
  },
  {
    "no": 1982,
    
  },
  {
    "no": 1983,
    
  },
  {
    "no": 1984,
    
  },
  {
    "no": 1985,
    
  },
  {
    "no": 1986,
    
  },
  {
    "no": 1987,
    
  },
  {
    "no": 1988,
    
  },
  {
    "no": 1989,
    
  },
  {
    "no": 1990,
    
  },
  {
    "no": 1991,
    
  },
  {
    "no": 1992,
    
  },
  {
    "no": 1993,
    
  },
  {
    "no": 1994,
    
  },
  {
    "no": 1995,
    
  },
  {
    "no": 1996,
    
  },
  {
    "no": 1997,
    
  },
  {
    "no": 1998,
    
  },
  {
    "no": 1999,
    
  },
  {
    "no": 2000,
    "name": "실버즈 레일리",
    "captain": "참격, 박식 캐릭터 공격력이 2배 증가한다.",
    "special": "모든 슬롯을 랜덤으로 변환하고, 1턴 동안 모든 캐릭터의 공격력을 1.75배로 증가시킨다.",
    "specialName": "바다의 소용돌이"
  },
  {
    "no": 2001,
    "name": "실버즈 레일리, 로저 해적단의 오른팔",
    "captain": "참격, 박식 캐릭터 공격력이 2.5배 증가하고 턴 종류 시 캐릭터 회복력 2배의 체력을 회복한다.",
    "special": "모든 슬롯을 랜덤으로 변환하고, 1턴 동안 모든 캐릭터의 공격력을 1.75배로 증가시킨다.",
    "specialName": "바다의 소용돌이"
  }
];


for(i=0; i<lang.length;i++)
{
    j = i + 1;
    //window.units[i]['name'] = lang[i].name;
    
    obj = Object.keys(lang[i]);
    for(k = 0; k < obj.length; k++)
    {
        if(obj[k] == "name")
        {
            window.units[i]['name'] = lang[i].name;
            //window.units[i]['type_kr'] = typeReverse(window.units[i]['type']);
            //window.units[i]['class_kr'] = typeReverse(window.units[i]['class']);
        }
        else if(obj[k] != "no") {
            window.details[j][obj[k]] = lang[i][obj[k]];
        }
    }
}

//window.matchers[0]['name'] = '부스트';
