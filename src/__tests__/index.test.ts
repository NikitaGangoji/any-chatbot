import { fetchData } from '../index';

const jsondata = {
  PersonalInfo: {
    'Family Info': {
      api: '',
      type: '',
      response: '{familyMembers}',
    },
    'Profile Info': {
      api: '',
      type: '',
      response: '{profileDetails}',
    },
  },
  Benefits: {
    'Available Benefits': {
      api: '',
      type: '',
      response: '{availableBenefits}',
    },
    'Confirmed Benefits': {
      api: '',
      type: '',
      response: '{confirmedBenefits}',
    },
  },
  ExternalLinks: {
    cartusOnlineLink: {
      api: '',
      type: '',
      response: '{cartusOnline}',
    },
  },
  ContactInfo: {
    ConsultantPhoneContact: {
      api: '',
      type: '',
      response: '{consultantPhone}',
    },
    ConsultantEmailContact: {
      api: '',
      type: '',
      response: '{consultantEmail}',
    },
  },
};

test('chatbot func', () => {
  expect(fetchData(jsondata)).toEqual(
    'Hi! This is your personal Assistant. Please choose from below services! <br/> PersonalInfo<br/>Benefits<br/>ExternalLinks<br/>ContactInfo',
  );
});

test('chatbot func', () => {
  expect(fetchData(jsondata, 'PersonalInfo')).toEqual('Family Info<br/>Profile Info');
});

test('chatbot func', () => {
  expect(fetchData(jsondata, 'PersonalInfo-Family Info')).toEqual('{familyMembers}');
});
