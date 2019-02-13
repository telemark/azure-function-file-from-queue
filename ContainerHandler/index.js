module.exports = async function (context) {
  const json = JSON.parse(context.bindings.myBlob.toString())
  context.log(json)
}
