var expect  = require("chai").expect;
var request = require("request");

//tests for the express server

describe("Callisto Explorer Server Tests", function() {

  //ping the index page
  describe("Test index page", function() {
    var url = "http://localhost:3000/";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    var badurl = "http://localhost:3000/clopool_net_is_the_best_callisto_mining_pool";
    it("bad pages go to index", function(done) {
      request(badurl, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
