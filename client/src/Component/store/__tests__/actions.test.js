import { fetchResponseSuccess } from '../actions';
import { fetchResponseError } from '../actions';
import { fetchDecisions } from '../actions';
import moxios from 'moxios';
import { MakeMockStore } from '../__mocks__/MakeMockStore';

const store = MakeMockStore({
  userFirstName: '',
  userLastName: '',
  userIncome: 0,
  userDob: '',
  apiServiceTimestamp: '',
  apiServiceDecision: '',
  FetchError: '',
  uiPage: 'Home',
  currentApr: '',
  cardType: '',
  bankName: '',
  promotionMsg: '',
  purchaseRate: '',
  creditLimit: ''
});

describe('Test action dispatched from action creator', () => {
  it('Action creator for Status code 200', () => {
    const action = fetchResponseSuccess({ data: {} });

    expect(action.type).toEqual('API_RESPONSE_MAPPING');
  });

  it('Action creator for fetch error', () => {
    const action = fetchResponseError();

    expect(action.type).toEqual('API_RESPONSE_ERROR');
  });
});


describe('To test fetch decision post call', () => {

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('mock the axios post call and test the fetch action creator', async () => {
    const responseData = {
      data: {
        firstName: 'First Name',
        lastName: 'Last Name',
        dob: '2000-01-01',
        income: 123,
        timestampLog: '2020-08-12T08:34:09.663Z',
        apr: 21.80,
        serviceDecision: 'Eligible',
        apiErrorMessage: '',
        cardType: "Visa",
        bankName: "Barclay",
        promotionMsg: "0% interest balance transfer and purchases for up to 24 months. *Any introductory balance transfer offer must be made within the first 60 days of account opening for new customers.",
        purchaseRate: "31.84",
        creditLimit: "1,000"
      }
    }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: responseData,
      });
    });


    store.dispatch(fetchDecisions()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(fetchDecisions());
    })

  });
});