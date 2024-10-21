export const userResolver = {
    Query: {
      hello: () => 'Hello, world!',
      getUser: (_: any, { id }: { id: string }) => {
        return { id, name: `User ${id}`, email: `user${id}@example.com` };
      }
    }
  };
  