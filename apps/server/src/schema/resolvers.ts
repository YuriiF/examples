const resolvers = {
  Query: {
    launches: (_: any, __: any, { dataSources }: any) => {
      return dataSources.launchAPI.getAllLaunches();
    },

    launch: (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.launchAPI.getLaunchById({ launchId: id });
    },

    me: (_: any, __: any, { dataSources }: any) => {
      return dataSources.userAPI.findOrCreateUser();
    },
  },
};

export default resolvers;
