import Service from '@ember/service';
import DoubleLinkedList from '../utils/double-linked-list';

const IMAGES = [
  'boat',
  'fortress',
  'graf',
  'hand-water',
  'plane',
  'toadstools',
  'waterfall',
  'woodtextures',
  'trafalgar',
  'restaurant-view'
];

export default Service.extend({

  imageList: null,

  getImages() {
    const imageList = new DoubleLinkedList(IMAGES);
    this.set('imageList', imageList);
    return imageList;
  },

  findImageNodeByValue(value) {
    return this.get('imageList').findByValue(value);
  }
});
