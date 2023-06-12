import proxy from "@sap/cds-odata-v2-adapter-proxy";
import cds from "@sap/cds";
import { Application, Express } from "express";
import "reflect-metadata";

const logger = cds.log("server");

import express from "express";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
cds.on("bootstrap", (app: Application) => {
  app.use(proxy());

  app.use(
    express.static("static", {
      extensions: ["properties"],
      setHeaders: function (res, path, stat) {
        res.set("Cache-Control", "no-cache"); // aggressive no-cache. TODO: consider changing to 1day later on!
      },
    })
  );

  app.get("/health", (_, res) => {
    res.status(200).send("OK");
  });
});

module.exports = cds.server;
