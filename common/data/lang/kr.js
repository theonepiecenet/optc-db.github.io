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

$("#uploadkey").val($("#uploadkey").val() + "/" + Date.now()); // 정보 추가 시 key 정보 추가
//window.matchers[0]['name'] = 'Type-boosting captains'; // ability filters 언어 수정
