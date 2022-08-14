"use strict";

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [{
      id: 1,
      url: "https://www.url1.dev"
    }, {
      id: 2,
      url: "https://www.url2.dev"
    }, {
      id: 3,
      url: "https://www.link3.dev"
    }];
    const output = [{
      id: 3,
      url: "https://www.link3.dev"
    }];
    expect(filterByTerm(input, "link")).toEqual(output);
  });
}); // describe("Clock/Timer", () => {
//   test("it should get today's time and date and countdown to fixed date", () => {
//     // Check if there is a time counting
//     document.querySelector("#clockToday span");
//     // Check if countdown timer is countring down
//     expect(2).toEqual(2);
//   });
// });