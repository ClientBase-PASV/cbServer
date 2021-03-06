export const listRoles = ['new', 'verified', 'impersonate'];

const base = [
  'base.create.own',
  'base.get.own',
  'base.search.own',
  'base.update.own',
  'base.delete.own',
];

const client = [
  'client.create.own',
  'client.get.own',
  'client.search.own',
  'client.update.own',
  'client.delete.own',
];

const order = [
  'order.create.own',
  'order.get.own',
  'order.search.own',
  'order.update.own',
  'order.delete.own',
];

const vendor = [
  'vendor.create.own',
  'vendor.get.own',
  'vendor.search.own',
  'vendor.update.own',
  'vendor.delete.own',
];

const service = [
  'service.create.own',
  'service.get.own',
  'service.search.own',
  'service.update.own',
  'service.delete.own',
];

const userAdmin = [
  'user.auth',
  'user.get.all',
  'user.delete.any',
  'user.update.any',
  'user.search',
  'user.impersonate',
  'user.stats',
];

const roles = {
  new: ['user.auth'],

  verified: ['user.auth', ...base, ...client, ...order, ...vendor, ...service],

  admin: [
    // USER
    ...userAdmin,

    // EXAMPLE
    ...base,
  ],

  // impersonate: [
  //   // USER
  //   'user.search',
  //   'user.impersonate',
  //   'user.stats',
  // ],
};

export default roles;
