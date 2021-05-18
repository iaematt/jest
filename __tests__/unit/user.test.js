const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Matheus',
      email: 'matheusbastos@outlook.com',
      password: '12346',
    });

    const compareHash = await bcrypt.compare('12346', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
