module.exports={
    port : process.env.port || 3000,
    mongodburl :process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/travel',
    host : '0.0.0.0'
}