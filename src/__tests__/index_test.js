import Test from '../index'

describe('Test', () => {
  let object

  beforeEach(() => {
    object = new Test()
  })

  describe('#contructor', () => {
    it('sets @property to true', () => {
      expect(object.property).to.be.true
    })
  })
})

