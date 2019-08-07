const IPFS = require('ipfs')

async function main () {
  const node = await IPFS.create({silent: true})

  const filesAdded = await node.add({
    path: 'hello.txt',
    content: Buffer.from('Hello World 101')
  })

  const fileBuffer = await node.cat(filesAdded[0].hash)

  console.log('Added file contents:', fileBuffer.toString())

}


main()