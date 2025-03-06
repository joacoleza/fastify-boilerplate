import fastify from "fastify";
import { IHeaders, IQuerystring, IReply } from "./types";

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
      done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
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

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
