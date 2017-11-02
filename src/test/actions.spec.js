import { expect } from "chai";
import nock from "nock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import fetchPostcode, {
  fetchPostcodeRequest,
  fetchPostcodeFailure,
  fetchPostcodeSuccess
} from "../actions/";
import * as types from "../actions/types";

const API_URL = "NEED A URL HERE";

const mockStore = configureMockStore([thunk]);

describe("actions Creators", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe("fetchPostcodes", () => {
    it("returns a response on success", () => {
      nock(API_URL)
        .get("/topics")
        .reply(200, { topics: [1, 2, 3] });

      const expectedActions = [fetchPostcodeRequest(), fetchPostcodeFailure()];

      const store = mockStore();

      return store.dispatch(fetchPostcode()).then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
