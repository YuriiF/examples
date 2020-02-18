import { RESTDataSource } from 'apollo-datasource-rest';
import pathOr from 'ramda/src/pathOr';
import path from 'ramda/src/path';

export class NoteAPI extends RESTDataSource {
  constructor() {
    super();
    /** URI that points to featherjs API/service server */
    this.baseURL = 'http://localhost:3000/';
  }

  /**
   * Get all the notes.
   */
  async getAllNotes() {
    const response = await this.get('notes');
    const allNotes = pathOr([], ['data'], response);
    return allNotes;
  }

  /**
   * Method takes in a flight number and
   * returns the data for a particular note.
   * @param noteId
   */
  async getNoteById({ noteId }) {
    const response = await this.get('notes', { _id: noteId });
    return response;
    // return this.noteReducer(response[0]);
  }

  /**
   * Returns several notes based on their respective noteIds.
   * @param noteIds
   */
  getNotesByIds({ noteIds }) {
    return Promise.all(noteIds.map((noteId) => this.getNoteById({ noteId })));
  }
}

export default NoteAPI;
