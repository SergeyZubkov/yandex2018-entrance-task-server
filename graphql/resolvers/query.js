// const { models } = require('../../models');
const { Op } = require("sequelize");

module.exports = {
  async event (obj, {id}, {models}, info) {

    return models.Event.findOne({
      where: {
        id
      }
    });
  },
  async events (obj, args, {models}, info) {
    return models.Event.findAll();
  },
  async eventsOnDate (obj, {date}, {models}, info) {
    const dayStart = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    )
    const dayEnd = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      24
    )
    const events = models.Event.findAll({
      where: {
        dateStart: {
          [Op.between]: [dayStart, dayEnd]
        }
      }
    });

    console.log(events)
    return models.Event.findAll({
      where: {
        dateStart: {
          [Op.between]: [dayStart, dayEnd]
        }
      }
    });
  },
  async user (obj, {id}, {models}, info) {
    console.log(models)
    return models.User.findOne({
      where: {
        id
      }
    })
  },
  async users (obj, args, {models}, info) {
    return models.User.findAll();
  },
  async room (obj, {id}, {models}, info) {
    return models.Room.findOne({
      where: {
        id
      }
    });
  },
  async rooms (obj, args, {models}, info) {
    return models.Room.findAll();
  }
};
