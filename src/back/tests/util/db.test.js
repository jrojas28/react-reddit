/**
 * @file Database related tests
 */
import 'babel-polyfill';
import { expect } from 'chai';
import Database, { clear, add, removeById } from '../../util/db';

describe('(util) Database', () => {
  it('contains expected tables', () => {
    expect(Database).to.haveOwnProperty('users');
  });
});

describe('(util) clear', () => {
  it('empties each of the database items', () => {
    // Note, here we will be testing *each* db item
    expect(Database.users.length).to.be.greaterThan(0);
    clear();
    expect(Database.users.length).to.equal(0);
  });
});

describe('(util) add', () => {
  it('adds an element to the database', () => {
    clear();

    add('users', {
      id: 'my-user',
      name: 'Luis',
      email: 'l@mail.com',
    });

    expect(Database.users.length).to.equal(1);
    expect(Database.users[0].id).to.equal('my-user');
    expect(Database.users[0].name).to.equal('Luis');
    expect(Database.users[0].email).to.equal('l@mail.com');
  });

  it('does nothing if missing key or element', () => {
    clear();
    add('users');
    expect(Database.users.length).to.equal(0);

    add(null, { id: 'some-elem '});
    const keys = Object.keys(Database);
    keys.forEach(key => expect(Database[key].length).to.equal(0));
  });

  it('does not create a missing key on the Database', () => {
    clear();
    add('randomKey', { id: 'random-id' });
    expect(Database).not.to.haveOwnProperty('randomKey');
  });
});

describe('(util) removeById', () => {
  it('removes an element from the database specified by ID', () => {
    clear();
    add('users', { id: 'random-id' });
    expect(Database.users.length).to.equal(1);
    removeById('users', 'random-id');
    expect(Database.users.length).to.equal(0);
  });

  it('does nothing if key is not already in DB', () => {
    removeById('randomKey', 1);
    expect(Database).not.to.haveOwnPropertyDescriptor('randomKey');
  });
});
