"use strict";

const unleash = require("unleash-server");

const enableGoogleOauth = require("./google-auth-hook");

let options = {
  adminAuthentication: "custom",
  preRouterHook: enableGoogleOauth,
};

unleash.start(options);
