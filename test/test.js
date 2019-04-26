var expect  = require("chai").expect;
var request = require("request");

describe("Verify webhook", function() {

    var url = "http://localhost:1337/webhook?hub.verify_token=<YOUR_VERIFY_TOKEN>&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe";

    it("returns challenge", function(done) {
      request(url, function(error, response, body) {
        expect(response.body).to.equal('CHALLENGE_ACCEPTED');
        done();
      });
    });

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });


  });