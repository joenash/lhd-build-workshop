# Multiplayer Kaboom.js with Twilio Sync

This sample code was created for Local Hack Day Build! Taking part in Local Hack Day and have questions about Twilio, or this code? Drop into the #ask-twilio channel on the MLH Discord.

## How to play

- Clone the repository.
- `cd` into the cloned directory.
- Serve it via a webserver, such as `npx serve .`.
- Open the page in your browser.

## Setup

1. Create a [Twilio account](https://www.twilio.com/try-twilio)
1. Create a [new API key](https://www.twilio.com/docs/glossary/what-is-an-api-key), and save the secret.
1. Create a [Twilio Sync Servce](https://console.twilio.com/us1/develop/sync/services?frameUrl=%2Fconsole%2Fsync%2Fservices%3Fx-target-region%3Dus1)
1. Create a [Twilio Function Service](https://console.twilio.com/us1/develop/functions/services?frameUrl=%2Fconsole%2Ffunctions%2Foverview%2Fservices%3Fx-target-region%3Dus1)
1. [Add the environment variables](https://www.twilio.com/docs/runtime/functions/variables) to your Twilio Function Service:
   - TWILIO_API_KEY: your created API key
   - TWILIO_API_SECRET: your created API secret
   - TWILIO_SYNC_SERVICE_SID: the SID of the created Sync service
1. Create a new function, on the `token` route.
1. Copy and paste the contents of `tokenGenerator.js` into your new function.
1. Save and deploy the function.
1. Insert that URL into line 11 of `index.html`, replacing `FUNCTION_URL`.
