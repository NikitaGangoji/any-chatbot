import { init, readData } from '../index';

const jsondata = [
  {
    "document": [
      {
        "type": "confirmedBenefitList",
        "data": "pdfConfirmedBenefits"
      },
      {
        "type": "highValueGoodsList",
        "data": "pdfHighValueGoods"
      },
      {
        "type": "exploreDestinationLink",
        "data": "https://www.globallocalliving.com/direct?c=cartus_gll"
      }
    ]
  },
  {
    "contactInfo": [
      {
        "type": "consultant",
        "data": "93002002001"
      }
    ]
  }
]

test('init func', () => {
  expect(init(jsondata)).toBe('Welcome!!!, choose from below: <br/> document,contactInfo');
});

test('chatbot func', () => {
  expect(readData(jsondata, 'document')).toEqual(["confirmedBenefitList", "highValueGoodsList", "exploreDestinationLink"]);
});

test('chatbot func', () => {
  expect(readData(jsondata, 'document', 'confirmedBenefitList')).toEqual('pdfConfirmedBenefits');
});