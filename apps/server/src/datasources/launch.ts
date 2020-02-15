import { RESTDataSource } from 'apollo-datasource-rest';
import pathOr from 'ramda/src/pathOr';
import path from 'ramda/src/path';

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }

  launchReducer(launch: any): any {
    const result = {
      id: pathOr(0, ['flight_number'], launch),
      cursor: `${path(['launch_date_unix'], launch)}`,
      site: path(['launch_site', 'site_name'], launch),
      mission: {
        name: path(['mission_name'], launch),
        missionPatchSmall: path(['links', 'mission_patch_small'], launch),
        missionPatchLarge: path(['links', 'mission_patch'], launch),
      },
      rocket: {
        id: path(['rocket', 'rocket_id'], launch),
        name: path(['rocket', 'rocket_name'], launch),
        type: path(['rocket', 'rocket_type'], launch),
      },
    };
    return result;
    // throw new Error('Method not implemented.');
  }

  /**
   * Get all of the launches.
   */
  async getAllLaunches() {
    const response = await this.get('launches');
    const allLaunches = Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];

    return allLaunches;
  }

  /**
   * Method takes in a flight number and
   * returns the data for a particular launch.
   * @param launchId
   */
  async getLaunchById({ launchId }) {
    const response = await this.get('launches', { flight_number: launchId });
    return this.launchReducer(response[0]);
  }

  /**
   * Returns several launches based on their respective launchIds.
   * @param launchIds
   */
  getLaunchesByIds({ launchIds }) {
    return Promise.all(
      launchIds.map((launchId) => this.getLaunchById({ launchId }))
    );
  }
}

export default LaunchAPI;
