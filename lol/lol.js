function findSynonymsSpecialities(input) {
  if (input.match(/терапевт|участков/gi)!== null) return ["терапевт", "участковый врач", "участковый", "участковый терапевт"];
  if (input.match(/стоматолог|зубно|дантист/gi) !== null) return ["стоматолог"];
  if (input.match(/офтальмолог|глазно|окулист/gi) !== null) return ["офтальмолог"];
  if (input.match(/эндокринолог/gi) !== null) return ["эндокринолог"];
  if (input.match(/уролог/gi) !== null) return ["уролог"];
  if (input.match(/физиотерапевт/gi) !== null) return ["физиотерапевт"];
  if (input.match(/невролог|невропатолог/gi) !== null) return ["невролог", "невропатолог"];
  if (input.match(/пульмонолог/gi) !== null) return ["пульмонолог", "пульманолог"];
  if (input.match(/лор|отоларинголог|оториноларинголог|ларинголог|/gi) !== null) return ["лор", "лоринголог", "ларинголог", "отолоринголог", "отоларинголог", "оториноларинголог", "оторинолоринголог"];
  else return [];
}

/*
принимаемые аргументы
1.массив строк,
2.объект (в котором будет произведен поиск),
3.строка (ключ, по которому будет происходить сравнение)
4.result = []
*/
function isDoctorAvailable(synonyms, objectResponse, keyName, result) {
  if (typeof objectResponse === "object") {
    for(key in objectResponse) {
      if(objectResponse[key].hasOwnProperty(keyName)) {
        for(i = 0; i < synonyms.length; i++) {
          if(String(synonyms[i]).trim().toLowerCase() === objectResponse[key][keyName].trim().toLowerCase()) {
            result.push(objectResponse[key]);
          }
        }
      }
      if(result.length === 0) isDoctorAvailable(synonyms, objectResponse[key], keyName, result);
    }
  }
}

var a = {
  "eaResult": {
    "Body": {
      "getSpecialitiesInfoResponse": {
        "medicalSpeciality": [
          {
            "code": 603,
            "name": "Оториноларинголог"
          },
          {
            "code": 200,
            "name": "Участковый врач"
          },
          {
            "code": 2,
            "name": "Уролог"
          },
          {
            "code": 9,
            "name": "Невролог",
            "onlyByRefferal": true
          }
        ]
      }
    },
    "Header": ""
  },
  "polisNum": "7755610833000058",
  "dateBirthFromPolis": "1983-04-16"
};


<<<<<<< HEAD


=======
isDoctorAvailable([9], a, 'code');
isDoctorAvailable(synonyms, a, 'name');

/*
Не работает функция isDoctorAvailable()
я ожидаю, что сработает условие на 28 строке и функция вернет true.
но она возвращает false.
в закомментированном console.log действительно true => я уверена, что функция должна завершиться и вернуть true.
что я думаю по этому поводу:
1.каким-то образом функция заканчивает свое выполнение с false раньше, чем закончится итерация.
2.я допустила логическую ошибку
3.может, это замыкание?
4


*/
>>>>>>> f2ee9c3a15822624fbc10205d0176923a254539c
