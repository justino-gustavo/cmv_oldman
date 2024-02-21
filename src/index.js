import { Hono } from "hono";
import { graphqlServer } from "@hono/graphql-server";
import { loadConfigSync } from "graphql-config";
import playgroundHTML from "./etc/utils/playground";
import rootResolver from "./graphql/resolvers";

export const app = new Hono();

const gqlConfig = loadConfigSync().getDefault();

const schema = gqlConfig.getSchemaSync();

app.get("/", () => {
	if (process.env.NODE_ENV == "development") {
		return new Response(playgroundHTML("/graphql"), {
			headers: {
				"Content-Type": "text/html",
			},
		});
	}
	return new Response(_, { status: 404 });
});

app.use(
	"/graphql",
	graphqlServer({
		schema,
		rootResolver,
	})
);

export default {
	port: process.env.PORT || 3000,
	fetch: app.fetch,
};
