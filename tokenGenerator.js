// Paste this code into a new Twilio Function

exports.handler = function (context, event, callback) {
  const AccessToken = Twilio.jwt.AccessToken;
  const ChatGrant = AccessToken.ChatGrant;
  const SyncGrant = AccessToken.SyncGrant;

  function tokenGenerator() {
    // Create an access token which we will sign and return to the client
    const token = new AccessToken(
      // Create an API key https://www.twilio.com/docs/glossary/what-is-an-api-key
      // Add the key and secret to your Function env variables https://www.twilio.com/docs/runtime/functions/variables
      context.ACCOUNT_SID,
      context.TWILIO_API_KEY,
      context.TWILIO_API_SECRET,
      { identity: event.identity }
    );

    if (context.TWILIO_SYNC_SERVICE_SID) {
      // Point to a particular Sync service, or use the account default to
      // interact directly with Functions.
      const syncGrant = new SyncGrant({
        serviceSid: context.TWILIO_SYNC_SERVICE_SID || "default",
      });
      token.addGrant(syncGrant);
    }

    const response = new Twilio.Response();
    const headers = {
      "Access-Control-Allow-Origin": "*", // change this to your client-side URL
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    response.setHeaders(headers);
    response.setBody({
      token: token.toJwt(),
    });

    return response;
  }

  return callback(null, tokenGenerator());
};
