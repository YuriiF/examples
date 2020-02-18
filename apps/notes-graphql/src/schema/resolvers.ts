import { paginateResults } from '../utils/pagination';

const resolvers = {
  /** Query resolvers */
  Query: {
    pagedNotes: async (
      _: any,
      { pageSize = 20, after }: any,
      { dataSources }: any
    ) => {
      const allNotes = await dataSources.noteAPI.getAllNotes();

      /** We want these in reverse chronological order */
      allNotes.reverse();
      const notes = paginateResults({
        after,
        pageSize,
        results: allNotes,
      });

      return {
        notes,
        cursor: notes.length ? notes[notes.length - 1].cursor : null,
        /**
         * If the cursor of the end of the paginated results is the same as the
         * last item in _all_ results, then there are no more results after this.
         */
        hasMore: notes.length
          ? notes[notes.length - 1].cursor !==
            allNotes[allNotes.length - 1].cursor
          : false,
      };
    },

    notes: (_: any, __: any, { dataSources }: any) => {
      return dataSources.noteAPI.getAllNotes();
    },

    note: (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.noteAPI.getNoteById({ noteId: id });
    },

    me: (_: any, __: any, { dataSources }: any) => {
      return dataSources.userAPI.findOrCreateUser();
    },
  },

  /** Mutation resolvers */
  Mutation: {
    async createNote(root, { input }, { dataSources }: any) {
      return await dataSources.noteAPI.createNote(input);
    },

    async updateNote(root, { _id, input }, { dataSources }: any) {
      return await dataSources.noteAPI.findOneAndUpdate({ _id }, input, { new: true });
    },

    async deleteNote(root, { _id }, { dataSources }: any) {
      return await dataSources.noteAPI.findOneAndRemove({ _id });
    },
  },

  /** Custom type resolvers */
  User: {
    notes: async (_, __, { dataSources }) => {
      /** Get ids of notes by user */
      const noteIds = await dataSources.userAPI.getNoteIdsByUser();

      if (!noteIds.length) {
        return [];
      }

      /** Look up those notes by their ids */
      return (
        dataSources.noteAPI.getNotesByIds({
          noteIds,
        }) || []
      );
    },
  },
};

export default resolvers;
