

export const resolvers = {
    Query: {
        getUsers: () => {
            return users;
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const newUser = {
                id: (users.length + 1).toString();
            }
        }
    }
}