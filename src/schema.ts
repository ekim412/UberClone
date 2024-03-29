import {makeExecutableSchema} from "graphql-tools";
import {fileLoader, mergeResolvers, mergeTypes} from "merge-graphql-schemas";
import path from "path";

const allTypes: string[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
);

const allResolvers: string[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs : mergedTypes,
    resolvers: mergedResolvers as any
});

export default schema;