import { apiCall } from "../functions/callRequests";
import { compare } from "../functions/compareData";

describe('template spec', () => {
  it(`Test api`, () => {
    apiCall()
    compare()
  })
})