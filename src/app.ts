import fastify from "fastify";
import { IHeaders, IQuerystring, IReply } from "./types";
import { validateUser } from "./utils";

export const buildServer = () => {
  const server = fastify();

  server.get<{
    Querystring: IQuerystring;
    Headers: IHeaders;
    Reply: IReply<string>;
  }>("/ping", async (request, reply) => {
    reply.code(200).send({ success: true, data: "pong" });
  });

  server.get<{
    Querystring: IQuerystring;
    Headers: IHeaders;
    Reply: IReply;
  }>(
    "/auth",
    {
      preValidation: (request, reply, done) => {
        const { username, password } = request.query;
        done(
          validateUser(username, password)
            ? undefined
            : new Error("Must be admin")
        );
      },
    },
    async (request, reply) => {
      const customerHeader = request.headers["h-custom"];
      if (!customerHeader) {
        reply.code(400).send({ error: "Custom header is required" });
        return;
      }
      reply.code(200).send({ success: true });
    }
  );
  return server;
};
