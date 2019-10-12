module.exports = function () {
    return {
        plugins: [
            require("babel-plugin-glodash"),
            require("babel-plugin-route-names-chain"),
        ],
    }
}