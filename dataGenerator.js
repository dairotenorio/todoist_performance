const faker = require('faker');

function createContent(userContext, events, done) {
    userContext.vars.content = faker.lorem.sentence(2);
    userContext.vars.due_string = faker.date.soon();
    userContext.vars.due_lang = faker.lorem.word(2);
    userContext.vars.priority = faker.random.number(4);
    userContext.vars.contentUpdated = faker.lorem.sentence(3);
    done();
}

module.exports = {createContent}