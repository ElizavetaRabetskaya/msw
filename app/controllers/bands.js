import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BandsController extends Controller {
  @service catalog;
  @service router;

  @action
  async deleteBand(bandId) {
    await this.catalog.delete('band', bandId);
    this.router.transitionTo('bands');
  }
}
