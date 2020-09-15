const { default: validURL } = require("./validUrl")

const imgPreviewSrc = (url) => validURL(url) || "https://placeholder.pics/svg/300/DEDEDE/555555/add%20an%20image" 

export default imgPreviewSrc