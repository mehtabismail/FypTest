const Patient = artifacts.require('./Patient.sol')

contract ('Patient', (accounts) => {
    let patient

    before(async () => {
        patient = await Patient.deployed()
    })

    describe ('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await patient.address
            assert.notEqual(address, 0x0 )
            assert.notEqual(address, '' )
            assert.notEqual(address, null )
            assert.notEqual(address, undefined )
        } )

        it('has a name', async () => {
            const name = await patient.name()
            assert.equal(name, 'Mehtab Ismail')
        })
    })
})