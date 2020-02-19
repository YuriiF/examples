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
   * Method takes in a _id and
   * returns the data for a particular note.
   * @param noteId
   */
  async getNoteById({ _id }) {
    const response = await this.get(`notes/${_id}`);
    return response;
  }

  async findOneAndRemove({ _id }) {
    const response = await this.delete(`notes/${_id}`);
    return response;
  }

  async findOneAndUpdate({ _id, text }) {
    const response = await this.put(`notes/${_id}`, { text });
    return response;
  }

  /**
   * Returns several notes based on their respective noteIds.
   * @param noteIds
   */
  getNotesByIds({ noteIds }) {
    return Promise.all(
      noteIds.map((noteId) => this.getNoteById({ _id: noteId }))
    );
  }

  async createNote({ text }) {
    const response = await this.post('notes', { text });
    return response;
  }
}

export default NoteAPI;
