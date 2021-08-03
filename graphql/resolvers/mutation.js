const { models } = require('../../models');

module.exports = {
  // User
  createUser (root, { input }, context) {
    return models.User.create(input);
  },

  updateUser (root, { id, input }, context) {
    return models.User.findById(id)
            .then(user => user.update(input));
  },

  removeUser (root, { id }, context) {
    return models.User.findById(id)
            .then(user => user.destroy());
  },

  // Room
  createRoom (root, { input }, context) {
    return models.Room.create(input);
  },

  updateRoom (root, { id, input }, context) {
    return models.Room.findById(id)
            .then(room => room.update(input));
  },

  removeRoom (root, { id }, context) {
    return models.Room.findById(id)
            .then(room => room.destroy());
  },

  // Event
  async createEvent (root, { input, usersIds, roomId }, context) {
    return models.Event.create(input)
      .then(event => {
        event.setRoom(roomId)
        event.setUsers(usersIds)
        
        return event.dataValues.id
      })
      .then(eventId => {
        const event = models.Event.findOne({
                  where: {
                    id: eventId
                  }
                });

        console.log(event)

        return event
      })
  },

  async updateEvent (root, { id, input }, context) {
    return models.Event.update(input, {
      where: {
        id
      }
    })
    .then(() => {
      return models.Event.findOne({
        where: {
          id
        }
      })
    })
  },

  removeUserFromEvent (root, { id, userId }, context) {
    return models.Event.findById(id)
            .then(event => {
              event.removeUser(userId);

              return event;
            });
  },

  addUserToEvent (root, {id, userId}, context) {
    return models.Event.findById(id)
            .then(event => {
              event.addUser(userId);
              return event;
            });
  },

  changeEventRoom (root, { id, roomId }, context) {
    return models.Event.findById(id)
            .then(event => {
              event.setRoom(id);
              return event;
            });
  },

  removeEvent (root, { id }, context) {
    return models.Event.findById(id)
            .then(event => event.destroy());
  }
};
