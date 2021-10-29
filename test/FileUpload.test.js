const FileUpload = artifacts.require('FileUpload')

const { assert, use, should } = require("chai")

require('chai')
    use(require('chai-as-promised'))
    should()


contract('FileUpload', (accounts) => {
    let fileUpload

    before(async () => {
        fileUpload = await FileUpload.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await fileUpload.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })



    describe('Storage', async () => {
        it('Updates the FileHash', async () => { 
            let fileHash
            fileHash = 'abcd123'
            await fileUpload.set(fileHash)
            const result = await fileUpload.get()
            assert.equal(result, fileHash)

        })
    })


})